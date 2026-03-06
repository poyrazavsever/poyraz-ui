import * as React from "react";
import { cn } from "@/components/ui/atoms/typography";
import {
  Card,
  CardImage,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/atoms/card";

// ─── Shared: Star Rating ────────────────────────────────────────────────────

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={cn(
            "h-3 w-3",
            i < Math.round(rating) ? "text-yellow-500" : "text-slate-200",
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── ArticleCard ────────────────────────────────────────────────────────────

export interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  (
    {
      className,
      image,
      category,
      title,
      excerpt,
      author,
      date,
      readTime,
      href,
      ...props
    },
    ref,
  ) => {
    const card = (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        {image && (
          <CardImage>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </CardImage>
        )}
        <CardHeader>
          {category && (
            <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600">
              {category}
            </span>
          )}
          <CardTitle>{title}</CardTitle>
          {excerpt && <CardDescription>{excerpt}</CardDescription>}
        </CardHeader>
        {(author || date || readTime) && (
          <CardFooter>
            <div className="flex items-center gap-2 w-full text-xs text-slate-500">
              {author?.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-5 w-5 rounded-full object-cover"
                />
              )}
              {author && (
                <span className="font-medium text-slate-700">
                  {author.name}
                </span>
              )}
              {author && (date || readTime) && <span>·</span>}
              {date && <span>{date}</span>}
              {readTime && (
                <>
                  {date && <span>·</span>}
                  <span>{readTime}</span>
                </>
              )}
            </div>
          </CardFooter>
        )}
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block no-underline text-inherit">
          {card}
        </a>
      );
    }
    return card;
  },
);
ArticleCard.displayName = "ArticleCard";

// ─── ImageCard ──────────────────────────────────────────────────────────────

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description?: string;
  badge?: string;
  href?: string;
}

const ImageCard = React.forwardRef<HTMLDivElement, ImageCardProps>(
  ({ className, image, title, description, badge, href, ...props }, ref) => {
    const card = (
      <Card
        ref={ref}
        className={cn(
          "group/img relative overflow-hidden border-slate-300 cursor-pointer aspect-[4/3]",
          className,
        )}
        {...props}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />
        {badge && (
          <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-sm">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="text-sm font-bold text-white leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-white/70 mt-1 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block no-underline text-inherit">
          {card}
        </a>
      );
    }
    return card;
  },
);
ImageCard.displayName = "ImageCard";

// ─── NewsCard ───────────────────────────────────────────────────────────────

export interface NewsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  category?: string;
  title: string;
  date?: string;
  href?: string;
}

const NewsCard = React.forwardRef<HTMLDivElement, NewsCardProps>(
  ({ className, image, category, title, date, href, ...props }, ref) => {
    const card = (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <div className="flex">
          {image && (
            <div className="relative w-24 min-h-[80px] shrink-0 border-r border-slate-300">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-col justify-center gap-1 p-3 min-w-0">
            {category && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-red-600">
                {category}
              </span>
            )}
            <h3 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
              {title}
            </h3>
            {date && <span className="text-[10px] text-slate-400">{date}</span>}
          </div>
        </div>
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block no-underline text-inherit">
          {card}
        </a>
      );
    }
    return card;
  },
);
NewsCard.displayName = "NewsCard";

// ─── StatsCard ──────────────────────────────────────────────────────────────

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, icon, label, value, trend, trendValue, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("bg-white border border-slate-300", className)}
      {...props}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </span>
          {icon && <span className="text-slate-400">{icon}</span>}
        </div>
        <div className="text-xl font-bold text-slate-900 tracking-tight">
          {value}
        </div>
        {trend && trendValue && (
          <div
            className={cn(
              "flex items-center gap-1 mt-1.5 text-[11px] font-medium",
              trend === "up" && "text-green-600",
              trend === "down" && "text-red-600",
              trend === "neutral" && "text-slate-400",
            )}
          >
            {trend === "up" && (
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            )}
            {trend === "down" && (
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            )}
            {trend === "neutral" && <span>—</span>}
            <span>{trendValue}</span>
          </div>
        )}
      </CardContent>
    </Card>
  ),
);
StatsCard.displayName = "StatsCard";

// ─── TestimonialCard ────────────────────────────────────────────────────────

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, quote, author, role, avatar, rating, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn("bg-white border border-slate-300", className)}
      {...props}
    >
      <CardContent className="p-4">
        {/* Decorative quote mark */}
        <span className="block text-2xl leading-none text-red-600 font-secondary mb-2">
          &ldquo;
        </span>
        <p className="text-xs text-slate-700 leading-relaxed mb-3">{quote}</p>
        <div className="border-t border-slate-200 pt-3 flex items-center gap-2.5">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="h-7 w-7 rounded-full object-cover"
            />
          )}
          <div className="min-w-0">
            <div className="text-xs font-semibold text-slate-900 truncate">
              {author}
            </div>
            {role && (
              <div className="text-[10px] text-slate-400 truncate">{role}</div>
            )}
          </div>
          {rating != null && (
            <div className="ml-auto">
              <StarRating rating={rating} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  ),
);
TestimonialCard.displayName = "TestimonialCard";

// ─── PricingCard ────────────────────────────────────────────────────────────

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  /** Pass a <Button> or any CTA element */
  action?: React.ReactNode;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      price,
      period,
      description,
      features,
      highlighted,
      action,
      ...props
    },
    ref,
  ) => (
    <Card
      ref={ref}
      variant={highlighted ? "highlight" : "default"}
      className={cn(highlighted && "border-red-600 border-l-4", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">
            {price}
          </span>
          {period && <span className="text-xs text-slate-400">/{period}</span>}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-slate-700"
            >
              <svg
                className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      {action && <CardFooter>{action}</CardFooter>}
    </Card>
  ),
);
PricingCard.displayName = "PricingCard";

// ─── ProductCard ────────────────────────────────────────────────────────────

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  badge?: string;
  /** Pass a <Button> or any action element */
  action?: React.ReactNode;
  href?: string;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      image,
      title,
      price,
      originalPrice,
      rating,
      badge,
      action,
      href,
      ...props
    },
    ref,
  ) => {
    const card = (
      <Card
        ref={ref}
        variant="interactive"
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <CardImage className="relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {badge && (
            <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded-sm">
              {badge}
            </span>
          )}
        </CardImage>
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {rating != null && <StarRating rating={rating} />}
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-slate-900">{price}</span>
            {originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </CardHeader>
        {action && <CardFooter>{action}</CardFooter>}
      </Card>
    );

    if (href) {
      return (
        <a href={href} className="block no-underline text-inherit">
          {card}
        </a>
      );
    }
    return card;
  },
);
ProductCard.displayName = "ProductCard";

// ─── Exports ────────────────────────────────────────────────────────────────

export {
  ArticleCard,
  ImageCard,
  NewsCard,
  StatsCard,
  TestimonialCard,
  PricingCard,
  ProductCard,
};
