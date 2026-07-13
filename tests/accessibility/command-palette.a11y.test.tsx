import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import {
  CommandPalette,
  CommandPaletteItem,
  CommandPaletteList,
} from "@/components/ui/molecules/command-palette";

describe("CommandPalette accessibility", () => {
  it("keeps aria-selected synchronized with keyboard focus", async () => {
    const user = userEvent.setup();

    render(
      <CommandPalette>
        <CommandPaletteList aria-label="Commands">
          <CommandPaletteItem>First command</CommandPaletteItem>
          <CommandPaletteItem disabled>Unavailable command</CommandPaletteItem>
          <CommandPaletteItem>Last command</CommandPaletteItem>
        </CommandPaletteList>
      </CommandPalette>,
    );

    const first = screen.getByRole("option", { name: "First command" });
    const disabled = screen.getByRole("option", { name: "Unavailable command" });
    const last = screen.getByRole("option", { name: "Last command" });

    expect(first).toHaveAttribute("aria-selected", "false");
    expect(disabled).toHaveAttribute("aria-disabled", "true");

    await user.click(first);
    expect(first).toHaveFocus();
    expect(first).toHaveAttribute("aria-selected", "true");

    await user.keyboard("{ArrowDown}");
    expect(last).toHaveFocus();
    expect(last).toHaveAttribute("aria-selected", "true");
    expect(first).toHaveAttribute("aria-selected", "false");

    await user.keyboard("{Home}");
    expect(first).toHaveFocus();
    expect(first).toHaveAttribute("aria-selected", "true");
  });
});
