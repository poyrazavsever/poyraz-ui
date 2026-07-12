#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = JSON.parse(await readFile(resolve("public/r/registry.json"), "utf8"));
const hidden = new Set([
  "poyraz-utils",
  "poyraz-theme",
  "poyraz-recipes",
  "card-variants",
  "data-table-core",
  "sidebar-provider",
  "footer-newsletter",
  "navbar-auto-hide",
  "persistent-announcement",
]);
const aliases = {
  "bg-pattern": "bg-patterns",
  "star-rating": "card-templates",
  "article-card": "card-templates",
  "image-card": "card-templates",
  "news-card": "card-templates",
  "stats-card": "card-templates",
  "testimonial-card": "card-templates",
  "pricing-card": "card-templates",
  "product-card": "card-templates",
};
const moleculeNames = new Set([
  "accordion", "alert", "autocomplete", "breadcrumb", "calendar", "command-palette",
  "date-picker", "dialog", "drawer", "dropdown-menu", "form", "hover-card", "mermaid",
  "modal", "pagination", "popover", "select", "sheet", "sonner", "tabs", "tooltip",
]);
const organismNames = new Set(["announcement-bar", "data-table", "footer", "navbar", "sidebar"]);

function docsLocation(item) {
  if (item.type === "registry:block") return { section: "Blocks", href: `/docs/blocks/${item.name}` };
  if (hidden.has(item.name)) return null;
  if (organismNames.has(item.name)) return { section: "Organisms", href: `/docs/organisms/${item.name}` };
  if (moleculeNames.has(item.name) || aliases[item.name] === "card-templates") {
    return { section: "Molecules", href: `/docs/molecules/${aliases[item.name] ?? item.name}` };
  }
  if (item.type === "registry:ui") return { section: "Atoms", href: `/docs/atoms/${aliases[item.name] ?? item.name}` };
  return null;
}

const items = source.items.flatMap((item) => {
  const location = docsLocation(item);
  if (!location) return [];
  return [{
    name: item.name,
    title: item.title ?? item.name,
    description: item.description ?? "",
    type: item.type,
    section: location.section,
    href: location.href,
    dependencies: item.dependencies ?? [],
    registryDependencies: item.registryDependencies ?? [],
    files: (item.files ?? []).map(({ path, target, type }) => ({ path, target, type })),
    meta: item.meta ?? {},
  }];
});

const unique = new Map();
for (const item of items) {
  if (!unique.has(item.href) || item.name === item.href.split("/").at(-1)) unique.set(item.href, item);
}

const catalog = {
  counts: {
    components: items.filter(({ section }) => section !== "Blocks").length,
    blocks: items.filter(({ section }) => section === "Blocks").length,
  },
  items,
  navigation: ["Atoms", "Molecules", "Organisms"].map((section) => ({
    section,
    items: [...unique.values()].filter((item) => item.section === section).sort((a, b) => a.title.localeCompare(b.title)),
  })),
  blocks: items.filter(({ section }) => section === "Blocks").sort((a, b) => a.title.localeCompare(b.title)),
};

await writeFile(resolve("src/docs-registry.json"), `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Docs registry synchronized (${catalog.counts.components} components, ${catalog.counts.blocks} blocks).`);
