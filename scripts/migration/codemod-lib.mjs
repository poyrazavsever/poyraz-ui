import ts from "typescript";

function renderSpecifier(specifier) {
  const imported = specifier.propertyName?.text ?? specifier.name.text;
  const alias = specifier.name.text === imported ? "" : ` as ${specifier.name.text}`;
  return `${specifier.isTypeOnly ? "type " : ""}${imported}${alias}`;
}

function renderImport(source, specifiers, quote, typeOnly = false) {
  const names = specifiers.map(renderSpecifier).join(", ");
  return `import${typeOnly ? " type" : ""} { ${names} } from ${quote}${source}${quote};`;
}

export function transformV2Imports(source, fileName, exportMap, targetExists) {
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const edits = [];
  const skipped = [];
  let transformedSpecifiers = 0;

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement) || !ts.isStringLiteral(statement.moduleSpecifier))
      continue;
    const moduleName = statement.moduleSpecifier.text;
    const moduleMap = exportMap.get(moduleName);
    if (!moduleMap) continue;

    const bindings = statement.importClause?.namedBindings;
    if (!bindings || !ts.isNamedImports(bindings)) {
      skipped.push(`${moduleName}: default or namespace import`);
      continue;
    }

    const groups = new Map();
    const remaining = [];
    for (const specifier of bindings.elements) {
      const imported = specifier.propertyName?.text ?? specifier.name.text;
      const mapping = moduleMap.get(imported);
      if (!mapping || !targetExists(mapping.target)) {
        remaining.push(specifier);
        skipped.push(
          `${moduleName}: ${imported}${mapping ? " target is not installed" : " is not mapped"}`,
        );
        continue;
      }
      const group = groups.get(mapping.target) ?? [];
      group.push(specifier);
      groups.set(mapping.target, group);
      transformedSpecifiers += 1;
    }

    if (groups.size === 0) continue;
    const rawModule = statement.moduleSpecifier.getText(sourceFile);
    const quote = rawModule[0] === "'" ? "'" : '"';
    const replacements = [...groups]
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([target, specifiers]) =>
        renderImport(target, specifiers, quote, statement.importClause?.isTypeOnly),
      );
    if (remaining.length > 0) {
      replacements.push(
        renderImport(moduleName, remaining, quote, statement.importClause?.isTypeOnly),
      );
    }

    edits.push({
      start: statement.getStart(sourceFile),
      end: statement.getEnd(),
      text: replacements.join("\n"),
    });
  }

  let output = source;
  for (const edit of edits.sort((left, right) => right.start - left.start)) {
    output = `${output.slice(0, edit.start)}${edit.text}${output.slice(edit.end)}`;
  }

  return { changed: edits.length > 0, output, skipped, transformedSpecifiers };
}
