#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const registryFile = resolve("registry/poyraz/ui/registry.json");
const registry = JSON.parse(await readFile(registryFile, "utf8"));

const specs = [
  ["tooltip", "tooltip.tsx", ["@radix-ui/react-tooltip@^1.2.8"], ["poyraz-recipes"]],
  ["popover", "popover.tsx", ["@radix-ui/react-popover@^1.1.15"], ["poyraz-recipes"]],
  ["hover-card", "hover-card.tsx", ["@radix-ui/react-hover-card@^1.1.15"], ["poyraz-recipes"]],
  ["dropdown-menu", "dropdown-menu.tsx", ["@radix-ui/react-dropdown-menu@^2.1.16", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["select", "select.tsx", ["@radix-ui/react-select@^2.2.6", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["autocomplete", "autocomplete.tsx", ["lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["calendar", "calendar.tsx", ["lucide-react@^0.574.0"], ["button"]],
  ["date-picker", "date-picker.tsx", ["lucide-react@^0.574.0"], ["button", "calendar", "popover"]],
  ["dialog", "dialog.tsx", ["@radix-ui/react-dialog@^1.1.15", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["modal", "modal.tsx", ["@radix-ui/react-dialog@^1.1.15", "class-variance-authority@^0.7.1", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["sheet", "sheet.tsx", ["@radix-ui/react-dialog@^1.1.15", "class-variance-authority@^0.7.1", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["drawer", "drawer.tsx", ["vaul@^1.1.2"], ["poyraz-recipes"]],
  ["command-palette", "command-palette.tsx", ["@radix-ui/react-dialog@^1.1.15", "@radix-ui/react-visually-hidden@^1.2.4", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["accordion", "accordion.tsx", ["@radix-ui/react-accordion@^1.2.12", "lucide-react@^0.574.0"], ["poyraz-recipes"]],
  ["tabs", "tabs.tsx", ["@radix-ui/react-tabs@^1.1.13"], ["poyraz-recipes"]],
  ["breadcrumb", "breadcrumb.tsx", ["lucide-react@^0.574.0"], []],
  ["pagination", "pagination.tsx", ["lucide-react@^0.574.0"], ["button"]],
];

for (const [, source] of specs) {
  const runtimeSource = resolve("components/ui/molecules", source);
  const registrySource = resolve("registry/poyraz/ui/phase6/molecules", source);
  await mkdir(dirname(registrySource), { recursive: true });
  await writeFile(registrySource, await readFile(runtimeSource, "utf8"));
}

const phase6Names = new Set(specs.map(([name]) => name));
registry.items = [
  ...registry.items.filter((item) => !phase6Names.has(item.name)),
  ...specs.map(([name, source, dependencies, internal]) => ({
    name,
    type: "registry:ui",
    title: name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" "),
    description: `Poyraz Soft Glass ${name} component with standardized floating and overlay behavior.`,
    author: "Poyraz Avsever",
    dependencies,
    registryDependencies: [
      "@poyraz/poyraz-utils",
      "@poyraz/poyraz-theme",
      ...internal.map((dependency) => `@poyraz/${dependency}`),
    ],
    files: [{
      path: `phase6/molecules/${source}`,
      type: "registry:ui",
      target: `@ui/molecules/${source}`,
    }],
    meta: { category: "phase-6-interactive", phase: "beta" },
  })),
];

await writeFile(registryFile, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Phase 6 registry synchronized (${specs.length} interactive items).`);
