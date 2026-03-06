import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/ui/atoms/typography";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1",
    "text-xs font-semibold tracking-wide uppercase",
    "rounded-sm shadow-none",
    "border",
    "px-2 py-0.5",
    "transition-all duration-200 ease-out",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary-dark",
        secondary: "bg-accent text-foreground border-border-strong",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive/80",
        outline: "bg-transparent text-foreground border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
