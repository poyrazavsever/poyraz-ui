import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/ui/atoms/typography";

export interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  /** Link destination. Pass undefined or "" to render without a link wrapper. */
  href?: string;
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
  width = 48,
  height = 48,
  alt = "Poyraz Logo",
  ...props
}: LogoProps) {
  const wrapperClassName = cn(
    // Wrapper — relative for the red box offset
    "group relative inline-block",
    "transition-all duration-300 ease-out",
    "cursor-pointer",
    className,
  );

  const inner = (
    <>
      {/* Red box behind — the brutalist "shadow" */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-red-600",
          "border-2 border-dashed border-red-900",
          "rounded-none",
          // Offset to bottom-right
          "translate-x-1.5 translate-y-1.5",
          // On hover, the red box shifts further
          "transition-transform duration-300 ease-out",
          "group-hover:translate-x-2.5 group-hover:translate-y-2.5",
        )}
        aria-hidden="true"
      />

      {/* Logo image — sits on top */}
      <div
        className={cn(
          "relative z-10",
          "border-2 border-dashed border-slate-900",
          "rounded-none shadow-none",
          "overflow-hidden",
          "bg-white",
          // On hover, the image lifts slightly (opposite direction of red box)
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5",
          // Active press
          "group-active:translate-x-0.5 group-active:translate-y-0.5",
          "group-active:duration-75",
        )}
      >
        <Image
          src="/logo/logo.jpeg"
          alt={alt}
          width={width}
          height={height}
          className="object-cover rounded-none"
        />
      </div>
    </>
  );

  // If href is provided, wrap in a Link; otherwise render a plain span
  if (href) {
    return (
      <Link href={href} className={wrapperClassName} {...(props as any)}>
        {inner}
      </Link>
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
