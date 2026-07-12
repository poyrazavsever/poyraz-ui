#!/usr/bin/env node

import { readFile, readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["components", "app"];
const aliases = [
  "animate-in",
  "animate-out",
  "fade-in",
  "fade-in-0",
  "fade-out",
  "fade-out-0",
  "zoom-in-95",
  "zoom-out-95",
  "animate-accordion-down",
  "animate-accordion-up",
];
const slideAlias = /(?<!poyraz-)\bslide-(?:in|out)-(?:from|to)-[^\s"'`]+/g;

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? files(path) : [path];
    }),
  );
  return nested.flat();
}

const report = new Map();
for (const root of roots) {
  for (const file of await files(root)) {
    if (![".ts", ".tsx", ".css"].includes(extname(file))) continue;
    const source = await readFile(file, "utf8");
    const found = new Set([
      ...aliases.filter((alias) => new RegExp(`(?<!poyraz-)\\b${alias}\\b`).test(source)),
      ...(source.match(slideAlias) ?? []).filter((name) => !name.includes("poyraz-")),
    ]);
    if (found.size) report.set(relative(process.cwd(), file), [...found].sort());
  }
}

const total = [...report.values()].reduce((sum, names) => sum + names.length, 0);
console.log(`Compatibility motion aliases: ${total} usages in ${report.size} first-party files.`);
for (const [file, names] of report) console.log(`- ${file}: ${names.join(", ")}`);
console.log("Native Poyraz utilities are the default for new code; aliases remain migration-only.");
