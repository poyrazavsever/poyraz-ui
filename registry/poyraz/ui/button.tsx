"use client";

import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "poyraz-button relative isolate inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap border font-sans text-sm font-semibold outline-none transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] data-[effect=fill]:hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:border-border disabled:opacity-100 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-disabled aria-disabled:text-disabled-foreground aria-disabled:border-border active:scale-[var(--poyraz-button-press-scale)] motion-reduce:transition-none motion-reduce:active:scale-100 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-primary/80 bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
        secondary:
          "border-border-strong/70 bg-secondary text-secondary-foreground hover:border-border-strong hover:bg-accent",
        soft: "border-primary/15 bg-primary-muted text-primary-muted-foreground hover:border-primary/25 hover:bg-primary/15",
        outline:
          "border-primary/55 bg-background/60 text-primary hover:border-primary hover:bg-primary-muted",
        glass:
          "poyraz-button-glass border-glass-border-outer text-foreground hover:border-border-strong hover:bg-glass-strong dark:hover:border-glass-border",
        ghost:
          "border-transparent bg-transparent text-foreground/75 hover:bg-accent hover:text-foreground",
        destructive:
          "border-destructive/80 bg-destructive text-destructive-foreground hover:border-destructive hover:bg-destructive/90",
        link: "h-auto overflow-visible rounded-none border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline active:scale-100",
      },
      size: {
        xs: "h-7 gap-1.5 px-2.5 text-xs [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-small)] [&_svg]:size-3.5",
        sm: "h-8 gap-1.5 px-3 text-xs [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-small)] [&_svg]:size-3.5",
        default: "h-10 px-4 [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-medium)] [&_svg]:size-4",
        lg: "h-11 px-6 text-base [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-large)] [&_svg]:size-4.5",
        "icon-sm": "size-8 p-0 [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-small)] [&_svg]:size-3.5",
        icon: "size-10 p-0 [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-medium)] [&_svg]:size-4",
        "icon-lg": "size-11 p-0 [--poyraz-button-press-scale:var(--poyraz-motion-scale-press-large)] [&_svg]:size-5",
      },
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "md",
    },
  },
);

type ButtonEffect = "none" | "shine" | "fill" | "swap" | "border-draw";
type ButtonFillDirection = "right" | "left" | "up" | "down";
type ButtonSwapTarget = "icon" | "label" | "both";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Render the button styles and behavior on the single child element. */
    asChild?: boolean;
    /** Keep the label in-flow while showing a centered busy indicator. */
    loading?: boolean;
    /** Optional decorative hover motion; semantic state remains unchanged. */
    effect?: ButtonEffect;
    /** Direction in which the fill effect travels. */
    fillDirection?: ButtonFillDirection;
    /** Anatomy animated by the swap effect. Raw text is treated as content. */
    swapTarget?: ButtonSwapTarget;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      disabled = false,
      effect = "none",
      fillDirection = "right",
      loading = false,
      onClick,
      radius = "md",
      size = "default",
      swapTarget = "both",
      type,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;
    const sharedProps = {
      "aria-busy": loading || undefined,
      "aria-disabled": asChild && isDisabled ? true : undefined,
      "data-effect": effect,
      "data-fill-direction": fillDirection,
      "data-loading": loading ? "" : undefined,
      "data-radius": radius,
      "data-size": size,
      "data-slot": "button",
      "data-swap-target": swapTarget,
      "data-variant": variant,
      className: cn(buttonVariants({ variant, size, radius }), className),
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isDisabled) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      },
    };

    const spinner = (
      <span data-slot="button-spinner" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
          <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </span>
    );

    if (asChild) {
      return (
        <Slot ref={ref} {...sharedProps} {...props}>
          {spinner}
          <Slottable>{children}</Slottable>
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        type={type ?? "button"}
        disabled={isDisabled}
        {...sharedProps}
        {...props}
      >
        {spinner}
        <span data-slot="button-content">{children}</span>
      </button>
    );
  },
);
Button.displayName = "Button";

function ButtonIcon({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return <span data-slot="button-icon" className={cn("inline-flex", className)} {...props} />;
}

function ButtonLabel({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return <span data-slot="button-label" className={cn("inline-flex", className)} {...props} />;
}

export { Button, ButtonIcon, ButtonLabel, buttonVariants };
export type {
  ButtonEffect,
  ButtonFillDirection,
  ButtonProps,
  ButtonSwapTarget,
};
