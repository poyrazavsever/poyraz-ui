"use client";
'use strict';

var chunkIRDWCAA2_cjs = require('./chunk-IRDWCAA2.cjs');
var chunkO2BHWKSX_cjs = require('./chunk-O2BHWKSX.cjs');
var chunkROCSSX52_cjs = require('./chunk-ROCSSX52.cjs');
var React2 = require('react');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
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
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);

function useNavbarAutoHide({
  enabled = true,
  threshold = 80
} = {}) {
  const [hidden, setHidden] = React2__namespace.useState(false);
  const lastScrollY = React2__namespace.useRef(0);
  React2__namespace.useEffect(() => {
    if (!enabled) {
      setHidden(false);
      return;
    }
    function handleScroll() {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > threshold);
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled, threshold]);
  return hidden;
}
var DEFAULT_CONTAINER = "max-w-5xl mx-auto px-6";
var NavbarContext = React2__namespace.createContext({
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default",
  containerClassName: DEFAULT_CONTAINER
});
var useNavbar = () => React2__namespace.useContext(NavbarContext);
var navbarVariants = classVarianceAuthority.cva("w-full", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      minimal: "bg-background text-foreground",
      transparent: "bg-transparent text-foreground",
      bordered: "bg-background text-foreground border-b border-border-strong",
      glass: "bg-glass text-foreground border-b border-glass-border-outer shadow-[var(--poyraz-glass-shadow)] backdrop-blur-glass"
    }
  },
  defaultVariants: { variant: "default" }
});
var Navbar = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      sticky = false,
      autoHide = false,
      containerClassName,
      children
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "variant",
      "sticky",
      "autoHide",
      "containerClassName",
      "children"
    ]);
    const [mobileOpen, setMobileOpen] = React2__namespace.useState(false);
    const hidden = useNavbarAutoHide({ enabled: autoHide && sticky });
    return /* @__PURE__ */ jsxRuntime.jsx(
      NavbarContext.Provider,
      {
        value: {
          mobileOpen,
          setMobileOpen,
          variant: variant != null ? variant : "default",
          containerClassName: containerClassName != null ? containerClassName : DEFAULT_CONTAINER
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "nav",
          chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
            ref,
            "data-slot": "navbar",
            "data-variant": variant != null ? variant : "default",
            "data-sticky": sticky ? "" : void 0,
            "data-auto-hide": autoHide ? "" : void 0,
            "data-hidden": hidden ? "" : void 0,
            className: chunkO2BHWKSX_cjs.cn(
              "@container/navbar min-w-0",
              navbarVariants({ variant }),
              sticky && "sticky top-0 z-50",
              autoHide && "transition-transform duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:transition-none",
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
var topBarVariants = classVarianceAuthority.cva(
  ["w-full", "text-xs font-medium tracking-wide"].join(" "),
  {
    variants: {
      variant: {
        announcement: "bg-primary text-primary-foreground border-b border-primary-800",
        info: "bg-accent text-secondary-foreground border-b border-border",
        secondary: "bg-muted text-muted-foreground border-b border-border"
      }
    },
    defaultVariants: { variant: "announcement" }
  }
);
var NavbarTopBar = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "announcement",
      dismissible = false,
      children
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "variant",
      "dismissible",
      "children"
    ]);
    const { containerClassName } = useNavbar();
    const [dismissed, setDismissed] = React2__namespace.useState(false);
    if (dismissed) return null;
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        className: chunkO2BHWKSX_cjs.cn(topBarVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: chunkO2BHWKSX_cjs.cn(
              "py-1",
              "flex items-center justify-between",
              containerClassName
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-4 flex-1 min-w-0", children }),
              dismissible && /* @__PURE__ */ jsxRuntime.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Dismiss",
                  onClick: () => setDismissed(true),
                  className: chunkO2BHWKSX_cjs.cn(
                    "inline-flex items-center justify-center shrink-0",
                    "h-5 w-5 rounded-sm ml-2",
                    "transition-colors duration-150 cursor-pointer",
                    variant === "announcement" ? "hover:bg-primary-600 text-primary-foreground/80 hover:text-primary-foreground" : "hover:bg-accent text-placeholder hover:text-muted-foreground"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3 w-3" })
                }
              )
            ]
          }
        )
      })
    );
  }
);
NavbarTopBar.displayName = "NavbarTopBar";
var NavbarTopBarSection = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "start", children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "align", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "flex items-center gap-3 text-[11px]",
        align === "center" && "justify-center",
        align === "end" && "ml-auto",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarTopBarSection.displayName = "NavbarTopBarSection";
var NavbarMain = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { variant, containerClassName } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "relative w-full",
        "border-b",
        variant === "transparent" ? "border-glass-border" : variant === "bordered" ? "border-border-strong" : "border-border",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkO2BHWKSX_cjs.cn(
            "py-2",
            "flex items-center justify-between gap-3 @sm/navbar:gap-4 @lg/navbar:gap-6",
            containerClassName
          ),
          children
        }
      )
    })
  );
});
NavbarMain.displayName = "NavbarMain";
var NavbarBrand = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, href } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children", "href"]);
    if (href) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "a",
        chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
          href,
          className: chunkO2BHWKSX_cjs.cn("flex items-center gap-2", className)
        }, props), {
          children
        })
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        className: chunkO2BHWKSX_cjs.cn("flex items-center gap-2", className)
      }, props), {
        children
      })
    );
  }
);
NavbarBrand.displayName = "NavbarBrand";
var NavbarLinks = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { containerClassName } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Root,
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "navbar-links",
      className: chunkO2BHWKSX_cjs.cn("static z-10 hidden @lg/navbar:flex items-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.List, { className: "flex items-center gap-1", children }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-0 top-full w-full z-[60]", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: chunkO2BHWKSX_cjs.cn(containerClassName), children: /* @__PURE__ */ jsxRuntime.jsx(
          NavigationMenuPrimitive__namespace.Viewport,
          {
            className: chunkO2BHWKSX_cjs.cn(
              "relative w-full overflow-hidden transform-gpu origin-top",
              "bg-background",
              "border border-border border-t-0",
              "rounded-sm shadow-none",
              "h-[var(--radix-navigation-menu-viewport-height)]",
              "transition-[width,height,opacity,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
              "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2"
            )
          }
        ) }) })
      ]
    })
  );
});
NavbarLinks.displayName = "NavbarLinks";
var navLinkStyles = [
  "inline-flex items-center gap-1 px-2.5 py-1.5",
  "text-sm font-medium tracking-wide",
  "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
  "hover:bg-accent",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "data-[active]:border-b data-[active]:border-primary"
].join(" ");
var NavbarLink = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Item, { children: /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Link,
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(navLinkStyles, className)
    }, props), {
      children
    })
  ) });
});
NavbarLink.displayName = "NavbarLink";
var NavbarDropdownTrigger = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Trigger,
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(navLinkStyles, "group cursor-pointer", className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDown,
          {
            className: "h-3.5 w-3.5 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] group-data-[state=open]:rotate-180",
            "aria-hidden": true
          }
        )
      ]
    })
  );
});
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";
var NavbarDropdown = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(NavigationMenuPrimitive__namespace.Item, chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className: chunkO2BHWKSX_cjs.cn(className) }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsx(NavbarDropdownTrigger, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      NavigationMenuPrimitive__namespace.Content,
      {
        className: chunkO2BHWKSX_cjs.cn(
          "absolute left-0 top-0 w-full transform-gpu",
          "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=from-]:zoom-in-95",
          "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out data-[motion^=to-]:zoom-out-95",
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
var megaMenuVariants = classVarianceAuthority.cva("p-6", {
  variants: {
    layout: {
      /** Full-width: items spread across the entire row */
      full: "grid grid-cols-1 @sm/navbar:grid-cols-2 @lg/navbar:grid-cols-4 gap-3",
      /** Two columns on the left side */
      columns: "grid grid-cols-2 gap-3 max-w-lg",
      /** Featured: links on left, featured card slot on right */
      featured: "grid grid-cols-1 @lg/navbar:grid-cols-[1fr_280px] gap-6",
      /** Simple list (single column) */
      list: "flex flex-col gap-1 max-w-xs"
    }
  },
  defaultVariants: { layout: "full" }
});
var NavbarMegaMenu = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, layout, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "layout", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "navbar-mega-menu",
        className: chunkO2BHWKSX_cjs.cn(megaMenuVariants({ layout }), className)
      }, props), {
        children
      })
    );
  }
);
NavbarMegaMenu.displayName = "NavbarMegaMenu";
var NavbarMegaMenuLinks = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className: chunkO2BHWKSX_cjs.cn("grid grid-cols-2 gap-2", className) }, props), { children }));
});
NavbarMegaMenuLinks.displayName = "NavbarMegaMenuLinks";
var NavbarMegaMenuFeatured = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "border border-border p-4",
        "bg-muted",
        "transition-[background-color,border-color,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMegaMenuFeatured.displayName = "NavbarMegaMenuFeatured";
