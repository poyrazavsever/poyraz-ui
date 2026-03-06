import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/ui/atoms/typography";

const buttonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    // Typography
    "text-sm font-semibold tracking-wide uppercase",
    // Shape — minimal
    "rounded-sm shadow-none",
    // Border
    "border",
    // Interaction
    "cursor-pointer select-none",
    // Transitions
    "transition-all duration-200 ease-out",
    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed",
    // Active press
    "active:scale-[0.97] active:duration-75",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground border-primary-dark",
          "hover:bg-primary-hover hover:border-primary-dark",
          "active:bg-primary-active",
        ].join(" "),

        secondary: [
          "bg-background text-foreground border-input",
          "hover:bg-muted hover:border-foreground hover:text-foreground",
          "active:bg-accent",
        ].join(" "),

        outline: [
          "bg-transparent text-foreground border-foreground",
          "hover:bg-inverted hover:text-inverted-foreground hover:border-foreground",
          "active:bg-inverted/90",
        ].join(" "),

        destructive: [
          "bg-destructive text-destructive-foreground border-destructive/80",
          "hover:bg-destructive/90 hover:border-destructive",
          "active:bg-destructive/80",
        ].join(" "),

        ghost: [
          "bg-transparent text-foreground/70 border-transparent",
          "hover:bg-accent hover:text-foreground hover:border-border-strong",
          "active:bg-accent-hover",
        ].join(" "),

        link: [
          "bg-transparent text-primary border-primary",
          "underline underline-offset-4",
          "hover:underline hover:text-primary-hover hover:border-primary-hover",
          "active:text-primary-active",
          // px-0 so the link variant sits naturally in text
          "px-0 h-auto",
        ].join(" "),
      },
      size: {
        default: "h-8 px-3.5 py-1.5 text-xs",
        sm: "h-7 px-2.5 py-1 text-[11px]",
        lg: "h-9 px-4 py-1.5 text-xs",
        icon: "h-8 w-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// ---------------------------------------------------------------------------

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (polymorphic via Radix Slot) */
  asChild?: boolean;
  /** Show a loading spinner and disable interactions */
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Component>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
