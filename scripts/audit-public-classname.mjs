#!/usr/bin/env node

import { spawnSync } from "node:child_process";

const result = spawnSync("pnpm", ["exec", "eslint", "components/ui", "--format", "json"], {
  encoding: "utf8",
  shell: process.platform === "win32",
});

if (result.error) throw result.error;
if (result.status !== 0 && !result.stdout) {
  process.stderr.write(result.stderr);
  process.exit(result.status ?? 1);
}

const reports = JSON.parse(result.stdout || "[]");
const failures = reports.flatMap((report) =>
  report.messages
    .filter(
      (message) =>
        message.ruleId === "@typescript-eslint/no-unused-vars" &&
        /['\"]className['\"] is defined but never used/.test(message.message),
    )
    .map((message) => `${report.filePath}:${message.line}:${message.column} ${message.message}`),
);

if (failures.length > 0) {
  console.error("Public className forwarding audit failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Public className forwarding audit passed.");
