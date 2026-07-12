#!/usr/bin/env node

import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";

import { loadGeneratedRegistry, materializeRegistry } from "../registry/install-smoke-lib.mjs";

const isWindows = process.platform === "win32";
const packageManager = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "pnpm";
const items = await loadGeneratedRegistry();
const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-clean-fixtures-"));

function run(args, cwd) {
  return new Promise((resolvePromise, reject) => {
    const commandArgs = isWindows ? ["/d", "/s", "/c", "pnpm.cmd", ...args] : args;
    const child = spawn(packageManager, commandArgs, { cwd, stdio: "inherit", shell: false });
    child.on("error", reject);
    child.on("exit", (code) =>
      code === 0
        ? resolvePromise()
        : reject(new Error(`pnpm ${args.join(" ")} exited with ${code}`)),
    );
  });
}

try {
  for (const fixture of ["next", "vite"]) {
    const source = resolve("fixtures", fixture);
    const destination = join(temporaryRoot, fixture);
    await cp(source, destination, {
      recursive: true,
      filter: (path) => !/[\\/](?:\.registry|\.next|dist|node_modules)(?:[\\/]|$)/.test(path),
    });
    const installed = await materializeRegistry({
      items,
      roots: [...items.keys()],
      destination: join(destination, ".registry"),
    });
    const manifestPath = join(destination, "package.json");
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    manifest.dependencies = { ...manifest.dependencies, ...installed.dependencies };
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

    await run(["install", "--ignore-workspace", "--frozen-lockfile=false"], destination);
    await run(["run", "typecheck"], destination);
    await run(["run", "build"], destination);
  }
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

console.log("Clean Next.js and Vite fixture installs, typechecks, and production builds passed.");
