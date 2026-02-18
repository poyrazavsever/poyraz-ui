import { Input, Badge, Checkbox } from './chunk-PUIMEI6W.js';
import { __objRest, __spreadProps, __spreadValues, cn, Button } from './chunk-L36ZMS3N.js';
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown, X, Menu, PanelLeftClose, PanelLeftOpen, Search, SlidersHorizontal, Check, ArrowUp, ArrowDown, ArrowUpDown, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import Link2 from 'next/link';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';

var DEFAULT_CONTAINER = "max-w-5xl mx-auto";
var NavbarContext = React.createContext({
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default",
  containerClassName: DEFAULT_CONTAINER
});
var useNavbar = () => React.useContext(NavbarContext);
var navbarVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-white",
      minimal: "bg-white",
      transparent: "bg-transparent"
    }
  },
  defaultVariants: { variant: "default" }
});
var Navbar = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      sticky = false,
      containerClassName,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "sticky",
      "containerClassName",
      "children"
    ]);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return /* @__PURE__ */ jsx(
      NavbarContext.Provider,
      {
        value: {
          mobileOpen,
          setMobileOpen,
          variant: variant != null ? variant : "default",
          containerClassName: containerClassName != null ? containerClassName : DEFAULT_CONTAINER
        },
        children: /* @__PURE__ */ jsx(
          "nav",
          __spreadProps(__spreadValues({
            ref,
            className: cn(
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
var NavbarTopBar = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { containerClassName } = useNavbar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "w-full bg-red-600 text-white",
        "border-b-2 border-dashed border-red-800",
        "text-xs font-medium tracking-wide",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
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
var NavbarMain = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { variant, containerClassName } = useNavbar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "relative w-full",
        "border-b-2 border-dashed",
        variant === "transparent" ? "border-white/30" : "border-slate-200",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
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
var NavbarBrand = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children, href } = _b, props = __objRest(_b, ["className", "children", "href"]);
    if (href) {
      return /* @__PURE__ */ jsx(
        Link2,
        __spreadProps(__spreadValues({
          href,
          className: cn("flex items-center gap-2", className)
        }, props), {
          children
        })
      );
    }
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn("flex items-center gap-2", className)
      }, props), {
        children
      })
    );
  }
);
NavbarBrand.displayName = "NavbarBrand";
var NavbarLinks = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("static z-10 hidden lg:flex items-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx(NavigationMenuPrimitive.List, { className: "flex items-center gap-1", children }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-full w-full z-50", children: /* @__PURE__ */ jsx(
          NavigationMenuPrimitive.Viewport,
          {
            className: cn(
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
var navLinkStyles = cva(
  [
    "inline-flex items-center gap-1 px-3 py-2",
    "text-sm font-medium tracking-wide",
    "rounded-none transition-colors duration-150",
    "hover:bg-slate-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
    "data-[active]:border-b-2 data-[active]:border-dashed data-[active]:border-red-600"
  ].join(" ")
);
var NavbarLink = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(NavigationMenuPrimitive.Item, { children: /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Link,
    __spreadProps(__spreadValues({
      ref,
      className: cn(navLinkStyles(), className)
    }, props), {
      children
    })
  ) });
});
NavbarLink.displayName = "NavbarLink";
var NavbarDropdownTrigger = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    __spreadProps(__spreadValues({
      ref,
      className: cn(navLinkStyles(), "group cursor-pointer", className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsx(
          ChevronDown,
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
var NavbarDropdown = React.forwardRef((_a, ref) => {
  var _b = _a, { className, label, children } = _b, props = __objRest(_b, ["className", "label", "children"]);
  return /* @__PURE__ */ jsxs(NavigationMenuPrimitive.Item, __spreadProps(__spreadValues({ ref, className: cn(className) }, props), { children: [
    /* @__PURE__ */ jsx(NavbarDropdownTrigger, { children: label }),
    /* @__PURE__ */ jsx(
      NavigationMenuPrimitive.Content,
      {
        className: cn(
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
var NavbarMegaMenu = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("grid gap-4 p-6", "md:w-[500px] lg:w-[700px]", className)
    }, props), {
      children
    })
  );
});
NavbarMegaMenu.displayName = "NavbarMegaMenu";
var NavbarMegaMenuItem = React.forwardRef((_a, ref) => {
  var _b = _a, { className, title, description, children } = _b, props = __objRest(_b, ["className", "title", "description", "children"]);
  return /* @__PURE__ */ jsx(NavigationMenuPrimitive.Link, { asChild: true, children: /* @__PURE__ */ jsxs(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        "block select-none p-3",
        "border-2 border-dashed border-transparent",
        "rounded-none transition-colors",
        "hover:bg-slate-50 hover:border-slate-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold leading-none", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-500 leading-snug", children: description }),
        children
      ]
    })
  ) });
});
NavbarMegaMenuItem.displayName = "NavbarMegaMenuItem";
var NavbarActions = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("hidden lg:flex items-center gap-2 shrink-0", className)
    }, props), {
      children
    })
  );
});
NavbarActions.displayName = "NavbarActions";
var NavbarMobileToggle = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({
      ref,
      type: "button",
      "aria-label": mobileOpen ? "Close menu" : "Open menu",
      onClick: () => setMobileOpen((prev) => !prev),
      className: cn(
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
      children: mobileOpen ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
    })
  );
});
NavbarMobileToggle.displayName = "NavbarMobileToggle";
var NavbarMobileMenu = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { mobileOpen, setMobileOpen } = useNavbar();
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "lg:hidden fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ),
        onClick: () => setMobileOpen(false),
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
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
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b-2 border-dashed border-slate-200", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-slate-400", children: "Menu" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Close menu",
                onClick: () => setMobileOpen(false),
                className: cn(
                  "inline-flex items-center justify-center",
                  "h-8 w-8",
                  "border-2 border-dashed border-slate-300 rounded-none",
                  "hover:bg-slate-100 hover:border-slate-500",
                  "transition-colors duration-150",
                  "cursor-pointer"
                ),
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-1 px-4 py-4 overflow-y-auto h-[calc(100%-57px)]", children })
        ]
      })
    )
  ] });
});
NavbarMobileMenu.displayName = "NavbarMobileMenu";
var NavbarMobileLink = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var SidebarContext = React.createContext({
  collapsed: false,
  setCollapsed: () => {
  },
  mobileOpen: false,
  setMobileOpen: () => {
  },
  variant: "default"
});
var useSidebar = () => React.useContext(SidebarContext);
var sidebarVariants = cva(
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
var Sidebar = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant = "default",
      defaultCollapsed = false,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "defaultCollapsed",
      "children"
    ]);
    const [collapsed, setCollapsed] = React.useState(
      variant === "mini" ? true : defaultCollapsed
    );
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const resolvedVariant = variant != null ? variant : "default";
    const collapsibleWidth = resolvedVariant === "collapsible" ? collapsed ? "w-16" : "w-64" : "";
    if (resolvedVariant === "floating" && !mobileOpen) {
      return /* @__PURE__ */ jsx(
        SidebarContext.Provider,
        {
          value: {
            collapsed,
            setCollapsed,
            mobileOpen,
            setMobileOpen,
            variant: resolvedVariant
          },
          children: /* @__PURE__ */ jsx("aside", __spreadProps(__spreadValues({ ref, className: "hidden" }, props), { children }))
        }
      );
    }
    return /* @__PURE__ */ jsxs(
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
          resolvedVariant === "floating" && mobileOpen && /* @__PURE__ */ jsx(
            "div",
            {
              className: "fixed inset-0 z-40 bg-black/40",
              onClick: () => setMobileOpen(false)
            }
          ),
          /* @__PURE__ */ jsx(
            "aside",
            __spreadProps(__spreadValues({
              ref,
              className: cn(
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
var SidebarHeader = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed, variant } = useSidebar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var SidebarContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var SidebarGroup = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ ref, className: cn("mb-4", className) }, props), { children }));
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed } = useSidebar();
  if (collapsed) return null;
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var SidebarMenu = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("ul", __spreadProps(__spreadValues({ ref, className: cn("flex flex-col gap-0.5", className) }, props), { children }));
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, active, icon, badge, href, children } = _b, props = __objRest(_b, ["className", "active", "icon", "badge", "href", "children"]);
    const { collapsed } = useSidebar();
    const content = /* @__PURE__ */ jsxs(
      "li",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
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
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "shrink-0 w-5 h-5 flex items-center justify-center",
                active ? "text-red-600" : "text-slate-400 group-hover:text-slate-600"
              ),
              children: icon
            }
          ),
          !collapsed && /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children }),
          !collapsed && badge && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "inline-flex items-center justify-center",
                "min-w-[20px] h-5 px-1.5",
                "text-[10px] font-bold",
                "border-2 border-dashed rounded-none",
                active ? "bg-red-600 text-white border-red-800" : "bg-slate-100 text-slate-600 border-slate-300"
              ),
              children: badge
            }
          ),
          collapsed && /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
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
      return /* @__PURE__ */ jsx("a", { href, className: "no-underline", children: content });
    }
    return content;
  }
);
SidebarMenuItem.displayName = "SidebarMenuItem";
var SidebarSeparator = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "hr",
    __spreadValues({
      ref,
      className: cn(
        "border-t-2 border-dashed border-slate-200",
        "my-3 mx-3",
        className
      )
    }, props)
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarFooter = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { collapsed } = useSidebar();
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var SidebarTrigger = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, action = "collapse" } = _b, props = __objRest(_b, ["className", "action"]);
    const { collapsed, setCollapsed, mobileOpen, setMobileOpen, variant } = useSidebar();
    const handleClick = () => {
      if (action === "mobile" || variant === "floating") {
        setMobileOpen((prev) => !prev);
      } else {
        setCollapsed((prev) => !prev);
      }
    };
    const isOpen = action === "mobile" ? mobileOpen : !collapsed;
    return /* @__PURE__ */ jsx(
      "button",
      __spreadProps(__spreadValues({
        ref,
        type: "button",
        "aria-label": isOpen ? "Collapse sidebar" : "Expand sidebar",
        onClick: handleClick,
        className: cn(
          "inline-flex items-center justify-center",
          "h-9 w-9",
          "border-2 border-dashed border-slate-300 rounded-none",
          "hover:bg-slate-100 hover:border-slate-500",
          "transition-colors duration-150",
          "cursor-pointer",
          className
        )
      }, props), {
        children: isOpen ? variant === "floating" || action === "mobile" ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PanelLeftClose, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(PanelLeftOpen, { className: "h-4 w-4" })
      })
    );
  }
);
SidebarTrigger.displayName = "SidebarTrigger";
var DEFAULT_CONTAINER2 = "max-w-5xl mx-auto";
var footerVariants = cva(
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
var Footer = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant = "full", containerClassName, children } = _b, props = __objRest(_b, ["className", "variant", "containerClassName", "children"]);
    return /* @__PURE__ */ jsx(
      "footer",
      __spreadProps(__spreadValues({
        ref,
        className: cn(footerVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsx("div", { className: cn("px-6", containerClassName != null ? containerClassName : DEFAULT_CONTAINER2), children })
      })
    );
  }
);
Footer.displayName = "Footer";
var FooterGrid = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var FooterSection = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx("div", __spreadProps(__spreadValues({ ref, className: cn("flex flex-col gap-3", className) }, props), { children }));
});
FooterSection.displayName = "FooterSection";
var FooterHeading = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "h4",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var FooterLink = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var FooterBrand = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex flex-col items-start gap-3", "max-w-sm", className)
    }, props), {
      children
    })
  );
});
FooterBrand.displayName = "FooterBrand";
var FooterSocials = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center gap-2", className)
    }, props), {
      children
    })
  );
});
FooterSocials.displayName = "FooterSocials";
var FooterSocialLink = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "a",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var FooterBottom = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn(
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
var FooterBottomLinks = React.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsx(
    "div",
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center gap-4", "text-xs", className)
    }, props), {
      children
    })
  );
});
FooterBottomLinks.displayName = "FooterBottomLinks";
var announcementBarVariants = cva(
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
var AnnouncementBar = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      dismissible = true,
      onDismiss,
      icon,
      action,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "dismissible",
      "onDismiss",
      "icon",
      "action",
      "children"
    ]);
    const [dismissed, setDismissed] = React.useState(false);
    if (dismissed) return null;
    const handleDismiss = () => {
      setDismissed(true);
      onDismiss == null ? void 0 : onDismiss();
    };
    return /* @__PURE__ */ jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        role: "banner",
        className: cn(announcementBarVariants({ variant }), className)
      }, props), {
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 py-2 flex items-center justify-center gap-3", children: [
          icon && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-center", children }),
          action && /* @__PURE__ */ jsx("span", { className: "shrink-0", children: action }),
          dismissible && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: handleDismiss,
              className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
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
  const [search, setSearch] = React.useState("");
  const [sortCol, setSortCol] = React.useState(null);
  const [sortDir, setSortDir] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [selectedIds, setSelectedIds] = React.useState(/* @__PURE__ */ new Set());
  const [hiddenCols, setHiddenCols] = React.useState(
    () => new Set(columns.filter((c) => c.hidden).map((c) => c.id))
  );
  const [colToggleOpen, setColToggleOpen] = React.useState(false);
  const visibleColumns = columns.filter((c) => !hiddenCols.has(c.id));
  const filtered = React.useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter(
      (row) => columns.some((col) => {
        const val = getCellValue(row, col);
        return stringify(val).toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);
  const sorted = React.useMemo(() => {
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
  React.useEffect(() => {
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
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { ref, className: cn("w-full space-y-4", className), children: [
    (searchable || columnToggle || selectable && selectedIds.size > 0) && /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
      searchable && /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:max-w-xs", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: searchPlaceholder,
            className: "pl-9 h-9 text-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
        selectable && selectedIds.size > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
          selectedIds.size,
          " selected"
        ] }),
        columnToggle && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "h-9 gap-1.5",
              onClick: () => setColToggleOpen((v) => !v),
              children: [
                /* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-3.5 w-3.5" }),
                "Columns"
              ]
            }
          ),
          colToggleOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "fixed inset-0 z-40",
                onClick: () => setColToggleOpen(false)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full mt-1 z-50 w-48 bg-white border-2 border-dashed border-slate-200 p-2 space-y-0.5", children: columns.map((col) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-slate-50 cursor-pointer transition-colors",
                onClick: () => toggleColumn(col.id),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "h-4 w-4 border-2 border-dashed flex items-center justify-center shrink-0",
                        hiddenCols.has(col.id) ? "border-slate-300" : "border-red-600 bg-red-600 text-white"
                      ),
                      children: !hiddenCols.has(col.id) && /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
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
    /* @__PURE__ */ jsx("div", { className: "border-2 border-dashed border-slate-200 overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
      caption && /* @__PURE__ */ jsx("caption", { className: "sr-only", children: caption }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b-2 border-dashed border-slate-200 bg-slate-50/80", children: [
        selectable && /* @__PURE__ */ jsx("th", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsx(
          Checkbox,
          {
            checked: allPageSelected && rows.length > 0,
            onCheckedChange: toggleAll,
            "aria-label": "Select all"
          }
        ) }),
        visibleColumns.map((col) => {
          const isSortable = col.sortable !== false;
          const isActive = sortCol === col.id;
          return /* @__PURE__ */ jsx(
            "th",
            {
              className: cn(
                "text-left p-3 font-bold uppercase text-[11px] tracking-widest text-slate-500",
                "whitespace-nowrap",
                isSortable && "cursor-pointer select-none hover:text-slate-900 transition-colors",
                col.className
              ),
              onClick: isSortable ? () => handleSort(col.id) : void 0,
              children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                col.header,
                isSortable && /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: isActive && sortDir === "asc" ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-3.5 w-3.5 text-red-600" }) : isActive && sortDir === "desc" ? /* @__PURE__ */ jsx(ArrowDown, { className: "h-3.5 w-3.5 text-red-600" }) : /* @__PURE__ */ jsx(ArrowUpDown, { className: "h-3.5 w-3.5" }) })
              ] })
            },
            col.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
        "td",
        {
          colSpan: visibleColumns.length + (selectable ? 1 : 0),
          className: "p-10 text-center text-sm text-slate-400",
          children: emptyMessage
        }
      ) }) : rows.map((row, i) => {
        const id = rowId(row, page * pageSize + i);
        const isSelected = selectedIds.has(id);
        return /* @__PURE__ */ jsxs(
          "tr",
          {
            className: cn(
              "border-b border-dashed border-slate-100 transition-colors",
              "hover:bg-slate-50/50",
              isSelected && "bg-red-50/50"
            ),
            children: [
              selectable && /* @__PURE__ */ jsx("td", { className: "w-12 p-3 text-center", children: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  checked: isSelected,
                  onCheckedChange: () => toggleRow(id),
                  "aria-label": `Select row ${i + 1}`
                }
              ) }),
              visibleColumns.map((col) => /* @__PURE__ */ jsx(
                "td",
                {
                  className: cn("p-3 text-slate-700", col.className),
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
    pagination && sorted.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: page * pageSize + 1 }),
        "\u2013",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: Math.min((page + 1) * pageSize, sorted.length) }),
        " ",
        "of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-600", children: sorted.length }),
        " ",
        "results"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage(0),
            "aria-label": "First page",
            children: /* @__PURE__ */ jsx(ChevronsLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page === 0,
            onClick: () => setPage((p) => Math.max(0, p - 1)),
            "aria-label": "Previous page",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "px-3 text-xs font-semibold text-slate-600", children: [
          page + 1,
          " / ",
          totalPages
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page >= totalPages - 1,
            onClick: () => setPage((p) => Math.min(totalPages - 1, p + 1)),
            "aria-label": "Next page",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" })
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "h-8 w-8",
            disabled: page >= totalPages - 1,
            onClick: () => setPage(totalPages - 1),
            "aria-label": "Last page",
            children: /* @__PURE__ */ jsx(ChevronsRight, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] })
  ] });
}
var DataTable = React.forwardRef(DataTableInner);

export { AnnouncementBar, DataTable, Footer, FooterBottom, FooterBottomLinks, FooterBrand, FooterGrid, FooterHeading, FooterLink, FooterSection, FooterSocialLink, FooterSocials, Navbar, NavbarActions, NavbarBrand, NavbarDropdown, NavbarDropdownTrigger, NavbarLink, NavbarLinks, NavbarMain, NavbarMegaMenu, NavbarMegaMenuItem, NavbarMobileLink, NavbarMobileMenu, NavbarMobileToggle, NavbarTopBar, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSeparator, SidebarTrigger, announcementBarVariants, footerVariants, navbarVariants, sidebarVariants, useSidebar };
