"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, PanelLeftClose, PanelLeftOpen, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  SidebarProvider,
  useSidebar,
  type SidebarContextValue,
} from "@/components/ui/organisms/sidebar-provider";

/* ================================================================== */
/*  CONTEXT                                                            */
/* ================================================================== */

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
  [
    "flex flex-col font-sans",
    "transition-[width,transform,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)]",
    "h-full",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "w-56 bg-background text-foreground border-r border-border",
        collapsible: "bg-background text-foreground border-r border-border",
        floating:
          "fixed inset-y-0 left-0 z-50 w-64 bg-glass text-foreground border-r border-glass-border-outer backdrop-blur-glass shadow-[var(--poyraz-glass-shadow)]",
        mini: "w-16 bg-background text-foreground border-r border-border",
        dark: "w-56 bg-inverted text-inverted-foreground border-r border-border-strong",
        bordered: "w-56 bg-background text-foreground border border-border-strong",
        inset: "w-56 bg-muted/80 text-foreground border border-border rounded-lg shadow-sm",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface SidebarProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
  /** Start in collapsed state (for collapsible variant) */
  defaultCollapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, variant = "default", defaultCollapsed = false, children, ...props }, ref) => (
    <SidebarProvider variant={variant ?? "default"} defaultCollapsed={defaultCollapsed}>
      <SidebarPanel ref={ref} className={className} {...props}>
        {children}
      </SidebarPanel>
    </SidebarProvider>
  ),
);
Sidebar.displayName = "Sidebar";

const SidebarPanel = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
    const collapsibleWidth = variant === "collapsible" ? (collapsed ? "w-16" : "w-56") : "";

    if (variant === "floating" && !mobileOpen)
      return (
        <aside ref={ref} data-slot="sidebar" className="hidden" {...props}>
          {children}
        </aside>
      );

    return (
      <>
        {variant === "floating" && mobileOpen && (
          <div
            data-slot="sidebar-overlay"
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-[1px] animate-poyraz-fade-in motion-reduce:animate-none"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <aside
          ref={ref}
          data-slot="sidebar"
          data-variant={variant}
          data-collapsed={collapsed ? "" : undefined}
          data-mobile-open={mobileOpen ? "" : undefined}
          className={cn(
            "@container/sidebar min-w-0 motion-reduce:transition-none",
            sidebarVariants({ variant }),
            collapsibleWidth,
            variant === "floating" &&
              "shadow-[var(--poyraz-glass-shadow)] animate-poyraz-slide-in-from-left will-change-transform motion-reduce:animate-none",
            className,
          )}
          {...props}
        >
          {children}
        </aside>
      </>
    );
  },
);
SidebarPanel.displayName = "SidebarPanel";

