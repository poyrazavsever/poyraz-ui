"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";
import {
  floatingMotion,
  floatingSurfaceVariants,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
    FloatingSurfaceProps & { size?: "sm" | "md" }
>(
  (
    {
      className,
      sideOffset = 6,
      collisionPadding = 8,
      surface = "solid",
      radius,
      size = "sm",
      style,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        style={
          {
            "--poyraz-floating-transform-origin": "var(--radix-tooltip-content-transform-origin)",
            "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.375rem)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          floatingSurfaceVariants({ surface, radius }),
          floatingMotion,
          "z-50 max-w-xs",
          size === "sm" && "px-2.5 py-1.5 text-xs",
          size === "md" && "px-3 py-2 text-sm",
          className,
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
