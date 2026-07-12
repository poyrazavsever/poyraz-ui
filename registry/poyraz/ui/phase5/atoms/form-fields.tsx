"use client";

import * as React from "react";
import { Minus, Plus, Search, Eye, EyeOff, Phone, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input, InputGroup, InputGroupAddon, type InputProps } from "@/components/ui/atoms/input";
import { Button } from "@/components/ui/atoms/button";

/* ================================================================== */
/*  SHARED WRAPPER                                                     */
/* ================================================================== */

const innerInput = [
  "min-w-0 border-0 bg-transparent shadow-none outline-none ring-0 ring-offset-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-0",
].join(" ");

type MaskToken = "#" | "A" | "*";
const maskRules: Record<MaskToken, RegExp> = {
  "#": /\d/,
  A: /[a-zA-Z]/,
  "*": /[a-zA-Z0-9]/,
};

function applyInputMask(value: string, mask: string) {
  const source = value.replace(/[^a-zA-Z0-9]/g, "");
  let sourceIndex = 0;
  let result = "";

  for (const character of mask) {
    const rule = maskRules[character as MaskToken];
    if (!rule) {
      if (source.length > 0 && (sourceIndex > 0 || result.length === 0)) result += character;
      continue;
    }

    while (sourceIndex < source.length && !rule.test(source[sourceIndex])) sourceIndex += 1;
    if (sourceIndex >= source.length) break;
    result += source[sourceIndex];
    sourceIndex += 1;
  }

  return result;
}

export interface MaskedInputProps extends Omit<InputProps, "value" | "defaultValue"> {
  mask: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (formattedValue: string, rawValue: string) => void;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ defaultValue, mask, onChange, onValueChange, value, ...props }, ref) => {
    const format = (input: string) => applyInputMask(input, mask);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = format(event.currentTarget.value);
      event.currentTarget.value = formatted;
      onValueChange?.(formatted, formatted.replace(/[^a-zA-Z0-9]/g, ""));
      onChange?.(event);
    };

    return (
      <Input
        ref={ref}
        value={value === undefined ? undefined : format(value)}
        defaultValue={defaultValue === undefined ? undefined : format(defaultValue)}
        maxLength={mask.length}
        onChange={handleChange}
        {...props}
      />
    );
  },
);
MaskedInput.displayName = "MaskedInput";

/* ================================================================== */
/*  NUMBER INPUT                                                       */
/* ================================================================== */

export interface NumberInputProps extends Omit<InputProps, "type" | "onChange" | "value"> {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { className, value = 0, onChange, min, max, step = 1, disabled, radius, variant, ...props },
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
      <InputGroup
        data-slot="number-input"
        radius={radius}
        variant={variant}
        className={cn(disabled && "opacity-60", className)}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          radius="none"
          className="h-full w-10 shrink-0 border-0"
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
          aria-invalid={props["aria-invalid"]}
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
          radius="none"
          className="h-full w-10 shrink-0 border-0"
          onClick={increment}
          disabled={disabled || (max !== undefined && (value ?? 0) >= max)}
          tabIndex={-1}
          aria-label="Increase"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </InputGroup>
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
  ({ className, onSearch, onKeyDown, radius, variant, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.((e.target as HTMLInputElement).value);
      }
      onKeyDown?.(e);
    };

    return (
      <InputGroup data-slot="search-input" radius={radius} variant={variant} className={className}>
        <InputGroupAddon position="start" className="border-0 pr-0">
          <Search className="h-4 w-4" />
        </InputGroupAddon>
        <Input
          ref={ref}
          type="search"
          onKeyDown={handleKeyDown}
          className={cn(innerInput)}
          {...props}
        />
      </InputGroup>
    );
  },
);
SearchInput.displayName = "SearchInput";

/* ================================================================== */
/*  PHONE INPUT                                                        */
/* ================================================================== */

