import { expect, test } from "@playwright/test";

test("tabs support keyboard-only navigation", async ({ page }) => {
  await page.goto("/docs/molecules/tabs");
  const account = page.getByRole("tab", { name: "Account" }).first();
  const password = page.getByRole("tab", { name: "Password" }).first();

  await account.focus();
  await page.keyboard.press("ArrowRight");

  await expect(password).toBeFocused();
  await expect(password).toHaveAttribute("data-state", "active");
});

test("dialog traps focus and returns it to the trigger", async ({ page }) => {
  await page.goto("/docs/molecules/dialog");
  const trigger = page.getByRole("button", { name: "Edit Profile" }).first();

  await trigger.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();

  for (let index = 0; index < 8; index += 1) await page.keyboard.press("Tab");
  await expect(dialog.locator(":focus")).toHaveCount(1);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});
