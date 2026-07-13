import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: root }],
  },
  test: {
    watch: false,
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "lcov"],
      reportsDirectory: "coverage",
      include: ["components/ui/**/*.{ts,tsx}", "lib/**/*.ts", "registry/poyraz/ui/button.tsx"],
      thresholds: {
        statements: 10,
        branches: 5,
        functions: 3,
        lines: 10,
      },
    },
    projects: [
      {
        resolve: { alias: [{ find: "@", replacement: root }] },
        test: {
          name: "unit",
          environment: "node",
          include: ["tests/unit/**/*.test.ts"],
        },
      },
      {
        plugins: [react()],
        resolve: { alias: [{ find: "@", replacement: root }] },
        test: {
          name: "dom",
          environment: "jsdom",
          include: ["tests/interaction/**/*.test.tsx"],
          setupFiles: ["./tests/setup.ts"],
        },
      },
      {
        plugins: [react()],
        resolve: { alias: [{ find: "@", replacement: root }] },
        test: {
          name: "accessibility",
          environment: "jsdom",
          include: ["tests/accessibility/**/*.test.tsx"],
          setupFiles: ["./tests/setup.ts"],
        },
      },
    ],
  },
});
