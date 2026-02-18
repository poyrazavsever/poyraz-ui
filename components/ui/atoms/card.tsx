import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/ui/atoms/typography";

// ─── Card Root ──────────────────────────────────────────────────────────────

const cardVariants = cva(
  [
    "relative flex flex-col",
    "rounded-none shadow-none",
    "transition-all duration-300 ease-out",
    "overflow-hidden",
  ].join(" "),
  {
    variants: {
      variant: {
        // Classic brutalist: dashed border, clean
        default: "bg-white border-2 border-dashed border-slate-300",

        // Bold dashed border — high contrast
        bordered: "bg-white border-2 border-dashed border-slate-900",

        // Red offset box behind (like Logo component) — the flagship brutalist card
        elevated: "bg-white border-2 border-dashed border-slate-900",

        // Red left accent stripe
        highlight: [
          "bg-white border-2 border-dashed border-slate-300",
          "border-l-4 border-l-red-600",
        ].join(" "),

        // Minimal — no border, just hover-reveal
        ghost: [
          "bg-transparent border-2 border-dashed border-transparent",
          "hover:border-slate-300 hover:bg-white",
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
              "bg-red-600 border-2 border-dashed border-red-900",
              "rounded-none",
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
        "border-b-2 border-dashed border-slate-300",
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
    className={cn("flex flex-col gap-1.5 p-5", className)}
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
      "text-lg font-bold tracking-tight leading-tight text-slate-900",
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
    className={cn("text-sm text-slate-500 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ─── Card Content ───────────────────────────────────────────────────────────

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-5 pb-4", className)} {...props} />
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
      "flex items-center gap-3 px-5 py-4",
      "border-t-2 border-dashed border-slate-200",
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
