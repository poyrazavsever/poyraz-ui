#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { assertReleaseRequest, parseArguments, readJson } from "./release-lib.mjs";

async function filesBelow(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(root, entry.name);
      return entry.isDirectory() ? filesBelow(path) : [path];
    }),
  );
  return nested.flat().sort();
}

export async function buildReleaseArtifacts({
  version,
  channel,
  outputDirectory = "release-artifacts",
  includePackReport = true,
} = {}) {
  const config = await readJson("release.config.json");
  const packageManifest = await readJson("package.json");
  const registry = await readJson("public/r/registry.json");
  assertReleaseRequest(config, { version, channel });

  const output = resolve(outputDirectory);
  const registryOutput = join(output, "registry");
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(resolve("public", "r"), registryOutput, { recursive: true });
  await cp(resolve("docs", "v3", "releases", `v${version}.md`), join(output, "RELEASE_NOTES.md"));

  const releaseManifest = {
    schemaVersion: 1,
    product: config.product,
    version,
    channel,
    tag: `${config.releaseTagPrefix}${version}`,
    registry: {
      namespace: config.registry.namespace,
      template: config.registry.template,
      items: registry.items.length,
    },
    npm: {
      package: packageManifest.name,
      version: packageManifest.version,
      role: config.npm.role,
      publishV3Package: false,
    },
  };
  await writeFile(
    join(output, "release.json"),
    `${JSON.stringify(releaseManifest, null, 2)}\n`,
    "utf8",
  );

  if (includePackReport) {
    const npmCache = join(output, ".npm-cache");
    const packCommand = process.platform === "win32" ? (process.env.ComSpec ?? "cmd.exe") : "npm";
    const packArguments =
      process.platform === "win32"
        ? ["/d", "/s", "/c", "npm.cmd", "pack", "--dry-run", "--json", "--ignore-scripts"]
        : ["pack", "--dry-run", "--json", "--ignore-scripts"];
    const report = execFileSync(packCommand, packArguments, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, npm_config_cache: npmCache },
    });
    await rm(npmCache, { recursive: true, force: true });
    await writeFile(join(output, "npm-pack-dry-run.json"), report, "utf8");
  }

  const artifactFiles = (await filesBelow(output)).filter(
    (path) => basename(path) !== "SHA256SUMS.txt",
  );
  const checksums = [];
  for (const path of artifactFiles) {
    const digest = createHash("sha256")
      .update(await readFile(path))
      .digest("hex");
    checksums.push(`${digest}  ${relative(output, path).replaceAll("\\", "/")}`);
  }
  await writeFile(join(output, "SHA256SUMS.txt"), `${checksums.join("\n")}\n`, "utf8");

  return { output, files: artifactFiles.length + 1, registryItems: registry.items.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = parseArguments(process.argv.slice(2));
  const result = await buildReleaseArtifacts({
    version: String(args.version ?? "3.0.0"),
    channel: String(args.channel ?? "stable"),
    outputDirectory: String(args.output ?? "release-artifacts"),
  });
  console.log(
    `Release artifacts created (${result.registryItems} items, ${result.files} files): ${result.output}`,
  );
}
