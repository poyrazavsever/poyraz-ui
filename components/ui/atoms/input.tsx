import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { fieldVariants } from "@/components/ui/recipes";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof fieldVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, radius, type, variant, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      data-variant={variant ?? "default"}
      data-radius={radius ?? "md"}
      data-invalid={props["aria-invalid"] ? "" : undefined}
      className={cn(
        fieldVariants({ variant, radius }),
        "h-10 px-3 py-2 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-primary",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export type InputGroupProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof fieldVariants>;

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, radius, variant, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="input-group"
      data-variant={variant ?? "default"}
      data-radius={radius ?? "md"}
      aria-invalid={props["aria-invalid"]}
      className={cn(
        fieldVariants({ variant, radius }),
        "group h-10 items-center overflow-hidden p-0 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/20 has-[[aria-invalid=true]]:border-invalid has-[[aria-invalid=true]]:ring-invalid/15 [&_[data-slot=input]]:h-full [&_[data-slot=input]]:rounded-none [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:shadow-none [&_[data-slot=input]]:outline-none [&_[data-slot=input]]:ring-0 [&_[data-slot=input]]:ring-offset-0",
        className,
      )}
      {...props}
    />
  ),
);
InputGroup.displayName = "InputGroup";

type InputGroupAddonProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: "start" | "end";
};

function InputGroupAddon({ className, position = "start", ...props }: InputGroupAddonProps) {
  return (
    <div
      data-slot="input-group-addon"
      data-position={position}
      className={cn(
        "flex h-full shrink-0 items-center justify-center px-3 text-muted-foreground [&_svg]:size-4",
        position === "start" ? "border-r border-border" : "border-l border-border",
        className,
      )}
      {...props}
    />
  );
}

export { Input, InputGroup, InputGroupAddon, fieldVariants };
