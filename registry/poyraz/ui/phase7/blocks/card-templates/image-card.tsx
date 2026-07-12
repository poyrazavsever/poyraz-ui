import * as React from "react";
import { Badge } from "@/components/ui/atoms/badge";
import { Card, type CardProps } from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";

export interface ImageCardProps extends Omit<CardProps, "title"> { image: string; title: string; description?: string; badge?: string; href?: string; }
const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(({ badge, className, description, href, image, title, ...props }, ref) => {
  const content = <Card ref={ref} variant="interactive" className={cn("group relative aspect-[4/3] overflow-hidden", className)} {...props}>
    <img src={image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-[var(--poyraz-motion-ease-out)] group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/20 to-transparent transition-opacity group-hover:opacity-90" />
    {badge && <Badge className="absolute left-3 top-3 z-10">{badge}</Badge>}
    <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1 p-4 text-primary-foreground transition-transform duration-300 group-hover:translate-y-0"><h3 className="font-semibold leading-tight">{title}</h3>{description && <p className="mt-1 line-clamp-2 text-xs opacity-80">{description}</p>}</div>
  </Card>;
  return href ? <a href={href} className="block text-inherit no-underline">{content}</a> : content;
});
ImageCard.displayName = "ImageCard";
export { ImageCard };
