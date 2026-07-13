import AxeBuilder from "@axe-core/playwright";
import { test as base } from "@playwright/test";

type AccessibilityFixtures = {
  makeAxeBuilder: () => AxeBuilder;
};

export const test = base.extend<AccessibilityFixtures>({
  makeAxeBuilder: async ({ page }, use) => {
    await use(() =>
      new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]),
    );
  },
});

export { expect } from "@playwright/test";
