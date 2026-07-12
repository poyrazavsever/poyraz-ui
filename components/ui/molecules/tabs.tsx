"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { floatingSurfaceVariants, type FloatingSurfaceProps } from "@/components/ui/recipes";

type TabsVariant = "line" | "soft" | "glass";
const TabsStyleContext = React.createContext<{ variant: TabsVariant }>({ variant: "line" });

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: TabsVariant;
    radius?: "none" | "sm" | "md" | "lg" | "full";
  }
>(({ className, variant = "line", radius = "lg", children, ...props }, forwardedRef) => {
  const listRef = React.useRef<React.ElementRef<typeof TabsPrimitive.List>>(null);
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0, visible: false });

  React.useImperativeHandle(
    forwardedRef,
    () => listRef.current as React.ElementRef<typeof TabsPrimitive.List>,
  );

  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || variant !== "line") return;

    const update = () => {
      const active = list.querySelector<HTMLElement>('[role="tab"][data-state="active"]');
      if (!active) {
        setIndicator((current) => ({ ...current, visible: false }));
        return;
      }
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth, visible: true });
    };

    update();
    const mutationObserver = new MutationObserver(update);
    mutationObserver.observe(list, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-state"],
    });
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(list);
    list
      .querySelectorAll<HTMLElement>('[role="tab"]')
      .forEach((tab) => resizeObserver.observe(tab));

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [variant, children]);

  return (
    <TabsStyleContext.Provider value={{ variant }}>
      <TabsPrimitive.List
        ref={listRef}
        className={cn(
          "relative inline-flex min-h-10 max-w-full items-center overflow-x-auto overflow-y-clip p-1 text-muted-foreground [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)]",
          variant === "line" && "gap-1 border-b border-border bg-transparent px-0 pb-0",
          variant === "soft" && "gap-1 bg-surface-subtle",
          variant === "glass" &&
            "gap-1 border border-glass-border-outer bg-glass shadow-sm backdrop-blur-glass",
          radius === "none" && "rounded-none",
          radius === "sm" && "rounded-sm",
          radius === "md" && "rounded-md",
          radius === "lg" && "rounded-lg",
          radius === "full" && "rounded-full",
          className,
        )}
        {...props}
      >
        {children}
        {variant === "line" && (
          <span
            aria-hidden="true"
            data-slot="tabs-indicator"
            className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-[transform,width,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)] will-change-transform motion-reduce:duration-[1ms]"
            style={{
              width: indicator.width,
              opacity: indicator.visible ? 1 : 0,
              transform: `translate3d(${indicator.left}px, 0, 0)`,
            }}
          />
        )}
      </TabsPrimitive.List>
    </TabsStyleContext.Provider>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
  }
>(({ className, size = "md", radius = "md", ...props }, ref) => {
  const { variant } = React.useContext(TabsStyleContext);
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium outline-none",
        "transition-[color,background-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "h-7 px-2.5 text-xs",
        size === "md" && "h-8 px-3 text-sm",
        size === "lg" && "h-10 px-4 text-sm",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "full" && "rounded-full",
        variant === "line" && "data-[state=active]:text-foreground",
        variant !== "line" &&
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        variant === "glass" && "data-[state=active]:bg-background/80",
        className,
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    FloatingSurfaceProps & { contained?: boolean }
>(({ className, surface, radius, contained = false, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-3 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:animate-poyraz-fade-in motion-reduce:animate-none",
      contained && floatingSurfaceVariants({ surface, radius }),
      contained && "p-4",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