var NavbarMegaMenuItem = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, title, description, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "title", "description", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Link, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "block select-none p-3",
        "border border-transparent",
        "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "hover:bg-muted hover:border-border hover:translate-x-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium leading-none", children: title }),
        description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-1.5 text-xs text-muted-foreground leading-snug", children: description }),
        children
      ]
    })
  ) });
});
NavbarMegaMenuItem.displayName = "NavbarMegaMenuItem";
var NavbarActions = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "navbar-actions",
      className: chunkO2BHWKSX_cjs.cn("hidden @lg/navbar:flex items-center gap-2 shrink-0", className)
    }, props), {
      children
    })
  );
});
NavbarActions.displayName = "NavbarActions";
var NavbarMobileToggle = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      type: "button",
      "aria-label": mobileOpen ? "Close menu" : "Open menu",
      onClick: () => setMobileOpen((prev) => !prev),
      className: chunkO2BHWKSX_cjs.cn(
        "inline-flex items-center justify-center",
        "h-8 w-8",
        "border rounded-sm",
        "border-border-strong hover:bg-accent hover:border-input",
        "transition-colors duration-150",
        "@lg/navbar:hidden",
        "cursor-pointer",
        className
      )
    }, props), {
      children: mobileOpen ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-4 w-4" })
    })
  );
});
NavbarMobileToggle.displayName = "NavbarMobileToggle";
var NavbarMobileMenu = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  React2__namespace.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: chunkO2BHWKSX_cjs.cn(
          "@lg/navbar:hidden fixed inset-0 z-[998] bg-overlay backdrop-blur-[1px] transition-[opacity,backdrop-filter] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:transition-none",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: () => setMobileOpen(false),
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        className: chunkO2BHWKSX_cjs.cn(
          "@lg/navbar:hidden fixed top-0 right-0 z-[999] h-full w-[min(88%,24rem)]",
          "bg-background",
          "border-l border-border",
          "shadow-none transform-gpu will-change-transform",
          "transition-transform duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)]",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-placeholder", children: "Menu" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close menu",
                onClick: () => setMobileOpen(false),
                className: chunkO2BHWKSX_cjs.cn(
                  "inline-flex items-center justify-center",
                  "h-8 w-8",
                  "border rounded-sm",
                  "border-border-strong hover:bg-accent hover:border-input",
                  "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-95",
                  "cursor-pointer"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex flex-col gap-1 px-4 py-4 overflow-y-auto h-[calc(100%-57px)] animate-poyraz-fade-in", children })
        ]
      })
    )
  ] });
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, active, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "active", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "block px-2.5 py-2",
        "text-sm font-medium",
        "border border-transparent",
        "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        active ? "bg-primary-muted text-primary-muted-foreground border-primary-200 font-semibold" : "hover:bg-muted hover:border-border",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMobileLink.displayName = "NavbarMobileLink";
var NavbarMobileGroup = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className: chunkO2BHWKSX_cjs.cn("mb-3", className) }, props), { children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-placeholder", children: label }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-0.5", children })
  ] }));
});
NavbarMobileGroup.displayName = "NavbarMobileGroup";
var NavbarMobileActions = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "mt-auto px-4 py-4",
        "border-t border-border",
        "flex flex-col gap-2",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMobileActions.displayName = "NavbarMobileActions";
var NavbarSearch = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      placeholder = "Search\u2026",
      onSearch,
      wrapperClassName
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: chunkO2BHWKSX_cjs.cn("relative hidden @sm/navbar:flex items-center", wrapperClassName),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-2.5 h-3.5 w-3.5 text-placeholder" }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            chunkROCSSX52_cjs.__spreadValues({
              ref,
              type: "text",
              placeholder,
              onKeyDown: handleKeyDown,
              className: chunkO2BHWKSX_cjs.cn(
                "h-7 w-36 @lg/navbar:w-52 pl-8 pr-3",
                "text-xs font-medium",
                "border rounded-sm",
                "bg-background border-border-strong text-foreground placeholder:text-placeholder",
                "transition-colors duration-150",
                "focus:outline-none focus:ring-2 focus:ring-ring",
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
var NavbarDivider = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      role: "separator",
      className: chunkO2BHWKSX_cjs.cn(
        "hidden @lg/navbar:block",
        "h-5 w-px",
        "border-l border-border",
        "mx-2",
        className
      )
    }, props)
  );
});
NavbarDivider.displayName = "NavbarDivider";
function NavbarPopoverDropdown({
  label,
  align = "start",
  width,
  children,
  className
}) {
  const [open, setOpen] = React2__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Item, { className: "relative", children: /* @__PURE__ */ jsxRuntime.jsxs(PopoverPrimitive__namespace.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        className: chunkO2BHWKSX_cjs.cn(navLinkStyles, "group cursor-pointer"),
        children: [
          label,
          /* @__PURE__ */ jsxRuntime.jsx(
            lucideReact.ChevronDown,
            {
              className: chunkO2BHWKSX_cjs.cn(
                "h-3.5 w-3.5 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                open && "rotate-180"
              ),
              "aria-hidden": true
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
      PopoverPrimitive__namespace.Content,
      {
        align,
        sideOffset: 8,
        className: chunkO2BHWKSX_cjs.cn(
          "z-[70] min-w-[180px]",
          "bg-background",
          "border border-border",
          "rounded-sm shadow-sm origin-[var(--radix-popover-content-transform-origin)]",
          "py-1",
          "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2",
          "duration-[var(--poyraz-motion-duration-base)]",
          className
        ),
        style: width ? { width } : void 0,
        children
      }
    ) })
  ] }) });
}
NavbarPopoverDropdown.displayName = "NavbarPopoverDropdown";
var NavbarPopoverDropdownItem = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "block px-3 py-1.5",
        "text-sm font-medium text-secondary-foreground",
        "transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:bg-muted",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarPopoverDropdownItem.displayName = "NavbarPopoverDropdownItem";
