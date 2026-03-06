"use client";

import { Toaster as Sonner, toast } from "sonner";

import { cn } from "@/components/ui/atoms/typography";

/* ------------------------------------------------------------------ */
/*  Toaster – Provider component (place once in layout.tsx)           */
/* ------------------------------------------------------------------ */

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn("toaster group", className)}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cn(
            // Layout
            "flex items-start gap-3 w-full p-4",
            // Brutalist DNA
            "border border-border-strong rounded-sm shadow-none",
            // Colors
            "bg-background text-foreground",
            // Typography
            "text-sm font-medium",
          ),
          title: "font-bold text-sm",
          description: "text-muted-foreground text-sm mt-1",
          actionButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border border-foreground rounded-sm shadow-none",
            "bg-inverted text-inverted-foreground",
            "hover:bg-inverted/90 transition-colors",
            "cursor-pointer",
          ),
          cancelButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border border-border-strong rounded-sm shadow-none",
            "bg-background text-muted-foreground",
            "hover:bg-muted transition-colors",
            "cursor-pointer",
          ),
          closeButton: cn(
            "rounded-sm border border-border-strong",
            "hover:border-input transition-colors",
          ),
          // Variant-specific styles
          success:
            "!border-success-border !bg-success !text-success-foreground",
          error:
            "!border-destructive !bg-destructive-muted !text-destructive-muted-foreground",
          warning:
            "!border-warning-border !bg-warning !text-warning-foreground",
          info: "!border-info-border !bg-info !text-info-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
