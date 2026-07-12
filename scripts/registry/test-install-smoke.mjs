#!/usr/bin/env node

import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { loadGeneratedRegistry, materializeRegistry } from "./install-smoke-lib.mjs";

const items = await loadGeneratedRegistry();
const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-registry-smoke-"));
let fileCount = 0;

try {
  for (const name of [...items.keys()].sort()) {
    const result = await materializeRegistry({
      items,
      roots: [name],
      destination: join(temporaryRoot, name),
    });
    fileCount += result.written.length;
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

console.log(
  `Registry install smoke passed (${items.size} items, ${fileCount} dependency-expanded files).`,
);
