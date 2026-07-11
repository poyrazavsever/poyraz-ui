#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const failures = [];
const read = (path) => readFile(path, "utf8");
const requireText = (label, content, expected) => {
  if (!content.includes(expected)) failures.push(`${label}: missing ${expected}`);
};

const input = await read("components/ui/atoms/input.tsx");
const fields = await read("components/ui/atoms/form-fields.tsx");
const typography = await read("components/ui/atoms/typography.tsx");
const logo = await read("components/ui/atoms/logo.tsx");
const card = await read("components/ui/atoms/card.tsx");
const compositions = await read("components/ui/atoms/card-variants.tsx");
const preset = await read("src/preset.css");

for (const variant of ["default", "soft", "glass"]) requireText("field variant", await read("components/ui/recipes.ts"), `${variant}:`);
for (const slot of ["input", "input-group", "input-group-addon"]) requireText("field anatomy", input, `data-slot=\"${slot}\"`);
requireText("single focus group", input, "focus-within:ring-[3px]");
requireText("inner focus suppression", input, "[&_[data-slot=input]]:ring-0");
requireText("form field composition", fields, "<InputGroup");

for (const effect of ["hand-drawn", "contrast", "shimmer", "marker", "outline"]) {
  if (!typography.includes(`${effect}:`) && !typography.includes(`"${effect}":`)) failures.push(`text effect: missing ${effect}`);
}
requireText("primary font token", preset, "--poyraz-font-primary");
requireText("secondary font token", preset, "--poyraz-font-secondary");
requireText("reduced text motion", preset, '[data-poyraz-motion="reduced"] .poyraz-text-shimmer');

for (const effect of ["shine", "shine-loop"]) {
  if (!logo.includes(`${effect}:`) && !logo.includes(`"${effect}":`)) failures.push(`logo effect: missing ${effect}`);
}
requireText("reduced logo motion", preset, '[data-poyraz-motion="reduced"] .poyraz-logo-shine::after');

for (const variant of ["default", "soft", "outline", "glass", "elevated", "interactive"]) requireText("card variant", card, `${variant}:`);
for (const component of ["BasicContentCard", "ImageContentCard", "HorizontalCard", "ProfileCard", "StatisticCard", "PricingPlanCard", "FeatureCard", "GlassCard", "InteractiveCard", "ExpandableCard"]) requireText("card composition", compositions, `function ${component}`);
requireText("card action anatomy", card, 'data-slot="card-action"');

for (const file of [
  "avatar.tsx", "badge.tsx", "card.tsx", "checkbox.tsx", "input.tsx",
  "label.tsx", "logo.tsx", "radio-group.tsx", "scroll-area.tsx",
  "separator.tsx", "skeleton.tsx", "switch.tsx", "textarea.tsx", "typography.tsx",
]) {
  const content = await read(`components/ui/atoms/${file}`);
  requireText(`slot contract ${file}`, content, "data-slot=");
  if (/\b(?:slate|gray|zinc|neutral|red|green|yellow|blue)-(?:[1-9]00|50|950)\b/.test(content)) {
    failures.push(`semantic colors ${file}: hard-coded palette utility found`);
  }
}

const generated = JSON.parse(await read("public/r/registry.json"));
const names = new Set(generated.items?.map((item) => item.name));
for (const item of ["input", "textarea", "checkbox", "radio-group", "switch", "badge", "avatar", "card", "card-variants", "typography", "scroll-area", "form-fields", "logo", "bg-pattern"]) {
  if (!names.has(item)) failures.push(`registry: missing ${item}`);
}

if (failures.length) {
  console.error("Phase 5 contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Phase 5 contract is valid (foundation anatomy, variants, effects, semantic colors and registry catalog)." );
