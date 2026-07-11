import type { ReactNode } from "react";

import tokenSource from "@/src/theme-tokens.json";

type Scale = Record<string, string>;

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-poyraz-title font-semibold">{title}</h2>
        <p className="max-w-3xl text-poyraz-body-sm text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

function Palette({
  title,
  variablePrefix,
  scale,
}: {
  title: string;
  variablePrefix: string;
  scale: Scale;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-6">
        {Object.entries(scale).map(([step, value]) => (
          <div
            key={step}
            className="overflow-hidden rounded-sm border border-border bg-surface"
          >
            <div
              className="h-16 border-b border-border"
              style={{
                backgroundColor: `var(--poyraz-${variablePrefix}-${step})`,
              }}
            />
            <div className="space-y-0.5 px-2.5 py-2 text-poyraz-caption">
              <div className="font-semibold">{step}</div>
              <code className="text-muted-foreground">{value}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const semanticColors = [
  ["Canvas", "background", "foreground"],
  ["Surface", "surface", "foreground"],
  ["Subtle", "surface-subtle", "foreground"],
  ["Raised", "surface-raised", "foreground"],
  ["Elevated", "surface-elevated", "foreground"],
  ["Primary", "primary", "primary-foreground"],
  ["Secondary", "secondary", "secondary-foreground"],
  ["Muted", "muted", "muted-foreground"],
  ["Accent", "accent", "accent-foreground"],
  ["Disabled", "disabled", "disabled-foreground"],
  ["Invalid", "invalid", "invalid-foreground"],
] as const;

const statusColors = [
  ["Information", "info", "info-foreground", "info-border"],
  ["Success", "success", "success-foreground", "success-border"],
  ["Warning", "warning", "warning-foreground", "warning-border"],
  [
    "Destructive",
    "destructive-muted",
    "destructive-muted-foreground",
    "invalid-border",
  ],
] as const;

const typography = Object.entries(tokenSource.shared.typography) as Array<
  [
    string,
    { size: string; lineHeight: string; letterSpacing: string },
  ]
>;

export default function ThemePage() {
  return (
    <div className="space-y-12 pb-16">
      <header className="space-y-3">
        <p className="text-poyraz-caption font-semibold uppercase tracking-[0.16em] text-primary">
          Foundation
        </p>
        <h1 className="text-poyraz-heading font-semibold">Poyraz Soft Glass</h1>
        <p className="max-w-3xl text-poyraz-body text-muted-foreground">
          Minimal, soft and lightly rounded surfaces with an optional glass
          enhancement. Brand red remains the primary identity; status colors
          are independent semantic signals.
        </p>
      </header>

      <Section
        title="Primitive palettes"
        description="Primitive colors are stable ingredients. Components consume semantic roles below, never a primitive step directly."
      >
        <div className="space-y-6">
          <Palette
            title="Brand red"
            variablePrefix="brand-red"
            scale={tokenSource.primitives.brandRed}
          />
          <Palette
            title="Neutral light"
            variablePrefix="neutral-light"
            scale={tokenSource.primitives.neutralLight}
          />
          <Palette
            title="Neutral dark"
            variablePrefix="neutral-dark"
            scale={tokenSource.primitives.neutralDark}
          />
        </div>
      </Section>

      <Section
        title="Semantic surfaces"
        description="These roles automatically switch with .dark or data-poyraz-theme. Surface is the default card plane; raised and elevated are reserved for increasing hierarchy."
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {semanticColors.map(([label, background, foreground]) => (
            <div
              key={label}
              className="min-h-28 rounded-md border border-border p-4 shadow-xs"
              style={{
                backgroundColor: `var(--poyraz-${background})`,
                color: `var(--poyraz-${foreground})`,
              }}
            >
              <p className="font-semibold">{label}</p>
              <code className="text-poyraz-caption opacity-75">
                --poyraz-{background}
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Status roles"
        description="Information, success, warning and destructive palettes stay separate from brand red so product meaning does not change when the brand is customized."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {statusColors.map(([label, background, foreground, border]) => (
            <div
              key={label}
              className="rounded-md border p-4"
              style={{
                backgroundColor: `var(--poyraz-${background})`,
                color: `var(--poyraz-${foreground})`,
                borderColor: `var(--poyraz-${border})`,
              }}
            >
              <p className="font-semibold">{label}</p>
              <p className="mt-1 text-poyraz-body-sm opacity-80">
                Semantic feedback surface with theme-aware contrast.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Glass recipe"
        description="Glass is an opt-in enhancement, not the default surface. Unsupported, reduced-transparency and low-power modes receive an opaque fallback with the same readable foreground."
      >
        <div className="relative isolate min-h-80 overflow-hidden rounded-xl border border-border bg-surface-subtle p-6 sm:p-10">
          <div className="absolute -left-16 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 right-0 -z-10 h-72 w-72 rounded-full bg-info-solid/30 blur-3xl" />
          <div className="poyraz-glass mx-auto max-w-xl p-5 sm:p-7">
            <p className="text-poyraz-caption font-semibold uppercase tracking-[0.14em] text-primary">
              One blur layer
            </p>
            <h3 className="mt-2 text-poyraz-title font-semibold">
              Optional depth, stable readability
            </h3>
            <p className="mt-2 text-poyraz-body-sm text-muted-foreground">
              The outer panel owns the backdrop pass. A nested glass surface
              keeps its tint and border but automatically disables another
              blur operation.
            </p>
            <div className="poyraz-glass mt-5 p-4 text-poyraz-body-sm">
              Nested glass — no additional backdrop blur.
            </div>
          </div>
        </div>
        <div className="rounded-md border border-border bg-surface p-4 text-poyraz-body-sm text-muted-foreground">
          Set <code>data-poyraz-transparency=&quot;reduced&quot;</code> or{" "}
          <code>data-poyraz-performance=&quot;low&quot;</code> on an ancestor to force
          the opaque fallback. Native{" "}
          <code>prefers-reduced-transparency</code> is progressively enhanced
          when the browser supports it.
        </div>
      </Section>

      <Section
        title="Radius and elevation"
        description="The default 8px radius stays soft without becoming pill-shaped. Larger radii are reserved for grouped panels and glass canvases."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Object.entries(tokenSource.shared.radius).map(([name, value]) => (
              <div key={name} className="space-y-2 text-center">
                <div
                  className="h-20 border border-primary bg-primary-muted"
                  style={{ borderRadius: value }}
                />
                <div className="text-poyraz-caption">
                  <p className="font-semibold">{name}</p>
                  <code className="text-muted-foreground">{value}</code>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Object.entries(tokenSource.shared.shadow).map(([name, value]) => (
              <div
                key={name}
                className="flex h-24 items-end rounded-md border border-border bg-surface p-3 text-poyraz-caption font-semibold"
                style={{ boxShadow: value }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Typography"
        description="A compact interface scale with explicit line-height and tracking. The scale is opt-in and does not restyle consumer headings."
      >
        <div className="divide-y divide-border overflow-hidden rounded-md border border-border bg-surface">
          {typography.map(([name, token]) => (
            <div
              key={name}
              className="grid gap-2 p-4 sm:grid-cols-[9rem_1fr] sm:items-baseline"
            >
              <div className="text-poyraz-caption text-muted-foreground">
                <p className="font-semibold text-foreground">{name}</p>
                <code>
                  {token.size} / {token.lineHeight}
                </code>
              </div>
              <p
                style={{
                  fontSize: token.size,
                  lineHeight: token.lineHeight,
                  letterSpacing: token.letterSpacing,
                }}
              >
                Modern interfaces should feel calm and precise.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Density and interaction"
        description="Default density targets desktop product interfaces while the 44px touch target remains the minimum for icon-only mobile controls. Density tokens change component geometry, never document spacing globally."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Compact", "compactControl", "compactGap"],
            ["Default", "defaultControl", "defaultGap"],
            ["Spacious", "spaciousControl", "spaciousGap"],
          ].map(([label, control, gap]) => (
            <div
              key={label}
              className="rounded-md border border-border bg-surface p-4"
            >
              <p className="font-semibold">{label}</p>
              <dl className="mt-3 space-y-2 text-poyraz-body-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Control</dt>
                  <dd>
                    {tokenSource.shared.density[
                      control as keyof typeof tokenSource.shared.density
                    ]}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Gap</dt>
                  <dd>
                    {tokenSource.shared.density[
                      gap as keyof typeof tokenSource.shared.density
                    ]}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="poyraz-focus-ring rounded-sm border border-border bg-surface px-4 py-2 text-poyraz-body-sm shadow-xs"
        >
          Keyboard focus recipe
        </button>
      </Section>

      <Section
        title="Motion and layer policy"
        description="Motion communicates state with short enter/exit timings. Reduced-motion collapses token durations to 1ms. Named z-index layers prevent arbitrary stacking escalation."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-border bg-surface p-4">
            <h3 className="font-semibold">Durations</h3>
            <div className="mt-3 space-y-2">
              {Object.entries(tokenSource.shared.motion.duration).map(
                ([name, value]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-4 text-poyraz-body-sm"
                  >
                    <span className="text-muted-foreground">{name}</span>
                    <code>{value}</code>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="rounded-md border border-border bg-surface p-4">
            <h3 className="font-semibold">Z-index layers</h3>
            <div className="mt-3 space-y-2">
              {Object.entries(tokenSource.shared.zIndex).map(([name, value]) => (
                <div
                  key={name}
                  className="flex items-center justify-between gap-4 text-poyraz-body-sm"
                >
                  <span className="text-muted-foreground">{name}</span>
                  <code>{value}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Customization contract"
        description="Override semantic variables for product themes. Keep component source independent from raw hex values and regenerate preset.css only when changing the library's canonical source."
      >
        <pre className="overflow-x-auto rounded-md border border-border bg-inverted p-4 text-poyraz-body-sm text-inverted-foreground shadow-sm">
          <code>{`:root {
  --poyraz-primary: oklch(58% 0.22 25);
  --poyraz-surface: oklch(99% 0.01 25);
  --poyraz-radius-sm: 0.625rem;
}

/* Low-power dashboards */
<main data-poyraz-performance="low">...</main>`}</code>
        </pre>
        <p className="text-poyraz-caption text-muted-foreground">
          Canonical source: <code>src/theme-tokens.json</code>. Generated CSS
          guard: <code>node scripts/generate-theme-tokens.mjs --check</code>.
          Contrast guard: <code>node scripts/check-theme-contrast.mjs</code>.
        </p>
      </Section>
    </div>
  );
}
