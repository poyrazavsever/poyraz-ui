#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { loadGeneratedRegistry, materializeRegistry } from "../registry/install-smoke-lib.mjs";
import { parseArguments, readJson } from "./release-lib.mjs";

const isWindows = process.platform === "win32";
const pnpmCommand = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "pnpm";

function runPnpm(args, cwd) {
  const commandArgs = isWindows ? ["/d", "/s", "/c", "pnpm.cmd", ...args] : args;
  const result = spawnSync(pnpmCommand, commandArgs, { cwd, stdio: "inherit", shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`pnpm ${args.join(" ")} exited with ${result.status} in ${cwd}`);
  }
}

function runNpmPack(args, cwd) {
  const command = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "npm";
  const commandArgs = isWindows ? ["/d", "/s", "/c", "npm.cmd", ...args] : args;
  const result = spawnSync(command, commandArgs, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
    shell: false,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`npm ${args.join(" ")} exited with ${result.status}`);
  return result.stdout;
}

function dependencyVersion(packageManifest, name) {
  return (
    packageManifest.dependencies?.[name] ??
    packageManifest.devDependencies?.[name] ??
    packageManifest.peerDependencies?.[name] ??
    "latest"
  );
}

async function createTarball({ outputDirectory }) {
  runPnpm(["build:lib"], process.cwd());
  await mkdir(outputDirectory, { recursive: true });
  const report = JSON.parse(
    runNpmPack(["pack", "--json", "--ignore-scripts", "--pack-destination", outputDirectory]),
  )[0];
  if (!report?.filename) throw new Error("npm pack did not produce a tarball filename.");
  return resolve(outputDirectory, report.filename);
}

function workspacePolicy() {
  return [
    "allowBuilds:",
    '  "@tailwindcss/oxide": true',
    "  sharp: true",
    "  unrs-resolver: false",
    "",
  ].join("\n");
}

function postcssConfig() {
  return 'const config = { plugins: { "@tailwindcss/postcss": {} } };\n\nexport default config;\n';
}

function packageDependencies(packageManifest, packageSpecifier, registryDependencies, extra = {}) {
  const requiredPeers = new Set([
    "react",
    "react-dom",
    "tailwindcss",
    "react-hook-form",
    "mermaid",
  ]);
  const optionalPeers = Object.fromEntries(
    Object.entries(packageManifest.peerDependencies ?? {})
      .filter(([name]) => requiredPeers.has(name))
      .map(([name]) => [name, dependencyVersion(packageManifest, name)]),
  );

  return {
    ...optionalPeers,
    ...registryDependencies,
    "poyraz-ui": packageSpecifier,
    react: dependencyVersion(packageManifest, "react"),
    "react-dom": dependencyVersion(packageManifest, "react-dom"),
    tailwindcss: dependencyVersion(packageManifest, "tailwindcss"),
    ...extra,
  };
}

