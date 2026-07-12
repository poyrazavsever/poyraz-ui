import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const stableVersionPattern = /^\d+\.\d+\.\d+$/;
const prereleaseVersionPattern = /^\d+\.\d+\.\d+-(alpha|beta|rc)\.\d+$/;

export async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

export function parseArguments(argv) {
  return Object.fromEntries(
    argv.map((argument) => {
      const normalized = argument.replace(/^--/, "");
      const separator = normalized.indexOf("=");
      return separator === -1
        ? [normalized, true]
        : [normalized.slice(0, separator), normalized.slice(separator + 1)];
    }),
  );
}

export function channelForVersion(version) {
  if (stableVersionPattern.test(version)) return "stable";
  const match = version.match(prereleaseVersionPattern);
  return match?.[1] ?? null;
}

export function assertReleaseRequest(config, { version, channel }) {
  const detectedChannel = channelForVersion(version);
  if (!detectedChannel) throw new Error(`Unsupported release version: ${version}`);
  if (detectedChannel !== channel) {
    throw new Error(`Version ${version} belongs to ${detectedChannel}, not ${channel}.`);
  }

  const milestone = config.milestones.find((entry) => entry.version === version);
  if (!milestone || milestone.channel !== channel) {
    throw new Error(`Release ${version} (${channel}) is not declared in release.config.json.`);
  }

  if (config.npm.publishV3Package !== false || config.npm.role !== "legacy-v2") {
    throw new Error(
      "V3 must remain registry-first and the npm runtime package must remain legacy-v2.",
    );
  }

  return milestone;
}

async function assertFile(path, label) {
  try {
    await access(path);
  } catch {
    throw new Error(`Missing ${label}: ${path}`);
  }
}

function gitOutput(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

export async function runReleasePreflight({
  version,
  channel,
  allowDirty = false,
  checkGit = true,
} = {}) {
  const config = await readJson("release.config.json");
  const packageManifest = await readJson("package.json");
  const registryRoot = await readJson("registry.json");
  const generatedRegistry = await readJson("public/r/registry.json");
  const milestone = assertReleaseRequest(config, { version, channel });
  const errors = [];

  const packageMajor = Number(packageManifest.version.split(".")[0]);
  if (packageManifest.name !== config.npm.package || packageMajor !== config.npm.expectedMajor) {
    errors.push(
      `Legacy package must remain ${config.npm.package}@${config.npm.expectedMajor}.x; found ${packageManifest.name}@${packageManifest.version}.`,
    );
  }

  if (
    registryRoot.name !== config.registry.namespace.replace(/^@/, "") ||
    registryRoot.homepage !== config.registry.homepage
  ) {
    errors.push("registry.json does not match the production namespace/homepage contract.");
  }

  if (generatedRegistry.items.length < config.registry.minimumItems) {
    errors.push(
      `Generated registry has ${generatedRegistry.items.length} items; expected at least ${config.registry.minimumItems}.`,
    );
  }

  const generatedNames = new Set(generatedRegistry.items.map((item) => item.name));
  for (const item of config.registry.smokeItems) {
    if (!generatedNames.has(item)) errors.push(`Missing release smoke item: ${item}`);
    await assertFile(resolve("public", "r", `${item}.json`), `generated item ${item}`);
  }

  const releaseNotesPath = resolve("docs", "v3", "releases", `v${version}.md`);
  await Promise.all([
    assertFile(releaseNotesPath, "release notes"),
    assertFile("docs/v3/migration-v2-to-v3.md", "migration guide"),
    assertFile("app/docs/legacy/v2/page.tsx", "legacy V2 docs"),
    assertFile(".github/workflows/release.yml", "release workflow"),
  ]);

  const changelog = await readFile("CHANGELOG.md", "utf8");
  if (!changelog.includes(`## [${version}] - Unreleased`)) {
    errors.push(`CHANGELOG.md is missing the [${version}] - Unreleased section.`);
  }

  if (checkGit) {
    try {
      execFileSync("git", ["diff", "--check"], { stdio: "pipe" });
    } catch {
      errors.push("git diff --check failed.");
    }

    const status = gitOutput(["status", "--porcelain", "--untracked-files=all"]);
    if (status && !allowDirty) {
      errors.push("The release worktree is dirty. Commit generated and source changes first.");
    }

    const tag = `${config.releaseTagPrefix}${version}`;
    if (gitOutput(["tag", "--list", tag])) errors.push(`Tag ${tag} already exists.`);
  }

  if (errors.length > 0) throw new Error(errors.map((error) => `- ${error}`).join("\n"));

  return {
    version,
    channel,
    tag: `${config.releaseTagPrefix}${version}`,
    milestoneStatus: milestone.status,
    registryItems: generatedRegistry.items.length,
    packageVersion: packageManifest.version,
    releaseNotesPath,
  };
}
