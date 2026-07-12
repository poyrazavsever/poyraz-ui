import { expect, test } from "@playwright/test";

test("button docs preview", async ({ page }) => {
  await page.goto("/docs/atoms/button");
  const demo = page.locator('[data-slot="docs-demo"]').first();
  await expect(demo).toBeVisible();
  await expect(demo).toHaveScreenshot("button-docs.png");
});

test("responsive navbar preview", async ({ page }) => {
  await page.goto("/docs/organisms/navbar");
  const demo = page.locator('[data-slot="docs-demo"]').first();
  await expect(demo).toBeVisible();
  await expect(demo).toHaveScreenshot("navbar-docs.png");
});
