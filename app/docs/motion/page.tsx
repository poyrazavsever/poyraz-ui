import tokenSource from "@/src/theme-tokens.json";
import { MotionDemo } from "@/components/demos/motion-demo";

const utilityFamilies = [
  ["Presence", "animate-poyraz-fade-in / animate-poyraz-fade-out", "Opacity only"],
  ["Scale", "animate-poyraz-scale-in / animate-poyraz-scale-out", "Opacity + scale"],
  ["Floating", "animate-poyraz-floating-in / animate-poyraz-floating-out", "Radix data-side aware"],
  [
    "Overlay",
    "animate-poyraz-overlay-in / animate-poyraz-overlay-out",
    "Opacity; blur remains static",
  ],
  [
    "Disclosure",
    "animate-poyraz-accordion-down / animate-poyraz-accordion-up",
    "Radix measured height",
  ],
  ["Progress", "animate-poyraz-spin / animate-poyraz-pulse", "Non-essential loading feedback"],
] as const;

export default function MotionPage() {
  const motion = tokenSource.shared.motion;

  return (
    <div className="space-y-12 pb-16">
      <header className="space-y-3">
        <p className="text-poyraz-caption font-semibold uppercase text-primary">Foundation</p>
        <h1 className="text-poyraz-heading font-semibold">Motion</h1>
        <p className="max-w-3xl text-poyraz-body text-muted-foreground">
          A CSS-first motion language for feedback, presence and spatial context. Component state
          remains readable when motion is reduced or unavailable.
        </p>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-poyraz-title font-semibold">Live gallery</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Inspect each family at a readable speed, then switch to its actual production timing.
          </p>
        </div>
        <MotionDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Token scale</h2>
        <div className="overflow-x-auto rounded-md border border-border bg-surface">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="border-b border-border bg-surface-subtle text-muted-foreground">
              <tr>
                <th className="p-3">Family</th>
                <th className="p-3">Token</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {Object.entries(motion.duration).map(([name, value]) => (
                <tr key={name}>
                  <td className="p-3">Duration</td>
                  <td className="p-3 font-mono">{name}</td>
                  <td className="p-3">{value}</td>
                </tr>
              ))}
              {Object.entries(motion.distance).map(([name, value]) => (
                <tr key={name}>
                  <td className="p-3">Distance</td>
                  <td className="p-3 font-mono">{name}</td>
                  <td className="p-3">{value}</td>
                </tr>
              ))}
              {Object.entries(motion.scale).map(([name, value]) => (
                <tr key={name}>
                  <td className="p-3">Scale</td>
                  <td className="p-3 font-mono">{name}</td>
                  <td className="p-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-poyraz-title font-semibold">Native utility families</h2>
        <div className="divide-y divide-border rounded-md border border-border bg-surface">
          {utilityFamilies.map(([name, utility, behavior]) => (
            <div key={name} className="grid gap-1 p-4 sm:grid-cols-[7rem_1fr_1fr]">
              <strong>{name}</strong>
              <code className="text-xs text-primary">{utility}</code>
              <span className="text-sm text-muted-foreground">{behavior}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3 border-l-2 border-success-border pl-4">
          <h2 className="text-base font-semibold">Do</h2>
          <p className="text-sm text-muted-foreground">
            Animate opacity and transform, keep hover travel at 1-2px, and make exits slightly
            shorter than entrances.
          </p>
          <p className="text-sm text-muted-foreground">
            Preserve labels, focus and state attributes so motion remains supplementary.
          </p>
        </div>
        <div className="space-y-3 border-l-2 border-invalid pl-4">
          <h2 className="text-base font-semibold">Don&apos;t</h2>
          <p className="text-sm text-muted-foreground">
            Do not animate blur, layout position, border width or large shadows. Do not use
            perpetual motion for semantic state.
          </p>
          <p className="text-sm text-muted-foreground">
            Do not remove content in reduced-motion mode; reduce duration and repetition instead.
          </p>
        </div>
      </section>
    </div>
  );
}
