import * as React from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/atoms/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardHeading, CardTitle, type CardProps } from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";

export interface PricingCardProps extends Omit<CardProps, "title"> { name?: string; title?: string; price: string; period?: string; description?: string; features: string[]; action?: React.ReactNode; popular?: boolean; highlighted?: boolean; }
const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(({ action, className, description, features, highlighted, name, period, popular, price, title, ...props }, ref) => {
  const featured = popular ?? highlighted ?? false;
  return <Card ref={ref} variant={featured ? "interactive" : "default"} className={cn(featured && "border-primary/35 shadow-md", className)} {...props}><CardHeader><CardHeading><div className="flex items-center gap-2"><CardTitle>{name ?? title ?? "Plan"}</CardTitle>{featured && <Badge>Popular</Badge>}</div><div className="mt-3 flex items-baseline gap-1"><span className="text-3xl font-bold">{price}</span>{period && <span className="text-xs text-muted-foreground">/{period}</span>}</div>{description && <CardDescription>{description}</CardDescription>}</CardHeading></CardHeader><CardContent><ul className="space-y-2.5">{features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-success-icon" />{feature}</li>)}</ul></CardContent>{action && <CardFooter>{action}</CardFooter>}</Card>;
});
PricingCard.displayName = "PricingCard";
export { PricingCard };
