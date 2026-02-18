import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse",
        "rounded-none shadow-none",
        "border-2 border-dashed border-slate-200",
        "bg-slate-100",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
