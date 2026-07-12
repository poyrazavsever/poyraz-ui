#!/usr/bin/env node

import { mkdtemp, mkdir, readFile, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const fixture = await mkdtemp(resolve(tmpdir(), "poyraz-phase5-fixture-"));
const catalog = JSON.parse(await readFile(resolve(root, "public/r/registry.json"), "utf8"));
const installNames = new Set(catalog.items.map((item) => item.name));

for (const name of installNames) {
  const item = JSON.parse(await readFile(resolve(root, `public/r/${name}.json`), "utf8"));
  for (const file of item.files ?? []) {
    const target = file.target
      .replace(/^@ui\//, "components/ui/")
      .replace(/^@lib\//, "lib/");
    const destination = resolve(fixture, target);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, file.content);
  }
}

await symlink(resolve(root, "node_modules"), resolve(fixture, "node_modules"), process.platform === "win32" ? "junction" : "dir");
await writeFile(resolve(fixture, "usage.tsx"), `import * as React from "react";
import { Input, InputGroup, InputGroupAddon } from "@/components/ui/atoms/input";
import { Textarea } from "@/components/ui/atoms/textarea";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/atoms/radio-group";
import { Switch } from "@/components/ui/atoms/switch";
import { Card, CardHeader, CardTitle } from "@/components/ui/atoms/card";
import { ExpandableCard, GlassCard } from "@/components/ui/atoms/card-variants";
import { TextEffect, Typography } from "@/components/ui/atoms/typography";
import { Logo } from "@/components/ui/atoms/logo";
import { MaskedInput, PhoneInput, UrlInput } from "@/components/ui/atoms/form-fields";

export const fixture = <>
  <Input variant="glass" radius="xl" aria-invalid />
  <InputGroup variant="soft"><InputGroupAddon>@</InputGroupAddon><Input /></InputGroup>
  <Textarea variant="soft" />
  <Checkbox aria-label="Accept" /><RadioGroup><RadioGroupItem value="a" aria-label="A" /></RadioGroup><Switch aria-label="Enabled" />
  <Card variant="glass"><CardHeader><CardTitle>Card</CardTitle></CardHeader></Card>
  <GlassCard /><ExpandableCard summary="More">Details</ExpandableCard>
  <Typography variant="display">Modern <TextEffect effect="shimmer">UI</TextEffect></Typography>
  <Logo effect="shine" radius="full" />
  <MaskedInput mask="AA-####" /><PhoneInput countryCode="+90" mask="(###) ### ## ##" /><UrlInput protocol="https://" />
</>;
`);
await writeFile(resolve(fixture, "tsconfig.json"), JSON.stringify({ compilerOptions: { strict: true, noEmit: true, target: "ES2020", lib: ["DOM", "ES2020"], module: "ESNext", moduleResolution: "Bundler", jsx: "react-jsx", esModuleInterop: true, skipLibCheck: true, baseUrl: ".", paths: { "@/*": ["./*"] } }, include: ["**/*.ts", "**/*.tsx"] }, null, 2));

const result = spawnSync(process.execPath, [resolve(root, "node_modules/typescript/bin/tsc"), "--project", resolve(fixture, "tsconfig.json")], { cwd: fixture, encoding: "utf8" });
if (result.status !== 0) {
  process.stderr.write(`${result.stdout ?? ""}${result.stderr ?? ""}${result.error?.message ?? ""}`);
  process.exit(result.status ?? 1);
}
console.log(`Phase 5 clean fixture typecheck passed (${fixture}).`);
