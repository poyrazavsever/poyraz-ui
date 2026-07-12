"use client";
import { cn } from './chunk-V2H4GGIL.js';
import { __objRest, __spreadValues, __spreadProps } from './chunk-ORMEWXMH.js';
import * as React from 'react';
import { cva } from 'class-variance-authority';
import { jsx } from 'react/jsx-runtime';

var cardVariants = cva(
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
var Card = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = __objRest(_b, ["className", "radius", "variant"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadValues({
        ref,
        "data-slot": "card",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "xl",
        className: cn(cardVariants({ variant, radius }), className)
      }, props)
    );
  }
);
Card.displayName = "Card";
var CardImage = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, aspect = "aspect-video", children } = _b, props = __objRest(_b, ["className", "aspect", "children"]);
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        "data-slot": "card-image",
        className: cn(
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
var CardHeader = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      "data-slot": "card-header",
      className: cn("grid grid-cols-[1fr_auto] items-start gap-1.5 p-5 [&_[data-slot=card-description]]:col-start-1", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardHeading = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      "data-slot": "card-heading",
      className: cn("col-start-1 min-w-0 space-y-1.5", className)
    }, props)
  );
});
CardHeading.displayName = "CardHeading";
var CardTitle = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "h3",
    __spreadValues({
      ref,
      "data-slot": "card-title",
      className: cn(
        "text-base font-semibold leading-tight tracking-tight text-foreground",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "p",
    __spreadValues({
      ref,
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground leading-relaxed", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("div", __spreadValues({ ref, "data-slot": "card-content", className: cn("px-5 pb-5", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      "data-slot": "card-footer",
      className: cn(
        "mt-auto flex items-center gap-3 border-t border-border px-5 py-4",
        className
      )
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var CardAction = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadValues({
      ref,
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start", className)
    }, props)
  );
});
CardAction.displayName = "CardAction";
var Label = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx(
      "label",
      __spreadValues({
        ref,
        "data-slot": "label",
        className: cn(
          "text-sm font-medium leading-none text-foreground",
          "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
          className
        )
      }, props)
    );
  }
);
Label.displayName = "Label";

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardHeading, CardImage, CardTitle, Label, cardVariants };
