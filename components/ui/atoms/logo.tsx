import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** Link destination. Pass undefined or "" to render without a link wrapper. */
  href?: string;
  /** Image source URL */
  src?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Alt text for the logo image */
  alt?: string;
}

function Logo({
  className,
  href,
  src = "/logo/logo.jpeg",
  width = 48,
  height = 48,
  alt = "Poyraz Logo",
  ...props
}: LogoProps) {
  const wrapperClassName = cn(
    "group inline-block",
    "transition-opacity duration-200 ease-out",
    "cursor-pointer",
    "hover:opacity-80",
    className,
  );

  const inner = (
    <div className={cn("rounded-sm overflow-hidden")}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-sm"
      />
    </div>
  );

  // If href is provided, wrap in a Link; otherwise render a plain span
  if (href) {
    return (
      <a href={href} className={wrapperClassName} {...(props as any)}>
        {inner}
      </a>
    );
  }

  return (
    <span className={wrapperClassName} {...props}>
      {inner}
    </span>
  );
}

Logo.displayName = "Logo";

export { Logo };
