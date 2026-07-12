#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const failures = [];
const read = (path) => readFile(path, "utf8");
const requireText = (label, content, expected) => {
  if (!content.includes(expected)) failures.push(`${label}: missing ${expected}`);
};
const forbidText = (label, content, forbidden) => {
  if (content.includes(forbidden)) failures.push(`${label}: contains forbidden ${forbidden}`);
};

const recipes = await read("components/ui/recipes.ts");
for (const recipe of ["floatingSurfaceVariants", "floatingMotion", "floatingItemVariants", "overlayVariants", "overlaySurfaceVariants"]) {
  requireText("shared recipe", recipes, recipe);
}
for (const surface of ["solid:", "soft:", "glass:"]) requireText("surface strategy", recipes, surface);
requireText("side motion", recipes, "data-[side=bottom]");
requireText("reduced floating motion", recipes, "motion-reduce:[--poyraz-enter-scale:1]");

const dropdown = await read("components/ui/molecules/dropdown-menu.tsx");
for (const api of ['"click" | "hover"', "closeDelay", "itemSize", "itemRadius", "media?:", "description?:", "trailing?:"]) {
  requireText("dropdown variants", dropdown, api);
}
requireText("touch fallback", dropdown, 'event.pointerType === "mouse"');
requireText("stable hover mode", dropdown, 'modal={interaction === "hover" ? false : modal}');
requireText("hover click guard", dropdown, "event.preventDefault()");
requireText("collision padding", dropdown, "collisionPadding = 8");
requireText("nested layer", dropdown, '"z-[60]');

for (const name of ["tooltip", "popover", "hover-card", "select"]) {
  const content = await read(`components/ui/molecules/${name}.tsx`);
  requireText(`${name} surface`, content, "floatingSurfaceVariants");
  requireText(`${name} origin`, content, "transform-origin");
  requireText(`${name} collision`, content, "collisionPadding");
}

for (const name of ["dialog", "modal", "sheet", "drawer", "command-palette"]) {
  const content = await read(`components/ui/molecules/${name}.tsx`);
  requireText(`${name} overlay`, content, "overlayVariants");
  requireText(`${name} surface`, content, "overlaySurfaceVariants");
}
const drawer = await read("components/ui/molecules/drawer.tsx");
if (/data-\[state=open\].*slide-in/.test(drawer)) failures.push("drawer: CSS transform motion must not compete with Vaul gesture motion");

const accordion = await read("components/ui/molecules/accordion.tsx");
requireText("accordion height", await read("src/preset.css"), "--radix-accordion-content-height");
requireText("accordion icon", accordion, "rotate-180");
const tabs = await read("components/ui/molecules/tabs.tsx");
for (const variant of ['"line"', '"soft"', '"glass"']) requireText("tabs variant", tabs, variant);
requireText("tabs stable indicator", tabs, 'data-slot="tabs-indicator"');
requireText("tabs sliding indicator", tabs, "MutationObserver");
requireText("tabs bounded indicator", tabs, "transition-[left,width,opacity]");
forbidText("tabs scroll-safe indicator", tabs, "translateX(${indicator.left}px)");
requireText("breadcrumb collapse semantics", await read("components/ui/molecules/breadcrumb.tsx"), "More breadcrumb items");
const pagination = await read("components/ui/molecules/pagination.tsx");
for (const label of ["Go to previous page", "Go to next page"]) requireText("pagination accessible name", pagination, label);
forbidText("pagination vertical hover", pagination, "hover:-translate-y");

const policy = await read("docs/v3/phase-6-interaction-and-overlay-policy.md");
for (const policyName of ["initial focus", "Escape", "return focus", "outside interaction", "body scroll lock", "Nested overlay"]) {
  requireText("overlay policy", policy.toLowerCase(), policyName.toLowerCase());
}

const catalog = JSON.parse(await read("public/r/registry.json"));
const names = new Set(catalog.items?.map((item) => item.name));
for (const item of ["tooltip", "popover", "hover-card", "dropdown-menu", "select", "autocomplete", "date-picker", "dialog", "modal", "sheet", "drawer", "command-palette", "accordion", "tabs", "breadcrumb", "pagination"]) {
  if (!names.has(item)) failures.push(`registry: missing ${item}`);
}

if (failures.length) {
  console.error("Phase 6 contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Phase 6 contract is valid (floating, overlay, disclosure, accessibility and registry)." );
