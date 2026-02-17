import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const variantMap = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  list: "my-6 ml-6 list-disc [&>li]:mt-2",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variantMap;
  component?: React.ElementType;
  secondaryFont?: boolean;
}

export function Typography({
  className,
  variant = "p",
  component,
  secondaryFont = false,
  children,
  ...props
}: TypographyProps) {
  const Component =
    component ||
    (variant === "lead" ||
    variant === "large" ||
    variant === "muted" ||
    variant === "small"
      ? "p"
      : variant === "list"
        ? "ul"
        : variant) ||
    "p";

  return (
    <Component
      className={cn(
        variantMap[variant],
        secondaryFont && "font-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
