import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  max?: number;
  label?: string;
}

function StarRating({ className, label, max = 5, rating, ...props }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5 text-warning-icon", className)} aria-label={label ?? `${rating} out of ${max} stars`} {...props}>
      {Array.from({ length: max }, (_, index) => <Star key={index} className={cn("size-3.5", index < Math.round(rating) ? "fill-current" : "fill-transparent text-border")} aria-hidden="true" />)}
    </div>
  );
}

export { StarRating };
export type { StarRatingProps };
