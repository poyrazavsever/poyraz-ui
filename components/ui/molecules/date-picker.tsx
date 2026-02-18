"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";
import { Button } from "@/components/ui/atoms/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/molecules/popover";
import {
  Calendar,
  type CalendarProps,
} from "@/components/ui/molecules/calendar";

/* ================================================================== */
/*  DATE PICKER                                                        */
/* ================================================================== */

export interface DatePickerProps extends Omit<CalendarProps, "className"> {
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Date display format function */
  formatDate?: (date: Date) => string;
  /** Additional class for the trigger button */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

function defaultFormat(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function DatePicker({
  selected,
  onSelect,
  minDate,
  maxDate,
  placeholder = "Pick a date",
  formatDate = defaultFormat,
  className,
  disabled = false,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (date: Date) => {
    onSelect?.(date);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-slate-400",
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
          {selected ? formatDate(selected) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          selected={selected}
          onSelect={handleSelect}
          minDate={minDate}
          maxDate={maxDate}
        />
      </PopoverContent>
    </Popover>
  );
}
DatePicker.displayName = "DatePicker";

export { DatePicker };
