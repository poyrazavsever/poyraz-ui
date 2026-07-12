import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import ts from "typescript";

export const V2_MODULES = new Set([
  "poyraz-ui",
  "poyraz-ui/atoms",
  "poyraz-ui/molecules",
  "poyraz-ui/organisms",
  "poyraz-ui/themes",
]);

const barrelFiles = {
  "poyraz-ui/atoms": "src/atoms/index.ts",
  "poyraz-ui/molecules": "src/molecules/index.ts",
  "poyraz-ui/organisms": "src/organisms/index.ts",
};

const cardBlocks = new Map(
  [
    "ArticleCard",
    "ImageCard",
    "NewsCard",
    "StatsCard",
    "TestimonialCard",
    "PricingCard",
    "ProductCard",
  ].map((name) => [name, name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()]),
);

function moduleTarget(moduleName, symbol) {
  if (moduleName.endsWith("/card-templates")) {
    const item = cardBlocks.get(symbol);
    return item ? `@/components/ui/blocks/card-templates/${item}` : null;
  }
  return moduleName.startsWith("@/") ? moduleName : null;
}

export async function buildV2ExportMap(root = process.cwd()) {
  const modules = new Map();

  for (const [v2Module, barrel] of Object.entries(barrelFiles)) {
    const source = await readFile(resolve(root, barrel), "utf8");
    const sourceFile = ts.createSourceFile(barrel, source, ts.ScriptTarget.Latest, true);
    const symbols = new Map();

    for (const statement of sourceFile.statements) {
      if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier) continue;
      if (!statement.exportClause || !ts.isNamedExports(statement.exportClause)) continue;
      const from = statement.moduleSpecifier.text;
      for (const element of statement.exportClause.elements) {
        const exported = element.name.text;
        const original = element.propertyName?.text ?? exported;
        const target = moduleTarget(from, original);
        if (target) symbols.set(exported, { item: target.split("/").at(-1), target });
      }
    }

    modules.set(v2Module, symbols);
  }

  const rootSymbols = new Map();
  for (const symbols of modules.values()) {
    for (const [name, mapping] of symbols) rootSymbols.set(name, mapping);
  }
  modules.set("poyraz-ui", rootSymbols);

  return modules;
}
