"use client";
'use strict';

var React12 = require('react');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var classVarianceAuthority = require('class-variance-authority');
var reactSlot = require('@radix-ui/react-slot');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var Image2 = require('next/image');
var Link = require('next/link');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var SwitchPrimitive = require('@radix-ui/react-switch');
var lucideReact = require('lucide-react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

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

var React12__namespace = /*#__PURE__*/_interopNamespace(React12);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var Image2__default = /*#__PURE__*/_interopDefault(Image2);
var Link__default = /*#__PURE__*/_interopDefault(Link);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var SwitchPrimitive__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitive);

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
  return tailwindMerge.twMerge(clsx.clsx(inputs));
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    __spreadProps(__spreadValues({
      className: cn(
        variantMap[variant],
        secondaryFont && "font-secondary",
        className
      )
    }, props), {
      children
    })
  );
}
var Avatar = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
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
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full object-cover", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center",
        "bg-slate-100 text-slate-600",
        "text-xs font-semibold uppercase tracking-wide",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var badgeVariants = classVarianceAuthority.cva(
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", __spreadValues({ className: cn(badgeVariants({ variant }), className) }, props));
}
var buttonVariants = classVarianceAuthority.cva(
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
var Button = React12__namespace.forwardRef(
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
    const Component = asChild ? reactSlot.Slot : "button";
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Component,
      __spreadProps(__spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        disabled: isDisabled,
        "aria-busy": loading || void 0
      }, props), {
        children: loading ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "svg",
            {
              className: "animate-spin h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
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
                /* @__PURE__ */ jsxRuntime.jsx(
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
          /* @__PURE__ */ jsxRuntime.jsx("span", { children })
        ] }) : children
      })
    );
  }
);
Button.displayName = "Button";
var cardVariants = classVarianceAuthority.cva(
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
var Card = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, children } = _b, props = __objRest(_b, ["className", "variant", "children"]);
    if (variant === "elevated") {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("group relative", className), children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          __spreadProps(__spreadValues({
            ref,
            className: cn(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(cardVariants({ variant }), className)
      }, props), {
        children
      })
    );
  }
);
Card.displayName = "Card";
var CardImage = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, aspect = "aspect-video", children } = _b, props = __objRest(_b, ["className", "aspect", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
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
var CardHeader = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col gap-1.5 p-5", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-bold tracking-tight leading-tight text-slate-900",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500 leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", __spreadValues({ ref, className: cn("px-5 pb-4", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex items-center gap-3 px-5 py-4",
        "border-t-2 border-dashed border-slate-200",
        "mt-auto",
        className
      )
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var Checkbox = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
      children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: "flex items-center justify-center text-current", children: /* @__PURE__ */ jsxRuntime.jsx(
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
          children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" })
        }
      ) })
    })
  );
});
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Input = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      __spreadValues({
        type,
        ref,
        className: cn(
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
var Label = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
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
  const wrapperClassName = cn(
    // Wrapper — relative for the red box offset
    "group relative inline-block",
    "transition-all duration-300 ease-out",
    "cursor-pointer",
    className
  );
  const inner = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
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
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: cn(
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
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Image2__default.default,
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
    return /* @__PURE__ */ jsxRuntime.jsx(Link__default.default, __spreadProps(__spreadValues({ href, className: wrapperClassName }, props), { children: inner }));
  }
  return /* @__PURE__ */ jsxRuntime.jsx("span", __spreadProps(__spreadValues({ className: wrapperClassName }, props), { children: inner }));
}
Logo.displayName = "Logo";
var RadioGroup = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    __spreadValues({
      className: cn("grid gap-3", className),
      ref
    }, props)
  );
});
RadioGroup.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-2.5 w-2.5 bg-red-600" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var Separator = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      SeparatorPrimitive__namespace.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn(
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
Separator.displayName = SeparatorPrimitive__namespace.Root.displayName;
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      className: cn(
        "animate-pulse",
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-200",
        "bg-slate-100",
        className
      )
    }, props)
  );
}
var Switch = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SwitchPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
      children: /* @__PURE__ */ jsxRuntime.jsx(
        SwitchPrimitive__namespace.Thumb,
        {
          className: cn(
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
Switch.displayName = SwitchPrimitive__namespace.Root.displayName;
var Textarea = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "textarea",
      __spreadValues({
        ref,
        className: cn(
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
var NumberInput = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(fieldWrapper, disabled && "opacity-40", className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(
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
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Minus, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        __spreadValues({
          ref,
          type: "number",
          value,
          onChange: handleChange,
          disabled,
          className: cn(
            innerInput,
            "text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          ),
          min,
          max,
          step
        }, props)
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
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
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Plus, { className: "h-4 w-4" })
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
var SearchInput = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, onSearch, onKeyDown } = _b, props = __objRest(_b, ["className", "onSearch", "onKeyDown"]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSearch == null ? void 0 : onSearch(e.target.value);
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        __spreadValues({
          ref,
          type: "search",
          onKeyDown: handleKeyDown,
          className: cn(innerInput)
        }, props)
      )
    ] });
  }
);
SearchInput.displayName = "SearchInput";
var PhoneInput = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, countryCode = "+1" } = _b, props = __objRest(_b, ["className", "countryCode"]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Phone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pl-2 pr-1 text-sm font-medium text-slate-600 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: countryCode }),
      /* @__PURE__ */ jsxRuntime.jsx(Input, __spreadValues({ ref, type: "tel", className: cn(innerInput) }, props))
    ] });
  }
);
PhoneInput.displayName = "PhoneInput";
var PasswordInput = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const [visible, setVisible] = React12__namespace.useState(false);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        __spreadValues({
          ref,
          type: visible ? "text" : "password",
          className: cn(innerInput)
        }, props)
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "icon",
          className: "h-10 w-10 shrink-0 rounded-none border-0",
          onClick: () => setVisible((v) => !v),
          tabIndex: -1,
          "aria-label": visible ? "Hide password" : "Show password",
          children: visible ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Eye, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";
