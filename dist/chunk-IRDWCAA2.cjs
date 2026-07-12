"use client";
'use strict';

var chunkO2BHWKSX_cjs = require('./chunk-O2BHWKSX.cjs');
var chunkROCSSX52_cjs = require('./chunk-ROCSSX52.cjs');
var React2 = require('react');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var jsxRuntime = require('react/jsx-runtime');

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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);

var Checkbox = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "checkbox",
      className: chunkO2BHWKSX_cjs.cn(
        "group relative size-5 shrink-0 cursor-pointer rounded-md border border-input bg-surface shadow-xs",
        "after:absolute after:-inset-2 after:content-['']",
        "transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--poyraz-motion-duration-fast)]",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-100",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current group-data-[state=checked]:animate-poyraz-scale-in",
          children: /* @__PURE__ */ jsxRuntime.jsx(
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
              children: /* @__PURE__ */ jsxRuntime.jsx("polyline", { points: "2.5 6 5 8.5 9.5 3.5" })
            }
          )
        }
      )
    })
  );
});
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Input = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, type, variant } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "radius", "type", "variant"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      chunkROCSSX52_cjs.__spreadValues({
        ref,
        type,
        "data-slot": "input",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "md",
        "data-invalid": props["aria-invalid"] ? "" : void 0,
        className: chunkO2BHWKSX_cjs.cn(
          chunkO2BHWKSX_cjs.fieldVariants({ variant, radius }),
          "h-10 px-3 py-2 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-primary",
          className
        )
      }, props)
    );
  }
);
Input.displayName = "Input";
var InputGroup = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "radius", "variant"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "input-group",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "md",
        "aria-invalid": props["aria-invalid"],
        className: chunkO2BHWKSX_cjs.cn(
          chunkO2BHWKSX_cjs.fieldVariants({ variant, radius }),
          "group h-10 items-center overflow-hidden p-0 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/20 has-[[aria-invalid=true]]:border-invalid has-[[aria-invalid=true]]:ring-invalid/15 [&_[data-slot=input]]:h-full [&_[data-slot=input]]:rounded-none [&_[data-slot=input]]:border-0 [&_[data-slot=input]]:bg-transparent [&_[data-slot=input]]:shadow-none [&_[data-slot=input]]:outline-none [&_[data-slot=input]]:ring-0 [&_[data-slot=input]]:ring-offset-0",
          className
        )
      }, props)
    );
  }
);
InputGroup.displayName = "InputGroup";
function InputGroupAddon(_a) {
  var _b = _a, { className, position = "start" } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "position"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      "data-slot": "input-group-addon",
      "data-position": position,
      className: chunkO2BHWKSX_cjs.cn(
        "flex h-full shrink-0 items-center justify-center px-3 text-muted-foreground [&_svg]:size-4",
        position === "start" ? "border-r border-border" : "border-l border-border",
        className
      )
    }, props)
  );
}

exports.Checkbox = Checkbox;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputGroupAddon = InputGroupAddon;
