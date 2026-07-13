import { expect, test } from "@playwright/test";

test("blur-heavy card demo stays within the interaction budget", async ({ page }, testInfo) => {
  await page.goto("/docs/atoms/card");
  await page.locator('[data-slot="docs-demo"]').first().waitFor();

  const profile = await page.evaluate(async () => {
    const longTasks: number[] = [];
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) longTasks.push(entry.duration);
    });
    observer.observe({ type: "longtask" });
    const started = performance.now();
    for (let index = 0; index < 8; index += 1) {
      scrollTo({ top: index % 2 ? document.body.scrollHeight : 0, behavior: "instant" });
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }
    observer.disconnect();
    return { durationMs: performance.now() - started, longTasks };
  });

  await testInfo.attach("blur-profile.json", {
    body: JSON.stringify(profile, null, 2),
    contentType: "application/json",
  });
  expect(profile.longTasks.filter((duration) => duration > 100)).toHaveLength(0);
  expect(profile.durationMs).toBeLessThan(2_000);
});
