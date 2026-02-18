"use client";

import * as React from "react";
import { Minus, Plus, Search, Eye, EyeOff, Phone, Globe } from "lucide-react";

import { cn } from "@/components/ui/atoms/typography";
import { Input, type InputProps } from "@/components/ui/atoms/input";
import { Button } from "@/components/ui/atoms/button";

/* ================================================================== */
/*  SHARED WRAPPER                                                     */
/* ================================================================== */

const fieldWrapper = [
  "flex items-center w-full",
  "border-2 border-dashed border-slate-400 bg-white",
  "rounded-none shadow-none",
  "transition-all duration-200 ease-out",
  "focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2",
].join(" ");

const innerInput = [
  "border-0 ring-0 shadow-none focus:ring-0 focus:ring-offset-0 focus:border-0 focus:outline-none",
].join(" ");

/* ================================================================== */
/*  NUMBER INPUT                                                       */
/* ================================================================== */

export interface NumberInputProps extends Omit<
  InputProps,
  "type" | "onChange" | "value"
> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { className, value = 0, onChange, min, max, step = 1, disabled, ...props },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const num = parseFloat(e.target.value);
      if (!isNaN(num)) onChange?.(clamp(num, min, max));
    };

    const increment = () => {
      onChange?.(clamp((value ?? 0) + step, min, max));
    };

    const decrement = () => {
      onChange?.(clamp((value ?? 0) - step, min, max));
    };

    return (
      <div className={cn(fieldWrapper, disabled && "opacity-40", className)}>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-10 w-10 shrink-0 rounded-none border-0"
          onClick={decrement}
          disabled={disabled || (min !== undefined && (value ?? 0) <= min)}
          tabIndex={-1}
          aria-label="Decrease"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          ref={ref}
          type="number"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            innerInput,
            "text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]",
          )}
          min={min}
          max={max}
          step={step}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-10 w-10 shrink-0 rounded-none border-0"
          onClick={increment}
          disabled={disabled || (max !== undefined && (value ?? 0) >= max)}
          tabIndex={-1}
          aria-label="Increase"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    );
  },
);
NumberInput.displayName = "NumberInput";

function clamp(val: number, min?: number, max?: number) {
  if (min !== undefined && val < min) return min;
  if (max !== undefined && val > max) return max;
  return val;
}

/* ================================================================== */
/*  SEARCH INPUT                                                       */
/* ================================================================== */

export interface SearchInputProps extends InputProps {
  onSearch?: (value: string) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, onKeyDown, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.((e.target as HTMLInputElement).value);
      }
      onKeyDown?.(e);
    };

    return (
      <div className={cn(fieldWrapper, className)}>
        <div className="pl-3 text-slate-400">
          <Search className="h-4 w-4" />
        </div>
        <Input
          ref={ref}
          type="search"
          onKeyDown={handleKeyDown}
          className={cn(innerInput)}
          {...props}
        />
      </div>
    );
  },
);
SearchInput.displayName = "SearchInput";

/* ================================================================== */
/*  PHONE INPUT                                                        */
/* ================================================================== */

export interface PhoneInputProps extends InputProps {
  /** Country code prefix, e.g. "+90" */
  countryCode?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, countryCode = "+1", ...props }, ref) => {
    return (
      <div className={cn(fieldWrapper, className)}>
        <div className="pl-3 text-slate-400">
          <Phone className="h-4 w-4" />
        </div>
        <span className="pl-2 pr-1 text-sm font-medium text-slate-600 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3">
          {countryCode}
        </span>
        <Input ref={ref} type="tel" className={cn(innerInput)} {...props} />
      </div>
    );
  },
);
PhoneInput.displayName = "PhoneInput";

/* ================================================================== */
/*  PASSWORD INPUT                                                     */
/* ================================================================== */

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    return (
      <div className={cn(fieldWrapper, className)}>
        <Input
          ref={ref}
          type={visible ? "text" : "password"}
          className={cn(innerInput)}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-10 w-10 shrink-0 rounded-none border-0"
          onClick={() => setVisible((v) => !v)}
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

/* ================================================================== */
/*  URL INPUT                                                          */
/* ================================================================== */

const UrlInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn(fieldWrapper, className)}>
        <div className="pl-3 text-slate-400">
          <Globe className="h-4 w-4" />
        </div>
        <span className="pl-2 text-sm text-slate-400 select-none whitespace-nowrap border-r-2 border-dashed border-slate-300 pr-3">
          https://
        </span>
        <Input ref={ref} type="url" className={cn(innerInput)} {...props} />
      </div>
    );
  },
);
UrlInput.displayName = "UrlInput";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export { NumberInput, SearchInput, PhoneInput, PasswordInput, UrlInput };
