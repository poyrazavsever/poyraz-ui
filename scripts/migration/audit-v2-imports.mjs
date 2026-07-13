#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { relative } from "node:path";

import ts from "typescript";

import { collectSourceFiles } from "./file-search.mjs";
import { V2_MODULES } from "./export-map.mjs";

const failOnV2 = process.argv.includes("--fail-on-v2");
const inputs = process.argv.filter((value) => !value.startsWith("--"));
const files = await collectSourceFiles(inputs.length > 0 ? inputs : ["src", "app", "components"]);
const findings = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier))
      continue;
    if (!V2_MODULES.has(statement.moduleSpecifier.text)) continue;
    const position = sourceFile.getLineAndCharacterOfPosition(statement.getStart(sourceFile));
    findings.push({
      file: relative(process.cwd(), file),
      line: position.line + 1,
      module: statement.moduleSpecifier.text,
    });
  }
}

for (const finding of findings) console.log(`${finding.file}:${finding.line} ${finding.module}`);
console.log(
  `V2 import audit: ${findings.length} import${findings.length === 1 ? "" : "s"} in ${files.length} files.`,
);
if (failOnV2 && findings.length > 0) process.exit(1);
