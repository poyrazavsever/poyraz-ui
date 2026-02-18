'use strict';

var chunkAMV3HMCG_cjs = require('./chunk-AMV3HMCG.cjs');
var chunkYB3VQRHJ_cjs = require('./chunk-YB3VQRHJ.cjs');
var React6 = require('react');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactSlot = require('@radix-ui/react-slot');
var PopoverPrimitive = require('@radix-ui/react-popover');
var SelectPrimitive = require('@radix-ui/react-select');
var sonner = require('sonner');
var TabsPrimitive = require('@radix-ui/react-tabs');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var vaul = require('vaul');
var reactVisuallyHidden = require('@radix-ui/react-visually-hidden');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React6__namespace = /*#__PURE__*/_interopNamespace(React6);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);

var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Item,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("border-b-2 border-dashed border-slate-200", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
    AccordionPrimitive__namespace.Trigger,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline hover:decoration-dashed [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: chunkYB3VQRHJ_cjs.cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var alertVariants = classVarianceAuthority.cva(
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
  default: lucideReact.Terminal,
  info: lucideReact.Info,
  success: lucideReact.CheckCircle2,
  warning: lucideReact.AlertTriangle,
  destructive: lucideReact.AlertCircle
};
var Alert = React6__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "default", icon, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "variant", "icon", "children"]);
    const IconComponent = variantIcons[variant != null ? variant : "default"];
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        role: "alert",
        className: chunkYB3VQRHJ_cjs.cn(alertVariants({ variant }), className)
      }, props), {
        children: [
          icon !== void 0 ? icon : /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "h-4 w-4" }),
          children
        ]
      })
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h5",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "mb-1 font-bold leading-none tracking-tight uppercase text-sm",
        className
      )
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";
var Breadcrumb = React6__namespace.forwardRef((_a, ref) => {
  var props = chunkYB3VQRHJ_cjs.__objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("nav", chunkYB3VQRHJ_cjs.__spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? "span" : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("transition-colors hover:text-slate-950", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: chunkYB3VQRHJ_cjs.cn("font-normal text-slate-950", className)
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: chunkYB3VQRHJ_cjs.cn("[&>svg]:size-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: chunkYB3VQRHJ_cjs.cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-dashed border-slate-200 bg-white p-6 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-none",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn(
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("text-sm text-slate-500", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      sideOffset,
      className: chunkYB3VQRHJ_cjs.cn(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("-mx-1 my-1 h-px bg-slate-100", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  if (data instanceof Date) {
    return new Date(data);
  }
  const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
  if (isWeb && (data instanceof Blob || isFileListInstance)) {
    return data;
  }
  const isArray = Array.isArray(data);
  if (!isArray && !(isObject(data) && isPlainObject(data))) {
    return data;
  }
  const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      copy[key] = cloneObject(data[key]);
    }
  }
  return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isFunction = (value) => typeof value === "function";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
var EVENTS = {
  BLUR: "blur",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  all: "all"
};
var HookFormControlContext = React6__namespace.default.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
var useFormControlContext = () => React6__namespace.default.useContext(HookFormControlContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React6__namespace.default.useLayoutEffect : React6__namespace.default.useEffect;
function useFormState(props) {
  const formControl = useFormControlContext();
  const { control = formControl, disabled, name, exact } = props || {};
  const [formState, updateFormState] = React6__namespace.default.useState(control._formState);
  const _localProxyFormState = React6__namespace.default.useRef({
    isDirty: false,
    isLoading: false,
    dirtyFields: false,
    touchedFields: false,
    validatingFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  });
  useIsomorphicLayoutEffect(() => control._subscribe({
    name,
    formState: _localProxyFormState.current,
    exact,
    callback: (formState2) => {
      !disabled && updateFormState(chunkYB3VQRHJ_cjs.__spreadValues(chunkYB3VQRHJ_cjs.__spreadValues({}, control._formState), formState2));
    }
  }), [name, disabled, exact]);
  React6__namespace.default.useEffect(() => {
    _localProxyFormState.current.isValid && control._setValid(true);
  }, [control]);
  return React6__namespace.default.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (get(formValues, fieldName)));
  }
  return formValues;
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2, _internal_visited = /* @__PURE__ */ new WeakSet()) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return Object.is(object1, object2);
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return Object.is(object1.getTime(), object2.getTime());
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
    return true;
  }
  _internal_visited.add(object1);
  _internal_visited.add(object2);
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : !Object.is(val1, val2)) {
        return false;
      }
    }
  }
  return true;
}
function useWatch(props) {
  const formControl = useFormControlContext();
  const { control = formControl, name, defaultValue, disabled, exact, compute } = props || {};
  const _defaultValue = React6__namespace.default.useRef(defaultValue);
  const _compute = React6__namespace.default.useRef(compute);
  const _computeFormValues = React6__namespace.default.useRef(void 0);
  const _prevControl = React6__namespace.default.useRef(control);
  const _prevName = React6__namespace.default.useRef(name);
  _compute.current = compute;
  const [value, updateValue] = React6__namespace.default.useState(() => {
    const defaultValue2 = control._getWatch(name, _defaultValue.current);
    return _compute.current ? _compute.current(defaultValue2) : defaultValue2;
  });
  const getCurrentOutput = React6__namespace.default.useCallback((values) => {
    const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
    return _compute.current ? _compute.current(formValues) : formValues;
  }, [control._formValues, control._names, name]);
  const refreshValue = React6__namespace.default.useCallback((values) => {
    if (!disabled) {
      const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
      if (_compute.current) {
        const computedFormValues = _compute.current(formValues);
        if (!deepEqual(computedFormValues, _computeFormValues.current)) {
          updateValue(computedFormValues);
          _computeFormValues.current = computedFormValues;
        }
      } else {
        updateValue(formValues);
      }
    }
  }, [control._formValues, control._names, disabled, name]);
  useIsomorphicLayoutEffect(() => {
    if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
      _prevControl.current = control;
      _prevName.current = name;
      refreshValue();
    }
    return control._subscribe({
      name,
      formState: {
        values: true
      },
      exact,
      callback: (formState) => {
        refreshValue(formState.values);
      }
    });
  }, [control, exact, name, refreshValue]);
  React6__namespace.default.useEffect(() => control._removeUnmounted());
  const controlChanged = _prevControl.current !== control;
  const prevName = _prevName.current;
  const computedOutput = React6__namespace.default.useMemo(() => {
    if (disabled) {
      return null;
    }
    const nameChanged = !controlChanged && !deepEqual(prevName, name);
    const shouldReturnImmediate = controlChanged || nameChanged;
    return shouldReturnImmediate ? getCurrentOutput() : null;
  }, [disabled, controlChanged, name, prevName, getCurrentOutput]);
  return computedOutput !== null ? computedOutput : value;
}
function useController(props) {
  const formControl = useFormControlContext();
  const { name, disabled, control = formControl, shouldUnregister, defaultValue, exact = true } = props;
  const isArrayField = isNameInFieldArray(control._names.array, name);
  const defaultValueMemo = React6__namespace.default.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [control, name, defaultValue]);
  const value = useWatch({
    control,
    name,
    defaultValue: defaultValueMemo,
    exact
  });
  const formState = useFormState({
    control,
    name,
    exact
  });
  const _props = React6__namespace.default.useRef(props);
  const _previousNameRef = React6__namespace.default.useRef(void 0);
  const _registerProps = React6__namespace.default.useRef(control.register(name, chunkYB3VQRHJ_cjs.__spreadValues(chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({}, props.rules), {
    value
  }), isBoolean(props.disabled) ? { disabled: props.disabled } : {})));
  _props.current = props;
  const fieldState = React6__namespace.default.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: true,
      get: () => !!get(formState.errors, name)
    },
    isDirty: {
      enumerable: true,
      get: () => !!get(formState.dirtyFields, name)
    },
    isTouched: {
      enumerable: true,
      get: () => !!get(formState.touchedFields, name)
    },
    isValidating: {
      enumerable: true,
      get: () => !!get(formState.validatingFields, name)
    },
    error: {
      enumerable: true,
      get: () => get(formState.errors, name)
    }
  }), [formState, name]);
  const onChange = React6__namespace.default.useCallback((event) => _registerProps.current.onChange({
    target: {
      value: getEventValue(event),
      name
    },
    type: EVENTS.CHANGE
  }), [name]);
  const onBlur = React6__namespace.default.useCallback(() => _registerProps.current.onBlur({
    target: {
      value: get(control._formValues, name),
      name
    },
    type: EVENTS.BLUR
  }), [name, control._formValues]);
  const ref = React6__namespace.default.useCallback((elm) => {
    const field2 = get(control._fields, name);
    if (field2 && field2._f && elm) {
      field2._f.ref = {
        focus: () => isFunction(elm.focus) && elm.focus(),
        select: () => isFunction(elm.select) && elm.select(),
        setCustomValidity: (message) => isFunction(elm.setCustomValidity) && elm.setCustomValidity(message),
        reportValidity: () => isFunction(elm.reportValidity) && elm.reportValidity()
      };
    }
  }, [control._fields, name]);
  const field = React6__namespace.default.useMemo(() => chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
    name,
    value
  }, isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {}), {
    onChange,
    onBlur,
    ref
  }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
  React6__namespace.default.useEffect(() => {
    const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
    const previousName = _previousNameRef.current;
    if (previousName && previousName !== name && !isArrayField) {
      control.unregister(previousName);
    }
    control.register(name, chunkYB3VQRHJ_cjs.__spreadValues(chunkYB3VQRHJ_cjs.__spreadValues({}, _props.current.rules), isBoolean(_props.current.disabled) ? { disabled: _props.current.disabled } : {}));
    const updateMounted = (name2, value2) => {
      const field2 = get(control._fields, name2);
      if (field2 && field2._f) {
        field2._f.mount = value2;
      }
    };
    updateMounted(name, true);
    if (_shouldUnregisterField) {
      const value2 = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
      set(control._defaultValues, name, value2);
      if (isUndefined(get(control._formValues, name))) {
        set(control._formValues, name, value2);
      }
    }
    !isArrayField && control.register(name);
    _previousNameRef.current = name;
    return () => {
      (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
    };
  }, [name, control, isArrayField, shouldUnregister]);
  React6__namespace.default.useEffect(() => {
    control._setDisabledField({
      disabled,
      name
    });
  }, [disabled, name, control]);
  return React6__namespace.default.useMemo(() => ({
    field,
    formState,
    fieldState
  }), [field, formState, fieldState]);
}
var Controller = (props) => props.render(useController(props));
var HookFormContext = React6__namespace.default.createContext(null);
HookFormContext.displayName = "HookFormContext";
var useFormContext = () => React6__namespace.default.useContext(HookFormContext);
var FormProvider = (props) => {
  const { children, watch, getValues, getFieldState, setError, clearErrors, setValue, trigger, formState, resetField, reset, handleSubmit, unregister, control, register, setFocus, subscribe } = props;
  return React6__namespace.default.createElement(
    HookFormContext.Provider,
    { value: React6__namespace.default.useMemo(() => ({
      watch,
      getValues,
      getFieldState,
      setError,
      clearErrors,
      setValue,
      trigger,
      formState,
      resetField,
      reset,
      handleSubmit,
      unregister,
      control,
      register,
      setFocus,
      subscribe
    }), [
      clearErrors,
      control,
      formState,
      getFieldState,
      getValues,
      handleSubmit,
      register,
      reset,
      resetField,
      setError,
      setFocus,
      setValue,
      subscribe,
      trigger,
      unregister,
      watch
    ]) },
    React6__namespace.default.createElement(HookFormControlContext.Provider, { value: control }, children)
  );
};
var Form = FormProvider;
var FormFieldContext = React6__namespace.createContext(
  {}
);
var FormField = (_a) => {
  var props = chunkYB3VQRHJ_cjs.__objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(Controller, chunkYB3VQRHJ_cjs.__spreadValues({}, props)) });
};
var useFormField = () => {
  const fieldContext = React6__namespace.useContext(FormFieldContext);
  const itemContext = React6__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return chunkYB3VQRHJ_cjs.__spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React6__namespace.createContext(
  {}
);
var FormItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  const id = React6__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx("div", chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("space-y-2", className) }, props)) });
});
FormItem.displayName = "FormItem";
var FormLabel = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    chunkAMV3HMCG_cjs.Label,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(error && "text-red-600", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React6__namespace.forwardRef((_a, ref) => {
  var props = chunkYB3VQRHJ_cjs.__objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      id: formDescriptionId,
      className: chunkYB3VQRHJ_cjs.cn("text-sm text-slate-500", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      id: formMessageId,
      className: chunkYB3VQRHJ_cjs.cn("text-sm font-medium text-red-600", className)
    }, props), {
      children: body
    })
  );
});
FormMessage.displayName = "FormMessage";
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    chunkYB3VQRHJ_cjs.__spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: chunkYB3VQRHJ_cjs.cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("flex flex-row items-center gap-1", className)
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("li", chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkYB3VQRHJ_cjs.__spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: chunkYB3VQRHJ_cjs.cn(
        chunkYB3VQRHJ_cjs.buttonVariants({
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: chunkYB3VQRHJ_cjs.cn("gap-1 pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Previous" })
      ]
    })
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: chunkYB3VQRHJ_cjs.cn("gap-1 pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
      ]
    })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      "aria-hidden": true,
      className: chunkYB3VQRHJ_cjs.cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      align,
      sideOffset,
      className: chunkYB3VQRHJ_cjs.cn(
        "z-50 w-72 border-2 border-dashed border-slate-200 bg-white p-4 text-slate-950 shadow-none outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex h-11 w-full items-center justify-between border-2 border-dashed border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        "rounded-none shadow-none",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: chunkYB3VQRHJ_cjs.cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Label,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Separator,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("-mx-1 my-1 h-px bg-slate-100", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Toaster = (_a) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("toaster group", className),
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: chunkYB3VQRHJ_cjs.cn(
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
          actionButton: chunkYB3VQRHJ_cjs.cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-900 rounded-none shadow-none",
            "bg-slate-900 text-white",
            "hover:bg-slate-800 transition-colors",
            "cursor-pointer"
          ),
          cancelButton: chunkYB3VQRHJ_cjs.cn(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-300 rounded-none shadow-none",
            "bg-white text-slate-600",
            "hover:bg-slate-50 transition-colors",
            "cursor-pointer"
          ),
          closeButton: chunkYB3VQRHJ_cjs.cn(
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
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "inline-flex h-11 items-center justify-center p-0 text-slate-500",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
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
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
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
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      sideOffset,
      className: chunkYB3VQRHJ_cjs.cn(
        "z-50 overflow-hidden border-2 border-dashed border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var HoverCard = HoverCardPrimitive__namespace.Root;
var HoverCardTrigger = HoverCardPrimitive__namespace.Trigger;
var HoverCardContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    HoverCardPrimitive__namespace.Content,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      align,
      sideOffset,
      className: chunkYB3VQRHJ_cjs.cn(
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
HoverCardContent.displayName = HoverCardPrimitive__namespace.Content.displayName;
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
  const [viewYear, setViewYear] = React6__namespace.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getFullYear()
  );
  const [viewMonth, setViewMonth] = React6__namespace.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getMonth()
  );
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
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) return true;
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999)))
      return true;
    return false;
  };
  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(/* @__PURE__ */ jsxRuntime.jsx("div", {}, `empty-${i}`));
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(viewYear, viewMonth, day);
    const sel = selected && isSameDay(date, selected);
    const today = isToday(date);
    const disabled = isDisabled(date);
    cells.push(
      /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          disabled,
          onClick: () => onSelect == null ? void 0 : onSelect(date),
          className: chunkYB3VQRHJ_cjs.cn(
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: chunkYB3VQRHJ_cjs.cn("p-3 select-none", className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        chunkYB3VQRHJ_cjs.Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8",
          onClick: prevMonth,
          "aria-label": "Previous month",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm font-bold uppercase tracking-wide", children: [
        MONTHS[viewMonth],
        " ",
        viewYear
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        chunkYB3VQRHJ_cjs.Button,
        {
          variant: "ghost",
          size: "icon",
          className: "h-8 w-8",
          onClick: nextMonth,
          "aria-label": "Next month",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-7 mb-1", children: DAYS.map((d) => /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "h-9 w-9 flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-slate-400",
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid grid-cols-7", children: cells })
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
  const [open, setOpen] = React6__namespace.useState(false);
  const handleSelect = (date) => {
    onSelect == null ? void 0 : onSelect(date);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      chunkYB3VQRHJ_cjs.Button,
      {
        variant: "outline",
        disabled,
        className: chunkYB3VQRHJ_cjs.cn(
          "w-full justify-start text-left font-normal",
          !selected && "text-slate-400",
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, { className: "mr-2 h-4 w-4 shrink-0" }),
          selected ? formatDate(selected) : placeholder
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ jsxRuntime.jsx(
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "shouldScaleBackground"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Root,
    chunkYB3VQRHJ_cjs.__spreadValues({
      shouldScaleBackground
    }, props)
  );
};
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul.Drawer.Trigger;
var DrawerPortal = vaul.Drawer.Portal;
var DrawerClose = vaul.Drawer.Close;
var DrawerOverlay = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Overlay,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("fixed inset-0 z-50 bg-black/40", className)
    }, props)
  );
});
DrawerOverlay.displayName = vaul.Drawer.Overlay.displayName;
var DrawerContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      vaul.Drawer.Content,
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col",
          "bg-white",
          "border-t-2 border-dashed border-slate-200",
          "rounded-none shadow-none",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto mt-4 h-1.5 w-[60px] bg-slate-300" }),
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Title,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = vaul.Drawer.Title.displayName;
var DrawerDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Description,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("text-sm text-slate-500", className)
    }, props)
  );
});
DrawerDescription.displayName = vaul.Drawer.Description.displayName;
var modalContentVariants = classVarianceAuthority.cva(
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
var Modal = DialogPrimitive__namespace.Root;
var ModalTrigger = DialogPrimitive__namespace.Trigger;
var ModalClose = DialogPrimitive__namespace.Close;
var ModalOverlay = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
ModalOverlay.displayName = "ModalOverlay";
var ModalContent = React6__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, size, position, hideClose = false } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children", "size", "position", "hideClose"]);
    return /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Portal, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(ModalOverlay, {}),
      /* @__PURE__ */ jsxRuntime.jsxs(
        DialogPrimitive__namespace.Content,
        chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
          ref,
          className: chunkYB3VQRHJ_cjs.cn(modalContentVariants({ size, position }), className)
        }, props), {
          children: [
            children,
            !hideClose && /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("flex flex-col space-y-1.5 text-left", className)
    }, props)
  );
};
ModalHeader.displayName = "ModalHeader";
var ModalFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
ModalFooter.displayName = "ModalFooter";
var ModalTitle = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("text-sm text-slate-500", className)
    }, props)
  );
});
ModalDescription.displayName = "ModalDescription";
var CommandPaletteCtx = React6__namespace.createContext({
  search: "",
  setSearch: () => {
  }
});
function CommandPalette(_a) {
  var _b = _a, { children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["children"]);
  const [search, setSearch] = React6__namespace.useState("");
  const handleOpenChange = (open) => {
    var _a2;
    if (!open) setSearch("");
    (_a2 = props.onOpenChange) == null ? void 0 : _a2.call(props, open);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(CommandPaletteCtx.Provider, { value: { search, setSearch }, children: /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Root, chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({}, props), { onOpenChange: handleOpenChange, children })) });
}
CommandPalette.displayName = "CommandPalette";
var CommandPaletteTrigger = DialogPrimitive__namespace.Trigger;
var CommandPaletteContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Portal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      DialogPrimitive__namespace.Overlay,
      {
        className: chunkYB3VQRHJ_cjs.cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
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
          /* @__PURE__ */ jsxRuntime.jsx(reactVisuallyHidden.VisuallyHidden, { children: /* @__PURE__ */ jsxRuntime.jsx(DialogPrimitive__namespace.Title, { children: "Command Palette" }) }),
          children
        ]
      })
    )
  ] });
});
CommandPaletteContent.displayName = "CommandPaletteContent";
var CommandPaletteInput = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, onValueChange } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "onValueChange"]);
  const { search, setSearch } = React6__namespace.useContext(CommandPaletteCtx);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: chunkYB3VQRHJ_cjs.cn(
        "flex items-center gap-2 px-4",
        "border-b-2 border-dashed border-slate-200"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "h-4 w-4 shrink-0 text-slate-400" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          chunkYB3VQRHJ_cjs.__spreadValues({
            ref,
            value: search,
            onChange: (e) => {
              setSearch(e.target.value);
              onValueChange == null ? void 0 : onValueChange(e.target.value);
            },
            className: chunkYB3VQRHJ_cjs.cn(
              "flex h-12 w-full bg-transparent py-3",
              "text-sm text-slate-900 placeholder:text-slate-400",
              "outline-none",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              className
            )
          }, props)
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "rounded-none p-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  );
});
CommandPaletteInput.displayName = "CommandPaletteInput";
var CommandPaletteList = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("max-h-[300px] overflow-y-auto p-2", className),
      role: "listbox"
    }, props)
  );
});
CommandPaletteList.displayName = "CommandPaletteList";
var CommandPaletteGroup = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, heading, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "heading", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("py-1", className), role: "group" }, props), { children: [
    heading && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400", children: heading }),
    children
  ] }));
});
CommandPaletteGroup.displayName = "CommandPaletteGroup";
var CommandPaletteItem = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, shortcut, disabled, icon } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children", "shortcut", "disabled", "icon"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      role: "option",
      "aria-disabled": disabled,
      className: chunkYB3VQRHJ_cjs.cn(
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
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-slate-400 shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate", children }),
        shortcut && /* @__PURE__ */ jsxRuntime.jsx("kbd", { className: "ml-auto text-[11px] font-mono tracking-wider text-slate-400 border border-dashed border-slate-200 px-1.5 py-0.5", children: shortcut })
      ]
    })
  );
});
CommandPaletteItem.displayName = "CommandPaletteItem";
var CommandPaletteEmpty = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("py-8 text-center text-sm text-slate-400", className)
    }, props)
  );
});
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";
var CommandPaletteSeparator = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("h-px bg-slate-100 my-1 -mx-2", className)
    }, props)
  );
});
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";
var CommandPaletteFooter = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
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
  return React6__namespace.useContext(CommandPaletteCtx);
}
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
SheetOverlay.displayName = "SheetOverlay";
var sheetContentVariants = classVarianceAuthority.cva(
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
var SheetContent = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(sheetContentVariants({ side }), className)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-none opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
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
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn("flex flex-col space-y-2 text-left", className)
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadValues({
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-auto pt-4 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-lg font-semibold leading-none tracking-tight text-slate-900",
        className
      )
    }, props)
  );
});
SheetTitle.displayName = "SheetTitle";
var SheetDescription = React6__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("text-sm text-slate-500", className)
    }, props)
  );
});
SheetDescription.displayName = "SheetDescription";

Object.defineProperty(exports, "toast", {
  enumerable: true,
  get: function () { return sonner.toast; }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Calendar = Calendar;
exports.CommandPalette = CommandPalette;
exports.CommandPaletteContent = CommandPaletteContent;
exports.CommandPaletteEmpty = CommandPaletteEmpty;
exports.CommandPaletteFooter = CommandPaletteFooter;
exports.CommandPaletteGroup = CommandPaletteGroup;
exports.CommandPaletteInput = CommandPaletteInput;
exports.CommandPaletteItem = CommandPaletteItem;
exports.CommandPaletteList = CommandPaletteList;
exports.CommandPaletteSeparator = CommandPaletteSeparator;
exports.CommandPaletteTrigger = CommandPaletteTrigger;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Modal = Modal;
exports.ModalClose = ModalClose;
exports.ModalContent = ModalContent;
exports.ModalDescription = ModalDescription;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.ModalOverlay = ModalOverlay;
exports.ModalTitle = ModalTitle;
exports.ModalTrigger = ModalTrigger;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.modalContentVariants = modalContentVariants;
exports.sheetContentVariants = sheetContentVariants;
exports.useCommandPalette = useCommandPalette;
exports.useFormField = useFormField;
