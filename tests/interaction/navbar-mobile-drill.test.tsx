import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NavbarMobileDrillMenu, NavbarMobileDrillTrigger } from "@/components/ui/organisms/navbar";

describe("NavbarMobileDrillTrigger", () => {
  it("forwards consumer className overrides", () => {
    render(
      <NavbarMobileDrillMenu>
        <NavbarMobileDrillTrigger panelId="products" className="consumer-trigger">
          Products
        </NavbarMobileDrillTrigger>
      </NavbarMobileDrillMenu>,
    );

    expect(screen.getByRole("button", { name: /products/i })).toHaveClass("consumer-trigger");
  });
});
