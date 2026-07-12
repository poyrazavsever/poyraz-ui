import Link from "next/link";
import { CheckCircle2, Clock3, ExternalLink } from "lucide-react";

import releaseConfig from "@/release.config.json";

const releaseHighlights = [
  "Registry-first source distribution",
  "71 dependency-aware registry items",
  "Next.js and Vite clean-install verification",
  "Light, dark, glass and reduced-motion quality gates",
  "Incremental V2 migration tooling",
];

export default function ReleasesPage() {
  return (
    <article className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase text-primary">Release</p>
        <h1 className="text-3xl font-bold text-foreground">Poyraz UI Registry v3.0.0</h1>
        <p className="text-base leading-7 text-muted-foreground">
          V3 is the stable candidate for the source-owned Poyraz registry. The npm package remains
          the explicit V2 maintenance line; registry consumers install only the components they own
          and customize locally.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 border border-warning/40 bg-warning-muted px-3 py-1.5 font-medium text-warning-muted-foreground">
            <Clock3 className="size-4" /> Stable candidate
          </span>
          <code className="border border-border bg-muted px-3 py-1.5 text-foreground">
            {releaseConfig.registry.namespace}/button
          </code>
        </div>
      </header>

      <section className="space-y-5" aria-labelledby="release-milestones">
        <div>
          <h2 id="release-milestones" className="text-xl font-semibold text-foreground">
            Release milestones
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            API and visual scope progressed through explicit prerelease gates.
          </p>
        </div>
        <div className="overflow-x-auto border-y border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase text-placeholder">
              <tr>
                <th className="px-4 py-3 font-semibold">Version</th>
                <th className="px-4 py-3 font-semibold">Channel</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {releaseConfig.milestones.map((milestone) => (
                <tr key={milestone.version}>
                  <td className="px-4 py-3 font-mono text-foreground">{milestone.version}</td>
                  <td className="px-4 py-3 capitalize text-muted-foreground">
                    {milestone.channel}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      {milestone.status === "complete" ? (
                        <CheckCircle2 className="size-4 text-success" />
                      ) : (
                        <Clock3 className="size-4 text-warning" />
                      )}
                      {milestone.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-8 border-y border-border py-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Included in V3</h2>
          <ul className="space-y-3">
            {releaseHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Compatibility</h2>
          <p className="text-sm leading-6 text-muted-foreground">
            V2 blocker support continues through {releaseConfig.support.v2BlockerFixesUntil}; end of
            maintenance is {releaseConfig.support.v2EndOfMaintenance}. Stable V3 does not move npm
            latest or silently replace V2 imports.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link className="text-primary hover:underline" href="/docs/migration">
              Migration guide
            </Link>
            <Link className="text-primary hover:underline" href="/docs/legacy/v2">
              V2 legacy docs
            </Link>
            <Link
              className="inline-flex items-center gap-1 text-primary hover:underline"
              href="https://github.com/poyrazavsever/poyraz-ui/releases"
              target="_blank"
            >
              GitHub releases <ExternalLink className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
