"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  floatingItemVariants,
  overlaySurfaceVariants,
  overlayVariants,
  type FloatingItemProps,
  type OverlayProps,
  type OverlaySurfaceProps,
} from "@/components/ui/recipes";

/* ================================================================== */
/*  COMMAND PALETTE — Cmd+K global search / command overlay            */
/* ================================================================== */

/* ── Context ──────────────────────────────────────────────────────── */

interface CommandPaletteContextValue {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const CommandPaletteCtx = React.createContext<CommandPaletteContextValue>({
  search: "",
  setSearch: () => {},
});

/* ── Root ─────────────────────────────────────────────────────────── */

interface CommandPaletteProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  children: React.ReactNode;
}

function CommandPalette({ children, ...props }: CommandPaletteProps) {
  const [search, setSearch] = React.useState("");

  // Reset search when closed
  const handleOpenChange = (open: boolean) => {
    if (!open) setSearch("");
    props.onOpenChange?.(open);
  };

  return (
    <CommandPaletteCtx.Provider value={{ search, setSearch }}>
      <DialogPrimitive.Root {...props} onOpenChange={handleOpenChange}>
        {children}
      </DialogPrimitive.Root>
    </CommandPaletteCtx.Provider>
  );
}
CommandPalette.displayName = "CommandPalette";

/* ── Trigger ──────────────────────────────────────────────────────── */

const CommandPaletteTrigger = DialogPrimitive.Trigger;

/* ── Content ──────────────────────────────────────────────────────── */

const CommandPaletteContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    OverlaySurfaceProps & {
      overlayTone?: NonNullable<OverlayProps["tone"]>;
      overlayClassName?: string;
      mobile?: "floating" | "fullscreen";
    }
>(
  (
    {
      className,
      children,
      surface,
      radius,
      overlayTone,
      overlayClassName,
      mobile = "floating",
      ...props
    },
    ref,
  ) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className={cn(overlayVariants({ tone: overlayTone }), overlayClassName)}
      />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          overlaySurfaceVariants({ surface, radius }),
          "fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]",
          "overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:[--poyraz-enter-scale:0.98] data-[state=closed]:[--poyraz-exit-scale:0.98]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[2%]",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[2%]",
          "motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-exit-scale:1] motion-reduce:[--poyraz-enter-translate-x:0] motion-reduce:[--poyraz-enter-translate-y:0] motion-reduce:duration-100",
          mobile === "fullscreen" &&
            "max-sm:inset-0 max-sm:h-dvh max-sm:w-full max-sm:max-w-none max-sm:translate-x-0 max-sm:rounded-none",
          className,
        )}
        {...props}
      >
        <VisuallyHidden>
          <DialogPrimitive.Title>Command Palette</DialogPrimitive.Title>
        </VisuallyHidden>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);
CommandPaletteContent.displayName = "CommandPaletteContent";

/* ── Input ────────────────────────────────────────────────────────── */

interface CommandPaletteInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  onValueChange?: (value: string) => void;
}

const CommandPaletteInput = React.forwardRef<HTMLInputElement, CommandPaletteInputProps>(
  ({ className, onValueChange, ...props }, ref) => {
    const { search, setSearch } = React.useContext(CommandPaletteCtx);

    return (
      <div
        className={cn(
          "flex items-center gap-2 px-4",
          "border-b border-border transition-colors duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
        )}
      >
        <Search className="h-4 w-4 shrink-0 text-placeholder transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]" />
        <input
          ref={ref}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onValueChange?.(e.target.value);
          }}
          className={cn(
            "flex h-10 w-full bg-transparent py-2",
            "text-sm text-foreground placeholder:text-placeholder",
            "outline-none",
            "disabled:opacity-40 disabled:cursor-not-allowed",
            className,
          )}
          {...props}
        />
        <DialogPrimitive.Close className="rounded-sm p-1 opacity-50 transition-[opacity,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:opacity-100 hover:bg-accent hover:scale-105 active:scale-95 cursor-pointer">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </div>
    );
  },
);
CommandPaletteInput.displayName = "CommandPaletteInput";

/* ── List ─────────────────────────────────────────────────────────── */

const CommandPaletteList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("max-h-[300px] overflow-y-auto p-2 animate-poyraz-fade-in", className)}
      role="listbox"
      {...props}
    />
  ),
);
CommandPaletteList.displayName = "CommandPaletteList";

/* ── Group ────────────────────────────────────────────────────────── */

interface CommandPaletteGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const CommandPaletteGroup = React.forwardRef<HTMLDivElement, CommandPaletteGroupProps>(
  ({ className, heading, children, ...props }, ref) => (
    <div ref={ref} className={cn("py-1 animate-poyraz-fade-in", className)} role="group" {...props}>
      {heading && (
        <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-placeholder">
          {heading}
        </div>
      )}
      {children}
    </div>
  ),
);
CommandPaletteGroup.displayName = "CommandPaletteGroup";

/* ── Item ─────────────────────────────────────────────────────────── */

interface CommandPaletteItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Keyboard shortcut hint (e.g. "⌘K") */
  shortcut?: string;
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  description?: React.ReactNode;
  media?: React.ReactNode;
  size?: NonNullable<FloatingItemProps["size"]>;
  radius?: NonNullable<FloatingItemProps["radius"]>;
}

const CommandPaletteItem = React.forwardRef<HTMLDivElement, CommandPaletteItemProps>(
  (
    { className, children, shortcut, disabled, icon, description, media, size, radius, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      role="option"
      aria-disabled={disabled}
      className={cn(
        floatingItemVariants({ size, radius }),
        "cursor-pointer border border-transparent hover:border-border hover:bg-accent",
        disabled && "pointer-events-none opacity-40",
        className,
      )}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {media && (
        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover">
          {media}
        </span>
      )}
      {icon && (
        <span className="text-placeholder shrink-0 transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]">
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{children}</span>
        {description && (
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">{description}</span>
        )}
      </span>
      {shortcut && (
        <kbd className="ml-auto text-[11px] font-mono tracking-wider text-placeholder border border-border px-1.5 py-0.5 transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]">
          {shortcut}
        </kbd>
      )}
    </div>
  ),
);
CommandPaletteItem.displayName = "CommandPaletteItem";

/* ── Empty ────────────────────────────────────────────────────────── */

const CommandPaletteEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("py-8 text-center text-sm text-placeholder animate-poyraz-fade-in", className)}
      {...props}
    />
  ),
);
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";

/* ── Separator ────────────────────────────────────────────────────── */

const CommandPaletteSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-px bg-accent my-1 -mx-2", className)} {...props} />
));
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";

/* ── Footer ───────────────────────────────────────────────────────── */

const CommandPaletteFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-4 px-4 py-2",
        "border-t border-border",
        "text-[11px] text-placeholder",
        className,
      )}
      {...props}
    />
  ),
);
CommandPaletteFooter.displayName = "CommandPaletteFooter";

/* ── Hook: useCommandPalette ──────────────────────────────────────── */

function useCommandPalette() {
  return React.useContext(CommandPaletteCtx);
}

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteSeparator,
  CommandPaletteFooter,
  useCommandPalette,
};
