#!/usr/bin/env node

/**
 * Read-only source audit for the Poyraz UI v2 baseline.
 *
 * Usage:
 *   node scripts/audit-v2-source.mjs
 *   node scripts/audit-v2-source.mjs --json
 *
 * The script never writes files. Its checks are intentionally static and
 * heuristic; the human-reviewed conclusions live in docs/v3/audits.
 */

import { readFile, readdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDirectory, "..");
const scanRoots = ["components/ui", "src", "app"];
const execFileAsync = promisify(execFile);
const V2_BASELINE_REF = "0437769ce7597a2c86e0d93d98be5158fa09e79a";
const refArgument = process.argv.find((argument) => argument.startsWith("--ref="));
const sourceRef = process.argv.includes("--worktree")
  ? null
  : (refArgument?.slice("--ref=".length) ?? V2_BASELINE_REF);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }

  return files;
}

function normalize(path) {
  if (!path.startsWith(root)) return path.replaceAll("\\", "/");
  return relative(root, path).replaceAll("\\", "/");
}

async function sourceFiles(directory, predicate = () => true) {
  if (!sourceRef) {
    return (await walk(join(root, directory))).map(normalize).filter(predicate);
  }

  const { stdout } = await execFileAsync(
    "git",
    ["ls-tree", "-r", "--name-only", sourceRef, "--", directory],
    { cwd: root, maxBuffer: 10 * 1024 * 1024 },
  );
  return stdout.split("\n").filter(Boolean).filter(predicate).sort();
}

async function sourceText(path) {
  if (!sourceRef) return readFile(join(root, path), "utf8");
  const { stdout } = await execFileAsync("git", ["show", `${sourceRef}:${path}`], {
    cwd: root,
    maxBuffer: 10 * 1024 * 1024,
  });
  return stdout;
}

