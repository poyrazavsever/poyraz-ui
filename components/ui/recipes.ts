import { cva } from "class-variance-authority";

const fieldVariants = cva(
  "flex w-full border text-sm text-foreground outline-none transition-[color,background-color,border-color,box-shadow] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] placeholder:text-placeholder focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-100 aria-invalid:border-invalid aria-invalid:ring-[3px] aria-invalid:ring-invalid/15",
  {
    variants: {
      variant: {
        default: "border-input bg-surface shadow-xs",
        soft: "border-transparent bg-surface-subtle shadow-none hover:border-border-strong",
        glass: "poyraz-glass-field border-glass-border-outer bg-glass text-foreground shadow-sm backdrop-blur-glass",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: { variant: "default", radius: "md" },
  },
);

export { fieldVariants };
