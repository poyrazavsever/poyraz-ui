#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const failures = [];
const read = (path) => readFile(path, "utf8");
const requireText = (label, content, expected) => { if (!content.includes(expected)) failures.push(`${label}: missing ${expected}`); };
const forbid = (label, content, pattern, message) => { if (pattern.test(content)) failures.push(`${label}: ${message}`); };

const organisms = {
  navbar: await read("components/ui/organisms/navbar.tsx"),
  sidebar: await read("components/ui/organisms/sidebar.tsx"),
  footer: await read("components/ui/organisms/footer.tsx"),
  announcement: await read("components/ui/organisms/announcement-bar.tsx"),
};
const fixedPalette = /\b(?:slate|gray|zinc|neutral|stone|red|blue|emerald|green|amber|yellow|orange|purple|violet)-(?:50|[1-9]00|950)\b/;
for (const [name, content] of Object.entries(organisms)) forbid(name, content, fixedPalette, "fixed Tailwind palette utility found");

for (const expected of ["glass:", "@container/navbar", "@lg/navbar", "motion-reduce:transition-none", "useNavbarAutoHide"]) requireText("navbar", organisms.navbar, expected);
for (const expected of ["data-slot=\"sidebar\"", "data-slot=\"sidebar-rail\"", "data-slot=\"sidebar-trigger\"", "data-slot=\"sidebar-group\"", "data-slot=\"sidebar-menu\"", "data-slot=\"sidebar-submenu\"", "data-slot=\"sidebar-footer\"", "role=\"tooltip\"", "aria-expanded"]) requireText("sidebar anatomy", organisms.sidebar, expected);
for (const expected of ["data-slot=\"sidebar-menu-badge\"", "rounded-full", "border border-transparent bg-primary-muted"]) requireText("sidebar badge", organisms.sidebar, expected);
requireText("sidebar provider split", organisms.sidebar, "sidebar-provider");
requireText("sidebar provider state", await read("components/ui/organisms/sidebar-provider.tsx"), "SidebarContext.Provider");
forbid("footer server boundary", organisms.footer, /useState|"use client"/, "interactive newsletter state remains in Footer core");
for (const expected of ["\"use client\"", "data-slot=\"footer-newsletter\"", "@sm/footer:flex-row"]) requireText("footer newsletter", await read("components/ui/organisms/footer-newsletter.tsx"), expected);
for (const expected of ["bg-info", "bg-warning", "open?: boolean", "onOpenChange", "grid-rows-[0fr]", "data-state={open"]) requireText("announcement", organisms.announcement, expected);
for (const expected of ["const panels =", "const mainContent =", "{panels}", "data-slot=\"navbar-mobile-drill-back\"", "pointer-events-none"]) requireText("navbar drill-down", organisms.navbar, expected);
for (const expected of ["Poyraz Inter", "Poyraz Agbalumo", "inter-latin-ext.woff2", "font-display: swap"]) requireText("docs self-hosted fonts", await read("app/globals.css"), expected);
forbid("docs font network", await read("app/layout.tsx"), /next\/font\/google/, "Google font runtime dependency found");
requireText("button font inheritance", await read("registry/poyraz/ui/button.tsx"), "font-sans text-sm");
forbid("announcement persistence", organisms.announcement, /localStorage|sessionStorage/, "storage persistence found in core component");
requireText("announcement persistence hook", await read("components/ui/hooks/use-persistent-announcement.ts"), "localStorage");

const blockNames = ["navigation-block", "mobile-navigation-block", "mega-menu-block", "mobile-sidebar-block", "footer-blocks", "dashboard-shell-block", "glass-app-shell-block", "auth-card-block", "pricing-block", "brand-hero-block", "smart-dashboard-block"];
for (const name of blockNames) {
  const content = await read(`components/ui/blocks/phase8/${name}.tsx`);
  requireText(`${name} slot`, content, "data-slot=");
  if (!["navigation-block", "mega-menu-block", "mobile-sidebar-block"].includes(name)) requireText(`${name} container`, content, "@container/");
  forbid(name, content, fixedPalette, "fixed Tailwind palette utility found");
}
for (const expected of ["activeHref", "aria-current", "NavigationItem"]) requireText("framework-neutral route", await read("components/ui/blocks/phase8/navigation-block.tsx"), expected);
for (const expected of ["SheetContent", "aria-label=\"Primary navigation\"", "aria-current"]) requireText("mobile navigation", await read("components/ui/blocks/phase8/mobile-navigation-block.tsx"), expected);
forbid("framework-neutral route", await read("components/ui/blocks/phase8/navigation-block.tsx"), /next\/navigation|react-router/, "framework router dependency found");
requireText("dashboard data split", await read("components/ui/blocks/phase8/smart-dashboard-block.tsx"), "dashboard-data");

const registries = await Promise.all(["ui", "hooks", "blocks"].map((name) => read(`registry/poyraz/${name}/registry.json`).then(JSON.parse)));
const items = new Map(registries.flatMap((registry) => registry.items).map((item) => [item.name, item]));
for (const name of ["navbar", "sidebar-provider", "sidebar", "footer", "footer-newsletter", "announcement-bar", "navbar-auto-hide", "persistent-announcement", ...blockNames]) {
  const item = items.get(name);
  if (!item) failures.push(`registry: missing ${name}`);
  if (blockNames.includes(name) && item?.type !== "registry:block") failures.push(`registry: ${name} is not registry:block`);
  if (blockNames.includes(name) && (item?.meta?.responsive !== "container" || item?.meta?.accessibilityReviewed !== true)) failures.push(`registry: ${name} responsive/a11y metadata missing`);
}

const policy = await read("docs/v3/phase-8-organisms-and-blocks.md");
for (const name of blockNames) requireText("phase 8 docs", policy, `\`${name}\``);
for (const page of ["auth", "dashboard", "pricing", "hero"]) requireText(`template ${page}`, await read(`app/docs/templates/${page}/page.tsx`), "@/components/ui/blocks/phase8/");

if (failures.length) {
  console.error("Phase 8 contract validation failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("Phase 8 contract is valid (organism boundaries, responsive blocks, metadata and docs)." );
