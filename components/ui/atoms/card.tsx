import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/ui/atoms/typography";

// ─── Card Root ──────────────────────────────────────────────────────────────

const cardVariants = cva(
  [
    "relative flex flex-col",
    "rounded-sm shadow-none",
    "transition-all duration-300 ease-out",
    "overflow-hidden",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-background border border-border-strong",

        // Bold border — high contrast
        bordered: "bg-background border border-foreground",

        // Red offset box behind (like Logo component) — the flagship card
        elevated: "bg-background border border-foreground",

        // Red left accent stripe
        highlight: [
          "bg-background border border-border-strong",
          "border-l-4 border-l-primary",
        ].join(" "),

        // Minimal — no border, just hover-reveal
        ghost: [
          "bg-transparent border border-transparent",
          "hover:border-border-strong hover:bg-background",
        ].join(" "),

        // Clickable — subtle lift on hover
        interactive: [
          "bg-background border border-border-strong",
          "cursor-pointer",
          "hover:-translate-y-0.5 hover:border-input",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    // Elevated variant wraps content with a red box behind
    if (variant === "elevated") {
      return (
        <div className={cn("group relative", className)}>
          {/* Red box — brutalist offset shadow */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-primary border border-primary-dark",
              "rounded-sm",
              "translate-x-2 translate-y-2",
              "transition-transform duration-300 ease-out",
              "group-hover:translate-x-3 group-hover:translate-y-3",
            )}
            aria-hidden="true"
          />
          <div
            ref={ref}
            className={cn(
              cardVariants({ variant }),
              "relative z-10",
              "transition-transform duration-300 ease-out",
              "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5",
            )}
            {...props}
          >
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
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
    className={cn("flex flex-col gap-1.5 p-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// ─── Card Title ─────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-base font-bold tracking-tight leading-tight text-foreground",
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
  <div ref={ref} className={cn("px-4 pb-3", className)} {...props} />
));
CardContent.displayName = "CardContent";

// ─── Card Footer ────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 px-4 py-3",
      "border-t border-border",
      "mt-auto",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// ─── Exports ────────────────────────────────────────────────────────────────

export {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
