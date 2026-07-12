"use client";
import { cn, fieldVariants } from './chunk-V2H4GGIL.js';
import { __objRest, __spreadProps, __spreadValues } from './chunk-ORMEWXMH.js';
import * as React2 from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { jsx } from 'react/jsx-runtime';

var Checkbox = React2.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    CheckboxPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      "data-slot": "checkbox",
      className: cn(
        "group relative size-5 shrink-0 cursor-pointer rounded-md border border-input bg-surface shadow-xs",
        "after:absolute after:-inset-2 after:content-['']",
        "transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--poyraz-motion-duration-fast)]",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-100",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current group-data-[state=checked]:animate-poyraz-scale-in",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              width: "10",
              height: "10",
              viewBox: "0 0 12 12",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: /* @__PURE__ */ jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" })
            }
          )
        }
      )
    })
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
var Input = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, type, variant } = _b, props = __objRest(_b, ["className", "radius", "type", "variant"]);
    return /* @__PURE__ */ jsx(
      "input",
      __spreadValues({
        ref,
        type,
        "data-slot": "input",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "md",
        "data-invalid": props["aria-invalid"] ? "" : void 0,
        className: cn(
          fieldVariants({ variant, radius }),
          "h-10 px-3 py-2 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-primary",
          className
        )
      }, props)
    );
  }
);
Input.displayName = "Input";
var InputGroup = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = __objRest(_b, ["className", "radius", "variant"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        "data-slot": "input-group",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "md",
        "aria-invalid": props["aria-invalid"],
        className: cn(
          fieldVariants({ variant, radius }),
          "group h-10 items-center overflow-hidden p-0 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/20 has-[[aria-invalid=true]]:border-invalid has-[[aria-invalid=true]]:ring-invalid/15 [&_[data-slot=input]]:h-full [&_[data-slot=input]]:rounded-none [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:shadow-none [&_[data-slot=input]]:outline-none [&_[data-slot=input]]:ring-0 [&_[data-slot=input]]:ring-offset-0",
          className
        )
      }, props)
    );
  }
);
InputGroup.displayName = "InputGroup";
function InputGroupAddon(_a) {
  var _b = _a, { className, position = "start" } = _b, props = __objRest(_b, ["className", "position"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      "data-slot": "input-group-addon",
      "data-position": position,
      className: cn(
        "flex h-full shrink-0 items-center justify-center px-3 text-muted-foreground [&_svg]:size-4",
        position === "start" ? "border-r border-border" : "border-l border-border",
        className
      )
    }, props)
  );
}

export { Checkbox, Input, InputGroup, InputGroupAddon };
