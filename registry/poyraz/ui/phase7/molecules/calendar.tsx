"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
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
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
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

type CalendarView = "days" | "months" | "years";

/* ================================================================== */
/*  CALENDAR                                                           */
/* ================================================================== */

export interface DateRange {
  from?: Date;
  to?: Date;
}

interface CalendarBaseProps {
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  className?: string;
  surface?: "plain" | "solid" | "soft" | "glass";
  radius?: "none" | "sm" | "md" | "lg" | "xl";
  size?: "compact" | "default" | "spacious";
  initialMonth?: Date;
  onMonthChange?: (month: Date) => void;
}

export interface CalendarSingleProps extends CalendarBaseProps {
  mode?: "single";
  selected?: Date;
  defaultSelected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export interface CalendarRangeProps extends CalendarBaseProps {
  mode: "range";
  selected?: DateRange;
  defaultSelected?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
}

export type CalendarProps = CalendarSingleProps | CalendarRangeProps;

function Calendar(props: CalendarProps) {
  const {
  minDate,
  maxDate,
  className,
  initialMonth,
  onMonthChange,
  radius = "lg",
  size = "default",
  surface = "plain",
  } = props;
  const mode = props.mode ?? "single";
  const isControlled = Object.prototype.hasOwnProperty.call(props, "selected");
  const [internalSelection, setInternalSelection] = React.useState<Date | DateRange | undefined>(props.defaultSelected);
  const selection = isControlled ? props.selected : internalSelection;
  const selectedDate = selection instanceof Date ? selection : selection?.from;
  const selectedRange = mode === "range" && !(selection instanceof Date) ? selection : undefined;
  const [viewYear, setViewYear] = React.useState(() =>
    (initialMonth ?? selectedDate ?? new Date()).getFullYear(),
  );
  const [viewMonth, setViewMonth] = React.useState(() =>
    (initialMonth ?? selectedDate ?? new Date()).getMonth(),
  );
  const [view, setView] = React.useState<CalendarView>("days");
  // Year decade range start for years grid
  const [decadeStart, setDecadeStart] = React.useState(() => {
    const y = (initialMonth ?? selectedDate ?? new Date()).getFullYear();
    return y - (y % 12);
  });

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

  React.useEffect(() => {
    onMonthChange?.(new Date(viewYear, viewMonth, 1));
  }, [onMonthChange, viewMonth, viewYear]);

  const emitSelection = (next: Date | DateRange | undefined) => {
    if (!isControlled) setInternalSelection(next);
    if (mode === "range") {
      (props as CalendarRangeProps).onSelect?.(next as DateRange | undefined);
    } else {
      (props as CalendarSingleProps).onSelect?.(next as Date | undefined);
    }
  };

  const selectDate = (date: Date) => {
    if (mode === "single") {
      emitSelection(date);
      return;
    }
    const current = selectedRange;
    if (!current?.from || current.to || date < current.from) {
      emitSelection({ from: date, to: undefined });
    } else {
      emitSelection({ from: current.from, to: date });
    }
  };

  const isInRange = (date: Date) => Boolean(
    selectedRange?.from && selectedRange?.to && date > selectedRange.from && date < selectedRange.to,
  );

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isDisabled = (date: Date) => {
    if (minDate) {
      const min = new Date(
        minDate.getFullYear(),
        minDate.getMonth(),
        minDate.getDate(),
      );
      if (date < min) return true;
    }
    if (maxDate) {
      const max = new Date(
        maxDate.getFullYear(),
        maxDate.getMonth(),
        maxDate.getDate(),
        23,
        59,
        59,
        999,
      );
      if (date > max) return true;
    }
    return false;
  };

  /* ── Days view ──────────────────────────────────────────────────── */

  const renderDays = () => {
    const cells: React.ReactNode[] = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} />);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const rangeStart = Boolean(selectedRange?.from && isSameDay(date, selectedRange.from));
      const rangeEnd = Boolean(selectedRange?.to && isSameDay(date, selectedRange.to));
      const rangeMiddle = isInRange(date);
      const sel = mode === "single" ? Boolean(selectedDate && isSameDay(date, selectedDate)) : rangeStart || rangeEnd;
      const today = isToday(date);
      const disabled = isDisabled(date);

