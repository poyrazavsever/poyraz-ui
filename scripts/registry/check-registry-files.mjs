#!/usr/bin/env node

import { stat } from "node:fs/promises";
import { isAbsolute, resolve } from "node:path";

import { formatRelative, isInsideDirectory, loadSourceRegistry } from "./source-registry.mjs";

const registryFile = process.argv[2] ?? "registry.json";
const catalog = await loadSourceRegistry({ registryFile });
const failures = [];
let checkedFiles = 0;

for (const { item, definitionFile, sourceDirectory } of catalog.items) {
  for (const file of item.files ?? []) {
    checkedFiles += 1;

    if (typeof file.path !== "string" || file.path.trim() === "") {
      failures.push(`${item.name}: file.path must be a non-empty string`);
      continue;
    }

    if (isAbsolute(file.path)) {
      failures.push(`${item.name}: source path must be relative (${file.path})`);
      continue;
    }

    if (Object.hasOwn(file, "content")) {
      failures.push(
        `${item.name}: source registry files must not contain generated content (${file.path})`,
      );
    }

    const sourceFile = resolve(sourceDirectory, file.path);

    if (!isInsideDirectory(catalog.rootDirectory, sourceFile)) {
      failures.push(`${item.name}: source path escapes the repository (${file.path})`);
      continue;
    }

    try {
      const sourceStat = await stat(sourceFile);

      if (!sourceStat.isFile()) {
        failures.push(
          `${item.name}: source is not a file (${formatRelative(catalog.rootDirectory, sourceFile)})`,
        );
      }
    } catch {
      failures.push(
        `${item.name}: source file does not exist (${formatRelative(catalog.rootDirectory, sourceFile)}) declared in ${formatRelative(catalog.rootDirectory, definitionFile)}`,
      );
    }
  }
}

if (failures.length > 0) {
  console.error("Registry source file validation failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(
  `Registry source files are valid (${checkedFiles} file${checkedFiles === 1 ? "" : "s"} checked).`,
);
