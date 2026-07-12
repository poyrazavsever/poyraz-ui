#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { relative } from "node:path";

import { collectSourceFiles } from "./file-search.mjs";

const failOnLegacy = process.argv.includes("--fail-on-legacy");
const inputs = process.argv.filter((value) => !value.startsWith("--"));
const files = await collectSourceFiles(inputs.length > 0 ? inputs : ["src", "app", "components"]);
const patterns = [
  ["v2-preset", /poyraz-ui\/preset\.css/g],
  ["runtime-provider", /reactive-switcher/g],
  ["runtime-theme-object", /poyraz(?:Light|Dark)?Themes?/g],
  ["legacy-font-token", /--font-(?:sans|secondary)\b/g],
  ["hardcoded-glass", /backdrop-filter\s*:[^;]+|rgba?\([^)]*\/\s*0\.[0-9]+\)/g],
];
const findings = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const [kind, pattern] of patterns) {
    for (const match of source.matchAll(pattern)) {
      const line = source.slice(0, match.index).split("\n").length;
      findings.push({ file: relative(process.cwd(), file), kind, line, value: match[0] });
    }
  }
}

for (const finding of findings) {
  console.log(`${finding.file}:${finding.line} [${finding.kind}] ${finding.value}`);
}
console.log(
  `Theme migration audit: ${findings.length} review item${findings.length === 1 ? "" : "s"}.`,
);
if (failOnLegacy && findings.length > 0) process.exit(1);
