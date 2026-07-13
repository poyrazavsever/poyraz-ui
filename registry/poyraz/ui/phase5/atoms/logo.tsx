import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const logoVariants = cva(
  "poyraz-logo group relative isolate inline-flex overflow-hidden outline-none transition-[opacity,transform] duration-[var(--poyraz-motion-duration-base)] ease-[var(--poyraz-motion-ease-out)] focus-visible:ring-[3px] focus-visible:ring-ring/25",
  {
    variants: {
      effect: {
        none: "",
        shine: "poyraz-logo-shine",
        "shine-loop": "poyraz-logo-shine poyraz-logo-shine-loop",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      interactive: {
        true: "cursor-pointer hover:shadow-md active:scale-[0.99]",
        false: "",
      },
    },
    defaultVariants: { effect: "shine", radius: "lg", interactive: true },
  },
);

export interface LogoProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof logoVariants> {
  href?: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

function Logo({
  alt = "Poyraz Logo",
  className,
  effect = "shine",
  height = 48,
  href,
  interactive = true,
  radius = "lg",
  src = "/logo/logo.jpeg",
  style,
  width = 48,
  ...props
}: LogoProps) {
  const sharedProps = {
    "data-effect": effect,
    "data-radius": radius,
    "data-slot": "logo",
    className: cn(logoVariants({ effect, radius, interactive }), className),
    style: { width, height, ...style },
  };

  const mark = (
    <img
      data-slot="logo-image"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="relative z-0 h-full w-full object-cover"
    />
  );

  if (href) {
    return (
      <a href={href} {...sharedProps} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {mark}
      </a>
    );
  }

  return (
    <span {...sharedProps} {...props}>
      {mark}
    </span>
  );
}
Logo.displayName = "Logo";

export { Logo, logoVariants };
