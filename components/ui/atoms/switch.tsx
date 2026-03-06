"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/components/ui/atoms/typography";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      // Layout — rectangular track
      "peer inline-flex h-5 w-9 shrink-0 items-center",
      // Shape — minimal
      "rounded-sm shadow-none",
      "border border-input",
      // Background
      "bg-surface-200",
      // Transitions
      "transition-all duration-200 ease-out",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
      // Checked
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary-dark",
      // Disabled
      "disabled:opacity-40 disabled:cursor-not-allowed",
      // Cursor
      "cursor-pointer",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        // Square thumb
        "block h-3 w-3 bg-background",
        "rounded-sm shadow-none",
        "border border-border-strong",
        // Transitions
        "transition-transform duration-200 ease-out",
        // Position
        "translate-x-0.5 data-[state=checked]:translate-x-[18px]",
        "data-[state=checked]:border-white/50",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
