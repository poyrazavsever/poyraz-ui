"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  ANNOUNCEMENT BAR — Dismissable top-of-page notification strip      */
/* ================================================================== */

const announcementBarVariants = cva(
  [
    "relative w-full",
    "text-sm font-medium tracking-wide",
    "border-b-2 border-dashed",
    "transition-all duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white border-slate-700",
        info: "bg-blue-600 text-white border-blue-800",
        success: "bg-emerald-600 text-white border-emerald-800",
        warning: "bg-amber-500 text-black border-amber-700",
        danger: "bg-red-600 text-white border-red-800",
        branded: "bg-red-600 text-white border-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AnnouncementBarProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof announcementBarVariants> {
  /** Allow users to dismiss the bar */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Icon to show before the content */
  icon?: React.ReactNode;
  /** Action element (e.g. link or button) at the end */
  action?: React.ReactNode;
}

const AnnouncementBar = React.forwardRef<HTMLDivElement, AnnouncementBarProps>(
  (
    {
      className,
      variant,
      dismissible = true,
      onDismiss,
      icon,
      action,
      children,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        role="banner"
        className={cn(announcementBarVariants({ variant }), className)}
        {...props}
      >
        <div className="max-w-5xl mx-auto px-6 py-2 flex items-center justify-center gap-3">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="text-xs sm:text-sm text-center">{children}</span>
          {action && <span className="shrink-0">{action}</span>}
          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  },
);
AnnouncementBar.displayName = "AnnouncementBar";

export { AnnouncementBar, announcementBarVariants };
