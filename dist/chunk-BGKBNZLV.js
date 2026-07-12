"use client";
import { Card, CardHeader, CardHeading, CardTitle, CardDescription, CardAction, CardContent, CardImage, CardFooter } from './chunk-FPCAVNAL.js';
import { Input, InputGroup, InputGroupAddon } from './chunk-W7DMIXLS.js';
import { cn, fieldVariants, Button, Badge } from './chunk-V2H4GGIL.js';
import { __objRest, __spreadValues, __spreadProps } from './chunk-ORMEWXMH.js';
import * as React8 from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva } from 'class-variance-authority';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Minus, Plus, Search, Phone, EyeOff, Eye, Globe, ChevronDown } from 'lucide-react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';

var avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden border border-glass-border-outer bg-surface shadow-sm",
  {
    variants: {
      size: {
        xs: "size-6",
        sm: "size-8",
        default: "size-10",
        lg: "size-12",
        xl: "size-16"
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: { size: "default", radius: "full" }
  }
);
var Avatar = React8.forwardRef((_a, ref) => {
  var _b = _a, { className, radius, size } = _b, props = __objRest(_b, ["className", "radius", "size"]);
  return /* @__PURE__ */ jsx(
    AvatarPrimitive.Root,
    __spreadValues({
      ref,
      "data-slot": "avatar",
      "data-radius": radius != null ? radius : "full",
      "data-size": size != null ? size : "default",
      className: cn(avatarVariants({ radius, size }), className)
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
      "data-slot": "avatar-image",
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
      "data-slot": "avatar-fallback",
      className: cn(
        "flex h-full w-full items-center justify-center",
        "bg-primary-muted text-primary-muted-foreground",
        "text-xs font-semibold",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function BasicContentCard(_a) {
  var _b = _a, { action, children, description, title } = _b, props = __objRest(_b, ["action", "children", "description", "title"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "basic-content-card" }, props), { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardHeading, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: title }),
        description && /* @__PURE__ */ jsx(CardDescription, { children: description })
      ] }),
      action && /* @__PURE__ */ jsx(CardAction, { children: action })
    ] }),
    children && /* @__PURE__ */ jsx(CardContent, { children })
  ] }));
}
function ImageContentCard(_a) {
  var _b = _a, { action, alt, category, description, src, title } = _b, props = __objRest(_b, ["action", "alt", "category", "description", "src", "title"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "image-content-card", variant: "interactive", className: "group" }, props), { children: [
    /* @__PURE__ */ jsx(CardImage, { children: /* @__PURE__ */ jsx("img", { src, alt, className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" }) }),
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardHeading, { children: [
      category && /* @__PURE__ */ jsx(Badge, { size: "sm", className: "mb-1 w-fit", children: category }),
      /* @__PURE__ */ jsx(CardTitle, { children: title }),
      description && /* @__PURE__ */ jsx(CardDescription, { children: description })
    ] }) }),
    action && /* @__PURE__ */ jsx(CardFooter, { children: action })
  ] }));
}
function HorizontalCard(_a) {
  var _b = _a, { action, alt, category, description, imageClassName, src, title } = _b, props = __objRest(_b, ["action", "alt", "category", "description", "imageClassName", "src", "title"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "horizontal-card", className: "grid overflow-hidden sm:grid-cols-[minmax(9rem,38%)_1fr]" }, props), { children: [
    /* @__PURE__ */ jsx("div", { "data-slot": "horizontal-card-image", className: cn("min-h-40 overflow-hidden border-b border-border sm:border-b-0 sm:border-r", imageClassName), children: /* @__PURE__ */ jsx("img", { src, alt, className: "size-full object-cover" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-col", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardHeading, { children: [
        category && /* @__PURE__ */ jsx(Badge, { size: "sm", className: "mb-1 w-fit", children: category }),
        /* @__PURE__ */ jsx(CardTitle, { children: title }),
        description && /* @__PURE__ */ jsx(CardDescription, { children: description })
      ] }) }),
      action && /* @__PURE__ */ jsx(CardFooter, { children: action })
    ] })
  ] }));
}
function ProfileCard(_a) {
  var _b = _a, { avatar, bio, name, role, socialActions } = _b, props = __objRest(_b, ["avatar", "bio", "name", "role", "socialActions"]);
  return /* @__PURE__ */ jsx(Card, __spreadProps(__spreadValues({ "data-slot": "profile-card" }, props), { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center p-6 text-center", children: [
    /* @__PURE__ */ jsx("img", { src: avatar, alt: "", className: "size-20 rounded-full border-4 border-surface object-cover shadow-md" }),
    /* @__PURE__ */ jsx(CardTitle, { className: "mt-4 max-w-full break-words text-center", children: name }),
    role && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-primary", children: role }),
    bio && /* @__PURE__ */ jsx(CardDescription, { className: "mt-3", children: bio }),
    socialActions && /* @__PURE__ */ jsx("div", { "data-slot": "profile-card-actions", className: "mt-4 flex items-center gap-2", children: socialActions })
  ] }) }));
}
function StatisticCard(_a) {
  var _b = _a, { chart, change, icon, label, trend = "neutral", value } = _b, props = __objRest(_b, ["chart", "change", "icon", "label", "trend", "value"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "statistic-card" }, props), { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardHeading, { children: /* @__PURE__ */ jsx(CardDescription, { children: label }) }),
      icon && /* @__PURE__ */ jsx(CardAction, { children: icon })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold tracking-tight text-foreground", children: value }),
      change && /* @__PURE__ */ jsx("div", { className: cn("mt-1 text-xs font-medium", trend === "up" && "text-success-icon", trend === "down" && "text-destructive", trend === "neutral" && "text-muted-foreground"), children: change }),
      chart && /* @__PURE__ */ jsx("div", { "data-slot": "statistic-card-chart", className: "mt-4 h-16 text-primary", children: chart })
    ] })
  ] }));
}
function PricingPlanCard(_a) {
  var _b = _a, { action, description, features, name, period, popular, price } = _b, props = __objRest(_b, ["action", "description", "features", "name", "period", "popular", "price"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "pricing-plan-card", variant: popular ? "interactive" : "default", className: cn(popular && "border-primary/50 shadow-md") }, props), { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardHeading, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: name }),
        description && /* @__PURE__ */ jsx(CardDescription, { children: description })
      ] }),
      popular && /* @__PURE__ */ jsx(CardAction, { children: /* @__PURE__ */ jsx(Badge, { children: "Popular" }) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold", children: price }),
        period && /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "/",
          period
        ] })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2.5 text-sm", children: features.map((feature, index) => /* @__PURE__ */ jsx("li", { className: "flex gap-2 before:text-primary before:content-['\u2713']", children: feature }, index)) })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { children: action })
  ] }));
}
function FeatureCard(_a) {
  var _b = _a, { action, description, icon, title } = _b, props = __objRest(_b, ["action", "description", "icon", "title"]);
  return /* @__PURE__ */ jsx(Card, __spreadProps(__spreadValues({ "data-slot": "feature-card", variant: "soft" }, props), { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-5", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-muted text-primary", children: icon }),
    /* @__PURE__ */ jsx(CardTitle, { children: title }),
    /* @__PURE__ */ jsx(CardDescription, { className: "mt-2", children: description }),
    action && /* @__PURE__ */ jsx("div", { className: "mt-4", children: action })
  ] }) }));
}
function GlassCard(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(Card, __spreadValues({ "data-slot": "glass-card", variant: "glass", className: cn("poyraz-glass", className) }, props));
}
function InteractiveCard(_a) {
  var _b = _a, { actions, children, className } = _b, props = __objRest(_b, ["actions", "children", "className"]);
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "interactive-card", variant: "interactive", className: cn("group", className) }, props), { children: [
    children,
    actions && /* @__PURE__ */ jsx("div", { "data-slot": "interactive-card-actions", className: "absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100", children: actions })
  ] }));
}
function ExpandableCard(_a) {
  var _b = _a, { children, defaultOpen = false, expandLabel = "Show details", onOpenChange, open, summary } = _b, props = __objRest(_b, ["children", "defaultOpen", "expandLabel", "onOpenChange", "open", "summary"]);
  const [internalOpen, setInternalOpen] = React8.useState(defaultOpen);
  const isOpen = open != null ? open : internalOpen;
  const setOpen = (next) => {
    if (open === void 0) setInternalOpen(next);
    onOpenChange == null ? void 0 : onOpenChange(next);
  };
  return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({ "data-slot": "expandable-card", "data-state": isOpen ? "open" : "closed" }, props), { children: [
    /* @__PURE__ */ jsx(CardContent, { className: "p-5", children: summary }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "data-slot": "expandable-card-content",
        "aria-hidden": !isOpen,
        inert: !isOpen,
        className: cn(
          "grid transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:duration-[1ms]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        ),
        children: /* @__PURE__ */ jsx("div", { className: "min-h-0 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-border px-5 py-4 text-sm", children }) })
      }
    ),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setOpen(!isOpen), "aria-expanded": isOpen, className: "ml-auto", children: [
      expandLabel,
      /* @__PURE__ */ jsx(ChevronDown, { className: cn("transition-transform", isOpen && "rotate-180") })
    ] }) })
  ] }));
}
var logoVariants = cva(
  "poyraz-logo group relative isolate inline-flex overflow-hidden outline-none transition-[opacity,transform,box-shadow] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] focus-visible:ring-[3px] focus-visible:ring-ring/25",
  {
    variants: {
      effect: {
        none: "",
        shine: "poyraz-logo-shine",
        "shine-loop": "poyraz-logo-shine poyraz-logo-shine-loop"
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full"
      },
      interactive: {
        true: "cursor-pointer hover:shadow-md active:scale-[0.99]",
        false: ""
      }
    },
    defaultVariants: { effect: "shine", radius: "lg", interactive: true }
  }
);
function Logo(_a) {
  var _b = _a, {
    alt = "Poyraz Logo",
    className,
    effect = "shine",
    height = 48,
    href,
    interactive = true,
    radius = "lg",
    src = "/logo/logo.jpeg",
    style,
    width = 48
  } = _b, props = __objRest(_b, [
    "alt",
    "className",
    "effect",
    "height",
    "href",
    "interactive",
    "radius",
    "src",
    "style",
    "width"
  ]);
  const sharedProps = {
    "data-effect": effect,
    "data-radius": radius,
    "data-slot": "logo",
    className: cn(logoVariants({ effect, radius, interactive }), className),
    style: __spreadValues({ width, height }, style)
  };
  const mark = /* @__PURE__ */ jsx(
    "img",
    {
      "data-slot": "logo-image",
      src,
      alt,
      width,
      height,
      className: "relative z-0 h-full w-full object-cover"
    }
  );
  if (href) {
    return /* @__PURE__ */ jsx("a", __spreadProps(__spreadValues(__spreadValues({ href }, sharedProps), props), { children: mark }));
  }
  return /* @__PURE__ */ jsx("span", __spreadProps(__spreadValues(__spreadValues({}, sharedProps), props), { children: mark }));
}
Logo.displayName = "Logo";
var RadioGroup = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    __spreadValues({
      "data-slot": "radio-group",
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
      "data-slot": "radio-group-item",
      className: cn(
        "group relative size-5 shrink-0 cursor-pointer rounded-full border border-input bg-surface shadow-xs",
        "after:absolute after:-inset-2 after:content-['']",
        "transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)]",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
        "data-[state=checked]:border-primary",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled disabled:opacity-100",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex items-center justify-center animate-poyraz-scale-in",
          children: /* @__PURE__ */ jsx("div", { className: "size-2.5 rounded-full bg-primary" })
        }
      )
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
        "data-slot": "separator",
        decorative,
        orientation,
        className: cn(
          "shrink-0",
          "border-border",
          orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
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
      "data-slot": "skeleton",
      className: cn(
        "animate-pulse rounded-lg bg-accent/80",
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
      "data-slot": "switch",
      className: cn(
        "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-input bg-surface-200 shadow-inner",
        "after:absolute after:-inset-y-2 after:-inset-x-1 after:content-['']",
        "transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
        "disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled disabled:opacity-100",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "pointer-events-none block size-5 translate-x-px rounded-full border border-border bg-surface shadow-sm",
            "transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-spring)]",
            "data-[state=checked]:translate-x-5 data-[state=checked]:border-primary-foreground/40 data-[state=checked]:bg-primary-foreground"
          )
        }
      )
    })
  );
});
Switch.displayName = SwitchPrimitive.Root.displayName;
var Textarea = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = __objRest(_b, ["className", "radius", "variant"]);
    return /* @__PURE__ */ jsx(
      "textarea",
      __spreadValues({
        ref,
        "data-slot": "textarea",
        "data-variant": variant != null ? variant : "default",
        "data-radius": radius != null ? radius : "md",
        "data-invalid": props["aria-invalid"] ? "" : void 0,
        className: cn(
          fieldVariants({ variant, radius }),
          "min-h-24 resize-y px-3 py-2.5",
          className
        )
      }, props)
    );
  }
);
Textarea.displayName = "Textarea";
var typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      display: "text-poyraz-display font-bold tracking-[-0.035em]",
      h1: "text-poyraz-heading font-bold tracking-[-0.025em]",
      h2: "text-poyraz-title font-semibold tracking-[-0.015em]",
      h3: "text-lg font-semibold tracking-tight",
      h4: "text-base font-semibold tracking-tight",
      body: "text-poyraz-body",
      p: "text-poyraz-body",
      lead: "text-lg leading-7 text-muted-foreground",
      large: "text-base font-semibold",
      small: "text-poyraz-body-small",
      caption: "text-poyraz-caption text-muted-foreground",
      muted: "text-poyraz-caption text-muted-foreground",
      blockquote: "border-l-2 border-primary pl-5 italic text-muted-foreground",
      list: "ml-6 list-disc space-y-2 text-poyraz-body"
    },
    font: {
      primary: "font-primary",
      secondary: "font-secondary",
      inherit: "font-inherit"
    },
    balance: {
      true: "text-balance",
      false: ""
    }
  },
  defaultVariants: { variant: "body", font: "primary", balance: false }
});
var textEffectVariants = cva("relative inline-block", {
  variants: {
    effect: {
      none: "",
      "hand-drawn": "poyraz-text-hand-drawn z-0",
      contrast: "font-secondary italic text-primary",
      shimmer: "poyraz-text-shimmer",
      marker: "poyraz-text-marker z-0 px-1",
      outline: "poyraz-text-outline",
      gradient: "poyraz-text-gradient",
      glow: "poyraz-text-glow",
      boxed: "poyraz-text-boxed px-[0.28em]",
      strike: "poyraz-text-strike"
    },
    tone: {
      primary: "[--poyraz-text-effect:var(--color-primary)] [--poyraz-text-effect-soft:var(--color-primary-muted)]",
      neutral: "[--poyraz-text-effect:var(--color-foreground)] [--poyraz-text-effect-soft:var(--color-accent)]",
      warning: "[--poyraz-text-effect:var(--color-warning-icon)] [--poyraz-text-effect-soft:var(--color-warning)]"
    }
  },
  defaultVariants: { effect: "none", tone: "primary" }
});
var semanticElement = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  p: "p",
  lead: "p",
  large: "p",
  small: "p",
  caption: "span",
  muted: "p",
  blockquote: "blockquote",
  list: "ul"
};
function Typography(_a) {
  var _b = _a, {
    balance,
    className,
    component,
    font,
    secondaryFont = false,
    variant = "body"
  } = _b, props = __objRest(_b, [
    "balance",
    "className",
    "component",
    "font",
    "secondaryFont",
    "variant"
  ]);
  const Component = component != null ? component : semanticElement[variant != null ? variant : "body"];
  const resolvedFont = secondaryFont ? "secondary" : font;
  return /* @__PURE__ */ jsx(
    Component,
    __spreadValues({
      "data-slot": "typography",
      "data-variant": variant,
      "data-font": resolvedFont != null ? resolvedFont : "primary",
      className: cn(
        typographyVariants({ variant, font: resolvedFont, balance }),
        className
      )
    }, props)
  );
}
function TextEffect(_a) {
  var _b = _a, { className, effect, tone } = _b, props = __objRest(_b, ["className", "effect", "tone"]);
  return /* @__PURE__ */ jsx(
    "span",
    __spreadValues({
      "data-slot": "text-effect",
      "data-effect": effect != null ? effect : "none",
      "data-tone": tone != null ? tone : "primary",
      className: cn(textEffectVariants({ effect, tone }), className)
    }, props)
  );
}
var innerInput = [
  "min-w-0 border-0 bg-transparent shadow-none outline-none ring-0 ring-offset-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
].join(" ");
var maskRules = {
  "#": /\d/,
  A: /[a-zA-Z]/,
  "*": /[a-zA-Z0-9]/
};
function applyInputMask(value, mask) {
  const source = value.replace(/[^a-zA-Z0-9]/g, "");
  let sourceIndex = 0;
  let result = "";
  for (const character of mask) {
    const rule = maskRules[character];
    if (!rule) {
      if (source.length > 0 && (sourceIndex > 0 || result.length === 0)) result += character;
      continue;
    }
    while (sourceIndex < source.length && !rule.test(source[sourceIndex])) sourceIndex += 1;
    if (sourceIndex >= source.length) break;
    result += source[sourceIndex];
    sourceIndex += 1;
  }
  return result;
}
var MaskedInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { defaultValue, mask, onChange, onValueChange, value } = _b, props = __objRest(_b, ["defaultValue", "mask", "onChange", "onValueChange", "value"]);
    const format = (input) => applyInputMask(input, mask);
    const handleChange = (event) => {
      const formatted = format(event.currentTarget.value);
      event.currentTarget.value = formatted;
      onValueChange == null ? void 0 : onValueChange(formatted, formatted.replace(/[^a-zA-Z0-9]/g, ""));
      onChange == null ? void 0 : onChange(event);
    };
    return /* @__PURE__ */ jsx(
      Input,
      __spreadValues({
        ref,
        value: value === void 0 ? void 0 : format(value),
        defaultValue: defaultValue === void 0 ? void 0 : format(defaultValue),
        maxLength: mask.length,
        onChange: handleChange
      }, props)
    );
  }
);
MaskedInput.displayName = "MaskedInput";
var NumberInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, value = 0, onChange, min, max, step = 1, disabled, radius, variant } = _b, props = __objRest(_b, ["className", "value", "onChange", "min", "max", "step", "disabled", "radius", "variant"]);
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
    return /* @__PURE__ */ jsxs(
      InputGroup,
      {
        "data-slot": "number-input",
        radius,
        variant,
        className: cn(disabled && "opacity-60", className),
        children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              radius: "none",
              className: "h-full w-10 shrink-0 border-0",
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
              "aria-invalid": props["aria-invalid"],
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
              radius: "none",
              className: "h-full w-10 shrink-0 border-0",
              onClick: increment,
              disabled: disabled || max !== void 0 && (value != null ? value : 0) >= max,
              tabIndex: -1,
              "aria-label": "Increase",
              children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
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
    var _b = _a, { className, onSearch, onKeyDown, radius, variant } = _b, props = __objRest(_b, ["className", "onSearch", "onKeyDown", "radius", "variant"]);
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onSearch == null ? void 0 : onSearch(e.target.value);
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    };
    return /* @__PURE__ */ jsxs(InputGroup, { "data-slot": "search-input", radius, variant, className, children: [
      /* @__PURE__ */ jsx(InputGroupAddon, { position: "start", className: "border-0 pr-0", children: /* @__PURE__ */ jsx(Search, { className: "h-4 w-4" }) }),
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
    var _b = _a, { className, countryCode = "+1", defaultValue, mask = "(###) ### ## ##", onValueChange, placeholder, value, radius, variant } = _b, props = __objRest(_b, ["className", "countryCode", "defaultValue", "mask", "onValueChange", "placeholder", "value", "radius", "variant"]);
    return /* @__PURE__ */ jsxs(InputGroup, { "data-slot": "phone-input", radius, variant, className, children: [
      /* @__PURE__ */ jsx(InputGroupAddon, { position: "start", className: "border-0 pr-0", children: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("span", { "data-slot": "phone-prefix", className: "select-none whitespace-nowrap border-r border-border px-2 text-sm font-medium text-muted-foreground", children: countryCode }),
      mask ? /* @__PURE__ */ jsx(
        MaskedInput,
        __spreadValues({
          ref,
          type: "tel",
          inputMode: "tel",
          mask,
          value,
          defaultValue,
          onValueChange,
          placeholder: placeholder != null ? placeholder : mask.replace(/#/g, "0"),
          className: cn(innerInput)
        }, props)
      ) : /* @__PURE__ */ jsx(Input, __spreadValues({ ref, type: "tel", inputMode: "tel", value, defaultValue, placeholder, className: cn(innerInput) }, props))
    ] });
  }
);
PhoneInput.displayName = "PhoneInput";
var PasswordInput = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, radius, variant } = _b, props = __objRest(_b, ["className", "radius", "variant"]);
    const [visible, setVisible] = React8.useState(false);
    return /* @__PURE__ */ jsxs(InputGroup, { "data-slot": "password-input", radius, variant, className, children: [
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
          radius: "none",
          className: "h-full w-10 shrink-0 border-0",
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
    var _b = _a, { className, defaultValue, normalize = true, onChange, onValueChange, protocol = "https://", value, radius, variant } = _b, props = __objRest(_b, ["className", "defaultValue", "normalize", "onChange", "onValueChange", "protocol", "value", "radius", "variant"]);
    const normalizeUrl = (input) => normalize ? input.trim().replace(/^https?:\/\//i, "").replace(/^\/\//, "").replace(/\s+/g, "") : input;
    const handleChange = (event) => {
      const normalized = normalizeUrl(event.currentTarget.value);
      event.currentTarget.value = normalized;
      onValueChange == null ? void 0 : onValueChange(normalized, `${protocol}${normalized}`);
      onChange == null ? void 0 : onChange(event);
    };
    return /* @__PURE__ */ jsxs(InputGroup, { "data-slot": "url-input", radius, variant, className, children: [
      /* @__PURE__ */ jsx(InputGroupAddon, { position: "start", className: "border-0 pr-0", children: /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }) }),
      protocol && /* @__PURE__ */ jsx("span", { "data-slot": "url-prefix", className: "select-none whitespace-nowrap border-r border-border px-2 text-sm text-muted-foreground", children: protocol }),
      /* @__PURE__ */ jsx(
        Input,
        __spreadValues({
          ref,
          type: "text",
          inputMode: "url",
          value: value === void 0 ? void 0 : normalizeUrl(value),
          defaultValue: defaultValue === void 0 ? void 0 : normalizeUrl(defaultValue),
          onChange: handleChange,
          className: cn(innerInput)
        }, props)
      )
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
        "data-slot": "background-pattern",
        "data-pattern": "dots",
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
        "data-slot": "background-pattern",
        "data-pattern": "grid",
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
        "data-slot": "background-pattern",
        "data-pattern": "lines",
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
        "data-slot": "background-pattern",
        "data-pattern": "diagonal",
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
        "data-slot": "background-pattern",
        "data-pattern": "cross",
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
        "data-slot": "background-pattern",
        "data-pattern": "checkerboard",
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
        "data-slot": "background-pattern",
        "data-pattern": "diamond",
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
        "data-slot": "background-pattern",
        "data-pattern": "zigzag",
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
        "data-slot": "background-pattern",
        "data-pattern": "dashed-grid",
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
        "data-slot": "background-pattern",
        "data-pattern": "radial",
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
var ScrollArea = React8.forwardRef(
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
        "data-slot": "scroll-area",
        "data-orientation": orientation,
        "data-scrollbar-size": scrollbarSize,
        className: cn("poyraz-scroll-area relative", overflowClass, className),
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
  scrollbar-color: var(--poyraz-input) transparent;
}

/* \u2500\u2500 Webkit (Chrome, Safari, Edge) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.poyraz-scroll-area::-webkit-scrollbar {
  width: var(--sb-size, 10px);
  height: var(--sb-size, 10px);
}

.poyraz-scroll-area::-webkit-scrollbar-track {
  background: var(--poyraz-surface-subtle);
}

.poyraz-scroll-area::-webkit-scrollbar-track:horizontal {
  background: var(--poyraz-surface-subtle);
}

.poyraz-scroll-area::-webkit-scrollbar-thumb {
  background: var(--poyraz-input);
  border: 2px solid var(--poyraz-surface-subtle);
  border-radius: var(--poyraz-radius-full);
  min-height: 32px;
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:hover {
  background: var(--poyraz-muted-foreground);
}

.poyraz-scroll-area::-webkit-scrollbar-thumb:active {
  background: var(--poyraz-foreground);
}

.poyraz-scroll-area::-webkit-scrollbar-corner {
  background: transparent;
  border: 1px solid var(--poyraz-border);
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

export { Avatar, AvatarFallback, AvatarImage, BasicContentCard, ExpandableCard, FeatureCard, GlassCard, HorizontalCard, ImageContentCard, InteractiveCard, Logo, MaskedInput, NumberInput, PasswordInput, PatternCheckerboard, PatternCross, PatternDashedGrid, PatternDiagonal, PatternDiamond, PatternDots, PatternGrid, PatternLines, PatternRadial, PatternZigzag, PhoneInput, PricingPlanCard, ProfileCard, RadioGroup, RadioGroupItem, ScrollArea, SearchInput, Separator, Skeleton, StatisticCard, Switch, TextEffect, Textarea, Typography, UrlInput, applyInputMask, avatarVariants, logoVariants, textEffectVariants, typographyVariants };