var UrlInput = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Globe, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pl-2 text-sm text-slate-400 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: "https://" }),
      /* @__PURE__ */ jsxRuntime.jsx(Input, __spreadValues({ ref, type: "url", className: cn(innerInput) }, props))
    ] });
  }
);
UrlInput.displayName = "UrlInput";
var baseClass = "pointer-events-none select-none";
var overlayClass = "absolute inset-0 z-0";
function patternWrapper(overlay, className) {
  return cn(baseClass, overlay && overlayClass, className);
}
var PatternDots = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternGrid = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternLines = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternDiagonal = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternCross = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternCheckerboard = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternDiamond = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternZigzag = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternDashedGrid = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var PatternRadial = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var ScrollArea = React12__namespace.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("poyraz-scroll-area relative", overflowClass, className),
        style: __spreadValues({
          maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
          "--sb-size": `${sz}px`
        }, style)
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Input = Input;
exports.Label = Label;
exports.Logo = Logo;
exports.NumberInput = NumberInput;
exports.PasswordInput = PasswordInput;
exports.PatternCheckerboard = PatternCheckerboard;
exports.PatternCross = PatternCross;
exports.PatternDashedGrid = PatternDashedGrid;
exports.PatternDiagonal = PatternDiagonal;
exports.PatternDiamond = PatternDiamond;
exports.PatternDots = PatternDots;
exports.PatternGrid = PatternGrid;
exports.PatternLines = PatternLines;
exports.PatternRadial = PatternRadial;
exports.PatternZigzag = PatternZigzag;
exports.PhoneInput = PhoneInput;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.ScrollArea = ScrollArea;
exports.SearchInput = SearchInput;
exports.Separator = Separator;
exports.Skeleton = Skeleton;
exports.Switch = Switch;
exports.Textarea = Textarea;
exports.Typography = Typography;
exports.UrlInput = UrlInput;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
