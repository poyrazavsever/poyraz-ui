#!/usr/bin/env node

import { access, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import prettier from "prettier";

const outputPath = resolve("docs/v3/audits/phase15-dod-evidence.md");
const check = process.argv.includes("--check");
const manifest = JSON.parse(await readFile("package.json", "utf8"));
const registry = JSON.parse(await readFile("public/r/registry.json", "utf8"));
const docsRegistry = JSON.parse(await readFile("src/docs-registry.json", "utf8"));
const docsItems = new Map(docsRegistry.items.map((item) => [item.name, item]));
const supportingDocs = new Map([
  ["poyraz-recipes", "/docs/theme"],
  ["card-variants", "/docs/atoms/card"],
  ["data-table-core", "/docs/organisms/data-table"],
  ["sidebar-provider", "/docs/organisms/sidebar"],
  ["footer-newsletter", "/docs/organisms/footer"],
]);

const interactiveEvidence = new Map([
  ["button", "button unit/a11y + browser interaction/reduced-motion"],
  ["command-palette", "command-palette a11y keyboard selection test"],
  ["navbar", "navbar drill DOM test + navbar browser/a11y suites"],
  ["tabs", "tabs keyboard browser test + Phase 6 contract"],
  ["dialog", "dialog focus-trap browser test + Phase 6 contract"],
  ["announcement-bar", "announcement-bar DOM exit/focus contract"],
  ["accordion", "Phase 6 contract + browser accessibility suite"],
  ["autocomplete", "Phase 6/7 contract + browser accessibility suite"],
  ["calendar", "Phase 6/7 contract + browser accessibility suite"],
  ["checkbox", "Phase 5 contract + browser accessibility suite"],
  ["data-table", "Phase 7 contract + browser accessibility suite"],
  ["data-table-core", "Phase 7 contract + browser accessibility suite"],
  ["date-picker", "Phase 6/7 contract + browser accessibility suite"],
  ["drawer", "Phase 6 contract + browser accessibility suite"],
  ["dropdown-menu", "Phase 6 contract + browser accessibility suite"],
  ["footer-newsletter", "Phase 8 contract + browser accessibility suite"],
  ["form", "Phase 7 contract + browser accessibility suite"],
  ["form-fields", "Phase 5 contract + autofill engine matrix"],
  ["hover-card", "Phase 6 contract + reduced-motion context"],
  ["modal", "Phase 6 contract + browser accessibility suite"],
  ["pagination", "Phase 6 contract + browser accessibility suite"],
  ["popover", "Phase 6 contract + browser accessibility suite"],
  ["radio-group", "Phase 5 contract + browser accessibility suite"],
  ["select", "Phase 6 contract + browser accessibility suite"],
  ["sheet", "Phase 6 contract + browser accessibility suite"],
  ["sidebar", "Phase 8 contract + browser accessibility suite"],
  ["switch", "Phase 5 contract + browser accessibility suite"],
  ["tooltip", "Phase 6 contract + browser accessibility suite"],
]);

function packageTarget(exportValue, kind) {
  if (typeof exportValue === "string") return exportValue;
  return exportValue?.[kind]?.default ?? exportValue?.[kind]?.types ?? exportValue?.default;
}

const packageRows = [];
for (const [subpath, value] of Object.entries(manifest.exports)) {
  const display = subpath === "." ? "poyraz-ui" : `poyraz-ui${subpath.slice(1)}`;
  if (typeof value === "string") {
    await access(resolve(value));
    packageRows.push(`| \`${display}\` | CSS asset | CSS asset | N/A | \`test:package-exports\` |`);
    continue;
  }
  const esm = packageTarget(value, "import");
  const cjs = packageTarget(value, "require");
  const types = value.import?.types;
  await Promise.all([esm, cjs, types].map((path) => access(resolve(path))));
  packageRows.push(
    `| \`${display}\` | \`${esm}\` | \`${cjs}\` | \`${types}\` | \`test:package-exports\` |`,
  );
}

const registryRows = [];
for (const item of [...registry.items].sort((left, right) => left.name.localeCompare(right.name))) {
  const generatedItemPath = resolve("public/r", `${item.name}.json`);
  await access(generatedItemPath);
  const generatedItem = await readFile(generatedItemPath, "utf8");
  const docs = docsItems.get(item.name);
  const isFoundation = [
    "registry:lib",
    "registry:theme",
    "registry:style",
    "registry:hook",
  ].includes(item.type);
  const supportingDoc = supportingDocs.get(item.name);
  if (!docs && !supportingDoc && !isFoundation) {
    throw new Error(`${item.name}: component/block registry item is missing docs metadata`);
  }
  const sourceEvidence =
    (item.files ?? []).length > 0 ? "registry file/graph checks" : "schema metadata";
  const interaction = interactiveEvidence.get(item.name) ?? "N/A (non-interactive/composite)";
  const glass = generatedItem.includes("glass")
    ? "light/dark visual + glass fallback/background contexts"
    : "N/A";
  registryRows.push(
    `| \`${item.name}\` | ${sourceEvidence} | all-item clean Next/Vite fixture | ${
      docs
        ? `\`${docs.href}\``
        : supportingDoc
          ? `\`${supportingDoc}\` (supporting item)`
          : "N/A (foundation/hook)"
    } | ${interaction} | ${glass} |`,
  );
}

for (const docsItem of docsRegistry.items) {
  if (!registry.items.some((item) => item.name === docsItem.name)) {
    throw new Error(`${docsItem.name}: docs metadata has no registry item`);
  }
}

const content = await prettier.format(
  `# Faz 15 Definition of Done kanıt matrisi

Kayıt tarihi: 2026-07-13. Bu dosya \`pnpm evidence:generate\` ile üretilir ve
\`pnpm evidence:check\` ile package export, registry item, docs metadata ve source isim drift'i
release öncesinde engellenir.

Global coverage tek başına release kanıtı değildir. Baseline
\`docs/v3/audits/phase15-coverage-baseline.json\` içinde tutulur; kritik davranış kanıtı
aşağıdaki component satırlarında bağlanır.

## Npm public exportları

| Export | ESM/CSS | CJS | Types | Kanıt |
| --- | --- | --- | --- | --- |
${packageRows.join("\n")}

Registry-only maddeler package subpath satırları için \`N/A\` kabul edilir; npm exportları
source-copy registry item'ı değil, merkezi runtime entry point'leridir.

## Registry itemları

| Item | Metadata/source | Clean consumer | Docs | Keyboard/focus/reduced motion | Glass |
| --- | --- | --- | --- | --- | --- |
${registryRows.join("\n")}

## Kanıt komutları

- \`pnpm test:package-exports\`: ESM, CJS ve TypeScript resolution.
- \`pnpm registry:check && pnpm registry:smoke\`: metadata, graph ve tüm item materialization.
- \`pnpm fixture:clean-install\`: tüm registry itemlarıyla izole Next/Vite typecheck ve build.
- \`pnpm registry:consumer-smoke\`: gerçek shadcn local/GitHub Button install ve CLI davranışları.
- \`pnpm test && pnpm test:browser\`: release-critical DOM, a11y, keyboard, focus ve motion akışları.
- \`pnpm test:coverage\`: baseline regression floor; component readiness yerine geçmez.
`,
  { filepath: outputPath },
);

if (check) {
  const current = await readFile(outputPath, "utf8").catch(() => "");
  if (current !== content) {
    console.error("Phase 15 DoD evidence is stale. Run pnpm evidence:generate.");
    process.exit(1);
  }
  console.log(`Phase 15 DoD evidence is synchronized (${registryRows.length} registry items).`);
} else {
  await writeFile(outputPath, content, "utf8");
  console.log(`Phase 15 DoD evidence generated (${registryRows.length} registry items).`);
}
