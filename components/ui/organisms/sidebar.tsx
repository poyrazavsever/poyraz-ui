"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  CONTEXT                                                            */
/* ================================================================== */

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "default" | "collapsible" | "floating" | "mini";
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
/*  SIDEBAR ROOT                                                       */
/* ================================================================== */

const sidebarVariants = cva(
  [
    "flex flex-col",
    "bg-white text-slate-950",
    "border-r-2 border-dashed border-slate-200",
    "transition-all duration-300 ease-out",
    "h-full",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "w-64",
        collapsible: "", // width managed by collapsed state
        floating: "fixed inset-y-0 left-0 z-50 w-72",
        mini: "w-16",
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
      resolvedVariant === "collapsible" ? (collapsed ? "w-16" : "w-64") : "";

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

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 shrink-0",
        "px-4 py-4",
        "border-b-2 border-dashed border-slate-200",
        collapsed && variant !== "default" && "justify-center px-2",
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
  const { collapsed } = useSidebar();

  if (collapsed) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "px-3 mb-2",
        "text-[10px] font-bold uppercase tracking-[0.15em]",
        "text-slate-400",
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
  /** Link href */
  href?: string;
}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, active, icon, badge, href, children, ...props }, ref) => {
    const { collapsed } = useSidebar();

    const content = (
      <li
        ref={ref}
        className={cn(
          "group relative flex items-center gap-3",
          "px-3 py-2.5",
          "text-sm font-medium",
          "rounded-none transition-colors duration-150",
          "cursor-pointer",
          // Active state
          active
            ? [
                "bg-red-50 text-red-700 font-semibold",
                "border-l-[3px] border-solid border-red-600",
                "pl-[calc(0.75rem-3px)]",
              ].join(" ")
            : [
                "text-slate-600",
                "hover:bg-slate-50 hover:text-slate-950",
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
              "border-2 border-dashed rounded-none",
              active
                ? "bg-red-600 text-white border-red-800"
                : "bg-slate-100 text-slate-600 border-slate-300",
            )}
          >
            {badge}
          </span>
        )}

        {/* Collapsed tooltip hint */}
        {collapsed && (
          <span
            className={cn(
              "absolute left-full ml-2 z-50",
              "px-2 py-1",
              "text-xs font-medium whitespace-nowrap",
              "bg-slate-900 text-white",
              "border-2 border-dashed border-slate-700",
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
/*  SIDEBAR SEPARATOR                                                  */
/* ================================================================== */

const SidebarSeparator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn(
      "border-t-2 border-dashed border-slate-200",
      "my-3 mx-3",
      className,
    )}
    {...props}
  />
));
SidebarSeparator.displayName = "SidebarSeparator";

/* ================================================================== */
/*  SIDEBAR FOOTER                                                     */
/* ================================================================== */

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { collapsed } = useSidebar();

  return (
    <div
      ref={ref}
      className={cn(
        "shrink-0",
        "px-4 py-3",
        "border-t-2 border-dashed border-slate-200",
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
          "h-9 w-9",
          "border-2 border-dashed border-slate-300 rounded-none",
          "hover:bg-slate-100 hover:border-slate-500",
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
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
  sidebarVariants,
};
