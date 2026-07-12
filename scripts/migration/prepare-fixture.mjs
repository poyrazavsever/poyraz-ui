#!/usr/bin/env node

import { resolve } from "node:path";

import { loadGeneratedRegistry, materializeRegistry } from "../registry/install-smoke-lib.mjs";

const items = await loadGeneratedRegistry();
const result = await materializeRegistry({
  items,
  roots: [...items.keys()].sort(),
  destination: resolve("fixtures/migration/.registry"),
});

console.log(
  `Migration fixture installed ${result.order.length} items and ${result.written.length} files.`,
);
