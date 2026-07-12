import * as React from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Card, CardContent, type CardProps } from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";

export interface StatsCardProps extends CardProps { icon?: React.ReactNode; label: string; value: string | number; trend?: "up" | "down" | "neutral"; trendValue?: string; chart?: React.ReactNode; }
const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(({ chart, className, icon, label, trend = "neutral", trendValue, value, ...props }, ref) => {
  const TrendIcon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  return <Card ref={ref} className={cn("group", className)} {...props}><CardContent className="p-5"><div className="flex items-start justify-between"><span className="text-xs font-medium text-muted-foreground">{label}</span>{icon && <span className="flex size-9 items-center justify-center rounded-lg bg-surface-subtle text-primary transition-transform group-hover:scale-105">{icon}</span>}</div><div className="mt-3 text-3xl font-bold tracking-tight">{value}</div>{trendValue && <div className={cn("mt-1.5 flex items-center gap-1 text-xs font-medium", trend === "up" && "text-success-icon", trend === "down" && "text-destructive", trend === "neutral" && "text-muted-foreground")}><TrendIcon className="size-3.5" />{trendValue}</div>}{chart && <div className="mt-4 h-14 text-primary">{chart}</div>}</CardContent></Card>;
});
StatsCard.displayName = "StatsCard";
export { StatsCard };
