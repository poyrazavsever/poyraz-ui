"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  CONTEXT                                                            */
/* ================================================================== */

interface NavbarContextValue {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "default" | "minimal" | "transparent";
}

const NavbarContext = React.createContext<NavbarContextValue>({
  mobileOpen: false,
  setMobileOpen: () => {},
  variant: "default",
});

const useNavbar = () => React.useContext(NavbarContext);

/* ================================================================== */
/*  NAVBAR ROOT                                                        */
/* ================================================================== */

const navbarVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-white",
      minimal: "bg-white",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface NavbarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  /** Show sticky behavior */
  sticky?: boolean;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    { className, variant = "default", sticky = false, children, ...props },
    ref,
  ) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
      <NavbarContext.Provider
        value={{ mobileOpen, setMobileOpen, variant: variant ?? "default" }}
      >
        <nav
          ref={ref}
          className={cn(
            navbarVariants({ variant }),
            sticky && "sticky top-0 z-50",
            className,
          )}
          {...props}
        >
          {children}
        </nav>
      </NavbarContext.Provider>
    );
  },
);
Navbar.displayName = "Navbar";

/* ================================================================== */
/*  TOP BAR                                                            */
/* ================================================================== */

const NavbarTopBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full bg-red-600 text-white",
      "border-b-2 border-dashed border-red-800",
      "px-6 py-1.5",
      "flex items-center justify-between",
      "text-xs font-medium tracking-wide",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
NavbarTopBar.displayName = "NavbarTopBar";

/* ================================================================== */
/*  MAIN CONTAINER                                                     */
/* ================================================================== */

const NavbarMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { variant } = useNavbar();

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full px-6 py-3",
        "flex items-center justify-between gap-6",
        "border-b-2 border-dashed",
        variant === "transparent" ? "border-white/30" : "border-slate-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
NavbarMain.displayName = "NavbarMain";

/* ================================================================== */
/*  BRAND                                                              */
/* ================================================================== */

const NavbarBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 shrink-0", className)}
    {...props}
  >
    {children}
  </div>
));
NavbarBrand.displayName = "NavbarBrand";

/* ================================================================== */
/*  LINKS (NAVIGATION MENU)                                            */
/* ================================================================== */

const NavbarLinks = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("static z-10 hidden lg:flex items-center", className)}
    {...props}
  >
    <NavigationMenuPrimitive.List className="flex items-center gap-1">
      {children}
    </NavigationMenuPrimitive.List>
    <div className="absolute left-0 top-full w-full z-50">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative w-full overflow-hidden",
          "bg-white",
          "border-2 border-dashed border-slate-200 border-t-0",
          "rounded-none shadow-none",
          "h-[var(--radix-navigation-menu-viewport-height)]",
          "transition-[width,height] duration-200",
          "data-[state=open]:animate-in data-[state=open]:fade-in",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out",
        )}
      />
    </div>
  </NavigationMenuPrimitive.Root>
));
NavbarLinks.displayName = "NavbarLinks";

/* ================================================================== */
/*  LINK ITEM (simple)                                                 */
/* ================================================================== */

const navLinkStyles = cva(
  [
    "inline-flex items-center gap-1 px-3 py-2",
    "text-sm font-medium tracking-wide",
    "rounded-none transition-colors duration-150",
    "hover:bg-slate-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
    "data-[active]:border-b-2 data-[active]:border-dashed data-[active]:border-red-600",
  ].join(" "),
);

const NavbarLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item>
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(navLinkStyles(), className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  </NavigationMenuPrimitive.Item>
));
NavbarLink.displayName = "NavbarLink";

/* ================================================================== */
/*  DROPDOWN TRIGGER                                                   */
/* ================================================================== */

const NavbarDropdownTrigger = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navLinkStyles(), "group cursor-pointer", className)}
    {...props}
  >
    {children}
    <ChevronDown
      className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
      aria-hidden
    />
  </NavigationMenuPrimitive.Trigger>
));
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";