function NavbarPanelDropdown({
  label,
  align = "start",
  width = "360px",
  children,
  className
}) {
  const [open, setOpen] = React2__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Item, { className: "relative", children: /* @__PURE__ */ jsxRuntime.jsxs(PopoverPrimitive__namespace.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        className: chunkO2BHWKSX_cjs.cn(navLinkStyles, "group cursor-pointer"),
        children: [
          label,
          /* @__PURE__ */ jsxRuntime.jsx(
            lucideReact.ChevronDown,
            {
              className: chunkO2BHWKSX_cjs.cn(
                "h-3.5 w-3.5 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                open && "rotate-180"
              ),
              "aria-hidden": true
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
      PopoverPrimitive__namespace.Content,
      {
        align,
        sideOffset: 8,
        className: chunkO2BHWKSX_cjs.cn(
          "z-[70]",
          "bg-background",
          "border border-border",
          "rounded-sm shadow-sm origin-[var(--radix-popover-content-transform-origin)]",
          "p-3",
          "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-2",
          "duration-[var(--poyraz-motion-duration-base)]",
          className
        ),
        style: { width },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "grid gap-1", children })
      }
    ) })
  ] }) });
}
NavbarPanelDropdown.displayName = "NavbarPanelDropdown";
var NavbarPanelDropdownItem = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, title, description, icon, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "title", "description", "icon", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "flex items-start gap-3 p-2.5",
        "rounded-sm transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "hover:bg-muted hover:translate-x-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )
    }, props), {
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex items-center justify-center h-8 w-8 rounded-sm bg-accent text-muted-foreground shrink-0 mt-0.5", children: icon }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-medium leading-none text-foreground", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-1 text-xs text-muted-foreground leading-snug", children: description }),
          children
        ] })
      ]
    })
  );
});
NavbarPanelDropdownItem.displayName = "NavbarPanelDropdownItem";
var NavbarMobileDropdown = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, label, defaultOpen = false, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "label", "defaultOpen", "children"]);
  const [open, setOpen] = React2__namespace.useState(defaultOpen);
  const contentRef = React2__namespace.useRef(null);
  const [height, setHeight] = React2__namespace.useState(0);
  React2__namespace.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children, open]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className: chunkO2BHWKSX_cjs.cn(className) }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((prev) => !prev),
        className: chunkO2BHWKSX_cjs.cn(
          "flex items-center justify-between w-full",
          "px-2.5 py-2",
          "text-sm font-medium",
          "border border-transparent",
          "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
          "hover:bg-muted hover:border-border",
          "cursor-pointer"
        ),
        children: [
          label,
          /* @__PURE__ */ jsxRuntime.jsx(
            lucideReact.ChevronDown,
            {
              className: chunkO2BHWKSX_cjs.cn(
                "h-4 w-4 text-placeholder transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                open && "rotate-180"
              ),
              "aria-hidden": true
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: contentRef,
        className: chunkO2BHWKSX_cjs.cn(
          "overflow-hidden transition-[max-height,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
          open ? "opacity-100" : "opacity-0"
        ),
        style: { maxHeight: open ? `${height}px` : "0px" },
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pl-3 pb-1 flex flex-col gap-0.5", children })
      }
    )
  ] }));
});
NavbarMobileDropdown.displayName = "NavbarMobileDropdown";
var DrillDownContext = React2__namespace.createContext({
  activePanel: null,
  pushPanel: () => {
  },
  popPanel: () => {
  }
});
var NavbarMobileDrillMenu = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const [panelStack, setPanelStack] = React2__namespace.useState([]);
  const childArray = React2__namespace.Children.toArray(children);
  const panels = childArray.filter(
    (child) => React2__namespace.isValidElement(child) && typeof child.type !== "string" && "displayName" in child.type && child.type.displayName === "NavbarMobileDrillPanel"
  );
  const mainContent = childArray.filter(
    (child) => !React2__namespace.isValidElement(child) || typeof child.type === "string" || !("displayName" in child.type) || child.type.displayName !== "NavbarMobileDrillPanel"
  );
  const activePanel = panelStack.length > 0 ? panelStack[panelStack.length - 1] : null;
  const pushPanel = React2__namespace.useCallback((id) => {
    setPanelStack(
      (prev) => prev[prev.length - 1] === id ? prev : [...prev, id]
    );
  }, []);
  const popPanel = React2__namespace.useCallback(() => {
    setPanelStack((prev) => prev.slice(0, -1));
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DrillDownContext.Provider, { value: { activePanel, pushPanel, popPanel }, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "navbar-mobile-drill-menu",
      "data-panel": activePanel != null ? activePanel : void 0,
      className: chunkO2BHWKSX_cjs.cn("relative overflow-hidden", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: chunkO2BHWKSX_cjs.cn(
              "transition-[transform,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)]",
              activePanel ? "-translate-x-full" : "translate-x-0",
              activePanel ? "opacity-0" : "opacity-100"
            ),
            children: mainContent
          }
        ),
        panels
      ]
    })
  ) });
});
NavbarMobileDrillMenu.displayName = "NavbarMobileDrillMenu";
var NavbarMobileDrillTrigger = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, panelId, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "panelId", "children"]);
  const { activePanel, pushPanel } = React2__namespace.useContext(DrillDownContext);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      type: "button",
      "data-slot": "navbar-mobile-drill-trigger",
      "aria-expanded": activePanel === panelId,
      "aria-controls": `navbar-drill-panel-${panelId}`,
      onClick: () => pushPanel(panelId),
      className: chunkO2BHWKSX_cjs.cn(
        "flex items-center justify-between w-full",
        "px-2.5 py-2",
        "text-sm font-medium",
        "border border-transparent",
        "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group",
        "hover:bg-muted hover:border-border",
        "cursor-pointer"
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronRight,
          {
            className: "h-4 w-4 text-placeholder transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] group-hover:translate-x-0.5",
            "aria-hidden": true
          }
        )
      ]
    })
  );
});
NavbarMobileDrillTrigger.displayName = "NavbarMobileDrillTrigger";
var NavbarMobileDrillPanel = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, panelId, backLabel = "Back", children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "panelId", "backLabel", "children"]);
  const { activePanel, popPanel } = React2__namespace.useContext(DrillDownContext);
  const isActive = activePanel === panelId;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      id: `navbar-drill-panel-${panelId}`,
      "data-slot": "navbar-mobile-drill-panel",
      "data-state": isActive ? "open" : "closed",
      "aria-hidden": !isActive,
      className: chunkO2BHWKSX_cjs.cn(
        "absolute inset-0 h-full",
        "bg-surface",
        "transition-[transform,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)]",
        isActive ? "translate-x-0" : "translate-x-full",
        isActive ? "opacity-100" : "opacity-0",
        isActive ? "pointer-events-auto" : "pointer-events-none",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            type: "button",
            "data-slot": "navbar-mobile-drill-back",
            onClick: popPanel,
            className: chunkO2BHWKSX_cjs.cn(
              "flex items-center gap-1 w-full",
              "px-2.5 py-2 mb-1",
              "text-sm font-medium text-muted-foreground",
              "border-b border-accent",
              "transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "hover:bg-muted hover:text-secondary-foreground",
              "cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4", "aria-hidden": true }),
              backLabel
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-0.5 px-1", children })
      ]
    })
  );
});
NavbarMobileDrillPanel.displayName = "NavbarMobileDrillPanel";
var SidebarContext = React2__namespace.createContext(null);
function SidebarProvider({
  children,
  variant = "default",
  defaultCollapsed = false,
  defaultMobileOpen = false
}) {
  const [collapsed, setCollapsed] = React2__namespace.useState(
    variant === "mini" ? true : defaultCollapsed
  );
  const [mobileOpen, setMobileOpen] = React2__namespace.useState(defaultMobileOpen);
  const value = React2__namespace.useMemo(
    () => ({ collapsed, setCollapsed, mobileOpen, setMobileOpen, variant }),
    [collapsed, mobileOpen, variant]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(SidebarContext.Provider, { value, children });
}
function useSidebar() {
  const context = React2__namespace.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
}
function isDarkVariant(v) {
  return v === "dark";
}
var sidebarVariants = classVarianceAuthority.cva(
  [
    "flex flex-col font-sans",
    "transition-[width,transform,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)]",
    "h-full"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "w-56 bg-background text-foreground border-r border-border",
        collapsible: "bg-background text-foreground border-r border-border",
        floating: "fixed inset-y-0 left-0 z-50 w-64 bg-glass text-foreground border-r border-glass-border-outer backdrop-blur-glass shadow-[var(--poyraz-glass-shadow)]",
        mini: "w-16 bg-background text-foreground border-r border-border",
        dark: "w-56 bg-inverted text-inverted-foreground border-r border-border-strong",
        bordered: "w-56 bg-background text-foreground border border-border-strong",
        inset: "w-56 bg-muted/80 text-foreground border border-border rounded-lg shadow-sm"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Sidebar = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      defaultCollapsed = false,
      children
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "variant",
      "defaultCollapsed",
      "children"
    ]);
    return /* @__PURE__ */ jsxRuntime.jsx(SidebarProvider, { variant: variant != null ? variant : "default", defaultCollapsed, children: /* @__PURE__ */ jsxRuntime.jsx(SidebarPanel, chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className }, props), { children })) });
  }
);
Sidebar.displayName = "Sidebar";
var SidebarPanel = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
    const { collapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
    const collapsibleWidth = variant === "collapsible" ? collapsed ? "w-16" : "w-56" : "";
    if (variant === "floating" && !mobileOpen) return /* @__PURE__ */ jsxRuntime.jsx("aside", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar", className: "hidden" }, props), { children }));
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      variant === "floating" && mobileOpen && /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "sidebar-overlay", className: "fixed inset-0 z-40 bg-overlay backdrop-blur-[1px] animate-poyraz-fade-in motion-reduce:animate-none", onClick: () => setMobileOpen(false) }),
      /* @__PURE__ */ jsxRuntime.jsx("aside", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar", "data-variant": variant, "data-collapsed": collapsed ? "" : void 0, "data-mobile-open": mobileOpen ? "" : void 0, className: chunkO2BHWKSX_cjs.cn("@container/sidebar min-w-0 motion-reduce:transition-none", sidebarVariants({ variant }), collapsibleWidth, variant === "floating" && "shadow-[var(--poyraz-glass-shadow)] animate-poyraz-slide-in-from-left will-change-transform motion-reduce:animate-none", className) }, props), { children }))
    ] });
  }
);
SidebarPanel.displayName = "SidebarPanel";
var SidebarHeader = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-header",
      className: chunkO2BHWKSX_cjs.cn(
        "flex items-center gap-3 shrink-0",
        "px-4 py-4",
        "border-b",
        dark ? "border-border-strong" : "border-border",
        collapsed && variant !== "default" && variant !== "dark" && variant !== "bordered" && "justify-center px-2",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarBranding = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, logo, title, subtitle } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "logo", "title", "subtitle"]);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "sidebar-branding",
        className: chunkO2BHWKSX_cjs.cn(
          "flex items-center gap-3",
          collapsed && "justify-center",
          className
        )
      }, props), {
        children: [
          logo && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: chunkO2BHWKSX_cjs.cn(
                "shrink-0 w-8 h-8 flex items-center justify-center",
                "border rounded-sm",
                dark ? "border-border-strong bg-surface-raised" : "border-border bg-muted"
              ),
              children: logo
            }
          ),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: chunkO2BHWKSX_cjs.cn(
                  "text-sm font-bold truncate",
                  dark ? "text-inverted-foreground" : "text-foreground"
                ),
                children: title
              }
            ),
            subtitle && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: chunkO2BHWKSX_cjs.cn(
                  "text-[10px] truncate",
                  dark ? "text-muted-foreground" : "text-placeholder"
                ),
                children: subtitle
              }
            )
          ] })
        ]
      })
    );
  }
);
SidebarBranding.displayName = "SidebarBranding";
var SidebarContent = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-content",
      className: chunkO2BHWKSX_cjs.cn(
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
var SidebarGroup = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar-group", className: chunkO2BHWKSX_cjs.cn("mb-4", className) }, props), { children }));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  if (collapsed) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-group-label",
      className: chunkO2BHWKSX_cjs.cn(
        "px-3 mb-2",
        "text-[10px] font-bold uppercase tracking-[0.15em]",
        dark ? "text-muted-foreground" : "text-placeholder",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarSection = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      title,
      collapsible = true,
      defaultOpen = true,
      children
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "title",
      "collapsible",
      "defaultOpen",
      "children"
    ]);
    const [open, setOpen] = React2__namespace.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    if (collapsed) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar-section", "data-state": open ? "open" : "closed", className: chunkO2BHWKSX_cjs.cn("mb-4", className) }, props), { children: [
      collapsible ? /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setOpen((p) => !p),
          className: chunkO2BHWKSX_cjs.cn(
            "w-full flex items-center justify-between",
            "px-3 mb-2",
            "text-[10px] font-bold uppercase tracking-[0.15em]",
            dark ? "text-muted-foreground hover:text-foreground" : "text-placeholder hover:text-muted-foreground",
            "cursor-pointer transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]"
          ),
          children: [
            title,
            /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronDown,
              {
                className: chunkO2BHWKSX_cjs.cn(
                  "h-3 w-3 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                  open && "rotate-180"
                )
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkO2BHWKSX_cjs.cn(
            "px-3 mb-2",
            "text-[10px] font-bold uppercase tracking-[0.15em]",
            dark ? "text-muted-foreground" : "text-placeholder"
          ),
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkO2BHWKSX_cjs.cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "min-h-0 overflow-hidden", children })
        }
      )
    ] }));
  }
);
SidebarSection.displayName = "SidebarSection";
var SidebarMenu = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("ul", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar-menu", className: chunkO2BHWKSX_cjs.cn("flex flex-col gap-0.5", className) }, props), { children }));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, active, icon, badge, action, href, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "active", "icon", "badge", "action", "href", "children"]);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    const content = /* @__PURE__ */ jsxRuntime.jsxs(
      "li",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "sidebar-menu-item",
        "data-active": active ? "" : void 0,
        tabIndex: href ? void 0 : 0,
        className: chunkO2BHWKSX_cjs.cn(
          "group relative flex items-center gap-3",
          "px-2.5 py-2",
          "text-sm font-medium",
          "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
          "cursor-pointer",
          // Active state
          active ? [
            dark ? "bg-primary-muted text-primary-muted-foreground font-semibold" : "bg-primary-muted text-primary-muted-foreground font-semibold",
            "border-l-[3px] border-solid border-primary",
            "pl-[calc(0.75rem-3px)]"
          ].join(" ") : [
            dark ? "text-muted-foreground hover:bg-surface-raised hover:text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]"
          ].join(" "),
          collapsed && "justify-center px-0 pl-0 border-l-0",
          className
        )
      }, props), {
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              role: "tooltip",
              "data-slot": "sidebar-menu-tooltip",
              className: chunkO2BHWKSX_cjs.cn(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                active ? "text-primary" : dark ? "text-muted-foreground group-hover:text-foreground" : "text-placeholder group-hover:text-muted-foreground"
              ),
              children: icon
            }
          ),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate", children }),
          !collapsed && badge && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              "data-slot": "sidebar-menu-badge",
              className: "ml-auto inline-flex shrink-0 items-center justify-center",
              children: badge
            }
          ),
          !collapsed && action,
          collapsed && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: chunkO2BHWKSX_cjs.cn(
                "absolute left-full ml-2 z-50",
                "px-2 py-1",
                "text-xs font-medium whitespace-nowrap",
                "bg-inverted text-inverted-foreground",
                "border border-border-strong",
                "opacity-0 pointer-events-none",
                "group-hover:opacity-100 group-focus-within:opacity-100",
                "transition-[opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
                "group-hover:translate-x-1"
              ),
              children
            }
          )
        ]
      })
    );
    if (href) {
      return /* @__PURE__ */ jsxRuntime.jsx("a", { href, "aria-current": active ? "page" : void 0, className: "no-underline", children: content });
    }
    return content;
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
var SidebarMenuAction = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      type: "button",
      "data-slot": "sidebar-menu-action",
      className: chunkO2BHWKSX_cjs.cn(
        "ml-auto shrink-0",
        "inline-flex items-center justify-center",
        "h-6 w-6",
        "rounded-sm",
        "opacity-0 group-hover:opacity-100",
        "transition-[color,background-color,opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "cursor-pointer",
        dark ? "text-muted-foreground hover:text-foreground hover:bg-surface-raised" : "text-placeholder hover:text-muted-foreground hover:bg-accent",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarSeparator = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "hr",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-separator",
      className: chunkO2BHWKSX_cjs.cn(
        "border-t",
        dark ? "border-border-strong" : "border-border",
        "my-3 mx-3",
        className
      )
    }, props)
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarBadge = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant: badgeVariant = "default", children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "variant", "children"]);
    if (badgeVariant === "dot") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        chunkROCSSX52_cjs.__spreadValues({
          ref,
          "data-slot": "sidebar-badge",
          className: chunkO2BHWKSX_cjs.cn(
            "inline-block size-1.5 shrink-0 rounded-full",
            "bg-primary",
            className
          )
        }, props)
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "sidebar-badge",
        className: chunkO2BHWKSX_cjs.cn(
          "inline-flex items-center justify-center",
          "h-5 min-w-5 px-1.5",
          "text-[10px] font-semibold leading-none",
          "rounded-full",
          badgeVariant === "outline" ? "border border-border-strong bg-transparent text-muted-foreground" : "border border-transparent bg-primary-muted text-primary-muted-foreground",
          className
        )
      }, props), {
        children
      })
    );
  }
);
SidebarBadge.displayName = "SidebarBadge";
var SidebarFooter = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-footer",
      className: chunkO2BHWKSX_cjs.cn(
        "shrink-0",
        "px-4 py-3",
        "border-t",
        dark ? "border-border-strong" : "border-border",
        collapsed && "px-2 flex justify-center",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarTrigger = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, action = "collapse" } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "action"]);
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
    return /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        type: "button",
        "data-slot": "sidebar-trigger",
        "aria-expanded": isOpen,
        "aria-label": isOpen ? "Collapse sidebar" : "Expand sidebar",
        onClick: handleClick,
        className: chunkO2BHWKSX_cjs.cn(
          "inline-flex items-center justify-center",
          "h-8 w-8",
          "border rounded-sm",
          dark ? "border-border-strong hover:bg-surface-raised hover:border-input text-muted-foreground" : "border-border-strong hover:bg-accent hover:border-input",
          "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-95",
          "cursor-pointer",
          className
        )
      }, props), {
        children: isOpen ? variant === "floating" || action === "mobile" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PanelLeftClose, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PanelLeftOpen, { className: "h-4 w-4" })
      })
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  const { collapsed, setCollapsed } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      type: "button",
      "data-slot": "sidebar-rail",
      "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
      "aria-expanded": !collapsed,
      onClick: () => setCollapsed((value) => !value),
      className: chunkO2BHWKSX_cjs.cn(
        "absolute inset-y-0 right-0 z-20 hidden w-1 translate-x-1/2 cursor-col-resize transition-colors hover:bg-primary/40 focus-visible:bg-primary/40 focus-visible:outline-none @lg/sidebar:block",
        className
      )
    }, props)
  );
});
SidebarRail.displayName = "SidebarRail";
var SidebarSearch = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, placeholder = "Search\u2026", onSearch } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "placeholder", "onSearch"]);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    if (collapsed) return null;
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && onSearch) {
        onSearch(e.currentTarget.value);
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "sidebar-search", className: "px-3 mb-3", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        lucideReact.Search,
        {
          className: chunkO2BHWKSX_cjs.cn(
            "absolute left-2.5 h-3.5 w-3.5",
            dark ? "text-muted-foreground" : "text-placeholder"
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        chunkROCSSX52_cjs.__spreadValues({
          ref,
          type: "text",
          placeholder,
          onKeyDown: handleKeyDown,
          className: chunkO2BHWKSX_cjs.cn(
            "w-full h-7 pl-8 pr-3",
            "text-xs font-medium",
            "border rounded-sm",
            "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
            "focus:outline-none focus:ring-2 focus:ring-ring",
            dark ? "bg-surface-raised border-border-strong text-foreground placeholder:text-muted-foreground" : "bg-background border-border-strong text-foreground placeholder:text-placeholder",
            className
          )
        }, props)
      )
    ] }) });
  }
);
SidebarSearch.displayName = "SidebarSearch";
var SidebarSubMenu = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, label, icon, defaultOpen = false, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "label", "icon", "defaultOpen", "children"]);
    const [open, setOpen] = React2__namespace.useState(defaultOpen);
    const { collapsed, variant } = useSidebar();
    const dark = isDarkVariant(variant);
    if (collapsed) return null;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "sidebar-submenu", "data-state": open ? "open" : "closed", className: chunkO2BHWKSX_cjs.cn("", className) }, props), { children: [
      /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          type: "button",
          "data-slot": "sidebar-submenu-trigger",
          "aria-expanded": open,
          onClick: () => setOpen((p) => !p),
          className: chunkO2BHWKSX_cjs.cn(
            "w-full flex items-center gap-3",
            "px-2.5 py-2",
            "text-sm font-medium",
            "rounded-sm transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
            "cursor-pointer",
            dark ? "text-muted-foreground hover:bg-surface-raised hover:text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
            "border-l-[3px] border-solid border-transparent",
            "pl-[calc(0.75rem-3px)]"
          ),
          children: [
            icon && /* @__PURE__ */ jsxRuntime.jsx(
              "span",
              {
                className: chunkO2BHWKSX_cjs.cn(
                  "shrink-0 w-5 h-5 flex items-center justify-center",
                  dark ? "text-muted-foreground" : "text-placeholder"
                ),
                children: icon
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate text-left", children: label }),
            /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronDown,
              {
                className: chunkO2BHWKSX_cjs.cn(
                  "h-3.5 w-3.5 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
                  open && "rotate-180",
                  dark ? "text-muted-foreground" : "text-placeholder"
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkO2BHWKSX_cjs.cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: chunkO2BHWKSX_cjs.cn(
                "min-h-0 overflow-hidden ml-5 pl-3",
                "border-l",
                dark ? "border-border-strong" : "border-border"
              ),
              children
            }
          )
        }
      )
    ] }));
  }
);
SidebarSubMenu.displayName = "SidebarSubMenu";
var SidebarSubMenuItem = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, active, href, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "active", "href", "children"]);
  const { variant } = useSidebar();
  const dark = isDarkVariant(variant);
  const inner = /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-submenu-item",
      className: chunkO2BHWKSX_cjs.cn(
        "px-3 py-2",
        "text-sm",
        "rounded-sm transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "cursor-pointer",
        active ? dark ? "text-primary-muted-foreground font-semibold" : "text-primary-muted-foreground font-semibold" : dark ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )
    }, props), {
      children
    })
  );
  if (href) {
    return /* @__PURE__ */ jsxRuntime.jsx("a", { href, className: "no-underline", children: inner });
  }
  return inner;
});
SidebarSubMenuItem.displayName = "SidebarSubMenuItem";
var SidebarUserProfile = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, name, role, avatarUrl, initials, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "name", "role", "avatarUrl", "initials", "children"]);
  const { collapsed, variant } = useSidebar();
  const dark = isDarkVariant(variant);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "sidebar-user-profile",
      className: chunkO2BHWKSX_cjs.cn(
        "flex items-center gap-3",
        collapsed && "justify-center",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: chunkO2BHWKSX_cjs.cn(
              "shrink-0 w-8 h-8 flex items-center justify-center",
              "border rounded-sm overflow-hidden",
              "text-xs font-bold",
              dark ? "border-border-strong bg-surface-raised text-foreground" : "border-border-strong bg-accent text-muted-foreground"
            ),
            children: avatarUrl ? /* @__PURE__ */ jsxRuntime.jsx(
              "img",
              {
                src: avatarUrl,
                alt: name,
                className: "w-full h-full object-cover"
              }
            ) : initials != null ? initials : name.charAt(0).toUpperCase()
          }
        ),
        !collapsed && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: chunkO2BHWKSX_cjs.cn(
                "text-sm font-semibold truncate",
                dark ? "text-inverted-foreground" : "text-foreground"
              ),
              children: name
            }
          ),
          role && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: chunkO2BHWKSX_cjs.cn(
                "text-xs truncate",
                dark ? "text-muted-foreground" : "text-placeholder"
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
var DEFAULT_CONTAINER2 = "max-w-5xl mx-auto px-6";
var footerVariants = classVarianceAuthority.cva(["w-full", "border-t"].join(" "), {
  variants: {
    variant: {
      full: "py-10 bg-background text-foreground border-border",
      compact: "py-3 bg-background text-foreground border-border",
      branded: "py-8 bg-background text-foreground border-border",
      centered: "py-10 text-center bg-background text-foreground border-border",
      dark: "py-10 bg-inverted text-inverted-foreground border-border-strong",
      minimal: "py-6 bg-background text-foreground border-border"
    }
  },
  defaultVariants: { variant: "full" }
});
var Footer = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "full", containerClassName, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "variant", "containerClassName", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "footer",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "footer",
        "data-variant": variant != null ? variant : "full",
        className: chunkO2BHWKSX_cjs.cn("@container/footer min-w-0", footerVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: chunkO2BHWKSX_cjs.cn("px-6", containerClassName != null ? containerClassName : DEFAULT_CONTAINER2), children })
      })
    );
  }
);
Footer.displayName = "Footer";
var FooterGrid = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-grid",
      className: chunkO2BHWKSX_cjs.cn(
        "grid gap-8",
        "grid-cols-1 @sm/footer:grid-cols-2 @md/footer:grid-cols-3 @lg/footer:grid-cols-4",
        className
      )
    }, props), {
      children
    })
  );
});
FooterGrid.displayName = "FooterGrid";
var FooterSection = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, "data-slot": "footer-section", className: chunkO2BHWKSX_cjs.cn("flex flex-col gap-3", className) }, props), { children }));
});
FooterSection.displayName = "FooterSection";
var FooterHeading = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h4",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-heading",
      className: chunkO2BHWKSX_cjs.cn(
        "text-xs font-bold uppercase tracking-[0.15em]",
        "text-foreground",
        "pb-2",
        "border-b border-border",
        className
      )
    }, props), {
      children
    })
  );
});
FooterHeading.displayName = "FooterHeading";
var FooterLink = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-link",
      className: chunkO2BHWKSX_cjs.cn(
        "text-sm text-muted-foreground",
        "hover:text-primary hover:underline",
        "transition-[color,text-decoration-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5",
        className
      )
    }, props), {
      children
    })
  );
});
FooterLink.displayName = "FooterLink";
var FooterBrand = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-brand",
      className: chunkO2BHWKSX_cjs.cn("flex flex-col items-start gap-3", "max-w-sm", className)
    }, props), {
      children
    })
  );
});
FooterBrand.displayName = "FooterBrand";
var FooterSocials = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-socials",
      className: chunkO2BHWKSX_cjs.cn("flex items-center gap-2", className)
    }, props), {
      children
    })
  );
});
FooterSocials.displayName = "FooterSocials";
var FooterSocialLink = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-social-link",
      className: chunkO2BHWKSX_cjs.cn(
        "inline-flex items-center justify-center",
        "h-8 w-8",
        "border border-border-strong rounded-sm",
        "text-muted-foreground",
        "hover:bg-primary hover:text-primary-foreground hover:border-primary-800",
        "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:scale-105 active:scale-95",
        className
      )
    }, props), {
      children
    })
  );
});
FooterSocialLink.displayName = "FooterSocialLink";
var FooterBottom = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "footer-bottom",
      className: chunkO2BHWKSX_cjs.cn(
        "flex flex-col @sm/footer:flex-row items-center justify-between gap-4",
        "pt-5 mt-6",
        "border-t border-border",
        "text-xs text-placeholder",
        className
      )
    }, props), {
      children
    })
  );
});
FooterBottom.displayName = "FooterBottom";
var FooterBottomLinks = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn("flex items-center gap-4 flex-wrap", "text-xs", className)
    }, props), {
      children
    })
  );
});
FooterBottomLinks.displayName = "FooterBottomLinks";
var FooterDivider = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "hr",
    chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn("border-t border-border my-8", className)
    }, props)
  );
});
FooterDivider.displayName = "FooterDivider";
var FooterDescription = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn("text-sm text-muted-foreground leading-relaxed", className)
    }, props), {
      children
    })
  );
});
FooterDescription.displayName = "FooterDescription";
var FooterBadge = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "inline-flex items-center",
        "px-2 py-0.5",
        "text-[10px] font-bold uppercase tracking-wider",
        "border border-border rounded-sm",
        "text-muted-foreground bg-muted",
        "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        className
      )
    }, props), {
      children
    })
  );
});
FooterBadge.displayName = "FooterBadge";
var FooterLinkGroup = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)
    }, props), {
      children
    })
  );
});
FooterLinkGroup.displayName = "FooterLinkGroup";
var FooterCTA = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, heading, description, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "heading", "description", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        className: chunkO2BHWKSX_cjs.cn(
          "flex flex-col @sm/footer:flex-row items-start @sm/footer:items-center justify-between gap-4",
          "py-5 px-6",
          "border border-border rounded-sm",
          "bg-muted",
          "transition-[background-color,border-color,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "min-w-0", children: [
            heading && /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-semibold text-foreground", children: heading }),
            description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: description })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2 shrink-0", children })
        ]
      })
    );
  }
);
FooterCTA.displayName = "FooterCTA";
var FooterApp = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({ ref, className: chunkO2BHWKSX_cjs.cn("flex flex-col gap-2", className) }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.15em] text-placeholder", children: "Download App" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2", children })
  ] }));
});
FooterApp.displayName = "FooterApp";
var FooterAppLink = React2__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkROCSSX52_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      className: chunkO2BHWKSX_cjs.cn(
        "inline-flex items-center gap-2",
        "px-3 py-2",
        "border border-border-strong rounded-sm",
        "text-xs font-medium text-secondary-foreground",
        "hover:bg-muted hover:border-input",
        "transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[0.98]",
        className
      )
    }, props), {
      children
    })
  );
});
FooterAppLink.displayName = "FooterAppLink";
var FooterNewsletter = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      heading = "Subscribe to our newsletter",
      description = "Get the latest updates directly in your inbox.",
      placeholder = "you@example.com",
      buttonText = "Subscribe",
      onSubscribe
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "heading",
      "description",
      "placeholder",
      "buttonText",
      "onSubscribe"
    ]);
    const [email, setEmail] = React2__namespace.useState("");
    function handleSubmit(event) {
      event.preventDefault();
      const value = email.trim();
      if (!value) return;
      onSubscribe == null ? void 0 : onSubscribe(value);
      setEmail("");
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        "data-slot": "footer-newsletter",
        className: chunkO2BHWKSX_cjs.cn(
          "rounded-lg border border-border bg-surface-subtle p-4 @sm/footer:p-6",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("h4", { className: "text-sm font-semibold text-foreground", children: heading }),
          /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: description }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            "form",
            {
              "data-slot": "footer-newsletter-form",
              onSubmit: handleSubmit,
              className: "mt-4 flex flex-col gap-2 @sm/footer:flex-row",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  chunkIRDWCAA2_cjs.Input,
                  {
                    type: "email",
                    value: email,
                    onChange: (event) => setEmail(event.target.value),
                    placeholder,
                    "aria-label": placeholder,
                    required: true,
                    className: "min-w-0 flex-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(chunkO2BHWKSX_cjs.Button, { type: "submit", className: "shrink-0", children: buttonText })
              ]
            }
          )
        ]
      })
    );
  }
);
FooterNewsletter.displayName = "FooterNewsletter";
var announcementBarVariants = classVarianceAuthority.cva(
  [
    "relative w-full",
    "text-sm font-medium tracking-wide",
    "border-b",
    "animate-poyraz-slide-in-from-top",
    "transition-[color,background-color,border-color,opacity,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-inverted text-inverted-foreground border-inverted",
        info: "bg-info text-info-foreground border-info-border",
        success: "bg-success text-success-foreground border-success-border",
        warning: "bg-warning text-warning-foreground border-warning-border",
        danger: "bg-destructive text-destructive-foreground border-destructive",
        branded: "bg-primary text-primary-foreground border-primary-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AnnouncementBar = React2__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      dismissible = true,
      onDismiss,
      icon,
      action,
      open: controlledOpen,
      defaultOpen = true,
      onOpenChange,
      onTransitionEnd,
      children
    } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
      "className",
      "variant",
      "dismissible",
      "onDismiss",
      "icon",
      "action",
      "open",
      "defaultOpen",
      "onOpenChange",
      "onTransitionEnd",
      "children"
    ]);
    const [internalOpen, setInternalOpen] = React2__namespace.useState(defaultOpen);
    const open = controlledOpen != null ? controlledOpen : internalOpen;
    const [present, setPresent] = React2__namespace.useState(open);
    React2__namespace.useEffect(() => {
      if (open) setPresent(true);
    }, [open]);
    if (!present) return null;
    const handleDismiss = () => {
      if (controlledOpen === void 0) setInternalOpen(false);
      onOpenChange == null ? void 0 : onOpenChange(false);
      onDismiss == null ? void 0 : onDismiss();
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
        ref,
        role: "banner",
        "data-slot": "announcement-bar",
        "data-variant": variant != null ? variant : "default",
        "data-state": open ? "open" : "closed",
        onTransitionEnd: (event) => {
          onTransitionEnd == null ? void 0 : onTransitionEnd(event);
          if (!open && event.currentTarget === event.target) setPresent(false);
        },
        className: chunkO2BHWKSX_cjs.cn(
          announcementBarVariants({ variant }),
          "grid motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "announcement-bar-content", className: "@container/announcement mx-auto flex min-h-0 w-full max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-10 py-2 @sm/announcement:flex-nowrap", children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "announcement-bar-icon", className: "shrink-0 animate-poyraz-scale-in motion-reduce:animate-none", children: icon }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "announcement-bar-message", className: "min-w-0 text-center text-xs @sm/announcement:text-sm", children }),
          action && /* @__PURE__ */ jsxRuntime.jsx("span", { "data-slot": "announcement-bar-action", className: "shrink-0 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:transition-none hover:translate-x-0.5", children: action }),
          dismissible && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              "data-slot": "announcement-bar-close",
              onClick: handleDismiss,
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 hover:scale-105 active:scale-95 transition-[opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] cursor-pointer",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      })
    );
  }
);
AnnouncementBar.displayName = "AnnouncementBar";
function getDataTableCellValue(row, column) {
  if (column.accessorFn) return column.accessorFn(row);
  if (column.accessorKey) return row[column.accessorKey];
  return row[column.id];
}
function stringifyDataTableValue(value) {
  if (value == null) return "";
  if (["string", "number", "boolean"].includes(typeof value)) return String(value);
  return JSON.stringify(value);
}
function DataTableCoreInner(_a, ref) {
  var _b = _a, {
    caption,
    className,
    columns,
    data,
    density = "default",
    emptyContent = "No results found.",
    errorContent = "Unable to load data.",
    getRowId,
    loadingRows = 5,
    maxHeight,
    onSort,
    onToggleAll,
    onToggleRow,
    radius = "lg",
    selectable = false,
    selectedIds = /* @__PURE__ */ new Set(),
    sortColumn,
    sortDirection,
    state = data.length ? "populated" : "empty",
    stickyHeader = false,
    surface = "solid",
    style
  } = _b, props = chunkROCSSX52_cjs.__objRest(_b, [
    "caption",
    "className",
    "columns",
    "data",
    "density",
    "emptyContent",
    "errorContent",
    "getRowId",
    "loadingRows",
    "maxHeight",
    "onSort",
    "onToggleAll",
    "onToggleRow",
    "radius",
    "selectable",
    "selectedIds",
    "sortColumn",
    "sortDirection",
    "state",
    "stickyHeader",
    "surface",
    "style"
  ]);
  const rowId = (row, index) => {
    var _a2;
    return (_a2 = getRowId == null ? void 0 : getRowId(row, index)) != null ? _a2 : String(index);
  };
  const allSelected = data.length > 0 && data.every((row, index) => selectedIds.has(rowId(row, index)));
  const padding = density === "compact" ? "px-2.5 py-2" : density === "spacious" ? "px-4 py-3.5" : "px-3 py-2.5";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkROCSSX52_cjs.__spreadProps(chunkROCSSX52_cjs.__spreadValues({
      ref,
      "data-slot": "data-table-core",
      "data-state": state,
      "data-surface": surface,
      className: chunkO2BHWKSX_cjs.cn(
        "relative w-full overflow-auto border",
        surface === "solid" && "border-border bg-surface",
        surface === "soft" && "border-transparent bg-surface-subtle",
        surface === "glass" && "border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "xl" && "rounded-xl",
        className
      ),
      style: chunkROCSSX52_cjs.__spreadValues({ maxHeight }, style)
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full min-w-max border-separate border-spacing-0 text-sm", children: [
        caption && /* @__PURE__ */ jsxRuntime.jsx("caption", { className: "sr-only", children: caption }),
        /* @__PURE__ */ jsxRuntime.jsx("thead", { className: chunkO2BHWKSX_cjs.cn(stickyHeader && "sticky top-0 z-10"), children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "bg-surface-subtle/95 backdrop-blur-md", children: [
          selectable && /* @__PURE__ */ jsxRuntime.jsx("th", { className: chunkO2BHWKSX_cjs.cn("w-12 border-b border-border text-center", padding), children: /* @__PURE__ */ jsxRuntime.jsx(chunkIRDWCAA2_cjs.Checkbox, { checked: allSelected, onCheckedChange: onToggleAll, "aria-label": "Select all rows" }) }),
          columns.map((column) => {
            const sortable = column.sortable !== false && Boolean(onSort);
            const active = sortColumn === column.id;
            const ariaSort = active ? sortDirection === "asc" ? "ascending" : "descending" : "none";
            return /* @__PURE__ */ jsxRuntime.jsx(
              "th",
              {
                scope: "col",
                "aria-sort": sortable ? ariaSort : void 0,
                className: chunkO2BHWKSX_cjs.cn("border-b border-border text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", padding, column.className),
                children: /* @__PURE__ */ jsxRuntime.jsxs(
                  "button",
                  {
                    type: "button",
                    disabled: !sortable,
                    onClick: () => onSort == null ? void 0 : onSort(column.id),
                    className: chunkO2BHWKSX_cjs.cn("inline-flex items-center gap-1.5 whitespace-nowrap outline-none transition-colors", sortable ? "cursor-pointer hover:text-foreground focus-visible:text-foreground" : "cursor-default"),
                    children: [
                      column.header,
                      sortable && (active && sortDirection === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "size-3.5 text-primary animate-poyraz-scale-in" }) : active && sortDirection === "desc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, { className: "size-3.5 text-primary animate-poyraz-scale-in" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUpDown, { className: "size-3.5 opacity-45" }))
                    ]
                  }
                )
              },
              column.id
            );
          })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("tbody", { children: [
          state === "loading" && Array.from({ length: loadingRows }, (_, rowIndex) => /* @__PURE__ */ jsxRuntime.jsxs("tr", { "aria-hidden": "true", className: "animate-poyraz-fade-in", children: [
            selectable && /* @__PURE__ */ jsxRuntime.jsx("td", { className: chunkO2BHWKSX_cjs.cn("border-b border-border/70", padding), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mx-auto size-4 animate-pulse rounded bg-muted" }) }),
            columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx("td", { className: chunkO2BHWKSX_cjs.cn("border-b border-border/70", padding), children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-3.5 w-24 max-w-full animate-pulse rounded bg-muted" }) }, column.id))
          ] }, `loading-${rowIndex}`)),
          state === "error" && /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "p-10 text-center text-sm text-destructive-muted-foreground animate-poyraz-fade-in", role: "alert", children: errorContent }) }),
          state === "empty" && /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "p-10 text-center text-sm text-muted-foreground animate-poyraz-fade-in", children: emptyContent }) }),
          state === "populated" && data.map((row, index) => {
            const id = rowId(row, index);
            const selected = selectedIds.has(id);
            return /* @__PURE__ */ jsxRuntime.jsxs("tr", { "data-state": selected ? "selected" : void 0, className: "transition-colors hover:bg-accent/55 data-[state=selected]:bg-primary-muted/55", children: [
              selectable && /* @__PURE__ */ jsxRuntime.jsx("td", { className: chunkO2BHWKSX_cjs.cn("border-b border-border/70 text-center", padding), children: /* @__PURE__ */ jsxRuntime.jsx(chunkIRDWCAA2_cjs.Checkbox, { checked: selected, onCheckedChange: () => onToggleRow == null ? void 0 : onToggleRow(id, row), "aria-label": `Select row ${index + 1}` }) }),
              columns.map((column) => /* @__PURE__ */ jsxRuntime.jsx("td", { className: chunkO2BHWKSX_cjs.cn("border-b border-border/70 text-secondary-foreground", padding, column.className), children: column.cell ? column.cell(row) : stringifyDataTableValue(getDataTableCellValue(row, column)) }, column.id))
            ] }, id);
          })
        ] })
      ] })
    })
  );
}
var DataTableCore = React2__namespace.forwardRef(DataTableCoreInner);
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
  emptyMessage = "No results found.",
  loading = false,
  error,
  stickyHeader = false,
  tableMaxHeight,
  density = "default",
  surface = "solid",
  radius = "lg",
  toolbar
}, ref) {
  const [search, setSearch] = React2__namespace.useState("");
  const [sortCol, setSortCol] = React2__namespace.useState(null);
  const [sortDir, setSortDir] = React2__namespace.useState(null);
  const [page, setPage] = React2__namespace.useState(0);
  const [selectedIds, setSelectedIds] = React2__namespace.useState(/* @__PURE__ */ new Set());
  const [hiddenCols, setHiddenCols] = React2__namespace.useState(
    () => new Set(columns.filter((c) => c.hidden).map((c) => c.id))
  );
  const [colToggleOpen, setColToggleOpen] = React2__namespace.useState(false);
  const visibleColumns = columns.filter((c) => !hiddenCols.has(c.id));
  const filtered = React2__namespace.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (row) => columns.some((col) => {
        const val = getDataTableCellValue(row, col);
        return stringifyDataTableValue(val).toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);
  const sorted = React2__namespace.useMemo(() => {
    if (!sortCol || !sortDir) return filtered;
    const col = columns.find((c) => c.id === sortCol);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getDataTableCellValue(a, col);
      const bVal = getDataTableCellValue(b, col);
      const aStr = stringifyDataTableValue(aVal);
      const bStr = stringifyDataTableValue(bVal);
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
  React2__namespace.useEffect(() => {
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
  React2__namespace.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: chunkO2BHWKSX_cjs.cn("w-full space-y-4 animate-poyraz-fade-in", className), children: [
    (searchable || columnToggle || selectable && selectedIds.size > 0) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
      searchable && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-placeholder" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkIRDWCAA2_cjs.Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: searchPlaceholder,
            className: "pl-9 h-8 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
        selectable && selectedIds.size > 0 && /* @__PURE__ */ jsxRuntime.jsxs(chunkO2BHWKSX_cjs.Badge, { variant: "secondary", className: "text-xs animate-poyraz-scale-in", children: [
          selectedIds.size,
          " selected"
        ] }),
        columnToggle && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            chunkO2BHWKSX_cjs.Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-8 gap-1.5 transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[0.98]",
              onClick: () => setColToggleOpen((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.SlidersHorizontal, { className: "h-3.5 w-3.5" }),
                "Columns"
              ]
            }
          ),
          colToggleOpen && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: "fixed inset-0 z-40",
                onClick: () => setColToggleOpen(false)
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-0 top-full mt-1 z-50 w-48 bg-background border border-border p-2 space-y-0.5 origin-top-right animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-[var(--poyraz-motion-duration-base)]", children: columns.map((col) => /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-muted cursor-pointer transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5",
                onClick: () => toggleColumn(col.id),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "span",
                    {
                      className: chunkO2BHWKSX_cjs.cn(
                        "h-4 w-4 border flex items-center justify-center shrink-0 transition-[color,background-color,border-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
                        hiddenCols.has(col.id) ? "border-border-strong scale-95" : "border-primary bg-primary text-primary-foreground scale-100"
                      ),
                      children: !hiddenCols.has(col.id) && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3 w-3 animate-poyraz-scale-in" })
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
    toolbar,
    /* @__PURE__ */ jsxRuntime.jsx(
      DataTableCore,
      {
        columns: visibleColumns,
        data: rows,
        getRowId: (row, index) => rowId(row, page * pageSize + index),
        state: loading ? "loading" : error ? "error" : rows.length ? "populated" : "empty",
        emptyContent: emptyMessage,
        errorContent: error,
        selectable,
        selectedIds,
        onToggleRow: (id) => toggleRow(id),
        onToggleAll: toggleAll,
        sortColumn: sortCol,
        sortDirection: sortDir,
        onSort: handleSort,
        caption,
        stickyHeader,
        maxHeight: tableMaxHeight,
        density,
        surface,
        radius
      }
    ),
    pagination && sorted.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-placeholder", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-muted-foreground", children: page * pageSize + 1 }),
        "\u2013",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-muted-foreground", children: Math.min((page + 1) * pageSize, sorted.length) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-muted-foreground", children: sorted.length }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkO2BHWKSX_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] enabled:hover:-translate-x-0.5",
            disabled: page === 0,
            onClick: () => setPage(0),
            "aria-label": "First page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkO2BHWKSX_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] enabled:hover:-translate-x-0.5",
            disabled: page === 0,
            onClick: () => setPage((p) => Math.max(0, p - 1)),
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "px-3 text-xs font-semibold text-muted-foreground", children: [
          page + 1,
          " / ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkO2BHWKSX_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] enabled:hover:translate-x-0.5",
            disabled: page >= totalPages - 1,
            onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkO2BHWKSX_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-7 w-7 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] enabled:hover:translate-x-0.5",
            disabled: page >= totalPages - 1,
            onClick: () => setPage(totalPages - 1),
            "aria-label": "Last page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsRight, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] })
  ] });
}
var DataTable = React2__namespace.forwardRef(DataTableInner);

