import { expect, test } from "@playwright/test";

test("project context exposes its requested color scheme and viewport", async ({
  page,
}, testInfo) => {
  await page.goto("/docs/atoms/button");
  const state = await page.evaluate(() => ({
    dark: matchMedia("(prefers-color-scheme: dark)").matches,
    mobile: innerWidth < 768,
  }));

  expect(state.dark).toBe(testInfo.project.use.colorScheme === "dark");
  expect(state.mobile).toBe(testInfo.project.name.startsWith("mobile"));
});

test("reduced-motion context disables authored motion", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "reduced-motion", "Reduced-motion project only");
  await page.goto("/docs/atoms/button");

  expect(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches)).toBe(
    true,
  );
  const duration = await page
    .locator('[data-slot="button"]')
    .first()
    .evaluate((node) => getComputedStyle(node).transitionDuration);
  expect(["0s", "0.001s"]).toContain(duration);
});

test("glass fallback context remains opaque without backdrop blur", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "glass-fallback", "Glass fallback project only");
  await page.goto("/docs/atoms/card");
  await page.addStyleTag({
    content:
      "[data-surface='glass'], [data-variant='glass'], .bg-glass { backdrop-filter: none !important; background: var(--poyraz-glass-fallback) !important; }",
  });
  const fallback = page.locator('[data-slot="card"][data-variant="glass"]').first();
  await expect(fallback).toBeVisible();
  await expect(fallback).toHaveCSS("backdrop-filter", "none");
  expect(await fallback.evaluate((node) => getComputedStyle(node).backgroundColor)).not.toBe(
    "rgba(0, 0, 0, 0)",
  );
});
