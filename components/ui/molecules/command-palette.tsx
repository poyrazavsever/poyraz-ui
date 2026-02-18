"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Search, X } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

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

interface CommandPaletteProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
> {
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
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      )}
    />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%]",
        "bg-white",
        "border-2 border-dashed border-slate-200",
        "rounded-none shadow-none",
        "overflow-hidden",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[2%]",
        "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[2%]",
        "duration-200",
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
));
CommandPaletteContent.displayName = "CommandPaletteContent";

/* ── Input ────────────────────────────────────────────────────────── */

interface CommandPaletteInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  onValueChange?: (value: string) => void;
}

const CommandPaletteInput = React.forwardRef<
  HTMLInputElement,
  CommandPaletteInputProps
>(({ className, onValueChange, ...props }, ref) => {
  const { search, setSearch } = React.useContext(CommandPaletteCtx);

  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4",
        "border-b-2 border-dashed border-slate-200",
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-slate-400" />
      <input
        ref={ref}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onValueChange?.(e.target.value);
        }}
        className={cn(
          "flex h-12 w-full bg-transparent py-3",
          "text-sm text-slate-900 placeholder:text-slate-400",
          "outline-none",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
      <DialogPrimitive.Close className="rounded-none p-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </div>
  );
});
CommandPaletteInput.displayName = "CommandPaletteInput";

/* ── List ─────────────────────────────────────────────────────────── */

const CommandPaletteList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto p-2", className)}
    role="listbox"
    {...props}
  />
));
CommandPaletteList.displayName = "CommandPaletteList";

/* ── Group ────────────────────────────────────────────────────────── */

interface CommandPaletteGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
}

const CommandPaletteGroup = React.forwardRef<
  HTMLDivElement,
  CommandPaletteGroupProps
>(({ className, heading, children, ...props }, ref) => (
  <div ref={ref} className={cn("py-1", className)} role="group" {...props}>
    {heading && (
      <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
        {heading}
      </div>
    )}
    {children}
  </div>
));
CommandPaletteGroup.displayName = "CommandPaletteGroup";

/* ── Item ─────────────────────────────────────────────────────────── */

interface CommandPaletteItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Keyboard shortcut hint (e.g. "⌘K") */
  shortcut?: string;
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
}

const CommandPaletteItem = React.forwardRef<
  HTMLDivElement,
  CommandPaletteItemProps
>(({ className, children, shortcut, disabled, icon, ...props }, ref) => (
  <div
    ref={ref}
    role="option"
    aria-disabled={disabled}
    className={cn(
      "flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer select-none",
      "border-2 border-dashed border-transparent",
      "transition-colors duration-100",
      "hover:bg-slate-50 hover:border-slate-200",
      "focus:bg-slate-50 focus:border-slate-200 focus:outline-none",
      disabled && "pointer-events-none opacity-40",
      className,
    )}
    tabIndex={disabled ? -1 : 0}
    {...props}
  >
    {icon && <span className="text-slate-400 shrink-0">{icon}</span>}
    <span className="flex-1 truncate">{children}</span>
    {shortcut && (
      <kbd className="ml-auto text-[11px] font-mono tracking-wider text-slate-400 border border-dashed border-slate-200 px-1.5 py-0.5">
        {shortcut}
      </kbd>
    )}
  </div>
));
CommandPaletteItem.displayName = "CommandPaletteItem";

/* ── Empty ────────────────────────────────────────────────────────── */

const CommandPaletteEmpty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-8 text-center text-sm text-slate-400", className)}
    {...props}
  />
));
CommandPaletteEmpty.displayName = "CommandPaletteEmpty";

/* ── Separator ────────────────────────────────────────────────────── */

const CommandPaletteSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-px bg-slate-100 my-1 -mx-2", className)}
    {...props}
  />
));
CommandPaletteSeparator.displayName = "CommandPaletteSeparator";

/* ── Footer ───────────────────────────────────────────────────────── */

const CommandPaletteFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-4 px-4 py-2",
      "border-t-2 border-dashed border-slate-200",
      "text-[11px] text-slate-400",
      className,
    )}
    {...props}
  />
));
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
