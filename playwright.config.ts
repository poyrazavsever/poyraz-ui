import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./tests/browser",
  outputDir: "test-results",
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}-{projectName}{ext}",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [["line"], ["html", { open: "never", outputFolder: "playwright-report" }]]
    : "list",
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "pnpm dev --hostname 127.0.0.1 --port 3100",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
  projects: [
    {
      name: "desktop-light",
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
    {
      name: "desktop-dark",
      testMatch: ["visual.spec.ts", "accessibility.spec.ts", "contexts.spec.ts"],
      use: { ...devices["Desktop Chrome"], colorScheme: "dark" },
    },
    {
      name: "mobile-light",
      testMatch: ["visual.spec.ts", "contexts.spec.ts"],
      use: { ...devices["Pixel 5"], colorScheme: "light" },
    },
    {
      name: "mobile-dark",
      testMatch: ["visual.spec.ts", "contexts.spec.ts"],
      use: { ...devices["Pixel 5"], colorScheme: "dark" },
    },
    {
      name: "glass-fallback",
      testMatch: "contexts.spec.ts",
      metadata: { glassFallback: true },
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
    {
      name: "reduced-motion",
      testMatch: "contexts.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        colorScheme: "light",
        contextOptions: { reducedMotion: "reduce" },
      },
    },
    {
      name: "autofill-chromium",
      testMatch: "autofill.spec.ts",
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
    {
      name: "autofill-firefox",
      testMatch: "autofill.spec.ts",
      use: { ...devices["Desktop Firefox"], colorScheme: "light" },
    },
    {
      name: "autofill-webkit",
      testMatch: "autofill.spec.ts",
      use: { ...devices["Desktop Safari"], colorScheme: "light" },
    },
  ],
});