function lineNumberAt(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function extractImports(source) {
  const imports = [];
  const importPattern = /^import\s+[\s\S]*?\s+from\s+["']([^"']+)["'];?$/gm;
  for (const match of source.matchAll(importPattern)) imports.push(match[1]);
  return [...new Set(imports)].sort();
}

function extractDynamicImports(source) {
  return [
    ...new Set(
      [...source.matchAll(/\bimport\s*\(\s*["']([^"']+)["']\s*\)/g)].map((match) => match[1]),
    ),
  ].sort();
}

function extractNamedExports(source, sourceFile) {
  const exports = [];
  const exportPattern = /export\s+(type\s+)?\{([\s\S]*?)\}\s+from\s+["']([^"']+)["'];/g;

  for (const match of source.matchAll(exportPattern)) {
    const typeOnlyBlock = Boolean(match[1]);
    for (const rawName of match[2].split(",")) {
      const cleaned = rawName.replace(/\/\*[\s\S]*?\*\//g, "").trim();
      if (!cleaned) continue;
      const inlineType = cleaned.startsWith("type ");
      const withoutType = cleaned.replace(/^type\s+/, "");
      const [imported, alias] = withoutType.split(/\s+as\s+/);
      exports.push({
        name: (alias ?? imported).trim(),
        kind: typeOnlyBlock || inlineType ? "type" : "runtime",
        from: match[3],
        barrel: sourceFile,
      });
    }
  }

  return exports;
}

function determineClientBoundary(source, imports) {
  const explicit = /^\s*["']use client["'];/m.test(source);
  const hooks = [
    ...new Set(
      [...source.matchAll(/React\.(use[A-Z][A-Za-z0-9]*)\s*\(/g)].map((match) => match[1]),
    ),
  ].sort();
  const browserApis = [
    ...new Set(
      [...source.matchAll(/\b(window|document|navigator|localStorage|matchMedia)\b/g)].map(
        (match) => match[1],
      ),
    ),
  ].sort();
  const clientDependencies = imports.filter(
    (name) => name.startsWith("@radix-ui/react-") && name !== "@radix-ui/react-slot",
  );
  clientDependencies.push(
    ...imports.filter((name) => ["react-hook-form", "sonner", "vaul"].includes(name)),
  );

  if (explicit || hooks.length || browserApis.length || clientDependencies.length) {
    return {
      classification: "client-required",
      explicit,
      hooks,
      browserApis,
      clientDependencies: [...new Set(clientDependencies)].sort(),
    };
  }

  if (imports.includes("@radix-ui/react-slot")) {
    return {
      classification: "server-safe-wrapper/client-slot-dependency",
      explicit,
      hooks,
      browserApis,
      clientDependencies: ["@radix-ui/react-slot"],
    };
  }

  return {
    classification: "server-safe-by-static-review",
    explicit,
    hooks,
    browserApis,
    clientDependencies: [],
  };
}

function detectCapabilities(source) {
  const controlledSignals = [
    "value",
    "defaultValue",
    "onValueChange",
    "checked",
    "defaultChecked",
    "onCheckedChange",
    "open",
    "defaultOpen",
    "onOpenChange",
  ].filter((signal) => new RegExp(`\\b${signal}\\b`).test(source));

  return {
    className: /\bclassName\b/.test(source),
    asChild: /\basChild\b/.test(source),
    ref: /\bforwardRef\b/.test(source),
    controlledSignals,
    loading: /\bloading\b/.test(source),
    cva: /\bcva\s*\(/.test(source),
    dataSlot: /data-slot=/.test(source),
    dataVariant: /data-variant=/.test(source),
    dataSize: /data-size=/.test(source),
  };
}

async function auditComponents() {
  const files = await sourceFiles("components/ui", (path) => path.endsWith(".tsx"));
  const rows = [];

  for (const path of files) {
    const source = await sourceText(path);
    const imports = extractImports(source);
    const dynamicImports = extractDynamicImports(source);
    const file = normalize(path);
    const [, , classification] = file.split("/");
    const internalDependencies = imports.filter((name) => name.startsWith("@/"));
    const externalDependencies = imports.filter(
      (name) => name !== "react" && !name.startsWith("@/"),
    );

    rows.push({
      file,
      family: file
        .replace(/^components\/ui\/(atoms|molecules|organisms)\//, "")
        .replace(/\.tsx$/, ""),
      classification: classification.replace(/s$/, ""),
      dependencies: {
        internal: internalDependencies,
        external: externalDependencies,
        optionalDynamic: dynamicImports,
      },
      clientBoundary: determineClientBoundary(source, imports),
      capabilities: detectCapabilities(source),
    });
  }

  return rows;
}

async function auditPublicApi() {
  const barrels = ["src/atoms/index.ts", "src/molecules/index.ts", "src/organisms/index.ts"];
  const entries = [];

  for (const barrel of barrels) {
    const source = await sourceText(barrel);
    const classification = barrel.split("/")[1].replace(/s$/, "");
    for (const item of extractNamedExports(source, barrel)) {
      entries.push({ ...item, classification });
    }
  }

  entries.push({
    name: "cn",
    kind: "runtime",
    from: "./utils",
    barrel: "src/index.ts",
    classification: "utility",
  });

  const themesSource = await sourceText("src/themes/index.ts");
  for (const match of themesSource.matchAll(
    /^export\s+(interface|type|const|function|class)\s+([A-Za-z0-9_$]+)/gm,
  )) {
    entries.push({
      name: match[2],
      kind: ["interface", "type"].includes(match[1]) ? "type" : "runtime",
      from: "src/themes/index.ts",
      barrel: "src/themes/index.ts",
      classification: "theme",
    });
  }

  const packageJson = JSON.parse(await sourceText("package.json"));
  for (const item of entries) {
    if (/^use[A-Z]/.test(item.name)) item.classification = "hook";
    if (item.name === "toast") item.classification = "utility";
  }
  return {
    packageVersion: packageJson.version,
    packageSubpaths: Object.keys(packageJson.exports),
    entries: entries.sort((a, b) =>
      `${a.classification}:${a.name}`.localeCompare(`${b.classification}:${b.name}`),
    ),
  };
}

async function auditColorsAndTokens() {
  const eligible = [];
  for (const directory of scanRoots) {
    eligible.push(...(await sourceFiles(directory, (path) => /\.(css|ts|tsx)$/.test(path))));
  }

  const palettePattern =
    /\b(?:bg|text|border|ring|outline|shadow|fill|stroke|from|via|to)-(?:(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:[0-9]{2,3})(?:\/[0-9]{1,3})?|(?:black|white)(?:\/[0-9]{1,3})?)\b/g;
  const hexPattern = /#[0-9a-fA-F]{3,8}\b/g;
  const tokenPattern = /--poyraz-[a-z0-9-]+/g;
  const hardColors = [];
  const tokens = new Map();

  for (const path of eligible.sort()) {
    const source = await sourceText(path);
    const lines = source.split("\n");
    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];
      const palette = [...line.matchAll(palettePattern)].map((match) => match[0]);
      const hex = [...line.matchAll(hexPattern)].map((match) => match[0]);
      if (palette.length || hex.length) {
        hardColors.push({
          file: normalize(path),
          line: index + 1,
          palette,
          hex,
          context: line.trim(),
        });
      }
    }

    for (const match of source.matchAll(tokenPattern)) {
      const token = match[0];
      const line = lineNumberAt(source, match.index);
      if (!tokens.has(token)) tokens.set(token, []);
      tokens.get(token).push({ file: normalize(path), line });
    }
  }

  return {
    hardColors,
    tokens: [...tokens.entries()]
      .map(([token, occurrences]) => ({ token, occurrences }))
      .sort((a, b) => a.token.localeCompare(b.token)),
  };
}

function renderMarkdown(audit) {
  const lines = [
    "# Poyraz UI v2 source audit",
    "",
    `- Package version: \`${audit.publicApi.packageVersion}\``,
    `- Public symbols: ${audit.publicApi.entries.length}`,
    `- Component source families: ${audit.components.length}`,
    `- Hard-color source lines: ${audit.colorsAndTokens.hardColors.length}`,
    `- Distinct \`--poyraz-*\` names: ${audit.colorsAndTokens.tokens.length}`,
    "",
    "## Public API",
    "",
    "| Classification | Kind | Symbol | Source |",
    "| --- | --- | --- | --- |",
  ];

  for (const item of audit.publicApi.entries) {
    lines.push(`| ${item.classification} | ${item.kind} | \`${item.name}\` | \`${item.from}\` |`);
  }

  lines.push(
    "",
    "## Component families",
    "",
    "| Family | Layer | Client boundary | CVA | className | asChild | ref | Controlled signals | Loading |",
    "| --- | --- | --- | --- | --- | --- | --- | --- | --- |",
  );

  for (const item of audit.components) {
    const capability = item.capabilities;
    lines.push(
      `| \`${item.family}\` | ${item.classification} | ${item.clientBoundary.classification} | ${capability.cva ? "yes" : "no"} | ${capability.className ? "yes" : "no"} | ${capability.asChild ? "yes" : "no"} | ${capability.ref ? "yes" : "no"} | ${capability.controlledSignals.join(", ") || "none"} | ${capability.loading ? "yes" : "no"} |`,
    );
  }

  lines.push(
    "",
    "> Static heuristics are evidence, not an accessibility or runtime verdict. See docs/v3/audits for reviewed conclusions.",
  );
  return `${lines.join("\n")}\n`;
}

const audit = {
  generatedAt: new Date().toISOString(),
  sourceRef: sourceRef ?? "worktree",
  publicApi: await auditPublicApi(),
  components: await auditComponents(),
  colorsAndTokens: await auditColorsAndTokens(),
};

if (process.argv.includes("--json")) console.log(JSON.stringify(audit, null, 2));
else console.log(renderMarkdown(audit));
