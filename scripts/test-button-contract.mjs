#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const source = await readFile("registry/poyraz/ui/button.tsx", "utf8");
const css = await readFile("src/preset.css", "utf8");
const docs = await readFile("app/docs/atoms/button/page.tsx", "utf8");
const registry = JSON.parse(await readFile("public/r/button.json", "utf8"));
const registryCss = JSON.stringify(registry.css ?? {});

const failures = [];

function requireText(label, content, expected) {
  if (!content.includes(expected)) failures.push(`${label}: missing ${expected}`);
}

for (const variant of [
  "default",
  "secondary",
  "soft",
  "outline",
  "glass",
  "ghost",
  "destructive",
  "link",
]) {
  requireText("button variant", source, `${variant}:`);
}

for (const size of ["xs", "sm", "default", "lg", '"icon-sm"', "icon", '"icon-lg"']) {
  requireText("button size", source, `${size}:`);
}

for (const radius of ["none", "xs", "sm", "md", "lg", "xl", '"2xl"', "full"]) {
  requireText("button radius", source, `${radius}:`);
}

for (const attribute of [
  'data-slot": "button"',
  'data-slot="button-content"',
  'data-slot="button-spinner"',
  'data-slot="button-icon"',
  'data-slot="button-label"',
  'data-effect": effect',
  'data-radius": radius',
  'data-loading": loading',
  'aria-busy": loading',
  "React.forwardRef",
  "Slottable",
]) {
  requireText("button anatomy", source, attribute);
}

for (const effect of ["shine", "fill", "swap", "border-draw"]) {
  requireText("button CSS effect", css, `data-effect=\"${effect}\"`);
  requireText("button docs effect", docs, `\"${effect}\"`);
  requireText("button registry CSS effect", registryCss, `data-effect=\\\"${effect}\\\"`);
}

requireText("reduced motion", css, "prefers-reduced-motion: reduce");
requireText("glass fallback", css, ".poyraz-button-glass");
requireText("fill foreground", source, "data-[effect=fill]:hover:text-primary-foreground");
requireText("swap downward exit", css, "translateY(115%)");
requireText("swap return from top", css, "translateY(-115%)");

const iconButtons = [...docs.matchAll(/<Button\s+size="icon(?:-sm|-lg)?"[^>]*>/g)];
if (iconButtons.length < 3) {
  failures.push("accessible name: docs must cover all icon size families");
}
for (const [button] of iconButtons) {
  if (!button.includes("aria-label=")) {
    failures.push(`accessible name: icon-only example lacks aria-label (${button})`);
  }
}

if (failures.length > 0) {
  console.error("Button contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Button contract is valid (8 variants, 7 sizes, 8 radii, 4 effects, ${iconButtons.length} accessible icon examples).`,
);
