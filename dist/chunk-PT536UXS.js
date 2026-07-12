"use client";
import { Label, Card, CardImage, CardHeader, CardHeading, CardTitle, CardDescription, CardFooter, CardContent } from './chunk-FPCAVNAL.js';
import { cn, floatingSurfaceVariants, overlayVariants, overlaySurfaceVariants, floatingMotion, floatingItemVariants, fieldVariants, Badge, buttonVariants, Button } from './chunk-V2H4GGIL.js';
import { __objRest, __spreadValues, __spreadProps } from './chunk-ORMEWXMH.js';
import * as React5 from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, AlertCircle, AlertTriangle, CheckCircle2, Info, Terminal, X, ChevronRight, Check, Circle, ChevronUp, Search, ArrowUpRight, ArrowDownRight, Minus, Star, MoreHorizontal, ChevronLeft, CalendarIcon } from 'lucide-react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Slot } from '@radix-ui/react-slot';
import { useFormContext, FormProvider, Controller } from 'react-hook-form';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Toaster as Toaster$1 } from 'sonner';
export { toast } from 'sonner';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { Drawer as Drawer$1 } from 'vaul';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

var Accordion = AccordionPrimitive.Root;
var AccordionItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, surface, radius, separated = false } = _b, props = __objRest(_b, ["className", "surface", "radius", "separated"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "border-b border-border transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "data-[state=open]:border-border-strong",
        separated && floatingSurfaceVariants({ surface, radius }),
        separated && "mb-2 border p-0 data-[state=open]:border-border-strong",
        className
      )
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-3 font-medium",
        "transition-[color,background-color,padding,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:pl-1 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "overflow-hidden text-sm",
        "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
        "motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none"
      )
    }, props), {
      children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0 data-[state=open]:animate-poyraz-fade-in motion-reduce:animate-none", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var alertVariants = cva(
  "relative grid w-full grid-cols-[auto_1fr] items-start gap-x-3 border p-4 transition-[color,background-color,border-color,box-shadow,transform,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] [&>svg]:mt-0.5 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "[--alert-bg:var(--poyraz-surface-subtle)] [--alert-border:var(--poyraz-border)] [--alert-fg:var(--poyraz-foreground)] [--alert-icon:var(--poyraz-muted-foreground)] [--alert-solid:var(--poyraz-foreground)]",
        info: "[--alert-bg:var(--poyraz-info)] [--alert-border:var(--poyraz-info-border)] [--alert-fg:var(--poyraz-info-foreground)] [--alert-icon:var(--poyraz-info-icon)] [--alert-solid:var(--poyraz-info-solid)]",
        success: "[--alert-bg:var(--poyraz-success)] [--alert-border:var(--poyraz-success-border)] [--alert-fg:var(--poyraz-success-foreground)] [--alert-icon:var(--poyraz-success-icon)] [--alert-solid:var(--poyraz-success-solid)]",
        warning: "[--alert-bg:var(--poyraz-warning)] [--alert-border:var(--poyraz-warning-border)] [--alert-fg:var(--poyraz-warning-foreground)] [--alert-icon:var(--poyraz-warning-icon)] [--alert-solid:var(--poyraz-warning-solid)]",
        destructive: "[--alert-bg:var(--poyraz-destructive-muted)] [--alert-border:var(--poyraz-invalid-border)] [--alert-fg:var(--poyraz-destructive-muted-foreground)] [--alert-icon:var(--poyraz-destructive)] [--alert-solid:var(--poyraz-destructive)]"
      },
      appearance: {
        soft: "border-[var(--alert-border)] bg-[var(--alert-bg)] text-[var(--alert-fg)] [&>svg]:text-[var(--alert-icon)]",
        outline: "border-[var(--alert-border)] bg-transparent text-[var(--alert-fg)] [&>svg]:text-[var(--alert-icon)]",
        filled: "border-transparent bg-[var(--alert-solid)] text-primary-foreground shadow-sm [&>svg]:text-current",
        glass: "border-[var(--alert-border)] bg-glass text-[var(--alert-fg)] shadow-md backdrop-blur-glass [&>svg]:text-[var(--alert-icon)]",
        inline: "border-[var(--alert-border)] border-l-4 border-l-[var(--alert-icon)] bg-[var(--alert-bg)] px-4 py-3 text-[var(--alert-fg)] shadow-xs [&>svg]:text-[var(--alert-icon)]"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl"
      },
      motion: {
        none: "",
        fade: "animate-poyraz-fade-in motion-reduce:animate-none",
        slide: "animate-poyraz-slide-in-from-top motion-reduce:animate-poyraz-fade-in",
        scale: "animate-poyraz-scale-in motion-reduce:animate-poyraz-fade-in"
      }
    },
    compoundVariants: [
      { variant: "warning", appearance: "filled", className: "text-warning-foreground" }
    ],
    defaultVariants: { variant: "default", appearance: "soft", radius: "lg", motion: "slide" }
  }
);
var variantIcons = {
  default: Terminal,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle
};
var Alert = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { appearance, className, dismissible = false, dismissLabel = "Dismiss alert", icon, motion, onDismiss, radius, variant = "default", children } = _b, props = __objRest(_b, ["appearance", "className", "dismissible", "dismissLabel", "icon", "motion", "onDismiss", "radius", "variant", "children"]);
    const Icon2 = variantIcons[variant != null ? variant : "default"];
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: variant === "destructive" ? "alert" : "status",
        "aria-live": variant === "destructive" ? "assertive" : "polite",
        "data-slot": "alert",
        "data-variant": variant,
        "data-appearance": appearance != null ? appearance : "soft",
        className: cn(alertVariants({ appearance, motion, radius, variant }), dismissible && "pr-11", className)
      }, props), {
        children: [
          icon !== void 0 ? icon : /* @__PURE__ */ jsx(Icon2, { "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("div", { "data-slot": "alert-content", className: "min-w-0", children }),
          dismissible && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": dismissLabel,
              onClick: onDismiss,
              className: "absolute right-3 top-3 flex size-7 items-center justify-center rounded-md text-current opacity-60 transition-[opacity,background-color,transform] hover:bg-current/10 hover:opacity-100 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
            }
          )
        ]
      })
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("h5", __spreadValues({ ref, "data-slot": "alert-title", className: cn("font-semibold leading-5 tracking-tight", className) }, props));
  }
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx("div", __spreadValues({ ref, "data-slot": "alert-description", className: cn("mt-0.5 text-sm leading-5 opacity-85 [&_p]:leading-relaxed", className) }, props));
  }
);
AlertDescription.displayName = "AlertDescription";
var Breadcrumb = React5.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx("nav", __spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ol",
    __spreadValues({
      ref,
      className: cn(
        "flex max-w-full flex-nowrap items-center gap-1.5 overflow-x-auto break-words text-sm text-muted-foreground scrollbar-none sm:gap-2.5",
        "transition-[color,background-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "li",
    __spreadValues({
      ref,
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React5.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? "span" : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    __spreadValues({
      ref,
      className: cn(
        "transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:text-foreground",
        className
      )
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn(
        "font-normal text-foreground animate-poyraz-fade-in",
        className
      )
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "li",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn(
        "text-placeholder transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] [&>svg]:size-3.5 [&>svg]:transition-transform [&>svg]:duration-[var(--poyraz-motion-duration-fast)]",
        className
      )
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsx(ChevronRight, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className,
    "aria-label": ariaLabel = "More breadcrumb items"
  } = _b, props = __objRest(_b, [
    "className",
    "aria-label"
  ]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadProps(__spreadValues({
      role: "img",
      "aria-label": ariaLabel,
      className: cn(
        "flex h-9 w-9 items-center justify-center text-placeholder transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4 animate-poyraz-fade-in" })
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, tone } = _b, props = __objRest(_b, ["className", "tone"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(overlayVariants({ tone }), className)
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, surface, radius, showClose = true, mobile = "floating", overlayTone, overlayClassName } = _b, props = __objRest(_b, ["className", "children", "surface", "radius", "showClose", "mobile", "overlayTone", "overlayClassName"]);
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, { tone: overlayTone, className: overlayClassName }),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          overlaySurfaceVariants({ surface, radius }),
          "fixed left-1/2 top-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto p-5",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0]",
          mobile === "fullscreen" && "max-sm:inset-0 max-sm:max-h-none max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-none",
          className
        )
      }, props), {
        children: [
          children,
          showClose && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-md p-1 opacity-70 ring-offset-background transition-all duration-150 ease-out hover:bg-accent hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-base font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
var DropdownMenuContext = React5.createContext({
  interaction: "click",
  openFromPointer: () => {
  },
  scheduleClose: () => {
  },
  cancelClose: () => {
  }
});
function DropdownMenu(_a) {
  var _b = _a, {
    interaction = "click",
    closeDelay = 120,
    open: controlledOpen,
    defaultOpen,
    onOpenChange,
    modal,
    children
  } = _b, props = __objRest(_b, [
    "interaction",
    "closeDelay",
    "open",
    "defaultOpen",
    "onOpenChange",
    "modal",
    "children"
  ]);
  const [uncontrolledOpen, setUncontrolledOpen] = React5.useState(defaultOpen != null ? defaultOpen : false);
  const timer = React5.useRef(null);
  const open = controlledOpen != null ? controlledOpen : uncontrolledOpen;
  const setOpen = React5.useCallback(
    (next) => {
      if (controlledOpen === void 0) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [controlledOpen, onOpenChange]
  );
  const cancelClose = React5.useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);
  React5.useEffect(() => cancelClose, [cancelClose]);
  const context = React5.useMemo(
    () => ({
      interaction,
      cancelClose,
      openFromPointer: (event) => {
        if (interaction === "hover" && event.pointerType === "mouse") {
          cancelClose();
          setOpen(true);
        }
      },
      scheduleClose: (event) => {
        if (interaction === "hover" && event.pointerType === "mouse") {
          cancelClose();
          timer.current = setTimeout(() => setOpen(false), closeDelay);
        }
      }
    }),
    [cancelClose, closeDelay, interaction, setOpen]
  );
  return /* @__PURE__ */ jsx(DropdownMenuContext.Provider, { value: context, children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Root,
    __spreadProps(__spreadValues({
      open,
      onOpenChange: setOpen,
      modal: interaction === "hover" ? false : modal
    }, props), {
      children
    })
  ) });
}
var DropdownMenuTrigger = React5.forwardRef((_a, ref) => {
  var _b = _a, { onPointerDown, onPointerEnter, onPointerLeave } = _b, props = __objRest(_b, ["onPointerDown", "onPointerEnter", "onPointerLeave"]);
  const hover = React5.useContext(DropdownMenuContext);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    __spreadValues({
      ref,
      onPointerEnter: (event) => {
        hover.openFromPointer(event);
        onPointerEnter == null ? void 0 : onPointerEnter(event);
      },
      onPointerLeave: (event) => {
        hover.scheduleClose(event);
        onPointerLeave == null ? void 0 : onPointerLeave(event);
      },
      onPointerDown: (event) => {
        if (hover.interaction === "hover" && event.pointerType === "mouse") {
          event.preventDefault();
        }
        onPointerDown == null ? void 0 : onPointerDown(event);
      }
    }, props)
  );
});
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownItemContext = React5.createContext({ size: "md", radius: "md" });
var DropdownMenuContent = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      sideOffset = 6,
      collisionPadding = 8,
      surface,
      radius,
      itemSize = "md",
      itemRadius = "md",
      onPointerEnter,
      onPointerLeave
    } = _b, props = __objRest(_b, [
      "className",
      "sideOffset",
      "collisionPadding",
      "surface",
      "radius",
      "itemSize",
      "itemRadius",
      "onPointerEnter",
      "onPointerLeave"
    ]);
    const hover = React5.useContext(DropdownMenuContext);
    return /* @__PURE__ */ jsx(DropdownMenuPortal, { children: /* @__PURE__ */ jsx(DropdownItemContext.Provider, { value: { size: itemSize, radius: itemRadius }, children: /* @__PURE__ */ jsx(
      DropdownMenuPrimitive.Content,
      __spreadValues({
        ref,
        sideOffset,
        collisionPadding,
        onPointerEnter: (event) => {
          hover.cancelClose();
          onPointerEnter == null ? void 0 : onPointerEnter(event);
        },
        onPointerLeave: (event) => {
          hover.scheduleClose(event);
          onPointerLeave == null ? void 0 : onPointerLeave(event);
        },
        style: __spreadValues({
          "--poyraz-floating-transform-origin": "var(--radix-dropdown-menu-content-transform-origin)",
          "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)"
        }, props.style),
        className: cn(
          floatingSurfaceVariants({ surface, radius }),
          floatingMotion,
          "z-50 min-w-40 p-1.5",
          className
        )
      }, props)
    ) }) });
  }
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuSubContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, surface, radius, sideOffset = 6, collisionPadding = 8, style } = _b, props = __objRest(_b, ["className", "surface", "radius", "sideOffset", "collisionPadding", "style"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      sideOffset,
      collisionPadding,
      style: __spreadValues({
        "--poyraz-floating-transform-origin": "var(--radix-dropdown-menu-content-transform-origin)",
        "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)"
      }, style),
      className: cn(
        floatingSurfaceVariants({ surface, radius }),
        floatingMotion,
        "z-[60] min-w-40 p-1.5",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, size, radius, media, description, trailing, children } = _b, props = __objRest(_b, ["className", "inset", "size", "radius", "media", "description", "trailing", "children"]);
  const defaults = React5.useContext(DropdownItemContext);
  const rich = media !== void 0 || description !== void 0 || trailing !== void 0;
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        floatingItemVariants({
          inset,
          size: size != null ? size : defaults.size,
          radius: radius != null ? radius : defaults.radius
        }),
        "cursor-default",
        className
      )
    }, props), {
      children: rich ? /* @__PURE__ */ jsxs(Fragment, { children: [
        media && /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover", children: media }),
        /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("span", { className: "block truncate font-medium", children }),
          description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block line-clamp-2 text-xs leading-snug text-muted-foreground", children: description })
        ] }),
        trailing && /* @__PURE__ */ jsx("span", { className: "ml-auto shrink-0 text-muted-foreground", children: trailing })
      ] }) : children
    })
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuSubTrigger = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, size, radius, children } = _b, props = __objRest(_b, ["className", "inset", "size", "radius", "children"]);
  const defaults = React5.useContext(DropdownItemContext);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        floatingItemVariants({ inset, size: size != null ? size : defaults.size, radius: radius != null ? radius : defaults.radius }),
        "group cursor-default data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4 transition-transform group-data-[state=open]:translate-x-0.5" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuCheckboxItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked, size, radius } = _b, props = __objRest(_b, ["className", "children", "checked", "size", "radius"]);
  const defaults = React5.useContext(DropdownItemContext);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      checked,
      className: cn(
        floatingItemVariants({ size: size != null ? size : defaults.size, radius: radius != null ? radius : defaults.radius }),
        "cursor-default pl-8",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4 animate-poyraz-scale-in" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, size, radius } = _b, props = __objRest(_b, ["className", "children", "size", "radius"]);
  const defaults = React5.useContext(DropdownItemContext);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        floatingItemVariants({ size: size != null ? size : defaults.size, radius: radius != null ? radius : defaults.radius }),
        "cursor-default pl-8",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "size-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("px-2.5 py-1.5 text-xs font-semibold text-muted-foreground", inset && "pl-8", className)
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, __spreadValues({ ref, className: cn("-mx-1 my-1 h-px bg-border", className) }, props));
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("span", __spreadValues({ className: cn("ml-auto text-xs tracking-wider text-muted-foreground", className) }, props));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Form = FormProvider;
var FormFieldContext = React5.createContext(
  {}
);
var FormField = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, __spreadValues({}, props)) });
};
var useFormField = () => {
  const fieldContext = React5.useContext(FormFieldContext);
  const itemContext = React5.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return __spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React5.createContext(
  {}
);
var FormItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React5.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("space-y-2 transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]", className)
    }, props)
  ) });
});
FormItem.displayName = "FormItem";
var FormLabel = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    __spreadValues({
      ref,
      className: cn(
        "transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        error && "text-destructive",
        className
      ),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React5.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    __spreadValues({
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      id: formDescriptionId,
      className: cn(
        "text-sm text-muted-foreground transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    __spreadProps(__spreadValues({
      ref,
      id: formMessageId,
      role: "alert",
      "aria-live": "assertive",
      "aria-atomic": "true",
      "data-slot": "form-message",
      className: cn(
        "text-sm font-medium text-destructive animate-poyraz-slide-in-from-top transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props), {
      children: body
    })
  );
});
FormMessage.displayName = "FormMessage";
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn(
        "flex max-w-full flex-row flex-nowrap items-center justify-start gap-1 overflow-x-auto scrollbar-none sm:justify-center",
        "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        buttonVariants({
          variant: "ghost",
          size,
          radius: "md"
        }),
        "transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        isActive && "border border-primary/25 bg-primary-muted text-primary shadow-sm hover:border-primary/35 hover:bg-primary-muted hover:text-primary",
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("group gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:-translate-x-0.5" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Previous" })
      ]
    })
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("group gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Next" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:translate-x-0.5" })
      ]
    })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      className: cn(
        "flex h-8 w-8 items-center justify-center text-placeholder",
        "transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4 animate-poyraz-fade-in" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 6, collisionPadding = 8, surface, radius, padding = "md", style } = _b, props = __objRest(_b, ["className", "align", "sideOffset", "collisionPadding", "surface", "radius", "padding", "style"]);
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      collisionPadding,
      style: __spreadValues({
        "--poyraz-floating-transform-origin": "var(--radix-popover-content-transform-origin)",
        "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)"
      }, style),
      className: cn(
        floatingSurfaceVariants({ surface, radius }),
        floatingMotion,
        "z-50 w-72",
        padding === "none" && "p-0",
        padding === "sm" && "p-2",
        padding === "md" && "p-4",
        padding === "lg" && "p-6",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, variant, radius, size = "md" } = _b, props = __objRest(_b, ["className", "children", "variant", "radius", "size"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        fieldVariants({ variant, radius }),
        "group items-center justify-between gap-2 [&>span]:line-clamp-1",
        size === "sm" && "h-8 px-2.5 py-1 text-xs",
        size === "md" && "h-9 px-3 py-1.5 text-sm",
        size === "lg" && "h-11 px-3.5 py-2 text-sm",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] group-data-[state=open]:rotate-180 group-data-[state=open]:scale-110" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectItemContext = React5.createContext({ size: "md", radius: "md" });
var SelectContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper", surface, radius, itemSize = "md", itemRadius = "md", collisionPadding = 8, style } = _b, props = __objRest(_b, ["className", "children", "position", "surface", "radius", "itemSize", "itemRadius", "collisionPadding", "style"]);
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      collisionPadding,
      style: __spreadValues({
        "--poyraz-floating-transform-origin": "var(--radix-select-content-transform-origin)",
        "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)"
      }, style),
      className: cn(
        floatingSurfaceVariants({ surface, radius }),
        floatingMotion,
        "relative z-50 max-h-96 min-w-40",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(SelectItemContext.Provider, { value: { size: itemSize, radius: itemRadius }, children: /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ) }),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, size, radius, media, description, trailing } = _b, props = __objRest(_b, ["className", "children", "size", "radius", "media", "description", "trailing"]);
  const defaults = React5.useContext(SelectItemContext);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        floatingItemVariants({ size: size != null ? size : defaults.size, radius: radius != null ? radius : defaults.radius }),
        "cursor-default pl-8",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 animate-poyraz-scale-in" }) }) }),
        media && /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover", children: media }),
        /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children: /* @__PURE__ */ jsx("span", { className: "block truncate font-medium", children }) }),
          description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block line-clamp-2 text-xs text-muted-foreground", children: description })
        ] }),
        trailing && /* @__PURE__ */ jsx("span", { className: "ml-auto shrink-0 text-muted-foreground", children: trailing })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-accent", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Toaster = (_a) => {
  var _b = _a, { className, motion = "spring", radius = "xl", surface = "glass" } = _b, props = __objRest(_b, ["className", "motion", "radius", "surface"]);
  return /* @__PURE__ */ jsx(
    Toaster$1,
    __spreadValues({
      className: cn("toaster group", className),
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: cn(
            "poyraz-toast relative flex min-h-16 w-full items-start gap-3 overflow-hidden p-4",
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
            "data-[swiping=true]:transition-none data-[swiped=true]:transition-none motion-reduce:duration-[1ms]",
            "text-sm font-medium"
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
            "cursor-pointer"
          ),
          cancelButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "rounded-md border border-border shadow-none",
            "bg-surface-subtle text-muted-foreground",
            "hover:bg-muted transition-colors",
            "cursor-pointer"
          ),
          closeButton: cn(
            "rounded-md border border-border bg-surface",
            "hover:border-input transition-colors"
          ),
          // Variant-specific styles
          success: "!border-success-border !bg-success !text-success-foreground [&_[data-icon]]:!text-success-icon",
          error: "!border-destructive !bg-destructive-muted !text-destructive-muted-foreground [&_[data-icon]]:!text-destructive",
          warning: "!border-warning-border !bg-warning !text-warning-foreground [&_[data-icon]]:!text-warning-icon",
          info: "!border-info-border !bg-info !text-info-foreground [&_[data-icon]]:!text-info-icon"
        }
      }
    }, props)
  );
};
var TabsStyleContext = React5.createContext({ variant: "line" });
var Tabs = TabsPrimitive.Root;
var TabsList = React5.forwardRef((_a, forwardedRef) => {
  var _b = _a, { className, variant = "line", radius = "lg", children } = _b, props = __objRest(_b, ["className", "variant", "radius", "children"]);
  const listRef = React5.useRef(null);
  const [indicator, setIndicator] = React5.useState({ left: 0, width: 0, visible: false });
  React5.useImperativeHandle(forwardedRef, () => listRef.current);
  React5.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || variant !== "line") return;
    const update = () => {
      const active = list.querySelector('[role="tab"][data-state="active"]');
      if (!active) {
        setIndicator((current) => __spreadProps(__spreadValues({}, current), { visible: false }));
        return;
      }
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth, visible: true });
    };
    update();
    const mutationObserver = new MutationObserver(update);
    mutationObserver.observe(list, { attributes: true, subtree: true, attributeFilter: ["data-state"] });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(list);
    list.querySelectorAll('[role="tab"]').forEach((tab) => resizeObserver.observe(tab));
    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [variant, children]);
  return /* @__PURE__ */ jsx(TabsStyleContext.Provider, { value: { variant }, children: /* @__PURE__ */ jsxs(
    TabsPrimitive.List,
    __spreadProps(__spreadValues({
      ref: listRef,
      className: cn(
        "relative inline-flex min-h-10 max-w-full items-center overflow-x-auto overflow-y-hidden p-1 text-muted-foreground scrollbar-none",
        "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)]",
        variant === "line" && "gap-1 border-b border-border bg-transparent px-0 pb-0",
        variant === "soft" && "gap-1 bg-surface-subtle",
        variant === "glass" && "gap-1 border border-glass-border-outer bg-glass shadow-sm backdrop-blur-glass",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "full" && "rounded-full",
        className
      )
    }, props), {
      children: [
        children,
        variant === "line" && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            "data-slot": "tabs-indicator",
            className: "pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-primary transition-[left,width,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-spring)] motion-reduce:duration-[1ms]",
            style: {
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0
            }
          }
        )
      ]
    })
  ) });
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, size = "md", radius = "md" } = _b, props = __objRest(_b, ["className", "size", "radius"]);
  const { variant } = React5.useContext(TabsStyleContext);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "relative inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium outline-none",
        "transition-[color,background-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "h-7 px-2.5 text-xs",
        size === "md" && "h-8 px-3 text-sm",
        size === "lg" && "h-10 px-4 text-sm",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "full" && "rounded-full",
        variant === "line" && "data-[state=active]:text-foreground",
        variant !== "line" && "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        variant === "glass" && "data-[state=active]:bg-background/80",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, surface, radius, contained = false } = _b, props = __objRest(_b, ["className", "surface", "radius", "contained"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-3 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-poyraz-fade-in motion-reduce:animate-none",
        contained && floatingSurfaceVariants({ surface, radius }),
        contained && "p-4",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 6, collisionPadding = 8, surface = "solid", radius, size = "sm", style } = _b, props = __objRest(_b, ["className", "sideOffset", "collisionPadding", "surface", "radius", "size", "style"]);
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      collisionPadding,
      style: __spreadValues({
        "--poyraz-floating-transform-origin": "var(--radix-tooltip-content-transform-origin)",
        "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.375rem)"
      }, style),
      className: cn(
        floatingSurfaceVariants({ surface, radius }),
        floatingMotion,
        "z-50 max-w-xs",
        size === "sm" && "px-2.5 py-1.5 text-xs",
        size === "md" && "px-3 py-2 text-sm",
        className
      )
    }, props)
  ) });
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 6, collisionPadding = 8, surface, radius, size = "md", style } = _b, props = __objRest(_b, ["className", "align", "sideOffset", "collisionPadding", "surface", "radius", "size", "style"]);
  return /* @__PURE__ */ jsx(HoverCardPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    HoverCardPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      collisionPadding,
      style: __spreadValues({
        "--poyraz-floating-transform-origin": "var(--radix-hover-card-content-transform-origin)",
        "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)"
      }, style),
      className: cn(
        floatingSurfaceVariants({ surface, radius }),
        floatingMotion,
        "z-50",
        size === "sm" && "w-56 p-3",
        size === "md" && "w-72 p-4",
        size === "lg" && "w-96 p-5",
        className
      )
    }, props)
  ) });
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
var DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year, month) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isToday(date) {
  return isSameDay(date, /* @__PURE__ */ new Date());
}
function Calendar(props) {
  var _a;
  const {
    minDate,
    maxDate,
    className,
    initialMonth,
    onMonthChange,
    radius = "lg",
    size = "default",
    surface = "plain"
  } = props;
  const mode = (_a = props.mode) != null ? _a : "single";
  const isControlled = Object.prototype.hasOwnProperty.call(props, "selected");
  const [internalSelection, setInternalSelection] = React5.useState(props.defaultSelected);
  const selection = isControlled ? props.selected : internalSelection;
  const selectedDate = selection instanceof Date ? selection : selection == null ? void 0 : selection.from;
  const selectedRange = mode === "range" && !(selection instanceof Date) ? selection : void 0;
  const [viewYear, setViewYear] = React5.useState(
    () => {
      var _a2;
      return ((_a2 = initialMonth != null ? initialMonth : selectedDate) != null ? _a2 : /* @__PURE__ */ new Date()).getFullYear();
    }
  );
  const [viewMonth, setViewMonth] = React5.useState(
    () => {
      var _a2;
      return ((_a2 = initialMonth != null ? initialMonth : selectedDate) != null ? _a2 : /* @__PURE__ */ new Date()).getMonth();
    }
  );
  const [view, setView] = React5.useState("days");
  const [decadeStart, setDecadeStart] = React5.useState(() => {
    var _a2;
    const y = ((_a2 = initialMonth != null ? initialMonth : selectedDate) != null ? _a2 : /* @__PURE__ */ new Date()).getFullYear();
    return y - y % 12;
  });
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  React5.useEffect(() => {
    onMonthChange == null ? void 0 : onMonthChange(new Date(viewYear, viewMonth, 1));
  }, [onMonthChange, viewMonth, viewYear]);
  const emitSelection = (next) => {
    var _a2, _b;
    if (!isControlled) setInternalSelection(next);
    if (mode === "range") {
      (_a2 = props.onSelect) == null ? void 0 : _a2.call(props, next);
    } else {
      (_b = props.onSelect) == null ? void 0 : _b.call(props, next);
    }
  };
  const selectDate = (date) => {
    if (mode === "single") {
      emitSelection(date);
      return;
    }
    const current = selectedRange;
    if (!(current == null ? void 0 : current.from) || current.to || date < current.from) {
      emitSelection({ from: date, to: void 0 });
    } else {
      emitSelection({ from: current.from, to: date });
    }
  };
  const isInRange = (date) => Boolean(
    (selectedRange == null ? void 0 : selectedRange.from) && (selectedRange == null ? void 0 : selectedRange.to) && date > selectedRange.from && date < selectedRange.to
  );
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };
  const isDisabled = (date) => {
    if (minDate) {
      const min = new Date(
        minDate.getFullYear(),
        minDate.getMonth(),
        minDate.getDate()
      );
      if (date < min) return true;
    }
    if (maxDate) {
      const max = new Date(
        maxDate.getFullYear(),
        maxDate.getMonth(),
        maxDate.getDate(),
        23,
        59,
        59,
        999
      );
      if (date > max) return true;
    }
    return false;
  };
  const renderDays = () => {
    const cells = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(/* @__PURE__ */ jsx("div", {}, `empty-${i}`));
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const rangeStart = Boolean((selectedRange == null ? void 0 : selectedRange.from) && isSameDay(date, selectedRange.from));
      const rangeEnd = Boolean((selectedRange == null ? void 0 : selectedRange.to) && isSameDay(date, selectedRange.to));
      const rangeMiddle = isInRange(date);
      const sel = mode === "single" ? Boolean(selectedDate && isSameDay(date, selectedDate)) : rangeStart || rangeEnd;
      const today = isToday(date);
      const disabled = isDisabled(date);
      cells.push(
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled,
            onClick: () => selectDate(date),
            "aria-label": date.toLocaleDateString(),
            "aria-pressed": sel,
            "data-selected": sel ? "" : void 0,
            "data-today": today ? "" : void 0,
            "data-range-start": rangeStart ? "" : void 0,
            "data-range-middle": rangeMiddle ? "" : void 0,
            "data-range-end": rangeEnd ? "" : void 0,
            className: cn(
              "text-sm font-medium cursor-pointer",
              size === "compact" && "h-7 w-7",
              size === "default" && "h-8 w-8",
              size === "spacious" && "h-10 w-10",
              "flex items-center justify-center",
              "transition-all duration-150 ease-out active:scale-95",
              "hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              today && !sel && !rangeMiddle && "ring-1 ring-inset ring-primary/45 text-primary",
              rangeMiddle && "rounded-none bg-primary-muted text-primary-muted-foreground hover:bg-primary-muted",
              rangeStart && (selectedRange == null ? void 0 : selectedRange.to) && "rounded-l-md rounded-r-none bg-primary text-primary-foreground",
              rangeStart && !(selectedRange == null ? void 0 : selectedRange.to) && "rounded-md bg-primary text-primary-foreground",
              rangeEnd && "rounded-l-none rounded-r-md bg-primary text-primary-foreground",
              sel && mode === "single" && "rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
              disabled && "opacity-30 cursor-not-allowed hover:bg-transparent"
            ),
            children: day
          },
          day
        )
      );
    }
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:-translate-x-0.5 active:scale-95",
            onClick: prevMonth,
            "aria-label": "Previous month",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:-translate-x-0.5" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setView("months"),
            className: cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-accent transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "border-b border-transparent hover:border-border-strong"
            ),
            children: [
              MONTHS[viewMonth],
              " ",
              viewYear
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5 active:scale-95",
            onClick: nextMonth,
            "aria-label": "Next month",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:translate-x-0.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 mb-1", children: DAYS.map((d) => /* @__PURE__ */ jsx(
        "div",
        {
          className: cn("flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-placeholder", size === "compact" && "h-7 w-7", size === "default" && "h-8 w-8", size === "spacious" && "h-10 w-10"),
          children: d
        },
        d
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 animate-poyraz-slide-in-from-bottom", children: cells })
    ] });
  };
  const renderMonths = () => {
    const now = /* @__PURE__ */ new Date();
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:-translate-x-0.5 active:scale-95",
            onClick: () => setViewYear((y) => y - 1),
            "aria-label": "Previous year",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:-translate-x-0.5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setDecadeStart(viewYear - viewYear % 12);
              setView("years");
            },
            className: cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-accent transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "border-b border-transparent hover:border-border-strong"
            ),
            children: viewYear
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5 active:scale-95",
            onClick: () => setViewYear((y) => y + 1),
            "aria-label": "Next year",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:translate-x-0.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1 animate-poyraz-slide-in-from-bottom", children: MONTHS_SHORT.map((m, i) => {
        const isCurrent = i === now.getMonth() && viewYear === now.getFullYear();
        const isSelected = selectedDate && i === selectedDate.getMonth() && viewYear === selectedDate.getFullYear();
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setViewMonth(i);
              setView("days");
            },
            className: cn(
              "h-8 text-sm font-medium cursor-pointer",
              "flex items-center justify-center",
              "transition-all duration-150 ease-out active:scale-95",
              "hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isCurrent && !isSelected && "border border-primary",
              isSelected && "bg-primary text-primary-foreground hover:bg-primary-hover"
            ),
            children: m
          },
          m
        );
      }) })
    ] });
  };
  const renderYears = () => {
    const now = /* @__PURE__ */ new Date();
    const years = Array.from({ length: 12 }, (_, i) => decadeStart + i);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:-translate-x-0.5 active:scale-95",
            onClick: () => setDecadeStart((d) => d - 12),
            "aria-label": "Previous decade",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:-translate-x-0.5" })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold uppercase tracking-wide", children: [
          decadeStart,
          " \u2013 ",
          decadeStart + 11
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "group h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5 active:scale-95",
            onClick: () => setDecadeStart((d) => d + 12),
            "aria-label": "Next decade",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:translate-x-0.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1 animate-poyraz-slide-in-from-bottom", children: years.map((y) => {
        const isCurrent = y === now.getFullYear();
        const isSelected = selectedDate && y === selectedDate.getFullYear();
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setViewYear(y);
              setView("months");
            },
            className: cn(
              "h-8 text-sm font-medium cursor-pointer",
              "flex items-center justify-center",
              "transition-all duration-150 ease-out active:scale-95",
              "hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isCurrent && !isSelected && "border border-primary",
              isSelected && "bg-primary text-primary-foreground hover:bg-primary-hover"
            ),
            children: y
          },
          y
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "calendar",
      "data-mode": mode,
      "data-surface": surface,
      className: cn(
        "select-none p-3 animate-poyraz-fade-in motion-reduce:animate-none",
        surface === "solid" && "border border-border bg-surface shadow-sm",
        surface === "soft" && "border border-transparent bg-surface-subtle",
        surface === "glass" && "border border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "xl" && "rounded-xl",
        className
      ),
      children: [
        view === "days" && renderDays(),
        view === "months" && renderMonths(),
        view === "years" && renderYears()
      ]
    }
  );
}
Calendar.displayName = "Calendar";
function defaultFormat(date) {
  return date.toLocaleDateString(void 0, { year: "numeric", month: "long", day: "numeric" });
}
function DatePicker(props) {
  var _a;
  const {
    calendarProps,
    className,
    clearable = false,
    closeOnSelect = true,
    defaultOpen = false,
    defaultSelected,
    disabled = false,
    formatDate = defaultFormat,
    onOpenChange,
    onSelect,
    placeholder = "Pick a date",
    popoverRadius = "xl",
    popoverSurface = "glass",
    triggerRadius = "md",
    triggerSize = "default",
    triggerVariant = "outline"
  } = props;
  const selectionControlled = Object.prototype.hasOwnProperty.call(props, "selected");
  const openControlled = Object.prototype.hasOwnProperty.call(props, "open");
  const [internalSelected, setInternalSelected] = React5.useState(defaultSelected);
  const [internalOpen, setInternalOpen] = React5.useState(defaultOpen);
  const selected = selectionControlled ? props.selected : internalSelected;
  const open = openControlled ? (_a = props.open) != null ? _a : false : internalOpen;
  const setOpen = (next) => {
    if (!openControlled) setInternalOpen(next);
    onOpenChange == null ? void 0 : onOpenChange(next);
  };
  const setSelected = (next) => {
    if (!selectionControlled) setInternalSelected(next);
    onSelect == null ? void 0 : onSelect(next);
  };
  const handleSelect = (date) => {
    setSelected(date);
    if (date && closeOnSelect) setOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { "data-slot": "date-picker", "data-state": open ? "open" : "closed", className: cn("flex w-full items-center gap-2", className), children: [
    /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: triggerVariant,
          size: triggerSize,
          radius: triggerRadius,
          disabled,
          className: cn(
            "group flex-1 justify-start text-left font-normal",
            "transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
            !selected && "text-placeholder",
            open && "border-primary ring-2 ring-ring/25"
          ),
          children: [
            /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-1 size-4 shrink-0 transition-transform duration-[var(--poyraz-motion-duration-base)] group-data-[state=open]:rotate-6 group-data-[state=open]:scale-110" }),
            /* @__PURE__ */ jsx("span", { className: "truncate", children: selected ? formatDate(selected) : placeholder })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(PopoverContent, { surface: popoverSurface, radius: popoverRadius, padding: "none", className: "w-auto", align: "start", children: /* @__PURE__ */ jsx(Calendar, __spreadProps(__spreadValues({}, calendarProps), { mode: "single", selected, onSelect: handleSelect, surface: "plain" })) })
    ] }),
    clearable && selected && /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "icon", radius: triggerRadius, "aria-label": "Clear date", onClick: () => setSelected(void 0), children: /* @__PURE__ */ jsx(X, { className: "size-4" }) })
  ] });
}
DatePicker.displayName = "DatePicker";
var mermaidReady = null;
function getMermaid() {
  if (!mermaidReady) {
    mermaidReady = import('mermaid');
  }
  return mermaidReady;
}
function resolveColor(container, variable, fallback) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;color:var(${variable},${fallback})`;
  container.appendChild(probe);
  const color = getComputedStyle(probe).color || fallback;
  probe.remove();
  return color;
}
function resolveMermaidTheme(container) {
  return {
    primaryColor: resolveColor(container, "--poyraz-primary-muted", "rgb(254 226 226)"),
    primaryBorderColor: resolveColor(container, "--poyraz-primary", "rgb(220 38 38)"),
    primaryTextColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    secondaryColor: resolveColor(container, "--poyraz-surface-subtle", "rgb(241 245 249)"),
    secondaryBorderColor: resolveColor(container, "--poyraz-border-strong", "rgb(148 163 184)"),
    secondaryTextColor: resolveColor(container, "--poyraz-foreground", "rgb(51 65 85)"),
    tertiaryColor: resolveColor(container, "--poyraz-warning", "rgb(254 243 199)"),
    tertiaryBorderColor: resolveColor(container, "--poyraz-warning-border", "rgb(217 119 6)"),
    tertiaryTextColor: resolveColor(container, "--poyraz-warning-foreground", "rgb(120 53 15)"),
    lineColor: resolveColor(container, "--poyraz-muted-foreground", "rgb(100 116 139)"),
    textColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    mainBkg: resolveColor(container, "--poyraz-surface", "rgb(255 255 255)"),
    nodeBorder: resolveColor(container, "--poyraz-primary", "rgb(220 38 38)"),
    clusterBkg: resolveColor(container, "--poyraz-surface-subtle", "rgb(248 250 252)"),
    clusterBorder: resolveColor(container, "--poyraz-border", "rgb(203 213 225)"),
    titleColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    edgeLabelBackground: resolveColor(container, "--poyraz-surface", "rgb(255 255 255)"),
    nodeTextColor: resolveColor(container, "--poyraz-foreground", "rgb(15 23 42)"),
    fontFamily: "var(--poyraz-font-primary), ui-sans-serif, system-ui, sans-serif",
    fontSize: "13px"
  };
}
var idCounter = 0;
var Mermaid = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, code, chartId, children, diagramStyle = "soft", errorContent, loadingContent, radius = "lg", surface = "solid" } = _b, props = __objRest(_b, ["className", "code", "chartId", "children", "diagramStyle", "errorContent", "loadingContent", "radius", "surface"]);
    const containerRef = React5.useRef(null);
    const [svg, setSvg] = React5.useState("");
    const [error, setError] = React5.useState("");
    const [loading, setLoading] = React5.useState(true);
    const [themeRevision, setThemeRevision] = React5.useState(0);
    const mermaidCode = React5.useMemo(() => {
      if (code) return code.trim();
      if (typeof children === "string") return children.trim();
      return "";
    }, [code, children]);
    React5.useEffect(() => {
      const update = () => setThemeRevision((revision) => revision + 1);
      const observer = new MutationObserver(update);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-poyraz-theme", "style"] });
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", update);
      return () => {
        observer.disconnect();
        media.removeEventListener("change", update);
      };
    }, []);
    React5.useEffect(() => {
      if (!mermaidCode) {
        setLoading(false);
        setError("No mermaid code provided.");
        return;
      }
      let cancelled = false;
      const id = chartId != null ? chartId : `poyraz-mermaid-${++idCounter}`;
      setLoading(true);
      setError("");
      getMermaid().then(async (mod) => {
        if (cancelled) return;
        try {
          const container = containerRef.current;
          if (!container) return;
          mod.default.initialize({
            startOnLoad: false,
            securityLevel: "strict",
            theme: "base",
            themeVariables: resolveMermaidTheme(container),
            flowchart: { htmlLabels: true, curve: diagramStyle === "technical" ? "linear" : "basis", padding: 12 },
            sequence: { actorMargin: 60, boxMargin: 8, noteMargin: 10, messageMargin: 30 }
          });
          const { svg: rendered } = await mod.default.render(id, mermaidCode);
          if (!cancelled) {
            setSvg(rendered);
            setLoading(false);
          }
        } catch (err) {
          if (!cancelled) {
            setError(
              err instanceof Error ? err.message : "Failed to render diagram."
            );
            setLoading(false);
          }
        }
      }).catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to load mermaid."
          );
          setLoading(false);
        }
      });
      return () => {
        cancelled = true;
      };
    }, [mermaidCode, chartId, diagramStyle, themeRevision]);
    const setRefs = React5.useCallback(
      (node) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref)
          ref.current = node;
      },
      [ref]
    );
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref: setRefs,
        className: cn(
          "relative overflow-x-auto border p-4 transition-[background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-base)]",
          surface === "solid" && "border-border bg-surface",
          surface === "soft" && "border-transparent bg-surface-subtle",
          surface === "glass" && "border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
          radius === "none" && "rounded-none",
          radius === "sm" && "rounded-sm",
          radius === "md" && "rounded-md",
          radius === "lg" && "rounded-lg",
          radius === "xl" && "rounded-xl",
          className
        )
      }, props), {
        children: [
          loading && /* @__PURE__ */ jsx("div", { role: "status", className: "flex items-center justify-center py-8 gap-3 text-sm text-muted-foreground animate-poyraz-fade-in", children: loadingContent != null ? loadingContent : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "size-4 rounded-full border-2 border-primary/25 border-t-primary animate-spin motion-reduce:animate-none" }),
            "Rendering diagram\u2026"
          ] }) }),
          error && !loading && /* @__PURE__ */ jsx("div", { className: "py-6 text-center animate-poyraz-fade-in", children: /* @__PURE__ */ jsx("div", { role: "alert", className: "inline-block rounded-md border border-invalid-border bg-invalid-muted px-3 py-2 text-xs text-destructive-muted-foreground font-mono", children: errorContent ? errorContent(error) : error }) }),
          svg && !loading && /* @__PURE__ */ jsx(
            "div",
            {
              className: "mermaid-output flex justify-center animate-poyraz-scale-in motion-reduce:animate-none [&_svg]:max-w-full",
              dangerouslySetInnerHTML: { __html: svg }
            }
          ),
          /* @__PURE__ */ jsx(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
${diagramStyle === "technical" ? `.mermaid-output .node rect,
.mermaid-output .node circle,
.mermaid-output .node ellipse,
.mermaid-output .node polygon {
  stroke-dasharray: 6, 3;
  stroke-width: 2px;
}` : ""}
.mermaid-output .cluster rect {
  ${diagramStyle === "technical" ? "stroke-dasharray: 8, 4;" : ""}
  stroke-width: 1.5px;
  rx: ${diagramStyle === "minimal" ? "2" : "10"};
  ry: ${diagramStyle === "minimal" ? "2" : "10"};
}
.mermaid-output .edgePath .path {
  stroke-width: 1.5px;
}
.mermaid-output text, .mermaid-output .label { font-family: var(--poyraz-font-primary), ui-sans-serif, system-ui, sans-serif !important; }
`
              }
            }
          )
        ]
      })
    );
  }
);
Mermaid.displayName = "Mermaid";
var Drawer = (_a) => {
  var _b = _a, {
    shouldScaleBackground = true
  } = _b, props = __objRest(_b, [
    "shouldScaleBackground"
  ]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Root,
    __spreadValues({
      shouldScaleBackground
    }, props)
  );
};
Drawer.displayName = "Drawer";
var DrawerTrigger = Drawer$1.Trigger;
var DrawerPortal = Drawer$1.Portal;
var DrawerClose = Drawer$1.Close;
var DrawerOverlay = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, tone } = _b, props = __objRest(_b, ["className", "tone"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    __spreadValues({
      ref,
      className: cn(overlayVariants({ tone }), className)
    }, props)
  );
});
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, surface, radius, overlayTone, overlayClassName, handle = true } = _b, props = __objRest(_b, ["className", "children", "surface", "radius", "overlayTone", "overlayClassName", "handle"]);
  return /* @__PURE__ */ jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsx(DrawerOverlay, { tone: overlayTone, className: overlayClassName }),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          overlaySurfaceVariants({ surface, radius }),
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col",
          "border-b-0",
          "will-change-transform",
          className
        )
      }, props), {
        children: [
          handle && /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-1.5 w-[60px] rounded-full bg-border-strong transition-colors duration-150 ease-out" }),
          children
        ]
      })
    )
  ] });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-base font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = Drawer$1.Description.displayName;
