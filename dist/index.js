"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React33 from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import Image2 from 'next/image';
import Link from 'next/link';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Minus, Plus, Search, Phone, EyeOff, Eye, Globe, X, ChevronDown, AlertCircle, AlertTriangle, CheckCircle2, Info, Terminal, ChevronRight, Check, Circle, ChevronUp, Menu, PanelLeftClose, PanelLeftOpen, SlidersHorizontal, ArrowUp, ArrowDown, ArrowUpDown, ChevronsLeft, ChevronLeft, ChevronsRight, MoreHorizontal, CalendarIcon } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
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
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

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
function cn2(...inputs) {
  return twMerge(clsx(inputs));
}
var variantMap = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground"
};
function Typography(_a) {
  var _b = _a, {
    className,
    variant = "p",
    component,
    secondaryFont = false,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "component",
    "secondaryFont",
    "children"
  ]);
  const Component = component || (variant === "lead" || variant === "large" || variant === "muted" || variant === "small" ? "p" : variant === "list" ? "ul" : variant) || "p";
  return /* @__PURE__ */ jsx(
    Component,
    __spreadProps(__spreadValues({
      className: cn2(
        variantMap[variant],
        secondaryFont && "font-secondary",
        className
      )
    }, props), {
      children
    })
  );
}
var Avatar = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      className: cn2(
        // Size
        "relative flex h-10 w-10 shrink-0 overflow-hidden",
        // Shape — square, not circle (brutalist)
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-400",
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    __spreadValues({
      ref,
      className: cn2("aspect-square h-full w-full object-cover", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
    __spreadValues({
      ref,
      className: cn2(
        "flex h-full w-full items-center justify-center",
        "bg-slate-100 text-slate-600",
        "text-xs font-semibold uppercase tracking-wide",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
var badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1",
    "text-xs font-semibold tracking-wide uppercase",
    "rounded-none shadow-none",
    "border-2 border-dashed",
    "px-3 py-1",
    "transition-all duration-200 ease-out"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-red-600 text-white border-red-900",
        secondary: "bg-slate-100 text-slate-900 border-slate-300",
        destructive: "bg-red-500 text-white border-red-800",
        outline: "bg-transparent text-slate-900 border-slate-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsx("div", __spreadValues({ className: cn2(badgeVariants({ variant }), className) }, props));
}
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
var Button = React33.forwardRef(
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
        className: cn2(buttonVariants({ variant, size, className })),
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
var cardVariants = cva(
  [
    "relative flex flex-col",
    "rounded-none shadow-none",
    "transition-all duration-300 ease-out",
    "overflow-hidden"
  ].join(" "),
  {
    variants: {
      variant: {
        // Classic brutalist: dashed border, clean
        default: "bg-white border-2 border-dashed border-slate-300",
        // Bold dashed border — high contrast
        bordered: "bg-white border-2 border-dashed border-slate-900",
        // Red offset box behind (like Logo component) — the flagship brutalist card
        elevated: "bg-white border-2 border-dashed border-slate-900",
        // Red left accent stripe
        highlight: [
          "bg-white border-2 border-dashed border-slate-300",
          "border-l-4 border-l-red-600"
        ].join(" "),
        // Minimal — no border, just hover-reveal
        ghost: [
          "bg-transparent border-2 border-dashed border-transparent",
          "hover:border-slate-300 hover:bg-white"
        ].join(" ")
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Card = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, children } = _b, props = __objRest(_b, ["className", "variant", "children"]);
    if (variant === "elevated") {
      return /* @__PURE__ */ jsxs("div", { className: cn2("group relative", className), children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn2(
              "absolute inset-0",
              "bg-red-600 border-2 border-dashed border-red-900",
              "rounded-none",
              "translate-x-2 translate-y-2",
              "transition-transform duration-300 ease-out",
              "group-hover:translate-x-3 group-hover:translate-y-3"
            ),
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          __spreadProps(__spreadValues({
            ref,
            className: cn2(
              cardVariants({ variant }),
              "relative z-10",
              "transition-transform duration-300 ease-out",
              "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
            )
          }, props), {
            children
          })
        )
      ] });
    }
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn2(cardVariants({ variant }), className)
      }, props), {
        children
      })
    );
  }
);
Card.displayName = "Card";
var CardImage = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, aspect = "aspect-video", children } = _b, props = __objRest(_b, ["className", "aspect", "children"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn2(
          "relative overflow-hidden",
          "border-b-2 border-dashed border-slate-300",
          aspect,
          className
        )
      }, props), {
        children
      })
    );
  }
);
CardImage.displayName = "CardImage";
var CardHeader = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2("flex flex-col gap-1.5 p-5", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h3",
    __spreadValues({
      ref,
      className: cn2(
        "text-lg font-bold tracking-tight leading-tight text-slate-900",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      className: cn2("text-sm text-slate-500 leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn2("px-5 pb-4", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2(
        "flex items-center gap-3 px-5 py-4",
        "border-t-2 border-dashed border-slate-200",
        "mt-auto",
        className
      )
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var Checkbox = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        // Size
        "h-5 w-5 shrink-0",
        // Shape — brutalist: square, dashed
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-400",
        // Background
        "bg-white",
        // Transitions
        "transition-all duration-200 ease-out",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
        // Checked
        "data-[state=checked]:bg-red-600 data-[state=checked]:border-red-900 data-[state=checked]:text-white",
        // Disabled
        "disabled:opacity-40 disabled:cursor-not-allowed",
        // Cursor
        "cursor-pointer",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(CheckboxPrimitive.Indicator, { className: "flex items-center justify-center text-current", children: /* @__PURE__ */ jsx(
        "svg",
        {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2.5",
          strokeLinecap: "square",
          strokeLinejoin: "miter",
          children: /* @__PURE__ */ jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" })
        }
      ) })
    })
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
var Input = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsx(
      "input",
      __spreadValues({
        type,
        ref,
        className: cn2(
          // Layout
          "flex h-11 w-full px-4 py-2",
          // Typography
          "text-sm text-slate-900 placeholder:text-slate-400",
          // Shape — brutalist
          "rounded-none shadow-none",
          // Border — dashed DNA
          "border-2 border-dashed border-slate-400",
          // Background
          "bg-white",
          // Transitions
          "transition-all duration-200 ease-out",
          // Focus
          "focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
          // Disabled
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // File input
          "file:border-0 file:bg-transparent file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-red-600 file:cursor-pointer",
          className
        )
      }, props)
    );
  }
);
Input.displayName = "Input";
var Label = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "label",
      __spreadValues({
        ref,
        className: cn2(
          "text-sm font-semibold tracking-wide uppercase leading-none",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label.displayName = "Label";
function Logo(_a) {
  var _b = _a, {
    className,
    href,
    width = 48,
    height = 48,
    alt = "Poyraz Logo"
  } = _b, props = __objRest(_b, [
    "className",
    "href",
    "width",
    "height",
    "alt"
  ]);
  const wrapperClassName = cn2(
    // Wrapper — relative for the red box offset
    "group relative inline-block",
    "transition-all duration-300 ease-out",
    "cursor-pointer",
    className
  );
  const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn2(
          "absolute inset-0",
          "bg-red-600",
          "border-2 border-dashed border-red-900",
          "rounded-none",
          // Offset to bottom-right
          "translate-x-1.5 translate-y-1.5",
          // On hover, the red box shifts further
          "transition-transform duration-300 ease-out",
          "group-hover:translate-x-2.5 group-hover:translate-y-2.5"
        ),
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn2(
          "relative z-10",
          "border-2 border-dashed border-slate-900",
          "rounded-none shadow-none",
          "overflow-hidden",
          "bg-white",
          // On hover, the image lifts slightly (opposite direction of red box)
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5",
          // Active press
          "group-active:translate-x-0.5 group-active:translate-y-0.5",
          "group-active:duration-75"
        ),
        children: /* @__PURE__ */ jsx(
          Image2,
          {
            src: "/logo/logo.jpeg",
            alt,
            width,
            height,
            className: "object-cover rounded-none"
          }
        )
      }
    )
  ] });
  if (href) {
    return /* @__PURE__ */ jsx(Link, __spreadProps(__spreadValues({ href, className: wrapperClassName }, props), { children: inner }));
  }
  return /* @__PURE__ */ jsx("span", __spreadProps(__spreadValues({ className: wrapperClassName }, props), { children: inner }));
}
Logo.displayName = "Logo";
var RadioGroup = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    __spreadValues({
      className: cn2("grid gap-3", className),
      ref
    }, props)
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        // Size — square, not circle (brutalist)
        "h-5 w-5 shrink-0",
        // Shape
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-400",
        // Background
        "bg-white",
        // Transitions
        "transition-all duration-200 ease-out",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
        // Checked
        "data-[state=checked]:border-red-600",
        // Disabled
        "disabled:opacity-40 disabled:cursor-not-allowed",
        // Cursor
        "cursor-pointer",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-2.5 w-2.5 bg-red-600" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
