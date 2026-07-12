import * as React from "react";
import { Badge } from "@/components/ui/atoms/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardTitle,
  type CardProps,
} from "@/components/ui/atoms/card";
import { StarRating } from "@/components/ui/blocks/card-templates/star-rating";
import { cn } from "@/lib/utils";

export interface ProductCardProps extends Omit<CardProps, "title"> {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  badge?: string;
  action?: React.ReactNode;
  href?: string;
}
const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    { action, badge, className, href, image, originalPrice, price, rating, title, ...props },
    ref,
  ) => {
    const content = (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("group overflow-hidden", className)}
        {...props}
      >
        <CardImage className="relative">
          <img
            src={image}
            alt=""
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {badge && <Badge className="absolute right-2 top-2">{badge}</Badge>}
        </CardImage>
        <CardHeader>
          <CardHeading>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            {rating != null && <StarRating rating={rating} />}
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">{price}</span>
              {originalPrice && (
                <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
              )}
            </div>
          </CardHeading>
        </CardHeader>
        {action && <CardFooter>{action}</CardFooter>}
      </Card>
    );
    return href ? (
      <a href={href} className="block text-inherit no-underline">
        {content}
      </a>
    ) : (
      content
    );
  },
);
ProductCard.displayName = "ProductCard";
export { ProductCard };
