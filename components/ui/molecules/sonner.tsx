"use client";

import { Toaster as Sonner, toast } from "sonner";

import { cn } from "@/lib/utils";
import { toastMotion } from "@/components/ui/recipes";

/* ------------------------------------------------------------------ */
/*  Toaster – Provider component (place once in layout.tsx)           */
/* ------------------------------------------------------------------ */

export type ToasterProps = React.ComponentProps<typeof Sonner> & {
  surface?: "solid" | "soft" | "glass";
  radius?: "sm" | "md" | "lg" | "xl";
  motion?: "spring" | "slide" | "fade";
};

const Toaster = ({ className, motion = "spring", radius = "xl", surface = "glass", ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn("toaster group", className)}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cn(
            "poyraz-toast relative flex min-h-16 w-full items-start gap-3 overflow-hidden p-4",
            toastMotion,
            "border border-border text-foreground shadow-lg",
            surface === "solid" && "bg-surface",
            surface === "soft" && "bg-surface-subtle/95",
            surface === "glass" && "border-glass-border-outer bg-glass backdrop-blur-xl",
            radius === "sm" && "rounded-sm",
            radius === "md" && "rounded-md",
            radius === "lg" && "rounded-lg",
            radius === "xl" && "rounded-xl",
            motion === "spring" && "ease-[var(--poyraz-motion-ease-spring)]",
            motion === "slide" && "ease-[var(--poyraz-motion-ease-out)]",
            motion === "fade" && "data-[mounted=false]:translate-y-0 data-[removed=true]:translate-y-0",
            "text-sm font-medium",
          ),
          content: "min-w-0 flex-1 pt-0.5",
          icon: "relative mt-0.5 flex size-5 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4",
          loader: "text-primary",
          loading: "!border-primary/20",
          title: "text-sm font-semibold leading-5",
          description: "mt-0.5 text-sm leading-5 text-muted-foreground",
          actionButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold",
            "rounded-md border border-primary/20 shadow-none",
            "bg-primary text-primary-foreground",
            "hover:bg-primary-hover transition-colors",
            "cursor-pointer",
          ),
          cancelButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "rounded-md border border-border shadow-none",
            "bg-surface-subtle text-muted-foreground",
            "hover:bg-muted transition-colors",
            "cursor-pointer",
          ),
          closeButton: cn(
            "rounded-md border border-border bg-surface",
            "hover:border-input transition-colors",
          ),
          // Variant-specific styles
          success:
            "!border-success-border !bg-success !text-success-foreground [&_[data-icon]]:!text-success-icon",
          error:
            "!border-destructive !bg-destructive-muted !text-destructive-muted-foreground [&_[data-icon]]:!text-destructive",
          warning:
            "!border-warning-border !bg-warning !text-warning-foreground [&_[data-icon]]:!text-warning-icon",
          info: "!border-info-border !bg-info !text-info-foreground [&_[data-icon]]:!text-info-icon",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
