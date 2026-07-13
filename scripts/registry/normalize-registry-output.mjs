#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("public/r");
const entries = await readdir(outputDirectory, { withFileTypes: true });
let normalized = 0;

for (const entry of entries) {
  if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
  const path = resolve(outputDirectory, entry.name);
  const source = await readFile(path, "utf8");
  const document = JSON.parse(source);

  for (const file of document.files ?? []) {
    if (typeof file.content !== "string" || !file.content.includes("\r\n")) continue;
    file.content = file.content.replaceAll("\r\n", "\n");
  }

  const output = JSON.stringify(document, null, 2);
  if (output !== source) {
    await writeFile(path, output);
    normalized += 1;
  }
}

console.log(`Registry output normalized (${normalized} documents updated).`);
