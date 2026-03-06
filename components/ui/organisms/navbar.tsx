"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  Search,
  X,
} from "lucide-react";

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

const DEFAULT_CONTAINER = "max-w-5xl mx-auto px-6";

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
      default: "bg-background text-foreground",
      minimal: "bg-background text-foreground",
      transparent: "bg-transparent text-foreground",
      bordered: "bg-background text-foreground border-b border-border-strong",
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
/*  TOP BAR (announcement / info / secondary)                          */
/* ================================================================== */

const topBarVariants = cva(
  ["w-full", "text-xs font-medium tracking-wide"].join(" "),
  {
    variants: {
      variant: {
        announcement:
          "bg-primary text-primary-foreground border-b border-primary-800",
        info: "bg-accent text-secondary-foreground border-b border-border",
        secondary: "bg-muted text-muted-foreground border-b border-border",
      },
    },
    defaultVariants: { variant: "announcement" },
  },
);

export interface NavbarTopBarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof topBarVariants> {
  /** Show a dismiss / close button */
  dismissible?: boolean;
}

const NavbarTopBar = React.forwardRef<HTMLDivElement, NavbarTopBarProps>(
  (
    {
      className,
      variant = "announcement",
      dismissible = false,
      children,
      ...props
    },
    ref,
  ) => {
    const { containerClassName } = useNavbar();
    const [dismissed, setDismissed] = React.useState(false);

    if (dismissed) return null;

    return (
      <div
        ref={ref}
        className={cn(topBarVariants({ variant }), className)}
        {...props}
      >
        <div
          className={cn(
            "py-1",
            "flex items-center justify-between",
            containerClassName,
          )}
        >
          <div className="flex items-center gap-4 flex-1 min-w-0">
            {children}
          </div>
          {dismissible && (
            <button
              type="button"
              aria-label="Dismiss"
              onClick={() => setDismissed(true)}
              className={cn(
                "inline-flex items-center justify-center shrink-0",
                "h-5 w-5 rounded-sm ml-2",
                "transition-colors duration-150 cursor-pointer",
                variant === "announcement"
                  ? "hover:bg-primary-600 text-primary-foreground/80 hover:text-primary-foreground"
                  : "hover:bg-accent text-placeholder hover:text-muted-foreground",
              )}
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    );
  },
);
NavbarTopBar.displayName = "NavbarTopBar";

/* ================================================================== */
/*  TOP BAR SECTION (for secondary variant layout)                     */
/* ================================================================== */

interface NavbarTopBarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
}

const NavbarTopBarSection = React.forwardRef<
  HTMLDivElement,
  NavbarTopBarSectionProps
>(({ className, align = "start", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 text-[11px]",
      align === "center" && "justify-center",
      align === "end" && "ml-auto",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
NavbarTopBarSection.displayName = "NavbarTopBarSection";

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
        "border-b",
        variant === "transparent"
          ? "border-white/30"
          : variant === "bordered"
            ? "border-border-strong"
            : "border-border",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "py-2",
          "flex items-center justify-between gap-4 sm:gap-6",
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
>(({ className, children, ...props }, ref) => {
  const { containerClassName } = useNavbar();

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn("static z-10 hidden lg:flex items-center", className)}
      {...props}
    >
      <NavigationMenuPrimitive.List className="flex items-center gap-1">
        {children}
      </NavigationMenuPrimitive.List>
      <div className="absolute left-0 top-full w-full z-[60]">
        <div className={cn(containerClassName)}>
          <NavigationMenuPrimitive.Viewport
            className={cn(
              "relative w-full overflow-hidden",
              "bg-background",
              "border border-border border-t-0",
              "rounded-sm shadow-none",
              "h-[var(--radix-navigation-menu-viewport-height)]",
              "transition-[width,height] duration-200",
              "data-[state=open]:animate-in data-[state=open]:fade-in",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out",
            )}
          />
        </div>
      </div>
    </NavigationMenuPrimitive.Root>
  );
});
NavbarLinks.displayName = "NavbarLinks";

/* ================================================================== */
/*  LINK ITEM (simple)                                                 */
/* ================================================================== */

const navLinkStyles = [
  "inline-flex items-center gap-1 px-2.5 py-1.5",
  "text-sm font-medium tracking-wide",
  "rounded-sm transition-colors duration-150",
  "hover:bg-accent",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "data-[active]:border-b data-[active]:border-primary",
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

const megaMenuVariants = cva("p-6", {
  variants: {
    layout: {
      /** Full-width: items spread across the entire row */
      full: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3",
      /** Two columns on the left side */
      columns: "grid grid-cols-2 gap-3 max-w-lg",
      /** Featured: links on left, featured card slot on right */
      featured: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6",
      /** Simple list (single column) */
      list: "flex flex-col gap-1 max-w-xs",
    },
  },
  defaultVariants: { layout: "full" },
});

export interface NavbarMegaMenuProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof megaMenuVariants> {}

const NavbarMegaMenu = React.forwardRef<HTMLDivElement, NavbarMegaMenuProps>(
  ({ className, layout, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(megaMenuVariants({ layout }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);
NavbarMegaMenu.displayName = "NavbarMegaMenu";

/* ================================================================== */
/*  MEGA MENU LINKS COLUMN (for "featured" layout left side)           */
/* ================================================================== */

const NavbarMegaMenuLinks = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("grid grid-cols-2 gap-2", className)} {...props}>
    {children}
  </div>
));
NavbarMegaMenuLinks.displayName = "NavbarMegaMenuLinks";

/* ================================================================== */
/*  MEGA MENU FEATURED (card slot for "featured" layout right side)    */
/* ================================================================== */

const NavbarMegaMenuFeatured = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border border-border p-4", "bg-muted", className)}
    {...props}
  >
    {children}
  </div>
));
NavbarMegaMenuFeatured.displayName = "NavbarMegaMenuFeatured";

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
        "border border-transparent",
        "rounded-sm transition-colors",
        "hover:bg-muted hover:border-border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      {description && (
        <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
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
        "h-8 w-8",
        "border rounded-sm",
        "border-border-strong hover:bg-accent hover:border-input",
        "transition-colors duration-150",
        "lg:hidden",
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
          "bg-background",
          "border-l border-border",
          "shadow-none",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          className,
        )}
        {...props}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="text-xs font-bold tracking-widest uppercase text-placeholder">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "inline-flex items-center justify-center",
              "h-8 w-8",
              "border rounded-sm",
              "border-border-strong hover:bg-accent hover:border-input",
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
      "block px-2.5 py-2",
      "text-sm font-medium",
      "border border-transparent",
      "transition-colors duration-150",
      active
        ? "bg-primary-muted text-primary-muted-foreground border-primary-200 font-semibold"
        : "hover:bg-muted hover:border-border",
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
      <div className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-placeholder">
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
      "border-t border-border",
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
        <Search className="absolute left-2.5 h-3.5 w-3.5 text-placeholder" />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className={cn(
            "h-7 w-40 lg:w-52 pl-8 pr-3",
            "text-xs font-medium",
            "border rounded-sm",
            "bg-background border-border-strong text-foreground placeholder:text-placeholder",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-ring",
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
      "h-5 w-px",
      "border-l border-border",
      "mx-2",
      className,
    )}
    {...props}
  />
));
NavbarDivider.displayName = "NavbarDivider";

