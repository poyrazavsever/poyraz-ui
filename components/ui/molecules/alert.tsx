import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, Terminal, X } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative grid w-full grid-cols-[auto_1fr] items-start gap-x-3 border p-4 transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] [&>svg]:mt-0.5 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "[--alert-bg:var(--poyraz-surface-subtle)] [--alert-border:var(--poyraz-border)] [--alert-fg:var(--poyraz-foreground)] [--alert-icon:var(--poyraz-muted-foreground)] [--alert-solid:var(--poyraz-foreground)]",
        info: "[--alert-bg:var(--poyraz-info)] [--alert-border:var(--poyraz-info-border)] [--alert-fg:var(--poyraz-info-foreground)] [--alert-icon:var(--poyraz-info-icon)] [--alert-solid:var(--poyraz-info-solid)]",
        success: "[--alert-bg:var(--poyraz-success)] [--alert-border:var(--poyraz-success-border)] [--alert-fg:var(--poyraz-success-foreground)] [--alert-icon:var(--poyraz-success-icon)] [--alert-solid:var(--poyraz-success-solid)]",
        warning: "[--alert-bg:var(--poyraz-warning)] [--alert-border:var(--poyraz-warning-border)] [--alert-fg:var(--poyraz-warning-foreground)] [--alert-icon:var(--poyraz-warning-icon)] [--alert-solid:var(--poyraz-warning-solid)]",
        destructive: "[--alert-bg:var(--poyraz-destructive-muted)] [--alert-border:var(--poyraz-invalid-border)] [--alert-fg:var(--poyraz-destructive-muted-foreground)] [--alert-icon:var(--poyraz-destructive)] [--alert-solid:var(--poyraz-destructive)]",
      },
      appearance: {
        soft: "border-[var(--alert-border)] bg-[var(--alert-bg)] text-[var(--alert-fg)] [&>svg]:text-[var(--alert-icon)]",
        outline: "border-[var(--alert-border)] bg-transparent text-[var(--alert-fg)] [&>svg]:text-[var(--alert-icon)]",
        filled: "border-transparent bg-[var(--alert-solid)] text-primary-foreground shadow-sm [&>svg]:text-current",
        glass: "border-[var(--alert-border)] bg-glass text-[var(--alert-fg)] shadow-md backdrop-blur-glass [&>svg]:text-[var(--alert-icon)]",
        inline: "border-[var(--alert-border)] border-l-4 border-l-[var(--alert-icon)] bg-[var(--alert-bg)] px-4 py-3 text-[var(--alert-fg)] shadow-xs [&>svg]:text-[var(--alert-icon)]",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      motion: {
        none: "",
        fade: "animate-poyraz-fade-in motion-reduce:animate-none",
        slide: "animate-poyraz-slide-in-from-top motion-reduce:animate-poyraz-fade-in",
        scale: "animate-poyraz-scale-in motion-reduce:animate-poyraz-fade-in",
      },
    },
    compoundVariants: [
      { variant: "warning", appearance: "filled", className: "text-warning-foreground" },
    ],
    defaultVariants: { variant: "default", appearance: "soft", radius: "lg", motion: "slide" },
  },
);

const variantIcons = {
  default: Terminal,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
} satisfies Record<string, React.ElementType>;

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  dismissLabel?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ appearance, className, dismissible = false, dismissLabel = "Dismiss alert", icon, motion, onDismiss, radius, variant = "default", children, ...props }, ref) => {
    const Icon = variantIcons[variant ?? "default"];
    return (
      <div
        ref={ref}
        role={variant === "destructive" ? "alert" : "status"}
        aria-live={variant === "destructive" ? "assertive" : "polite"}
        data-slot="alert"
        data-variant={variant}
        data-appearance={appearance ?? "soft"}
        className={cn(alertVariants({ appearance, motion, radius, variant }), dismissible && "pr-11", className)}
        {...props}
      >
        {icon !== undefined ? icon : <Icon aria-hidden="true" />}
        <div data-slot="alert-content" className="min-w-0">{children}</div>
        {dismissible && (
          <button
            type="button"
            aria-label={dismissLabel}
            onClick={onDismiss}
            className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-md text-current opacity-60 transition-[opacity,background-color,transform] hover:bg-current/10 hover:opacity-100 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h5 ref={ref} data-slot="alert-title" className={cn("font-semibold leading-5 tracking-tight", className)} {...props} />,
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} data-slot="alert-description" className={cn("mt-0.5 text-sm leading-5 opacity-85 [&_p]:leading-relaxed", className)} {...props} />,
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