var Separator = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsx(
      SeparatorPrimitive.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn2(
          "shrink-0",
          // Dashed line — on-brand
          "border-dashed border-slate-300",
          orientation === "horizontal" ? "w-full border-t-2" : "h-full border-l-2",
          className
        )
      }, props)
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      className: cn2(
        "animate-pulse",
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-200",
        "bg-slate-100",
        className
      )
    }, props)
  );
}
var Switch = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SwitchPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        // Layout — rectangular track
        "peer inline-flex h-6 w-11 shrink-0 items-center",
        // Shape — brutalist
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-400",
        // Background
        "bg-slate-200",
        // Transitions
        "transition-all duration-200 ease-out",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
        // Checked
        "data-[state=checked]:bg-red-600 data-[state=checked]:border-red-900",
        // Disabled
        "disabled:opacity-40 disabled:cursor-not-allowed",
        // Cursor
        "cursor-pointer",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
        {
          className: cn2(
            // Square thumb — brutalist
            "block h-4 w-4 bg-white",
            "rounded-none shadow-none",
            "border border-dashed border-slate-300",
            // Transitions
            "transition-transform duration-200 ease-out",
            // Position
            "translate-x-0.5 data-[state=checked]:translate-x-[22px]",
            "data-[state=checked]:border-white/50"
          )
        }
      )
    })
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;
var Textarea = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "textarea",
      __spreadValues({
        ref,
        className: cn2(
          // Layout
          "flex min-h-[100px] w-full px-4 py-3",
          // Typography
          "text-sm text-slate-900 placeholder:text-slate-400",
          // Shape — brutalist
          "rounded-none shadow-none",
          // Border — dashed DNA
          "border-2 border-dashed border-slate-400",
          // Background
          "bg-white",
          // Transitions
          "transition-all duration-200 ease-out",
          // Focus
          "focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
          // Disabled
          "disabled:opacity-40 disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";
var fieldWrapper = [
  "flex items-center w-full",
  "border-2 border-dashed border-slate-400 bg-white",
  "rounded-none shadow-none",
  "transition-all duration-200 ease-out",
  "focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2"
].join(" ");
var innerInput = [
  "border-0 ring-0 shadow-none focus:ring-0 focus:ring-offset-0 focus:border-0 focus:outline-none"
].join(" ");
var NumberInput = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, value = 0, onChange, min, max, step = 1, disabled } = _b, props = __objRest(_b, ["className", "value", "onChange", "min", "max", "step", "disabled"]);
    const handleChange = (e) => {
      const num = parseFloat(e.target.value);
      if (!isNaN(num)) onChange == null ? void 0 : onChange(clamp(num, min, max));
    };
    const increment = () => {
      onChange == null ? void 0 : onChange(clamp((value != null ? value : 0) + step, min, max));
    };
    const decrement = () => {
      onChange == null ? void 0 : onChange(clamp((value != null ? value : 0) - step, min, max));
    };
    return /* @__PURE__ */ jsxs("div", { className: cn2(fieldWrapper, disabled && "opacity-40", className), children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-10 w-10 shrink-0 rounded-none border-0",
          onClick: decrement,
          disabled: disabled || min !== void 0 && (value != null ? value : 0) <= min,
          tabIndex: -1,
          "aria-label": "Decrease",
          children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: "number",
          value,
          onChange: handleChange,
          disabled,
          className: cn2(
            innerInput,
            "text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          ),
          min,
          max,
          step
        }, props)
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-10 w-10 shrink-0 rounded-none border-0",
          onClick: increment,
          disabled: disabled || max !== void 0 && (value != null ? value : 0) >= max,
          tabIndex: -1,
          "aria-label": "Increase",
          children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
NumberInput.displayName = "NumberInput";
function clamp(val, min, max) {
  if (min !== void 0 && val < min) return min;
  if (max !== void 0 && val > max) return max;
  return val;
}
var SearchInput = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, onSearch, onKeyDown } = _b, props = __objRest(_b, ["className", "onSearch", "onKeyDown"]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSearch == null ? void 0 : onSearch(e.target.value);
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    return /* @__PURE__ */ jsxs("div", { className: cn2(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: "search",
          onKeyDown: handleKeyDown,
          className: cn2(innerInput)
        }, props)
      )
    ] });
  }
);
SearchInput.displayName = "SearchInput";
var PhoneInput = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, countryCode = "+1" } = _b, props = __objRest(_b, ["className", "countryCode"]);
    return /* @__PURE__ */ jsxs("div", { className: cn2(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { className: "pl-2 pr-1 text-sm font-medium text-slate-600 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: countryCode }),
      /* @__PURE__ */ jsx(Input, __spreadValues({ ref, type: "tel", className: cn2(innerInput) }, props))
    ] });
  }
);
PhoneInput.displayName = "PhoneInput";
var PasswordInput = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const [visible, setVisible] = React33.useState(false);
    return /* @__PURE__ */ jsxs("div", { className: cn2(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: visible ? "text" : "password",
          className: cn2(innerInput)
        }, props)
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-10 w-10 shrink-0 rounded-none border-0",
          onClick: () => setVisible((v) => !v),
          tabIndex: -1,
          "aria-label": visible ? "Hide password" : "Show password",
          children: visible ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";
var UrlInput = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxs("div", { className: cn2(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { className: "pl-2 text-sm text-slate-400 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: "https://" }),
      /* @__PURE__ */ jsx(Input, __spreadValues({ ref, type: "url", className: cn2(innerInput) }, props))
    ] });
  }
);
UrlInput.displayName = "UrlInput";
var baseClass = "pointer-events-none select-none";
var overlayClass = "absolute inset-0 z-0";
function patternWrapper(overlay, className) {
  return cn2(baseClass, overlay && overlayClass, className);
}
var PatternDots = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.08,
      size = 24,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternDots.displayName = "PatternDots";
var PatternGrid = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.06,
      size = 40,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternGrid.displayName = "PatternGrid";
var PatternLines = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.06,
      size = 20,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: `100% ${size}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternLines.displayName = "PatternLines";
var PatternDiagonal = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.06,
      size = 16,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent ${size - 1}px,
          ${color} ${size - 1}px,
          ${color} ${size}px
        )`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternDiagonal.displayName = "PatternDiagonal";
var PatternCross = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.07,
      size = 32,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    const half = size / 2;
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `${half}px ${half}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternCross.displayName = "PatternCross";
var PatternCheckerboard = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.04,
      size = 32,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    const half = size / 2;
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `
            linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%),
            linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 75%, ${color} 75%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, ${half}px ${half}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternCheckerboard.displayName = "PatternCheckerboard";
var PatternDiamond = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.05,
      size = 28,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    const half = size / 2;
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `
            linear-gradient(45deg, ${color} 12.5%, transparent 12.5%, transparent 87.5%, ${color} 87.5%),
            linear-gradient(135deg, ${color} 12.5%, transparent 12.5%, transparent 87.5%, ${color} 87.5%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, ${half}px 0`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternDiamond.displayName = "PatternDiamond";
var PatternZigzag = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.06,
      size = 20,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `
          linear-gradient(135deg, ${color} 25%, transparent 25%),
          linear-gradient(225deg, ${color} 25%, transparent 25%),
          linear-gradient(315deg, ${color} 25%, transparent 25%),
          linear-gradient(45deg, ${color} 25%, transparent 25%)
        `,
          backgroundSize: `${size}px ${size / 2}px`,
          backgroundPosition: `0 0, ${size / 2}px 0, ${size / 2}px -${size / 4}px, 0 ${size / 4}px`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternZigzag.displayName = "PatternZigzag";
