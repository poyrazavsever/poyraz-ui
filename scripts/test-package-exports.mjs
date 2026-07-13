#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { createRequire } from "node:module";

const packageExports = [
  "poyraz-ui",
  "poyraz-ui/atoms",
  "poyraz-ui/molecules",
  "poyraz-ui/organisms",
  "poyraz-ui/themes",
];
const require = createRequire(import.meta.url);

for (const specifier of packageExports) {
  const esm = await import(specifier);
  const cjs = require(specifier);
  if (Object.keys(esm).length === 0) throw new Error(`${specifier} has no ESM exports`);
  if (Object.keys(cjs).length === 0) throw new Error(`${specifier} has no CJS exports`);
}
require.resolve("poyraz-ui/preset.css");

const temporaryRoot = await mkdtemp(join(process.cwd(), ".phase15-package-exports-"));
try {
  const esmImports = packageExports
    .map((specifier, index) => `import * as export${index} from ${JSON.stringify(specifier)};`)
    .join("\n");
  const cjsImports = packageExports
    .map((specifier, index) => `import export${index} = require(${JSON.stringify(specifier)});`)
    .join("\n");

  await writeFile(
    join(temporaryRoot, "exports.mts"),
    `${esmImports}\nvoid [${packageExports.map((_, index) => `export${index}`).join(", ")}];\n`,
  );
  await writeFile(
    join(temporaryRoot, "exports.cts"),
    `${cjsImports}\nvoid [${packageExports.map((_, index) => `export${index}`).join(", ")}];\n`,
  );
  await writeFile(
    join(temporaryRoot, "tsconfig.json"),
    `${JSON.stringify(
      {
        compilerOptions: {
          module: "NodeNext",
          moduleResolution: "NodeNext",
          target: "ES2022",
          strict: true,
          noEmit: true,
          skipLibCheck: true,
        },
        files: ["exports.mts", "exports.cts"],
      },
      null,
      2,
    )}\n`,
  );

  const result = spawnSync(
    "pnpm",
    ["exec", "tsc", "--project", join(temporaryRoot, "tsconfig.json")],
    {
      stdio: "inherit",
      shell: process.platform === "win32",
    },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
} finally {
  await rm(temporaryRoot, { recursive: true, force: true });
}

console.log(
  `ESM, CJS, and TypeScript package export smoke passed (${packageExports.length} exports).`,
);
