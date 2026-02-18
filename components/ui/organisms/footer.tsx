import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  FOOTER ROOT                                                        */
/* ================================================================== */

const DEFAULT_CONTAINER = "max-w-5xl mx-auto";

const footerVariants = cva(
  [
    "w-full",
    "bg-white text-slate-950",
    "border-t-2 border-dashed border-slate-200",
  ].join(" "),
  {
    variants: {
      variant: {
        full: "py-12",
        compact: "py-4",
        branded: "py-10",
      },
    },
    defaultVariants: { variant: "full" },
  },
);

export interface FooterProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  /** Class name applied to inner container for width constraint */
  containerClassName?: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, variant = "full", containerClassName, children, ...props },
    ref,
  ) => (
    <footer
      ref={ref}
      className={cn(footerVariants({ variant }), className)}
      {...props}
    >
      <div className={cn("px-6", containerClassName ?? DEFAULT_CONTAINER)}>
        {children}
      </div>
    </footer>
  ),
);
Footer.displayName = "Footer";

/* ================================================================== */
/*  FOOTER GRID (multi-column layout for 'full' variant)               */
/* ================================================================== */

const FooterGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid gap-8",
      "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
FooterGrid.displayName = "FooterGrid";

/* ================================================================== */
/*  FOOTER SECTION (column)                                            */
/* ================================================================== */

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
    {children}
  </div>
));
FooterSection.displayName = "FooterSection";

/* ================================================================== */
/*  FOOTER HEADING                                                     */
/* ================================================================== */

const FooterHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "text-xs font-bold uppercase tracking-[0.15em]",
      "text-slate-900",
      "pb-2",
      "border-b-2 border-dashed border-slate-200",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
));
FooterHeading.displayName = "FooterHeading";

/* ================================================================== */
/*  FOOTER LINK                                                        */
/* ================================================================== */

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-sm text-slate-500",
      "hover:text-red-600 hover:underline",
      "transition-colors duration-150",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
FooterLink.displayName = "FooterLink";

/* ================================================================== */
/*  FOOTER BRAND (for 'branded' variant)                               */
/* ================================================================== */

const FooterBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-start gap-3", "max-w-sm", className)}
    {...props}
  >
    {children}
  </div>
));
FooterBrand.displayName = "FooterBrand";

/* ================================================================== */
/*  FOOTER SOCIALS                                                     */
/* ================================================================== */

const FooterSocials = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  >
    {children}
  </div>
));
FooterSocials.displayName = "FooterSocials";

/* ================================================================== */
/*  FOOTER SOCIAL LINK                                                 */
/* ================================================================== */

const FooterSocialLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center",
      "h-9 w-9",
      "border-2 border-dashed border-slate-300 rounded-none",
      "text-slate-500",
      "hover:bg-red-600 hover:text-white hover:border-red-800",
      "transition-colors duration-150",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
FooterSocialLink.displayName = "FooterSocialLink";

/* ================================================================== */
/*  FOOTER BOTTOM (copyright bar)                                      */
/* ================================================================== */

const FooterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col sm:flex-row items-center justify-between gap-4",
      "pt-6 mt-8",
      "border-t-2 border-dashed border-slate-200",
      "text-xs text-slate-400",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
FooterBottom.displayName = "FooterBottom";

/* ================================================================== */
/*  FOOTER BOTTOM LINKS                                                */
/* ================================================================== */

const FooterBottomLinks = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", "text-xs", className)}
    {...props}
  >
    {children}
  </div>
));
FooterBottomLinks.displayName = "FooterBottomLinks";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Footer,
  FooterGrid,
  FooterSection,
  FooterHeading,
  FooterLink,
  FooterBrand,
  FooterSocials,
  FooterSocialLink,
  FooterBottom,
  FooterBottomLinks,
  footerVariants,
};
