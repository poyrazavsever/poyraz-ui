"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  X,
} from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  CONTEXT                                                            */
/* ================================================================== */

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant:
    | "default"
    | "collapsible"
    | "floating"
    | "mini"
    | "dark"
    | "bordered"
    | "inset";
}

const SidebarContext = React.createContext<SidebarContextValue>({
  collapsed: false,
  setCollapsed: () => {},
  mobileOpen: false,
  setMobileOpen: () => {},
  variant: "default",
});

const useSidebar = () => React.useContext(SidebarContext);

/* ================================================================== */
/*  HELPER: check dark variant                                         */
/* ================================================================== */

function isDarkVariant(v: SidebarContextValue["variant"]) {
  return v === "dark";
}

/* ================================================================== */
/*  SIDEBAR ROOT                                                       */
/* ================================================================== */

const sidebarVariants = cva(
  ["flex flex-col", "transition-all duration-300 ease-out", "h-full"].join(" "),
  {
    variants: {
      variant: {
        default: "w-56 bg-white text-slate-950 border-r border-slate-200",
        collapsible: "bg-white text-slate-950 border-r border-slate-200",
        floating:
          "fixed inset-y-0 left-0 z-50 w-64 bg-white text-slate-950 border-r border-slate-200",
        mini: "w-16 bg-white text-slate-950 border-r border-slate-200",
        dark: "w-56 bg-slate-950 text-slate-100 border-r border-slate-800",
        bordered: "w-56 bg-white text-slate-950 border border-slate-300",
        inset:
          "w-56 bg-slate-50/80 text-slate-950 border border-slate-200 rounded-lg shadow-sm",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface SidebarProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sidebarVariants> {
  /** Start in collapsed state (for collapsible variant) */
  defaultCollapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      variant = "default",
      defaultCollapsed = false,
      children,
      ...props
    },
    ref,
  ) => {
    const [collapsed, setCollapsed] = React.useState(
      variant === "mini" ? true : defaultCollapsed,
    );
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const resolvedVariant = variant ?? "default";

    // Compute width for collapsible variant
    const collapsibleWidth =
      resolvedVariant === "collapsible" ? (collapsed ? "w-16" : "w-56") : "";

    // Floating variant: hidden when mobile is not open
    if (resolvedVariant === "floating" && !mobileOpen) {
      return (
        <SidebarContext.Provider
          value={{
            collapsed,
            setCollapsed,
            mobileOpen,
            setMobileOpen,
            variant: resolvedVariant,
          }}
        >
          {/* Render nothing but keep context for trigger */}
          <aside ref={ref} className="hidden" {...props}>
            {children}
          </aside>
        </SidebarContext.Provider>
      );
    }

    return (
      <SidebarContext.Provider
        value={{
          collapsed,
          setCollapsed,
          mobileOpen,
          setMobileOpen,
          variant: resolvedVariant,
        }}
      >
        {/* Floating backdrop */}
        {resolvedVariant === "floating" && mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <aside
          ref={ref}
          className={cn(
            sidebarVariants({ variant: resolvedVariant }),
            collapsibleWidth,
            resolvedVariant === "floating" && "shadow-none",
            className,
          )}
          {...props}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    );
  },
);
Sidebar.displayName = "Sidebar";

/* ================================================================== */
/*  SIDEBAR HEADER                                                     */
/* ================================================================== */

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 shrink-0",
        "px-4 py-4",
        "border-b",
        dark ? "border-slate-800" : "border-slate-200",
        collapsed &&
          variant !== "default" &&
          variant !== "dark" &&
          variant !== "bordered" &&
          "justify-center px-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarHeader.displayName = "SidebarHeader";

/* ================================================================== */
/*  SIDEBAR BRANDING                                                   */
/* ================================================================== */

export interface SidebarBrandingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Logo / icon element */
  logo?: React.ReactNode;
  /** Application title */
  title: string;
  /** Subtitle / tagline */
  subtitle?: string;
}

const SidebarBranding = React.forwardRef<HTMLDivElement, SidebarBrandingProps>(
  ({ className, logo, title, subtitle, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3",
          collapsed && "justify-center",
          className,
        )}
        {...props}
      >
        {logo && (
          <span
            className={cn(
              "shrink-0 w-8 h-8 flex items-center justify-center",
              "border rounded-sm",
              dark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50",
            )}
          >
            {logo}
          </span>
        )}
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <div
              className={cn(
                "text-sm font-bold truncate",
                dark ? "text-white" : "text-slate-900",
              )}
            >
              {title}
            </div>
            {subtitle && (
              <div
                className={cn(
                  "text-[10px] truncate",
                  dark ? "text-slate-500" : "text-slate-400",
                )}
              >
                {subtitle}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);
SidebarBranding.displayName = "SidebarBranding";

/* ================================================================== */
/*  SIDEBAR CONTENT                                                    */
/* ================================================================== */

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex-1 overflow-y-auto overflow-x-hidden",
      "px-3 py-4",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
SidebarContent.displayName = "SidebarContent";

/* ================================================================== */
/*  SIDEBAR GROUP                                                      */
/* ================================================================== */

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props}>
    {children}
  </div>
));
SidebarGroup.displayName = "SidebarGroup";

/* ================================================================== */
/*  SIDEBAR GROUP LABEL                                                */
/* ================================================================== */

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);

  if (collapsed) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "px-3 mb-2",
        "text-[10px] font-bold uppercase tracking-[0.15em]",
        dark ? "text-slate-500" : "text-slate-400",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