var modalContentVariants = cva(
  [
    "fixed z-50 grid gap-4 p-5",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
    "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0] motion-reduce:duration-100"
  ].join(" "),
  {
    variants: {
      size: {
        sm: "w-full max-w-xs",
        default: "w-full max-w-sm",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-2xl",
        full: "w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]"
      },
      position: {
        center: "left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        top: "left-[50%] top-[10%] translate-x-[-50%] data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[5%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[5%]"
      }
    },
    defaultVariants: {
      size: "default",
      position: "center"
    }
  }
);
var Modal = DialogPrimitive.Root;
var ModalTrigger = DialogPrimitive.Trigger;
var ModalClose = DialogPrimitive.Close;
var ModalOverlay = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, tone } = _b, props = __objRest(_b, ["className", "tone"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(overlayVariants({ tone }), className)
    }, props)
  );
});
ModalOverlay.displayName = "ModalOverlay";
var ModalContent = React5.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, size, position, surface, radius, hideClose = false, mobile = "floating", overlayTone, overlayClassName } = _b, props = __objRest(_b, ["className", "children", "size", "position", "surface", "radius", "hideClose", "mobile", "overlayTone", "overlayClassName"]);
    return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
      /* @__PURE__ */ jsx(ModalOverlay, { tone: overlayTone, className: overlayClassName }),
      /* @__PURE__ */ jsxs(
        DialogPrimitive.Content,
        __spreadProps(__spreadValues({
          ref,
          className: cn(
            overlaySurfaceVariants({ surface, radius }),
            modalContentVariants({ size, position }),
            mobile === "fullscreen" && "max-sm:inset-0 max-sm:h-dvh max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:translate-y-0 max-sm:rounded-none",
            className
          )
        }, props), {
          children: [
            children,
            !hideClose && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 cursor-pointer rounded-md p-1 opacity-70 ring-offset-background transition-all duration-150 ease-out hover:bg-accent hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
              /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
            ] })
          ]
        })
      )
    ] });
  }
);
ModalContent.displayName = "ModalContent";
var ModalHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("flex flex-col space-y-1.5 text-left", className)
    }, props)
  );
};
ModalHeader.displayName = "ModalHeader";
var ModalFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t border-border",
        className
      )
    }, props)
  );
};
ModalFooter.displayName = "ModalFooter";
var ModalTitle = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-base font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
ModalDescription.displayName = "ModalDescription";
var CommandPaletteCtx = React5.createContext({
  search: "",
  setSearch: () => {
  }
});
function CommandPalette(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [search, setSearch] = React5.useState("");
  const handleOpenChange = (open) => {
    var _a2;
    if (!open) setSearch("");
    (_a2 = props.onOpenChange) == null ? void 0 : _a2.call(props, open);
  };
  return /* @__PURE__ */ jsx(CommandPaletteCtx.Provider, { value: { search, setSearch }, children: /* @__PURE__ */ jsx(DialogPrimitive.Root, __spreadProps(__spreadValues({}, props), { onOpenChange: handleOpenChange, children })) });
}
CommandPalette.displayName = "CommandPalette";
var CommandPaletteTrigger = DialogPrimitive.Trigger;
var CommandPaletteContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, surface, radius, overlayTone, overlayClassName, mobile = "floating" } = _b, props = __objRest(_b, ["className", "children", "surface", "radius", "overlayTone", "overlayClassName", "mobile"]);
  return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx(
      DialogPrimitive.Overlay,
      {
        className: cn(overlayVariants({ tone: overlayTone }), overlayClassName)
      }
    ),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          overlaySurfaceVariants({ surface, radius }),
          "fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]",
          "overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[2%]",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[2%]",
          "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0] motion-reduce:duration-100",
          mobile === "fullscreen" && "max-sm:inset-0 max-sm:h-dvh max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:rounded-none",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx(VisuallyHidden, { children: /* @__PURE__ */ jsx(DialogPrimitive.Title, { children: "Command Palette" }) }),
          children
        ]
      })
    )
  ] });
});
CommandPaletteContent.displayName = "CommandPaletteContent";
var CommandPaletteInput = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, onValueChange } = _b, props = __objRest(_b, ["className", "onValueChange"]);
  const { search, setSearch } = React5.useContext(CommandPaletteCtx);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-2 px-4",
        "border-b border-border transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]"
      ),
      children: [
        /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-placeholder transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]" }),
        /* @__PURE__ */ jsx(
          "input",
          __spreadValues({
            ref,
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              onValueChange == null ? void 0 : onValueChange(e.target.value);
            },
            className: cn(
              "flex h-10 w-full bg-transparent py-2",
              "text-sm text-foreground placeholder:text-placeholder",
              "outline-none",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              className
            )
          }, props)
        ),
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "rounded-sm p-1 opacity-50 transition-[opacity,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:opacity-100 hover:bg-accent hover:scale-105 active:scale-95 cursor-pointer", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  );
});
CommandPaletteInput.displayName = "CommandPaletteInput";
var CommandPaletteList = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "max-h-[300px] overflow-y-auto p-2 animate-poyraz-fade-in",
        className
      ),
      role: "listbox"
    }, props)
  );
});
CommandPaletteList.displayName = "CommandPaletteList";
var CommandPaletteGroup = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, heading, children } = _b, props = __objRest(_b, ["className", "heading", "children"]);
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("py-1 animate-poyraz-fade-in", className),
      role: "group"
    }, props), {
      children: [
        heading && /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-placeholder", children: heading }),
        children
      ]
    })
  );
});
CommandPaletteGroup.displayName = "CommandPaletteGroup";
var CommandPaletteItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, shortcut, disabled, icon, description, media, size, radius } = _b, props = __objRest(_b, ["className", "children", "shortcut", "disabled", "icon", "description", "media", "size", "radius"]);
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      role: "option",
      "aria-disabled": disabled,
      className: cn(
        floatingItemVariants({ size, radius }),
        "cursor-pointer border border-transparent hover:translate-x-0.5 hover:border-border hover:bg-accent",
        disabled && "pointer-events-none opacity-40",
        className
      ),
      tabIndex: disabled ? -1 : 0
    }, props), {
      children: [
        media && /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover", children: media }),
        icon && /* @__PURE__ */ jsx("span", { className: "text-placeholder shrink-0 transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]", children: icon }),
        /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsx("span", { className: "block truncate font-medium", children }),
          description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block truncate text-xs text-muted-foreground", children: description })
        ] }),
        shortcut && /* @__PURE__ */ jsx("kbd", { className: "ml-auto text-[11px] font-mono tracking-wider text-placeholder border border-border px-1.5 py-0.5 transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]", children: shortcut })
      ]
    })
  );
});
CommandPaletteItem.displayName = "CommandPaletteItem";
var CommandPaletteEmpty = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "py-8 text-center text-sm text-placeholder animate-poyraz-fade-in",
        className
      )
    }, props)
  );
});
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";
var CommandPaletteSeparator = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("h-px bg-accent my-1 -mx-2", className)
    }, props)
  );
});
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";
var CommandPaletteFooter = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex items-center gap-4 px-4 py-2",
        "border-t border-border",
        "text-[11px] text-placeholder",
        className
      )
    }, props)
  );
});
CommandPaletteFooter.displayName = "CommandPaletteFooter";
function useCommandPalette() {
  return React5.useContext(CommandPaletteCtx);
}
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, tone } = _b, props = __objRest(_b, ["className", "tone"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(overlayVariants({ tone }), className)
    }, props)
  );
});
SheetOverlay.displayName = "SheetOverlay";
var sheetContentVariants = cva(
  [
    "fixed z-50 gap-4 p-6",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "motion-reduce:duration-100"
  ].join(" "),
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-t-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-b-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-l-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
        right: "inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-r-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children, surface, radius, overlayTone, overlayClassName, showClose = true } = _b, props = __objRest(_b, ["side", "className", "children", "surface", "radius", "overlayTone", "overlayClassName", "showClose"]);
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, { tone: overlayTone, className: overlayClassName }),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(overlaySurfaceVariants({ surface, radius }), sheetContentVariants({ side }), className)
      }, props), {
        children: [
          children,
          showClose && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 cursor-pointer rounded-md p-1 opacity-70 ring-offset-background transition-all duration-150 ease-out hover:bg-accent hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
SheetContent.displayName = "SheetContent";
var SheetHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn("flex flex-col space-y-2 text-left", className)
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-auto pt-4 border-t border-border",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight text-foreground",
        className
      )
    }, props)
  );
});
SheetTitle.displayName = "SheetTitle";
var SheetDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
SheetDescription.displayName = "SheetDescription";
function defaultFilter(option, query) {
  return option.label.toLowerCase().includes(query.toLowerCase());
}
function Autocomplete({
  options,
  value,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  placeholder = "Search\u2026",
  multiple = false,
  freeSolo = false,
  filterFn = defaultFilter,
  onSearchChange,
  loading = false,
  state = "ready",
  loadingText = "Searching\u2026",
  errorText = "Unable to load options.",
  disabled = false,
  emptyText = "No results found.",
  emptyContent,
  className,
  variant,
  radius,
  size = "md",
  dropdownSurface,
  dropdownRadius,
  itemSize = "md"
}) {
  const [internalOpen, setInternalOpen] = React5.useState(defaultOpen);
  const [internalValue, setInternalValue] = React5.useState(defaultValue);
  const [query, setQuery] = React5.useState("");
  const [highlightIndex, setHighlightIndex] = React5.useState(-1);
  const wrapperRef = React5.useRef(null);
  const inputRef = React5.useRef(null);
  const listRef = React5.useRef(null);
  const listboxId = React5.useId();
  const open = controlledOpen != null ? controlledOpen : internalOpen;
  const valueControlled = value !== void 0;
  const resolvedValue = valueControlled ? value : internalValue;
  const resolvedState = loading || state === "loading" ? "loading" : state;
  const setOpen = React5.useCallback((next) => {
    if (controlledOpen === void 0) setInternalOpen(next);
    onOpenChange == null ? void 0 : onOpenChange(next);
  }, [controlledOpen, onOpenChange]);
  const selectedValues = React5.useMemo(() => {
    if (!resolvedValue) return [];
    return Array.isArray(resolvedValue) ? resolvedValue : [resolvedValue];
  }, [resolvedValue]);
  const filtered = React5.useMemo(() => {
    if (!query) return options;
    return options.filter((o) => filterFn(o, query));
  }, [options, query, filterFn]);
  const grouped = React5.useMemo(() => {
    var _a;
    const groups = /* @__PURE__ */ new Map();
    for (const opt of filtered) {
      const key = (_a = opt.group) != null ? _a : "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(opt);
    }
    return groups;
  }, [filtered]);
  const flatFiltered = React5.useMemo(() => {
    const arr = [];
    for (const opts of grouped.values()) arr.push(...opts);
    return arr;
  }, [grouped]);
  React5.useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        if (!freeSolo) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [freeSolo]);
  React5.useEffect(() => {
    setHighlightIndex(-1);
  }, [query]);
  React5.useEffect(() => {
    var _a;
    if (highlightIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll(
        "[data-autocomplete-item]"
      );
      (_a = items[highlightIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
    }
  }, [highlightIndex]);
  const handleSelect = (optionValue) => {
    var _a, _b;
    if (multiple) {
      const next = selectedValues.includes(optionValue) ? selectedValues.filter((v) => v !== optionValue) : [...selectedValues, optionValue];
      if (!valueControlled) setInternalValue(next);
      onValueChange == null ? void 0 : onValueChange(next);
    } else {
      if (!valueControlled) setInternalValue(optionValue);
      onValueChange == null ? void 0 : onValueChange(optionValue);
      const label = (_b = (_a = options.find((o) => o.value === optionValue)) == null ? void 0 : _a.label) != null ? _b : optionValue;
      setQuery(label);
      setOpen(false);
    }
  };
  const handleRemove = (val) => {
    if (multiple) {
      const next = selectedValues.filter((v) => v !== val);
      if (!valueControlled) setInternalValue(next);
      onValueChange == null ? void 0 : onValueChange(next);
    }
  };
  const handleInputChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    onSearchChange == null ? void 0 : onSearchChange(q);
    if (!open) setOpen(true);
  };
  const findEnabled = (start, direction) => {
    var _a;
    if (!flatFiltered.length) return -1;
    let index = start;
    for (let count = 0; count < flatFiltered.length; count += 1) {
      index = (index + direction + flatFiltered.length) % flatFiltered.length;
      if (!((_a = flatFiltered[index]) == null ? void 0 : _a.disabled)) return index;
    }
    return -1;
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => findEnabled(i, 1));
      if (!open) setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => findEnabled(i < 0 ? 0 : i, -1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightIndex(findEnabled(-1, 1));
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightIndex(findEnabled(0, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && flatFiltered[highlightIndex]) {
        const opt = flatFiltered[highlightIndex];
        if (!opt.disabled) handleSelect(opt.value);
      } else if (freeSolo && query) {
        const next = multiple ? [...selectedValues, query] : query;
        if (!valueControlled) setInternalValue(next);
        onValueChange == null ? void 0 : onValueChange(next);
        if (!multiple) setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Tab") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && multiple && selectedValues.length > 0) {
      const next = selectedValues.slice(0, -1);
      if (!valueControlled) setInternalValue(next);
      onValueChange == null ? void 0 : onValueChange(next);
    }
  };
  React5.useEffect(() => {
    var _a;
    if (!multiple && selectedValues.length > 0 && !open) {
      const label = (_a = options.find((o) => o.value === selectedValues[0])) == null ? void 0 : _a.label;
      if (label) setQuery(label);
    }
  }, [selectedValues, multiple, open, options]);
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, "data-slot": "autocomplete", "data-state": resolvedState, className: cn("relative w-full", className), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          fieldVariants({ variant, radius }),
          "flex flex-wrap items-center gap-1.5 min-h-[36px] w-full",
          "px-3",
          size === "sm" && "min-h-8 py-1",
          size === "md" && "min-h-9 py-1.5",
          size === "lg" && "min-h-11 py-2",
          "transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
          open && "border-primary ring-2 ring-ring ring-offset-2",
          disabled && "opacity-40 cursor-not-allowed"
        ),
        onClick: () => {
          var _a;
          if (!disabled) {
            (_a = inputRef.current) == null ? void 0 : _a.focus();
            setOpen(true);
          }
        },
        children: [
          multiple && selectedValues.map((val) => {
            var _a, _b;
            const label = (_b = (_a = options.find((o) => o.value === val)) == null ? void 0 : _a.label) != null ? _b : val;
            return /* @__PURE__ */ jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border border-border-strong bg-muted text-secondary-foreground animate-poyraz-scale-in",
                children: [
                  label,
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "ml-0.5 hover:text-primary transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:scale-110 active:scale-95 cursor-pointer",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleRemove(val);
                      },
                      "aria-label": `Remove ${label}`,
                      children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
                    }
                  )
                ]
              },
              val
            );
          }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center gap-2 min-w-[80px]", children: [
            /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-placeholder" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: handleInputChange,
                onFocus: () => setOpen(true),
                onKeyDown: handleKeyDown,
                placeholder: multiple && selectedValues.length > 0 ? "" : placeholder,
                disabled,
                className: cn(
                  "flex-1 bg-transparent text-sm text-foreground placeholder:text-placeholder",
                  "outline-none border-none p-0",
                  "disabled:cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": open,
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
                "aria-controls": open ? listboxId : void 0,
                "aria-activedescendant": highlightIndex >= 0 ? `${listboxId}-option-${highlightIndex}` : void 0,
                autoComplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "h-4 w-4 shrink-0 text-placeholder transition-transform duration-200 ease-out",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs(
      "div",
      {
        ref: listRef,
        id: listboxId,
        role: "listbox",
        className: cn(
          floatingSurfaceVariants({ surface: dropdownSurface, radius: dropdownRadius }),
          "absolute z-50 mt-1 w-full max-h-[240px] overflow-y-auto",
          "origin-top animate-in fade-in-0 slide-in-from-top-2 [--poyraz-enter-scale:0.98] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-enter-translate-y:0]"
        ),
        children: [
          resolvedState === "loading" && /* @__PURE__ */ jsxs("div", { role: "status", "aria-live": "polite", className: "flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground animate-poyraz-fade-in", children: [
            /* @__PURE__ */ jsx("div", { className: "size-4 rounded-full border-2 border-primary/25 border-t-primary animate-spin motion-reduce:animate-none" }),
            loadingText
          ] }),
          resolvedState === "error" && /* @__PURE__ */ jsx("div", { role: "alert", className: "px-3 py-6 text-center text-sm text-destructive-muted-foreground animate-poyraz-fade-in", children: errorText }),
          resolvedState === "ready" && flatFiltered.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-3 py-6 text-center text-sm text-placeholder animate-poyraz-fade-in", children: emptyContent != null ? emptyContent : emptyText }),
          resolvedState === "ready" && Array.from(grouped.entries()).map(([group, opts]) => /* @__PURE__ */ jsxs(
            "div",
            {
              role: "group",
              className: "animate-poyraz-fade-in",
              children: [
                group && /* @__PURE__ */ jsx("div", { className: "px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-placeholder border-b border-accent", children: group }),
                opts.map((opt) => {
                  const isSelected = selectedValues.includes(opt.value);
                  const flatIdx = flatFiltered.indexOf(opt);
                  const isHighlighted = flatIdx === highlightIndex;
                  return /* @__PURE__ */ jsxs(
                    "div",
                    {
                      id: `${listboxId}-option-${flatIdx}`,
                      "data-autocomplete-item": true,
                      role: "option",
                      "aria-selected": isSelected,
                      "aria-disabled": opt.disabled,
                      className: cn(
                        floatingItemVariants({ size: itemSize, radius: "md" }),
                        "cursor-pointer border border-transparent",
                        isHighlighted && "bg-muted border-border translate-x-0.5",
                        !isHighlighted && "hover:bg-muted hover:border-border hover:translate-x-0.5",
                        opt.disabled && "pointer-events-none opacity-40"
                      ),
                      onClick: () => {
                        if (!opt.disabled) handleSelect(opt.value);
                      },
                      onMouseEnter: () => setHighlightIndex(flatIdx),
                      children: [
                        opt.media && /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover", children: opt.media }),
                        /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsx("span", { className: "block truncate font-medium", children: opt.label }),
                          opt.description && /* @__PURE__ */ jsx("span", { className: "mt-0.5 block truncate text-xs text-muted-foreground", children: opt.description })
                        ] }),
                        isSelected && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0 text-primary animate-poyraz-scale-in" })
                      ]
                    },
                    opt.value
                  );
                })
              ]
            },
            group || "__ungrouped"
          ))
        ]
      }
    )
  ] });
}
Autocomplete.displayName = "Autocomplete";
var ArticleCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { author, category, className, date, excerpt, href, image, readTime, title } = _b, props = __objRest(_b, ["author", "category", "className", "date", "excerpt", "href", "image", "readTime", "title"]);
  const content = /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ ref, variant: "interactive", className: cn("group overflow-hidden", className) }, props), { children: [
    image && /* @__PURE__ */ jsx(CardImage, { children: /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" }) }),
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardHeading, { children: [
      category && /* @__PURE__ */ jsx(Badge, { size: "sm", variant: "outline", className: "mb-1", children: category }),
      /* @__PURE__ */ jsx(CardTitle, { children: title }),
      excerpt && /* @__PURE__ */ jsx(CardDescription, { children: excerpt })
    ] }) }),
    (author || date || readTime) && /* @__PURE__ */ jsx(CardFooter, { className: "text-xs text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      (author == null ? void 0 : author.avatar) && /* @__PURE__ */ jsx("img", { src: author.avatar, alt: "", className: "size-6 rounded-full object-cover" }),
      author && /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: author.name }),
      date && /* @__PURE__ */ jsx("span", { children: date }),
      readTime && /* @__PURE__ */ jsx("span", { children: readTime })
    ] }) })
  ] }));
  return href ? /* @__PURE__ */ jsx("a", { href, className: "block text-inherit no-underline", children: content }) : content;
});
ArticleCard.displayName = "ArticleCard";
var ImageCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { badge, className, description, href, image, title } = _b, props = __objRest(_b, ["badge", "className", "description", "href", "image", "title"]);
  const content = /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ ref, variant: "interactive", className: cn("group relative aspect-[4/3] overflow-hidden", className) }, props), { children: [
    /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "absolute inset-0 size-full object-cover transition-transform duration-500 ease-[var(--poyraz-motion-ease-out)] group-hover:scale-105" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-overlay via-overlay/20 to-transparent transition-opacity group-hover:opacity-90" }),
    badge && /* @__PURE__ */ jsx(Badge, { className: "absolute left-3 top-3 z-10", children: badge }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 z-10 translate-y-1 p-4 text-primary-foreground transition-transform duration-300 group-hover:translate-y-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold leading-tight", children: title }),
      description && /* @__PURE__ */ jsx("p", { className: "mt-1 line-clamp-2 text-xs opacity-80", children: description })
    ] })
  ] }));
  return href ? /* @__PURE__ */ jsx("a", { href, className: "block text-inherit no-underline", children: content }) : content;
});
ImageCard.displayName = "ImageCard";
var NewsCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { category, className, date, href, image, title } = _b, props = __objRest(_b, ["category", "className", "date", "href", "image", "title"]);
  const content = /* @__PURE__ */ jsx(Card, __spreadProps(__spreadValues({ ref, variant: "interactive", className: cn("group h-fit self-start overflow-hidden", className) }, props), { children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-28", children: [
    image && /* @__PURE__ */ jsx("div", { className: "w-28 shrink-0 overflow-hidden border-r border-border", children: /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "size-full object-cover transition-transform duration-300 group-hover:scale-105" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col justify-center gap-2 p-4", children: [
      category && /* @__PURE__ */ jsx(Badge, { size: "sm", variant: "outline", children: category }),
      /* @__PURE__ */ jsx("h3", { className: "line-clamp-2 text-sm font-semibold leading-snug", children: title }),
      date && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: date })
    ] })
  ] }) }));
  return href ? /* @__PURE__ */ jsx("a", { href, className: "block text-inherit no-underline", children: content }) : content;
});
NewsCard.displayName = "NewsCard";
var StatsCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { chart, className, icon, label, trend = "neutral", trendValue, value } = _b, props = __objRest(_b, ["chart", "className", "icon", "label", "trend", "trendValue", "value"]);
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  return /* @__PURE__ */ jsx(Card, __spreadProps(__spreadValues({ ref, className: cn("group", className) }, props), { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-muted-foreground", children: label }),
      icon && /* @__PURE__ */ jsx("span", { className: "flex size-9 items-center justify-center rounded-lg bg-surface-subtle text-primary transition-transform group-hover:scale-105", children: icon })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-3xl font-bold tracking-tight", children: value }),
    trendValue && /* @__PURE__ */ jsxs("div", { className: cn("mt-1.5 flex items-center gap-1 text-xs font-medium", trend === "up" && "text-success-icon", trend === "down" && "text-destructive", trend === "neutral" && "text-muted-foreground"), children: [
      /* @__PURE__ */ jsx(TrendIcon, { className: "size-3.5" }),
      trendValue
    ] }),
    chart && /* @__PURE__ */ jsx("div", { className: "mt-4 h-14 text-primary", children: chart })
  ] }) }));
});
StatsCard.displayName = "StatsCard";
function StarRating(_a) {
  var _b = _a, { className, label, max = 5, rating } = _b, props = __objRest(_b, ["className", "label", "max", "rating"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ className: cn("flex items-center gap-0.5 text-warning-icon", className), "aria-label": label != null ? label : `${rating} out of ${max} stars` }, props), { children: Array.from({ length: max }, (_, index) => /* @__PURE__ */ jsx(Star, { className: cn("size-3.5", index < Math.round(rating) ? "fill-current" : "fill-transparent text-border"), "aria-hidden": "true" }, index)) }));
}
var TestimonialCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { author, avatar, className, quote, rating, role } = _b, props = __objRest(_b, ["author", "avatar", "className", "quote", "rating", "role"]);
  return /* @__PURE__ */ jsx(Card, __spreadProps(__spreadValues({ ref, className: cn("group h-full", className) }, props), { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex h-full flex-1 flex-col p-5", children: [
    /* @__PURE__ */ jsx("span", { className: "font-secondary text-4xl leading-none text-primary", children: "\u201C" }),
    /* @__PURE__ */ jsx("blockquote", { className: "mt-1 text-sm leading-relaxed text-secondary-foreground", children: quote }),
    rating != null && /* @__PURE__ */ jsx(StarRating, { rating, className: "mt-3" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-auto flex items-center gap-3 border-t border-border pt-4", children: [
      avatar && /* @__PURE__ */ jsx("img", { src: avatar, alt: "", className: "size-9 rounded-full object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-semibold", children: author }),
        role && /* @__PURE__ */ jsx("div", { className: "truncate text-xs text-muted-foreground", children: role })
      ] })
    ] })
  ] }) }));
});
TestimonialCard.displayName = "TestimonialCard";
var PricingCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { action, className, description, features, highlighted, name, period, popular, price, title } = _b, props = __objRest(_b, ["action", "className", "description", "features", "highlighted", "name", "period", "popular", "price", "title"]);
  var _a2, _b2;
  const featured = (_a2 = popular != null ? popular : highlighted) != null ? _a2 : false;
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ ref, variant: featured ? "interactive" : "default", className: cn(featured && "border-primary/35 shadow-md", className) }, props), { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardHeading, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CardTitle, { children: (_b2 = name != null ? name : title) != null ? _b2 : "Plan" }),
        featured && /* @__PURE__ */ jsx(Badge, { children: "Popular" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: price }),
        period && /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "/",
          period
        ] })
      ] }),
      description && /* @__PURE__ */ jsx(CardDescription, { children: description })
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
      /* @__PURE__ */ jsx(Check, { className: "mt-0.5 size-4 shrink-0 text-success-icon" }),
      feature
    ] }, feature)) }) }),
    action && /* @__PURE__ */ jsx(CardFooter, { children: action })
  ] }));
});
PricingCard.displayName = "PricingCard";
var ProductCard = React5.forwardRef((_a, ref) => {
  var _b = _a, { action, badge, className, href, image, originalPrice, price, rating, title } = _b, props = __objRest(_b, ["action", "badge", "className", "href", "image", "originalPrice", "price", "rating", "title"]);
  const content = /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ ref, variant: "interactive", className: cn("group overflow-hidden", className) }, props), { children: [
    /* @__PURE__ */ jsxs(CardImage, { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { src: image, alt: "", className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" }),
      badge && /* @__PURE__ */ jsx(Badge, { className: "absolute right-2 top-2", children: badge })
    ] }),
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardHeading, { children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "line-clamp-1", children: title }),
      rating != null && /* @__PURE__ */ jsx(StarRating, { rating }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: price }),
        originalPrice && /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground line-through", children: originalPrice })
      ] })
    ] }) }),
    action && /* @__PURE__ */ jsx(CardFooter, { children: action })
  ] }));
  return href ? /* @__PURE__ */ jsx("a", { href, className: "block text-inherit no-underline", children: content }) : content;
});
ProductCard.displayName = "ProductCard";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, ArticleCard, Autocomplete, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Calendar, CommandPalette, CommandPaletteContent, CommandPaletteEmpty, CommandPaletteFooter, CommandPaletteGroup, CommandPaletteInput, CommandPaletteItem, CommandPaletteList, CommandPaletteSeparator, CommandPaletteTrigger, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, ImageCard, Mermaid, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalTitle, ModalTrigger, NewsCard, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, PricingCard, ProductCard, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, StatsCard, Tabs, TabsContent, TabsList, TabsTrigger, TestimonialCard, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, modalContentVariants, sheetContentVariants, useCommandPalette, useFormField };
