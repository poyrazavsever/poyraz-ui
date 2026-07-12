import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(
  await readFile(path.join(repositoryRoot, "src/theme-tokens.json"), "utf8"),
);

function getPath(object, tokenPath) {
  return tokenPath.split(".").reduce((value, key) => value?.[key], object);
}

function resolve(value) {
  const reference = value.match(/^\{([^}]+)\}$/)?.[1];
  if (!reference) return value;
  const resolved = getPath(source, reference);
  if (typeof resolved !== "string") {
    throw new Error(`Cannot resolve token reference: ${value}`);
  }
  return resolve(resolved);
}

function rgb(hex) {
  const normalized = hex.replace("#", "");
  if (!/^[\da-f]{6}$/i.test(normalized)) {
    throw new Error(`Contrast checks require an opaque hex color, got: ${hex}`);
  }
  return [0, 2, 4].map((offset) => Number.parseInt(normalized.slice(offset, offset + 2), 16));
}

function luminance(hex) {
  const channels = rgb(hex).map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

const checks = [
  ["foreground", "background", 7],
  ["foreground", "surface", 7],
  ["foreground", "surfaceRaised", 7],
  ["foreground", "surfaceElevated", 7],
  ["mutedForeground", "background", 4.5],
  ["mutedForeground", "muted", 4.5],
  ["placeholder", "background", 3],
  ["placeholder", "surface", 3],
  ["primaryForeground", "primary", 4.5],
  ["primaryMutedForeground", "primaryMuted", 4.5],
  ["secondaryForeground", "secondary", 7],
  ["accentForeground", "accent", 7],
  ["disabledForeground", "disabled", 3],
  ["selectionForeground", "selection", 4.5],
  ["invalidForeground", "invalid", 4.5],
  ["destructiveForeground", "destructive", 4.5],
  ["destructiveMutedForeground", "destructiveMuted", 4.5],
  ["infoForeground", "info", 4.5],
  ["successForeground", "success", 4.5],
  ["warningForeground", "warning", 4.5],
];

let failed = false;
for (const [themeName, theme] of Object.entries(source.themes)) {
  for (const [foregroundName, backgroundName, minimum] of checks) {
    const foreground = resolve(theme[foregroundName]);
    const background = resolve(theme[backgroundName]);
    const ratio = contrast(foreground, background);
    const passed = ratio >= minimum;
    console.log(
      `${passed ? "PASS" : "FAIL"} ${themeName}.${foregroundName} on ${backgroundName}: ${ratio.toFixed(2)}:1 (min ${minimum}:1)`,
    );
    if (!passed) failed = true;
  }
}

if (failed) process.exitCode = 1;
