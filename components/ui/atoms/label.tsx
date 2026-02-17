import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-semibold tracking-wide uppercase leading-none",
        "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
