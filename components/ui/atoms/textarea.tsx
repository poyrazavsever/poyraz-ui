import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          // Layout
          "flex min-h-[80px] w-full px-3 py-2",
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
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