      cells.push(
        <button
          key={day}
          type="button"
          disabled={disabled}
          onClick={() => selectDate(date)}
          aria-label={date.toLocaleDateString()}
          aria-pressed={sel}
          data-selected={sel ? "" : undefined}
          data-today={today ? "" : undefined}
          data-range-start={rangeStart ? "" : undefined}
          data-range-middle={rangeMiddle ? "" : undefined}
          data-range-end={rangeEnd ? "" : undefined}
          className={cn(
            "text-sm font-medium cursor-pointer",
            size === "compact" && "h-7 w-7",
            size === "default" && "h-8 w-8",
            size === "spacious" && "h-10 w-10",
            "flex items-center justify-center",
            "transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[var(--poyraz-motion-scale-press-small)]",
            "hover:bg-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            today && !sel && !rangeMiddle && "ring-1 ring-inset ring-primary/45 text-primary",
            rangeMiddle && "rounded-none bg-primary-muted text-primary-muted-foreground hover:bg-primary-muted",
            rangeStart && selectedRange?.to && "rounded-l-md rounded-r-none bg-primary text-primary-foreground",
            rangeStart && !selectedRange?.to && "rounded-md bg-primary text-primary-foreground",
            rangeEnd && "rounded-l-none rounded-r-md bg-primary text-primary-foreground",
            sel && mode === "single" && "rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
            disabled && "opacity-30 cursor-not-allowed hover:bg-transparent",
          )}
        >
          {day}
        </button>,
      );
    }

    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
            onClick={prevMonth}
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <button
            type="button"
            onClick={() => setView("months")}
            className={cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-accent transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "border-b border-transparent hover:border-border-strong",
            )}
          >
            {MONTHS[viewMonth]} {viewYear}
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
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
              className={cn("flex items-center justify-center text-[11px] font-bold uppercase tracking-wider text-placeholder", size === "compact" && "h-7 w-7", size === "default" && "h-8 w-8", size === "spacious" && "h-10 w-10")}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 animate-poyraz-slide-in-from-bottom">
          {cells}
        </div>
      </>
    );
  };

  /* ── Months view ────────────────────────────────────────────────── */

  const renderMonths = () => {
    const now = new Date();
    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
            onClick={() => setViewYear((y) => y - 1)}
            aria-label="Previous year"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <button
            type="button"
            onClick={() => {
              setDecadeStart(viewYear - (viewYear % 12));
              setView("years");
            }}
            className={cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-accent transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)]",
              "border-b border-transparent hover:border-border-strong",
            )}
          >
            {viewYear}
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
            onClick={() => setViewYear((y) => y + 1)}
            aria-label="Next year"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Month grid: 4×3 */}
        <div className="grid grid-cols-3 gap-1 animate-poyraz-slide-in-from-bottom">
          {MONTHS_SHORT.map((m, i) => {
            const isCurrent =
              i === now.getMonth() && viewYear === now.getFullYear();
            const isSelected =
              selectedDate &&
              i === selectedDate.getMonth() &&
              viewYear === selectedDate.getFullYear();
            return (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setViewMonth(i);
                  setView("days");
                }}
                className={cn(
                  "h-8 text-sm font-medium cursor-pointer",
                  "flex items-center justify-center",
                  "transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[var(--poyraz-motion-scale-press-small)]",
                  "hover:bg-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isCurrent && !isSelected && "border border-primary",
                  isSelected &&
                    "bg-primary text-primary-foreground hover:bg-primary-hover",
                )}
              >
                {m}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  /* ── Years view ─────────────────────────────────────────────────── */

  const renderYears = () => {
    const now = new Date();
    const years = Array.from({ length: 12 }, (_, i) => decadeStart + i);
    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
            onClick={() => setDecadeStart((d) => d - 12)}
            aria-label="Previous decade"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-bold uppercase tracking-wide">
            {decadeStart} – {decadeStart + 11}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 active:scale-95"
            onClick={() => setDecadeStart((d) => d + 12)}
            aria-label="Next decade"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Year grid: 4×3 */}
        <div className="grid grid-cols-3 gap-1 animate-poyraz-slide-in-from-bottom">
          {years.map((y) => {
            const isCurrent = y === now.getFullYear();
            const isSelected = selectedDate && y === selectedDate.getFullYear();
            return (
              <button
                key={y}
                type="button"
                onClick={() => {
                  setViewYear(y);
                  setView("months");
                }}
                className={cn(
                  "h-8 text-sm font-medium cursor-pointer",
                  "flex items-center justify-center",
                  "transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[var(--poyraz-motion-scale-press-small)]",
                  "hover:bg-accent",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isCurrent && !isSelected && "border border-primary",
                  isSelected &&
                    "bg-primary text-primary-foreground hover:bg-primary-hover",
                )}
              >
                {y}
              </button>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div
      data-slot="calendar"
      data-mode={mode}
      data-surface={surface}
      className={cn(
        "select-none p-3 animate-poyraz-fade-in motion-reduce:animate-none",
        surface === "solid" && "border border-border bg-surface shadow-sm",
        surface === "soft" && "border border-transparent bg-surface-subtle",
        surface === "glass" && "border border-glass-border-outer bg-glass shadow-md backdrop-blur-glass",
        radius === "none" && "rounded-none",
        radius === "sm" && "rounded-sm",
        radius === "md" && "rounded-md",
        radius === "lg" && "rounded-lg",
        radius === "xl" && "rounded-xl",
        className,
      )}
    >
      {view === "days" && renderDays()}
      {view === "months" && renderMonths()}
      {view === "years" && renderYears()}
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
