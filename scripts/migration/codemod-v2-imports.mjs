#!/usr/bin/env node

import { access, readFile, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";

import { transformV2Imports } from "./codemod-lib.mjs";
import { buildV2ExportMap } from "./export-map.mjs";
import { collectSourceFiles } from "./file-search.mjs";

const write = process.argv.includes("--write");
const rootArgument = process.argv.find((value) => value.startsWith("--root="));
const root = resolve(rootArgument?.slice("--root=".length) ?? process.cwd());
const inputs = process.argv.filter((value) => !value.startsWith("--"));
const files = await collectSourceFiles(
  inputs.length > 0 ? inputs : ["src", "app", "components"],
  root,
);
const exportMap = await buildV2ExportMap(process.cwd());
const installedTargets = new Set();

for (const symbols of exportMap.values()) {
  for (const { target } of symbols.values()) {
    const file = resolve(root, `${target.slice(2)}.tsx`);
    try {
      await access(file);
      installedTargets.add(target);
    } catch {}
  }
}

let changedFiles = 0;
let transformedSpecifiers = 0;
const skipped = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const result = transformV2Imports(source, file, exportMap, (target) =>
    installedTargets.has(target),
  );
  if (!result.changed) continue;
  changedFiles += 1;
  transformedSpecifiers += result.transformedSpecifiers;
  skipped.push(...result.skipped.map((message) => `${relative(root, file)}: ${message}`));
  console.log(`${write ? "WRITE" : "WOULD WRITE"} ${relative(root, file)}`);
  if (write) await writeFile(file, result.output, "utf8");
}

for (const message of skipped) console.warn(`SKIP ${message}`);
console.log(
  `${write ? "Codemod" : "Codemod dry-run"}: ${transformedSpecifiers} specifiers in ${changedFiles} files; ${skipped.length} skipped.`,
);
