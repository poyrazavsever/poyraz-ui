"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/* ================================================================== */
/*  ANNOUNCEMENT BAR — Dismissable top-of-page notification strip      */
/* ================================================================== */

const announcementBarVariants = cva(
  [
    "relative w-full",
    "text-sm font-medium tracking-wide",
    "border-b",
    "animate-poyraz-slide-in-from-top",
    "transition-[color,background-color,border-color,opacity,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-inverted text-inverted-foreground border-inverted",
        info: "bg-info text-info-foreground border-info-border",
        success: "bg-success text-success-foreground border-success-border",
        warning: "bg-warning text-warning-foreground border-warning-border",
        danger: "bg-destructive text-destructive-foreground border-destructive",
        branded: "bg-primary text-primary-foreground border-primary-800",
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
  /** Controlled visibility. Persistence belongs to the caller or optional hook. */
  open?: boolean;
  /** Initial visibility for uncontrolled usage. */
  defaultOpen?: boolean;
  /** Called whenever visibility changes. */
  onOpenChange?: (open: boolean) => void;
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
      open: controlledOpen,
      defaultOpen = true,
      onOpenChange,
      onTransitionEnd,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const open = controlledOpen ?? internalOpen;
    const [present, setPresent] = React.useState(open);

    React.useEffect(() => {
      if (open) setPresent(true);
    }, [open]);

    if (!present) return null;

    const handleDismiss = () => {
      if (controlledOpen === undefined) setInternalOpen(false);
      onOpenChange?.(false);
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        role="banner"
        data-slot="announcement-bar"
        data-variant={variant ?? "default"}
        data-state={open ? "open" : "closed"}
        onTransitionEnd={(event) => {
          onTransitionEnd?.(event);
          if (!open && event.currentTarget === event.target) setPresent(false);
        }}
        className={cn(
          announcementBarVariants({ variant }),
          "grid motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          className,
        )}
        {...props}
      >
        <div data-slot="announcement-bar-content" className="@container/announcement mx-auto flex min-h-0 w-full max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-10 py-2 @sm/announcement:flex-nowrap">
          {icon && <span data-slot="announcement-bar-icon" className="shrink-0 animate-poyraz-scale-in motion-reduce:animate-none">{icon}</span>}
          <span data-slot="announcement-bar-message" className="min-w-0 text-center text-xs @sm/announcement:text-sm">{children}</span>
          {action && <span data-slot="announcement-bar-action" className="shrink-0 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:transition-none hover:translate-x-0.5">{action}</span>}
          {dismissible && (
            <button
              type="button"
              data-slot="announcement-bar-close"
              onClick={handleDismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 transition-[opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] cursor-pointer"
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
