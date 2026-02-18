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
  const [view, setView] = React.useState<CalendarView>("days");
  // Year decade range start for years grid
  const [decadeStart, setDecadeStart] = React.useState(() => {
    const y = (selected ?? new Date()).getFullYear();
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
      <>
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
          <button
            type="button"
            onClick={() => setView("months")}
            className={cn(
              "text-sm font-bold uppercase tracking-wide cursor-pointer",
              "px-2 py-1 hover:bg-slate-100 transition-colors",
              "border-b-2 border-dashed border-transparent hover:border-slate-300",
            )}
          >
            {MONTHS[viewMonth]} {viewYear}
          </button>
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
            className="h-8 w-8"
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
              "px-2 py-1 hover:bg-slate-100 transition-colors",
              "border-b-2 border-dashed border-transparent hover:border-slate-300",
            )}
          >
            {viewYear}
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setViewYear((y) => y + 1)}
            aria-label="Next year"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Month grid: 4×3 */}
        <div className="grid grid-cols-3 gap-1">
          {MONTHS_SHORT.map((m, i) => {
            const isCurrent =
              i === now.getMonth() && viewYear === now.getFullYear();
            const isSelected =
              selected &&
              i === selected.getMonth() &&
              viewYear === selected.getFullYear();
            return (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setViewMonth(i);
                  setView("days");
                }}
                className={cn(
                  "h-10 text-sm font-medium transition-colors duration-150 cursor-pointer",
                  "flex items-center justify-center",
                  "hover:bg-slate-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
                  isCurrent &&
                    !isSelected &&
                    "border-2 border-dashed border-red-600",
                  isSelected && "bg-red-600 text-white hover:bg-red-700",
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
            className="h-8 w-8"
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
            className="h-8 w-8"
            onClick={() => setDecadeStart((d) => d + 12)}
            aria-label="Next decade"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Year grid: 4×3 */}
        <div className="grid grid-cols-3 gap-1">
          {years.map((y) => {
            const isCurrent = y === now.getFullYear();
            const isSelected = selected && y === selected.getFullYear();
            return (
              <button
                key={y}
                type="button"
                onClick={() => {
                  setViewYear(y);
                  setView("months");
                }}
                className={cn(
                  "h-10 text-sm font-medium transition-colors duration-150 cursor-pointer",
                  "flex items-center justify-center",
                  "hover:bg-slate-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600",
                  isCurrent &&
                    !isSelected &&
                    "border-2 border-dashed border-red-600",
                  isSelected && "bg-red-600 text-white hover:bg-red-700",
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
    <div className={cn("p-3 select-none", className)}>
      {view === "days" && renderDays()}
      {view === "months" && renderMonths()}
      {view === "years" && renderYears()}
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
