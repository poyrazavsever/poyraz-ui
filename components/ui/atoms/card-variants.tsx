"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardTitle,
  type CardProps,
} from "@/components/ui/atoms/card";
import { cn } from "@/lib/utils";

type CompositionProps = CardProps;

interface BasicContentCardProps extends Omit<CompositionProps, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

function BasicContentCard({ action, children, description, title, ...props }: BasicContentCardProps) {
  return (
    <Card data-slot="basic-content-card" {...props}>
      <CardHeader>
        <CardHeading>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeading>
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}

interface ImageContentCardProps extends Omit<CompositionProps, "title"> {
  src: string;
  alt: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  category?: React.ReactNode;
  action?: React.ReactNode;
}

function ImageContentCard({ action, alt, category, description, src, title, ...props }: ImageContentCardProps) {
  return (
    <Card data-slot="image-content-card" variant="interactive" className="group" {...props}>
      <CardImage>
        <img src={src} alt={alt} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </CardImage>
      <CardHeader>
        <CardHeading>
          {category && <Badge size="sm" className="mb-1 w-fit">{category}</Badge>}
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeading>
      </CardHeader>
      {action && <CardFooter>{action}</CardFooter>}
    </Card>
  );
}

interface HorizontalCardProps extends ImageContentCardProps {
  imageClassName?: string;
}

function HorizontalCard({ action, alt, category, description, imageClassName, src, title, ...props }: HorizontalCardProps) {
  return (
    <Card data-slot="horizontal-card" className="grid overflow-hidden sm:grid-cols-[minmax(9rem,38%)_1fr]" {...props}>
      <div data-slot="horizontal-card-image" className={cn("min-h-40 overflow-hidden border-b border-border sm:border-b-0 sm:border-r", imageClassName)}>
        <img src={src} alt={alt} className="size-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-col">
        <CardHeader>
          <CardHeading>
            {category && <Badge size="sm" className="mb-1 w-fit">{category}</Badge>}
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeading>
        </CardHeader>
        {action && <CardFooter>{action}</CardFooter>}
      </div>
    </Card>
  );
}

interface ProfileCardProps extends Omit<CompositionProps, "title" | "role"> {
  avatar: string;
  name: React.ReactNode;
  role?: React.ReactNode;
  bio?: React.ReactNode;
  socialActions?: React.ReactNode;
}

function ProfileCard({ avatar, bio, name, role, socialActions, ...props }: ProfileCardProps) {
  return (
    <Card data-slot="profile-card" {...props}>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <img src={avatar} alt="" className="size-20 rounded-full border-4 border-surface object-cover shadow-md" />
        <CardTitle className="mt-4 max-w-full break-words text-center">{name}</CardTitle>
        {role && <p className="mt-1 text-sm text-primary">{role}</p>}
        {bio && <CardDescription className="mt-3">{bio}</CardDescription>}
        {socialActions && <div data-slot="profile-card-actions" className="mt-4 flex items-center gap-2">{socialActions}</div>}
      </CardContent>
    </Card>
  );
}

interface StatisticCardProps extends CompositionProps {
  label: React.ReactNode;
  value: React.ReactNode;
  change?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  chart?: React.ReactNode;
  icon?: React.ReactNode;
}

function StatisticCard({ chart, change, icon, label, trend = "neutral", value, ...props }: StatisticCardProps) {
  return (
    <Card data-slot="statistic-card" {...props}>
      <CardHeader>
        <CardHeading><CardDescription>{label}</CardDescription></CardHeading>
        {icon && <CardAction>{icon}</CardAction>}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight text-foreground">{value}</div>
        {change && <div className={cn("mt-1 text-xs font-medium", trend === "up" && "text-success-icon", trend === "down" && "text-destructive", trend === "neutral" && "text-muted-foreground")}>{change}</div>}
        {chart && <div data-slot="statistic-card-chart" className="mt-4 h-16 text-primary">{chart}</div>}
      </CardContent>
    </Card>
  );
}

interface PricingPlanCardProps extends Omit<CompositionProps, "title"> {
  name: React.ReactNode;
  price: React.ReactNode;
  period?: React.ReactNode;
  description?: React.ReactNode;
  features: React.ReactNode[];
  action: React.ReactNode;
  popular?: boolean;
}

function PricingPlanCard({ action, description, features, name, period, popular, price, ...props }: PricingPlanCardProps) {
  return (
    <Card data-slot="pricing-plan-card" variant={popular ? "interactive" : "default"} className={cn(popular && "border-primary/50 shadow-md")} {...props}>
      <CardHeader>
        <CardHeading>
          <CardTitle>{name}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeading>
        {popular && <CardAction><Badge>Popular</Badge></CardAction>}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1"><span className="text-3xl font-bold">{price}</span>{period && <span className="text-sm text-muted-foreground">/{period}</span>}</div>
        <ul className="mt-5 space-y-2.5 text-sm">{features.map((feature, index) => <li key={index} className="flex gap-2 before:text-primary before:content-['✓']">{feature}</li>)}</ul>
      </CardContent>
      <CardFooter>{action}</CardFooter>
    </Card>
  );
}

interface FeatureCardProps extends Omit<CompositionProps, "title"> {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  action?: React.ReactNode;
}

function FeatureCard({ action, description, icon, title, ...props }: FeatureCardProps) {
  return (
    <Card data-slot="feature-card" variant="soft" {...props}>
      <CardContent className="p-5">
        <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary-muted text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
        {action && <div className="mt-4">{action}</div>}
      </CardContent>
    </Card>
  );
}

function GlassCard({ className, ...props }: CompositionProps) {
  return <Card data-slot="glass-card" variant="glass" className={cn("poyraz-glass", className)} {...props} />;
}

interface InteractiveCardProps extends CompositionProps {
  actions?: React.ReactNode;
}

function InteractiveCard({ actions, children, className, ...props }: InteractiveCardProps) {
  return (
    <Card data-slot="interactive-card" variant="interactive" className={cn("group", className)} {...props}>
      {children}
      {actions && <div data-slot="interactive-card-actions" className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">{actions}</div>}
    </Card>
  );
}

interface ExpandableCardProps extends CompositionProps {
  summary: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  expandLabel?: string;
}

function ExpandableCard({ children, defaultOpen = false, expandLabel = "Show details", onOpenChange, open, summary, ...props }: ExpandableCardProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const setOpen = (next: boolean) => {
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <Card data-slot="expandable-card" data-state={isOpen ? "open" : "closed"} {...props}>
      <CardContent className="p-5">{summary}</CardContent>
      <div
        data-slot="expandable-card-content"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-[var(--poyraz-motion-duration-slow)] ease-[var(--poyraz-motion-ease-out)] motion-reduce:duration-[1ms]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border px-5 py-4 text-sm">{children}</div>
        </div>
      </div>
      <CardFooter>
        <Button variant="ghost" size="sm" onClick={() => setOpen(!isOpen)} aria-expanded={isOpen} className="ml-auto">{expandLabel}<ChevronDown className={cn("transition-transform", isOpen && "rotate-180")} /></Button>
      </CardFooter>
    </Card>
  );
}

export {
  BasicContentCard,
  ExpandableCard,
  FeatureCard,
  GlassCard,
  HorizontalCard,
  ImageContentCard,
  InteractiveCard,
  PricingPlanCard,
  ProfileCard,
  StatisticCard,
};
