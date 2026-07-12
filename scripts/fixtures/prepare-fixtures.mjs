#!/usr/bin/env node

import { resolve } from "node:path";

import { loadGeneratedRegistry, materializeRegistry } from "../registry/install-smoke-lib.mjs";

const items = await loadGeneratedRegistry();
const roots = [...items.keys()].sort();

for (const fixture of ["next", "vite"]) {
  const result = await materializeRegistry({
    items,
    roots,
    destination: resolve("fixtures", fixture, ".registry"),
  });
  console.log(
    `${fixture}: installed ${result.order.length} items and ${result.written.length} files.`,
  );
}
