#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const registryFile = resolve("registry/poyraz/ui/registry.json");
const registry = JSON.parse(await readFile(registryFile, "utf8"));

const specs = [
  { name: "alert", source: "components/ui/molecules/alert.tsx", path: "phase7/molecules/alert.tsx", target: "@ui/molecules/alert.tsx", dependencies: ["class-variance-authority@^0.7.1", "lucide-react@^0.574.0"] },
  { name: "sonner", source: "components/ui/molecules/sonner.tsx", path: "phase7/molecules/sonner.tsx", target: "@ui/molecules/sonner.tsx", dependencies: ["sonner@^2.0.7"], internal: ["poyraz-recipes"] },
  { name: "form", source: "components/ui/molecules/form.tsx", path: "phase7/molecules/form.tsx", target: "@ui/molecules/form.tsx", dependencies: ["@radix-ui/react-slot@^1.2.4", "react-hook-form@^7.71.1"], internal: ["label"], optional: true },
  { name: "calendar", source: "components/ui/molecules/calendar.tsx", path: "phase7/molecules/calendar.tsx", target: "@ui/molecules/calendar.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["button"] },
  { name: "date-picker", source: "components/ui/molecules/date-picker.tsx", path: "phase7/molecules/date-picker.tsx", target: "@ui/molecules/date-picker.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["button", "calendar", "popover", "poyraz-recipes"] },
  { name: "autocomplete", source: "components/ui/molecules/autocomplete.tsx", path: "phase7/molecules/autocomplete.tsx", target: "@ui/molecules/autocomplete.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["poyraz-recipes"] },
  { name: "data-table-core", source: "components/ui/organisms/data-table-core.tsx", path: "phase7/organisms/data-table-core.tsx", target: "@ui/organisms/data-table-core.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["checkbox"] },
  { name: "data-table", source: "components/ui/organisms/data-table.tsx", path: "phase7/organisms/data-table.tsx", target: "@ui/organisms/data-table.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["button", "input", "badge", "data-table-core"] },
  { name: "mermaid", source: "components/ui/molecules/mermaid.tsx", path: "phase7/molecules/mermaid.tsx", target: "@ui/molecules/mermaid.tsx", dependencies: ["mermaid@^11.12.3"] },
  { name: "star-rating", source: "components/ui/blocks/card-templates/star-rating.tsx", path: "phase7/blocks/card-templates/star-rating.tsx", target: "@ui/blocks/card-templates/star-rating.tsx", dependencies: ["lucide-react@^0.574.0"], type: "registry:component" },
  { name: "article-card", source: "components/ui/blocks/card-templates/article-card.tsx", path: "phase7/blocks/card-templates/article-card.tsx", target: "@ui/blocks/card-templates/article-card.tsx", internal: ["card", "badge"], type: "registry:block" },
  { name: "image-card", source: "components/ui/blocks/card-templates/image-card.tsx", path: "phase7/blocks/card-templates/image-card.tsx", target: "@ui/blocks/card-templates/image-card.tsx", internal: ["card", "badge"], type: "registry:block" },
  { name: "news-card", source: "components/ui/blocks/card-templates/news-card.tsx", path: "phase7/blocks/card-templates/news-card.tsx", target: "@ui/blocks/card-templates/news-card.tsx", internal: ["card", "badge"], type: "registry:block" },
  { name: "stats-card", source: "components/ui/blocks/card-templates/stats-card.tsx", path: "phase7/blocks/card-templates/stats-card.tsx", target: "@ui/blocks/card-templates/stats-card.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["card"], type: "registry:block" },
  { name: "testimonial-card", source: "components/ui/blocks/card-templates/testimonial-card.tsx", path: "phase7/blocks/card-templates/testimonial-card.tsx", target: "@ui/blocks/card-templates/testimonial-card.tsx", internal: ["card", "star-rating"], type: "registry:block" },
  { name: "pricing-card", source: "components/ui/blocks/card-templates/pricing-card.tsx", path: "phase7/blocks/card-templates/pricing-card.tsx", target: "@ui/blocks/card-templates/pricing-card.tsx", dependencies: ["lucide-react@^0.574.0"], internal: ["card", "badge"], type: "registry:block" },
  { name: "product-card", source: "components/ui/blocks/card-templates/product-card.tsx", path: "phase7/blocks/card-templates/product-card.tsx", target: "@ui/blocks/card-templates/product-card.tsx", internal: ["card", "badge", "star-rating"], type: "registry:block" },
];

for (const spec of specs) {
  const destination = resolve("registry/poyraz/ui", spec.path);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await readFile(resolve(spec.source), "utf8"));
}

const names = new Set(specs.map(({ name }) => name));
registry.items = [
  ...registry.items.filter((item) => !names.has(item.name)),
  ...specs.map((spec) => ({
    name: spec.name,
    type: spec.type ?? "registry:ui",
    title: spec.name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" "),
    description: `Poyraz Soft Glass ${spec.name} with semantic states and composable variants.`,
    author: "Poyraz Avsever",
    dependencies: spec.dependencies ?? [],
    registryDependencies: ["@poyraz/poyraz-utils", "@poyraz/poyraz-theme", ...(spec.internal ?? []).map((name) => `@poyraz/${name}`)],
    files: [{ path: spec.path, type: spec.type ?? "registry:ui", target: spec.target }],
    meta: { category: spec.type === "registry:block" ? "phase-7-card-block" : "phase-7-composite", phase: "beta", ...(spec.optional ? { optionalInstall: true } : {}) },
  })),
];

await writeFile(registryFile, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Phase 7 registry synchronized (${specs.length} feedback, data and composite items).`);
