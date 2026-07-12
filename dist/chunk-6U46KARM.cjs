"use client";
'use strict';

var chunkO2BHWKSX_cjs = require('./chunk-O2BHWKSX.cjs');
var chunkROCSSX52_cjs = require('./chunk-ROCSSX52.cjs');
var React = require('react');
var classVarianceAuthority = require('class-variance-authority');
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

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var cardVariants = classVarianceAuthority.cva(
  "poyraz-card relative flex flex-col overflow-hidden border text-card-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
  {
    variants: {
      variant: {
        default: "border-border bg-surface shadow-xs",
        soft: "border-transparent bg-surface-subtle shadow-none",
        outline: "border-border-strong bg-transparent shadow-none",
        glass: "border-glass-border-outer bg-glass shadow-[var(--poyraz-glass-shadow)] backdrop-blur-glass",
        elevated: "border-border/80 bg-surface-elevated shadow-lg",
        interactive: "border-border bg-surface shadow-sm hover:border-primary/25 hover:shadow-md",
        bordered: "border-border-strong bg-surface shadow-none",
        highlight: "border-border border-l-4 border-l-primary bg-surface shadow-xs",
        ghost: "border-transparent bg-transparent shadow-none hover:border-border hover:bg-surface-subtle"
      },
      radius: {
        none: "rounded-none",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl"
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "xl"
    }
  }
);
var Card = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "radius", "variant"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "card",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "xl",
        className: chunkO2BHWKSX_cjs.cn(cardVariants({ variant, radius }), className)
      }, props)
    );
  }
);
Card.displayName = "Card";
var CardImage = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, aspect = "aspect-video", children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "aspect", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "card-image",
        className: chunkO2BHWKSX_cjs.cn(
          "relative overflow-hidden",
          "border-b border-border-strong",
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
var CardHeader = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-header",
      className: chunkO2BHWKSX_cjs.cn("grid grid-cols-[1fr_auto] items-start gap-1.5 p-5 [&_[data-slot=card-description]]:col-start-1", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardHeading = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-heading",
      className: chunkO2BHWKSX_cjs.cn("col-start-1 min-w-0 space-y-1.5", className)
    }, props)
  );
});
CardHeading.displayName = "CardHeading";
var CardTitle = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h3",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-title",
      className: chunkO2BHWKSX_cjs.cn(
        "text-base font-semibold leading-tight tracking-tight text-foreground",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-description",
      className: chunkO2BHWKSX_cjs.cn("text-sm text-muted-foreground leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "card-content", className: chunkO2BHWKSX_cjs.cn("px-5 pb-5", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-footer",
      className: chunkO2BHWKSX_cjs.cn(
        "mt-auto flex items-center gap-3 border-t border-border px-5 py-4",
        className
      )
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var CardAction = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "card-action",
      className: chunkO2BHWKSX_cjs.cn("col-start-2 row-span-2 row-start-1 self-start", className)
    }, props)
  );
});
CardAction.displayName = "CardAction";
var Label = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "label",
      chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "label",
        className: chunkO2BHWKSX_cjs.cn(
          "text-sm font-medium leading-none text-foreground",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label.displayName = "Label";

exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardHeading = CardHeading;
exports.CardImage = CardImage;
exports.CardTitle = CardTitle;
exports.Label = Label;
exports.cardVariants = cardVariants;
