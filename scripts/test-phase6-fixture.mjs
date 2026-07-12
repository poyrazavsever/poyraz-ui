#!/usr/bin/env node

import { mkdtemp, mkdir, readFile, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const catalog = JSON.parse(await readFile(resolve(root, "public/r/registry.json"), "utf8"));
const items = new Map(catalog.items.map((item) => [item.name, item]));
const phase6 = ["tooltip", "popover", "hover-card", "dropdown-menu", "select", "autocomplete", "date-picker", "dialog", "modal", "sheet", "drawer", "command-palette", "accordion", "tabs", "breadcrumb", "pagination"];
const usage = {
  "dropdown-menu": `import * as React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/molecules/dropdown-menu";
export const Demo = <DropdownMenu interaction="hover" closeDelay={160}><DropdownMenuTrigger>Open</DropdownMenuTrigger><DropdownMenuContent surface="glass" radius="xl" itemSize="lg" itemRadius="lg"><DropdownMenuItem media={<span>PA</span>} description="Description" trailing="⌘K">Profile</DropdownMenuItem></DropdownMenuContent></DropdownMenu>;`,
  select: `import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/molecules/select";
export const Demo = <Select><SelectTrigger variant="glass" radius="xl" size="lg"><SelectValue /></SelectTrigger><SelectContent surface="soft" itemSize="lg"><SelectItem value="one" media={<span>1</span>} description="First">One</SelectItem></SelectContent></Select>;`,
  dialog: `import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/molecules/dialog";
export const Demo = <Dialog open><DialogContent surface="glass" radius="xl" mobile="fullscreen" overlayTone="soft" onOpenAutoFocus={() => {}} onCloseAutoFocus={() => {}} onEscapeKeyDown={() => {}} onPointerDownOutside={() => {}} onInteractOutside={() => {}}><DialogTitle>Title</DialogTitle></DialogContent></Dialog>;`,
  tabs: `import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/molecules/tabs";
export const Demo = <Tabs defaultValue="a"><TabsList variant="glass" radius="full"><TabsTrigger value="a" size="lg" radius="full">A</TabsTrigger></TabsList><TabsContent value="a" contained surface="soft">A</TabsContent></Tabs>;`,
};

function localDependency(address) {
  return address.startsWith("@poyraz/") ? address.slice("@poyraz/".length) : null;
}

function collect(name, result = new Set()) {
  if (result.has(name)) return result;
  const item = items.get(name);
  if (!item) throw new Error(`Fixture dependency is missing: ${name}`);
  result.add(name);
  for (const address of item.registryDependencies ?? []) {
    const dependency = localDependency(address);
    if (dependency) collect(dependency, result);
  }
  return result;
}

for (const name of phase6) {
  const fixture = await mkdtemp(resolve(tmpdir(), `poyraz-phase6-${name}-`));
  for (const dependencyName of collect(name)) {
    const item = JSON.parse(await readFile(resolve(root, `public/r/${dependencyName}.json`), "utf8"));
    for (const file of item.files ?? []) {
      const target = file.target.replace(/^@ui\//, "components/ui/").replace(/^@lib\//, "lib/");
      const destination = resolve(fixture, target);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, file.content);
    }
  }
  await symlink(resolve(root, "node_modules"), resolve(fixture, "node_modules"), "dir");
  if (usage[name]) await writeFile(resolve(fixture, "usage.tsx"), usage[name]);
  await writeFile(resolve(fixture, "tsconfig.json"), JSON.stringify({ compilerOptions: { strict: true, noEmit: true, target: "ES2020", lib: ["DOM", "ES2020"], module: "ESNext", moduleResolution: "Bundler", jsx: "react-jsx", esModuleInterop: true, skipLibCheck: true, baseUrl: ".", paths: { "@/*": ["./*"] } }, include: ["**/*.ts", "**/*.tsx"] }, null, 2));
  const result = spawnSync(resolve(root, "node_modules/.bin/tsc"), ["--project", resolve(fixture, "tsconfig.json")], { cwd: fixture, encoding: "utf8" });
  if (result.status !== 0) {
    process.stderr.write(`Standalone fixture failed: ${name}\n`);
    process.stderr.write(result.stdout);
    process.stderr.write(result.stderr);
    process.exit(result.status ?? 1);
  }
}

console.log(`Phase 6 standalone fixture typechecks passed (${phase6.length} items).`);
