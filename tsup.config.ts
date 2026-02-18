import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "atoms/index": "src/atoms/index.ts",
    "molecules/index": "src/molecules/index.ts",
    "organisms/index": "src/organisms/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
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
  banner: {
    js: '"use client";',
  },
});
