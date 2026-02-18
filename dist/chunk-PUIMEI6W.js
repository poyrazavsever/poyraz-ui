import { __objRest, __spreadProps, __spreadValues, cn } from './chunk-L36ZMS3N.js';
import { cva } from 'class-variance-authority';
import { jsx } from 'react/jsx-runtime';
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

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
  return /* @__PURE__ */ jsx("div", __spreadValues({ className: cn(badgeVariants({ variant }), className) }, props));
}
var Checkbox = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
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
var Input = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsx(
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

export { Badge, Checkbox, Input, badgeVariants };
