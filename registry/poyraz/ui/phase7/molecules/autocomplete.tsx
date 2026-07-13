"use client";

import * as React from "react";
import { Check, ChevronDown, X, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  fieldVariants,
  floatingItemVariants,
  floatingSurfaceVariants,
  type FloatingItemProps,
  type FloatingSurfaceProps,
} from "@/components/ui/recipes";

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
  description?: string;
  media?: React.ReactNode;
}

export interface AutocompleteProps {
  /** Available options */
  options: AutocompleteOption[];
  /** Currently selected value(s) */
  value?: string | string[];
  defaultValue?: string | string[];
  /** Called when selection changes */
  onValueChange?: (value: string | string[]) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
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
  state?: "ready" | "loading" | "error";
  loadingText?: React.ReactNode;
  errorText?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Empty state text */
  emptyText?: string;
  emptyContent?: React.ReactNode;
  /** Additional class for the wrapper */
  className?: string;
  variant?: "default" | "soft" | "glass";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  size?: "sm" | "md" | "lg";
  dropdownSurface?: NonNullable<FloatingSurfaceProps["surface"]>;
  dropdownRadius?: NonNullable<FloatingSurfaceProps["radius"]>;
  itemSize?: NonNullable<FloatingItemProps["size"]>;
}

function defaultFilter(option: AutocompleteOption, query: string) {
  return option.label.toLowerCase().includes(query.toLowerCase());
}