export interface PhoneInputProps extends Omit<InputProps, "value" | "defaultValue"> {
  /** Country code prefix, e.g. "+90" */
  countryCode?: string;
  /** `#` digit, `A` letter and `*` alphanumeric mask tokens. */
  mask?: string | false;
  value?: string;
  defaultValue?: string;
  onValueChange?: (formattedValue: string, rawDigits: string) => void;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      className,
      countryCode = "+1",
      defaultValue,
      mask = "(###) ### ## ##",
      onValueChange,
      placeholder,
      value,
      radius,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <InputGroup data-slot="phone-input" radius={radius} variant={variant} className={className}>
        <InputGroupAddon position="start" className="border-0 pr-0">
          <Phone className="h-4 w-4" />
        </InputGroupAddon>
        <span
          data-slot="phone-prefix"
          className="select-none whitespace-nowrap border-r border-border px-2 text-sm font-medium text-muted-foreground"
        >
          {countryCode}
        </span>
        {mask ? (
          <MaskedInput
            ref={ref}
            type="tel"
            inputMode="tel"
            mask={mask}
            value={value}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            placeholder={placeholder ?? mask.replace(/#/g, "0")}
            className={cn(innerInput)}
            {...props}
          />
        ) : (
          <Input
            ref={ref}
            type="tel"
            inputMode="tel"
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={cn(innerInput)}
            {...props}
          />
        )}
      </InputGroup>
    );
  },
);
PhoneInput.displayName = "PhoneInput";

/* ================================================================== */
/*  PASSWORD INPUT                                                     */
/* ================================================================== */

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, radius, variant, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    return (
      <InputGroup
        data-slot="password-input"
        radius={radius}
        variant={variant}
        className={className}
      >
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
          radius="none"
          className="h-full w-10 shrink-0 border-0"
          onClick={() => setVisible((v) => !v)}
          tabIndex={-1}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </InputGroup>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

/* ================================================================== */
/*  URL INPUT                                                          */
/* ================================================================== */

export interface UrlInputProps extends Omit<InputProps, "value" | "defaultValue"> {
  protocol?: "https://" | "http://" | "";
  normalize?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, absoluteUrl: string) => void;
}

const UrlInput = React.forwardRef<HTMLInputElement, UrlInputProps>(
  (
    {
      className,
      defaultValue,
      normalize = true,
      onChange,
      onValueChange,
      protocol = "https://",
      value,
      radius,
      variant,
      ...props
    },
    ref,
  ) => {
    const normalizeUrl = (input: string) =>
      normalize
        ? input
            .trim()
            .replace(/^https?:\/\//i, "")
            .replace(/^\/\//, "")
            .replace(/\s+/g, "")
        : input;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const normalized = normalizeUrl(event.currentTarget.value);
      event.currentTarget.value = normalized;
      onValueChange?.(normalized, `${protocol}${normalized}`);
      onChange?.(event);
    };
    return (
      <InputGroup data-slot="url-input" radius={radius} variant={variant} className={className}>
        <InputGroupAddon position="start" className="border-0 pr-0">
          <Globe className="h-4 w-4" />
        </InputGroupAddon>
        {protocol && (
          <span
            data-slot="url-prefix"
            className="select-none whitespace-nowrap border-r border-border px-2 text-sm text-muted-foreground"
          >
            {protocol}
          </span>
        )}
        <Input
          ref={ref}
          type="text"
          inputMode="url"
          value={value === undefined ? undefined : normalizeUrl(value)}
          defaultValue={defaultValue === undefined ? undefined : normalizeUrl(defaultValue)}
          onChange={handleChange}
          className={cn(innerInput)}
          {...props}
        />
      </InputGroup>
    );
  },
);
UrlInput.displayName = "UrlInput";

/* ================================================================== */
/*  EXPORTS                                                            */
/* ================================================================== */

export {
  applyInputMask,
  MaskedInput,
  NumberInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
};
