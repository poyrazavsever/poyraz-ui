"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";
import {
  floatingMotion,
  floatingSurfaceVariants,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> &
    FloatingSurfaceProps & { size?: "sm" | "md" | "lg" }
>(
  (
    {
      className,
      align = "center",
      sideOffset = 6,
      collisionPadding = 8,
      surface,
      radius,
      size = "md",
      style,
      ...props
    },
    ref,
  ) => (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        style={
          {
            "--poyraz-floating-transform-origin":
              "var(--radix-hover-card-content-transform-origin)",
            "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          floatingSurfaceVariants({ surface, radius }),
          floatingMotion,
          "z-50",
          size === "sm" && "w-56 p-3",
          size === "md" && "w-72 p-4",
          size === "lg" && "w-96 p-5",
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  ),
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