/* ================================================================== */
/*  SIDEBAR SECTION (collapsible group with title)                     */
/* ================================================================== */

export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title: string;
  /** Whether the section can be collapsed */
  collapsible?: boolean;
  /** Start open (when collapsible) */
  defaultOpen?: boolean;
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  (
    {
      className,
      title,
      collapsible = true,
      defaultOpen = true,
      children,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className={cn(
              "w-full flex items-center justify-between",
              "px-3 mb-2",
              "text-[10px] font-bold uppercase tracking-[0.15em]",
              dark
                ? "text-slate-500 hover:text-slate-400"
                : "text-slate-400 hover:text-slate-600",
              "cursor-pointer transition-colors duration-150",
            )}
          >
            {title}
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>
        ) : (
          <div
            className={cn(
              "px-3 mb-2",
              "text-[10px] font-bold uppercase tracking-[0.15em]",
              dark ? "text-slate-500" : "text-slate-400",
            )}
          >
            {title}
          </div>
        )}
        {open && children}
      </div>
    );
  },
);
SidebarSection.displayName = "SidebarSection";

/* ================================================================== */
/*  SIDEBAR MENU                                                       */
/* ================================================================== */

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul ref={ref} className={cn("flex flex-col gap-0.5", className)} {...props}>
    {children}
  </ul>
));
SidebarMenu.displayName = "SidebarMenu";

/* ================================================================== */
/*  SIDEBAR MENU ITEM                                                  */
/* ================================================================== */

export interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Whether this item is the active/current page */
  active?: boolean;
  /** Icon component */
  icon?: React.ReactNode;
  /** Badge content (e.g. notification count) */
  badge?: React.ReactNode;
  /** Action element shown on hover (e.g. SidebarMenuAction) */
  action?: React.ReactNode;
  /** Link href */
  href?: string;
}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, active, icon, badge, action, href, children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    const content = (
      <li
        ref={ref}
        className={cn(
          "group relative flex items-center gap-3",
          "px-2.5 py-2",
          "text-sm font-medium",
          "rounded-sm transition-colors duration-150",
          "cursor-pointer",
          // Active state
          active
            ? [
                dark
                  ? "bg-red-950 text-red-400 font-semibold"
                  : "bg-red-50 text-red-700 font-semibold",
                "border-l-[3px] border-solid border-red-600",
                "pl-[calc(0.75rem-3px)]",
              ].join(" ")
            : [
                dark
                  ? "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                "border-l-[3px] border-solid border-transparent",
                "pl-[calc(0.75rem-3px)]",
              ].join(" "),
          collapsed && "justify-center px-0 pl-0 border-l-0",
          className,
        )}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <span
            className={cn(
              "shrink-0 w-5 h-5 flex items-center justify-center",
              active
                ? "text-red-600"
                : dark
                  ? "text-slate-500 group-hover:text-slate-300"
                  : "text-slate-400 group-hover:text-slate-600",
            )}
          >
            {icon}
          </span>
        )}

        {/* Label */}
        {!collapsed && <span className="flex-1 truncate">{children}</span>}

        {/* Badge */}
        {!collapsed && badge && (
          <span
            className={cn(
              "inline-flex items-center justify-center",
              "min-w-[20px] h-5 px-1.5",
              "text-[10px] font-bold",
              "border rounded-sm",
              active
                ? "bg-red-600 text-white border-red-800"
                : dark
                  ? "bg-slate-800 text-slate-300 border-slate-600"
                  : "bg-slate-100 text-slate-600 border-slate-300",
            )}
          >
            {badge}
          </span>
        )}

        {/* Action */}
        {!collapsed && action}

        {/* Collapsed tooltip hint */}
        {collapsed && (
          <span
            className={cn(
              "absolute left-full ml-2 z-50",
              "px-2 py-1",
              "text-xs font-medium whitespace-nowrap",
              "bg-slate-900 text-white",
              "border border-slate-700",
              "opacity-0 pointer-events-none",
              "group-hover:opacity-100",
              "transition-opacity duration-150",
            )}
          >
            {children}
          </span>
        )}
      </li>
    );

    if (href) {
      return (
        <a href={href} className="no-underline">
          {content}
        </a>
      );
    }

    return content;
  },
);
SidebarMenuItem.displayName = "SidebarMenuItem";