var PatternDashedGrid = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      opacity = 0.08,
      size = 48,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "color",
      "opacity",
      "size",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            ${color} 4px,
            ${color} 5px,
            transparent 5px,
            transparent ${size}px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 4px,
            ${color} 4px,
            ${color} 5px,
            transparent 5px,
            transparent ${size}px
          )
        `,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternDashedGrid.displayName = "PatternDashedGrid";
var PatternRadial = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      from = "rgba(220,38,38,0.08)",
      to = "transparent",
      opacity = 1,
      overlay,
      className,
      style
    } = _b, props = __objRest(_b, [
      "from",
      "to",
      "opacity",
      "overlay",
      "className",
      "style"
    ]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        className: patternWrapper(overlay, className),
        style: __spreadValues({
          backgroundImage: `radial-gradient(ellipse at center, ${from}, ${to})`,
          opacity
        }, style),
        "aria-hidden": "true"
      }, props)
    );
  }
);
PatternRadial.displayName = "PatternRadial";
var ScrollArea = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      children,
      maxHeight = 320,
      orientation = "vertical",
      scrollbarSize = "md",
      style
    } = _b, props = __objRest(_b, [
      "className",
      "children",
      "maxHeight",
      "orientation",
      "scrollbarSize",
      "style"
    ]);
    const sizeMap = { sm: 6, md: 10, lg: 14 };
    const sz = sizeMap[scrollbarSize];
    const overflowClass = orientation === "horizontal" ? "overflow-x-auto overflow-y-hidden" : orientation === "both" ? "overflow-auto" : "overflow-y-auto overflow-x-hidden";
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn2("poyraz-scroll-area relative", overflowClass, className),
        style: __spreadValues({
          maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
          "--sb-size": `${sz}px`
        }, style)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsx(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
/* \u2500\u2500 Modern standard \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.poyraz-scroll-area {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 transparent;
}

/* \u2500\u2500 Webkit (Chrome, Safari, Edge) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.poyraz-scroll-area::-webkit-scrollbar {
  width: var(--sb-size, 10px);
  height: var(--sb-size, 10px);
}

.poyraz-scroll-area::-webkit-scrollbar-track {
  background: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 3px,
    #e2e8f0 3px,
    #e2e8f0 4px
  );
  border-left: 1px dashed #cbd5e1;
}

.poyraz-scroll-area::-webkit-scrollbar-track:horizontal {
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 3px,
    #e2e8f0 3px,
    #e2e8f0 4px
  );
  border-left: none;
  border-top: 1px dashed #cbd5e1;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border: 1px dashed #475569;
  min-height: 32px;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:hover {
  background: #64748b;
  border-color: #334155;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:active {
  background: #475569;
}

.poyraz-scroll-area::-webkit-scrollbar-corner {
  background: transparent;
  border: 1px dashed #e2e8f0;
}
`
              }
            }
          )
        ]
      })
    );
  }
);
ScrollArea.displayName = "ScrollArea";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Item,
    __spreadValues({
      ref,
      className: cn2("border-b-2 border-dashed border-slate-200", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
    AccordionPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var AccordionContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    AccordionPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsx("div", { className: cn2("pb-4 pt-0", className), children })
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
var Alert = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "default", icon, children } = _b, props = __objRest(_b, ["className", "variant", "icon", "children"]);
    const IconComponent = variantIcons[variant != null ? variant : "default"];
    return /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: "alert",
        className: cn2(alertVariants({ variant }), className)
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
var AlertTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h5",
    __spreadValues({
      ref,
      className: cn2(
        "mb-1 font-bold leading-none tracking-tight uppercase text-sm",
        className
      )
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";
var Breadcrumb = React33.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx("nav", __spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ol",
    __spreadValues({
      ref,
      className: cn2(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "li",
    __spreadValues({
      ref,
      className: cn2("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React33.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? "span" : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    __spreadValues({
      ref,
      className: cn2("transition-colors hover:text-slate-950", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn2("font-normal text-slate-950", className)
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
      className: cn2("[&>svg]:size-3.5", className)
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
      className: cn2("flex h-9 w-9 items-center justify-center", className)
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
var DialogOverlay = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn2(
        "fixed inset-0 z-50 bg-white/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn2(
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
      className: cn2(
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
      className: cn2(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn2(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn2("text-sm text-slate-500", className)
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
var DropdownMenuSubTrigger = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var DropdownMenuSubContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      ref,
      className: cn2(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn2(
        "z-50 min-w-[8rem] overflow-hidden border-2 border-dashed border-slate-200 bg-white p-1 text-slate-950 shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      ref,
      className: cn2(
        "relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var DropdownMenuRadioItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var DropdownMenuLabel = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      ref,
      className: cn2(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn2("-mx-1 my-1 h-px bg-slate-100", className)
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
      className: cn2("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Form = FormProvider;
var FormFieldContext = React33.createContext(
  {}
);
var FormField = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, __spreadValues({}, props)) });
};
var useFormField = () => {
  const fieldContext = React33.useContext(FormFieldContext);
  const itemContext = React33.useContext(FormItemContext);
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
var FormItemContext = React33.createContext(
  {}
);
var FormItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React33.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn2("space-y-2", className) }, props)) });
});
FormItem.displayName = "FormItem";
var FormLabel = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    __spreadValues({
      ref,
      className: cn2(error && "text-red-600", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React33.forwardRef((_a, ref) => {
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
var FormDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      id: formDescriptionId,
      className: cn2("text-sm text-slate-500", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React33.forwardRef((_a, ref) => {
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
      className: cn2("text-sm font-medium text-red-600", className)
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
      className: cn2("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "ul",
    __spreadValues({
      ref,
      className: cn2(
        "flex flex-row flex-wrap items-center justify-center gap-1",
        className
      )
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("li", __spreadValues({ ref, className: cn2("", className) }, props));
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
      className: cn2(
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
      className: cn2("gap-1 pl-2.5", className)
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
      className: cn2("gap-1 pr-2.5", className)
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
      className: cn2("flex h-9 w-9 items-center justify-center", className)
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
var PopoverContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    PopoverPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn2(
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
var SelectTrigger = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var SelectScrollUpButton = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
            className: cn2(
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
var SelectLabel = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Label,
    __spreadValues({
      ref,
      className: cn2("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
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
var SelectSeparator = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SelectPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn2("-mx-1 my-1 h-px bg-slate-100", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
var Toaster = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Toaster$1,
    __spreadValues({
      className: cn2("toaster group", className),
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: cn2(
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
          actionButton: cn2(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-900 rounded-none shadow-none",
            "bg-slate-900 text-white",
            "hover:bg-slate-800 transition-colors",
            "cursor-pointer"
          ),
          cancelButton: cn2(
            "inline-flex items-center justify-center",
            "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
            "border-2 border-dashed border-slate-300 rounded-none shadow-none",
            "bg-white text-slate-600",
            "hover:bg-slate-50 transition-colors",
            "cursor-pointer"
          ),
          closeButton: cn2(
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
var TabsList = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    __spreadValues({
      ref,
      className: cn2(
        "inline-flex h-auto min-h-[44px] items-center p-0 text-slate-500",
        "w-full overflow-x-auto scrollbar-none",
        "flex-wrap sm:flex-nowrap",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    __spreadValues({
      ref,
      className: cn2(
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
var TabsContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn2(
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
var TooltipContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn2(
        "z-50 overflow-hidden border-2 border-dashed border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
var HoverCard = HoverCardPrimitive.Root;
var HoverCardTrigger = HoverCardPrimitive.Trigger;
var HoverCardContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsx(
    HoverCardPrimitive.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn2(
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
  const [viewYear, setViewYear] = React33.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getFullYear()
  );
  const [viewMonth, setViewMonth] = React33.useState(
    () => (selected != null ? selected : /* @__PURE__ */ new Date()).getMonth()
  );
  const [view, setView] = React33.useState("days");
  const [decadeStart, setDecadeStart] = React33.useState(() => {
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
            className: cn2(
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
            className: cn2(
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
            className: cn2(
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
            className: cn2(
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
            className: cn2(
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
  return /* @__PURE__ */ jsxs("div", { className: cn2("p-3 select-none", className), children: [
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
  const [open, setOpen] = React33.useState(false);
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
        className: cn2(
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
var DrawerOverlay = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    __spreadValues({
      ref,
      className: cn2("fixed inset-0 z-50 bg-black/40", className)
    }, props)
  );
});
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
var DrawerContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn2(
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
      className: cn2("grid gap-1.5 p-4 text-center sm:text-left", className)
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
      className: cn2("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    __spreadValues({
      ref,
      className: cn2(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = Drawer$1.Title.displayName;
var DrawerDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    __spreadValues({
      ref,
      className: cn2("text-sm text-slate-500", className)
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
var ModalOverlay = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn2(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
ModalOverlay.displayName = "ModalOverlay";
var ModalContent = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, size, position, hideClose = false } = _b, props = __objRest(_b, ["className", "children", "size", "position", "hideClose"]);
    return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
      /* @__PURE__ */ jsx(ModalOverlay, {}),
      /* @__PURE__ */ jsxs(
        DialogPrimitive.Content,
        __spreadProps(__spreadValues({
          ref,
          className: cn2(modalContentVariants({ size, position }), className)
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
      className: cn2("flex flex-col space-y-1.5 text-left", className)
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
      className: cn2(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
ModalFooter.displayName = "ModalFooter";
var ModalTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn2(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
ModalTitle.displayName = "ModalTitle";
var ModalDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn2("text-sm text-slate-500", className)
    }, props)
  );
});
ModalDescription.displayName = "ModalDescription";
var CommandPaletteCtx = React33.createContext({
  search: "",
  setSearch: () => {
  }
});
function CommandPalette(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  const [search, setSearch] = React33.useState("");
  const handleOpenChange = (open) => {
    var _a2;
    if (!open) setSearch("");
    (_a2 = props.onOpenChange) == null ? void 0 : _a2.call(props, open);
  };
  return /* @__PURE__ */ jsx(CommandPaletteCtx.Provider, { value: { search, setSearch }, children: /* @__PURE__ */ jsx(DialogPrimitive.Root, __spreadProps(__spreadValues({}, props), { onOpenChange: handleOpenChange, children })) });
}
CommandPalette.displayName = "CommandPalette";
var CommandPaletteTrigger = DialogPrimitive.Trigger;
var CommandPaletteContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
    /* @__PURE__ */ jsx(
      DialogPrimitive.Overlay,
      {
        className: cn2(
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
        className: cn2(
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
var CommandPaletteInput = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, onValueChange } = _b, props = __objRest(_b, ["className", "onValueChange"]);
  const { search, setSearch } = React33.useContext(CommandPaletteCtx);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn2(
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
            className: cn2(
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
var CommandPaletteList = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2("max-h-[300px] overflow-y-auto p-2", className),
      role: "listbox"
    }, props)
  );
});
CommandPaletteList.displayName = "CommandPaletteList";
var CommandPaletteGroup = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, heading, children } = _b, props = __objRest(_b, ["className", "heading", "children"]);
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn2("py-1", className), role: "group" }, props), { children: [
    heading && /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400", children: heading }),
    children
  ] }));
});
CommandPaletteGroup.displayName = "CommandPaletteGroup";
var CommandPaletteItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children, shortcut, disabled, icon } = _b, props = __objRest(_b, ["className", "children", "shortcut", "disabled", "icon"]);
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      role: "option",
      "aria-disabled": disabled,
      className: cn2(
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
var CommandPaletteEmpty = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2("py-8 text-center text-sm text-slate-400", className)
    }, props)
  );
});
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";
var CommandPaletteSeparator = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2("h-px bg-slate-100 my-1 -mx-2", className)
    }, props)
  );
});
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";
var CommandPaletteFooter = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn2(
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
  return React33.useContext(CommandPaletteCtx);
}
var Sheet = DialogPrimitive.Root;
var SheetTrigger = DialogPrimitive.Trigger;
var SheetClose = DialogPrimitive.Close;
var SheetPortal = DialogPrimitive.Portal;
var SheetOverlay = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn2(
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
var SheetContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = __objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn2(sheetContentVariants({ side }), className)
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
      className: cn2("flex flex-col space-y-2 text-left", className)
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
      className: cn2(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-auto pt-4 border-t-2 border-dashed border-slate-100",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn2(
        "text-lg font-semibold leading-none tracking-tight text-slate-900",
        className
      )
    }, props)
  );
});
SheetTitle.displayName = "SheetTitle";
var SheetDescription = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn2("text-sm text-slate-500", className)
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
  const [open, setOpen] = React33.useState(false);
  const [query, setQuery] = React33.useState("");
  const [highlightIndex, setHighlightIndex] = React33.useState(-1);
  const wrapperRef = React33.useRef(null);
  const inputRef = React33.useRef(null);
  const listRef = React33.useRef(null);
  const selectedValues = React33.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);
  const filtered = React33.useMemo(() => {
    if (!query) return options;
    return options.filter((o) => filterFn(o, query));
  }, [options, query, filterFn]);
  const grouped = React33.useMemo(() => {
    var _a;
    const groups = /* @__PURE__ */ new Map();
    for (const opt of filtered) {
      const key = (_a = opt.group) != null ? _a : "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(opt);
    }
    return groups;
  }, [filtered]);
  const flatFiltered = React33.useMemo(() => {
    const arr = [];
    for (const opts of grouped.values()) arr.push(...opts);
    return arr;
  }, [grouped]);
  React33.useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        if (!freeSolo) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [freeSolo]);
  React33.useEffect(() => {
    setHighlightIndex(-1);
  }, [query]);
  React33.useEffect(() => {
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
  React33.useEffect(() => {
    var _a;
    if (!multiple && selectedValues.length > 0 && !open) {
      const label = (_a = options.find((o) => o.value === selectedValues[0])) == null ? void 0 : _a.label;
      if (label) setQuery(label);
    }
  }, [selectedValues, multiple, open, options]);
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className: cn2("relative w-full", className), children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn2(
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
                className: cn2(
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
              className: cn2(
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
        className: cn2(
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
                  className: cn2(
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
var DEFAULT_CONTAINER = "max-w-5xl mx-auto";
var NavbarContext = React33.createContext({
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default",
  containerClassName: DEFAULT_CONTAINER
});
var useNavbar = () => React33.useContext(NavbarContext);
var navbarVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-white text-slate-950",
      minimal: "bg-white text-slate-950",
      transparent: "bg-transparent text-slate-950",
      bordered: "bg-white text-slate-950 border-2 border-dashed border-slate-300"
    }
  },
  defaultVariants: { variant: "default" }
});
var Navbar = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      sticky = false,
      autoHide = false,
      containerClassName,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "sticky",
      "autoHide",
      "containerClassName",
      "children"
    ]);
    const [mobileOpen, setMobileOpen] = React33.useState(false);
    const [hidden, setHidden] = React33.useState(false);
    const lastScrollY = React33.useRef(0);
    React33.useEffect(() => {
      if (!autoHide || !sticky) return;
      const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > lastScrollY.current && currentY > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastScrollY.current = currentY;
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [autoHide, sticky]);
    return /* @__PURE__ */ jsx(
      NavbarContext.Provider,
      {
        value: {
          mobileOpen,
          setMobileOpen,
          variant: variant != null ? variant : "default",
          containerClassName: containerClassName != null ? containerClassName : DEFAULT_CONTAINER
        },
        children: /* @__PURE__ */ jsx(
          "nav",
          __spreadProps(__spreadValues({
            ref,
            className: cn2(
              navbarVariants({ variant }),
              sticky && "sticky top-0 z-50",
              autoHide && "transition-transform duration-300",
              hidden && "-translate-y-full",
              className
            )
          }, props), {
            children
          })
        )
      }
    );
  }
);
Navbar.displayName = "Navbar";
var NavbarTopBar = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { containerClassName } = useNavbar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "w-full",
        "text-xs font-medium tracking-wide",
        "bg-red-600 text-white border-b-2 border-dashed border-red-800",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn2(
            "px-6 py-1.5 sm:px-0",
            "flex items-center justify-between",
            containerClassName
          ),
          children
        }
      )
    })
  );
});
NavbarTopBar.displayName = "NavbarTopBar";
var NavbarMain = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { variant, containerClassName } = useNavbar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "relative w-full",
        "border-b-2 border-dashed",
        variant === "transparent" ? "border-white/30" : variant === "bordered" ? "border-slate-300" : "border-slate-200",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn2(
            "px-6 py-3",
            "flex items-center justify-between gap-4 sm:gap-6",
            "overflow-hidden",
            containerClassName
          ),
          children
        }
      )
    })
  );
});
NavbarMain.displayName = "NavbarMain";
var NavbarBrand = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, href } = _b, props = __objRest(_b, ["className", "children", "href"]);
    if (href) {
      return /* @__PURE__ */ jsx(
        Link,
        __spreadProps(__spreadValues({
          href,
          className: cn2("flex items-center gap-2", className)
        }, props), {
          children
        })
      );
    }
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn2("flex items-center gap-2", className)
      }, props), {
        children
      })
    );
  }
);
NavbarBrand.displayName = "NavbarBrand";
var NavbarLinks = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn2("static z-10 hidden lg:flex items-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(NavigationMenuPrimitive.List, { className: "flex items-center gap-1", children }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full w-full z-[60]", children: /* @__PURE__ */ jsx(
          NavigationMenuPrimitive.Viewport,
          {
            className: cn2(
              "relative w-full overflow-hidden",
              "bg-white",
              "border-2 border-dashed border-slate-200 border-t-0",
              "rounded-none shadow-none",
              "h-[var(--radix-navigation-menu-viewport-height)]",
              "transition-[width,height] duration-200",
              "data-[state=open]:animate-in data-[state=open]:fade-in",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out"
            )
          }
        ) })
      ]
    })
  );
});
NavbarLinks.displayName = "NavbarLinks";
var navLinkStyles = [
  "inline-flex items-center gap-1 px-3 py-2",
  "text-sm font-medium tracking-wide",
  "rounded-none transition-colors duration-150",
  "hover:bg-slate-100",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
  "data-[active]:border-b-2 data-[active]:border-dashed data-[active]:border-red-600"
].join(" ");
var NavbarLink = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(NavigationMenuPrimitive.Item, { children: /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(navLinkStyles, className)
    }, props), {
      children
    })
  ) });
});
NavbarLink.displayName = "NavbarLink";
var NavbarDropdownTrigger = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn2(navLinkStyles, "group cursor-pointer", className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(
          ChevronDown,
          {
            className: "h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180",
            "aria-hidden": true
          }
        )
      ]
    })
  );
});
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";
var NavbarDropdown = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = __objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Item, __spreadProps(__spreadValues({ ref, className: cn2(className) }, props), { children: [
    /* @__PURE__ */ jsx(NavbarDropdownTrigger, { children: label }),
    /* @__PURE__ */ jsx(
      NavigationMenuPrimitive.Content,
      {
        className: cn2(
          "absolute left-0 top-0 w-full",
          "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
          "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
          "data-[motion=from-end]:slide-in-from-right-52",
          "data-[motion=from-start]:slide-in-from-left-52",
          "data-[motion=to-end]:slide-out-to-right-52",
          "data-[motion=to-start]:slide-out-to-left-52"
        ),
        children
      }
    )
  ] }));
});
NavbarDropdown.displayName = "NavbarDropdown";
var NavbarMegaMenu = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2("grid gap-4 p-6", "md:w-[500px] lg:w-[700px]", className)
    }, props), {
      children
    })
  );
});
NavbarMegaMenu.displayName = "NavbarMegaMenu";
var NavbarMegaMenuItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, title, description, children } = _b, props = __objRest(_b, ["className", "title", "description", "children"]);
  return /* @__PURE__ */ jsx(NavigationMenuPrimitive.Link, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "block select-none p-3",
        "border-2 border-dashed border-transparent",
        "rounded-none transition-colors",
        "hover:bg-slate-50 hover:border-slate-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold leading-none", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500 leading-snug", children: description }),
        children
      ]
    })
  ) });
});
NavbarMegaMenuItem.displayName = "NavbarMegaMenuItem";
var NavbarActions = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2("hidden lg:flex items-center gap-2 shrink-0", className)
    }, props), {
      children
    })
  );
});
NavbarActions.displayName = "NavbarActions";
var NavbarMobileToggle = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      "aria-label": mobileOpen ? "Close menu" : "Open menu",
      onClick: () => setMobileOpen((prev) => !prev),
      className: cn2(
        "inline-flex items-center justify-center",
        "h-10 w-10",
        "border-2 border-dashed rounded-none",
        "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
        "transition-colors duration-150",
        "lg:hidden",
        "cursor-pointer",
        className
      )
    }, props), {
      children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
    })
  );
});
NavbarMobileToggle.displayName = "NavbarMobileToggle";
var NavbarMobileMenu = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  React33.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn2(
          "lg:hidden fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: () => setMobileOpen(false),
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn2(
          "lg:hidden fixed top-0 right-0 z-[999] h-full w-[75%] max-w-sm",
          "bg-white",
          "border-l-2 border-dashed border-slate-200",
          "shadow-none",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b-2 border-dashed border-slate-200", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-slate-400", children: "Menu" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close menu",
                onClick: () => setMobileOpen(false),
                className: cn2(
                  "inline-flex items-center justify-center",
                  "h-8 w-8",
                  "border-2 border-dashed rounded-none",
                  "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
                  "transition-colors duration-150",
                  "cursor-pointer"
                ),
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-1 px-4 py-4 overflow-y-auto h-[calc(100%-57px)]", children })
        ]
      })
    )
  ] });
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, active, children } = _b, props = __objRest(_b, ["className", "active", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "block px-3 py-2.5",
        "text-sm font-medium",
        "border-2 border-dashed border-transparent",
        "transition-colors duration-150",
        active ? "bg-red-50 text-red-700 border-red-200 font-semibold" : "hover:bg-slate-50 hover:border-slate-200",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileGroup = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = __objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn2("mb-3", className) }, props), { children: [
    label && /* @__PURE__ */ jsx("div", { className: "px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400", children: label }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-0.5", children })
  ] }));
});
NavbarMobileGroup.displayName = "NavbarMobileGroup";
var NavbarMobileActions = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "mt-auto px-4 py-4",
        "border-t-2 border-dashed border-slate-200",
        "flex flex-col gap-2",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMobileActions.displayName = "NavbarMobileActions";
