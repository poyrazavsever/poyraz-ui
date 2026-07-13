"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";
import {
  fieldVariants,
  floatingItemVariants,
  floatingMotion,
  floatingSurfaceVariants,
  type FloatingItemProps,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    variant?: "default" | "soft" | "glass";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    size?: "sm" | "md" | "lg";
  }
>(({ className, children, variant, radius, size = "md", ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      fieldVariants({ variant, radius }),
      "group items-center justify-between gap-2 [&>span]:line-clamp-1",
      size === "sm" && "h-8 px-2.5 py-1 text-xs",
      size === "md" && "h-9 px-3 py-1.5 text-sm",
      size === "lg" && "h-11 px-3.5 py-2 text-sm",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] group-data-[state=open]:rotate-180 group-data-[state=open]:scale-110" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectItemContext = React.createContext<{
  size: NonNullable<FloatingItemProps["size"]>;
  radius: NonNullable<FloatingItemProps["radius"]>;
}>({ size: "md", radius: "md" });

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    FloatingSurfaceProps & {
      itemSize?: NonNullable<FloatingItemProps["size"]>;
      itemRadius?: NonNullable<FloatingItemProps["radius"]>;
    }
>(
  (
    {
      className,
      children,
      position = "popper",
      surface,
      radius,
      itemSize = "md",
      itemRadius = "md",
      collisionPadding = 8,
      style,
      ...props
    },
    ref,
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        collisionPadding={collisionPadding}
        style={
          {
            "--poyraz-floating-transform-origin": "var(--radix-select-content-transform-origin)",
            "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)",
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          floatingSurfaceVariants({ surface, radius }),
          floatingMotion,
          "relative z-50 max-h-96 min-w-40",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectItemContext.Provider value={{ size: itemSize, radius: itemRadius }}>
          <SelectPrimitive.Viewport
            className={cn(
              "p-1",
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
        </SelectItemContext.Provider>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  ),
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
    FloatingItemProps & {
      media?: React.ReactNode;
      description?: React.ReactNode;
      trailing?: React.ReactNode;
    }
>(({ className, children, size, radius, media, description, trailing, ...props }, ref) => {
  const defaults = React.useContext(SelectItemContext);
  return (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        floatingItemVariants({ size: size ?? defaults.size, radius: radius ?? defaults.radius }),
        "cursor-default pl-8",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 animate-poyraz-scale-in" />
        </SelectPrimitive.ItemIndicator>
      </span>

      {media && (
        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover">
          {media}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <SelectPrimitive.ItemText>
          <span className="block truncate font-medium">{children}</span>
        </SelectPrimitive.ItemText>
        {description && (
          <span className="mt-0.5 block line-clamp-2 text-xs text-muted-foreground">
            {description}
          </span>
        )}
      </span>
      {trailing && <span className="ml-auto shrink-0 text-muted-foreground">{trailing}</span>}
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-accent", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
