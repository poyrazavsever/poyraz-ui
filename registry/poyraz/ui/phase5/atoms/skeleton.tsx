import * as React from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-poyraz-pulse rounded-lg bg-accent/80", className)}
      {...props}
    />
  );
}

export { Skeleton };
