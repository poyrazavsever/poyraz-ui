#!/usr/bin/env node

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { buildReleaseArtifacts } from "./release/build-artifacts.mjs";
import {
  assertReleaseRequest,
  distTagForChannel,
  readJson,
  runReleasePreflight,
} from "./release/release-lib.mjs";

const config = await readJson("release.config.json");
assert.equal(config.schemaVersion, 2);
assert.equal(config.product, "poyraz-ui");
assert.equal(config.targetVersion, "3.0.0");
assert.equal(config.npm.package, "poyraz-ui");
assert.equal(config.npm.role, "primary-v3-runtime");
assert.equal(config.npm.expectedMajor, 3);
assert.equal(config.npm.publishV3Package, true);
assert.equal(config.npm.publishWorkflowReady, true);
assert.equal(config.npm.versionPolicy, "release-commit");
assert.equal(config.npm.stableTag, "latest");
assert.equal(config.npm.prereleaseTag, "next");
assert.equal(config.npm.maintenanceTag, "legacy-v2");
assert.equal(distTagForChannel(config, "stable"), "latest");
assert.equal(distTagForChannel(config, "rc"), "next");

assert.equal(
  assertReleaseRequest(config, { version: "3.0.0", channel: "stable" }).status,
  "candidate",
);
assert.equal(
  assertReleaseRequest(config, { version: "3.0.0-rc.1", channel: "rc" }).status,
  "planned",
);
assert.throws(
  () => assertReleaseRequest(config, { version: "3.0.0", channel: "rc" }),
  /belongs to stable/,
);

const strict = await runReleasePreflight({
  version: config.targetVersion,
  channel: "stable",
  allowDirty: true,
  checkGit: false,
});
assert.equal(strict.packageVersionReady, true);

const diagnostic = await runReleasePreflight({
  version: config.targetVersion,
  channel: "stable",
  allowDirty: true,
  checkGit: false,
  enforcePackageVersion: false,
});
assert.equal(diagnostic.packageVersionReady, true);
assert.equal(diagnostic.npmDistTag, "latest");

const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-phase14-"));
try {
  await buildReleaseArtifacts({
    version: config.targetVersion,
    channel: "stable",
    outputDirectory: temporaryRoot,
    includePackReport: false,
  });
  const manifest = JSON.parse(await readFile(join(temporaryRoot, "release.json"), "utf8"));
  assert.equal(manifest.product, "poyraz-ui");
  assert.equal(manifest.npm.targetVersion, "3.0.0");
  assert.equal(manifest.npm.role, "primary-v3-runtime");
  assert.equal(manifest.npm.distTag, "latest");
  assert.equal(manifest.npm.publishV3Package, true);
  assert.equal(manifest.npm.publishWorkflowReady, true);
  assert.equal(manifest.npm.packageVersionReady, true);
  assert.deepEqual(manifest.npm.legacy, { version: "2.1.0", distTag: "legacy-v2" });
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

const activeContracts = {
  "docs/v3/release-runbook.md": ["poyraz-ui@3.x", "source registry", "release-commit"],
  "docs/v3/releases/v3.0.0.md": ["Npm runtime package", "Own the source"],
  "docs/v3/migration-v2-to-v3.md": ["Npm package upgrade", "Own component source"],
  "README.md": ["Npm package", "Own the source"],
  "CONTRIBUTING.md": ["npm runtime package", "Faz 18"],
  "docs/v3/audits/phase14-distribution-contract.md": ["Güncellenen aktif sözleşmeler"],
};

for (const [path, contracts] of Object.entries(activeContracts)) {
  const source = await readFile(path, "utf8");
  for (const contract of contracts) {
    assert.ok(source.includes(contract), `${path} is missing distribution contract: ${contract}`);
  }
}

const releaseLibrary = await readFile("scripts/release/release-lib.mjs", "utf8");
assert.doesNotMatch(releaseLibrary, /publishV3Package !== false/);
assert.doesNotMatch(releaseLibrary, /runtime package must remain legacy-v2/);

const workflow = await readFile(".github/workflows/release.yml", "utf8");
assert.match(workflow, /Publish distribution release/);
assert.match(workflow, /publishWorkflowReady/);
assert.match(workflow, /Faz 16 npm publish workflow is not ready/);

const roadmap = await readFile("docs/v3-registry-redesign-roadmap.md", "utf8");
for (let task = 1; task <= 24; task += 1) {
  assert.ok(
    roadmap.includes(`- [x] \`P14-${String(task).padStart(3, "0")}\``),
    `Roadmap is missing completed P14-${String(task).padStart(3, "0")}`,
  );
}

const cli = spawnSync(process.execPath, ["bin/cli.mjs", "init", "--mode", "registry"], {
  encoding: "utf8",
});
assert.equal(cli.status, 0, cli.stderr);
assert.match(cli.stdout, /Source registry mode/);
assert.match(cli.stdout, /@poyraz\/button/);
assert.doesNotMatch(cli.stdout, /Added preset\.css import/);

console.log("Phase 14 npm + source registry distribution contract passed.");