/* ================================================================== */
/*  POPOVER DROPDOWN (small, link-specific)                            */
/* ================================================================== */

interface NavbarPopoverDropdownProps {
  label: string;
  /** Alignment relative to the trigger */
  align?: "start" | "center" | "end";
  /** Custom width (default: auto, min 180px) */
  width?: string;
  children: React.ReactNode;
  className?: string;
}

function NavbarPopoverDropdown({
  label,
  align = "start",
  width,
  children,
  className,
}: NavbarPopoverDropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <NavigationMenuPrimitive.Item className="relative">
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            type="button"
            className={cn(navLinkStyles, "group cursor-pointer")}
          >
            {label}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align={align}
            sideOffset={8}
            className={cn(
              "z-[70] min-w-[180px]",
              "bg-background",
              "border border-border",
              "rounded-sm shadow-sm",
              "py-1",
              "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2",
              "duration-150",
              className,
            )}
            style={width ? { width } : undefined}
          >
            {children}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </NavigationMenuPrimitive.Item>
  );
}
NavbarPopoverDropdown.displayName = "NavbarPopoverDropdown";

/* ================================================================== */
/*  POPOVER DROPDOWN ITEM (simple link)                                */
/* ================================================================== */

const NavbarPopoverDropdownItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "block px-3 py-1.5",
      "text-sm font-medium text-secondary-foreground",
      "transition-colors duration-150",
      "hover:bg-muted hover:text-foreground",
      "focus-visible:outline-none focus-visible:bg-muted",
      className,
    )}
    {...props}
  >
    {children}
  </a>
));
NavbarPopoverDropdownItem.displayName = "NavbarPopoverDropdownItem";

