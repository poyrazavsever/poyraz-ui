import * as React from "react";
import { Card, CardContent, type CardProps } from "@/components/ui/atoms/card";
import { StarRating } from "@/components/ui/blocks/card-templates/star-rating";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps extends CardProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}
const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ author, avatar, className, quote, rating, role, ...props }, ref) => (
    <Card ref={ref} className={cn("group h-full", className)} {...props}>
      <CardContent className="flex h-full flex-1 flex-col p-5">
        <span className="font-secondary text-4xl leading-none text-primary">“</span>
        <blockquote className="mt-1 text-sm leading-relaxed text-secondary-foreground">
          {quote}
        </blockquote>
        {rating != null && <StarRating rating={rating} className="mt-3" />}
        <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
          {avatar && <img src={avatar} alt="" className="size-9 rounded-full object-cover" />}
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{author}</div>
            {role && <div className="truncate text-xs text-muted-foreground">{role}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  ),
);
TestimonialCard.displayName = "TestimonialCard";
export { TestimonialCard };
