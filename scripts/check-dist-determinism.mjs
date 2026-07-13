#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { access } from "node:fs/promises";

const isWindows = process.platform === "win32";

function run(command, args) {
  const executable = isWindows && command === "pnpm" ? (process.env.ComSpec ?? "cmd.exe") : command;
  const commandArgs =
    isWindows && command === "pnpm" ? ["/d", "/s", "/c", "pnpm.cmd", ...args] : args;
  const result = spawnSync(executable, commandArgs, { stdio: "inherit", shell: false });
  if (result.error) throw result.error;
  return result.status ?? 1;
}

if (run("pnpm", ["build:lib"]) !== 0) {
  console.error("Library build failed before the deterministic dist check.");
  process.exit(1);
}

const tracked = spawnSync("git", ["ls-files", "--", "dist"], {
  encoding: "utf8",
  shell: false,
});
if (tracked.error) throw tracked.error;
if (tracked.stdout.trim()) {
  console.error("dist must be produced at build/publish time and must not contain tracked files.");
  process.exit(1);
}

const required = [
  "dist/index.js",
  "dist/index.cjs",
  "dist/index.d.ts",
  "dist/index.d.cts",
  "dist/atoms/index.js",
  "dist/atoms/index.cjs",
  "dist/atoms/index.d.ts",
  "dist/atoms/index.d.cts",
  "dist/molecules/index.js",
  "dist/molecules/index.cjs",
  "dist/molecules/index.d.ts",
  "dist/molecules/index.d.cts",
  "dist/organisms/index.js",
  "dist/organisms/index.cjs",
  "dist/organisms/index.d.ts",
  "dist/organisms/index.d.cts",
  "dist/themes/index.js",
  "dist/themes/index.cjs",
  "dist/themes/index.d.ts",
  "dist/themes/index.d.cts",
];
await Promise.all(required.map((path) => access(path)));

console.log("Untracked build-time dist contains every ESM, CJS, and declaration entry.");