/* ================================================================== */
/*  DROPDOWN (wraps trigger + content)                                 */
/* ================================================================== */

const NavbarDropdown = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & {
    label: string;
  }
>(({ className, label, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item ref={ref} className={cn(className)} {...props}>
    <NavbarDropdownTrigger>{label}</NavbarDropdownTrigger>
    <NavigationMenuPrimitive.Content
      className={cn(
        "absolute left-0 top-0 w-full",
        "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
        "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-52",
        "data-[motion=from-start]:slide-in-from-left-52",
        "data-[motion=to-end]:slide-out-to-right-52",
        "data-[motion=to-start]:slide-out-to-left-52",
      )}
    >
      {children}
    </NavigationMenuPrimitive.Content>
  </NavigationMenuPrimitive.Item>
));
NavbarDropdown.displayName = "NavbarDropdown";

/* ================================================================== */
/*  MEGA MENU PANEL                                                    */
/* ================================================================== */

const NavbarMegaMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid gap-4 p-6", "md:w-[500px] lg:w-[700px]", className)}
    {...props}
  >
    {children}
  </div>
));
NavbarMegaMenu.displayName = "NavbarMegaMenu";

/* ================================================================== */
/*  MEGA MENU LINK ITEM                                                */
/* ================================================================== */

const NavbarMegaMenuItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    title: string;
    description?: string;
  }
>(({ className, title, description, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild>
    <a
      ref={ref}
      className={cn(
        "block select-none p-3",
        "border-2 border-dashed border-transparent",
        "rounded-none transition-colors",
        "hover:bg-slate-50 hover:border-slate-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
        className,
      )}
      {...props}
    >
      <div className="text-sm font-bold leading-none">{title}</div>
      {description && (
        <p className="mt-1 text-xs text-slate-500 leading-snug">
          {description}
        </p>
      )}
      {children}
    </a>
  </NavigationMenuPrimitive.Link>
));
NavbarMegaMenuItem.displayName = "NavbarMegaMenuItem";

// Viewport is now rendered inline inside NavbarLinks

/* ================================================================== */
/*  ACTIONS (right side buttons)                                       */
/* ================================================================== */

const NavbarActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hidden lg:flex items-center gap-2 shrink-0", className)}
    {...props}
  >
    {children}
  </div>
));
NavbarActions.displayName = "NavbarActions";

/* ================================================================== */
/*  MOBILE TOGGLE                                                      */
/* ================================================================== */

const NavbarMobileToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { mobileOpen, setMobileOpen } = useNavbar();

  return (
    <button
      ref={ref}
      type="button"
      aria-label={mobileOpen ? "Close menu" : "Open menu"}
      onClick={() => setMobileOpen((prev) => !prev)}
      className={cn(
        "inline-flex items-center justify-center",
        "h-10 w-10",
        "border-2 border-dashed border-slate-300 rounded-none",
        "hover:bg-slate-100 hover:border-slate-500",
        "transition-colors duration-150",
        "lg:hidden",
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
});
NavbarMobileToggle.displayName = "NavbarMobileToggle";

/* ================================================================== */
/*  MOBILE MENU PANEL                                                  */
/* ================================================================== */

const NavbarMobileMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { mobileOpen } = useNavbar();

  if (!mobileOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "lg:hidden",
        "w-full bg-white",
        "border-b-2 border-dashed border-slate-200",
        "px-6 py-4",
        "flex flex-col gap-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";

/* ================================================================== */
/*  MOBILE LINK                                                        */
/* ================================================================== */

const NavbarMobileLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "block px-3 py-2.5",
      "text-sm font-medium",
      "border-2 border-dashed border-transparent",
      "hover:bg-slate-50 hover:border-slate-200",
      "transition-colors duration-150",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
NavbarMobileLink.displayName = "NavbarMobileLink";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Navbar,
  NavbarTopBar,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarDropdownTrigger,
  NavbarMegaMenu,
  NavbarMegaMenuItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  navbarVariants,
};
