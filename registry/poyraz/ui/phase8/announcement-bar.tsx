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
    "data-[state=open]:animate-poyraz-slide-in-from-top",
    "transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
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
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof announcementBarVariants> {
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
      onAnimationEnd,
      onTransitionEnd,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const open = controlledOpen ?? internalOpen;
    const [present, setPresent] = React.useState(open);
    const dismissPending = React.useRef(false);

    const finishExit = React.useCallback(() => {
      setPresent(false);
      if (dismissPending.current) {
        dismissPending.current = false;
        onDismiss?.();
      }
    }, [onDismiss]);

    React.useEffect(() => {
      if (open) {
        dismissPending.current = false;
        setPresent(true);
        return;
      }
      if (!present) return;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const timer = window.setTimeout(finishExit, reducedMotion ? 0 : 320);
      return () => window.clearTimeout(timer);
    }, [finishExit, open, present]);

    if (!present) return null;

    const handleDismiss = () => {
      dismissPending.current = true;
      if (controlledOpen === undefined) setInternalOpen(false);
      onOpenChange?.(false);
    };

    return (
      <div
        ref={ref}
        role="banner"
        data-slot="announcement-bar"
        data-variant={variant ?? "default"}
        data-state={open ? "open" : "closed"}
        onAnimationEnd={(event) => {
          onAnimationEnd?.(event);
          if (!open && event.currentTarget === event.target) finishExit();
        }}
        onTransitionEnd={(event) => {
          onTransitionEnd?.(event);
        }}
        className={cn(
          announcementBarVariants({ variant }),
          "motion-reduce:transition-none motion-reduce:data-[state=closed]:animate-none",
          open
            ? "opacity-100"
            : "animate-poyraz-fade-out duration-[var(--poyraz-motion-duration-slow)]",
          className,
        )}
        {...props}
      >
        <div
          data-slot="announcement-bar-content"
          className="@container/announcement mx-auto flex min-h-0 w-full max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-10 py-2 @sm/announcement:flex-nowrap"
        >
          {icon && (
            <span
              data-slot="announcement-bar-icon"
              className="shrink-0 animate-poyraz-scale-in motion-reduce:animate-none"
            >
              {icon}
            </span>
          )}
          <span
            data-slot="announcement-bar-message"
            className="min-w-0 text-center text-xs @sm/announcement:text-sm"
          >
            {children}
          </span>
          {action && (
            <span data-slot="announcement-bar-action" className="shrink-0">
              {action}
            </span>
          )}
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
