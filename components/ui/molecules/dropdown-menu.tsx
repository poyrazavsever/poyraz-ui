"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  floatingItemVariants,
  floatingMotion,
  floatingSurfaceVariants,
  type FloatingItemProps,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

type DropdownInteraction = "click" | "hover";

interface DropdownMenuContextValue {
  interaction: DropdownInteraction;
  openFromPointer: (event: React.PointerEvent) => void;
  scheduleClose: (event: React.PointerEvent) => void;
  cancelClose: () => void;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue>({
  interaction: "click",
  openFromPointer: () => {},
  scheduleClose: () => {},
  cancelClose: () => {},
});

export interface DropdownMenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {
  /** `hover` remains click-accessible on touch and keyboard. */
  interaction?: DropdownInteraction;
  /** Grace period while the pointer travels from trigger to content. */
  closeDelay?: number;
}

function DropdownMenu({
  interaction = "click",
  closeDelay = 120,
  open: controlledOpen,
  defaultOpen,
  onOpenChange,
  modal,
  children,
  ...props
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen ?? false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  const cancelClose = React.useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  React.useEffect(() => cancelClose, [cancelClose]);

  const context = React.useMemo<DropdownMenuContextValue>(
    () => ({
      interaction,
      cancelClose,
      openFromPointer: (event) => {
        if (interaction === "hover" && event.pointerType === "mouse") {
          cancelClose();
          setOpen(true);
        }
      },
      scheduleClose: (event) => {
        if (interaction === "hover" && event.pointerType === "mouse") {
          cancelClose();
          timer.current = setTimeout(() => setOpen(false), closeDelay);
        }
      },
    }),
    [cancelClose, closeDelay, interaction, setOpen],
  );

  return (
    <DropdownMenuContext.Provider value={context}>
      <DropdownMenuPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        modal={interaction === "hover" ? false : modal}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownMenuContext.Provider>
  );
}

const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ onPointerDown, onPointerEnter, onPointerLeave, ...props }, ref) => {
  const hover = React.useContext(DropdownMenuContext);
  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      onPointerEnter={(event) => {
        hover.openFromPointer(event);
        onPointerEnter?.(event);
      }}
      onPointerLeave={(event) => {
        hover.scheduleClose(event);
        onPointerLeave?.(event);
      }}
      onPointerDown={(event) => {
        if (hover.interaction === "hover" && event.pointerType === "mouse") {
          event.preventDefault();
        }
        onPointerDown?.(event);
      }}
      {...props}
    />
  );
});
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    FloatingSurfaceProps {
  itemSize?: NonNullable<FloatingItemProps["size"]>;
  itemRadius?: NonNullable<FloatingItemProps["radius"]>;
}

const DropdownItemContext = React.createContext<{
  size: NonNullable<FloatingItemProps["size"]>;
  radius: NonNullable<FloatingItemProps["radius"]>;
}>({ size: "md", radius: "md" });

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(
  (
    {
      className,
      sideOffset = 6,
      collisionPadding = 8,
      surface,
      radius,
      itemSize = "md",
      itemRadius = "md",
      onPointerEnter,
      onPointerLeave,
      ...props
    },
    ref,
  ) => {
    const hover = React.useContext(DropdownMenuContext);
    return (
      <DropdownMenuPortal>
        <DropdownItemContext.Provider value={{ size: itemSize, radius: itemRadius }}>
          <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            collisionPadding={collisionPadding}
            onPointerEnter={(event) => {
              hover.cancelClose();
              onPointerEnter?.(event);
            }}
            onPointerLeave={(event) => {
              hover.scheduleClose(event);
              onPointerLeave?.(event);
            }}
            style={{
              "--poyraz-floating-transform-origin":
                "var(--radix-dropdown-menu-content-transform-origin)",
              "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)",
              ...props.style,
            } as React.CSSProperties}
            className={cn(
              floatingSurfaceVariants({ surface, radius }),
              floatingMotion,
              "z-50 w-max min-w-40 max-w-[var(--radix-dropdown-menu-content-available-width)] p-1.5",
              className,
            )}
            {...props}
          />
        </DropdownItemContext.Provider>
      </DropdownMenuPortal>
    );
  },
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
    FloatingSurfaceProps {}

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ className, surface, radius, sideOffset = 6, collisionPadding = 8, style, ...props }, ref) => (
  <DropdownMenuPortal>
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    sideOffset={sideOffset}
    collisionPadding={collisionPadding}
    style={{
      "--poyraz-floating-transform-origin":
        "var(--radix-dropdown-menu-content-transform-origin)",
      "--poyraz-floating-slide": "var(--poyraz-floating-slide-distance, 0.5rem)",
      ...style,
    } as React.CSSProperties}
    className={cn(
      floatingSurfaceVariants({ surface, radius }),
      floatingMotion,
      "z-[60] w-max min-w-40 max-w-[var(--radix-dropdown-menu-content-available-width)] p-1.5",
      className,
    )}
    {...props}
  />
  </DropdownMenuPortal>
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    FloatingItemProps {
  media?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
}

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, inset, size, radius, media, description, trailing, children, ...props }, ref) => {
  const defaults = React.useContext(DropdownItemContext);
  const rich = media !== undefined || description !== undefined || trailing !== undefined;
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        floatingItemVariants({
          inset,
          size: size ?? defaults.size,
          radius: radius ?? defaults.radius,
        }),
        "cursor-default whitespace-nowrap",
        className,
      )}
      {...props}
    >
      {rich ? <>
      {media && (
        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover">
          {media}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{children}</span>
        {description && (
          <span className="mt-0.5 block line-clamp-2 text-xs leading-snug text-muted-foreground">
            {description}
          </span>
        )}
      </span>
      {trailing && <span className="ml-auto shrink-0 text-muted-foreground">{trailing}</span>}
      </> : children}
    </DropdownMenuPrimitive.Item>
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & FloatingItemProps
>(({ className, inset, size, radius, children, ...props }, ref) => {
  const defaults = React.useContext(DropdownItemContext);
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        floatingItemVariants({ inset, size: size ?? defaults.size, radius: radius ?? defaults.radius }),
        "group cursor-default whitespace-nowrap data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & FloatingItemProps
>(({ className, children, checked, size, radius, ...props }, ref) => {
  const defaults = React.useContext(DropdownItemContext);
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      checked={checked}
      className={cn(
        floatingItemVariants({ size: size ?? defaults.size, radius: radius ?? defaults.radius }),
        "cursor-default pl-8",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator><Check className="size-4 animate-poyraz-scale-in" /></DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & FloatingItemProps
>(({ className, children, size, radius, ...props }, ref) => {
  const defaults = React.useContext(DropdownItemContext);
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        floatingItemVariants({ size: size ?? defaults.size, radius: radius ?? defaults.radius }),
        "cursor-default pl-8",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator><Circle className="size-2 fill-current" /></DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2.5 py-1.5 text-xs font-semibold text-muted-foreground", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto shrink-0 whitespace-nowrap pl-6 text-xs tracking-wider text-muted-foreground", className)} {...props} />
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
