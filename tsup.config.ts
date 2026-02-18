import { defineConfig } from "tsup";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

async function addUseClientDirective() {
  async function process(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await process(fullPath);
      } else if (/\.(js|cjs|mjs)$/.test(entry.name)) {
        const content = await readFile(fullPath, "utf-8");
        if (!content.startsWith('"use client"')) {
          await writeFile(fullPath, `"use client";\n${content}`);
        }
      }
    }
  }
  await process("./dist");
}

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "atoms/index": "src/atoms/index.ts",
    "molecules/index": "src/molecules/index.ts",
    "organisms/index": "src/organisms/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  treeshake: true,
  clean: true,
  outDir: "dist",
  external: [
    "react",
    "react-dom",
    "next",
    "next/image",
    "next/link",
    /^@radix-ui\/.*/,
  ],
  onSuccess: addUseClientDirective,
});
