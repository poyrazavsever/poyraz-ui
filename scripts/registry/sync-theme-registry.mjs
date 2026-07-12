#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { buildRegistryThemeCssVars } from "./theme-registry.mjs";
import { buildRegistryThemeCss } from "./style-registry.mjs";

const themeRegistryFile = resolve(process.cwd(), "registry/poyraz/styles/registry.json");
const registry = JSON.parse(await readFile(themeRegistryFile, "utf8"));
const themeItem = registry.items?.find(({ name }) => name === "poyraz-theme");

if (!themeItem) {
  throw new Error(`poyraz-theme item is missing from ${themeRegistryFile}`);
}

themeItem.cssVars = await buildRegistryThemeCssVars();
themeItem.css = buildRegistryThemeCss();
themeItem.meta = {
  ...themeItem.meta,
  tokenSource: "src/theme-tokens.json",
};

await writeFile(themeRegistryFile, `${JSON.stringify(registry, null, 2)}\n`);
console.log("Registry theme is synchronized with src/theme-tokens.json.");
