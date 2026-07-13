import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const stableVersionPattern = /^\d+\.\d+\.\d+$/;
const prereleaseVersionPattern = /^\d+\.\d+\.\d+-(alpha|beta|rc)\.\d+$/;

export async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

export function parseArguments(argv) {
  const parsed = {};
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--") continue;
    if (!argument.startsWith("--")) continue;

    const normalized = argument.slice(2);
    const separator = normalized.indexOf("=");
    if (separator !== -1) {
      parsed[normalized.slice(0, separator)] = normalized.slice(separator + 1);
      continue;
    }

    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      parsed[normalized] = next;
      index += 1;
    } else {
      parsed[normalized] = true;
    }
  }
  return parsed;
}

export function channelForVersion(version) {
  if (stableVersionPattern.test(version)) return "stable";
  const match = version.match(prereleaseVersionPattern);
  return match?.[1] ?? null;
}

export function distTagForChannel(config, channel) {
  return channel === "stable" ? config.npm.stableTag : config.npm.prereleaseTag;
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

  const targetMajor = Number(config.targetVersion.split(".")[0]);
  if (
    config.npm.publishV3Package !== true ||
    config.npm.role !== "primary-v3-runtime" ||
    config.npm.expectedMajor !== targetMajor
  ) {
    throw new Error("V3 must publish the poyraz-ui runtime package and source registry together.");
  }

  if (
    config.npm.stableTag !== "latest" ||
    config.npm.prereleaseTag !== "next" ||
    config.npm.maintenanceTag !== "legacy-v2"
  ) {
    throw new Error("The npm latest, next and legacy-v2 dist-tag contract is invalid.");
  }

  if (channel === "stable" && version !== config.targetVersion) {
    throw new Error(
      `Stable release must match targetVersion ${config.targetVersion}; found ${version}.`,
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
  enforcePackageVersion = true,
} = {}) {
  const config = await readJson("release.config.json");
  const packageManifest = await readJson("package.json");
  const registryRoot = await readJson("registry.json");
  const generatedRegistry = await readJson("public/r/registry.json");
  const milestone = assertReleaseRequest(config, { version, channel });
  const errors = [];

  if (packageManifest.name !== config.npm.package) {
    errors.push(
      `Release package must be named ${config.npm.package}; found ${packageManifest.name}.`,
    );
  }
  if (enforcePackageVersion && packageManifest.version !== version) {
    errors.push(
      `Release commit must set ${config.npm.package} to ${version}; found ${packageManifest.version}.`,
    );
  }
  if (
    !enforcePackageVersion &&
    packageManifest.version !== version &&
    packageManifest.version !== config.npm.legacyVersion
  ) {
    errors.push(
      `Pre-release diagnostics allow only target ${version} or declared legacy ${config.npm.legacyVersion}; found ${packageManifest.version}.`,
    );
  }
  if (!packageManifest.description?.includes("source registry")) {
    errors.push("package.json description must describe the npm + source registry V3 contract.");
  }
  for (const keyword of ["radix-ui", "shadcn", "registry", "glassmorphism"]) {
    if (!packageManifest.keywords?.includes(keyword)) {
      errors.push(`package.json keywords must include ${keyword}.`);
    }
  }
  for (const exportPath of [".", "./atoms", "./molecules", "./organisms", "./themes"]) {
    const entry = packageManifest.exports?.[exportPath];
    if (!entry?.import?.default || !entry?.import?.types || !entry?.require?.default) {
      errors.push(`package.json export ${exportPath} must expose ESM, CJS and types.`);
    }
  }
  if (packageManifest.exports?.["./preset.css"] !== "./src/preset.css") {
    errors.push('package.json must expose "./preset.css" as ./src/preset.css.');
  }
  for (const file of ["dist", "src/preset.css", "bin", "README.md", "CHANGELOG.md", "LICENSE"]) {
    if (!packageManifest.files?.includes(file))
      errors.push(`package.json files must include ${file}.`);
  }
  if (
    !Array.isArray(packageManifest.sideEffects) ||
    !packageManifest.sideEffects.includes("**/*.css")
  ) {
    errors.push("package.json sideEffects must preserve CSS imports.");
  }
  if (!packageManifest.engines?.node?.includes("22") || !packageManifest.engines?.pnpm) {
    errors.push("package.json engines must declare the Node 22 / pnpm release policy.");
  }
  if (!config.npm.tarball?.maxSizeBytes || !config.npm.tarball?.maxUnpackedSizeBytes) {
    errors.push("release.config.json must declare npm tarball size budgets.");
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
  const stableReleaseHeadingPattern = new RegExp(
    `^## \\[${version.replaceAll(".", "\\.")}\\] - \\d{4}-\\d{2}-\\d{2}$`,
    "m",
  );
  if (
    !changelog.includes(`## [${version}] - Unreleased`) &&
    !stableReleaseHeadingPattern.test(changelog)
  ) {
    errors.push(`CHANGELOG.md is missing the [${version}] release section.`);
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
    packageVersionReady: packageManifest.version === version,
    npmDistTag: distTagForChannel(config, channel),
    releaseNotesPath,
  };
}
