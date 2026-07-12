import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { fieldVariants } from "@/components/ui/recipes";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof fieldVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, radius, variant, ...props }, ref) => (
    <textarea
      ref={ref}
      data-slot="textarea"
      data-variant={variant ?? "default"}
      data-radius={radius ?? "md"}
      data-invalid={props["aria-invalid"] ? "" : undefined}
      className={cn(fieldVariants({ variant, radius }), "min-h-24 resize-y px-3 py-2.5", className)}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