/* ================================================================== */
/*  PANEL DROPDOWN (medium, icon+title+description)                    */
/* ================================================================== */

interface NavbarPanelDropdownProps {
  label: string;
  /** Alignment relative to the trigger */
  align?: "start" | "center" | "end";
  /** Panel width (default: 360px) */
  width?: string;
  children: React.ReactNode;
  className?: string;
}

function NavbarPanelDropdown({
  label,
  align = "start",
  width = "360px",
  children,
  className,
}: NavbarPanelDropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <NavigationMenuPrimitive.Item className="relative">
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            type="button"
            className={cn(navLinkStyles, "group cursor-pointer")}
          >
            {label}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                open && "rotate-180",
              )}
              aria-hidden
            />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align={align}
            sideOffset={8}
            className={cn(
              "z-[70]",
              "bg-background",
              "border border-border",
              "rounded-sm shadow-sm",
              "p-3",
              "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-top-2",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-out-to-top-2",
              "duration-150",
              className,
            )}
            style={{ width }}
          >
            <div className="grid gap-1">{children}</div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </NavigationMenuPrimitive.Item>
  );
}
NavbarPanelDropdown.displayName = "NavbarPanelDropdown";

/* ================================================================== */
/*  PANEL DROPDOWN ITEM (icon + title + description)                   */
/* ================================================================== */

interface NavbarPanelDropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const NavbarPanelDropdownItem = React.forwardRef<
  HTMLAnchorElement,
  NavbarPanelDropdownItemProps
>(({ className, title, description, icon, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "flex items-start gap-3 p-2.5",
      "rounded-sm transition-colors duration-150",
      "hover:bg-muted",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className,
    )}
    {...props}
  >
    {icon && (
      <span className="flex items-center justify-center h-8 w-8 rounded-sm bg-accent text-muted-foreground shrink-0 mt-0.5">
        {icon}
      </span>
    )}
    <div className="min-w-0">
      <div className="text-sm font-medium leading-none text-foreground">
        {title}
      </div>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground leading-snug">
          {description}
        </p>
      )}
      {children}
    </div>
  </a>
));
NavbarPanelDropdownItem.displayName = "NavbarPanelDropdownItem";

/* ================================================================== */
/*  MOBILE DROPDOWN (accordion-style nested nav)                       */
/* ================================================================== */

interface NavbarMobileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  defaultOpen?: boolean;
}

const NavbarMobileDropdown = React.forwardRef<
  HTMLDivElement,
  NavbarMobileDropdownProps
>(({ className, label, defaultOpen = false, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-between w-full",
          "px-2.5 py-2",
          "text-sm font-medium",
          "border border-transparent",
          "transition-colors duration-150",
          "hover:bg-muted hover:border-border",
          "cursor-pointer",
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-placeholder transition-transform duration-200",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div className="pl-3 pb-1 flex flex-col gap-0.5">{children}</div>
      </div>
    </div>
  );
});
NavbarMobileDropdown.displayName = "NavbarMobileDropdown";

/* ================================================================== */
/*  MOBILE DRILL-DOWN CONTEXT                                          */
/* ================================================================== */

interface DrillDownContextValue {
  activePanel: string | null;
  pushPanel: (id: string) => void;
  popPanel: () => void;
}

const DrillDownContext = React.createContext<DrillDownContextValue>({
  activePanel: null,
  pushPanel: () => {},
  popPanel: () => {},
});

/* ================================================================== */
/*  MOBILE DRILL-DOWN MENU (wraps mobile menu content with stack)      */
/* ================================================================== */

interface NavbarMobileDrillMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarMobileDrillMenu = React.forwardRef<
  HTMLDivElement,
  NavbarMobileDrillMenuProps
