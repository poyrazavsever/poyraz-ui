"use client";

import { BarChart3, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { ArticleCard } from "@/components/ui/blocks/card-templates/article-card";
import { ImageCard } from "@/components/ui/blocks/card-templates/image-card";
import { NewsCard } from "@/components/ui/blocks/card-templates/news-card";
import { PricingCard } from "@/components/ui/blocks/card-templates/pricing-card";
import { ProductCard } from "@/components/ui/blocks/card-templates/product-card";
import { StatsCard } from "@/components/ui/blocks/card-templates/stats-card";
import { TestimonialCard } from "@/components/ui/blocks/card-templates/testimonial-card";
import { AuthCardBlock } from "@/components/ui/blocks/phase8/auth-card-block";
import { BrandHeroBlock } from "@/components/ui/blocks/phase8/brand-hero-block";
import { DashboardShellBlock } from "@/components/ui/blocks/phase8/dashboard-shell-block";
import { BrandedFooterBlock, CenteredFooterBlock, CompactFooterBlock } from "@/components/ui/blocks/phase8/footer-blocks";
import { GlassAppShellBlock } from "@/components/ui/blocks/phase8/glass-app-shell-block";
import { MegaMenuBlock } from "@/components/ui/blocks/phase8/mega-menu-block";
import { MobileNavigationBlock } from "@/components/ui/blocks/phase8/mobile-navigation-block";
import { MobileSidebarBlock } from "@/components/ui/blocks/phase8/mobile-sidebar-block";
import { NavigationBlock } from "@/components/ui/blocks/phase8/navigation-block";
import { PricingBlock } from "@/components/ui/blocks/phase8/pricing-block";
import { SmartDashboardBlock } from "@/components/ui/blocks/phase8/smart-dashboard-block";

const image = "/images/image%201.png";

export function BlockDemo({ name }: { name: string }) {
  switch (name) {
    case "article-card":
      return <div className="mx-auto max-w-md"><ArticleCard image={image} category="Architecture" title="Designing a registry-first component system" excerpt="How source ownership changes the way teams compose and maintain interface primitives." author={{ name: "Poyraz Avsever" }} date="Jul 13" readTime="8 min" /></div>;
    case "auth-card-block": return <AuthCardBlock />;
    case "brand-hero-block": return <BrandHeroBlock />;
    case "dashboard-shell-block": return <DashboardShellBlock><SmartDashboardBlock /></DashboardShellBlock>;
    case "footer-blocks": return <div className="space-y-3"><CompactFooterBlock /><CenteredFooterBlock /><BrandedFooterBlock /></div>;
    case "glass-app-shell-block": return <GlassAppShellBlock><SmartDashboardBlock /></GlassAppShellBlock>;
    case "image-card": return <div className="mx-auto max-w-md"><ImageCard image={image} badge="Featured" title="Source-owned interfaces" description="A visual card block with semantic overlay content." /></div>;
    case "mega-menu-block": return <MegaMenuBlock />;
    case "mobile-navigation-block": return <div className="mx-auto max-w-md"><MobileNavigationBlock activeHref="#components" /></div>;
    case "mobile-sidebar-block": return <div className="flex min-h-40 items-center justify-center"><MobileSidebarBlock /></div>;
    case "navigation-block": return <NavigationBlock activeHref="#components" />;
    case "news-card": return <div className="mx-auto max-w-lg"><NewsCard image={image} category="Release" title="Poyraz UI v3 registry documentation is taking shape" date="July 13, 2026" /></div>;
    case "pricing-block": return <PricingBlock />;
    case "pricing-card": return <div className="mx-auto max-w-sm"><PricingCard title="Pro" price="$29" period="month" description="For product teams." features={["Unlimited projects", "All registry blocks", "Priority support"]} highlighted action={<Button className="w-full">Choose Pro</Button>} /></div>;
    case "product-card": return <div className="mx-auto max-w-sm"><ProductCard image={image} title="Poyraz UI component pack" price="$29" originalPrice="$49" rating={4.8} badge="New" action={<Button className="w-full"><ShoppingCart className="size-4" /> Add to cart</Button>} /></div>;
    case "smart-dashboard-block": return <SmartDashboardBlock />;
    case "stats-card": return <div className="mx-auto max-w-sm"><StatsCard label="Monthly active users" value="24,892" trend="up" trendValue="12.4% this month" icon={<BarChart3 className="size-4" />} /></div>;
    case "testimonial-card": return <div className="mx-auto max-w-md"><TestimonialCard quote="The registry model gave our team a clear component baseline without taking ownership away from us." author="Selin Kaya" role="Product designer" rating={5} /></div>;
    default: return null;
  }
}
