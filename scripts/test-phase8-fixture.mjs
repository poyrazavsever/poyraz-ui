#!/usr/bin/env node

import { mkdtemp, mkdir, readFile, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const catalog = JSON.parse(await readFile(resolve(root, "public/r/registry.json"), "utf8"));
const items = new Map(catalog.items.map((item) => [item.name, item]));
const phase8 = ["navbar", "sidebar-provider", "sidebar", "footer", "footer-newsletter", "announcement-bar", "navbar-auto-hide", "persistent-announcement", "navigation-block", "mobile-navigation-block", "mega-menu-block", "mobile-sidebar-block", "footer-blocks", "dashboard-shell-block", "glass-app-shell-block", "auth-card-block", "pricing-block", "brand-hero-block", "smart-dashboard-block"];

function collect(name, result = new Set()) {
  if (result.has(name)) return result;
  const item = items.get(name);
  if (!item) throw new Error(`Fixture dependency is missing: ${name}`);
  result.add(name);
  for (const address of item.registryDependencies ?? []) if (address.startsWith("@poyraz/")) collect(address.slice(8), result);
  return result;
}

const fixture = await mkdtemp(resolve(tmpdir(), "poyraz-phase8-"));
const closure = new Set();
for (const name of phase8) collect(name, closure);
for (const dependency of closure) {
  const item = JSON.parse(await readFile(resolve(root, `public/r/${dependency}.json`), "utf8"));
  for (const file of item.files ?? []) {
    const target = file.target.replace(/^@ui\//, "components/ui/").replace(/^@lib\//, "lib/");
    const destination = resolve(fixture, target);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, file.content);
  }
}
await symlink(resolve(root, "node_modules"), resolve(fixture, "node_modules"), process.platform === "win32" ? "junction" : "dir");
await writeFile(resolve(fixture, "tsconfig.json"), JSON.stringify({ compilerOptions: { strict: true, noEmit: true, target: "ES2020", lib: ["DOM", "ES2020"], module: "ESNext", moduleResolution: "Bundler", jsx: "react-jsx", esModuleInterop: true, skipLibCheck: true, baseUrl: ".", paths: { "@/*": ["./*"] } }, include: ["**/*.ts", "**/*.tsx"] }, null, 2));
const result = spawnSync(process.execPath, [resolve(root, "node_modules/typescript/bin/tsc"), "--project", resolve(fixture, "tsconfig.json")], { cwd: fixture, encoding: "utf8" });
if (result.status !== 0) {
  process.stderr.write(`Phase 8 standalone fixture failed:\n${result.stdout ?? ""}${result.stderr ?? ""}${result.error?.message ?? ""}`);
  process.exit(result.status ?? 1);
}
console.log(`Phase 8 standalone fixture typecheck passed (${phase8.length} items, ${closure.size} transitive items).`);
