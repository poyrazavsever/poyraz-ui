import { expect, test } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("button docs preview", async ({ page }) => {
  await page.goto("/docs/atoms/button");
  const demo = page.getByTestId("docs-preview").nth(1);
  await expect(demo).toBeVisible();
  await expect(demo).toHaveScreenshot("button-docs.png");
});

test("responsive navbar preview", async ({ page }) => {
  await page.goto("/docs/organisms/navbar");
  const demo = page.getByTestId("docs-preview").first().locator('[data-slot="navbar"]').first();
  await expect(demo).toBeVisible();
  await expect(demo).toHaveScreenshot("navbar-docs.png");
});
