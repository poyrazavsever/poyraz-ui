#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const failures = [];
const read = (path) => readFile(path, "utf8");
const requireText = (label, source, expected) => { if (!source.includes(expected)) failures.push(`${label}: missing ${expected}`); };

const tokens = JSON.parse(await read("src/theme-tokens.json"));
const preset = await read("src/preset.css");
const recipes = await read("components/ui/recipes.ts");
const button = await read("registry/poyraz/ui/button.tsx");

for (const name of ["instant", "fast", "base", "slow", "deliberate", "spinner", "pulse"]) {
  if (!tokens.shared.motion.duration[name]) failures.push(`motion token: duration.${name} missing`);
}
for (const name of ["micro", "floating"]) if (!tokens.shared.motion.distance[name]) failures.push(`motion token: distance.${name} missing`);
for (const name of ["enter", "pressSmall", "pressMedium", "pressLarge"]) if (!tokens.shared.motion.scale[name]) failures.push(`motion token: scale.${name} missing`);
if (Number.parseInt(tokens.shared.motion.duration.fast, 10) >= 200) failures.push("motion token: fast feedback must stay below 200ms");

for (const family of ["fade-in", "fade-out", "scale-in", "scale-out", "floating-in", "floating-out", "overlay-in", "overlay-out", "accordion-down", "accordion-up", "spin", "pulse"]) {
  requireText("native keyframes", preset, `@keyframes poyraz-${family}`);
}
for (const guard of ["@media (prefers-reduced-motion: reduce)", '[data-poyraz-motion="reduced"]', "animation-iteration-count: 1 !important"]) requireText("reduced motion", preset, guard);
const keyframes = preset.match(/@keyframes[^{}]+\{(?:[^{}]|\{[^{}]*\})*\}/g) ?? [];
if (keyframes.some((block) => /(?:backdrop-filter|\bfilter\s*:)/.test(block))) failures.push("performance: blur/filter is animated inside a keyframe");

for (const recipe of ["controlMotion", "iconMotion", "accordionMotion", "toastMotion", "animate-poyraz-floating-in", "animate-poyraz-overlay-in"]) requireText("motion recipes", recipes, recipe);
for (const scale of ["press-small", "press-medium", "press-large"]) requireText("button size press scale", button, scale);
requireText("accordion exit", await read("components/ui/molecules/accordion.tsx"), "accordionMotion");
requireText("toast swipe", await read("components/ui/molecules/sonner.tsx"), "toastMotion");
requireText("motion docs", await read("docs/v3/phase-9-motion-system.md"), "Advanced dependency decision");
requireText("motion page", await read("app/docs/motion/page.tsx"), "MotionDemo");
const styleRegistry = JSON.parse(await read("registry/poyraz/styles/registry.json"));
const themeItem = styleRegistry.items.find((item) => item.name === "poyraz-theme");
for (const rule of ["@utility animate-poyraz-floating-in", "@utility animate-poyraz-spin", "@keyframes poyraz-accordion-up", "@media (prefers-reduced-motion: reduce)"]) {
  if (!themeItem?.css?.[rule]) failures.push(`registry motion CSS: missing ${rule}`);
}

if (failures.length) {
  console.error("Phase 9 contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("Phase 9 contract is valid (tokens, native recipes, reduced motion, exits and docs)." );
