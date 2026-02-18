'use strict';

var chunkOHDZLLEM_cjs = require('./chunk-OHDZLLEM.cjs');
var chunkYB3VQRHJ_cjs = require('./chunk-YB3VQRHJ.cjs');
var React = require('react');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var Link2 = require('next/link');
var jsxRuntime = require('react/jsx-runtime');

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

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var Link2__default = /*#__PURE__*/_interopDefault(Link2);

var DEFAULT_CONTAINER = "max-w-5xl mx-auto";
var NavbarContext = React__namespace.createContext({
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default",
  containerClassName: DEFAULT_CONTAINER
});
var useNavbar = () => React__namespace.useContext(NavbarContext);
var navbarVariants = classVarianceAuthority.cva("w-full", {
  variants: {
    variant: {
      default: "bg-white",
      minimal: "bg-white",
      transparent: "bg-transparent"
    }
  },
  defaultVariants: { variant: "default" }
});
var Navbar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      sticky = false,
      containerClassName,
      children
    } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
      "className",
      "variant",
      "sticky",
      "containerClassName",
      "children"
    ]);
    const [mobileOpen, setMobileOpen] = React__namespace.useState(false);
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
          chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
            ref,
            className: chunkYB3VQRHJ_cjs.cn(
              navbarVariants({ variant }),
              sticky && "sticky top-0 z-50",
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
var NavbarTopBar = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { containerClassName } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "w-full bg-red-600 text-white",
        "border-b-2 border-dashed border-red-800",
        "text-xs font-medium tracking-wide",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkYB3VQRHJ_cjs.cn(
            "px-6 py-1.5 sm:px-0",
            "flex items-center justify-between",
            containerClassName
          ),
          children
        }
      )
    })
  );
});
NavbarTopBar.displayName = "NavbarTopBar";
var NavbarMain = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { variant, containerClassName } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "relative w-full",
        "border-b-2 border-dashed",
        variant === "transparent" ? "border-white/30" : "border-slate-200",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: chunkYB3VQRHJ_cjs.cn(
            "px-6 py-3",
            "flex items-center justify-between gap-6",
            containerClassName
          ),
          children
        }
      )
    })
  );
});
NavbarMain.displayName = "NavbarMain";
var NavbarBrand = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, href } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children", "href"]);
    if (href) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        Link2__default.default,
        chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
          href,
          className: chunkYB3VQRHJ_cjs.cn("flex items-center gap-2", className)
        }, props), {
          children
        })
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn("flex items-center gap-2", className)
      }, props), {
        children
      })
    );
  }
);
NavbarBrand.displayName = "NavbarBrand";
var NavbarLinks = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Root,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("static z-10 hidden lg:flex items-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.List, { className: "flex items-center gap-1", children }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-0 top-full w-full z-50", children: /* @__PURE__ */ jsxRuntime.jsx(
          NavigationMenuPrimitive__namespace.Viewport,
          {
            className: chunkYB3VQRHJ_cjs.cn(
              "relative w-full overflow-hidden",
              "bg-white",
              "border-2 border-dashed border-slate-200 border-t-0",
              "rounded-none shadow-none",
              "h-[var(--radix-navigation-menu-viewport-height)]",
              "transition-[width,height] duration-200",
              "data-[state=open]:animate-in data-[state=open]:fade-in",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out"
            )
          }
        ) })
      ]
    })
  );
});
NavbarLinks.displayName = "NavbarLinks";
var navLinkStyles = classVarianceAuthority.cva(
  [
    "inline-flex items-center gap-1 px-3 py-2",
    "text-sm font-medium tracking-wide",
    "rounded-none transition-colors duration-150",
    "hover:bg-slate-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
    "data-[active]:border-b-2 data-[active]:border-dashed data-[active]:border-red-600"
  ].join(" ")
);
var NavbarLink = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Item, { children: /* @__PURE__ */ jsxRuntime.jsx(
    NavigationMenuPrimitive__namespace.Link,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(navLinkStyles(), className)
    }, props), {
      children
    })
  ) });
});
NavbarLink.displayName = "NavbarLink";
var NavbarDropdownTrigger = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    NavigationMenuPrimitive__namespace.Trigger,
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(navLinkStyles(), "group cursor-pointer", className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          lucideReact.ChevronDown,
          {
            className: "h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180",
            "aria-hidden": true
          }
        )
      ]
    })
  );
});
NavbarDropdownTrigger.displayName = "NavbarDropdownTrigger";
var NavbarDropdown = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(NavigationMenuPrimitive__namespace.Item, chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn(className) }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsx(NavbarDropdownTrigger, { children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      NavigationMenuPrimitive__namespace.Content,
      {
        className: chunkYB3VQRHJ_cjs.cn(
          "absolute left-0 top-0 w-full",
          "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in",
          "data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
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
var NavbarMegaMenu = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("grid gap-4 p-6", "md:w-[500px] lg:w-[700px]", className)
    }, props), {
      children
    })
  );
});
NavbarMegaMenu.displayName = "NavbarMegaMenu";
var NavbarMegaMenuItem = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, title, description, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "title", "description", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(NavigationMenuPrimitive__namespace.Link, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "block select-none p-3",
        "border-2 border-dashed border-transparent",
        "rounded-none transition-colors",
        "hover:bg-slate-50 hover:border-slate-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-bold leading-none", children: title }),
        description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "mt-1 text-xs text-slate-500 leading-snug", children: description }),
        children
      ]
    })
  ) });
});
NavbarMegaMenuItem.displayName = "NavbarMegaMenuItem";
var NavbarActions = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("hidden lg:flex items-center gap-2 shrink-0", className)
    }, props), {
      children
    })
  );
});
NavbarActions.displayName = "NavbarActions";
var NavbarMobileToggle = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      type: "button",
      "aria-label": mobileOpen ? "Close menu" : "Open menu",
      onClick: () => setMobileOpen((prev) => !prev),
      className: chunkYB3VQRHJ_cjs.cn(
        "inline-flex items-center justify-center",
        "h-10 w-10",
        "border-2 border-dashed border-slate-300 rounded-none",
        "hover:bg-slate-100 hover:border-slate-500",
        "transition-colors duration-150",
        "lg:hidden",
        "cursor-pointer",
        className
      )
    }, props), {
      children: mobileOpen ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-5 w-5" })
    })
  );
});
NavbarMobileToggle.displayName = "NavbarMobileToggle";
var NavbarMobileMenu = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  React__namespace.useEffect(() => {
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
        className: chunkYB3VQRHJ_cjs.cn(
          "lg:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: () => setMobileOpen(false),
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
          "lg:hidden fixed top-0 right-0 z-50 h-full w-[70%] max-w-sm",
          "bg-white",
          "border-l-2 border-dashed border-slate-200",
          "shadow-none",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b-2 border-dashed border-slate-200", children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-slate-400", children: "Menu" }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close menu",
                onClick: () => setMobileOpen(false),
                className: chunkYB3VQRHJ_cjs.cn(
                  "inline-flex items-center justify-center",
                  "h-8 w-8",
                  "border-2 border-dashed border-slate-300 rounded-none",
                  "hover:bg-slate-100 hover:border-slate-500",
                  "transition-colors duration-150",
                  "cursor-pointer"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex flex-col gap-1 px-4 py-4 overflow-y-auto h-[calc(100%-57px)]", children })
        ]
      })
    )
  ] });
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "block px-3 py-2.5",
        "text-sm font-medium",
        "border-2 border-dashed border-transparent",
        "hover:bg-slate-50 hover:border-slate-200",
        "transition-colors duration-150",
        className
      )
    }, props), {
      children
    })
  );
});
NavbarMobileLink.displayName = "NavbarMobileLink";
var SidebarContext = React__namespace.createContext({
  collapsed: false,
  setCollapsed: () => {
  },
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default"
});
var useSidebar = () => React__namespace.useContext(SidebarContext);
var sidebarVariants = classVarianceAuthority.cva(
  [
    "flex flex-col",
    "bg-white text-slate-950",
    "border-r-2 border-dashed border-slate-200",
    "transition-all duration-300 ease-out",
    "h-full"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "w-64",
        collapsible: "",
        // width managed by collapsed state
        floating: "fixed inset-y-0 left-0 z-50 w-72",
        mini: "w-16"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Sidebar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      defaultCollapsed = false,
      children
    } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
      "className",
      "variant",
      "defaultCollapsed",
      "children"
    ]);
    const [collapsed, setCollapsed] = React__namespace.useState(
      variant === "mini" ? true : defaultCollapsed
    );
    const [mobileOpen, setMobileOpen] = React__namespace.useState(false);
    const resolvedVariant = variant != null ? variant : "default";
    const collapsibleWidth = resolvedVariant === "collapsible" ? collapsed ? "w-16" : "w-64" : "";
    if (resolvedVariant === "floating" && !mobileOpen) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        SidebarContext.Provider,
        {
          value: {
            collapsed,
            setCollapsed,
            mobileOpen,
            setMobileOpen,
            variant: resolvedVariant
          },
          children: /* @__PURE__ */ jsxRuntime.jsx("aside", chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: "hidden" }, props), { children }))
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      SidebarContext.Provider,
      {
        value: {
          collapsed,
          setCollapsed,
          mobileOpen,
          setMobileOpen,
          variant: resolvedVariant
        },
        children: [
          resolvedVariant === "floating" && mobileOpen && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "fixed inset-0 z-40 bg-black/40",
              onClick: () => setMobileOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "aside",
            chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
              ref,
              className: chunkYB3VQRHJ_cjs.cn(
                sidebarVariants({ variant: resolvedVariant }),
                collapsibleWidth,
                resolvedVariant === "floating" && "shadow-none",
                className
              )
            }, props), {
              children
            })
          )
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarHeader = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex items-center gap-3 shrink-0",
        "px-4 py-4",
        "border-b-2 border-dashed border-slate-200",
        collapsed && variant !== "default" && "justify-center px-2",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarContent = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
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
var SidebarGroup = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("mb-4", className) }, props), { children }));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed } = useSidebar();
  if (collapsed) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "px-3 mb-2",
        "text-[10px] font-bold uppercase tracking-[0.15em]",
        "text-slate-400",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarMenu = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("ul", chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("flex flex-col gap-0.5", className) }, props), { children }));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, active, icon, badge, href, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "active", "icon", "badge", "href", "children"]);
    const { collapsed } = useSidebar();
    const content = /* @__PURE__ */ jsxRuntime.jsxs(
      "li",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(
          "group relative flex items-center gap-3",
          "px-3 py-2.5",
          "text-sm font-medium",
          "rounded-none transition-colors duration-150",
          "cursor-pointer",
          // Active state
          active ? [
            "bg-red-50 text-red-700 font-semibold",
            "border-l-[3px] border-solid border-red-600",
            "pl-[calc(0.75rem-3px)]"
          ].join(" ") : [
            "text-slate-600",
            "hover:bg-slate-50 hover:text-slate-950",
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
              className: chunkYB3VQRHJ_cjs.cn(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                active ? "text-red-600" : "text-slate-400 group-hover:text-slate-600"
              ),
              children: icon
            }
          ),
          !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 truncate", children }),
          !collapsed && badge && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: chunkYB3VQRHJ_cjs.cn(
                "inline-flex items-center justify-center",
                "min-w-[20px] h-5 px-1.5",
                "text-[10px] font-bold",
                "border-2 border-dashed rounded-none",
                active ? "bg-red-600 text-white border-red-800" : "bg-slate-100 text-slate-600 border-slate-300"
              ),
              children: badge
            }
          ),
          collapsed && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: chunkYB3VQRHJ_cjs.cn(
                "absolute left-full ml-2 z-50",
                "px-2 py-1",
                "text-xs font-medium whitespace-nowrap",
                "bg-slate-900 text-white",
                "border-2 border-dashed border-slate-700",
                "opacity-0 pointer-events-none",
                "group-hover:opacity-100",
                "transition-opacity duration-150"
              ),
              children
            }
          )
        ]
      })
    );
    if (href) {
      return /* @__PURE__ */ jsxRuntime.jsx("a", { href, className: "no-underline", children: content });
    }
    return content;
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
var SidebarSeparator = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "hr",
    chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "border-t-2 border-dashed border-slate-200",
        "my-3 mx-3",
        className
      )
    }, props)
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarFooter = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  const { collapsed } = useSidebar();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "shrink-0",
        "px-4 py-3",
        "border-t-2 border-dashed border-slate-200",
        collapsed && "px-2 flex justify-center",
        className
      )
    }, props), {
      children
    })
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarTrigger = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, action = "collapse" } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "action"]);
    const { collapsed, setCollapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
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
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        type: "button",
        "aria-label": isOpen ? "Collapse sidebar" : "Expand sidebar",
        onClick: handleClick,
        className: chunkYB3VQRHJ_cjs.cn(
          "inline-flex items-center justify-center",
          "h-9 w-9",
          "border-2 border-dashed border-slate-300 rounded-none",
          "hover:bg-slate-100 hover:border-slate-500",
          "transition-colors duration-150",
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
var DEFAULT_CONTAINER2 = "max-w-5xl mx-auto";
var footerVariants = classVarianceAuthority.cva(
  [
    "w-full",
    "bg-white text-slate-950",
    "border-t-2 border-dashed border-slate-200"
  ].join(" "),
  {
    variants: {
      variant: {
        full: "py-12",
        compact: "py-4",
        branded: "py-10"
      }
    },
    defaultVariants: { variant: "full" }
  }
);
var Footer = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "full", containerClassName, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "variant", "containerClassName", "children"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "footer",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        className: chunkYB3VQRHJ_cjs.cn(footerVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: chunkYB3VQRHJ_cjs.cn("px-6", containerClassName != null ? containerClassName : DEFAULT_CONTAINER2), children })
      })
    );
  }
);
Footer.displayName = "Footer";
var FooterGrid = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "grid gap-8",
        "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )
    }, props), {
      children
    })
  );
});
FooterGrid.displayName = "FooterGrid";
var FooterSection = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({ ref, className: chunkYB3VQRHJ_cjs.cn("flex flex-col gap-3", className) }, props), { children }));
});
FooterSection.displayName = "FooterSection";
var FooterHeading = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h4",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-xs font-bold uppercase tracking-[0.15em]",
        "text-slate-900",
        "pb-2",
        "border-b-2 border-dashed border-slate-200",
        className
      )
    }, props), {
      children
    })
  );
});
FooterHeading.displayName = "FooterHeading";
var FooterLink = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "text-sm text-slate-500",
        "hover:text-red-600 hover:underline",
        "transition-colors duration-150",
        className
      )
    }, props), {
      children
    })
  );
});
FooterLink.displayName = "FooterLink";
var FooterBrand = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("flex flex-col items-start gap-3", "max-w-sm", className)
    }, props), {
      children
    })
  );
});
FooterBrand.displayName = "FooterBrand";
var FooterSocials = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("flex items-center gap-2", className)
    }, props), {
      children
    })
  );
});
FooterSocials.displayName = "FooterSocials";
var FooterSocialLink = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "inline-flex items-center justify-center",
        "h-9 w-9",
        "border-2 border-dashed border-slate-300 rounded-none",
        "text-slate-500",
        "hover:bg-red-600 hover:text-white hover:border-red-800",
        "transition-colors duration-150",
        className
      )
    }, props), {
      children
    })
  );
});
FooterSocialLink.displayName = "FooterSocialLink";
var FooterBottom = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn(
        "flex flex-col sm:flex-row items-center justify-between gap-4",
        "pt-6 mt-8",
        "border-t-2 border-dashed border-slate-200",
        "text-xs text-slate-400",
        className
      )
    }, props), {
      children
    })
  );
});
FooterBottom.displayName = "FooterBottom";
var FooterBottomLinks = React__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
      ref,
      className: chunkYB3VQRHJ_cjs.cn("flex items-center gap-4", "text-xs", className)
    }, props), {
      children
    })
  );
});
FooterBottomLinks.displayName = "FooterBottomLinks";
var announcementBarVariants = classVarianceAuthority.cva(
  [
    "relative w-full",
    "text-sm font-medium tracking-wide",
    "border-b-2 border-dashed",
    "transition-all duration-300"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white border-slate-700",
        info: "bg-blue-600 text-white border-blue-800",
        success: "bg-emerald-600 text-white border-emerald-800",
        warning: "bg-amber-500 text-black border-amber-700",
        danger: "bg-red-600 text-white border-red-800",
        branded: "bg-red-600 text-white border-red-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var AnnouncementBar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      dismissible = true,
      onDismiss,
      icon,
      action,
      children
    } = _b, props = chunkYB3VQRHJ_cjs.__objRest(_b, [
      "className",
      "variant",
      "dismissible",
      "onDismiss",
      "icon",
      "action",
      "children"
    ]);
    const [dismissed, setDismissed] = React__namespace.useState(false);
    if (dismissed) return null;
    const handleDismiss = () => {
      setDismissed(true);
      onDismiss == null ? void 0 : onDismiss();
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      chunkYB3VQRHJ_cjs.__spreadProps(chunkYB3VQRHJ_cjs.__spreadValues({
        ref,
        role: "banner",
        className: chunkYB3VQRHJ_cjs.cn(announcementBarVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-2 flex items-center justify-center gap-3", children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-xs sm:text-sm text-center", children }),
          action && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "shrink-0", children: action }),
          dismissible && /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              type: "button",
              onClick: handleDismiss,
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
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
function getCellValue(row, col) {
  if (col.accessorFn) return col.accessorFn(row);
  if (col.accessorKey)
    return row[col.accessorKey];
  return row[col.id];
}
function stringify(val) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return JSON.stringify(val);
}
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
  emptyMessage = "No results found."
}, ref) {
  const [search, setSearch] = React__namespace.useState("");
  const [sortCol, setSortCol] = React__namespace.useState(null);
  const [sortDir, setSortDir] = React__namespace.useState(null);
  const [page, setPage] = React__namespace.useState(0);
  const [selectedIds, setSelectedIds] = React__namespace.useState(/* @__PURE__ */ new Set());
  const [hiddenCols, setHiddenCols] = React__namespace.useState(
    () => new Set(columns.filter((c) => c.hidden).map((c) => c.id))
  );
  const [colToggleOpen, setColToggleOpen] = React__namespace.useState(false);
  const visibleColumns = columns.filter((c) => !hiddenCols.has(c.id));
  const filtered = React__namespace.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (row) => columns.some((col) => {
        const val = getCellValue(row, col);
        return stringify(val).toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);
  const sorted = React__namespace.useMemo(() => {
    if (!sortCol || !sortDir) return filtered;
    const col = columns.find((c) => c.id === sortCol);
    if (!col) return filtered;
    return [...filtered].sort((a, b) => {
      const aVal = getCellValue(a, col);
      const bVal = getCellValue(b, col);
      const aStr = stringify(aVal);
      const bStr = stringify(bVal);
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
  React__namespace.useEffect(() => {
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
  React__namespace.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ref, className: chunkYB3VQRHJ_cjs.cn("w-full space-y-4", className), children: [
    (searchable || columnToggle || selectable && selectedIds.size > 0) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
      searchable && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkOHDZLLEM_cjs.Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: searchPlaceholder,
            className: "pl-9 h-9 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
        selectable && selectedIds.size > 0 && /* @__PURE__ */ jsxRuntime.jsxs(chunkOHDZLLEM_cjs.Badge, { variant: "secondary", className: "text-xs", children: [
          selectedIds.size,
          " selected"
        ] }),
        columnToggle && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            chunkYB3VQRHJ_cjs.Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 gap-1.5",
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
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-0 top-full mt-1 z-50 w-48 bg-white border-2 border-dashed border-slate-200 p-2 space-y-0.5", children: columns.map((col) => /* @__PURE__ */ jsxRuntime.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-slate-50 cursor-pointer transition-colors",
                onClick: () => toggleColumn(col.id),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    "span",
                    {
                      className: chunkYB3VQRHJ_cjs.cn(
                        "h-4 w-4 border-2 border-dashed flex items-center justify-center shrink-0",
                        hiddenCols.has(col.id) ? "border-slate-300" : "border-red-600 bg-red-600 text-white"
                      ),
                      children: !hiddenCols.has(col.id) && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-3 w-3" })
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
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-2 border-dashed border-slate-200 overflow-x-auto", children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ jsxRuntime.jsx("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { className: "border-b-2 border-dashed border-slate-200 bg-slate-50/80", children: [
        selectable && /* @__PURE__ */ jsxRuntime.jsx("th", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsxRuntime.jsx(
          chunkOHDZLLEM_cjs.Checkbox,
          {
            checked: allPageSelected && rows.length > 0,
            onCheckedChange: toggleAll,
            "aria-label": "Select all"
          }
        ) }),
        visibleColumns.map((col) => {
          const isSortable = col.sortable !== false;
          const isActive = sortCol === col.id;
          return /* @__PURE__ */ jsxRuntime.jsx(
            "th",
            {
              className: chunkYB3VQRHJ_cjs.cn(
                "text-left p-3 font-bold uppercase text-[11px] tracking-widest text-slate-500",
                "whitespace-nowrap",
                isSortable && "cursor-pointer select-none hover:text-slate-900 transition-colors",
                col.className
              ),
              onClick: isSortable ? () => handleSort(col.id) : void 0,
              children: /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                col.header,
                isSortable && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-slate-300", children: isActive && sortDir === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "h-3.5 w-3.5 text-red-600" }) : isActive && sortDir === "desc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, { className: "h-3.5 w-3.5 text-red-600" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUpDown, { className: "h-3.5 w-3.5" }) })
              ] })
            },
            col.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: rows.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx("tr", { children: /* @__PURE__ */ jsxRuntime.jsx(
        "td",
        {
          colSpan: visibleColumns.length + (selectable ? 1 : 0),
          className: "p-10 text-center text-sm text-slate-400",
          children: emptyMessage
        }
      ) }) : rows.map((row, i) => {
        const id = rowId(row, page * pageSize + i);
        const isSelected = selectedIds.has(id);
        return /* @__PURE__ */ jsxRuntime.jsxs(
          "tr",
          {
            className: chunkYB3VQRHJ_cjs.cn(
              "border-b border-dashed border-slate-100 transition-colors",
              "hover:bg-slate-50/50",
              isSelected && "bg-red-50/50"
            ),
            children: [
              selectable && /* @__PURE__ */ jsxRuntime.jsx("td", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsxRuntime.jsx(
                chunkOHDZLLEM_cjs.Checkbox,
                {
                  checked: isSelected,
                  onCheckedChange: () => toggleRow(id),
                  "aria-label": `Select row ${i + 1}`
                }
              ) }),
              visibleColumns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
                "td",
                {
                  className: chunkYB3VQRHJ_cjs.cn("p-3 text-slate-700", col.className),
                  children: col.cell ? col.cell(row) : stringify(getCellValue(row, col))
                },
                col.id
              ))
            ]
          },
          id
        );
      }) })
    ] }) }),
    pagination && sorted.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("p", { className: "text-xs text-slate-400", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-slate-600", children: page * pageSize + 1 }),
        "\u2013",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-slate-600", children: Math.min((page + 1) * pageSize, sorted.length) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-semibold text-slate-600", children: sorted.length }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkYB3VQRHJ_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage(0),
            "aria-label": "First page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkYB3VQRHJ_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage((p) => Math.max(0, p - 1)),
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "px-3 text-xs font-semibold text-slate-600", children: [
          page + 1,
          " / ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkYB3VQRHJ_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page >= totalPages - 1,
            onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          chunkYB3VQRHJ_cjs.Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
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
var DataTable = React__namespace.forwardRef(DataTableInner);

exports.AnnouncementBar = AnnouncementBar;
exports.DataTable = DataTable;
exports.Footer = Footer;
exports.FooterBottom = FooterBottom;
exports.FooterBottomLinks = FooterBottomLinks;
exports.FooterBrand = FooterBrand;
exports.FooterGrid = FooterGrid;
exports.FooterHeading = FooterHeading;
exports.FooterLink = FooterLink;
exports.FooterSection = FooterSection;
exports.FooterSocialLink = FooterSocialLink;
exports.FooterSocials = FooterSocials;
exports.Navbar = Navbar;
exports.NavbarActions = NavbarActions;
exports.NavbarBrand = NavbarBrand;
exports.NavbarDropdown = NavbarDropdown;
exports.NavbarDropdownTrigger = NavbarDropdownTrigger;
exports.NavbarLink = NavbarLink;
exports.NavbarLinks = NavbarLinks;
exports.NavbarMain = NavbarMain;
exports.NavbarMegaMenu = NavbarMegaMenu;
exports.NavbarMegaMenuItem = NavbarMegaMenuItem;
exports.NavbarMobileLink = NavbarMobileLink;
exports.NavbarMobileMenu = NavbarMobileMenu;
exports.NavbarMobileToggle = NavbarMobileToggle;
exports.NavbarTopBar = NavbarTopBar;
exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.announcementBarVariants = announcementBarVariants;
exports.footerVariants = footerVariants;
exports.navbarVariants = navbarVariants;
exports.sidebarVariants = sidebarVariants;
exports.useSidebar = useSidebar;
