#!/usr/bin/env node

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join, normalize, resolve, sep } from "node:path";

const temporaryRoot = await mkdtemp(join(tmpdir(), "poyraz-shadcn-consumers-"));
const publicRoot = resolve("public");
const isWindows = process.platform === "win32";

function run(args, cwd = process.cwd(), { capture = false } = {}) {
  return new Promise((resolvePromise, reject) => {
    const command = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "pnpm";
    const commandArgs = isWindows ? ["/d", "/s", "/c", "pnpm.cmd", ...args] : args;
    const child = spawn(command, commandArgs, {
      cwd,
      shell: false,
      stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
    });
    let output = "";
    if (capture) {
      child.stdout.setEncoding("utf8");
      child.stderr.setEncoding("utf8");
      child.stdout.on("data", (chunk) => (output += chunk));
      child.stderr.on("data", (chunk) => (output += chunk));
    }
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolvePromise(output);
      else reject(new Error(`pnpm ${args.join(" ")} exited with ${code}\n${output}`));
    });
  });
}

function componentsConfig(fixture, registryBase) {
  const isNext = fixture === "next";
  return {
    $schema: "https://ui.shadcn.com/schema.json",
    style: "new-york",
    rsc: isNext,
    tsx: true,
    tailwind: {
      config: "",
      css: isNext ? "app/globals.css" : "src/style.css",
      baseColor: "neutral",
      cssVariables: true,
    },
    iconLibrary: "lucide",
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
      ui: "@/components/ui",
      lib: "@/lib",
      hooks: "@/hooks",
    },
    registries: { "@poyraz": `${registryBase}/r/{name}.json` },
  };
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    const file = resolve(publicRoot, `.${normalize(pathname)}`);
    if (file !== publicRoot && !file.startsWith(`${publicRoot}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, {
      "content-type": extname(file) === ".json" ? "application/json" : "text/plain",
    });
    response.end(content);
  } catch {
    response.writeHead(404).end("Not found");
  }
});

await new Promise((resolvePromise, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", resolvePromise);
});

try {
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Local registry server has no port");
  const registryBase = `http://127.0.0.1:${address.port}`;

  for (const fixture of ["next", "vite"]) {
    const destination = join(temporaryRoot, fixture);
    await cp(resolve("fixtures", fixture), destination, { recursive: true });
    const tsconfigPath = join(destination, "tsconfig.json");
    const tsconfig = JSON.parse(await readFile(tsconfigPath, "utf8"));
    tsconfig.compilerOptions.baseUrl = ".";
    tsconfig.compilerOptions.paths = { "@/*": ["./*"] };
    tsconfig.include = [
      ...new Set([
        ...(tsconfig.include ?? []),
        "components/**/*.ts",
        "components/**/*.tsx",
        "lib/**/*.ts",
      ]),
    ];
    await writeFile(tsconfigPath, `${JSON.stringify(tsconfig, null, 2)}\n`);
    if (fixture === "vite") {
      const viteConfigPath = join(destination, "vite.config.ts");
      const viteConfig = await readFile(viteConfigPath, "utf8");
      await writeFile(viteConfigPath, viteConfig.replace('new URL("./.registry",', 'new URL(".",'));
    }
    await writeFile(
      join(destination, "components.json"),
      `${JSON.stringify(componentsConfig(fixture, registryBase), null, 2)}\n`,
    );

    const itemUrl = `${registryBase}/r/button.json`;
    const addArgs = ["exec", "shadcn", "add", itemUrl, "--cwd", destination, "--yes"];
    await run([...addArgs, "--dry-run"]);

    const buttonPath = join(destination, "components", "ui", "atoms", "button.tsx");
    await run(addArgs);
    const installedButton = await readFile(buttonPath, "utf8");
    if (!installedButton.includes('"data-slot": "button"')) {
      throw new Error(`${fixture}: installed Button source is incomplete`);
    }

    const manifest = JSON.parse(await readFile(join(destination, "package.json"), "utf8"));
    for (const dependency of ["@radix-ui/react-slot", "class-variance-authority"]) {
      if (!manifest.dependencies?.[dependency]) {
        throw new Error(`${fixture}: shadcn did not add ${dependency} to package.json`);
      }
    }

    await writeFile(buttonPath, `${installedButton}\n// phase-15-local-change\n`);
    const diffOutput = await run(
      [
        "exec",
        "shadcn",
        "add",
        itemUrl,
        "--cwd",
        destination,
        "--diff",
        "components/ui/atoms/button.tsx",
      ],
      process.cwd(),
      { capture: true },
    );
    if (!diffOutput.includes("phase-15-local-change")) {
      throw new Error(
        `${fixture}: shadcn --diff did not report the consumer change\n${diffOutput}`,
      );
    }

    await run([...addArgs, "--overwrite"]);
    const overwrittenButton = await readFile(buttonPath, "utf8");
    if (overwrittenButton.includes("phase-15-local-change")) {
      throw new Error(`${fixture}: shadcn --overwrite did not restore registry source`);
    }

    await run(["run", "typecheck"], destination);
    await run(["run", "build"], destination);
  }

  const githubDestination = join(temporaryRoot, "github-next");
  await cp(resolve("fixtures", "next"), githubDestination, { recursive: true });
  const githubTsconfigPath = join(githubDestination, "tsconfig.json");
  const githubTsconfig = JSON.parse(await readFile(githubTsconfigPath, "utf8"));
  githubTsconfig.compilerOptions.baseUrl = ".";
  githubTsconfig.compilerOptions.paths = { "@/*": ["./*"] };
  githubTsconfig.include = [
    ...new Set([
      ...(githubTsconfig.include ?? []),
      "components/**/*.ts",
      "components/**/*.tsx",
      "lib/**/*.ts",
    ]),
  ];
  await writeFile(githubTsconfigPath, `${JSON.stringify(githubTsconfig, null, 2)}\n`);
  const githubOrigin = "https://raw.githubusercontent.com/poyrazavsever/poyraz-ui/v3/public";
  await writeFile(
    join(githubDestination, "components.json"),
    `${JSON.stringify(componentsConfig("next", githubOrigin), null, 2)}\n`,
  );
  await run([
    "exec",
    "shadcn",
    "add",
    `${githubOrigin}/r/button.json`,
    "--cwd",
    githubDestination,
    "--yes",
  ]);
  const githubButton = await readFile(
    join(githubDestination, "components", "ui", "atoms", "button.tsx"),
    "utf8",
  );
  if (!githubButton.includes('"data-slot": "button"')) {
    throw new Error("GitHub raw registry address did not install the Button source");
  }
} finally {
  await new Promise((resolvePromise) => server.close(resolvePromise));
  await rm(temporaryRoot, { recursive: true, force: true });
}

console.log(
  "Local and GitHub shadcn Button install, dry-run, diff, overwrite, typecheck, and build passed.",
);