exports.AnnouncementBar = AnnouncementBar;
exports.DataTable = DataTable;
exports.DataTableCore = DataTableCore;
exports.Footer = Footer;
exports.FooterApp = FooterApp;
exports.FooterAppLink = FooterAppLink;
exports.FooterBadge = FooterBadge;
exports.FooterBottom = FooterBottom;
exports.FooterBottomLinks = FooterBottomLinks;
exports.FooterBrand = FooterBrand;
exports.FooterCTA = FooterCTA;
exports.FooterDescription = FooterDescription;
exports.FooterDivider = FooterDivider;
exports.FooterGrid = FooterGrid;
exports.FooterHeading = FooterHeading;
exports.FooterLink = FooterLink;
exports.FooterLinkGroup = FooterLinkGroup;
exports.FooterNewsletter = FooterNewsletter;
exports.FooterSection = FooterSection;
exports.FooterSocialLink = FooterSocialLink;
exports.FooterSocials = FooterSocials;
exports.Navbar = Navbar;
exports.NavbarActions = NavbarActions;
exports.NavbarBrand = NavbarBrand;
exports.NavbarDivider = NavbarDivider;
exports.NavbarDropdown = NavbarDropdown;
exports.NavbarDropdownTrigger = NavbarDropdownTrigger;
exports.NavbarLink = NavbarLink;
exports.NavbarLinks = NavbarLinks;
exports.NavbarMain = NavbarMain;
exports.NavbarMegaMenu = NavbarMegaMenu;
exports.NavbarMegaMenuFeatured = NavbarMegaMenuFeatured;
exports.NavbarMegaMenuItem = NavbarMegaMenuItem;
exports.NavbarMegaMenuLinks = NavbarMegaMenuLinks;
exports.NavbarMobileActions = NavbarMobileActions;
exports.NavbarMobileDrillMenu = NavbarMobileDrillMenu;
exports.NavbarMobileDrillPanel = NavbarMobileDrillPanel;
exports.NavbarMobileDrillTrigger = NavbarMobileDrillTrigger;
exports.NavbarMobileDropdown = NavbarMobileDropdown;
exports.NavbarMobileGroup = NavbarMobileGroup;
exports.NavbarMobileLink = NavbarMobileLink;
exports.NavbarMobileMenu = NavbarMobileMenu;
exports.NavbarMobileToggle = NavbarMobileToggle;
exports.NavbarPanelDropdown = NavbarPanelDropdown;
exports.NavbarPanelDropdownItem = NavbarPanelDropdownItem;
exports.NavbarPopoverDropdown = NavbarPopoverDropdown;
exports.NavbarPopoverDropdownItem = NavbarPopoverDropdownItem;
exports.NavbarSearch = NavbarSearch;
exports.NavbarTopBar = NavbarTopBar;
exports.NavbarTopBarSection = NavbarTopBarSection;
exports.Sidebar = Sidebar;
exports.SidebarBadge = SidebarBadge;
exports.SidebarBranding = SidebarBranding;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarPanel = SidebarPanel;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSearch = SidebarSearch;
exports.SidebarSection = SidebarSection;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarSubMenu = SidebarSubMenu;
exports.SidebarSubMenuItem = SidebarSubMenuItem;
exports.SidebarTrigger = SidebarTrigger;
exports.SidebarUserProfile = SidebarUserProfile;
exports.announcementBarVariants = announcementBarVariants;
exports.footerVariants = footerVariants;
exports.megaMenuVariants = megaMenuVariants;
exports.navbarVariants = navbarVariants;
exports.sidebarVariants = sidebarVariants;
exports.topBarVariants = topBarVariants;
exports.useNavbar = useNavbar;
exports.useSidebar = useSidebar;
