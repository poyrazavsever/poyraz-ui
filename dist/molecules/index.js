"use client";
import * as React21 from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Search, X, ChevronDown, AlertCircle, AlertTriangle, CheckCircle2, Info, Terminal, ChevronRight, Check, Circle, ChevronUp, MoreHorizontal, ChevronLeft, CalendarIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
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

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn("border-b-2 border-dashed border-slate-200", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline hover:decoration-dashed [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
var alertVariants = cva(
  [
    "relative w-full border-2 border-dashed p-4",
    "rounded-none shadow-none",
    // Icon positioning
    "[&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4"
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-white text-slate-950 border-slate-300",
          "[&>svg]:text-slate-950"
        ].join(" "),
        info: [
          "bg-blue-50 text-blue-800 border-blue-400",
          "[&>svg]:text-blue-600"
        ].join(" "),
        success: [
          "bg-green-50 text-green-800 border-green-400",
          "[&>svg]:text-green-600"
        ].join(" "),
        warning: [
          "bg-yellow-50 text-yellow-800 border-yellow-400",
          "[&>svg]:text-yellow-600"
        ].join(" "),
        destructive: [
          "bg-red-50 text-red-800 border-red-400",
          "[&>svg]:text-red-600"
        ].join(" ")
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var variantIcons = {
  default: Terminal,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle
};
var Alert = React21.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "default", icon, children } = _b, props = __objRest(_b, ["className", "variant", "icon", "children"]);
    const IconComponent = variantIcons[variant != null ? variant : "default"];
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: "alert",
        className: cn(alertVariants({ variant }), className)
      }, props), {
        children: [
          icon !== void 0 ? icon : /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" }),
          children
        ]
      })
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h5",
    __spreadValues({
      ref,
      className: cn(
        "mb-1 font-bold leading-none tracking-tight uppercase text-sm",
        className
      )
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";
var Breadcrumb = React21.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx("nav", __spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ol",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React21.forwardRef((_a, ref) => {
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
var BreadcrumbLink = React21.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? "span" : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    __spreadValues({
      ref,
      className: cn("transition-colors hover:text-slate-950", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-slate-950", className)
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
      className: cn("[&>svg]:size-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsx(ChevronRight, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxs(
    "span",
    __spreadProps(__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-dashed border-slate-200 bg-white p-6 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-none",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500", children: [
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
var DialogTitle = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-slate-100", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Label2 = React21.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "label",
      __spreadValues({
        ref,
        className: cn(
          "text-sm font-semibold tracking-wide uppercase leading-none",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label2.displayName = "Label";
var Form = FormProvider;
var FormFieldContext = React21.createContext(
  {}
);
var FormField = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, __spreadValues({}, props)) });
};
var useFormField = () => {
  const fieldContext = React21.useContext(FormFieldContext);
  const itemContext = React21.useContext(FormItemContext);
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
var FormItemContext = React21.createContext(
  {}
);
var FormItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React21.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("space-y-2", className) }, props)) });
});
FormItem.displayName = "FormItem";
var FormLabel = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label2,
    __spreadValues({
      ref,
      className: cn(error && "text-red-600", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React21.forwardRef((_a, ref) => {
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
var FormDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-slate-500", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React21.forwardRef((_a, ref) => {
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
      className: cn("text-sm font-medium text-red-600", className)
    }, props), {
      children: body
    })
  );
});
FormMessage.displayName = "FormMessage";
var buttonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    // Typography
    "text-sm font-semibold tracking-wide uppercase",
    // Shape — brutalist: no rounding, no shadow, ever
    "rounded-none shadow-none",
    // Border — dashed is the DNA of this design system
    "border-2 border-dashed",
    // Interaction
    "cursor-pointer select-none",
    // Transitions
    "transition-all duration-200 ease-out",
    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed",
    // Active press
    "active:scale-[0.97] active:duration-75"
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-red-600 text-white border-red-900",
          "hover:bg-red-700 hover:border-red-950",
          "active:bg-red-800"
        ].join(" "),
        secondary: [
          "bg-white text-slate-900 border-slate-400",
          "hover:bg-slate-50 hover:border-slate-900 hover:text-slate-950",
          "active:bg-slate-100"
        ].join(" "),
        outline: [
          "bg-transparent text-slate-900 border-slate-900",
          "hover:bg-slate-900 hover:text-white hover:border-slate-900",
          "active:bg-slate-800"
        ].join(" "),
        destructive: [
          "bg-red-500 text-white border-red-800",
          "hover:bg-red-600 hover:border-red-900",
          "active:bg-red-700"
        ].join(" "),
        ghost: [
          "bg-transparent text-slate-700 border-transparent",
          "hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300",
          "active:bg-slate-200"
        ].join(" "),
        link: [
          "bg-transparent text-red-600 border-red-600",
          "decoration-dashed underline-offset-4",
          "hover:underline hover:text-red-700 hover:border-red-700",
          "active:text-red-800",
          // px-0 so the link variant sits naturally in text
          "px-0 h-auto"
        ].join(" ")
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 py-1.5 text-xs",
        lg: "h-14 px-10 py-3 text-base",
        icon: "h-10 w-10 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React21.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "asChild",
      "loading",
      "disabled",
      "children"
    ]);
    const Component = asChild ? Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsx(
      Component,
      __spreadProps(__spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0
      }, props), {
        children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { children })
        ] }) : children
      })
    );
  }
);
Button.displayName = "Button";
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
var PaginationContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-row flex-wrap items-center justify-center gap-1",
        className
      )
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React21.forwardRef((_a, ref) => {
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
          variant: isActive ? "outline" : "ghost",
          // Brutalist: Active is outline (dashed border), Ghost is text
          size
        }),
        // Override for brutalist "active" state explicitly if needed, but button variant handles it.
        // However, outline button has border-slate-900.
        // Let's ensure active state is distinct.
        isActive && "bg-slate-100 border-slate-900",
        // Optional override
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
      className: cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
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
      className: cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Next" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
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
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 border-2 border-dashed border-slate-200 bg-white p-4 text-slate-950 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "flex h-11 w-full items-center justify-between border-2 border-dashed border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        "rounded-none shadow-none",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React21.forwardRef((_a, ref) => {
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
var SelectScrollDownButton = React21.forwardRef((_a, ref) => {
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
var SelectContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React21.forwardRef((_a, ref) => {
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
var SelectItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-slate-100", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Toaster = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Toaster$1,
    __spreadValues({
      className: cn("toaster group", className),
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: cn(
            // Layout
            "flex items-start gap-3 w-full p-4",
            // Brutalist DNA
            "border-2 border-dashed border-slate-300 rounded-none shadow-none",
            // Colors
            "bg-white text-slate-950",
            // Typography
            "text-sm font-medium"
          ),
          title: "font-bold text-sm",
          description: "text-slate-500 text-sm mt-1",
          actionButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-900 rounded-none shadow-none",
            "bg-slate-900 text-white",
            "hover:bg-slate-800 transition-colors",
            "cursor-pointer"
          ),
          cancelButton: cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-300 rounded-none shadow-none",
            "bg-white text-slate-600",
            "hover:bg-slate-50 transition-colors",
            "cursor-pointer"
          ),
          closeButton: cn(
            "rounded-none border-2 border-dashed border-slate-300",
            "hover:border-slate-500 transition-colors"
          ),
          // Variant-specific styles
          success: "!border-green-400 !bg-green-50 !text-green-800",
          error: "!border-red-400 !bg-red-50 !text-red-800",
          warning: "!border-yellow-400 !bg-yellow-50 !text-yellow-800",
          info: "!border-blue-400 !bg-blue-50 !text-blue-800"
        }
      }
    }, props)
  );
};
var Tabs = TabsPrimitive.Root;
var TabsList = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-auto min-h-[44px] items-center p-0 text-slate-500",
        "w-full overflow-x-auto scrollbar-none",
        "flex-wrap sm:flex-nowrap",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap px-6 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        // Brutalist state
        "border-2 border-transparent border-b-2 border-b-transparent",
        // Base
        "data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:border-2 data-[state=active]:border-dashed data-[state=active]:border-slate-300 data-[state=active]:border-b-transparent data-[state=active]:shadow-none",
        // Actually standard tabs usually look like cards or underlined.
        // Let's go for specific brutalist look: All triggers have borders?
        // Let's stick to "active has border", or standard segment style.
        // Brutalist approach: Active gets dashed border. Inactive is just text?
        // Let's try: Active = dashed border, white bg. Inactive = transparent.
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
        "p-4 border-2 border-dashed border-slate-200",
        // Wrap content in a box? Or just let it be.
        // User asked for "Molecules". Tabs Content usually contains other things.
        // I'll add a default border to the content area to make it distinct.
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden border-2 border-dashed border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx(
    HoverCardPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 border-2 border-dashed border-slate-200 bg-white p-4 text-slate-950 shadow-none outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
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
function Calendar({
  selected,
  onSelect,
  minDate,
  maxDate,
  className
}) {
  const [viewYear, setViewYear] = React21.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getFullYear()
  );
  const [viewMonth, setViewMonth] = React21.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getMonth()
  );
  const [view, setView] = React21.useState("days");
  const [decadeStart, setDecadeStart] = React21.useState(() => {
    const y = (selected != null ? selected : /* @__PURE__ */ new Date()).getFullYear();
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
      const sel = selected && isSameDay(date, selected);
      const today = isToday(date);
      const disabled = isDisabled(date);
      cells.push(
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            disabled,
            onClick: () => onSelect == null ? void 0 : onSelect(date),
            className: cn(
              "h-9 w-9 text-sm font-medium transition-colors duration-150 cursor-pointer",
              "flex items-center justify-center",
              "hover:bg-slate-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
              today && !sel && "border-2 border-dashed border-red-600",
              sel && "bg-red-600 text-white hover:bg-red-700",
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
            className: "h-8 w-8",
            onClick: prevMonth,
            "aria-label": "Previous month",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setView("months"),
            className: cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-slate-100 transition-colors",
              "border-b-2 border-dashed border-transparent hover:border-slate-300"
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
            className: "h-8 w-8",
            onClick: nextMonth,
            "aria-label": "Next month",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 mb-1", children: DAYS.map((d) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-9 w-9 flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-slate-400",
          children: d
        },
        d
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7", children: cells })
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
            className: "h-8 w-8",
            onClick: () => setViewYear((y) => y - 1),
            "aria-label": "Previous year",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
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
              "px-2 py-1 hover:bg-slate-100 transition-colors",
              "border-b-2 border-dashed border-transparent hover:border-slate-300"
            ),
            children: viewYear
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "h-8 w-8",
            onClick: () => setViewYear((y) => y + 1),
            "aria-label": "Next year",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1", children: MONTHS_SHORT.map((m, i) => {
        const isCurrent = i === now.getMonth() && viewYear === now.getFullYear();
        const isSelected = selected && i === selected.getMonth() && viewYear === selected.getFullYear();
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setViewMonth(i);
              setView("days");
            },
            className: cn(
              "h-10 text-sm font-medium transition-colors duration-150 cursor-pointer",
              "flex items-center justify-center",
              "hover:bg-slate-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
              isCurrent && !isSelected && "border-2 border-dashed border-red-600",
              isSelected && "bg-red-600 text-white hover:bg-red-700"
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
            className: "h-8 w-8",
            onClick: () => setDecadeStart((d) => d - 12),
            "aria-label": "Previous decade",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
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
            className: "h-8 w-8",
            onClick: () => setDecadeStart((d) => d + 12),
            "aria-label": "Next decade",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-1", children: years.map((y) => {
        const isCurrent = y === now.getFullYear();
        const isSelected = selected && y === selected.getFullYear();
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              setViewYear(y);
              setView("months");
            },
            className: cn(
              "h-10 text-sm font-medium transition-colors duration-150 cursor-pointer",
              "flex items-center justify-center",
              "hover:bg-slate-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
              isCurrent && !isSelected && "border-2 border-dashed border-red-600",
              isSelected && "bg-red-600 text-white hover:bg-red-700"
            ),
            children: y
          },
          y
        );
      }) })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("p-3 select-none", className), children: [
    view === "days" && renderDays(),
    view === "months" && renderMonths(),
    view === "years" && renderYears()
  ] });
}
Calendar.displayName = "Calendar";
function defaultFormat(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function DatePicker({
  selected,
  onSelect,
  minDate,
  maxDate,
  placeholder = "Pick a date",
  formatDate = defaultFormat,
  className,
  disabled = false
}) {
  const [open, setOpen] = React21.useState(false);
  const handleSelect = (date) => {
    onSelect == null ? void 0 : onSelect(date);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: "outline",
        disabled,
        className: cn(
          "w-full justify-start text-left font-normal",
          !selected && "text-slate-400",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(CalendarIcon, { className: "mr-2 h-4 w-4 shrink-0" }),
          selected ? formatDate(selected) : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsx(
      Calendar,
      {
        selected,
        onSelect: handleSelect,
        minDate,
        maxDate
      }
    ) })
  ] });
}
DatePicker.displayName = "DatePicker";
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
var DrawerOverlay = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    __spreadValues({
      ref,
      className: cn("fixed inset-0 z-50 bg-black/40", className)
    }, props)
  );
});
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col",
          "bg-white",
          "border-t-2 border-dashed border-slate-200",
          "rounded-none shadow-none",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-1.5 w-[60px] bg-slate-300" }),
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
var DrawerTitle = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500", className)
    }, props)
  );
});
DrawerDescription.displayName = Drawer$1.Description.displayName;
var modalContentVariants = cva(
  [
    "fixed z-50 grid gap-4 bg-white p-6",
    "border-2 border-dashed border-slate-200",
    "rounded-none shadow-none",
    "duration-200",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
  ].join(" "),
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        default: "w-full max-w-lg",
        lg: "w-full max-w-2xl",
        xl: "w-full max-w-4xl",
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
var ModalOverlay = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
ModalOverlay.displayName = "ModalOverlay";
var ModalContent = React21.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, size, position, hideClose = false } = _b, props = __objRest(_b, ["className", "children", "size", "position", "hideClose"]);
    return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
      /* @__PURE__ */ jsx(ModalOverlay, {}),
      /* @__PURE__ */ jsxs(
        DialogPrimitive.Content,
        __spreadProps(__spreadValues({
          ref,
          className: cn(modalContentVariants({ size, position }), className)
        }, props), {
          children: [
            children,
            !hideClose && /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none cursor-pointer", children: [
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
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
ModalFooter.displayName = "ModalFooter";
var ModalTitle = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500", className)
    }, props)
  );
});
ModalDescription.displayName = "ModalDescription";
var CommandPaletteCtx = React21.createContext({
  search: "",
  setSearch: () => {
  }
});
function CommandPalette(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [search, setSearch] = React21.useState("");
  const handleOpenChange = (open) => {
    var _a2;
    if (!open) setSearch("");
    (_a2 = props.onOpenChange) == null ? void 0 : _a2.call(props, open);
  };
  return /* @__PURE__ */ jsx(CommandPaletteCtx.Provider, { value: { search, setSearch }, children: /* @__PURE__ */ jsx(DialogPrimitive.Root, __spreadProps(__spreadValues({}, props), { onOpenChange: handleOpenChange, children })) });
}
CommandPalette.displayName = "CommandPalette";
var CommandPaletteTrigger = DialogPrimitive.Trigger;
var CommandPaletteContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx(
      DialogPrimitive.Overlay,
      {
        className: cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]",
          "bg-white",
          "border-2 border-dashed border-slate-200",
          "rounded-none shadow-none",
          "overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[2%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[2%]",
          "duration-200",
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
var CommandPaletteInput = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, onValueChange } = _b, props = __objRest(_b, ["className", "onValueChange"]);
  const { search, setSearch } = React21.useContext(CommandPaletteCtx);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-2 px-4",
        "border-b-2 border-dashed border-slate-200"
      ),
      children: [
        /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-slate-400" }),
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
              "flex h-12 w-full bg-transparent py-3",
              "text-sm text-slate-900 placeholder:text-slate-400",
              "outline-none",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              className
            )
          }, props)
        ),
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "rounded-none p-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  );
});
CommandPaletteInput.displayName = "CommandPaletteInput";
var CommandPaletteList = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto p-2", className),
      role: "listbox"
    }, props)
  );
});
CommandPaletteList.displayName = "CommandPaletteList";
var CommandPaletteGroup = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, heading, children } = _b, props = __objRest(_b, ["className", "heading", "children"]);
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn("py-1", className), role: "group" }, props), { children: [
    heading && /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400", children: heading }),
    children
  ] }));
});
CommandPaletteGroup.displayName = "CommandPaletteGroup";
var CommandPaletteItem = React21.forwardRef((_a, ref) => {
  var _b = _a, { className, children, shortcut, disabled, icon } = _b, props = __objRest(_b, ["className", "children", "shortcut", "disabled", "icon"]);
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      role: "option",
      "aria-disabled": disabled,
      className: cn(
        "flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer select-none",
        "border-2 border-dashed border-transparent",
        "transition-colors duration-100",
        "hover:bg-slate-50 hover:border-slate-200",
        "focus:bg-slate-50 focus:border-slate-200 focus:outline-none",
        disabled && "pointer-events-none opacity-40",
        className
      ),
      tabIndex: disabled ? -1 : 0
    }, props), {
      children: [
        icon && /* @__PURE__ */ jsx("span", { className: "text-slate-400 shrink-0", children: icon }),
        /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children }),
        shortcut && /* @__PURE__ */ jsx("kbd", { className: "ml-auto text-[11px] font-mono tracking-wider text-slate-400 border border-dashed border-slate-200 px-1.5 py-0.5", children: shortcut })
      ]
    })
  );
});
CommandPaletteItem.displayName = "CommandPaletteItem";
var CommandPaletteEmpty = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("py-8 text-center text-sm text-slate-400", className)
    }, props)
  );
});
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";
var CommandPaletteSeparator = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("h-px bg-slate-100 my-1 -mx-2", className)
    }, props)
  );
});
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";
var CommandPaletteFooter = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex items-center gap-4 px-4 py-2",
        "border-t-2 border-dashed border-slate-200",
        "text-[11px] text-slate-400",
        className
      )
    }, props)
  );
});
CommandPaletteFooter.displayName = "CommandPaletteFooter";
function useCommandPalette() {
  return React21.useContext(CommandPaletteCtx);
}
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
SheetOverlay.displayName = "SheetOverlay";
var sheetContentVariants = cva(
  [
    "fixed z-50 gap-4 bg-white p-6",
    "border-2 border-dashed border-slate-200",
    "rounded-none shadow-none",
    "transition ease-in-out",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:duration-300 data-[state=closed]:duration-200"
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
var SheetContent = React21.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = __objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(sheetContentVariants({ side }), className)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none cursor-pointer", children: [
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
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-auto pt-4 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight text-slate-900",
        className
      )
    }, props)
  );
});
SheetTitle.displayName = "SheetTitle";
var SheetDescription = React21.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500", className)
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
  onValueChange,
  placeholder = "Search\u2026",
  multiple = false,
  freeSolo = false,
  filterFn = defaultFilter,
  onSearchChange,
  loading = false,
  disabled = false,
  emptyText = "No results found.",
  className
}) {
  const [open, setOpen] = React21.useState(false);
  const [query, setQuery] = React21.useState("");
  const [highlightIndex, setHighlightIndex] = React21.useState(-1);
  const wrapperRef = React21.useRef(null);
  const inputRef = React21.useRef(null);
  const listRef = React21.useRef(null);
  const selectedValues = React21.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);
  const filtered = React21.useMemo(() => {
    if (!query) return options;
    return options.filter((o) => filterFn(o, query));
  }, [options, query, filterFn]);
  const grouped = React21.useMemo(() => {
    var _a;
    const groups = /* @__PURE__ */ new Map();
    for (const opt of filtered) {
      const key = (_a = opt.group) != null ? _a : "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(opt);
    }
    return groups;
  }, [filtered]);
  const flatFiltered = React21.useMemo(() => {
    const arr = [];
    for (const opts of grouped.values()) arr.push(...opts);
    return arr;
  }, [grouped]);
  React21.useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        if (!freeSolo) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [freeSolo]);
  React21.useEffect(() => {
    setHighlightIndex(-1);
  }, [query]);
  React21.useEffect(() => {
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
      onValueChange == null ? void 0 : onValueChange(next);
    } else {
      onValueChange == null ? void 0 : onValueChange(optionValue);
      const label = (_b = (_a = options.find((o) => o.value === optionValue)) == null ? void 0 : _a.label) != null ? _b : optionValue;
      setQuery(label);
      setOpen(false);
    }
  };
  const handleRemove = (val) => {
    if (multiple) {
      onValueChange == null ? void 0 : onValueChange(selectedValues.filter((v) => v !== val));
    }
  };
  const handleInputChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    onSearchChange == null ? void 0 : onSearchChange(q);
    if (!open) setOpen(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      if (!open) setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && flatFiltered[highlightIndex]) {
        const opt = flatFiltered[highlightIndex];
        if (!opt.disabled) handleSelect(opt.value);
      } else if (freeSolo && query) {
        onValueChange == null ? void 0 : onValueChange(multiple ? [...selectedValues, query] : query);
        if (!multiple) setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && multiple && selectedValues.length > 0) {
      onValueChange == null ? void 0 : onValueChange(selectedValues.slice(0, -1));
    }
  };
  React21.useEffect(() => {
    var _a;
    if (!multiple && selectedValues.length > 0 && !open) {
      const label = (_a = options.find((o) => o.value === selectedValues[0])) == null ? void 0 : _a.label;
      if (label) setQuery(label);
    }
  }, [selectedValues, multiple, open, options]);
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: cn("relative w-full", className), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "flex flex-wrap items-center gap-1.5 min-h-[44px] w-full",
          "border-2 border-dashed border-slate-400 bg-white px-3 py-2",
          "rounded-none shadow-none",
          "transition-all duration-200 ease-out",
          open && "border-red-600 ring-2 ring-red-600 ring-offset-2",
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
                className: "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border-2 border-dashed border-slate-300 bg-slate-50 text-slate-700",
                children: [
                  label,
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "ml-0.5 hover:text-red-600 transition-colors cursor-pointer",
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
            /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 shrink-0 text-slate-400" }),
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
                  "flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400",
                  "outline-none border-none p-0",
                  "disabled:cursor-not-allowed"
                ),
                role: "combobox",
                "aria-expanded": open,
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
                autoComplete: "off"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
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
        role: "listbox",
        className: cn(
          "absolute z-50 mt-1 w-full max-h-[240px] overflow-y-auto",
          "border-2 border-dashed border-slate-200 bg-white",
          "shadow-none",
          "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"
        ),
        children: [
          loading && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-6", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 border-2 border-dashed border-red-600 border-t-transparent animate-spin" }) }),
          !loading && flatFiltered.length === 0 && /* @__PURE__ */ jsx("div", { className: "px-3 py-6 text-center text-sm text-slate-400", children: emptyText }),
          !loading && Array.from(grouped.entries()).map(([group, opts]) => /* @__PURE__ */ jsxs("div", { role: "group", children: [
            group && /* @__PURE__ */ jsx("div", { className: "px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 border-b border-dashed border-slate-100", children: group }),
            opts.map((opt) => {
              const isSelected = selectedValues.includes(opt.value);
              const flatIdx = flatFiltered.indexOf(opt);
              const isHighlighted = flatIdx === highlightIndex;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  "data-autocomplete-item": true,
                  role: "option",
                  "aria-selected": isSelected,
                  "aria-disabled": opt.disabled,
                  className: cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer select-none",
                    "border-2 border-dashed border-transparent",
                    "transition-colors duration-100",
                    isHighlighted && "bg-slate-50 border-slate-200",
                    !isHighlighted && "hover:bg-slate-50 hover:border-slate-200",
                    opt.disabled && "pointer-events-none opacity-40"
                  ),
                  onClick: () => {
                    if (!opt.disabled) handleSelect(opt.value);
                  },
                  onMouseEnter: () => setHighlightIndex(flatIdx),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: opt.label }),
                    isSelected && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 shrink-0 text-red-600" })
                  ]
                },
                opt.value
              );
            })
          ] }, group || "__ungrouped"))
        ]
      }
    )
  ] });
}
Autocomplete.displayName = "Autocomplete";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, Autocomplete, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Calendar, CommandPalette, CommandPaletteContent, CommandPaletteEmpty, CommandPaletteFooter, CommandPaletteGroup, CommandPaletteInput, CommandPaletteItem, CommandPaletteList, CommandPaletteSeparator, CommandPaletteTrigger, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalTitle, ModalTrigger, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Tabs, TabsContent, TabsList, TabsTrigger, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, modalContentVariants, sheetContentVariants, useCommandPalette, useFormField };
