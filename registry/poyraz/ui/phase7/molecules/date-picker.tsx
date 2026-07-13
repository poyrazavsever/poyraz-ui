"use client";

import * as React from "react";
import { CalendarIcon, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/atoms/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/molecules/popover";
import { Calendar, type CalendarSingleProps } from "@/components/ui/molecules/calendar";
import type { FloatingSurfaceProps } from "@/components/ui/recipes";

export interface DatePickerProps {
  /** Controlled selection. Passing the prop makes selection controlled, including `undefined`. */
  selected?: Date;
  /** Initial value for uncontrolled usage. */
  defaultSelected?: Date;
  onSelect?: (date: Date | undefined) => void;
  /** Controlled popover state. */
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  formatDate?: (date: Date) => string;
  className?: string;
  disabled?: boolean;
  clearable?: boolean;
  closeOnSelect?: boolean;
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
  triggerRadius?: ButtonProps["radius"];
  popoverSurface?: NonNullable<FloatingSurfaceProps["surface"]>;
  popoverRadius?: NonNullable<FloatingSurfaceProps["radius"]>;
  calendarProps?: Omit<CalendarSingleProps, "mode" | "selected" | "defaultSelected" | "onSelect">;
}

function defaultFormat(date: Date): string {
  return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function DatePicker(props: DatePickerProps) {
  const {
    calendarProps,
    className,
    clearable = false,
    closeOnSelect = true,
    defaultOpen = false,
    defaultSelected,
    disabled = false,
    formatDate = defaultFormat,
    onOpenChange,
    onSelect,
    placeholder = "Pick a date",
    popoverRadius = "xl",
    popoverSurface = "glass",
    triggerRadius = "md",
    triggerSize = "default",
    triggerVariant = "outline",
  } = props;
  const selectionControlled = Object.prototype.hasOwnProperty.call(props, "selected");
  const openControlled = Object.prototype.hasOwnProperty.call(props, "open");
  const [internalSelected, setInternalSelected] = React.useState(defaultSelected);
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const selected = selectionControlled ? props.selected : internalSelected;
  const open = openControlled ? (props.open ?? false) : internalOpen;

  const setOpen = (next: boolean) => {
    if (!openControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const setSelected = (next: Date | undefined) => {
    if (!selectionControlled) setInternalSelected(next);
    onSelect?.(next);
  };

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    if (date && closeOnSelect) setOpen(false);
  };

  return (
    <div
      data-slot="date-picker"
      data-state={open ? "open" : "closed"}
      className={cn("flex w-full items-center gap-2", className)}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={triggerVariant}
            size={triggerSize}
            radius={triggerRadius}
            disabled={disabled}
            className={cn(
              "group flex-1 justify-start text-left font-normal",
              "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
              !selected && "text-placeholder",
              open && "border-primary ring-2 ring-ring/25",
            )}
          >
            <CalendarIcon className="mr-1 size-4 shrink-0 transition-transform duration-[var(--poyraz-motion-duration-base)] group-data-[state=open]:rotate-6 group-data-[state=open]:scale-110" />
            <span className="truncate">{selected ? formatDate(selected) : placeholder}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          surface={popoverSurface}
          radius={popoverRadius}
          padding="none"
          className="w-auto"
          align="start"
        >
          <Calendar
            {...calendarProps}
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            surface="plain"
          />
        </PopoverContent>
      </Popover>
      {clearable && selected && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          radius={triggerRadius}
          aria-label="Clear date"
          onClick={() => setSelected(undefined)}
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
}
DatePicker.displayName = "DatePicker";

export { DatePicker };
