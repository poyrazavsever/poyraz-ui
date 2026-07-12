"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import {
  floatingMotion,
  floatingSurfaceVariants,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    FloatingSurfaceProps & { padding?: "none" | "sm" | "md" | "lg" }
>(
  (
    {
      className,
      align = "center",
      sideOffset = 6,
      collisionPadding = 8,
      surface,
      radius,
      padding = "md",
      style,
      ...props
    },
    ref,
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        style={
          {
            "--poyraz-floating-transform-origin": "var(--radix-popover-content-transform-origin)",
            "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          floatingSurfaceVariants({ surface, radius }),
          floatingMotion,
          "z-50 w-72",
          padding === "none" && "p-0",
          padding === "sm" && "p-2",
          padding === "md" && "p-4",
          padding === "lg" && "p-6",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
