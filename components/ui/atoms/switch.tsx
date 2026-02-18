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
      "peer inline-flex h-6 w-11 shrink-0 items-center",
      // Shape — brutalist
      "rounded-none shadow-none",
      "border-2 border-dashed border-slate-400",
      // Background
      "bg-slate-200",
      // Transitions
      "transition-all duration-200 ease-out",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
      // Checked
      "data-[state=checked]:bg-red-600 data-[state=checked]:border-red-900",
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
        // Square thumb — brutalist
        "block h-4 w-4 bg-white",
        "rounded-none shadow-none",
        "border border-dashed border-slate-300",
        // Transitions
        "transition-transform duration-200 ease-out",
        // Position
        "translate-x-0.5 data-[state=checked]:translate-x-[22px]",
        "data-[state=checked]:border-white/50",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
