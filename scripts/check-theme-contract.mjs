import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const source = JSON.parse(
  await readFile(path.join(repositoryRoot, "src/theme-tokens.json"), "utf8"),
);
const preset = await readFile(
  path.join(repositoryRoot, "src/preset.css"),
  "utf8",
);

function assert(condition, message) {
  if (!condition) throw new Error(message);
  console.log(`PASS ${message}`);
}

const requiredBrandSteps = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

assert(
  requiredBrandSteps.every((step) => source.primitives.brandRed[step]),
  "brand red contains every 50-950 primitive step",
);

for (const palette of [
  "statusInfo",
  "statusSuccess",
  "statusWarning",
  "statusDanger",
]) {
  assert(
    source.primitives[palette] && source.primitives[palette] !== source.primitives.brandRed,
    `${palette} is independent from the brand palette`,
  );
}

const lightKeys = Object.keys(source.themes.light).sort();
const darkKeys = Object.keys(source.themes.dark).sort();
assert(
  JSON.stringify(lightKeys) === JSON.stringify(darkKeys),
  "light and dark semantic maps expose the same contract",
);

for (const name of [
  "surface",
  "surfaceSubtle",
  "surfaceRaised",
  "surfaceElevated",
  "glassBackground",
  "glassFallback",
  "selection",
  "disabled",
  "invalid",
  "focusRing",
]) {
  assert(
    source.themes.light[name] && source.themes.dark[name],
    `${name} is defined in both semantic maps`,
  );
}

const parsePixels = (value) => Number.parseFloat(value.replace("px", ""));
assert(
  parsePixels(source.shared.blur.glassStrong) <=
    parsePixels(source.shared.blur.maximumStack),
  "strong glass blur stays within the 24px maximum budget",
);

for (const selectorOrPolicy of [
  ".poyraz-glass .poyraz-glass",
  "@supports ((-webkit-backdrop-filter: blur(1px))",
  "@supports not ((-webkit-backdrop-filter: blur(1px))",
  "@media (prefers-reduced-transparency: reduce)",
  '[data-poyraz-performance="low"] .poyraz-glass',
  "@media (prefers-reduced-motion: reduce)",
]) {
  assert(
    preset.includes(selectorOrPolicy),
    `preset contains ${selectorOrPolicy}`,
  );
}

assert(
  !/@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*?\{\s*\*[\s,]/.test(
    preset,
  ),
  "reduced-motion policy does not globally reset consumer elements",
);

