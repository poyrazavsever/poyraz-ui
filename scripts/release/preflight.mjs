#!/usr/bin/env node

import { parseArguments, runReleasePreflight } from "./release-lib.mjs";

const args = parseArguments(process.argv.slice(2));
const version = String(args.version ?? "3.0.0");
const channel = String(args.channel ?? "stable");

try {
  const result = await runReleasePreflight({
    version,
    channel,
    allowDirty: args["allow-dirty"] === true,
  });
  console.log(
    `Release preflight passed (${result.tag}, npm ${result.packageVersion} -> ${result.npmDistTag}, ${result.registryItems} registry items).`,
  );
} catch (error) {
  console.error(`Release preflight failed:\n${error.message}`);
  process.exitCode = 1;
}