/* ================================================================== */
/*  SIDEBAR MENU ACTION                                                */
/* ================================================================== */

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "ml-auto shrink-0",
        "inline-flex items-center justify-center",
        "h-6 w-6",
        "rounded-sm",
        "opacity-0 group-hover:opacity-100",
        "transition-all duration-150",
        "cursor-pointer",
        dark
          ? "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
          : "text-slate-400 hover:text-slate-600 hover:bg-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

/* ================================================================== */
/*  SIDEBAR SEPARATOR                                                  */
/* ================================================================== */

const SidebarSeparator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => {
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);

  return (
    <hr
      ref={ref}
      className={cn(
        "border-t",
        dark ? "border-slate-800" : "border-slate-200",
        "my-3 mx-3",
        className,
      )}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

/* ================================================================== */
/*  SIDEBAR BADGE                                                      */
/* ================================================================== */

export interface SidebarBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge style variant */
  variant?: "default" | "dot" | "outline";
}

const SidebarBadge = React.forwardRef<HTMLSpanElement, SidebarBadgeProps>(
  (
    { className, variant: badgeVariant = "default", children, ...props },
    ref,
  ) => {
    const { variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (badgeVariant === "dot") {
      return (
        <span
          ref={ref}
          className={cn(
            "inline-block w-2 h-2 rounded-full shrink-0",
            dark ? "bg-red-500" : "bg-red-600",
            className,
          )}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "min-w-[20px] h-5 px-1.5",
          "text-[10px] font-bold",
          "rounded-sm",
          badgeVariant === "outline"
            ? [
                "border",
                dark
                  ? "border-slate-600 text-slate-300"
                  : "border-slate-300 text-slate-600",
              ]
            : [
                dark
                  ? "bg-red-950 text-red-400 border border-red-800"
                  : "bg-red-50 text-red-700 border border-red-200",
              ],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);
SidebarBadge.displayName = "SidebarBadge";

/* ================================================================== */
/*  SIDEBAR FOOTER                                                     */
/* ================================================================== */

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);

  return (
    <div
      ref={ref}
      className={cn(
        "shrink-0",
        "px-4 py-3",
        "border-t",
        dark ? "border-slate-800" : "border-slate-200",
        collapsed && "px-2 flex justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
SidebarFooter.displayName = "SidebarFooter";

/* ================================================================== */
/*  SIDEBAR TRIGGER                                                    */
/* ================================================================== */

export interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Which action: toggle collapse or toggle mobile */
  action?: "collapse" | "mobile";
}

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, action = "collapse", ...props }, ref) => {
    const { collapsed, setCollapsed, mobileOpen, setMobileOpen, variant } =
      useSidebar();
    const dark = isDarkVariant(variant);

    const handleClick = () => {
      if (action === "mobile" || variant === "floating") {
        setMobileOpen((prev) => !prev);
      } else {
        setCollapsed((prev) => !prev);
      }
    };

    const isOpen = action === "mobile" ? mobileOpen : !collapsed;

    return (
      <button
        ref={ref}
        type="button"
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center",
          "h-8 w-8",
          "border rounded-sm",
          dark
            ? "border-slate-600 hover:bg-slate-800 hover:border-slate-400 text-slate-300"
            : "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
          "transition-colors duration-150",
          "cursor-pointer",
          className,
        )}
        {...props}
      >
        {isOpen ? (
          variant === "floating" || action === "mobile" ? (
            <X className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )
        ) : (
          <PanelLeftOpen className="h-4 w-4" />
        )}
      </button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

/* ================================================================== */
/*  SIDEBAR SEARCH                                                     */
/* ================================================================== */

interface SidebarSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SidebarSearch = React.forwardRef<HTMLInputElement, SidebarSearchProps>(
  ({ className, placeholder = "Search…", onSearch, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };

    return (
      <div className="px-3 mb-3">
        <div className="relative flex items-center">
          <Search
            className={cn(
              "absolute left-2.5 h-3.5 w-3.5",
              dark ? "text-slate-500" : "text-slate-400",
            )}
          />
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full h-7 pl-8 pr-3",
              "text-xs font-medium",
              "border rounded-sm",
              "transition-colors duration-150",
              "focus:outline-none focus:ring-2 focus:ring-red-600",
              dark
                ? "bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-500"
                : "bg-white border-slate-300 text-slate-950 placeholder:text-slate-400",
              className,
            )}
            {...props}
          />
        </div>
      </div>
    );
  },
);
SidebarSearch.displayName = "SidebarSearch";

/* ================================================================== */
/*  SIDEBAR SUB MENU (nested expandable)                               */
/* ================================================================== */

interface SidebarSubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label shown as the trigger */
  label: string;
  /** Icon component */
  icon?: React.ReactNode;
  /** Start open */
  defaultOpen?: boolean;
}

