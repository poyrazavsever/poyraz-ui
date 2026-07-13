import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    "**/.next/**",
    "**/.registry/**",
    "**/coverage/**",
    "**/dist/**",
    "**/playwright-report/**",
    "**/test-results/**",
    "public/r/**",
    "fixtures/**/.registry/**",
    "fixtures/migration/codemod/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    files: ["scripts/**/*.mjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["tests/browser/fixtures.ts"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
]);
