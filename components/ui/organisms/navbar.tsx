"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  CONTEXT                                                            */
/* ================================================================== */

interface NavbarContextValue {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "default" | "minimal" | "transparent" | "bordered";
  containerClassName: string;
}

const DEFAULT_CONTAINER = "max-w-5xl mx-auto";

const NavbarContext = React.createContext<NavbarContextValue>({
  mobileOpen: false,
  setMobileOpen: () => {},
  variant: "default",
  containerClassName: DEFAULT_CONTAINER,
});

const useNavbar = () => React.useContext(NavbarContext);

/* ================================================================== */
/*  NAVBAR ROOT                                                        */
/* ================================================================== */

const navbarVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-white text-slate-950",
      minimal: "bg-white text-slate-950",
      transparent: "bg-transparent text-slate-950",
      bordered:
        "bg-white text-slate-950 border-2 border-dashed border-slate-300",
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
  /** Auto-hide when scrolling down, reveal when scrolling up */
  autoHide?: boolean;
  /** Class name applied to inner containers for width constraint */
  containerClassName?: string;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant = "default",
      sticky = false,
      autoHide = false,
      containerClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);
    const lastScrollY = React.useRef(0);

    React.useEffect(() => {
      if (!autoHide || !sticky) return;
      const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > lastScrollY.current && currentY > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastScrollY.current = currentY;
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [autoHide, sticky]);

    return (
      <NavbarContext.Provider
        value={{
          mobileOpen,
          setMobileOpen,
          variant: variant ?? "default",
          containerClassName: containerClassName ?? DEFAULT_CONTAINER,
        }}
      >
        <nav
          ref={ref}
          className={cn(
            navbarVariants({ variant }),
            sticky && "sticky top-0 z-50",
            autoHide && "transition-transform duration-300",
            hidden && "-translate-y-full",
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
>(({ className, children, ...props }, ref) => {
  const { containerClassName } = useNavbar();

  return (
    <div
      ref={ref}
      className={cn(
        "w-full",
        "text-xs font-medium tracking-wide",
        "bg-red-600 text-white border-b-2 border-dashed border-red-800",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "px-6 py-1.5 sm:px-0",
          "flex items-center justify-between",
          containerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
});
NavbarTopBar.displayName = "NavbarTopBar";

/* ================================================================== */
/*  MAIN CONTAINER                                                     */
/* ================================================================== */

const NavbarMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { variant, containerClassName } = useNavbar();

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full",
        "border-b-2 border-dashed",
        variant === "transparent"
          ? "border-white/30"
          : variant === "bordered"
            ? "border-slate-300"
            : "border-slate-200",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "px-6 py-3",
          "flex items-center justify-between gap-4 sm:gap-6",
          "overflow-hidden",
          containerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
});
NavbarMain.displayName = "NavbarMain";

/* ================================================================== */
/*  BRAND                                                              */
/* ================================================================== */

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, children, href, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn("flex items-center gap-2", className)}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
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
    <div className="absolute left-0 top-full w-full z-[60]">
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

const navLinkStyles = [
  "inline-flex items-center gap-1 px-3 py-2",
  "text-sm font-medium tracking-wide",
  "rounded-none transition-colors duration-150",
  "hover:bg-slate-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
  "data-[active]:border-b-2 data-[active]:border-dashed data-[active]:border-red-600",
].join(" ");

const NavbarLink = React.forwardRef<
  React.ComponentRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Item>
    <NavigationMenuPrimitive.Link
      ref={ref}
      className={cn(navLinkStyles, className)}
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
    className={cn(navLinkStyles, "group cursor-pointer", className)}
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
        "border-2 border-dashed rounded-none",
        "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
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
  const { mobileOpen, setMobileOpen } = useNavbar();

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* Slide-in panel */}
      <div
        ref={ref}
        className={cn(
          "lg:hidden fixed top-0 right-0 z-[999] h-full w-[75%] max-w-sm",
          "bg-white",
          "border-l-2 border-dashed border-slate-200",
          "shadow-none",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          className,
        )}
        {...props}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-dashed border-slate-200">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "inline-flex items-center justify-center",
              "h-8 w-8",
              "border-2 border-dashed rounded-none",
              "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
              "transition-colors duration-150",
              "cursor-pointer",
            )}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Panel links */}
        <nav className="flex flex-col gap-1 px-4 py-4 overflow-y-auto h-[calc(100%-57px)]">
          {children}
        </nav>
      </div>
    </>
  );
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";

/* ================================================================== */
/*  MOBILE LINK                                                        */
/* ================================================================== */

interface NavbarMobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const NavbarMobileLink = React.forwardRef<
  HTMLAnchorElement,
  NavbarMobileLinkProps
>(({ className, active, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "block px-3 py-2.5",
      "text-sm font-medium",
      "border-2 border-dashed border-transparent",
      "transition-colors duration-150",
      active
        ? "bg-red-50 text-red-700 border-red-200 font-semibold"
        : "hover:bg-slate-50 hover:border-slate-200",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
NavbarMobileLink.displayName = "NavbarMobileLink";

/* ================================================================== */
/*  MOBILE GROUP (labeled section in mobile menu)                      */
/* ================================================================== */

interface NavbarMobileGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const NavbarMobileGroup = React.forwardRef<
  HTMLDivElement,
  NavbarMobileGroupProps
>(({ className, label, children, ...props }, ref) => (
  <div ref={ref} className={cn("mb-3", className)} {...props}>
    {label && (
      <div className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </div>
    )}
    <div className="flex flex-col gap-0.5">{children}</div>
  </div>
));
NavbarMobileGroup.displayName = "NavbarMobileGroup";

/* ================================================================== */
/*  MOBILE ACTIONS (CTA buttons in bottom of mobile menu)              */
/* ================================================================== */

const NavbarMobileActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mt-auto px-4 py-4",
      "border-t-2 border-dashed border-slate-200",
      "flex flex-col gap-2",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
NavbarMobileActions.displayName = "NavbarMobileActions";

/* ================================================================== */
/*  SEARCH                                                             */
/* ================================================================== */

interface NavbarSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Callback when user submits search */
  onSearch?: (value: string) => void;
  /** Container class */
  wrapperClassName?: string;
}

const NavbarSearch = React.forwardRef<HTMLInputElement, NavbarSearchProps>(
  (
    {
      className,
      placeholder = "Search…",
      onSearch,
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div
        className={cn("relative hidden sm:flex items-center", wrapperClassName)}
      >
        <Search className="absolute left-2.5 h-3.5 w-3.5 text-slate-400" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className={cn(
            "h-8 w-40 lg:w-52 pl-8 pr-3",
            "text-xs font-medium",
            "border-2 border-dashed rounded-none",
            "bg-white border-slate-300 text-slate-950 placeholder:text-slate-400",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-red-600",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
NavbarSearch.displayName = "NavbarSearch";

/* ================================================================== */
/*  DIVIDER (vertical separator)                                       */
/* ================================================================== */

const NavbarDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="separator"
    className={cn(
      "hidden lg:block",
      "h-6 w-px",
      "border-l-2 border-dashed border-slate-200",
      "mx-2",
      className,
    )}
    {...props}
  />
));
NavbarDivider.displayName = "NavbarDivider";

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
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarSearch,
  NavbarDivider,
  navbarVariants,
  useNavbar,
};
