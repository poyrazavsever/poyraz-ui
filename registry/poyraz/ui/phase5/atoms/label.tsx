import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      data-slot="label"
      className={cn(
        "text-sm font-medium leading-none text-foreground",
        "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";

export { Label };
