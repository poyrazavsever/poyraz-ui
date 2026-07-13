import { expect, test } from "@playwright/test";

type Rgb = [number, number, number];

function parseRgb(value: string): Rgb {
  const hex = value.trim().match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})(?:[\da-f]{2})?$/i);
  if (hex) {
    return [Number.parseInt(hex[1], 16), Number.parseInt(hex[2], 16), Number.parseInt(hex[3], 16)];
  }
  const channels = value
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number);
  if (!channels || channels.length !== 3) throw new Error(`Cannot parse color: ${value}`);
  return channels as Rgb;
}

function luminance([red, green, blue]: Rgb) {
  const channels = [red, green, blue].map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrast(foreground: string, background: string) {
  const first = luminance(parseRgb(foreground));
  const second = luminance(parseRgb(background));
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

test("input and textarea autofill keep readable semantic colors", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith("autofill-"), "Autofill engine matrix only");
  await page.goto("/docs/atoms/input");

  const hasAutofillRules = await page.evaluate(() => {
    function containsAutofill(rules: CSSRuleList): boolean {
      return Array.from(rules).some((rule) => {
        if (rule.cssText.includes(":-webkit-autofill") || rule.cssText.includes(":autofill")) {
          return true;
        }
        return "cssRules" in rule && containsAutofill((rule as CSSGroupingRule).cssRules);
      });
    }
    return Array.from(document.styleSheets).some((sheet) => {
      try {
        return sheet.cssRules ? containsAutofill(sheet.cssRules) : false;
      } catch {
        return false;
      }
    });
  });
  expect(hasAutofillRules).toBe(true);

  for (const dark of [false, true]) {
    const colors = await page.evaluate((useDark) => {
      document.documentElement.classList.toggle("dark", useDark);
      const style = getComputedStyle(document.documentElement);
      const probe = document.querySelector<HTMLInputElement>(".poyraz-glass-field");
      if (!probe) throw new Error("Glass input probe is missing");
      return {
        foreground: style.getPropertyValue("--poyraz-foreground").trim(),
        placeholder: getComputedStyle(probe, "::placeholder").color,
        fallback: style.getPropertyValue("--poyraz-glass-fallback").trim(),
      };
    }, dark);

    expect(contrast(colors.foreground, colors.fallback)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(colors.placeholder, colors.fallback)).toBeGreaterThanOrEqual(3);
  }

  await page.goto("/docs/atoms/textarea");
  await expect(page.locator("textarea.poyraz-glass-field")).toHaveCount(1);
});
