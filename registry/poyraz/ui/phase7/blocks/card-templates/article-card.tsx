import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardTitle,
  type CardProps,
} from "@/components/ui/atoms/card";
import { Badge } from "@/components/ui/atoms/badge";
import { cn } from "@/lib/utils";

export interface ArticleCardProps extends Omit<CardProps, "title"> {
  image?: string;
  category?: string;
  title: string;
  excerpt?: string;
  author?: { name: string; avatar?: string };
  date?: string;
  readTime?: string;
  href?: string;
}

const ArticleCard = React.forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ author, category, className, date, excerpt, href, image, readTime, title, ...props }, ref) => {
    const content = (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("group overflow-hidden", className)}
        {...props}
      >
        {image && (
          <CardImage>
            <img
              src={image}
              alt=""
              className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </CardImage>
        )}
        <CardHeader>
          <CardHeading>
            {category && (
              <Badge size="sm" variant="outline" className="mb-1">
                {category}
              </Badge>
            )}
            <CardTitle>{title}</CardTitle>
            {excerpt && <CardDescription>{excerpt}</CardDescription>}
          </CardHeading>
        </CardHeader>
        {(author || date || readTime) && (
          <CardFooter className="text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-2">
              {author?.avatar && (
                <img src={author.avatar} alt="" className="size-6 rounded-full object-cover" />
              )}
              {author && <span className="font-medium text-foreground">{author.name}</span>}
              {date && <span>{date}</span>}
              {readTime && <span>{readTime}</span>}
            </div>
          </CardFooter>
        )}
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
ArticleCard.displayName = "ArticleCard";
export { ArticleCard };