function Autocomplete({
  options,
  value,
  defaultValue,
  onValueChange,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  placeholder = "Search…",
  multiple = false,
  freeSolo = false,
  filterFn = defaultFilter,
  onSearchChange,
  loading = false,
  state = "ready",
  loadingText = "Searching…",
  errorText = "Unable to load options.",
  disabled = false,
  emptyText = "No results found.",
  emptyContent,
  className,
  variant,
  radius,
  size = "md",
  dropdownSurface,
  dropdownRadius,
  itemSize = "md",
}: AutocompleteProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const [internalValue, setInternalValue] = React.useState<string | string[] | undefined>(
    defaultValue,
  );
  const [query, setQuery] = React.useState("");
  const [highlightIndex, setHighlightIndex] = React.useState(-1);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const listboxId = React.useId();
  const open = controlledOpen ?? internalOpen;
  const valueControlled = value !== undefined;
  const resolvedValue = valueControlled ? value : internalValue;
  const resolvedState = loading || state === "loading" ? "loading" : state;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (controlledOpen === undefined) setInternalOpen(next);
      onOpenChange?.(next);
    },
    [controlledOpen, onOpenChange],
  );

  // Normalize value to array for internal use
  const selectedValues = React.useMemo(() => {
    if (!resolvedValue) return [];
    return Array.isArray(resolvedValue) ? resolvedValue : [resolvedValue];
  }, [resolvedValue]);

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
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        // If freeSolo is off, clear the query when closing without selection
        if (!freeSolo) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [freeSolo, setOpen]);

  // Reset highlight when filtered list changes
  React.useEffect(() => {
    setHighlightIndex(-1);
  }, [query]);

  // Scroll highlighted item into view
  React.useEffect(() => {
    if (highlightIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-autocomplete-item]");
      items[highlightIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightIndex]);

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const next = selectedValues.includes(optionValue)
        ? selectedValues.filter((v) => v !== optionValue)
        : [...selectedValues, optionValue];
      if (!valueControlled) setInternalValue(next);
      onValueChange?.(next);
    } else {
      if (!valueControlled) setInternalValue(optionValue);
      onValueChange?.(optionValue);
      const label = options.find((o) => o.value === optionValue)?.label ?? optionValue;
      setQuery(label);
      setOpen(false);
    }
  };

  const handleRemove = (val: string) => {
    if (multiple) {
      const next = selectedValues.filter((v) => v !== val);
      if (!valueControlled) setInternalValue(next);
      onValueChange?.(next);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setQuery(q);
    onSearchChange?.(q);
    if (!open) setOpen(true);
  };

  const findEnabled = (start: number, direction: 1 | -1) => {
    if (!flatFiltered.length) return -1;
    let index = start;
    for (let count = 0; count < flatFiltered.length; count += 1) {
      index = (index + direction + flatFiltered.length) % flatFiltered.length;
      if (!flatFiltered[index]?.disabled) return index;
    }
    return -1;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => findEnabled(i, 1));
      if (!open) setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => findEnabled(i < 0 ? 0 : i, -1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightIndex(findEnabled(-1, 1));
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightIndex(findEnabled(0, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && flatFiltered[highlightIndex]) {
        const opt = flatFiltered[highlightIndex];
        if (!opt.disabled) handleSelect(opt.value);
      } else if (freeSolo && query) {
        const next = multiple ? [...selectedValues, query] : query;
        if (!valueControlled) setInternalValue(next);
        onValueChange?.(next);
        if (!multiple) setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "Tab") {
      setOpen(false);
    } else if (e.key === "Backspace" && !query && multiple && selectedValues.length > 0) {
      // Remove last tag
      const next = selectedValues.slice(0, -1);
      if (!valueControlled) setInternalValue(next);
      onValueChange?.(next);
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
    <div
      ref={wrapperRef}
      data-slot="autocomplete"
      data-state={resolvedState}
      className={cn("relative w-full", className)}
    >
      {/* Trigger */}
      <div
        className={cn(
          fieldVariants({ variant, radius }),
          "flex flex-wrap items-center gap-1.5 min-h-[36px] w-full",
          "px-3",
          size === "sm" && "min-h-8 py-1",
          size === "md" && "min-h-9 py-1.5",
          size === "lg" && "min-h-11 py-2",
          "transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)]",
          open && "border-primary ring-2 ring-ring ring-offset-2",
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
                className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide border border-border-strong bg-muted text-secondary-foreground animate-poyraz-scale-in"
              >
                {label}
                <button
                  type="button"
                  className="ml-0.5 hover:text-primary transition-[color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:scale-110 active:scale-95 cursor-pointer"
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
          <Search className="h-4 w-4 shrink-0 text-placeholder" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={multiple && selectedValues.length > 0 ? "" : placeholder}
            disabled={disabled}
            className={cn(
              "flex-1 bg-transparent text-sm text-foreground placeholder:text-placeholder",
              "outline-none border-none p-0",
              "disabled:cursor-not-allowed",
            )}
            role="combobox"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-controls={open ? listboxId : undefined}
            aria-activedescendant={
              highlightIndex >= 0 ? `${listboxId}-option-${highlightIndex}` : undefined
            }
            autoComplete="off"
          />
        </div>

        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-placeholder transition-transform duration-200 ease-out",
            open && "rotate-180",
          )}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={listRef}
          id={listboxId}
          role="listbox"
          className={cn(
            floatingSurfaceVariants({ surface: dropdownSurface, radius: dropdownRadius }),
            "absolute z-50 mt-1 w-full max-h-[240px] overflow-y-auto",
            "origin-top animate-in fade-in-0 slide-in-from-top-2 [--poyraz-enter-scale:0.98] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:[--poyraz-enter-scale:1] motion-reduce:[--poyraz-enter-translate-y:0]",
          )}
        >
          {resolvedState === "loading" && (
            <div
              role="status"
              aria-live="polite"
              className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground animate-poyraz-fade-in"
            >
              <div className="size-4 rounded-full border-2 border-primary/25 border-t-primary animate-poyraz-spin" />
              {loadingText}
            </div>
          )}

          {resolvedState === "error" && (
            <div
              role="alert"
              className="px-3 py-6 text-center text-sm text-destructive-muted-foreground animate-poyraz-fade-in"
            >
              {errorText}
            </div>
          )}

          {resolvedState === "ready" && flatFiltered.length === 0 && (
            <div className="px-3 py-6 text-center text-sm text-placeholder animate-poyraz-fade-in">
              {emptyContent ?? emptyText}
            </div>
          )}

          {resolvedState === "ready" &&
            Array.from(grouped.entries()).map(([group, opts]) => (
              <div key={group || "__ungrouped"} role="group" className="animate-poyraz-fade-in">
                {group && (
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-placeholder border-b border-accent">
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
                      id={`${listboxId}-option-${flatIdx}`}
                      data-autocomplete-item
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={opt.disabled}
                      className={cn(
                        floatingItemVariants({ size: itemSize, radius: "md" }),
                        "cursor-pointer border border-transparent",
                        isHighlighted && "bg-muted border-border translate-x-0.5",
                        !isHighlighted && "hover:bg-muted hover:border-border",
                        opt.disabled && "pointer-events-none opacity-40",
                      )}
                      onClick={() => {
                        if (!opt.disabled) handleSelect(opt.value);
                      }}
                      onMouseEnter={() => setHighlightIndex(flatIdx)}
                    >
                      {opt.media && (
                        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-surface-subtle [&_img]:size-full [&_img]:object-cover">
                          {opt.media}
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{opt.label}</span>
                        {opt.description && (
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {opt.description}
                          </span>
                        )}
                      </span>
                      {isSelected && (
                        <Check className="h-4 w-4 shrink-0 text-primary animate-poyraz-scale-in" />
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
