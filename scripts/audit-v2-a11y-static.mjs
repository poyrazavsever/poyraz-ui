#!/usr/bin/env node

/**
 * Read-only, dependency-free accessibility signal scan.
 *
 * This is not an axe replacement and does not claim WCAG conformance. It
 * surfaces source patterns that require manual or browser-assisted review.
 */

import { readFile, readdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const componentRoot = join(root, "components", "ui");
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
    else if (path.endsWith(".tsx")) files.push(path);
  }
  return files;
}

function lineAt(source, offset) {
  return source.slice(0, offset).split("\n").length;
}

function location(path, source, offset) {
  const normalized = path.startsWith(root)
    ? relative(root, path).replaceAll("\\", "/")
    : path.replaceAll("\\", "/");
  return `${normalized}:${lineAt(source, offset)}`;
}

async function sourceFiles() {
  if (!sourceRef) return walk(componentRoot);
  const { stdout } = await execFileAsync(
    "git",
    ["ls-tree", "-r", "--name-only", sourceRef, "--", "components/ui"],
    { cwd: root, maxBuffer: 10 * 1024 * 1024 },
  );
  return stdout
    .split("\n")
    .filter((path) => path.endsWith(".tsx"))
    .sort();
}

async function sourceText(path) {
  if (!sourceRef) return readFile(path, "utf8");
  const { stdout } = await execFileAsync("git", ["show", `${sourceRef}:${path}`], {
    cwd: root,
    maxBuffer: 10 * 1024 * 1024,
  });
  return stdout;
}

const report = {
  sourceRef: sourceRef ?? "worktree",
  scannedFiles: 0,
  nativeButtons: 0,
  nativeInputs: 0,
  listboxes: 0,
  options: 0,
  roles: {},
  signals: {
    clickOnNonInteractiveElement: [],
    sortableHeaderWithoutAriaSort: [],
    listboxWithoutActiveDescendantInFile: [],
    disclosureWithoutExpandedInOpeningTag: [],
    formInputWithoutIdOrAriaLabelInOpeningTag: [],
  },
};

for (const path of await sourceFiles()) {
  report.scannedFiles += 1;
  const source = await sourceText(path);
  report.nativeButtons += [...source.matchAll(/<button\b/g)].length;
  report.nativeInputs += [...source.matchAll(/<input\b/g)].length;
  report.listboxes += [...source.matchAll(/role=["']listbox["']/g)].length;
  report.options += [...source.matchAll(/role=["']option["']/g)].length;

  for (const match of source.matchAll(/role=["']([^"']+)["']/g)) {
    report.roles[match[1]] = (report.roles[match[1]] ?? 0) + 1;
  }

  for (const match of source.matchAll(/<(div|span|th)\b[^>]*\bonClick=/g)) {
    const openingTag = match[0];
    if (!/\brole=|\btabIndex=/.test(openingTag)) {
      report.signals.clickOnNonInteractiveElement.push(location(path, source, match.index));
    }
  }

  for (const match of source.matchAll(/<th\b[\s\S]*?onClick=[\s\S]*?>/g)) {
    if (!/aria-sort=/.test(match[0])) {
      report.signals.sortableHeaderWithoutAriaSort.push(location(path, source, match.index));
    }
  }

  if (/role=["']listbox["']/.test(source) && !/aria-activedescendant=/.test(source)) {
    report.signals.listboxWithoutActiveDescendantInFile.push(
      path.startsWith(root)
        ? relative(root, path).replaceAll("\\", "/")
        : path.replaceAll("\\", "/"),
    );
  }

  for (const match of source.matchAll(/<button\b[\s\S]*?onClick=[\s\S]*?>/g)) {
    const openingTag = match[0];
    const nearby = source.slice(match.index, match.index + 900);
    if (/setOpen\s*\(/.test(nearby) && !/aria-expanded=/.test(openingTag)) {
      report.signals.disclosureWithoutExpandedInOpeningTag.push(
        location(path, source, match.index),
      );
    }
  }

  for (const match of source.matchAll(/<input\b[\s\S]*?>/g)) {
    const openingTag = match[0];
    if (!/\bid=|aria-label=|aria-labelledby=/.test(openingTag)) {
      report.signals.formInputWithoutIdOrAriaLabelInOpeningTag.push(
        location(path, source, match.index),
      );
    }
  }
}

for (const values of Object.values(report.signals)) values.sort();
report.roles = Object.fromEntries(Object.entries(report.roles).sort());

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log("# Poyraz UI v2 static accessibility signals\n");
  console.log(`- TSX files: ${report.scannedFiles}`);
  console.log(`- Native buttons: ${report.nativeButtons}`);
  console.log(`- Native inputs: ${report.nativeInputs}`);
  console.log(`- listbox/option roles: ${report.listboxes}/${report.options}`);
  for (const [name, values] of Object.entries(report.signals)) {
    console.log(`\n## ${name} (${values.length})\n`);
    if (!values.length) console.log("- None found by this heuristic.");
    else for (const value of values) console.log(`- \`${value}\``);
  }
  console.log(
    "\n> These are review signals, not confirmed violations. Validate rendered output with axe and keyboard/screen-reader testing.",
  );
}
