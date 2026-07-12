#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const registries = {
  ui: resolve("registry/poyraz/ui/registry.json"),
  hooks: resolve("registry/poyraz/hooks/registry.json"),
  blocks: resolve("registry/poyraz/blocks/registry.json"),
};

const uiSpecs = [
  { name: "navbar-auto-hide", source: "components/ui/hooks/use-navbar-auto-hide.ts", path: "phase8/use-navbar-auto-hide.ts", target: "@ui/hooks/use-navbar-auto-hide.ts", type: "registry:hook" },
  { name: "persistent-announcement", source: "components/ui/hooks/use-persistent-announcement.ts", path: "phase8/use-persistent-announcement.ts", target: "@ui/hooks/use-persistent-announcement.ts", type: "registry:hook" },
  { name: "sidebar-provider", source: "components/ui/organisms/sidebar-provider.tsx", path: "phase8/sidebar-provider.tsx", target: "@ui/organisms/sidebar-provider.tsx" },
  { name: "navbar", source: "components/ui/organisms/navbar.tsx", path: "phase8/navbar.tsx", target: "@ui/organisms/navbar.tsx", dependencies: ["@radix-ui/react-navigation-menu@^1.2.14", "@radix-ui/react-popover@^1.1.15", "class-variance-authority@^0.7.1", "lucide-react@^0.574.0"], internal: ["navbar-auto-hide"] },
  { name: "sidebar", source: "components/ui/organisms/sidebar.tsx", path: "phase8/sidebar.tsx", target: "@ui/organisms/sidebar.tsx", dependencies: ["class-variance-authority@^0.7.1", "lucide-react@^0.574.0"], internal: ["sidebar-provider"] },
  { name: "footer", source: "components/ui/organisms/footer.tsx", path: "phase8/footer.tsx", target: "@ui/organisms/footer.tsx", dependencies: ["class-variance-authority@^0.7.1"] },
  { name: "footer-newsletter", source: "components/ui/organisms/footer-newsletter.tsx", path: "phase8/footer-newsletter.tsx", target: "@ui/organisms/footer-newsletter.tsx", internal: ["button", "input"] },
  { name: "announcement-bar", source: "components/ui/organisms/announcement-bar.tsx", path: "phase8/announcement-bar.tsx", target: "@ui/organisms/announcement-bar.tsx", dependencies: ["class-variance-authority@^0.7.1", "lucide-react@^0.574.0"] },
];

const blockSpecs = [
  { name: "navigation-block", source: "components/ui/blocks/phase8/navigation-block.tsx", internal: ["button", "navbar"] },
  { name: "mobile-navigation-block", source: "components/ui/blocks/phase8/mobile-navigation-block.tsx", internal: ["button", "sheet", "navigation-block"] },
  { name: "mega-menu-block", source: "components/ui/blocks/phase8/mega-menu-block.tsx", internal: ["navbar"] },
  { name: "mobile-sidebar-block", source: "components/ui/blocks/phase8/mobile-sidebar-block.tsx", internal: ["button", "sheet", "sidebar"] },
  { name: "footer-blocks", source: "components/ui/blocks/phase8/footer-blocks.tsx", internal: ["button", "footer", "footer-newsletter"] },
  { name: "dashboard-shell-block", source: "components/ui/blocks/phase8/dashboard-shell-block.tsx", internal: ["avatar", "badge", "button", "card", "input", "sidebar"] },
  { name: "glass-app-shell-block", source: "components/ui/blocks/phase8/glass-app-shell-block.tsx", internal: ["navigation-block", "sidebar"] },
  { name: "auth-card-block", source: "components/ui/blocks/phase8/auth-card-block.tsx", internal: ["button", "card", "input", "label"] },
  { name: "pricing-block", source: "components/ui/blocks/phase8/pricing-block.tsx", internal: ["badge", "button", "card"] },
  { name: "brand-hero-block", source: "components/ui/blocks/phase8/brand-hero-block.tsx", internal: ["badge", "button"] },
  { name: "smart-dashboard-block", source: "components/ui/blocks/phase8/smart-dashboard-block.tsx", internal: ["badge", "button", "card"], extraFiles: [{ source: "components/ui/blocks/phase8/dashboard-data.ts", path: "phase8/dashboard-data.ts", target: "@ui/blocks/phase8/dashboard-data.ts", type: "registry:file" }] },
];

const title = (name) => name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
const baseDependencies = ["@poyraz/poyraz-utils", "@poyraz/poyraz-theme"];

async function copy(source, destination) {
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await readFile(resolve(source), "utf8"));
}

async function updateRegistry(file, specs, destinationRoot, category) {
  const registry = JSON.parse(await readFile(file, "utf8"));
  const names = new Set(specs.map(({ name }) => name));

  for (const spec of specs) {
    const path = spec.path ?? `phase8/${spec.name}.tsx`;
    await copy(spec.source, resolve(destinationRoot, path));
    for (const extra of spec.extraFiles ?? []) await copy(extra.source, resolve(destinationRoot, extra.path));
  }

  registry.items = [
    ...registry.items.filter((item) => !names.has(item.name)),
    ...specs.map((spec) => {
      const type = spec.type ?? (category === "phase-8-block" ? "registry:block" : "registry:ui");
      const path = spec.path ?? `phase8/${spec.name}.tsx`;
      const target = spec.target ?? `@ui/blocks/phase8/${spec.name}.tsx`;
      return {
        name: spec.name,
        type,
        title: title(spec.name),
        description: `Poyraz Soft Glass ${title(spec.name)} with container-responsive layout and semantic tokens.`,
        author: "Poyraz Avsever",
        dependencies: [...(spec.dependencies ?? []), ...(category === "phase-8-block" ? ["lucide-react@^0.574.0"] : [])],
        registryDependencies: [...baseDependencies, ...(spec.internal ?? []).map((name) => `@poyraz/${name}`)],
        files: [
          { path, type, target },
          ...(spec.extraFiles ?? []).map((fileSpec) => ({ path: fileSpec.path, type: fileSpec.type, target: fileSpec.target })),
        ],
        meta: { category, phase: "beta", responsive: "container", accessibilityReviewed: true },
      };
    }),
  ];
  await writeFile(file, `${JSON.stringify(registry, null, 2)}\n`);
}

const hookSpecs = uiSpecs.filter((spec) => spec.type === "registry:hook");
const organismSpecs = uiSpecs.filter((spec) => spec.type !== "registry:hook");
await updateRegistry(registries.hooks, hookSpecs, resolve("registry/poyraz/hooks"), "phase-8-hook");
await updateRegistry(registries.ui, organismSpecs, resolve("registry/poyraz/ui"), "phase-8-organism");
await updateRegistry(registries.blocks, blockSpecs, resolve("registry/poyraz/blocks"), "phase-8-block");

console.log(`Phase 8 registry synchronized (${uiSpecs.length} UI/hook items, ${blockSpecs.length} blocks).`);
