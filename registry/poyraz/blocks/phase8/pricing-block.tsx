import { Check } from "lucide-react";

import { Badge } from "@/components/ui/atoms/badge";
import { Button } from "@/components/ui/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card";

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "For personal projects.",
    features: ["3 projects", "Community support", "Core blocks"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For product teams.",
    features: ["Unlimited projects", "Priority support", "All registry blocks"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$99",
    description: "For organizations.",
    features: ["Everything in Pro", "SSO", "Design system review"],
  },
];

function PricingBlock({ plans = pricingPlans }: { plans?: PricingPlan[] }) {
  return (
    <section data-slot="pricing-block" className="@container/pricing px-3 py-10 @sm/pricing:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-8 max-w-xl text-center">
          <Badge variant="outline">Pricing</Badge>
          <h2 className="mt-3 text-2xl font-semibold">Plans that grow with your product</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear limits, source-owned components, no runtime lock-in.
          </p>
        </div>
        <div className="grid gap-4 @lg/pricing:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.featured ? "glass" : "default"}
              className={plan.featured ? "border-primary/30" : undefined}
            >
              <CardHeader>
                <div>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </div>
                {plan.featured && <Badge>Popular</Badge>}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-5 text-3xl font-semibold">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground"> / month</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-success-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.featured ? "default" : "outline"} className="w-full">
                  Choose {plan.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingBlock };
