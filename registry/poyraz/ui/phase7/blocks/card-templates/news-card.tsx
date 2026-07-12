import * as React from "react";
import { Badge } from "@/components/ui/atoms/badge";
import { Card, type CardProps } from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";

export interface NewsCardProps extends Omit<CardProps, "title"> { image?: string; category?: string; title: string; date?: string; href?: string; }
const NewsCard = React.forwardRef<HTMLDivElement, NewsCardProps>(({ category, className, date, href, image, title, ...props }, ref) => {
  const content = <Card ref={ref} variant="interactive" className={cn("group h-fit self-start overflow-hidden", className)} {...props}><div className="flex min-h-28">{image && <div className="w-28 shrink-0 overflow-hidden border-r border-border"><img src={image} alt="" className="size-full object-cover transition-transform duration-300 group-hover:scale-105" /></div>}<div className="flex min-w-0 flex-col justify-center gap-2 p-4">{category && <Badge size="sm" variant="outline">{category}</Badge>}<h3 className="line-clamp-2 text-sm font-semibold leading-snug">{title}</h3>{date && <span className="text-xs text-muted-foreground">{date}</span>}</div></div></Card>;
  return href ? <a href={href} className="block text-inherit no-underline">{content}</a> : content;
});
NewsCard.displayName = "NewsCard";
export { NewsCard };
