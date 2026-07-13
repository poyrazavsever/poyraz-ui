import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "variant-classes" },
    size: { default: "size-classes" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

type ComponentProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof componentVariants> & {
    asChild?: boolean;
  };

const Component = React.forwardRef<HTMLButtonElement, ComponentProps>(
  ({ asChild = false, className, variant, size, ...props }, ref) => {
    const Root = asChild ? Slot : "button";

    return (
      <Root
        ref={ref}
        data-slot="component"
        data-variant={variant ?? "default"}
        data-size={size ?? "default"}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Component.displayName = "Component";

export { Component, componentVariants };
export type { ComponentProps };
