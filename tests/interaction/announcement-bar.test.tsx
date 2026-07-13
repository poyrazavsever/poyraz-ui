import { render, screen, waitFor } from "@testing-library/react";
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
    expect(bar).toHaveClass("animate-poyraz-fade-out");
    expect(bar).not.toHaveClass("-translate-y-2", "grid-rows-[0fr]");
    expect(screen.getByText("Scheduled maintenance")).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByRole("banner")).not.toBeInTheDocument());
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