var NavbarSearch = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      placeholder = "Search\u2026",
      onSearch,
      wrapperClassName
    } = _b, props = __objRest(_b, [
      "className",
      "placeholder",
      "onSearch",
      "wrapperClassName"
    ]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn2("relative hidden sm:flex items-center", wrapperClassName),
        children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-2.5 h-3.5 w-3.5 text-slate-400" }),
          /* @__PURE__ */ jsx(
            "input",
            __spreadValues({
              ref,
              type: "text",
              placeholder,
              onKeyDown: handleKeyDown,
              className: cn2(
                "h-8 w-40 lg:w-52 pl-8 pr-3",
                "text-xs font-medium",
                "border-2 border-dashed rounded-none",
                "bg-white border-slate-300 text-slate-950 placeholder:text-slate-400",
                "transition-colors duration-150",
                "focus:outline-none focus:ring-2 focus:ring-red-600",
                className
              )
            }, props)
          )
        ]
      }
    );
  }
);
NavbarSearch.displayName = "NavbarSearch";
var NavbarDivider = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      role: "separator",
      className: cn2(
        "hidden lg:block",
        "h-6 w-px",
        "border-l-2 border-dashed border-slate-200",
        "mx-2",
        className
      )
    }, props)
  );
});
NavbarDivider.displayName = "NavbarDivider";
var SidebarContext = React33.createContext({
  collapsed: false,
  setCollapsed: () => {
  },
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default"
});
var useSidebar = () => React33.useContext(SidebarContext);
function isDarkVariant(v) {
  return v === "dark";
}
var sidebarVariants = cva(
  ["flex flex-col", "transition-all duration-300 ease-out", "h-full"].join(" "),
  {
    variants: {
      variant: {
        default: "w-64 bg-white text-slate-950 border-r-2 border-dashed border-slate-200",
        collapsible: "bg-white text-slate-950 border-r-2 border-dashed border-slate-200",
        floating: "fixed inset-y-0 left-0 z-50 w-72 bg-white text-slate-950 border-r-2 border-dashed border-slate-200",
        mini: "w-16 bg-white text-slate-950 border-r-2 border-dashed border-slate-200",
        dark: "w-64 bg-slate-950 text-slate-100 border-r-2 border-dashed border-slate-800",
        bordered: "w-64 bg-white text-slate-950 border-2 border-dashed border-slate-300"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Sidebar = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      defaultCollapsed = false,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "defaultCollapsed",
      "children"
    ]);
    const [collapsed, setCollapsed] = React33.useState(
      variant === "mini" ? true : defaultCollapsed
    );
    const [mobileOpen, setMobileOpen] = React33.useState(false);
    const resolvedVariant = variant != null ? variant : "default";
    const collapsibleWidth = resolvedVariant === "collapsible" ? collapsed ? "w-16" : "w-64" : "";
    if (resolvedVariant === "floating" && !mobileOpen) {
      return /* @__PURE__ */ jsx(
        SidebarContext.Provider,
        {
          value: {
            collapsed,
            setCollapsed,
            mobileOpen,
            setMobileOpen,
            variant: resolvedVariant
          },
          children: /* @__PURE__ */ jsx("aside", __spreadProps(__spreadValues({ ref, className: "hidden" }, props), { children }))
        }
      );
    }
    return /* @__PURE__ */ jsxs(
      SidebarContext.Provider,
      {
        value: {
          collapsed,
          setCollapsed,
          mobileOpen,
          setMobileOpen,
          variant: resolvedVariant
        },
        children: [
          resolvedVariant === "floating" && mobileOpen && /* @__PURE__ */ jsx(
            "div",
            {
              className: "fixed inset-0 z-40 bg-black/40",
              onClick: () => setMobileOpen(false)
            }
          ),
          /* @__PURE__ */ jsx(
            "aside",
            __spreadProps(__spreadValues({
              ref,
              className: cn2(
                sidebarVariants({ variant: resolvedVariant }),
                collapsibleWidth,
                resolvedVariant === "floating" && "shadow-none",
                className
              )
            }, props), {
              children
            })
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarHeader = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex items-center gap-3 shrink-0",
        "px-4 py-4",
        "border-b-2 border-dashed",
        dark ? "border-slate-800" : "border-slate-200",
        collapsed && variant !== "default" && variant !== "dark" && variant !== "bordered" && "justify-center px-2",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarContent = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex-1 overflow-y-auto overflow-x-hidden",
        "px-3 py-4",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ ref, className: cn2("mb-4", className) }, props), { children }));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  if (collapsed) return null;
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "px-3 mb-2",
        "text-[10px] font-bold uppercase tracking-[0.15em]",
        dark ? "text-slate-500" : "text-slate-400",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarMenu = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("ul", __spreadProps(__spreadValues({ ref, className: cn2("flex flex-col gap-0.5", className) }, props), { children }));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, active, icon, badge, href, children } = _b, props = __objRest(_b, ["className", "active", "icon", "badge", "href", "children"]);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    const content = /* @__PURE__ */ jsxs(
      "li",
      __spreadProps(__spreadValues({
        ref,
        className: cn2(
          "group relative flex items-center gap-3",
          "px-3 py-2.5",
          "text-sm font-medium",
          "rounded-none transition-colors duration-150",
          "cursor-pointer",
          // Active state
          active ? [
            dark ? "bg-red-950 text-red-400 font-semibold" : "bg-red-50 text-red-700 font-semibold",
            "border-l-[3px] border-solid border-red-600",
            "pl-[calc(0.75rem-3px)]"
          ].join(" ") : [
            dark ? "text-slate-400 hover:bg-slate-900 hover:text-slate-200" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]"
          ].join(" "),
          collapsed && "justify-center px-0 pl-0 border-l-0",
          className
        )
      }, props), {
        children: [
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn2(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                active ? "text-red-600" : dark ? "text-slate-500 group-hover:text-slate-300" : "text-slate-400 group-hover:text-slate-600"
              ),
              children: icon
            }
          ),
          !collapsed && /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children }),
          !collapsed && badge && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn2(
                "inline-flex items-center justify-center",
                "min-w-[20px] h-5 px-1.5",
                "text-[10px] font-bold",
                "border-2 border-dashed rounded-none",
                active ? "bg-red-600 text-white border-red-800" : dark ? "bg-slate-800 text-slate-300 border-slate-600" : "bg-slate-100 text-slate-600 border-slate-300"
              ),
              children: badge
            }
          ),
          collapsed && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn2(
                "absolute left-full ml-2 z-50",
                "px-2 py-1",
                "text-xs font-medium whitespace-nowrap",
                "bg-slate-900 text-white",
                "border-2 border-dashed border-slate-700",
                "opacity-0 pointer-events-none",
                "group-hover:opacity-100",
                "transition-opacity duration-150"
              ),
              children
            }
          )
        ]
      })
    );
    if (href) {
      return /* @__PURE__ */ jsx("a", { href, className: "no-underline", children: content });
    }
    return content;
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
var SidebarSeparator = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsx(
    "hr",
    __spreadValues({
      ref,
      className: cn2(
        "border-t-2 border-dashed",
        dark ? "border-slate-800" : "border-slate-200",
        "my-3 mx-3",
        className
      )
    }, props)
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarFooter = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "shrink-0",
        "px-4 py-3",
        "border-t-2 border-dashed",
        dark ? "border-slate-800" : "border-slate-200",
        collapsed && "px-2 flex justify-center",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarTrigger = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, action = "collapse" } = _b, props = __objRest(_b, ["className", "action"]);
    const { collapsed, setCollapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    const handleClick = () => {
      if (action === "mobile" || variant === "floating") {
        setMobileOpen((prev) => !prev);
      } else {
        setCollapsed((prev) => !prev);
      }
    };
    const isOpen = action === "mobile" ? mobileOpen : !collapsed;
    return /* @__PURE__ */ jsx(
      "button",
      __spreadProps(__spreadValues({
        ref,
        type: "button",
        "aria-label": isOpen ? "Collapse sidebar" : "Expand sidebar",
        onClick: handleClick,
        className: cn2(
          "inline-flex items-center justify-center",
          "h-9 w-9",
          "border-2 border-dashed rounded-none",
          dark ? "border-slate-600 hover:bg-slate-800 hover:border-slate-400 text-slate-300" : "border-slate-300 hover:bg-slate-100 hover:border-slate-500",
          "transition-colors duration-150",
          "cursor-pointer",
          className
        )
      }, props), {
        children: isOpen ? variant === "floating" || action === "mobile" ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PanelLeftOpen, { className: "h-4 w-4" })
      })
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarSearch = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, placeholder = "Search\u2026", onSearch } = _b, props = __objRest(_b, ["className", "placeholder", "onSearch"]);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    if (collapsed) return null;
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };
    return /* @__PURE__ */ jsx("div", { className: "px-3 mb-3", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ jsx(
        Search,
        {
          className: cn2(
            "absolute left-2.5 h-3.5 w-3.5",
            dark ? "text-slate-500" : "text-slate-400"
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        __spreadValues({
          ref,
          type: "text",
          placeholder,
          onKeyDown: handleKeyDown,
          className: cn2(
            "w-full h-8 pl-8 pr-3",
            "text-xs font-medium",
            "border-2 border-dashed rounded-none",
            "transition-colors duration-150",
            "focus:outline-none focus:ring-2 focus:ring-red-600",
            dark ? "bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-500" : "bg-white border-slate-300 text-slate-950 placeholder:text-slate-400",
            className
          )
        }, props)
      )
    ] }) });
  }
);
SidebarSearch.displayName = "SidebarSearch";
var SidebarSubMenu = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, label, icon, defaultOpen = false, children } = _b, props = __objRest(_b, ["className", "label", "icon", "defaultOpen", "children"]);
    const [open, setOpen] = React33.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    if (collapsed) return null;
    return /* @__PURE__ */ jsxs("div", __spreadProps(__spreadValues({ ref, className: cn2("", className) }, props), { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen((p) => !p),
          className: cn2(
            "w-full flex items-center gap-3",
            "px-3 py-2.5",
            "text-sm font-medium",
            "rounded-none transition-colors duration-150",
            "cursor-pointer",
            dark ? "text-slate-400 hover:bg-slate-900 hover:text-slate-200" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]"
          ),
          children: [
            icon && /* @__PURE__ */ jsx(
              "span",
              {
                className: cn2(
                  "shrink-0 w-5 h-5 flex items-center justify-center",
                  dark ? "text-slate-500" : "text-slate-400"
                ),
                children: icon
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "flex-1 truncate text-left", children: label }),
            /* @__PURE__ */ jsx(
              ChevronDown,
              {
                className: cn2(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  open && "rotate-180",
                  dark ? "text-slate-500" : "text-slate-400"
                )
              }
            )
          ]
        }
      ),
      open && /* @__PURE__ */ jsx(
        "div",
        {
          className: cn2(
            "ml-5 pl-3",
            "border-l-2 border-dashed",
            dark ? "border-slate-800" : "border-slate-200"
          ),
          children
        }
      )
    ] }));
  }
);
SidebarSubMenu.displayName = "SidebarSubMenu";
var SidebarSubMenuItem = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, active, href, children } = _b, props = __objRest(_b, ["className", "active", "href", "children"]);
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);
  const inner = /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "px-3 py-2",
        "text-sm",
        "rounded-none transition-colors duration-150",
        "cursor-pointer",
        active ? dark ? "text-red-400 font-semibold" : "text-red-700 font-semibold" : dark ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-950",
        className
      )
    }, props), {
      children
    })
  );
  if (href) {
    return /* @__PURE__ */ jsx("a", { href, className: "no-underline", children: inner });
  }
  return inner;
});
SidebarSubMenuItem.displayName = "SidebarSubMenuItem";
var SidebarUserProfile = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, name, role, avatarUrl, initials, children } = _b, props = __objRest(_b, ["className", "name", "role", "avatarUrl", "initials", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex items-center gap-3",
        collapsed && "justify-center",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn2(
              "shrink-0 w-9 h-9 flex items-center justify-center",
              "border-2 border-dashed rounded-none overflow-hidden",
              "text-xs font-bold",
              dark ? "border-slate-600 bg-slate-800 text-slate-200" : "border-slate-300 bg-slate-100 text-slate-600"
            ),
            children: avatarUrl ? /* @__PURE__ */ jsx(
              "img",
              {
                src: avatarUrl,
                alt: name,
                className: "w-full h-full object-cover"
              }
            ) : initials != null ? initials : name.charAt(0).toUpperCase()
          }
        ),
        !collapsed && /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn2(
                "text-sm font-semibold truncate",
                dark ? "text-slate-100" : "text-slate-900"
              ),
              children: name
            }
          ),
          role && /* @__PURE__ */ jsx(
            "div",
            {
              className: cn2(
                "text-xs truncate",
                dark ? "text-slate-500" : "text-slate-400"
              ),
              children: role
            }
          )
        ] }),
        children
      ]
    })
  );
});
SidebarUserProfile.displayName = "SidebarUserProfile";
var DEFAULT_CONTAINER2 = "max-w-5xl mx-auto";
var footerVariants = cva(["w-full", "border-t-2 border-dashed"].join(" "), {
  variants: {
    variant: {
      full: "py-12 bg-white text-slate-950 border-slate-200",
      compact: "py-4 bg-white text-slate-950 border-slate-200",
      branded: "py-10 bg-white text-slate-950 border-slate-200",
      centered: "py-12 text-center bg-white text-slate-950 border-slate-200",
      dark: "py-12 bg-slate-950 text-slate-100 border-slate-800"
    }
  },
  defaultVariants: { variant: "full" }
});
var Footer = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "full", containerClassName, children } = _b, props = __objRest(_b, ["className", "variant", "containerClassName", "children"]);
    return /* @__PURE__ */ jsx(
      "footer",
      __spreadProps(__spreadValues({
        ref,
        className: cn2(footerVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsx("div", { className: cn2("px-6", containerClassName != null ? containerClassName : DEFAULT_CONTAINER2), children })
      })
    );
  }
);
Footer.displayName = "Footer";
var FooterGrid = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "grid gap-8",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )
    }, props), {
      children
    })
  );
});
FooterGrid.displayName = "FooterGrid";
var FooterSection = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ ref, className: cn2("flex flex-col gap-3", className) }, props), { children }));
});
FooterSection.displayName = "FooterSection";
var FooterHeading = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "h4",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "text-xs font-bold uppercase tracking-[0.15em]",
        "text-slate-900",
        "pb-2",
        "border-b-2 border-dashed border-slate-200",
        className
      )
    }, props), {
      children
    })
  );
});
FooterHeading.displayName = "FooterHeading";
var FooterLink = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "text-sm text-slate-500",
        "hover:text-red-600 hover:underline",
        "transition-colors duration-150",
        className
      )
    }, props), {
      children
    })
  );
});
FooterLink.displayName = "FooterLink";
var FooterBrand = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2("flex flex-col items-start gap-3", "max-w-sm", className)
    }, props), {
      children
    })
  );
});
FooterBrand.displayName = "FooterBrand";
var FooterSocials = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2("flex items-center gap-2", className)
    }, props), {
      children
    })
  );
});
FooterSocials.displayName = "FooterSocials";
var FooterSocialLink = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "inline-flex items-center justify-center",
        "h-9 w-9",
        "border-2 border-dashed border-slate-300 rounded-none",
        "text-slate-500",
        "hover:bg-red-600 hover:text-white hover:border-red-800",
        "transition-colors duration-150",
        className
      )
    }, props), {
      children
    })
  );
});
FooterSocialLink.displayName = "FooterSocialLink";
var FooterBottom = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "flex flex-col sm:flex-row items-center justify-between gap-4",
        "pt-6 mt-8",
        "border-t-2 border-dashed border-slate-200",
        "text-xs text-slate-400",
        className
      )
    }, props), {
      children
    })
  );
});
FooterBottom.displayName = "FooterBottom";
var FooterBottomLinks = React33.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2("flex items-center gap-4 flex-wrap", "text-xs", className)
    }, props), {
      children
    })
  );
});
FooterBottomLinks.displayName = "FooterBottomLinks";
function FooterNewsletterInner(_a, ref) {
  var _b = _a, {
    className,
    heading = "Subscribe to our newsletter",
    description = "Get the latest updates and news directly in your inbox.",
    placeholder = "you@example.com",
    buttonText = "Subscribe",
    onSubscribe
  } = _b, props = __objRest(_b, [
    "className",
    "heading",
    "description",
    "placeholder",
    "buttonText",
    "onSubscribe"
  ]);
  const [email, setEmail] = React33.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe == null ? void 0 : onSubscribe(email.trim());
      setEmail("");
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn2(
        "py-6 px-6",
        "border-2 border-dashed border-slate-200",
        "bg-slate-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-bold uppercase tracking-wide mb-1", children: heading }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mb-4", children: description }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder,
              required: true,
              className: cn2(
                "flex-1 h-10 px-3 text-sm",
                "border-2 border-dashed border-slate-300 bg-white",
                "placeholder:text-slate-400",
                "focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-offset-1",
                "rounded-none shadow-none"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: cn2(
                "h-10 px-5",
                "text-xs font-bold uppercase tracking-wide",
                "bg-red-600 text-white",
                "border-2 border-dashed border-red-800",
                "hover:bg-red-700 hover:border-red-900",
                "active:bg-red-800 active:scale-[0.97]",
                "transition-all duration-150",
                "rounded-none shadow-none cursor-pointer"
              ),
              children: buttonText
            }
          )
        ] })
      ]
    })
  );
}
var FooterNewsletter = React33.forwardRef(FooterNewsletterInner);
FooterNewsletter.displayName = "FooterNewsletter";
var FooterDivider = React33.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "hr",
    __spreadValues({
      ref,
      className: cn2("border-t-2 border-dashed border-slate-200 my-8", className)
    }, props)
  );
});
FooterDivider.displayName = "FooterDivider";
var announcementBarVariants = cva(
  [
    "relative w-full",
    "text-sm font-medium tracking-wide",
    "border-b-2 border-dashed",
    "transition-all duration-300"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white border-slate-700",
        info: "bg-blue-600 text-white border-blue-800",
        success: "bg-emerald-600 text-white border-emerald-800",
        warning: "bg-amber-500 text-black border-amber-700",
        danger: "bg-red-600 text-white border-red-800",
        branded: "bg-red-600 text-white border-red-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AnnouncementBar = React33.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      dismissible = true,
      onDismiss,
      icon,
      action,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "dismissible",
      "onDismiss",
      "icon",
      "action",
      "children"
    ]);
    const [dismissed, setDismissed] = React33.useState(false);
    if (dismissed) return null;
    const handleDismiss = () => {
      setDismissed(true);
      onDismiss == null ? void 0 : onDismiss();
    };
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: "banner",
        className: cn2(announcementBarVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 py-2 flex items-center justify-center gap-3", children: [
          icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-center", children }),
          action && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: action }),
          dismissible && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleDismiss,
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      })
    );
  }
);
AnnouncementBar.displayName = "AnnouncementBar";
function getCellValue(row, col) {
  if (col.accessorFn) return col.accessorFn(row);
  if (col.accessorKey)
    return row[col.accessorKey];
  return row[col.id];
}
function stringify(val) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return JSON.stringify(val);
}
function DataTableInner({
  columns,
  data,
  getRowId,
  pageSize = 10,
  pagination = true,
  searchable = true,
  searchPlaceholder = "Search...",
  selectable = false,
  onSelectionChange,
  columnToggle = false,
  className,
  caption,
  emptyMessage = "No results found."
}, ref) {
  const [search, setSearch] = React33.useState("");
  const [sortCol, setSortCol] = React33.useState(null);
  const [sortDir, setSortDir] = React33.useState(null);
  const [page, setPage] = React33.useState(0);
  const [selectedIds, setSelectedIds] = React33.useState(/* @__PURE__ */ new Set());
  const [hiddenCols, setHiddenCols] = React33.useState(
    () => new Set(columns.filter((c) => c.hidden).map((c) => c.id))
  );
  const [colToggleOpen, setColToggleOpen] = React33.useState(false);
  const visibleColumns = columns.filter((c) => !hiddenCols.has(c.id));
  const filtered = React33.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (row) => columns.some((col) => {
        const val = getCellValue(row, col);
        return stringify(val).toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);
  const sorted = React33.useMemo(() => {
    if (!sortCol || !sortDir) return filtered;
    const col = columns.find((c) => c.id === sortCol);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getCellValue(a, col);
      const bVal = getCellValue(b, col);
      const aStr = stringify(aVal);
      const bStr = stringify(bVal);
      const aNum = Number(aStr);
      const bNum = Number(bStr);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDir === "asc" ? aNum - bNum : bNum - aNum;
      }
      const cmp = aStr.localeCompare(bStr);
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortCol, sortDir, columns]);
  const totalPages = pagination ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const rows = pagination ? sorted.slice(page * pageSize, (page + 1) * pageSize) : sorted;
  React33.useEffect(() => {
    setPage(0);
  }, [search, data]);
  const rowId = (row, i) => getRowId ? getRowId(row, i) : String(i);
  const allPageSelected = rows.length > 0 && rows.every((row, i) => selectedIds.has(rowId(row, page * pageSize + i)));
  const toggleRow = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleAll = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allPageSelected) {
        rows.forEach(
          (_, i) => next.delete(rowId(rows[i], page * pageSize + i))
        );
      } else {
        rows.forEach((_, i) => next.add(rowId(rows[i], page * pageSize + i)));
      }
      return next;
    });
  };
  React33.useEffect(() => {
    if (!selectable || !onSelectionChange) return;
    const selected = data.filter((row, i) => selectedIds.has(rowId(row, i)));
    onSelectionChange(selected);
  }, [selectedIds]);
  const handleSort = (colId) => {
    if (sortCol !== colId) {
      setSortCol(colId);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else {
      setSortCol(null);
      setSortDir(null);
    }
  };
  const toggleColumn = (colId) => {
    setHiddenCols((prev) => {
      const next = new Set(prev);
      if (next.has(colId)) next.delete(colId);
      else next.add(colId);
      return next;
    });
  };
  return /* @__PURE__ */ jsxs("div", { ref, className: cn2("w-full space-y-4", className), children: [
    (searchable || columnToggle || selectable && selectedIds.size > 0) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
      searchable && /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: searchPlaceholder,
            className: "pl-9 h-9 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
        selectable && selectedIds.size > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
          selectedIds.size,
          " selected"
        ] }),
        columnToggle && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 gap-1.5",
              onClick: () => setColToggleOpen((v) => !v),
              children: [
                /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-3.5 w-3.5" }),
                "Columns"
              ]
            }
          ),
          colToggleOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "fixed inset-0 z-40",
                onClick: () => setColToggleOpen(false)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full mt-1 z-50 w-48 bg-white border-2 border-dashed border-slate-200 p-2 space-y-0.5", children: columns.map((col) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-slate-50 cursor-pointer transition-colors",
                onClick: () => toggleColumn(col.id),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn2(
                        "h-4 w-4 border-2 border-dashed flex items-center justify-center shrink-0",
                        hiddenCols.has(col.id) ? "border-slate-300" : "border-red-600 bg-red-600 text-white"
                      ),
                      children: !hiddenCols.has(col.id) && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
                    }
                  ),
                  col.header
                ]
              },
              col.id
            )) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-2 border-dashed border-slate-200 overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ jsx("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-dashed border-slate-200 bg-slate-50/80", children: [
        selectable && /* @__PURE__ */ jsx("th", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsx(
          Checkbox,
          {
            checked: allPageSelected && rows.length > 0,
            onCheckedChange: toggleAll,
            "aria-label": "Select all"
          }
        ) }),
        visibleColumns.map((col) => {
          const isSortable = col.sortable !== false;
          const isActive = sortCol === col.id;
          return /* @__PURE__ */ jsx(
            "th",
            {
              className: cn2(
                "text-left p-3 font-bold uppercase text-[11px] tracking-widest text-slate-500",
                "whitespace-nowrap",
                isSortable && "cursor-pointer select-none hover:text-slate-900 transition-colors",
                col.className
              ),
              onClick: isSortable ? () => handleSort(col.id) : void 0,
              children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                col.header,
                isSortable && /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: isActive && sortDir === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3.5 w-3.5 text-red-600" }) : isActive && sortDir === "desc" ? /* @__PURE__ */ jsx(ArrowDown, { className: "h-3.5 w-3.5 text-red-600" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3.5 w-3.5" }) })
              ] })
            },
            col.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
        "td",
        {
          colSpan: visibleColumns.length + (selectable ? 1 : 0),
          className: "p-10 text-center text-sm text-slate-400",
          children: emptyMessage
        }
      ) }) : rows.map((row, i) => {
        const id = rowId(row, page * pageSize + i);
        const isSelected = selectedIds.has(id);
        return /* @__PURE__ */ jsxs(
          "tr",
          {
            className: cn2(
              "border-b border-dashed border-slate-100 transition-colors",
              "hover:bg-slate-50/50",
              isSelected && "bg-red-50/50"
            ),
            children: [
              selectable && /* @__PURE__ */ jsx("td", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  checked: isSelected,
                  onCheckedChange: () => toggleRow(id),
                  "aria-label": `Select row ${i + 1}`
                }
              ) }),
              visibleColumns.map((col) => /* @__PURE__ */ jsx(
                "td",
                {
                  className: cn2("p-3 text-slate-700", col.className),
                  children: col.cell ? col.cell(row) : stringify(getCellValue(row, col))
                },
                col.id
              ))
            ]
          },
          id
        );
      }) })
    ] }) }),
    pagination && sorted.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: page * pageSize + 1 }),
        "\u2013",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: Math.min((page + 1) * pageSize, sorted.length) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: sorted.length }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage(0),
            "aria-label": "First page",
            children: /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage((p) => Math.max(0, p - 1)),
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "px-3 text-xs font-semibold text-slate-600", children: [
          page + 1,
          " / ",
          totalPages
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page >= totalPages - 1,
            onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page >= totalPages - 1,
            onClick: () => setPage(totalPages - 1),
            "aria-label": "Last page",
            children: /* @__PURE__ */ jsx(ChevronsRight, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] })
  ] });
}
var DataTable = React33.forwardRef(DataTableInner);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, AnnouncementBar, Autocomplete, Avatar, AvatarFallback, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Calendar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, CommandPalette, CommandPaletteContent, CommandPaletteEmpty, CommandPaletteFooter, CommandPaletteGroup, CommandPaletteInput, CommandPaletteItem, CommandPaletteList, CommandPaletteSeparator, CommandPaletteTrigger, DataTable, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Footer, FooterBottom, FooterBottomLinks, FooterBrand, FooterDivider, FooterGrid, FooterHeading, FooterLink, FooterNewsletter, FooterSection, FooterSocialLink, FooterSocials, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, Label, Logo, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalTitle, ModalTrigger, Navbar, NavbarActions, NavbarBrand, NavbarDivider, NavbarDropdown, NavbarDropdownTrigger, NavbarLink, NavbarLinks, NavbarMain, NavbarMegaMenu, NavbarMegaMenuItem, NavbarMobileActions, NavbarMobileGroup, NavbarMobileLink, NavbarMobileMenu, NavbarMobileToggle, NavbarSearch, NavbarTopBar, NumberInput, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PasswordInput, PatternCheckerboard, PatternCross, PatternDashedGrid, PatternDiagonal, PatternDiamond, PatternDots, PatternGrid, PatternLines, PatternRadial, PatternZigzag, PhoneInput, Popover, PopoverContent, PopoverTrigger, RadioGroup, RadioGroupItem, ScrollArea, SearchInput, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSearch, SidebarSeparator, SidebarSubMenu, SidebarSubMenuItem, SidebarTrigger, SidebarUserProfile, Skeleton, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, Typography, UrlInput, announcementBarVariants, badgeVariants, buttonVariants, cn, footerVariants, modalContentVariants, navbarVariants, sheetContentVariants, sidebarVariants, useCommandPalette, useFormField, useNavbar, useSidebar };
