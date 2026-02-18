"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";
import { Button } from "@/components/ui/atoms/button";

/* ================================================================== */
/*  HELPERS                                                            */
/* ================================================================== */

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  // Convert Sunday=0 to Monday-first (Mon=0 … Sun=6)
  return day === 0 ? 6 : day - 1;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isToday(date: Date) {
  return isSameDay(date, new Date());
}

/* ================================================================== */
/*  CALENDAR                                                           */
/* ================================================================== */

export interface CalendarProps {
  /** Currently selected date */
  selected?: Date;
  /** Called when user picks a date */
  onSelect?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  className?: string;
}

function Calendar({
  selected,
  onSelect,
  minDate,
  maxDate,
  className,
}: CalendarProps) {
  const [viewYear, setViewYear] = React.useState(() =>
    (selected ?? new Date()).getFullYear(),
  );
  const [viewMonth, setViewMonth] = React.useState(() =>
    (selected ?? new Date()).getMonth(),
  );

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isDisabled = (date: Date) => {
    if (minDate && date < new Date(minDate.setHours(0, 0, 0, 0))) return true;
    if (maxDate && date > new Date(maxDate.setHours(23, 59, 59, 999)))
      return true;
    return false;
  };

  // Build the grid cells
  const cells: React.ReactNode[] = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} />);
  }

  // Day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(viewYear, viewMonth, day);
    const sel = selected && isSameDay(date, selected);
    const today = isToday(date);
    const disabled = isDisabled(date);

    cells.push(
      <button
        key={day}
        type="button"
        disabled={disabled}
        onClick={() => onSelect?.(date)}
        className={cn(
          "h-9 w-9 text-sm font-medium transition-colors duration-150 cursor-pointer",
          "flex items-center justify-center",
          "hover:bg-slate-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
          today && !sel && "border-2 border-dashed border-red-600",
          sel && "bg-red-600 text-white hover:bg-red-700",
          disabled && "opacity-30 cursor-not-allowed hover:bg-transparent",
        )}
      >
        {day}
      </button>,
    );
  }

  return (
    <div className={cn("p-3 select-none", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={prevMonth}
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-bold uppercase tracking-wide">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={nextMonth}
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div
            key={d}
            className="h-9 w-9 flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-slate-400"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">{cells}</div>
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
