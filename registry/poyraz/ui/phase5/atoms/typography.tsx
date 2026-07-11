import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      display: "text-poyraz-display font-bold tracking-[-0.035em]",
      h1: "text-poyraz-heading font-bold tracking-[-0.025em]",
      h2: "text-poyraz-title font-semibold tracking-[-0.015em]",
      h3: "text-lg font-semibold tracking-tight",
      h4: "text-base font-semibold tracking-tight",
      body: "text-poyraz-body",
      p: "text-poyraz-body",
      lead: "text-lg leading-7 text-muted-foreground",
      large: "text-base font-semibold",
      small: "text-poyraz-body-small",
      caption: "text-poyraz-caption text-muted-foreground",
      muted: "text-poyraz-caption text-muted-foreground",
      blockquote: "border-l-2 border-primary pl-5 italic text-muted-foreground",
      list: "ml-6 list-disc space-y-2 text-poyraz-body",
    },
    font: {
      primary: "font-primary",
      secondary: "font-secondary",
      inherit: "font-inherit",
    },
    balance: {
      true: "text-balance",
      false: "",
    },
  },
  defaultVariants: { variant: "body", font: "primary", balance: false },
});

const textEffectVariants = cva("relative inline-block", {
  variants: {
    effect: {
      none: "",
      "hand-drawn": "poyraz-text-hand-drawn",
      contrast: "font-secondary italic text-primary",
      shimmer: "poyraz-text-shimmer",
      marker: "poyraz-text-marker z-0 px-1",
      outline: "poyraz-text-outline",
    },
    tone: {
      primary: "[--poyraz-text-effect:var(--color-primary)] [--poyraz-text-effect-soft:var(--color-primary-muted)]",
      neutral: "[--poyraz-text-effect:var(--color-foreground)] [--poyraz-text-effect-soft:var(--color-accent)]",
      warning: "[--poyraz-text-effect:var(--color-warning-icon)] [--poyraz-text-effect-soft:var(--color-warning)]",
    },
  },
  defaultVariants: { effect: "none", tone: "primary" },
});

type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
  /** @deprecated Use font="secondary". */
  secondaryFont?: boolean;
}

const semanticElement: Record<TypographyVariant, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  p: "p",
  lead: "p",
  large: "p",
  small: "p",
  caption: "span",
  muted: "p",
  blockquote: "blockquote",
  list: "ul",
};

function Typography({
  balance,
  className,
  component,
  font,
  secondaryFont = false,
  variant = "body",
  ...props
}: TypographyProps) {
  const Component = component ?? semanticElement[variant ?? "body"];
  const resolvedFont = secondaryFont ? "secondary" : font;

  return (
    <Component
      data-slot="typography"
      data-variant={variant}
      data-font={resolvedFont ?? "primary"}
      className={cn(
        typographyVariants({ variant, font: resolvedFont, balance }),
        className,
      )}
      {...props}
    />
  );
}

export interface TextEffectProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textEffectVariants> {}

function TextEffect({ className, effect, tone, ...props }: TextEffectProps) {
  return (
    <span
      data-slot="text-effect"
      data-effect={effect ?? "none"}
      data-tone={tone ?? "primary"}
      className={cn(textEffectVariants({ effect, tone }), className)}
      {...props}
    />
  );
}

export {
  TextEffect,
  Typography,
  textEffectVariants,
  typographyVariants,
};
