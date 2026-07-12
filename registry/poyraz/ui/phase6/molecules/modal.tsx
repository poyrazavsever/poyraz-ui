"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  overlaySurfaceVariants,
  overlayVariants,
  type OverlayProps,
  type OverlaySurfaceProps,
} from "@/components/ui/recipes";

/* ================================================================== */
/*  MODAL — opinionated wrapper around Radix Dialog                    */
/*  Difference from Dialog:                                            */
/*  • size variants (sm / default / lg / full)                         */
/*  • centered by default, optional top-aligned                        */
/*  • built-in close icon                                              */
/* ================================================================== */

const modalContentVariants = cva(
  [
    "fixed z-50 grid gap-4 p-5",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
    "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0] motion-reduce:duration-100",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "w-full max-w-xs",
        default: "w-full max-w-sm",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-2xl",
        full: "w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]",
      },
      position: {
        center:
          "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        top: "left-[50%] top-[10%] translate-x-[-50%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[5%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[5%]",
      },
    },
    defaultVariants: {
      size: "default",
      position: "center",
    },
  },
);

/* ── Root ─────────────────────────────────────────────────────────── */

const Modal = DialogPrimitive.Root;

const ModalTrigger = DialogPrimitive.Trigger;

const ModalClose = DialogPrimitive.Close;

/* ── Overlay ──────────────────────────────────────────────────────── */

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & OverlayProps
>(({ className, tone, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(overlayVariants({ tone }), className)}
    {...props}
  />
));
ModalOverlay.displayName = "ModalOverlay";

/* ── Content ──────────────────────────────────────────────────────── */

export interface ModalContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants>, OverlaySurfaceProps {
  /** Hide the default close (X) button */
  hideClose?: boolean;
  mobile?: "floating" | "fullscreen";
  overlayTone?: NonNullable<OverlayProps["tone"]>;
  overlayClassName?: string;
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(
  (
    { className, children, size, position, surface, radius, hideClose = false, mobile = "floating", overlayTone, overlayClassName, ...props },
    ref,
  ) => (
    <DialogPrimitive.Portal>
      <ModalOverlay tone={overlayTone} className={overlayClassName} />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          overlaySurfaceVariants({ surface, radius }),
          modalContentVariants({ size, position }),
          mobile === "fullscreen" && "max-sm:inset-0 max-sm:h-dvh max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-none",
          className,
        )}
        {...props}
      >
        {children}
        {!hideClose && (
          <DialogPrimitive.Close className="absolute right-4 top-4 cursor-pointer rounded-md p-1 opacity-70 ring-offset-background transition-all duration-150 ease-out hover:bg-accent hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);
ModalContent.displayName = "ModalContent";

/* ── Header / Footer / Title / Description ────────────────────────── */

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-left", className)}
    {...props}
  />
);
ModalHeader.displayName = "ModalHeader";

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t border-border",
      className,
    )}
    {...props}
  />
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-base font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ModalDescription.displayName = "ModalDescription";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
  modalContentVariants,
};