>(({ className, children, ...props }, ref) => {
  const [panelStack, setPanelStack] = React.useState<string[]>([]);

  const activePanel =
    panelStack.length > 0 ? panelStack[panelStack.length - 1] : null;

  const pushPanel = React.useCallback((id: string) => {
    setPanelStack((prev) => [...prev, id]);
  }, []);

  const popPanel = React.useCallback(() => {
    setPanelStack((prev) => prev.slice(0, -1));
  }, []);

  return (
    <DrillDownContext.Provider value={{ activePanel, pushPanel, popPanel }}>
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {/* Main panel */}
        <div
          className={cn(
            "transition-transform duration-300 ease-in-out",
            activePanel ? "-translate-x-full" : "translate-x-0",
          )}
        >
          {children}
        </div>
      </div>
    </DrillDownContext.Provider>
  );
});
NavbarMobileDrillMenu.displayName = "NavbarMobileDrillMenu";

/* ================================================================== */
/*  MOBILE DRILL-DOWN TRIGGER                                          */
/* ================================================================== */

interface NavbarMobileDrillTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Unique panel ID this trigger opens */
  panelId: string;
}

const NavbarMobileDrillTrigger = React.forwardRef<
  HTMLButtonElement,
  NavbarMobileDrillTriggerProps
>(({ className, panelId, children, ...props }, ref) => {
  const { pushPanel } = React.useContext(DrillDownContext);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => pushPanel(panelId)}
      className={cn(
        "flex items-center justify-between w-full",
        "px-2.5 py-2",
        "text-sm font-medium",
        "border border-transparent",
        "transition-colors duration-150",
        "hover:bg-muted hover:border-border",
        "cursor-pointer",
      )}
      {...props}
    >
      {children}
      <ChevronRight className="h-4 w-4 text-placeholder" aria-hidden />
    </button>
  );
});
NavbarMobileDrillTrigger.displayName = "NavbarMobileDrillTrigger";

/* ================================================================== */
/*  MOBILE DRILL-DOWN PANEL (sub-page that slides in)                  */
/* ================================================================== */

interface NavbarMobileDrillPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Unique ID matching the trigger's panelId */
  panelId: string;
  /** Back button label */
  backLabel?: string;
}

const NavbarMobileDrillPanel = React.forwardRef<
  HTMLDivElement,
  NavbarMobileDrillPanelProps
>(({ className, panelId, backLabel = "Back", children, ...props }, ref) => {
  const { activePanel, popPanel } = React.useContext(DrillDownContext);
  const isActive = activePanel === panelId;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 h-full",
        "bg-white",
        "transition-transform duration-300 ease-in-out",
        isActive ? "translate-x-0" : "translate-x-full",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        onClick={popPanel}
        className={cn(
          "flex items-center gap-1 w-full",
          "px-2.5 py-2 mb-1",
          "text-sm font-medium text-muted-foreground",
          "border-b border-accent",
          "transition-colors duration-150",
          "hover:bg-muted hover:text-secondary-foreground",
          "cursor-pointer",
        )}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
        {backLabel}
      </button>
      <div className="flex flex-col gap-0.5 px-1">{children}</div>
    </div>
  );
});
NavbarMobileDrillPanel.displayName = "NavbarMobileDrillPanel";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Navbar,
  NavbarTopBar,
  NavbarTopBarSection,
  NavbarMain,
  NavbarBrand,
  NavbarLinks,
  NavbarLink,
  NavbarDropdown,
  NavbarDropdownTrigger,
  NavbarMegaMenu,
  NavbarMegaMenuLinks,
  NavbarMegaMenuFeatured,
  NavbarMegaMenuItem,
  NavbarPopoverDropdown,
  NavbarPopoverDropdownItem,
  NavbarPanelDropdown,
  NavbarPanelDropdownItem,
  NavbarActions,
  NavbarMobileToggle,
  NavbarMobileMenu,
  NavbarMobileLink,
  NavbarMobileGroup,
  NavbarMobileActions,
  NavbarMobileDropdown,
  NavbarMobileDrillMenu,
  NavbarMobileDrillTrigger,
  NavbarMobileDrillPanel,
  NavbarSearch,
  NavbarDivider,
  navbarVariants,
  megaMenuVariants,
  topBarVariants,
  useNavbar,
};
