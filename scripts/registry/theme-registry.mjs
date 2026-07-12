import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export const THEME_TOKEN_FILE = "src/theme-tokens.json";

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Za-z])(\d+)/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function variableName(parts) {
  return `--poyraz-${parts.map(toKebabCase).join("-")}`;
}

function flattenValues(value, pathParts = [], entries = []) {
  for (const [key, child] of Object.entries(value)) {
    const nextPath = [...pathParts, key];

    if (typeof child === "string") {
      entries.push([nextPath, child]);
    } else {
      flattenValues(child, nextPath, entries);
    }
  }

  return entries;
}

function registryThemeValue(value) {
  const reference = value.match(/^\{([^}]+)\}$/)?.[1];
  if (!reference) {
    return value;
  }

  const pathParts = reference.split(".");
  if (pathParts[0] !== "primitives" && pathParts[0] !== "shared") {
    throw new Error(`Unsupported registry token reference: ${value}`);
  }

  return `var(${variableName(pathParts.slice(1))})`;
}

export async function buildRegistryThemeCssVars({ cwd = process.cwd() } = {}) {
  const tokenFile = resolve(cwd, THEME_TOKEN_FILE);
  const tokens = JSON.parse(await readFile(tokenFile, "utf8"));
  const primitiveEntries = flattenValues(tokens.primitives).map(([pathParts, value]) => [
    variableName(pathParts).slice(2),
    registryThemeValue(value),
  ]);
  const sharedEntries = flattenValues(tokens.shared).map(([pathParts, value]) => [
    variableName(pathParts).slice(2),
    registryThemeValue(value),
  ]);

  function buildMode(mode) {
    return Object.fromEntries([
      ...Object.entries(tokens.themes[mode]).map(([key, value]) => [
        toKebabCase(key),
        registryThemeValue(value),
      ]),
      ["radius", "var(--poyraz-radius-md)"],
    ]);
  }

  return {
    theme: Object.fromEntries([
      ["poyraz-font-primary", "Inter, ui-sans-serif, system-ui, sans-serif"],
      ["poyraz-font-secondary", "Agbalumo, ui-serif, Georgia, cursive"],
      ["font-sans", "var(--poyraz-font-primary)"],
      ["font-primary", "var(--poyraz-font-primary)"],
      ["font-secondary", "var(--poyraz-font-secondary)"],
      ...primitiveEntries,
      ...sharedEntries,
    ]),
    light: buildMode("light"),
    dark: buildMode("dark"),
  };
}
