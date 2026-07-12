import { expect, test } from "./fixtures";

for (const path of ["/docs/atoms/button", "/docs/molecules/dialog", "/docs/organisms/navbar"]) {
  test(`${path} has no critical accessibility violations`, async ({ page, makeAxeBuilder }) => {
    await page.goto(path);
    await page.locator("main").waitFor();

    const results = await makeAxeBuilder().analyze();
    const blocking = results.violations.filter((violation) => violation.impact === "critical");

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}
