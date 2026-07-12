import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { AnnouncementBar } from "@/components/ui/organisms/announcement-bar";

describe("AnnouncementBar", () => {
  it("keeps the bar mounted for its exit transition and then dismisses it", async () => {
    const onDismiss = vi.fn();
    const user = userEvent.setup();

    render(<AnnouncementBar onDismiss={onDismiss}>Scheduled maintenance</AnnouncementBar>);

    const bar = screen.getByRole("banner");
    await user.click(screen.getByRole("button", { name: "Dismiss" }));

    expect(bar).toHaveAttribute("data-state", "closed");
    expect(screen.getByText("Scheduled maintenance")).toBeInTheDocument();

    fireEvent.transitionEnd(bar, { propertyName: "opacity" });

    expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
