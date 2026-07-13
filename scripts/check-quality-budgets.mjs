#!/usr/bin/env node

import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { gzipSync } from "node:zlib";

const budgets = JSON.parse(await readFile("quality-budgets.json", "utf8"));
const manifest = JSON.parse(await readFile("package.json", "utf8"));
const failures = [];

const runtimeCount = Object.keys(manifest.dependencies ?? {}).length;
if (runtimeCount > budgets.maxRuntimeDependencies) {
  failures.push(`Runtime dependencies: ${runtimeCount} > ${budgets.maxRuntimeDependencies}`);
}

let maxRegistryDependencies = 0;
for (const file of await readdir("public/r")) {
  if (!file.endsWith(".json") || file === "registry.json") continue;
  const item = JSON.parse(await readFile(resolve("public/r", file), "utf8"));
  maxRegistryDependencies = Math.max(maxRegistryDependencies, item.dependencies?.length ?? 0);
}
if (maxRegistryDependencies > budgets.maxRegistryDependenciesPerItem) {
  failures.push(
    `Registry dependencies per item: ${maxRegistryDependencies} > ${budgets.maxRegistryDependenciesPerItem}`,
  );
}

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else if (/\.(?:cjs|js)$/.test(entry.name)) files.push(path);
  }
  return files;
}

const bundles = await walk("dist");
const gzipSizes = await Promise.all(
  bundles.map(async (file) => ({ file, bytes: gzipSync(await readFile(file)).byteLength })),
);
const totalGzip = gzipSizes.reduce((total, entry) => total + entry.bytes, 0);
const largest = gzipSizes.sort((left, right) => right.bytes - left.bytes)[0];

if (totalGzip > budgets.maxDistGzipBytes) {
  failures.push(`Total dist gzip: ${totalGzip} > ${budgets.maxDistGzipBytes} bytes`);
}
if (largest?.bytes > budgets.maxChunkGzipBytes) {
  failures.push(
    `Largest chunk gzip (${largest.file}): ${largest.bytes} > ${budgets.maxChunkGzipBytes} bytes`,
  );
}

if (failures.length) {
  console.error("Quality budget check failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Quality budgets passed (runtime deps ${runtimeCount}/${budgets.maxRuntimeDependencies}, total gzip ${totalGzip}/${budgets.maxDistGzipBytes}, largest chunk ${largest?.bytes ?? 0}/${budgets.maxChunkGzipBytes}).`,
);
