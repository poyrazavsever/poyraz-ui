"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  Typography,
} from "poyraz-ui/atoms";
import {
  ArticleCard,
  ImageCard,
  NewsCard,
  StatsCard,
  TestimonialCard,
  PricingCard,
  ProductCard,
} from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function CardPage() {
  return (
    <ComponentPage
      name="Card"
      description="Container component with 5 variants: default, bordered, elevated, highlight, and ghost. The building block for content sections."
      importCode={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Default"
        description="Standard dashed-border card."
        code={`<Card>
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>A brutalist design system</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">View Details</Button>
  </CardFooter>
</Card>`}
      >
        <div className="max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A brutalist design system</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">Card content goes here.</Typography>
            </CardContent>
            <CardFooter>
              <Button size="sm">View Details</Button>
            </CardFooter>
          </Card>
        </div>
      </DemoSection>

      <DemoSection
        title="Variants"
        description="All 4 non-default card variants."
        code={`<Card variant="bordered">...</Card>
<Card variant="elevated">...</Card>
<Card variant="highlight">...</Card>
<Card variant="ghost">...</Card>`}
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered</CardTitle>
              <CardDescription>High contrast border</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Bold slate-900 border for stronger visual presence.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>Red offset shadow</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Brutalist offset shadow with a red box behind.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="highlight">
            <CardHeader>
              <CardTitle>Highlight</CardTitle>
              <CardDescription>Left red accent</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Red left border stripe draws attention to important content.
              </Typography>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost</CardTitle>
              <CardDescription>No border</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Transparent background with no borders.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </DemoSection>

      <DemoSection
        title="Interactive"
        description="Clickable card with subtle hover lift. Use for links and navigable items."
        code={`<Card variant="interactive">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see the lift effect</CardDescription>
  </CardHeader>
</Card>`}
      >
        <div className="max-w-sm">
          <Card variant="interactive">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover to see the lift effect</CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="small">
                Subtle upward translate and border darkening on hover.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </DemoSection>

      {/* ── Card Templates ─────────────────────────────────── */}

      <DemoSection
        title="ArticleCard"
        description="Blog/article card with image, category, title, excerpt, and author info."
        code={`import { ArticleCard } from "poyraz-ui/molecules";

<ArticleCard
  image="https://picsum.photos/seed/article/600/340"
  category="React"
  title="Building Minimal Design Systems"
  excerpt="A deep dive into creating clean, composable UI components with Tailwind CSS and Radix primitives."
  author={{ name: "Poyraz Avsever", avatar: "https://i.pravatar.cc/40?img=3" }}
  date="Mar 2026"
  readTime="4 min"
  href="#"
/>`}
      >
        <div className="max-w-sm">
          <ArticleCard
            image="https://picsum.photos/seed/article/600/340"
            category="React"
            title="Building Minimal Design Systems"
            excerpt="A deep dive into creating clean, composable UI components with Tailwind CSS and Radix primitives."
            author={{
              name: "Poyraz Avsever",
              avatar: "https://i.pravatar.cc/40?img=3",
            }}
            date="Mar 2026"
            readTime="4 min"
            href="#"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="ImageCard"
        description="Image-dominant card with gradient overlay and text. Perfect for galleries and featured content."
        code={`import { ImageCard } from "poyraz-ui/molecules";

<ImageCard
  image="https://picsum.photos/seed/img/600/450"
  title="Sunset Over the Mountains"
  description="Captured during a hiking trip in the Swiss Alps."
  badge="Featured"
  href="#"
/>`}
      >
        <div className="max-w-xs">
          <ImageCard
            image="https://picsum.photos/seed/img/600/450"
            title="Sunset Over the Mountains"
            description="Captured during a hiking trip in the Swiss Alps."
            badge="Featured"
            href="#"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="NewsCard"
        description="Compact horizontal news card. Ideal for news feeds and list layouts."
        code={`import { NewsCard } from "poyraz-ui/molecules";

<NewsCard
  image="https://picsum.photos/seed/news/200/200"
  category="Technology"
  title="Next.js 16 Released with Major Performance Improvements"
  date="Mar 6, 2026"
  href="#"
/>`}
      >
        <div className="max-w-sm space-y-2">
          <NewsCard
            image="https://picsum.photos/seed/news1/200/200"
            category="Technology"
            title="Next.js 16 Released with Major Performance Improvements"
            date="Mar 6, 2026"
            href="#"
          />
          <NewsCard
            image="https://picsum.photos/seed/news2/200/200"
            category="Design"
            title="Minimalism in Modern UI: Less Is Truly More"
            date="Mar 5, 2026"
            href="#"
          />
          <NewsCard
            category="Open Source"
            title="Poyraz UI v1.0 Launched — A Minimal React Component Library"
            date="Mar 4, 2026"
            href="#"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="StatsCard"
        description="Metric/KPI display card with optional icon and trend indicator."
        code={`import { StatsCard } from "poyraz-ui/molecules";

<StatsCard label="Revenue" value="$12,345" trend="up" trendValue="+12.5%" />
<StatsCard label="Users" value="1,234" trend="down" trendValue="-3.2%" />
<StatsCard label="Orders" value="89" trend="neutral" trendValue="0%" />`}
      >
        <div className="grid sm:grid-cols-3 gap-3">
          <StatsCard
            label="Revenue"
            value="$12,345"
            trend="up"
            trendValue="+12.5%"
          />
          <StatsCard
            label="Users"
            value="1,234"
            trend="down"
            trendValue="-3.2%"
          />
          <StatsCard
            label="Orders"
            value="89"
            trend="neutral"
            trendValue="0%"
          />
        </div>
      </DemoSection>

      <DemoSection
        title="TestimonialCard"
        description="Customer testimonial card with quote, author info, and optional rating."
        code={`import { TestimonialCard } from "poyraz-ui/molecules";

<TestimonialCard
  quote="Poyraz UI's minimal approach saved us weeks of design work. The components are clean, accessible, and easy to customize."
  author="Ahmet Y."
  role="Frontend Lead at TechCo"
  avatar="https://i.pravatar.cc/40?img=12"
  rating={5}
/>`}
      >
        <div className="max-w-sm">
          <TestimonialCard
            quote="Poyraz UI's minimal approach saved us weeks of design work. The components are clean, accessible, and easy to customize."
            author="Ahmet Y."
            role="Frontend Lead at TechCo"
            avatar="https://i.pravatar.cc/40?img=12"
            rating={5}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="PricingCard"
        description="Pricing tier card with features list and CTA slot. Use highlighted for the recommended plan."
        code={`import { PricingCard } from "poyraz-ui/molecules";
import { Button } from "poyraz-ui/atoms";

<PricingCard
  title="Pro"
  price="$29"
  period="month"
  description="Everything you need to scale."
  features={["Unlimited projects", "Priority support", "Advanced analytics", "API access"]}
  highlighted
  action={<Button className="w-full">Get Started</Button>}
/>`}
      >
        <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
          <PricingCard
            title="Free"
            price="$0"
            period="month"
            description="Great for getting started."
            features={["3 projects", "Community support", "Basic analytics"]}
            action={
              <Button variant="outline" className="w-full">
                Start Free
              </Button>
            }
          />
          <PricingCard
            title="Pro"
            price="$29"
            period="month"
            description="Everything you need to scale."
            features={[
              "Unlimited projects",
              "Priority support",
              "Advanced analytics",
              "API access",
            ]}
            highlighted
            action={<Button className="w-full">Get Started</Button>}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="ProductCard"
        description="E-commerce product card with image, price, rating, and action slot."
        code={`import { ProductCard } from "poyraz-ui/molecules";
import { Button } from "poyraz-ui/atoms";

<ProductCard
  image="https://picsum.photos/seed/product/400/400"
  title="Minimal Desk Lamp"
  price="$49"
  originalPrice="$79"
  rating={4}
  badge="Sale"
  action={<Button size="sm" className="w-full">Add to Cart</Button>}
/>`}
      >
        <div className="grid sm:grid-cols-3 gap-4">
          <ProductCard
            image="https://picsum.photos/seed/prod1/400/400"
            title="Minimal Desk Lamp"
            price="$49"
            originalPrice="$79"
            rating={4}
            badge="Sale"
            action={
              <Button size="sm" className="w-full">
                Add to Cart
              </Button>
            }
          />
          <ProductCard
            image="https://picsum.photos/seed/prod2/400/400"
            title="Wireless Keyboard"
            price="$129"
            rating={5}
            badge="New"
            action={
              <Button size="sm" className="w-full">
                Add to Cart
              </Button>
            }
          />
          <ProductCard
            image="https://picsum.photos/seed/prod3/400/400"
            title="USB-C Hub Pro"
            price="$89"
            rating={4}
            action={
              <Button size="sm" variant="outline" className="w-full">
                View
              </Button>
            }
          />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
