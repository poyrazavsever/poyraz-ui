"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    className={cn(
      "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-input bg-surface-200 shadow-inner",
      "after:absolute after:-inset-y-2 after:-inset-x-1 after:content-['']",
      "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
      "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
      "disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled disabled:opacity-100",
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(
        "pointer-events-none block size-5 translate-x-px rounded-full border border-border bg-surface shadow-sm",
        "transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-spring)]",
        "data-[state=checked]:translate-x-5 data-[state=checked]:border-primary-foreground/40 data-[state=checked]:bg-primary-foreground",
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
