"use client";
'use strict';

var chunkROCSSX52_cjs = require('./chunk-ROCSSX52.cjs');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 border font-medium transition-colors duration-[var(--poyraz-motion-duration-fast)] [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary-muted text-primary-muted-foreground",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border-strong bg-transparent text-foreground",
        glass: "border-glass-border-outer bg-glass text-foreground shadow-xs backdrop-blur-soft",
        info: "border-info-border bg-info text-info-foreground",
        success: "border-success-border bg-success text-success-foreground",
        warning: "border-warning-border bg-warning text-warning-foreground",
        destructive: "border-destructive/25 bg-destructive-muted text-destructive-muted-foreground"
      },
      size: {
        sm: "h-5 px-1.5 text-[10px]",
        default: "h-6 px-2 text-xs",
        lg: "h-7 px-2.5 text-xs"
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        full: "rounded-full"
      }
    },
    defaultVariants: { variant: "default", size: "default", radius: "full" }
  }
);
function Badge(_a) {
  var _b = _a, { className, radius, size, variant } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "radius", "size", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkROCSSX52_cjs.__spreadValues({
      "data-slot": "badge",
      "data-variant": variant != null ? variant : "default",
      "data-size": size != null ? size : "default",
      "data-radius": radius != null ? radius : "full",
      className: cn(badgeVariants({ variant, size, radius }), className)
    }, props)
  );
}
var buttonVariants = classVarianceAuthority.cva(
  "poyraz-button relative isolate inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap border font-sans text-sm font-semibold outline-none transition-[color,background-color,border-color,transform] duration-200 ease-out data-[effect=fill]:hover:text-primary-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:border-border disabled:opacity-100 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-disabled aria-disabled:text-disabled-foreground aria-disabled:border-border active:scale-[0.975] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-primary/80 bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
        secondary: "border-border-strong/70 bg-secondary text-secondary-foreground hover:border-border-strong hover:bg-accent",
        soft: "border-primary/15 bg-primary-muted text-primary-muted-foreground hover:border-primary/25 hover:bg-primary/15",
        outline: "border-primary/55 bg-background/60 text-primary hover:border-primary hover:bg-primary-muted",
        glass: "poyraz-button-glass border-glass-border-outer text-foreground hover:border-border-strong hover:bg-glass-strong dark:hover:border-glass-border",
        ghost: "border-transparent bg-transparent text-foreground/75 hover:bg-accent hover:text-foreground",
        destructive: "border-destructive/80 bg-destructive text-destructive-foreground hover:border-destructive hover:bg-destructive/90",
        link: "h-auto overflow-visible rounded-none border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline active:scale-100"
      },
      size: {
        xs: "h-7 gap-1.5 px-2.5 text-xs [&_svg]:size-3.5",
        sm: "h-8 gap-1.5 px-3 text-xs [&_svg]:size-3.5",
        default: "h-10 px-4 [&_svg]:size-4",
        lg: "h-11 px-6 text-base [&_svg]:size-4.5",
        "icon-sm": "size-8 p-0 [&_svg]:size-3.5",
        icon: "size-10 p-0 [&_svg]:size-4",
        "icon-lg": "size-11 p-0 [&_svg]:size-5"
      },
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "md"
    }
  }
);
var Button = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      asChild = false,
      children,
      className,
      disabled = false,
      effect = "none",
      fillDirection = "right",
      loading = false,
      onClick,
      radius = "md",
      size = "default",
      swapTarget = "both",
      type,
      variant = "default"
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "asChild",
      "children",
      "className",
      "disabled",
      "effect",
      "fillDirection",
      "loading",
      "onClick",
      "radius",
      "size",
      "swapTarget",
      "type",
      "variant"
    ]);
    const isDisabled = disabled || loading;
    const sharedProps = {
      "aria-busy": loading || void 0,
      "aria-disabled": asChild && isDisabled ? true : void 0,
      "data-effect": effect,
      "data-fill-direction": fillDirection,
      "data-loading": loading ? "" : void 0,
      "data-radius": radius,
      "data-size": size,
      "data-slot": "button",
      "data-swap-target": swapTarget,
      "data-variant": variant,
      className: cn(buttonVariants({ variant, size, radius }), className),
      onClick: (event) => {
        if (isDisabled) {
          event.preventDefault();
          return;
        }
        onClick == null ? void 0 : onClick(event);
      }
    };
    const spinner = /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "button-spinner", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", children: [
      /* @__PURE__ */ jsxRuntime.jsx("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeOpacity: "0.25", strokeWidth: "3" }),
      /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 12a9 9 0 0 0-9-9", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "3" })
    ] }) });
    if (asChild) {
      return /* @__PURE__ */ jsxRuntime.jsxs(reactSlot.Slot, chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues(chunkROCSSX52_cjs.__spreadValues({ ref }, sharedProps), props), { children: [
        spinner,
        /* @__PURE__ */ jsxRuntime.jsx(reactSlot.Slottable, { children })
      ] }));
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues(chunkROCSSX52_cjs.__spreadValues({
        ref,
        type: type != null ? type : "button",
        disabled: isDisabled
      }, sharedProps), props), {
        children: [
          spinner,
          /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "button-content", children })
        ]
      })
    );
  }
);
Button.displayName = "Button";
function ButtonIcon(_a) {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("span", chunkROCSSX52_cjs.__spreadValues({ "data-slot": "button-icon", className: cn("inline-flex", className) }, props));
}
function ButtonLabel(_a) {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("span", chunkROCSSX52_cjs.__spreadValues({ "data-slot": "button-label", className: cn("inline-flex", className) }, props));
}
var fieldVariants = classVarianceAuthority.cva(
  "flex w-full border text-sm text-foreground outline-none transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] placeholder:text-placeholder focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-100 aria-invalid:border-invalid aria-invalid:ring-[3px] aria-invalid:ring-invalid/15",
  {
    variants: {
      variant: {
        default: "border-input bg-surface shadow-xs",
        soft: "border-transparent bg-surface-subtle shadow-none hover:border-border-strong",
        glass: "poyraz-glass-field border-glass-border-outer bg-glass !text-foreground placeholder:!text-muted-foreground caret-foreground shadow-sm backdrop-blur-glass"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      }
    },
    defaultVariants: { variant: "default", radius: "md" }
  }
);
var floatingSurfaceVariants = classVarianceAuthority.cva(
  "poyraz-floating-surface overflow-hidden border text-foreground outline-none transition-[background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)]",
  {
    variants: {
      surface: {
        solid: "border-border bg-background shadow-lg",
        soft: "border-border/80 bg-surface-subtle shadow-md",
        glass: "border-glass-border-outer bg-glass shadow-lg backdrop-blur-glass supports-[backdrop-filter]:bg-glass"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl"
      }
    },
    defaultVariants: { surface: "solid", radius: "lg" }
  }
);
var floatingMotion = [
  "origin-[var(--poyraz-floating-transform-origin)]",
  "data-[state=open]:animate-in data-[state=closed]:animate-out",
  "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
  "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
  "data-[side=bottom]:[--poyraz-enter-translate-y:calc(var(--poyraz-floating-slide)*-1)]",
  "data-[side=left]:[--poyraz-enter-translate-x:var(--poyraz-floating-slide)]",
  "data-[side=right]:[--poyraz-enter-translate-x:calc(var(--poyraz-floating-slide)*-1)]",
  "data-[side=top]:[--poyraz-enter-translate-y:var(--poyraz-floating-slide)]",
  "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0]"
].join(" ");
var floatingItemVariants = classVarianceAuthority.cva(
  "relative flex w-full select-none items-center outline-none transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45 focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
  {
    variants: {
      size: {
        sm: "min-h-8 gap-2 px-2 py-1 text-xs",
        md: "min-h-9 gap-2.5 px-2.5 py-1.5 text-sm",
        lg: "min-h-11 gap-3 px-3 py-2 text-sm"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg"
      },
      inset: { true: "pl-8", false: null },
      interactiveMotion: {
        none: null,
        shift: "focus:translate-x-0.5 data-[highlighted]:translate-x-0.5"
      }
    },
    defaultVariants: {
      size: "md",
      radius: "md",
      inset: false,
      interactiveMotion: "shift"
    }
  }
);
var overlayVariants = classVarianceAuthority.cva(
  "fixed inset-0 z-50 backdrop-blur-[var(--poyraz-overlay-blur,6px)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 motion-reduce:duration-100",
  {
    variants: {
      tone: {
        dim: "bg-overlay",
        soft: "bg-overlay/80",
        glass: "bg-overlay-light/80 backdrop-saturate-150"
      }
    },
    defaultVariants: { tone: "dim" }
  }
);
var overlaySurfaceVariants = classVarianceAuthority.cva(
  "border text-foreground outline-none",
  {
    variants: {
      surface: {
        solid: "border-border bg-background shadow-xl",
        soft: "border-border/80 bg-surface-subtle shadow-xl",
        glass: "border-glass-border-outer bg-glass shadow-xl backdrop-blur-glass supports-[backdrop-filter]:bg-glass"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl"
      }
    },
    defaultVariants: { surface: "solid", radius: "xl" }
  }
);

exports.Badge = Badge;
exports.Button = Button;
exports.ButtonIcon = ButtonIcon;
exports.ButtonLabel = ButtonLabel;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.fieldVariants = fieldVariants;
exports.floatingItemVariants = floatingItemVariants;
exports.floatingMotion = floatingMotion;
exports.floatingSurfaceVariants = floatingSurfaceVariants;
exports.overlaySurfaceVariants = overlaySurfaceVariants;
exports.overlayVariants = overlayVariants;
