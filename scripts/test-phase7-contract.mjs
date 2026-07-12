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

const alert = await read("components/ui/molecules/alert.tsx");
for (const variant of ["default:", "info:", "success:", "warning:", "destructive:"])
  requireText("alert status", alert, variant);
for (const appearance of ["soft:", "outline:", "filled:", "glass:", "inline:"])
  requireText("alert appearance", alert, appearance);
for (const token of [
  "--poyraz-info",
  "--poyraz-success",
  "--poyraz-warning",
  "--poyraz-destructive",
])
  requireText("semantic feedback token", alert, token);
for (const treatment of ["border-l-4", "bg-[var(--alert-bg)]", "shadow-xs"])
  requireText("inline alert separation", alert, treatment);

const sonner = await read("components/ui/molecules/sonner.tsx");
requireText("toast motion recipe", sonner, "toastMotion");
const recipes = await read("components/ui/recipes.ts");
for (const state of ["data-[swiping=true]", "data-[swiped=true]"])
  requireText("toast motion state", recipes, state);
requireText("toast removed state", sonner, "data-[removed=true]");
for (const surface of ['"solid"', '"soft"', '"glass"'])
  requireText("toast surface", sonner, surface);

const form = await read("components/ui/molecules/form.tsx");
for (const announcement of ['role="alert"', 'aria-live="assertive"', 'aria-atomic="true"'])
  requireText("form invalid announcement", form, announcement);

const calendar = await read("components/ui/molecules/calendar.tsx");
for (const state of [
  "data-range-start",
  "data-range-middle",
  "data-range-end",
  "data-today",
  'mode: "range"',
])
  requireText("calendar semantic state", calendar, state);
const datePicker = await read("components/ui/molecules/date-picker.tsx");
for (const api of [
  "defaultSelected",
  "defaultOpen",
  "selectionControlled",
  "openControlled",
  "closeOnSelect",
  "clearable",
])
  requireText("date picker control API", datePicker, api);

const autocomplete = await read("components/ui/molecules/autocomplete.tsx");
for (const keyboard of [
  'e.key === "Home"',
  'e.key === "End"',
  'e.key === "Escape"',
  'e.key === "Tab"',
  "findEnabled",
])
  requireText("autocomplete keyboard", autocomplete, keyboard);
for (const aria of ["aria-activedescendant", "aria-controls", 'role="status"', 'role="alert"'])
  requireText("autocomplete state semantics", autocomplete, aria);

const dataCore = await read("components/ui/organisms/data-table-core.tsx");
for (const state of ['"populated"', '"empty"', '"loading"', '"error"'])
  requireText("data table state", dataCore, state);
requireText("sticky header", dataCore, "sticky top-0");
requireText("mobile overflow", dataCore, "overflow-auto");
if (/(tanstack|ag-grid|react-table)/i.test(dataCore))
  failures.push("data-table-core: external data-grid dependency found");
requireText(
  "data table composition",
  await read("components/ui/organisms/data-table.tsx"),
  "<DataTableCore",
);

const mermaid = await read("components/ui/molecules/mermaid.tsx");
requireText("mermaid dynamic import", mermaid, 'import("mermaid")');
requireText("mermaid semantic resolver", mermaid, "resolveMermaidTheme");
requireText("mermaid theme observer", mermaid, "MutationObserver");
if (/#[0-9a-f]{3,8}\b/i.test(mermaid)) failures.push("mermaid: hard-coded hex theme color found");

const blockNames = [
  "article-card",
  "image-card",
  "news-card",
  "stats-card",
  "testimonial-card",
  "pricing-card",
  "product-card",
];
for (const name of blockNames) {
  const content = await read(`components/ui/blocks/card-templates/${name}.tsx`);
  if (/\b(?:yellow|green)-(?:[1-9]00|50|950)\b/.test(content))
    failures.push(`${name}: fixed yellow/green palette utility found`);
}
const newsCard = await read("components/ui/blocks/card-templates/news-card.tsx");
for (const layout of ["h-fit", "self-start"])
  requireText("news card intrinsic height", newsCard, layout);
const testimonialCard = await read("components/ui/blocks/card-templates/testimonial-card.tsx");
for (const layout of ["h-full", "flex-1 flex-col", "mt-auto"])
  requireText("testimonial footer alignment", testimonialCard, layout);
forbidText(
  "interactive card vertical hover",
  await read("components/ui/atoms/card.tsx"),
  "hover:-translate-y",
);

const registry = JSON.parse(await read("public/r/registry.json"));
const registryItems = new Map(registry.items.map((item) => [item.name, item]));
for (const name of [
  "alert",
  "sonner",
  "form",
  "calendar",
  "date-picker",
  "autocomplete",
  "data-table-core",
  "data-table",
  "mermaid",
  "star-rating",
  ...blockNames,
]) {
  if (!registryItems.has(name)) failures.push(`registry: missing ${name}`);
}
for (const name of blockNames)
  if (registryItems.get(name)?.type !== "registry:block")
    failures.push(`registry: ${name} is not a block`);
if (!registryItems.get("form")?.meta?.optionalInstall)
  failures.push("registry: form is not marked optional install");

for (const path of [
  "app/docs/molecules/autocomplete/page.tsx",
  "app/docs/organisms/data-table/page.tsx",
]) {
  const docs = await read(path);
  for (const state of ["loading", "empty", "error"])
    requireText(`state docs ${path}`, docs.toLowerCase(), state);
}

if (failures.length) {
  console.error("Phase 7 contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(
  "Phase 7 contract is valid (feedback, selection, data, Mermaid, blocks and registry graph).",
);
