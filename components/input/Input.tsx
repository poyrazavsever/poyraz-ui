import React, { forwardRef, useState } from "react";
import { Icon } from "@iconify/react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Input label text */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** Icon to display on the left side */
  leftIcon?: string;
  /** Icon to display on the right side */
  rightIcon?: string;
  /** Input size variant */
  size?: "sm" | "md" | "lg";
  /** Input visual variant */
  variant?: "default" | "filled" | "outlined";
  /** Whether the input is required */
  required?: boolean;
  /** Whether to show password toggle for password inputs */
  showPasswordToggle?: boolean;
  /** Custom wrapper className */
  wrapperClassName?: string;
  /** Custom label className */
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      size = "md",
      variant = "default",
      required = false,
      showPasswordToggle = false,
      type = "text",
      className = "",
      wrapperClassName = "",
      labelClassName = "",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // Determine input type
    const inputType = type === "password" && showPassword ? "text" : type;

    // Size variants
    const sizeStyles = {
      sm: {
        input: "px-3 py-1.5 text-sm",
        icon: "w-4 h-4",
        label: "text-xs",
        wrapper: "gap-1",
      },
      md: {
        input: "px-3 py-2 text-sm",
        icon: "w-4 h-4",
        label: "text-xs",
        wrapper: "gap-1",
      },
      lg: {
        input: "px-4 py-3 text-base",
        icon: "w-5 h-5",
        label: "text-sm",
        wrapper: "gap-2",
      },
    };

    // Variant styles
    const variantStyles = {
      default: {
        input:
          "bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800",
        focus: "focus:border-neutral-400 dark:focus:border-neutral-600",
        error: "border-red-500 dark:border-red-500",
      },
      filled: {
        input: "bg-neutral-100 dark:bg-neutral-800 border border-transparent",
        focus:
          "focus:bg-neutral-50 dark:focus:bg-neutral-900 focus:border-neutral-400 dark:focus:border-neutral-600",
        error:
          "border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-950/10",
      },
      outlined: {
        input:
          "bg-transparent border-2 border-neutral-200 dark:border-neutral-800",
        focus: "focus:border-neutral-400 dark:focus:border-neutral-600",
        error: "border-red-500 dark:border-red-500",
      },
    };

    const currentSize = sizeStyles[size];
    const currentVariant = variantStyles[variant];

    // Combine input classes
    const inputClasses = [
      "w-full rounded-md text-neutral-800 dark:text-neutral-100 outline-none transition-all duration-200",
      currentSize.input,
      currentVariant.input,
      error ? currentVariant.error : currentVariant.focus,
      leftIcon ? "pl-10" : "",
      rightIcon || (type === "password" && showPasswordToggle) ? "pr-10" : "",
      disabled ? "opacity-50 cursor-not-allowed" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // Label classes
    const labelClasses = [
      currentSize.label,
      "text-neutral-500 dark:text-neutral-400 font-semibold",
      required ? "after:content-['*'] after:text-red-500 after:ml-1" : "",
      disabled ? "opacity-50" : "",
      labelClassName,
    ]
      .filter(Boolean)
      .join(" ");

    // Wrapper classes
    const wrapperClasses = [
      "flex flex-col",
      currentSize.wrapper,
      wrapperClassName,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClasses}>
        {/* Label */}
        {label && (
          <label htmlFor={props.id || props.name} className={labelClasses}>
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Icon
                icon={leftIcon}
                className={`${currentSize.icon} text-neutral-400 dark:text-neutral-500`}
              />
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={inputType}
            className={inputClasses}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {/* Right icon or password toggle */}
          {(rightIcon || (type === "password" && showPasswordToggle)) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {type === "password" && showPasswordToggle ? (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={`${currentSize.icon} text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors`}
                  disabled={disabled}
                >
                  <Icon
                    icon={
                      showPassword ? "hugeicons:view-off" : "hugeicons:view"
                    }
                    className="w-full h-full"
                  />
                </button>
              ) : rightIcon ? (
                <Icon
                  icon={rightIcon}
                  className={`${currentSize.icon} text-neutral-400 dark:text-neutral-500`}
                />
              ) : null}
            </div>
          )}

          {/* Focus ring indicator */}
          {isFocused && !error && (
            <div className="absolute inset-0 rounded-md ring-2 ring-neutral-400/20 dark:ring-neutral-600/20 pointer-events-none" />
          )}
        </div>

        {/* Helper text or error */}
        {(helperText || error) && (
          <div
            className={`text-xs ${
              error
                ? "text-red-500 dark:text-red-400"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
          >
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Pre-configured input variants
export const TextInput = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  (props, ref) => <Input ref={ref} type="text" {...props} />
);

export const EmailInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => (
  <Input ref={ref} type="email" leftIcon="hugeicons:mail-01" {...props} />
));

export const PasswordInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type" | "showPasswordToggle">
>((props, ref) => (
  <Input
    ref={ref}
    type="password"
    showPasswordToggle
    leftIcon="hugeicons:lock-password"
    {...props}
  />
));

export const SearchInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => (
  <Input ref={ref} type="search" leftIcon="hugeicons:search-01" {...props} />
));

export const NumberInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => <Input ref={ref} type="number" {...props} />);

export const PhoneInput = forwardRef<
  HTMLInputElement,
  Omit<InputProps, "type">
>((props, ref) => (
  <Input ref={ref} type="tel" leftIcon="hugeicons:call" {...props} />
));

export const URLInput = forwardRef<HTMLInputElement, Omit<InputProps, "type">>(
  (props, ref) => (
    <Input ref={ref} type="url" leftIcon="hugeicons:link-01" {...props} />
  )
);

export default Input;
