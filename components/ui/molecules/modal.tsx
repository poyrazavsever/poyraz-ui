"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  MODAL — opinionated wrapper around Radix Dialog                    */
/*  Difference from Dialog:                                            */
/*  • size variants (sm / default / lg / full)                         */
/*  • centered by default, optional top-aligned                        */
/*  • built-in close icon                                              */
/* ================================================================== */

const modalContentVariants = cva(
  [
    "fixed z-50 grid gap-4 bg-white p-6",
    "border-2 border-dashed border-slate-200",
    "rounded-none shadow-none",
    "duration-200",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        default: "w-full max-w-lg",
        lg: "w-full max-w-2xl",
        xl: "w-full max-w-4xl",
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
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
ModalOverlay.displayName = "ModalOverlay";

/* ── Content ──────────────────────────────────────────────────────── */

export interface ModalContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {
  /** Hide the default close (X) button */
  hideClose?: boolean;
}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(
  (
    { className, children, size, position, hideClose = false, ...props },
    ref,
  ) => (
    <DialogPrimitive.Portal>
      <ModalOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(modalContentVariants({ size, position }), className)}
        {...props}
      >
        {children}
        {!hideClose && (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none cursor-pointer">
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
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t-2 border-dashed border-slate-100",
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
      "text-lg font-semibold leading-none tracking-tight",
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
    className={cn("text-sm text-slate-500", className)}
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
