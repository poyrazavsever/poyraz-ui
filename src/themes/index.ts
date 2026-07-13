/**
 * Poyraz UI — Default Theme Configurations
 *
 * `src/theme-tokens.json` is the canonical source for both these runtime
 * theme objects and the generated declarations in `src/preset.css`.
 * Regenerate the CSS after changing tokens:
 *
 * ```bash
 * node scripts/generate-theme-tokens.mjs
 * ```
 *
 * Use the themes with reactive-switcher's ThemeProvider:
 *
 * ```tsx
 * import { ThemeProvider } from "reactive-switcher";
 * import { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";
 *
 * <ThemeProvider themes={[poyrazLightTheme, poyrazDarkTheme]}>
 *   <App />
 * </ThemeProvider>
 * ```
 */

import tokenSource from "../theme-tokens.json";

export interface PoyrazTheme {
  name: string;
  variables: Record<string, string>;
}

export type PoyrazTokenGroup = {
  readonly [key: string]: string | PoyrazTokenGroup;
};

export interface PoyrazThemeTokens {
  readonly primitives: PoyrazTokenGroup;
  readonly shared: PoyrazTokenGroup;
}

interface TokenSource {
  primitives: PoyrazTokenGroup;
  shared: PoyrazTokenGroup;
  themes: Record<string, Record<string, string>>;
}

const tokens = tokenSource as TokenSource;

function getTokenAtPath(path: string): string {
  const segments = path.split(".");
  let value: string | PoyrazTokenGroup = tokens as unknown as PoyrazTokenGroup;

  for (const segment of segments) {
    if (typeof value === "string" || value[segment] === undefined) {
      throw new Error(`Unknown Poyraz token reference: {${path}}`);
    }
    value = value[segment];
  }

  if (typeof value !== "string") {
    throw new Error(`Poyraz token reference does not resolve to a value: {${path}}`);
  }

  return value;
}

function resolveTokenValue(value: string): string {
  const reference = value.match(/^\{([^}]+)\}$/)?.[1];
  return reference ? resolveTokenValue(getTokenAtPath(reference)) : value;
}

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Za-z])(\d+)/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function createThemeVariables(theme: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(theme).map(([name, value]) => [
      `--poyraz-${toKebabCase(name)}`,
      resolveTokenValue(value),
    ]),
  );
}

/** Primitive palettes and shared scales for tooling and custom theme authors. */
export const poyrazThemeTokens: PoyrazThemeTokens = {
  primitives: tokens.primitives,
  shared: tokens.shared,
};

export const poyrazLightTheme: PoyrazTheme = {
  name: "light",
  variables: createThemeVariables(tokens.themes.light),
};

export const poyrazDarkTheme: PoyrazTheme = {
  name: "dark",
  variables: createThemeVariables(tokens.themes.dark),
};

export const poyrazThemes: PoyrazTheme[] = [poyrazLightTheme, poyrazDarkTheme];
