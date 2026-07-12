#!/usr/bin/env node

/**
 * Read-only size snapshot for an already-built Poyraz UI workspace.
 * Run `pnpm build:lib` and/or `pnpm build` separately before this script.
 * This script never invokes a build and never writes an artifact.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function walk(directory) {
  try {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = [];
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) files.push(...(await walk(path)));
      else files.push(path);
    }
    return files;
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}

async function snapshot(directory) {
  const absolute = join(root, directory);
  const files = await walk(absolute);
  const rows = [];
  for (const path of files) {
    const metadata = await stat(path);
    rows.push({
      file: relative(root, path).replaceAll("\\", "/"),
      bytes: metadata.size,
    });
  }
  return {
    present: files.length > 0,
    fileCount: rows.length,
    totalBytes: rows.reduce((sum, row) => sum + row.bytes, 0),
    files: rows,
  };
}

const packageJson = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
const result = {
  capturedAt: new Date().toISOString(),
  packageVersion: packageJson.version,
  dist: await snapshot("dist"),
  next: await snapshot(".next"),
};

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log("# Poyraz UI v2 build-output snapshot\n");
  console.log(`- Package version: \`${result.packageVersion}\``);
  console.log(
    `- dist: ${result.dist.present ? `${result.dist.fileCount} files / ${result.dist.totalBytes} bytes` : "not present"}`,
  );
  console.log(
    `- .next: ${result.next.present ? `${result.next.fileCount} files / ${result.next.totalBytes} bytes` : "not present"}`,
  );
  if (result.dist.present) {
    console.log("\n| dist file | bytes |");
    console.log("| --- | ---: |");
    for (const row of result.dist.files) console.log(`| \`${row.file}\` | ${row.bytes} |`);
  }
}
