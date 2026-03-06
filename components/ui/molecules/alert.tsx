import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Terminal,
} from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ------------------------------------------------------------------ */
/*  Variants                                                          */
/* ------------------------------------------------------------------ */

const alertVariants = cva(
  [
    "relative w-full border p-3",
    "rounded-sm shadow-none",
    // Icon positioning
    "[&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-background text-foreground border-border-strong",
          "[&>svg]:text-foreground",
        ].join(" "),

        info: [
          "bg-info text-info-foreground border-info-border",
          "[&>svg]:text-info-icon",
        ].join(" "),

        success: [
          "bg-success text-success-foreground border-success-border",
          "[&>svg]:text-success-icon",
        ].join(" "),

        warning: [
          "bg-warning text-warning-foreground border-warning-border",
          "[&>svg]:text-warning-icon",
        ].join(" "),

        destructive: [
          "bg-destructive-muted text-destructive-muted-foreground border-destructive",
          "[&>svg]:text-destructive",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/* ------------------------------------------------------------------ */
/*  Default icons per variant                                         */
/* ------------------------------------------------------------------ */

const variantIcons: Record<string, React.ElementType> = {
  default: Terminal,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
};

/* ------------------------------------------------------------------ */
/*  Components                                                        */
/* ------------------------------------------------------------------ */

export interface AlertProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Override the default icon for the variant */
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", icon, children, ...props }, ref) => {
    const IconComponent = variantIcons[variant ?? "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {icon !== undefined ? icon : <IconComponent className="h-4 w-4" />}
        {children}
      </div>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-bold leading-none tracking-tight uppercase text-sm",
      className,
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