/* ================================================================== */
/*  SIDEBAR HEADER                                                     */
/* ================================================================== */

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    return (
      <div
        ref={ref}
        data-slot="sidebar-header"
        className={cn(
          "flex items-center gap-3 shrink-0",
          "px-4 py-4",
          "border-b",
          dark ? "border-border-strong" : "border-border",
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
  },
);
SidebarHeader.displayName = "SidebarHeader";

/* ================================================================== */
/*  SIDEBAR BRANDING                                                   */
/* ================================================================== */

export interface SidebarBrandingProps extends React.HTMLAttributes<HTMLDivElement> {
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
        data-slot="sidebar-branding"
        className={cn("flex items-center gap-3", collapsed && "justify-center", className)}
        {...props}
      >
        {logo && (
          <span
            className={cn(
              "shrink-0 w-8 h-8 flex items-center justify-center",
              "border rounded-sm",
              dark ? "border-border-strong bg-surface-raised" : "border-border bg-muted",
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
                dark ? "text-inverted-foreground" : "text-foreground",
              )}
            >
              {title}
            </div>
            {subtitle && (
              <div
                className={cn(
                  "text-[10px] truncate",
                  dark ? "text-muted-foreground" : "text-placeholder",
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
  React.HTMLAttributes<HTMLDivElement> & {
    scrollMode?: "auto" | "hidden" | "fade";
  }
>(({ className, children, scrollMode = "auto", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="sidebar-content"
    data-scroll-mode={scrollMode}
    className={cn(
      "min-h-0 flex-1 overflow-x-hidden px-3",
      scrollMode === "auto" && "overflow-y-auto py-4 [scrollbar-gutter:stable]",
      scrollMode === "hidden" &&
        "overflow-y-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
      scrollMode === "fade" &&
        "overflow-y-auto py-7 [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)] [&::-webkit-scrollbar]:hidden",
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

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} data-slot="sidebar-group" className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  ),
);
SidebarGroup.displayName = "SidebarGroup";

/* ================================================================== */
/*  SIDEBAR GROUP LABEL                                                */
/* ================================================================== */

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    return (
      <div
        ref={ref}
        data-slot="sidebar-group-label"
        className={cn(
          "px-3 mb-2",
          "text-[10px] font-bold uppercase tracking-[0.15em]",
          dark ? "text-muted-foreground" : "text-placeholder",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

/* ================================================================== */
/*  SIDEBAR SECTION (collapsible group with title)                     */
/* ================================================================== */

export interface SidebarSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title: string;
  /** Whether the section can be collapsed */
  collapsible?: boolean;
  /** Start open (when collapsible) */
  defaultOpen?: boolean;
}

const SidebarSection = React.forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ className, title, collapsible = true, defaultOpen = true, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    return (
      <div
        ref={ref}
        data-slot="sidebar-section"
        data-state={open ? "open" : "closed"}
        className={cn("mb-4", className)}
        {...props}
      >
        {collapsible ? (
          <button
            type="button"
            onClick={() => setOpen((p) => !p)}
            className={cn(
              "w-full flex items-center justify-between",
              "px-3 mb-2",
              "text-[10px] font-bold uppercase tracking-[0.15em]",
              dark
                ? "text-muted-foreground hover:text-foreground"
                : "text-placeholder hover:text-muted-foreground",
              "cursor-pointer transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
            )}
          >
            {title}
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                open && "rotate-180",
              )}
            />
          </button>
        ) : (
          <div
            className={cn(
              "px-3 mb-2",
              "text-[10px] font-bold uppercase tracking-[0.15em]",
              dark ? "text-muted-foreground" : "text-placeholder",
            )}
          >
            {title}
          </div>
        )}
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden">{children}</div>
        </div>
      </div>
    );
  },
);
SidebarSection.displayName = "SidebarSection";

/* ================================================================== */
/*  SIDEBAR MENU                                                       */
/* ================================================================== */

const SidebarMenu = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, children, ...props }, ref) => (
    <ul
      ref={ref}
      data-slot="sidebar-menu"
      className={cn("flex flex-col gap-0.5", className)}
      {...props}
    >
      {children}
    </ul>
  ),
);
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
        data-slot="sidebar-menu-item"
        data-active={active ? "" : undefined}
        tabIndex={href ? undefined : 0}
        className={cn(
          "group relative flex items-center gap-3",
          "px-2.5 py-2",
          "text-sm font-medium",
          "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
          "cursor-pointer",
          // Active state
          active
            ? [
                dark
                  ? "bg-primary-muted text-primary-muted-foreground font-semibold"
                  : "bg-primary-muted text-primary-muted-foreground font-semibold",
                "border-l-[3px] border-solid border-primary",
                "pl-[calc(0.75rem-3px)]",
              ].join(" ")
            : [
                dark
                  ? "text-muted-foreground hover:bg-surface-raised hover:text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
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
            role="tooltip"
            data-slot="sidebar-menu-tooltip"
            className={cn(
              "shrink-0 w-5 h-5 flex items-center justify-center",
              active
                ? "text-primary"
                : dark
                  ? "text-muted-foreground group-hover:text-foreground"
                  : "text-placeholder group-hover:text-muted-foreground",
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
            data-slot="sidebar-menu-badge"
            className="ml-auto inline-flex shrink-0 items-center justify-center"
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
              "bg-inverted text-inverted-foreground",
              "border border-border-strong",
              "opacity-0 pointer-events-none",
              "group-hover:opacity-100 group-focus-within:opacity-100",
              "transition-[opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
            )}
          >
            {children}
          </span>
        )}
      </li>
    );

    if (href) {
      return (
        <a href={href} aria-current={active ? "page" : undefined} className="no-underline">
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
      data-slot="sidebar-menu-action"
      className={cn(
        "ml-auto shrink-0",
        "inline-flex items-center justify-center",
        "h-6 w-6",
        "rounded-sm",
        "opacity-0 group-hover:opacity-100",
        "transition-[color,background-color,opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "cursor-pointer",
        dark
          ? "text-muted-foreground hover:text-foreground hover:bg-surface-raised"
          : "text-placeholder hover:text-muted-foreground hover:bg-accent",
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

const SidebarSeparator = React.forwardRef<HTMLHRElement, React.HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => {
    const { variant } = useSidebar();
    const dark = isDarkVariant(variant);

    return (
      <hr
        ref={ref}
        data-slot="sidebar-separator"
        className={cn(
          "border-t",
          dark ? "border-border-strong" : "border-border",
          "my-3 mx-3",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

/* ================================================================== */
/*  SIDEBAR BADGE                                                      */
/* ================================================================== */

export interface SidebarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Badge style variant */
  variant?: "default" | "dot" | "outline";
}

const SidebarBadge = React.forwardRef<HTMLSpanElement, SidebarBadgeProps>(
  ({ className, variant: badgeVariant = "default", children, ...props }, ref) => {
    if (badgeVariant === "dot") {
      return (
        <span
          ref={ref}
          data-slot="sidebar-badge"
          className={cn("inline-block size-1.5 shrink-0 rounded-full", "bg-primary", className)}
          {...props}
        />
      );
    }

    return (
      <span
        ref={ref}
        data-slot="sidebar-badge"
        className={cn(
          "inline-flex items-center justify-center",
          "h-5 min-w-5 px-1.5",
          "text-[10px] font-semibold leading-none",
          "rounded-full",
          badgeVariant === "outline"
            ? "border border-border-strong bg-transparent text-muted-foreground"
            : "border border-transparent bg-primary-muted text-primary-muted-foreground",
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

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    return (
      <div
        ref={ref}
        data-slot="sidebar-footer"
        className={cn(
          "shrink-0",
          "px-4 py-3",
          "border-t",
          dark ? "border-border-strong" : "border-border",
          collapsed && "px-2 flex justify-center",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
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
    const { collapsed, setCollapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
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
        data-slot="sidebar-trigger"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center",
          "h-8 w-8",
          "border rounded-sm",
          dark
            ? "border-border-strong hover:bg-surface-raised hover:border-input text-muted-foreground"
            : "border-border-strong hover:bg-accent hover:border-input",
          "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-95",
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

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { collapsed, setCollapsed } = useSidebar();
  return (
    <button
      ref={ref}
      type="button"
      data-slot="sidebar-rail"
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      aria-expanded={!collapsed}
      onClick={() => setCollapsed((value) => !value)}
      className={cn(
        "absolute inset-y-0 right-0 z-20 hidden w-1 translate-x-1/2 cursor-col-resize transition-colors hover:bg-primary/40 focus-visible:bg-primary/40 focus-visible:outline-none @lg/sidebar:block",
        className,
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

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
      <div data-slot="sidebar-search" className="px-3 mb-3">
        <div className="relative flex items-center">
          <Search
            className={cn(
              "absolute left-2.5 h-3.5 w-3.5",
              dark ? "text-muted-foreground" : "text-placeholder",
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
              "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "focus:outline-none focus:ring-2 focus:ring-ring",
              dark
                ? "bg-surface-raised border-border-strong text-foreground placeholder:text-muted-foreground"
                : "bg-background border-border-strong text-foreground placeholder:text-placeholder",
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
  ({ className, label, icon, defaultOpen = false, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    if (collapsed) return null;

    return (
      <div
        ref={ref}
        data-slot="sidebar-submenu"
        data-state={open ? "open" : "closed"}
        className={cn("", className)}
        {...props}
      >
        <button
          type="button"
          data-slot="sidebar-submenu-trigger"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className={cn(
            "w-full flex items-center gap-3",
            "px-2.5 py-2",
            "text-sm font-medium",
            "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
            "cursor-pointer",
            dark
              ? "text-muted-foreground hover:bg-surface-raised hover:text-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]",
          )}
        >
          {icon && (
            <span
              className={cn(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                dark ? "text-muted-foreground" : "text-placeholder",
              )}
            >
              {icon}
            </span>
          )}
          <span className="flex-1 truncate text-left">{label}</span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
              open && "rotate-180",
              dark ? "text-muted-foreground" : "text-placeholder",
            )}
          />
        </button>
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div
            className={cn(
              "min-h-0 overflow-hidden ml-5 pl-3",
              "border-l",
              dark ? "border-border-strong" : "border-border",
            )}
          >
            {children}
          </div>
        </div>
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

const SidebarSubMenuItem = React.forwardRef<HTMLDivElement, SidebarSubMenuItemProps>(
  ({ className, active, href, children, ...props }, ref) => {
    const { variant } = useSidebar();
    const dark = isDarkVariant(variant);

    const inner = (
      <div
        ref={ref}
        data-slot="sidebar-submenu-item"
        className={cn(
          "px-3 py-2",
          "text-sm",
          "rounded-sm transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
          "cursor-pointer",
          active
            ? dark
              ? "text-primary-muted-foreground font-semibold"
              : "text-primary-muted-foreground font-semibold"
            : dark
              ? "text-muted-foreground hover:text-foreground"
              : "text-muted-foreground hover:text-foreground",
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
  },
);
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

const SidebarUserProfile = React.forwardRef<HTMLDivElement, SidebarUserProfileProps>(
  ({ className, name, role, avatarUrl, initials, children, ...props }, ref) => {
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);

    return (
      <div
        ref={ref}
        data-slot="sidebar-user-profile"
        className={cn("flex items-center gap-3", collapsed && "justify-center", className)}
        {...props}
      >
        {/* Avatar */}
        <div
          className={cn(
            "shrink-0 w-8 h-8 flex items-center justify-center",
            "border rounded-sm overflow-hidden",
            "text-xs font-bold",
            dark
              ? "border-border-strong bg-surface-raised text-foreground"
              : "border-border-strong bg-accent text-muted-foreground",
          )}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
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
                dark ? "text-inverted-foreground" : "text-foreground",
              )}
            >
              {name}
            </div>
            {role && (
              <div
                className={cn(
                  "text-xs truncate",
                  dark ? "text-muted-foreground" : "text-placeholder",
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
  },
);
SidebarUserProfile.displayName = "SidebarUserProfile";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Sidebar,
  SidebarProvider,
  SidebarPanel,
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
  SidebarRail,
  SidebarSearch,
  SidebarSubMenu,
  SidebarSubMenuItem,
  SidebarUserProfile,
  useSidebar,
  sidebarVariants,
};
