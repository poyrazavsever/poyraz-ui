import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          // Layout
          "flex h-9 w-full px-3 py-1.5",
          // Typography
          "text-sm text-foreground placeholder:text-placeholder",
          // Shape — minimal
          "rounded-sm shadow-none",
          // Border
          "border border-input",
          // Background
          "bg-background",
          // Transitions
          "transition-all duration-200 ease-out",
          // Focus
          "focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background",
          // Disabled
          "disabled:opacity-40 disabled:cursor-not-allowed",
          // File input
          "file:border-0 file:bg-transparent file:text-sm file:font-semibold file:uppercase file:tracking-wide file:text-primary file:cursor-pointer",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
