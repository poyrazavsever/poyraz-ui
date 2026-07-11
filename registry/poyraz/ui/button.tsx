import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-primary/80 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "border border-border/80 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline:
          "border border-border bg-background/60 text-foreground shadow-sm backdrop-blur-sm hover:bg-accent hover:text-accent-foreground",
        ghost:
          "border border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "border border-destructive/80 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        link: "h-auto rounded-none px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-lg px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
