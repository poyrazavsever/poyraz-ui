#!/usr/bin/env node

import { mkdtemp, mkdir, readFile, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const fixture = await mkdtemp(resolve(tmpdir(), "poyraz-button-fixture-"));
const buttonItem = JSON.parse(await readFile(resolve(root, "public/r/button.json"), "utf8"));
const utilsItem = JSON.parse(await readFile(resolve(root, "public/r/poyraz-utils.json"), "utf8"));

async function installFiles(item) {
  for (const file of item.files ?? []) {
    const target = file.target.replace(/^@ui\//, "components/ui/").replace(/^@lib\//, "lib/");
    const destination = resolve(fixture, target);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, file.content);
  }
}

await installFiles(buttonItem);
await installFiles(utilsItem);
await symlink(
  resolve(root, "node_modules"),
  resolve(fixture, "node_modules"),
  process.platform === "win32" ? "junction" : "dir",
);

await writeFile(
  resolve(fixture, "usage.tsx"),
  `import * as React from "react";
import { Button, ButtonIcon, ButtonLabel, buttonVariants } from "@/components/ui/atoms/button";

const ref = React.createRef<HTMLButtonElement>();

export const fixture = (
  <>
    <Button ref={ref} variant="soft" size="xs" effect="shine">Shine</Button>
    <Button variant="glass" radius="full" effect="fill" fillDirection="right">Right</Button>
    <Button effect="fill" fillDirection="left">Left</Button>
    <Button effect="fill" fillDirection="up">Up</Button>
    <Button effect="fill" fillDirection="down">Down</Button>
    <Button effect="swap" swapTarget="both">
      <ButtonLabel>Continue</ButtonLabel><ButtonIcon aria-hidden>→</ButtonIcon>
    </Button>
    <Button size="icon" aria-label="Open notifications">!</Button>
    <Button asChild loading><a href="/docs">Docs</a></Button>
    <span className={buttonVariants({ variant: "outline", size: "sm" })} />
  </>
);
`,
);

await writeFile(
  resolve(fixture, "tsconfig.json"),
  JSON.stringify(
    {
      compilerOptions: {
        strict: true,
        noEmit: true,
        target: "ES2020",
        lib: ["DOM", "ES2020"],
        module: "ESNext",
        moduleResolution: "Bundler",
        jsx: "react-jsx",
        esModuleInterop: true,
        skipLibCheck: true,
        baseUrl: ".",
        paths: { "@/*": ["./*"] },
      },
      include: ["**/*.ts", "**/*.tsx"],
    },
    null,
    2,
  ),
);

const result = spawnSync(
  process.execPath,
  [
    resolve(root, "node_modules/typescript/bin/tsc"),
    "--project",
    resolve(fixture, "tsconfig.json"),
  ],
  { cwd: fixture, encoding: "utf8" },
);

if (result.status !== 0) {
  process.stderr.write(result.stdout);
  process.stderr.write(result.stderr);
  process.exit(result.status ?? 1);
}

console.log(`Button clean fixture typecheck passed (${fixture}).`);
