import { Input } from './chunk-PUIMEI6W.js';
import { __objRest, __spreadValues, cn, __spreadProps, Button } from './chunk-L36ZMS3N.js';
import * as React8 from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import Image2 from 'next/image';
import Link from 'next/link';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Minus, Plus, Search, Phone, EyeOff, Eye, Globe } from 'lucide-react';

var Avatar = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
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
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Image,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full object-cover", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Fallback,
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
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
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
var Card = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, children } = _b, props = __objRest(_b, ["className", "variant", "children"]);
    if (variant === "elevated") {
      return /* @__PURE__ */ jsxs("div", { className: cn("group relative", className), children: [
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(
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
var CardImage = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, aspect = "aspect-video", children } = _b, props = __objRest(_b, ["className", "aspect", "children"]);
    return /* @__PURE__ */ jsx(
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
var CardHeader = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col gap-1.5 p-5", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
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
var CardDescription = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      className: cn("text-sm text-slate-500 leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("div", __spreadValues({ ref, className: cn("px-5 pb-4", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
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
  const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
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
var RadioGroup = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    __spreadValues({
      className: cn("grid gap-3", className),
      ref
    }, props)
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
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
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-2.5 w-2.5 bg-red-600" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
var Separator = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ jsx(
      SeparatorPrimitive.Root,
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
var Switch = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    SwitchPrimitive.Root,
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
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
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
Switch.displayName = SwitchPrimitive.Root.displayName;
var Textarea = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
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
var NumberInput = React8.forwardRef(
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
    return /* @__PURE__ */ jsxs("div", { className: cn(fieldWrapper, disabled && "opacity-40", className), children: [
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
          className: cn(
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
var SearchInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, onSearch, onKeyDown } = _b, props = __objRest(_b, ["className", "onSearch", "onKeyDown"]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSearch == null ? void 0 : onSearch(e.target.value);
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    return /* @__PURE__ */ jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx(
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
var PhoneInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, countryCode = "+1" } = _b, props = __objRest(_b, ["className", "countryCode"]);
    return /* @__PURE__ */ jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { className: "pl-2 pr-1 text-sm font-medium text-slate-600 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: countryCode }),
      /* @__PURE__ */ jsx(Input, __spreadValues({ ref, type: "tel", className: cn(innerInput) }, props))
    ] });
  }
);
PhoneInput.displayName = "PhoneInput";
var PasswordInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    const [visible, setVisible] = React8.useState(false);
    return /* @__PURE__ */ jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: visible ? "text" : "password",
          className: cn(innerInput)
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
var UrlInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxs("div", { className: cn(fieldWrapper, className), children: [
      /* @__PURE__ */ jsx("div", { className: "pl-3 text-slate-400", children: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { className: "pl-2 text-sm text-slate-400 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3", children: "https://" }),
      /* @__PURE__ */ jsx(Input, __spreadValues({ ref, type: "url", className: cn(innerInput) }, props))
    ] });
  }
);
UrlInput.displayName = "UrlInput";
var baseClass = "pointer-events-none select-none";
var overlayClass = "absolute inset-0 z-0";
function patternWrapper(overlay, className) {
  return cn(baseClass, overlay && overlayClass, className);
}
var PatternDots = React8.forwardRef(
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
var PatternGrid = React8.forwardRef(
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
var PatternLines = React8.forwardRef(
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
var PatternDiagonal = React8.forwardRef(
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
var PatternCross = React8.forwardRef(
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
var PatternCheckerboard = React8.forwardRef(
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
var PatternDiamond = React8.forwardRef(
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
var PatternZigzag = React8.forwardRef(
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
var PatternDashedGrid = React8.forwardRef(
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
var PatternRadial = React8.forwardRef(
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

export { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Logo, NumberInput, PasswordInput, PatternCheckerboard, PatternCross, PatternDashedGrid, PatternDiagonal, PatternDiamond, PatternDots, PatternGrid, PatternLines, PatternRadial, PatternZigzag, PhoneInput, RadioGroup, RadioGroupItem, SearchInput, Separator, Skeleton, Switch, Textarea, UrlInput };
