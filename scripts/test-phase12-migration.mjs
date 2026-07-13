#!/usr/bin/env node

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { transformV2Imports } from "./migration/codemod-lib.mjs";
import { buildV2ExportMap } from "./migration/export-map.mjs";

const map = await buildV2ExportMap();
const migration = JSON.parse(await readFile("src/migration-map.json", "utf8"));
const generatedRegistry = JSON.parse(await readFile("public/r/registry.json", "utf8"));
const generatedNames = new Set(generatedRegistry.items.map((item) => item.name));
const input = await readFile("fixtures/migration/codemod/input.tsx", "utf8");
const result = transformV2Imports(input, "input.tsx", map, () => true);

assert.equal(result.changed, true);
assert.equal(result.transformedSpecifiers, 4);
assert.match(result.output, /from "@\/components\/ui\/atoms\/button"/);
assert.match(result.output, /from "@\/components\/ui\/atoms\/card"/);
assert.match(result.output, /from "@\/components\/ui\/molecules\/dialog"/);
assert.match(result.output, /UnknownV2Export.*from "poyraz-ui\/atoms"/s);

const noTargets = transformV2Imports(input, "input.tsx", map, () => false);
assert.equal(noTargets.changed, false);
assert.equal(noTargets.output, input);

assert.ok(migration.componentMappings.length >= 50);
for (const item of migration.componentMappings) {
  assert.ok(
    generatedNames.has(item.item),
    `Missing registry item for migration mapping: ${item.item}`,
  );
}
assert.equal(migration.support.endOfMaintenance, "2027-06-30");

const guide = await readFile("docs/v3/migration-v2-to-v3.md", "utf8");
for (const section of [
  "Provider-independent V3 example",
  "Next.js Recipe with next-themes",
  "Codemod feasibility decision",
  "Overwrite Policy",
  "Rollback",
]) {
  assert.match(guide, new RegExp(section));
}

console.log("Phase 12 migration codemod contract passed.");