const SidebarSubMenu = React.forwardRef<HTMLDivElement, SidebarSubMenuProps>(
  (
    { className, label, icon, defaultOpen = false, children, ...props },
    ref,
  ) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className={cn(
            "w-full flex items-center gap-3",
            "px-2.5 py-2",
            "text-sm font-medium",
            "rounded-sm transition-colors duration-150",
            "cursor-pointer",
            dark
              ? "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
              : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]",
          )}
        >
          {icon && (
            <span
              className={cn(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                dark ? "text-slate-500" : "text-slate-400",
              )}
            >
              {icon}
            </span>
          )}
          <span className="flex-1 truncate text-left">{label}</span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              open && "rotate-180",
              dark ? "text-slate-500" : "text-slate-400",
            )}
          />
        </button>
        {open && (
          <div
            className={cn(
              "ml-5 pl-3",
              "border-l",
              dark ? "border-slate-800" : "border-slate-200",
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  },
);
SidebarSubMenu.displayName = "SidebarSubMenu";

/* ================================================================== */
/*  SIDEBAR SUB MENU ITEM                                              */
/* ================================================================== */

interface SidebarSubMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  href?: string;
}

const SidebarSubMenuItem = React.forwardRef<
  HTMLDivElement,
  SidebarSubMenuItemProps
>(({ className, active, href, children, ...props }, ref) => {
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);

  const inner = (
    <div
      ref={ref}
      className={cn(
        "px-3 py-2",
        "text-sm",
        "rounded-sm transition-colors duration-150",
        "cursor-pointer",
        active
          ? dark
            ? "text-red-400 font-semibold"
            : "text-red-700 font-semibold"
          : dark
            ? "text-slate-400 hover:text-slate-200"
            : "text-slate-500 hover:text-slate-950",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline">
        {inner}
      </a>
    );
  }
  return inner;
});
SidebarSubMenuItem.displayName = "SidebarSubMenuItem";

/* ================================================================== */
/*  SIDEBAR USER PROFILE                                               */
/* ================================================================== */

interface SidebarUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  /** User display name */
  name: string;
  /** User role / subtitle */
  role?: string;
  /** Avatar URL */
  avatarUrl?: string;
  /** Fallback initials when no avatar URL */
  initials?: string;
}

const SidebarUserProfile = React.forwardRef<
  HTMLDivElement,
  SidebarUserProfileProps
>(({ className, name, role, avatarUrl, initials, children, ...props }, ref) => {
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3",
        collapsed && "justify-center",
        className,
      )}
      {...props}
    >
      {/* Avatar */}
      <div
        className={cn(
          "shrink-0 w-8 h-8 flex items-center justify-center",
          "border rounded-sm overflow-hidden",
          "text-xs font-bold",
          dark
            ? "border-slate-600 bg-slate-800 text-slate-200"
            : "border-slate-300 bg-slate-100 text-slate-600",
        )}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          (initials ?? name.charAt(0).toUpperCase())
        )}
      </div>

      {/* Text */}
      {!collapsed && (
        <div className="flex-1 min-w-0">
          <div
            className={cn(
              "text-sm font-semibold truncate",
              dark ? "text-slate-100" : "text-slate-900",
            )}
          >
            {name}
          </div>
          {role && (
            <div
              className={cn(
                "text-xs truncate",
                dark ? "text-slate-500" : "text-slate-400",
              )}
            >
              {role}
            </div>
          )}
        </div>
      )}

      {children}
    </div>
  );
});
SidebarUserProfile.displayName = "SidebarUserProfile";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Sidebar,
  SidebarHeader,
  SidebarBranding,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSection,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarSeparator,
  SidebarBadge,
  SidebarFooter,
  SidebarTrigger,
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
  useSidebar,
  sidebarVariants,
};
