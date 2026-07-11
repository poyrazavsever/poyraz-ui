import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 border font-medium transition-colors duration-[var(--poyraz-motion-duration-fast)] [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary-muted text-primary-muted-foreground",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border-strong bg-transparent text-foreground",
        glass: "border-glass-border-outer bg-glass text-foreground shadow-xs backdrop-blur-soft",
        info: "border-info-border bg-info text-info-foreground",
        success: "border-success-border bg-success text-success-foreground",
        warning: "border-warning-border bg-warning text-warning-foreground",
        destructive: "border-destructive/25 bg-destructive-muted text-destructive-muted-foreground",
      },
      size: {
        sm: "h-5 px-1.5 text-[10px]",
        default: "h-6 px-2 text-xs",
        lg: "h-7 px-2.5 text-xs",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default", radius: "full" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, radius, size, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      data-radius={radius ?? "full"}
      className={cn(badgeVariants({ variant, size, radius }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
