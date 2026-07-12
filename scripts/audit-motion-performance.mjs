#!/usr/bin/env node

import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  }))).flat();
}

const findings = { transitionAll: [], shadow: [], borderColor: [], animatedBlur: [] };
for (const root of ["components", "src"]) {
  for (const file of await files(root)) {
    if (![".ts", ".tsx", ".css"].includes(extname(file))) continue;
    const source = await readFile(file, "utf8");
    const path = relative(process.cwd(), file);
    if (/transition-all/.test(source)) findings.transitionAll.push(path);
    if (/transition[^\n"']*box-shadow|transition-\[[^\]]*box-shadow/.test(source)) findings.shadow.push(path);
    if (/transition[^\n"']*border-color|transition-\[[^\]]*border-color/.test(source)) findings.borderColor.push(path);
    const keyframes = source.match(/@keyframes[^{}]+\{(?:[^{}]|\{[^{}]*\})*\}/g) ?? [];
    if (keyframes.some((block) => /(?:backdrop-filter|\bfilter\s*:)/.test(block))) findings.animatedBlur.push(path);
  }
}

console.log("Motion repaint audit");
console.log(`- transition-all candidates: ${findings.transitionAll.length}`);
console.log(`- shadow transition candidates: ${findings.shadow.length}`);
console.log(`- border-color transition candidates: ${findings.borderColor.length} (color-only, no geometry)`);
console.log(`- keyframes animating blur/filter: ${findings.animatedBlur.length}`);
for (const [label, paths] of Object.entries(findings)) {
  if (paths.length) console.log(`  ${label}: ${[...new Set(paths)].join(", ")}`);
}
if (findings.animatedBlur.length || findings.transitionAll.length || findings.shadow.length) {
  console.error("Motion performance audit failed: broad transitions, shadow interpolation or animated blur/filter found.");
  process.exitCode = 1;
}
