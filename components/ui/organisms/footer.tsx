import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ================================================================== */
/*  FOOTER ROOT                                                        */
/* ================================================================== */

const DEFAULT_CONTAINER = "max-w-5xl mx-auto px-6";

const footerVariants = cva(["w-full", "border-t"].join(" "), {
  variants: {
    variant: {
      full: "py-10 bg-background text-foreground border-border",
      compact: "py-3 bg-background text-foreground border-border",
      branded: "py-8 bg-background text-foreground border-border",
      centered: "py-10 text-center bg-background text-foreground border-border",
      dark: "py-10 bg-inverted text-inverted-foreground border-border-strong",
      minimal: "py-6 bg-background text-foreground border-border",
    },
  },
  defaultVariants: { variant: "full" },
});

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
      data-slot="footer"
      data-variant={variant ?? "full"}
      className={cn("@container/footer min-w-0", footerVariants({ variant }), className)}
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
    data-slot="footer-grid"
    className={cn(
      "grid gap-8",
      "grid-cols-1 @sm/footer:grid-cols-2 @md/footer:grid-cols-3 @lg/footer:grid-cols-4",
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
  <div ref={ref} data-slot="footer-section" className={cn("flex flex-col gap-3", className)} {...props}>
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
    data-slot="footer-heading"
    className={cn(
      "text-xs font-bold uppercase tracking-[0.15em]",
      "text-foreground",
      "pb-2",
      "border-b border-border",
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
    data-slot="footer-link"
    className={cn(
      "text-sm text-muted-foreground",
      "hover:text-primary hover:underline",
      "transition-[color,text-decoration-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
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
    data-slot="footer-brand"
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
    data-slot="footer-socials"
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
    data-slot="footer-social-link"
    className={cn(
      "inline-flex items-center justify-center",
      "h-8 w-8",
      "border border-border-strong rounded-sm",
      "text-muted-foreground",
      "hover:bg-primary hover:text-primary-foreground hover:border-primary-800",
      "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:scale-105 active:scale-95",
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
    data-slot="footer-bottom"
    className={cn(
      "flex flex-col @sm/footer:flex-row items-center justify-between gap-4",
      "pt-5 mt-6",
      "border-t border-border",
      "text-xs text-placeholder",
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
    className={cn("flex items-center gap-4 flex-wrap", "text-xs", className)}
    {...props}
  >
    {children}
  </div>
));
FooterBottomLinks.displayName = "FooterBottomLinks";

/* ================================================================== */
/*  FOOTER DIVIDER                                                     */
/* ================================================================== */

const FooterDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("border-t border-border my-8", className)}
    {...props}
  />
));
FooterDivider.displayName = "FooterDivider";

/* ================================================================== */
/*  FOOTER DESCRIPTION (brand tagline text)                            */
/* ================================================================== */

const FooterDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  >
    {children}
  </p>
));
FooterDescription.displayName = "FooterDescription";

/* ================================================================== */
/*  FOOTER BADGE (small label / version tag)                           */
/* ================================================================== */

const FooterBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center",
      "px-2 py-0.5",
      "text-[10px] font-bold uppercase tracking-wider",
      "border border-border rounded-sm",
      "text-muted-foreground bg-muted",
      "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
      className,
    )}
    {...props}
  >
    {children}
  </span>
));
FooterBadge.displayName = "FooterBadge";

/* ================================================================== */
/*  FOOTER LINK GROUP (horizontal inline links row)                    */
/* ================================================================== */

const FooterLinkGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)}
    {...props}
  >
    {children}
  </div>
));
FooterLinkGroup.displayName = "FooterLinkGroup";

/* ================================================================== */
/*  FOOTER CTA (call-to-action banner)                                 */
/* ================================================================== */

export interface FooterCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  description?: string;
}

const FooterCTA = React.forwardRef<HTMLDivElement, FooterCTAProps>(
  ({ className, heading, description, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col @sm/footer:flex-row items-start @sm/footer:items-center justify-between gap-4",
        "py-5 px-6",
        "border border-border rounded-sm",
        "bg-muted",
        "transition-[background-color,border-color,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
        className,
      )}
      {...props}
    >
      <div className="min-w-0">
        {heading && (
          <h4 className="text-sm font-semibold text-foreground">{heading}</h4>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0">{children}</div>
    </div>
  ),
);
FooterCTA.displayName = "FooterCTA";

/* ================================================================== */
/*  FOOTER APP (app store badges / download area)                      */
/* ================================================================== */

const FooterApp = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
    <span className="text-xs font-bold uppercase tracking-[0.15em] text-placeholder">
      Download App
    </span>
    <div className="flex items-center gap-2">{children}</div>
  </div>
));
FooterApp.displayName = "FooterApp";

/* ================================================================== */
/*  FOOTER APP LINK (single app store badge)                           */
/* ================================================================== */

const FooterAppLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2",
      "px-3 py-2",
      "border border-border-strong rounded-sm",
      "text-xs font-medium text-secondary-foreground",
      "hover:bg-muted hover:border-input",
      "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[0.98]",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
FooterAppLink.displayName = "FooterAppLink";

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
  FooterDivider,
  FooterBottom,
  FooterBottomLinks,
  FooterDescription,
  FooterBadge,
  FooterLinkGroup,
  FooterCTA,
  FooterApp,
  FooterAppLink,
  footerVariants,
};
