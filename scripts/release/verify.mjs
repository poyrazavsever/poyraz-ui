#!/usr/bin/env node

import { spawnSync } from "node:child_process";

import { buildReleaseArtifacts } from "./build-artifacts.mjs";
import { parseArguments, runReleasePreflight } from "./release-lib.mjs";

const args = parseArguments(process.argv.slice(2));
const version = String(args.version ?? "3.0.0");
const channel = String(args.channel ?? "stable");
const allowDirty = args["allow-dirty"] === true;
const diagnostic = args.diagnostic === true;
const isWindows = process.platform === "win32";

function runPnpm(script) {
  const command = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "pnpm";
  const commandArgs = isWindows ? ["/d", "/s", "/c", "pnpm.cmd", script] : [script];
  const result = spawnSync(command, commandArgs, { stdio: "inherit", shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`pnpm ${script} exited with ${result.status}.`);
}

try {
  runPnpm("registry:build");
  await runReleasePreflight({
    version,
    channel,
    allowDirty,
    enforcePackageVersion: !diagnostic,
  });
  runPnpm("quality");
  runPnpm("fixture:clean-install");
  runPnpm("build");
  const artifacts = await buildReleaseArtifacts({ version, channel });
  console.log(
    `Release verification passed (${version}, ${artifacts.registryItems} items, ${artifacts.files} artifacts).`,
  );
} catch (error) {
  console.error(`Release verification failed: ${error.message}`);
  process.exitCode = 1;
}
