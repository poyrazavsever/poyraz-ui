"use client";

import { Button, Typography, Badge, Separator } from "poyraz-ui/atoms";
import { PricingCard } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function PricingPreview() {
  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <Badge variant="outline" className="text-[10px]">
              Pricing
            </Badge>
            <Typography variant="h2">
              Simple, transparent <span className="text-red-600">pricing</span>
            </Typography>
            <Typography
              variant="p"
              className="text-sm text-slate-500 max-w-md mx-auto"
            >
              No hidden fees. No surprises. Pick a plan that fits your needs and
              scale as you grow.
            </Typography>
          </div>

          {/* Plans */}
          <div className="grid sm:grid-cols-3 gap-4">
            <PricingCard
              title="Starter"
              price="$0"
              period="month"
              description="For individuals and side projects."
              features={[
                "3 projects",
                "1 GB storage",
                "Community support",
                "Basic analytics",
              ]}
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
              description="For growing teams and products."
              features={[
                "Unlimited projects",
                "50 GB storage",
                "Priority support",
                "Advanced analytics",
                "API access",
                "Custom domains",
              ]}
              highlighted
              action={<Button className="w-full">Get Started</Button>}
            />
            <PricingCard
              title="Enterprise"
              price="$99"
              period="month"
              description="For large organizations."
              features={[
                "Everything in Pro",
                "Unlimited storage",
                "Dedicated support",
                "SSO / SAML",
                "Custom SLA",
                "Audit logs",
              ]}
              action={
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              }
            />
          </div>

          {/* FAQ mini */}
          <div className="mt-10 pt-8 border-t border-slate-200 text-center">
            <Typography variant="small" className="text-slate-400">
              All plans include 14-day free trial · No credit card required ·
              Cancel anytime
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}

const pricingCode = `import { Button, Typography, Badge } from "poyraz-ui/atoms";
import { PricingCard } from "poyraz-ui/molecules";

export function PricingSection() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <Badge variant="outline" className="text-[10px]">Pricing</Badge>
          <Typography variant="h2">
            Simple, transparent <span className="text-red-600">pricing</span>
          </Typography>
          <Typography variant="p" className="text-sm text-slate-500">
            No hidden fees. Pick a plan that fits your needs.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <PricingCard
            title="Starter"
            price="$0"
            period="month"
            description="For side projects."
            features={["3 projects", "1 GB storage", "Community support"]}
            action={<Button variant="outline" className="w-full">Start Free</Button>}
          />
          <PricingCard
            title="Pro"
            price="$29"
            period="month"
            description="For growing teams."
            features={["Unlimited projects", "Priority support", "API access"]}
            highlighted
            action={<Button className="w-full">Get Started</Button>}
          />
          <PricingCard
            title="Enterprise"
            price="$99"
            period="month"
            description="For organizations."
            features={["Everything in Pro", "SSO / SAML", "Custom SLA"]}
            action={<Button variant="outline" className="w-full">Contact Sales</Button>}
          />
        </div>
      </div>
    </section>
  );
}`;

export default function PricingTemplatePage() {
  return (
    <ComponentPage
      name="Pricing"
      description="Pricing page template with 3-tier plan comparison. Uses PricingCard molecules, Button atoms, and Typography for a clean pricing layout."
      importCode={`import { Button, Typography, Badge } from "poyraz-ui/atoms";
import { PricingCard } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Three-Tier Pricing"
        description="Starter / Pro / Enterprise layout. The highlighted plan stands out with a red left border."
        code={pricingCode}
      >
        <PricingPreview />
      </DemoSection>
    </ComponentPage>
  );
}
