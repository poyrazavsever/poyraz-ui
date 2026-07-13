import { render } from "@testing-library/react";
import axe from "axe-core";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/atoms/button";

describe("Button accessibility", () => {
  it("has no critical or serious axe violations", async () => {
    const { container } = render(
      <main>
        <Button>Continue</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </main>,
    );

    const result = await axe.run(container, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] },
      rules: { "color-contrast": { enabled: false } },
    });
    const blocking = result.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious",
    );

    expect(blocking, JSON.stringify(blocking, null, 2)).toHaveLength(0);
  });
});
