import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  FOOTER ROOT                                                        */
/* ================================================================== */

const DEFAULT_CONTAINER = "max-w-5xl mx-auto";

const footerVariants = cva(["w-full", "border-t-2 border-dashed"].join(" "), {
  variants: {
    variant: {
      full: "py-12 bg-white text-slate-950 border-slate-200",
      compact: "py-4 bg-white text-slate-950 border-slate-200",
      branded: "py-10 bg-white text-slate-950 border-slate-200",
      centered: "py-12 text-center bg-white text-slate-950 border-slate-200",
      dark: "py-12 bg-slate-950 text-slate-100 border-slate-800",
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
      "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
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
    className={cn("flex items-center gap-4 flex-wrap", "text-xs", className)}
    {...props}
  >
    {children}
  </div>
));
FooterBottomLinks.displayName = "FooterBottomLinks";

/* ================================================================== */
/*  FOOTER NEWSLETTER                                                  */
/* ================================================================== */

export interface FooterNewsletterProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

function FooterNewsletterInner(
  {
    className,
    heading = "Subscribe to our newsletter",
    description = "Get the latest updates and news directly in your inbox.",
    placeholder = "you@example.com",
    buttonText = "Subscribe",
    onSubscribe,
    ...props
  }: FooterNewsletterProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe?.(email.trim());
      setEmail("");
    }
  };
  return (
    <div
      ref={ref}
      className={cn(
        "py-6 px-6",
        "border-2 border-dashed border-slate-200",
        "bg-slate-50",
        className,
      )}
      {...props}
    >
      <h4 className="text-sm font-bold uppercase tracking-wide mb-1">
        {heading}
      </h4>
      <p className="text-xs text-slate-500 mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className={cn(
            "flex-1 h-10 px-3 text-sm",
            "border-2 border-dashed border-slate-300 bg-white",
            "placeholder:text-slate-400",
            "focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-1",
            "rounded-none shadow-none",
          )}
        />
        <button
          type="submit"
          className={cn(
            "h-10 px-5",
            "text-xs font-bold uppercase tracking-wide",
            "bg-red-600 text-white",
            "border-2 border-dashed border-red-800",
            "hover:bg-red-700 hover:border-red-900",
            "active:bg-red-800 active:scale-[0.97]",
            "transition-all duration-150",
            "rounded-none shadow-none cursor-pointer",
          )}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

const FooterNewsletter = React.forwardRef<
  HTMLDivElement,
  FooterNewsletterProps
>(FooterNewsletterInner);
FooterNewsletter.displayName = "FooterNewsletter";

/* ================================================================== */
/*  FOOTER DIVIDER                                                     */
/* ================================================================== */

const FooterDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("border-t-2 border-dashed border-slate-200 my-8", className)}
    {...props}
  />
));
FooterDivider.displayName = "FooterDivider";

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
  FooterNewsletter,
  FooterDivider,
  FooterBottom,
  FooterBottomLinks,
  footerVariants,
};
