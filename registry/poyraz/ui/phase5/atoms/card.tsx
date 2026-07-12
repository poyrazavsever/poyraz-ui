import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Card Root ──────────────────────────────────────────────────────────────

const cardVariants = cva(
  "poyraz-card relative flex flex-col overflow-hidden border text-card-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
  {
    variants: {
      variant: {
        default: "border-border bg-surface shadow-xs",
        soft: "border-transparent bg-surface-subtle shadow-none",
        outline: "border-border-strong bg-transparent shadow-none",
        glass: "border-glass-border-outer bg-glass shadow-[var(--poyraz-glass-shadow)] backdrop-blur-glass",
        elevated: "border-border/80 bg-surface-elevated shadow-lg",
        interactive: "border-border bg-surface shadow-sm hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md",
        bordered: "border-border-strong bg-surface shadow-none",
        highlight: "border-border border-l-4 border-l-primary bg-surface shadow-xs",
        ghost: "border-transparent bg-transparent shadow-none hover:border-border hover:bg-surface-subtle",
      },
      radius: {
        none: "rounded-none",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "xl",
    },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, radius, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        data-variant={variant ?? "default"}
        data-radius={radius ?? "xl"}
        className={cn(cardVariants({ variant, radius }), className)}
        {...props}
      />
    );
  },
);
Card.displayName = "Card";

// ─── Card Image ─────────────────────────────────────────────────────────────

export interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio utility class, e.g. "aspect-video" or "aspect-square" */
  aspect?: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, aspect = "aspect-video", children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="card-image"
      className={cn(
        "relative overflow-hidden",
        "border-b border-border-strong",
        aspect,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
CardImage.displayName = "CardImage";

// ─── Card Header ────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn("grid grid-cols-[1fr_auto] items-start gap-1.5 p-5 [&_[data-slot=card-description]]:col-start-1", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardHeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-heading"
    className={cn("col-start-1 min-w-0 space-y-1.5", className)}
    {...props}
  />
));
CardHeading.displayName = "CardHeading";

// ─── Card Title ─────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn(
      "text-base font-semibold leading-tight tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// ─── Card Description ───────────────────────────────────────────────────────

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ─── Card Content ───────────────────────────────────────────────────────────

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} data-slot="card-content" className={cn("px-5 pb-5", className)} {...props} />
));
CardContent.displayName = "CardContent";

// ─── Card Footer ────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn(
      "mt-auto flex items-center gap-3 border-t border-border px-5 py-4",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn("col-start-2 row-span-2 row-start-1 self-start", className)}
    {...props}
  />
));
CardAction.displayName = "CardAction";

// ─── Exports ────────────────────────────────────────────────────────────────

export {
  Card,
  CardImage,
  CardHeader,
  CardHeading,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  cardVariants,
};
