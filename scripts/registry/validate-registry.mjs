#!/usr/bin/env node

import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { loadRegistry } from "shadcn/registry";
import { registryItemSchema, registrySchema } from "shadcn/schema";

import { loadSourceRegistry, readJsonFile } from "./source-registry.mjs";
import { buildRegistryThemeCssVars } from "./theme-registry.mjs";

const registryFile = process.argv[2] ?? "registry.json";
const outputDirectory = resolve(
  process.cwd(),
  process.env.POYRAZ_REGISTRY_OUTPUT ?? "public/r",
);

function reportSchemaFailure(label, error) {
  const details = error.issues
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join(".") : "<root>";
      return `  - ${path}: ${issue.message}`;
    })
    .join("\n");

  throw new Error(`${label} does not match the official shadcn schema:\n${details}`);
}

const source = await loadSourceRegistry({ registryFile });
const rootDefinition = source.definitions.find(
  ({ definitionFile }) => definitionFile === source.rootFile,
);
const rootResult = registrySchema.safeParse(rootDefinition.definition);

if (!rootResult.success) {
  reportSchemaFailure(source.rootFile, rootResult.error);
}

for (const { item, definitionFile } of source.items) {
  const result = registryItemSchema.safeParse(item);
  if (!result.success) {
    reportSchemaFailure(
      `${definitionFile} item "${item.name ?? "<unnamed>"}"`,
      result.error,
    );
  }
}

const flattenedRegistry = await loadRegistry({
  cwd: process.cwd(),
  registryFile,
});
const flattenedResult = registrySchema.safeParse(flattenedRegistry);

if (!flattenedResult.success) {
  reportSchemaFailure("Flattened source registry", flattenedResult.error);
}

const themeItem = flattenedRegistry.items.find(
  ({ name }) => name === "poyraz-theme",
);
const expectedThemeCssVars = await buildRegistryThemeCssVars();

if (!themeItem) {
  throw new Error('Flattened registry is missing the required "poyraz-theme" item.');
}

if (JSON.stringify(themeItem.cssVars) !== JSON.stringify(expectedThemeCssVars)) {
  throw new Error(
    "Registry theme is stale. Run: node scripts/registry/sync-theme-registry.mjs",
  );
}

const requiredThemeCssRules = [
  "@layer components",
  "@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))",
  "@supports not ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))",
  "@media (prefers-reduced-transparency: reduce)",
];

for (const rule of requiredThemeCssRules) {
  if (!themeItem.css?.[rule]) {
    throw new Error(`Registry theme is missing required glass CSS rule: ${rule}`);
  }
}

let generatedCount = 0;

if (existsSync(outputDirectory)) {
  const generatedFiles = (await readdir(outputDirectory, {
    withFileTypes: true,
  }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort();

  for (const filename of generatedFiles) {
    const generatedItem = await readJsonFile(resolve(outputDirectory, filename));
    const schema = filename === "registry.json" ? registrySchema : registryItemSchema;
    const result = schema.safeParse(generatedItem);

    if (!result.success) {
      reportSchemaFailure(`Generated registry item ${filename}`, result.error);
    }

    generatedCount += 1;
  }
}

const generatedSummary = existsSync(outputDirectory)
  ? `${generatedCount} generated JSON document${generatedCount === 1 ? "" : "s"}`
  : "generated output not present (skipped)";

console.log(
  `Registry schema is valid (${source.definitions.length} source registries, ${flattenedRegistry.items.length} flattened items, ${generatedSummary}).`,
);