async function writeJson(path, value) {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function prepareRegistry(destination) {
  const items = await loadGeneratedRegistry();
  return materializeRegistry({
    items,
    roots: ["button"],
    destination: join(destination, ".registry"),
  });
}

async function createNextFixture({ destination, packageSpecifier, packageManifest }) {
  const installed = await prepareRegistry(destination);
  await mkdir(join(destination, "app"), { recursive: true });
  await writeJson(join(destination, "package.json"), {
    name: "poyraz-ui-tarball-next-smoke",
    private: true,
    scripts: {
      typecheck: "tsc --noEmit",
      build: "next build",
    },
    dependencies: packageDependencies(packageManifest, packageSpecifier, installed.dependencies, {
      next: dependencyVersion(packageManifest, "next"),
    }),
    devDependencies: {
      "@tailwindcss/postcss": dependencyVersion(packageManifest, "@tailwindcss/postcss"),
      "@types/node": dependencyVersion(packageManifest, "@types/node"),
      "@types/react": dependencyVersion(packageManifest, "@types/react"),
      "@types/react-dom": dependencyVersion(packageManifest, "@types/react-dom"),
      typescript: dependencyVersion(packageManifest, "typescript"),
    },
  });
  await writeFile(join(destination, "pnpm-workspace.yaml"), workspacePolicy(), "utf8");
  await writeFile(join(destination, "postcss.config.mjs"), postcssConfig(), "utf8");
  await writeFile(
    join(destination, "next.config.ts"),
    [
      'import { fileURLToPath } from "node:url";',
      'import type { NextConfig } from "next";',
      "",
      "const config: NextConfig = {",
      '  turbopack: { root: fileURLToPath(new URL(".", import.meta.url)) },',
      "};",
      "",
      "export default config;",
      "",
    ].join("\n"),
    "utf8",
  );
  await writeJson(join(destination, "tsconfig.json"), {
    compilerOptions: {
      target: "ES2017",
      lib: ["dom", "dom.iterable", "esnext"],
      strict: true,
      skipLibCheck: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "react-jsx",
      plugins: [{ name: "next" }],
      baseUrl: ".registry",
      paths: { "@/*": ["*"] },
      allowJs: true,
    },
    include: [
      "next-env.d.ts",
      "app/**/*.ts",
      "app/**/*.tsx",
      ".registry/**/*.ts",
      ".registry/**/*.tsx",
    ],
    exclude: ["node_modules"],
  });
  await writeFile(
    join(destination, "next-env.d.ts"),
    '/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n',
    "utf8",
  );
  await writeFile(
    join(destination, "app", "globals.css"),
    '@import "tailwindcss";\n@import "poyraz-ui/preset.css";\n',
    "utf8",
  );
  await writeFile(
    join(destination, "app", "layout.tsx"),
    [
      'import type { ReactNode } from "react";',
      'import "./globals.css";',
      "",
      "export default function RootLayout({ children }: { children: ReactNode }) {",
      '  return <html lang="en"><body>{children}</body></html>;',
      "}",
      "",
    ].join("\n"),
    "utf8",
  );
  await writeFile(
    join(destination, "app", "page.tsx"),
    [
      '"use client";',
      "",
      'import { Button as PackageButton, buttonVariants, type ButtonProps } from "poyraz-ui/atoms";',
      'import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "poyraz-ui/molecules";',
      'import { Navbar, NavbarBrand, NavbarMain } from "poyraz-ui/organisms";',
      'import { poyrazThemes } from "poyraz-ui/themes";',
      'import { Button as RegistryButton } from "@/components/ui/atoms/button";',
      "",
      "const packageButtonProps: ButtonProps = { variant: 'soft', effect: 'shine', radius: 'lg' };",
      "const variantClassName = buttonVariants({ variant: 'outline', radius: 'md' });",
      "",
      "export default function Page() {",
      "  return (",
      '    <main className="p-6">',
      "      <Navbar><NavbarMain><NavbarBrand>Poyraz</NavbarBrand></NavbarMain></Navbar>",
      "      <PackageButton {...packageButtonProps}>Package button</PackageButton>",
      '      <RegistryButton variant="outline">Registry button</RegistryButton>',
      "      <Dialog><DialogTrigger asChild><PackageButton>Open</PackageButton></DialogTrigger><DialogContent><DialogTitle>Tarball smoke</DialogTitle></DialogContent></Dialog>",
      "      <p data-theme-count={poyrazThemes.length} className={variantClassName}>Themes loaded</p>",
      "    </main>",
      "  );",
      "}",
      "",
    ].join("\n"),
    "utf8",
  );
}

async function createViteFixture({ destination, packageSpecifier, packageManifest }) {
  const installed = await prepareRegistry(destination);
  await mkdir(join(destination, "src"), { recursive: true });
  await writeJson(join(destination, "package.json"), {
    name: "poyraz-ui-tarball-vite-smoke",
    private: true,
    type: "module",
    scripts: {
      typecheck: "tsc --noEmit",
      build: "tsc --noEmit && vite build",
    },
    dependencies: packageDependencies(packageManifest, packageSpecifier, installed.dependencies, {
      "@vitejs/plugin-react": dependencyVersion(packageManifest, "@vitejs/plugin-react"),
      vite: dependencyVersion(packageManifest, "vite"),
    }),
    devDependencies: {
      "@tailwindcss/postcss": dependencyVersion(packageManifest, "@tailwindcss/postcss"),
      "@types/node": dependencyVersion(packageManifest, "@types/node"),
      "@types/react": dependencyVersion(packageManifest, "@types/react"),
      "@types/react-dom": dependencyVersion(packageManifest, "@types/react-dom"),
      typescript: dependencyVersion(packageManifest, "typescript"),
    },
  });
  await writeFile(join(destination, "pnpm-workspace.yaml"), workspacePolicy(), "utf8");
  await writeFile(join(destination, "postcss.config.mjs"), postcssConfig(), "utf8");
  await writeFile(
    join(destination, "index.html"),
    '<!doctype html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Poyraz UI tarball smoke</title></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>\n',
    "utf8",
  );
  await writeFile(
    join(destination, "vite.config.ts"),
    [
      'import { fileURLToPath, URL } from "node:url";',
      'import react from "@vitejs/plugin-react";',
      'import { defineConfig } from "vite";',
      "",
      "export default defineConfig({",
      "  plugins: [react()],",
      '  resolve: { alias: { "@": fileURLToPath(new URL("./.registry", import.meta.url)) } },',
      "});",
      "",
    ].join("\n"),
    "utf8",
  );
  await writeJson(join(destination, "tsconfig.json"), {
    compilerOptions: {
      target: "ES2022",
      lib: ["DOM", "DOM.Iterable", "ES2022"],
      strict: true,
      skipLibCheck: true,
      module: "ESNext",
      moduleResolution: "Bundler",
      jsx: "react-jsx",
      noEmit: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      resolveJsonModule: true,
      baseUrl: ".",
      paths: { "@/*": [".registry/*"] },
      types: ["node"],
    },
    include: ["src", ".registry"],
  });
  await writeFile(
    join(destination, "src", "style.css"),
    '@import "tailwindcss";\n@import "poyraz-ui/preset.css";\n',
    "utf8",
  );
  await writeFile(
    join(destination, "src", "main.tsx"),
    [
      'import { createRoot } from "react-dom/client";',
      'import { Button as PackageButton, buttonVariants, type ButtonProps } from "poyraz-ui/atoms";',
      'import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "poyraz-ui/molecules";',
      'import { poyrazThemes } from "poyraz-ui/themes";',
      'import { Button as RegistryButton } from "@/components/ui/atoms/button";',
      'import "./style.css";',
      "",
      "const props: ButtonProps = { variant: 'glass', radius: 'full', effect: 'shine' };",
      "const className = buttonVariants({ variant: 'soft', radius: 'lg' });",
      "",
      "function App() {",
      "  return (",
      '    <main className="p-6">',
      "      <PackageButton {...props}>Package button</PackageButton>",
      '      <RegistryButton variant="outline">Registry button</RegistryButton>',
      "      <Dialog><DialogTrigger asChild><PackageButton>Open</PackageButton></DialogTrigger><DialogContent><DialogTitle>Tarball smoke</DialogTitle></DialogContent></Dialog>",
      "      <p data-theme-count={poyrazThemes.length} className={className}>Themes loaded</p>",
      "    </main>",
      "  );",
      "}",
      "",
      'createRoot(document.getElementById("root")!).render(<App />);',
      "",
    ].join("\n"),
    "utf8",
  );
}

async function smokeFixture(name, destination) {
  runPnpm(["install", "--frozen-lockfile=false"], destination);
  runPnpm(["exec", "poyraz-ui", "init", "--mode", "registry"], destination);
  runPnpm(["run", "typecheck"], destination);
  runPnpm(["run", "build"], destination);
  console.log(`${name} tarball install, CLI, typecheck and production build passed.`);
}

async function sha256(path) {
  return createHash("sha256")
    .update(await readFile(path))
    .digest("hex");
}

const args = parseArguments(process.argv.slice(2));
const packageManifest = await readJson("package.json");
const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-ui-tarball-smoke-"));
const keep = args.keep === true;

try {
  const packageSpecifier =
    args["package-spec"] ??
    (args.tarball ? `file:${resolve(String(args.tarball))}` : null) ??
    `file:${await createTarball({ outputDirectory: join(temporaryRoot, "pack") })}`;
  console.log(`Testing npm package specifier: ${packageSpecifier}`);
  if (String(packageSpecifier).startsWith("file:")) {
    const digest = await sha256(String(packageSpecifier).slice(5));
    console.log(`sha256: ${digest}`);
  }

  const nextRoot = join(temporaryRoot, "next");
  const viteRoot = join(temporaryRoot, "vite");
  await mkdir(nextRoot, { recursive: true });
  await mkdir(viteRoot, { recursive: true });

  await createNextFixture({ destination: nextRoot, packageSpecifier, packageManifest });
  await createViteFixture({ destination: viteRoot, packageSpecifier, packageManifest });

  await smokeFixture("Next.js", nextRoot);
  await smokeFixture("Vite", viteRoot);

  console.log("Npm tarball consumer smoke passed for Next.js and Vite.");
} finally {
  if (keep) {
    console.log(`Kept smoke root: ${temporaryRoot}`);
  } else {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
}
