"use client";

import * as React from "react";
import { Check, ChevronDown, X, Search } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";

/* ================================================================== */
/*  AUTOCOMPLETE — Searchable combobox / typeahead                     */
/* ================================================================== */

export interface AutocompleteOption {
  /** Unique value */
  value: string;
  /** Display label */
  label: string;
  /** Whether this option is disabled */
  disabled?: boolean;
  /** Optional group name */
  group?: string;
}

export interface AutocompleteProps {
  /** Available options */
  options: AutocompleteOption[];
  /** Currently selected value(s) */
  value?: string | string[];
  /** Called when selection changes */
  onValueChange?: (value: string | string[]) => void;
  /** Placeholder for the input */
  placeholder?: string;
  /** Allow multiple selections */
  multiple?: boolean;
  /** Allow free-form text (not just from the list) */
  freeSolo?: boolean;
  /** Custom filter function */
  filterFn?: (option: AutocompleteOption, query: string) => boolean;
  /** Called when the search query changes */
  onSearchChange?: (query: string) => void;
  /** Show a loading spinner */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Empty state text */
  emptyText?: string;
  /** Additional class for the wrapper */
  className?: string;
}

function defaultFilter(option: AutocompleteOption, query: string) {
  return option.label.toLowerCase().includes(query.toLowerCase());
}

function Autocomplete({
  options,
  value,
  onValueChange,
  placeholder = "Search…",
  multiple = false,
  freeSolo = false,
  filterFn = defaultFilter,
  onSearchChange,
  loading = false,
  disabled = false,
  emptyText = "No results found.",
  className,
}: AutocompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [highlightIndex, setHighlightIndex] = React.useState(-1);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Normalize value to array for internal use
  const selectedValues = React.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  // Filtered options
  const filtered = React.useMemo(() => {
    if (!query) return options;
    return options.filter((o) => filterFn(o, query));
  }, [options, query, filterFn]);

  // Group options
  const grouped = React.useMemo(() => {
    const groups = new Map<string, AutocompleteOption[]>();
    for (const opt of filtered) {
      const key = opt.group ?? "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(opt);
    }
    return groups;
  }, [filtered]);

  // Flat list for keyboard nav
  const flatFiltered = React.useMemo(() => {
    const arr: AutocompleteOption[] = [];
    for (const opts of grouped.values()) arr.push(...opts);
    return arr;
  }, [grouped]);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        // If freeSolo is off, clear the query when closing without selection
        if (!freeSolo) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [freeSolo]);

  // Reset highlight when filtered list changes
  React.useEffect(() => {
    setHighlightIndex(-1);
  }, [query]);

  // Scroll highlighted item into view
  React.useEffect(() => {
    if (highlightIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll(
        "[data-autocomplete-item]",
      );
      items[highlightIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightIndex]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const next = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];
      onValueChange?.(next);
    } else {
      onValueChange?.(optionValue);
      const label =
        options.find((o) => o.value === optionValue)?.label ?? optionValue;
      setQuery(label);
      setOpen(false);
    }
  };

  const handleRemove = (val: string) => {
    if (multiple) {
      onValueChange?.(selectedValues.filter((v) => v !== val));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    onSearchChange?.(q);
    if (!open) setOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      if (!open) setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && flatFiltered[highlightIndex]) {
        const opt = flatFiltered[highlightIndex];
        if (!opt.disabled) handleSelect(opt.value);
      } else if (freeSolo && query) {
        onValueChange?.(multiple ? [...selectedValues, query] : query);
        if (!multiple) setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (
      e.key === "Backspace" &&
      !query &&
      multiple &&
      selectedValues.length > 0
    ) {
      // Remove last tag
      onValueChange?.(selectedValues.slice(0, -1));
    }
  };

  // When not multiple, sync query with selected label
  React.useEffect(() => {
    if (!multiple && selectedValues.length > 0 && !open) {
      const label = options.find((o) => o.value === selectedValues[0])?.label;
      if (label) setQuery(label);
    }
  }, [selectedValues, multiple, open, options]);

  return (
    <div ref={wrapperRef} className={cn("relative w-full", className)}>
      {/* Trigger */}
      <div
        className={cn(
          "flex flex-wrap items-center gap-1.5 min-h-[44px] w-full",
          "border-2 border-dashed border-slate-400 bg-white px-3 py-2",
          "rounded-none shadow-none",
          "transition-all duration-200 ease-out",
          open && "border-red-600 ring-2 ring-red-600 ring-offset-2",
          disabled && "opacity-40 cursor-not-allowed",
        )}
        onClick={() => {
          if (!disabled) {
            inputRef.current?.focus();
            setOpen(true);
          }
        }}
      >
        {/* Tags (multiple mode) */}
        {multiple &&
          selectedValues.map((val) => {
            const label = options.find((o) => o.value === val)?.label ?? val;
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border-2 border-dashed border-slate-300 bg-slate-50 text-slate-700"
              >
                {label}
                <button
                  type="button"
                  className="ml-0.5 hover:text-red-600 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(val);
                  }}
                  aria-label={`Remove ${label}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            );
          })}

        <div className="flex flex-1 items-center gap-2 min-w-[80px]">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={
              multiple && selectedValues.length > 0 ? "" : placeholder
            }
            disabled={disabled}
            className={cn(
              "flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400",
              "outline-none border-none p-0",
              "disabled:cursor-not-allowed",
            )}
            role="combobox"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            autoComplete="off"
          />
        </div>

        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={listRef}
          role="listbox"
          className={cn(
            "absolute z-50 mt-1 w-full max-h-[240px] overflow-y-auto",
            "border-2 border-dashed border-slate-200 bg-white",
            "shadow-none",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150",
          )}
        >
          {loading && (
            <div className="flex items-center justify-center py-6">
              <div className="h-4 w-4 border-2 border-dashed border-red-600 border-t-transparent animate-spin" />
            </div>
          )}

          {!loading && flatFiltered.length === 0 && (
            <div className="px-3 py-6 text-center text-sm text-slate-400">
              {emptyText}
            </div>
          )}

          {!loading &&
            Array.from(grouped.entries()).map(([group, opts]) => (
              <div key={group || "__ungrouped"} role="group">
                {group && (
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 border-b border-dashed border-slate-100">
                    {group}
                  </div>
                )}
                {opts.map((opt) => {
                  const isSelected = selectedValues.includes(opt.value);
                  const flatIdx = flatFiltered.indexOf(opt);
                  const isHighlighted = flatIdx === highlightIndex;
                  return (
                    <div
                      key={opt.value}
                      data-autocomplete-item
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={opt.disabled}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer select-none",
                        "border-2 border-dashed border-transparent",
                        "transition-colors duration-100",
                        isHighlighted && "bg-slate-50 border-slate-200",
                        !isHighlighted &&
                          "hover:bg-slate-50 hover:border-slate-200",
                        opt.disabled && "pointer-events-none opacity-40",
                      )}
                      onClick={() => {
                        if (!opt.disabled) handleSelect(opt.value);
                      }}
                      onMouseEnter={() => setHighlightIndex(flatIdx)}
                    >
                      <span className="flex-1 truncate">{opt.label}</span>
                      {isSelected && (
                        <Check className="h-4 w-4 shrink-0 text-red-600" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
Autocomplete.displayName = "Autocomplete";

export { Autocomplete };
