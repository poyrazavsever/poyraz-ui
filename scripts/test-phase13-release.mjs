#!/usr/bin/env node

import assert from "node:assert/strict";
import { createServer } from "node:http";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { buildReleaseArtifacts } from "./release/build-artifacts.mjs";
import { readJson, runReleasePreflight } from "./release/release-lib.mjs";
import { smokeRegistry } from "./release/smoke-release.mjs";

const config = await readJson("release.config.json");
const preflight = await runReleasePreflight({
  version: config.targetVersion,
  channel: "stable",
  allowDirty: true,
});

assert.equal(preflight.tag, "v3.0.0");
assert.ok(preflight.registryItems >= 71);
assert.equal(preflight.packageVersion.split(".")[0], "2");
assert.equal(config.npm.publishV3Package, false);
assert.equal(config.npm.maintenanceTag, "legacy-v2");
assert.deepEqual(
  config.milestones.map((milestone) => milestone.version),
  ["3.0.0-alpha.1", "3.0.0-alpha.2", "3.0.0-beta.1", "3.0.0-beta.2", "3.0.0-rc.1", "3.0.0"],
);

const workflow = await readFile(".github/workflows/release.yml", "utf8");
for (const contract of [
  "workflow_dispatch:",
  "environment: v3-production",
  "contents: write",
  "id-token: write",
  "pnpm release:preflight",
  "pnpm release:smoke",
  "legacy-v2",
]) {
  assert.ok(workflow.includes(contract), `Release workflow is missing: ${contract}`);
}

const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-release-test-"));
try {
  const artifacts = await buildReleaseArtifacts({
    version: config.targetVersion,
    channel: "stable",
    outputDirectory: join(temporaryRoot, "artifacts"),
    includePackReport: false,
  });
  assert.ok(artifacts.files >= config.registry.minimumItems + 3);
  assert.equal(artifacts.registryItems, preflight.registryItems);

  const publicRoot = resolve("public", "r");
  const server = createServer(async (request, response) => {
    const relativePath = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    ).replace(/^\/+/, "");
    if (!relativePath.endsWith(".json") || relativePath.includes("..")) {
      response.writeHead(404).end();
      return;
    }
    try {
      const body = await readFile(resolve(publicRoot, relativePath));
      response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      response.end(body);
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise((resolvePromise) => server.listen(0, "127.0.0.1", resolvePromise));
  try {
    const address = server.address();
    assert.ok(address && typeof address !== "string");
    const smoke = await smokeRegistry({
      baseUrl: `http://127.0.0.1:${address.port}`,
      minimumItems: config.registry.minimumItems,
      smokeItems: config.registry.smokeItems,
    });
    assert.equal(smoke.checked, config.registry.smokeItems.length);
  } finally {
    await new Promise((resolvePromise, reject) =>
      server.close((error) => (error ? reject(error) : resolvePromise())),
    );
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

const roadmap = await readFile("docs/v3-registry-redesign-roadmap.md", "utf8");
for (let task = 1; task <= 12; task += 1) {
  assert.ok(roadmap.includes(`- [x] \`P13-${String(task).padStart(3, "0")}\``));
}

console.log("Phase 13 release contract, artifacts, and endpoint smoke passed.");
