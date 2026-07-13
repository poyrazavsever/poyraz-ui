import { cva, type VariantProps } from "class-variance-authority";

const fieldVariants = cva(
  "flex w-full border text-sm text-foreground outline-none transition-[color,background-color,border-color] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] placeholder:text-placeholder focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:opacity-100 aria-invalid:border-invalid aria-invalid:ring-[3px] aria-invalid:ring-invalid/15",
  {
    variants: {
      variant: {
        default: "border-input bg-surface shadow-xs",
        soft: "border-transparent bg-surface-subtle shadow-none hover:border-border-strong",
        glass:
          "poyraz-glass-field border-glass-border-outer bg-glass !text-foreground placeholder:!text-muted-foreground caret-foreground shadow-sm backdrop-blur-glass",
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

const floatingSurfaceVariants = cva(
  "poyraz-floating-surface overflow-hidden border text-foreground outline-none transition-[background-color,border-color] duration-[var(--poyraz-motion-duration-fast)]",
  {
    variants: {
      surface: {
        solid: "border-border bg-background shadow-lg",
        soft: "border-border/80 bg-surface-subtle shadow-md",
        glass:
          "border-glass-border-outer bg-glass shadow-lg backdrop-blur-glass supports-[backdrop-filter]:bg-glass",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: { surface: "solid", radius: "lg" },
  },
);

const floatingMotion = [
  "origin-[var(--poyraz-floating-transform-origin)]",
  "data-[state=open]:animate-poyraz-floating-in data-[state=closed]:animate-poyraz-floating-out",
].join(" ");

const controlMotion =
  "transition-[color,background-color,border-color,opacity,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] active:scale-[var(--poyraz-motion-scale-press-medium)] motion-reduce:transition-none motion-reduce:active:scale-100";

const iconMotion =
  "transition-[color,opacity] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:transition-none";

const accordionMotion =
  "data-[state=open]:animate-poyraz-accordion-down data-[state=closed]:animate-poyraz-accordion-up";

const toastMotion =
  "poyraz-toast-motion data-[swiping=true]:transition-none data-[swiped=true]:transition-none motion-reduce:transition-none";

const floatingItemVariants = cva(
  "relative flex w-full select-none items-center outline-none transition-[color,background-color,transform] duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] data-[disabled]:pointer-events-none data-[disabled]:opacity-45 focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
  {
    variants: {
      size: {
        sm: "min-h-8 gap-2 px-2 py-1 text-xs",
        md: "min-h-9 gap-2.5 px-2.5 py-1.5 text-sm",
        lg: "min-h-11 gap-3 px-3 py-2 text-sm",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
      inset: { true: "pl-8", false: null },
      interactiveMotion: { none: null, shift: null },
    },
    defaultVariants: {
      size: "md",
      radius: "md",
      inset: false,
      interactiveMotion: "shift",
    },
  },
);

const overlayVariants = cva(
  "fixed inset-0 z-50 backdrop-blur-[var(--poyraz-overlay-blur,6px)] data-[state=open]:animate-poyraz-overlay-in data-[state=closed]:animate-poyraz-overlay-out",
  {
    variants: {
      tone: {
        dim: "bg-overlay",
        soft: "bg-overlay/80",
        glass: "bg-overlay-light/80 backdrop-saturate-150",
      },
    },
    defaultVariants: { tone: "dim" },
  },
);

const overlaySurfaceVariants = cva("border text-foreground outline-none", {
  variants: {
    surface: {
      solid: "border-border bg-background shadow-xl",
      soft: "border-border/80 bg-surface-subtle shadow-xl",
      glass:
        "border-glass-border-outer bg-glass shadow-xl backdrop-blur-glass supports-[backdrop-filter]:bg-glass",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
  },
  defaultVariants: { surface: "solid", radius: "xl" },
});

type FloatingSurfaceProps = VariantProps<typeof floatingSurfaceVariants>;
type FloatingItemProps = VariantProps<typeof floatingItemVariants>;
type OverlayProps = VariantProps<typeof overlayVariants>;
type OverlaySurfaceProps = VariantProps<typeof overlaySurfaceVariants>;

export {
  fieldVariants,
  floatingSurfaceVariants,
  floatingMotion,
  controlMotion,
  iconMotion,
  accordionMotion,
  toastMotion,
  floatingItemVariants,
  overlayVariants,
  overlaySurfaceVariants,
};
export type { FloatingSurfaceProps, FloatingItemProps, OverlayProps, OverlaySurfaceProps };
