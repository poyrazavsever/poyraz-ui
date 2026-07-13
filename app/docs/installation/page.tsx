"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { toast } from "poyraz-ui/molecules";

import { Typography } from "poyraz-ui/atoms";
import { Separator } from "poyraz-ui/atoms";
import { Button } from "poyraz-ui/atoms";
import { Card, CardContent } from "poyraz-ui/atoms";

const registryConfig =
  '{\n  "registries": {\n    "@poyraz": "https://ui.poyrazavsever.com/r/{name}.json"\n  }\n}';

function CopyBlock({ code, children }: { code: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard!", { description: code });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-slate-950 text-slate-50 border-slate-800 relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-slate-500 hover:text-slate-100 cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-success-solid" /> : <Copy className="h-4 w-4" />}
      </button>
      <CardContent className="p-4 font-mono text-sm leading-relaxed">{children}</CardContent>
    </Card>
  );
}

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <Typography variant="h1">Installation</Typography>
        <Typography variant="lead">
          Use the V3 npm package for centralized updates, or install source through the registry
          when you want to own and edit every component layer.
        </Typography>
      </div>

      <Separator />

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="border-primary/30 bg-primary-muted/30">
          <CardContent className="space-y-3 p-5">
            <Typography variant="h3">Npm package</Typography>
            <Typography variant="muted">
              Recommended for semver updates, package imports and the fastest application setup.
            </Typography>
            <CopyBlock code="pnpm add poyraz-ui@3">pnpm add poyraz-ui@3</CopyBlock>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="space-y-3 p-5">
            <Typography variant="h3">Own the source</Typography>
            <Typography variant="muted">
              Install selected components locally for markup, recipe and Radix composition control.
            </Typography>
            <CopyBlock code="pnpm dlx shadcn@latest add @poyraz/button">
              pnpm dlx shadcn@latest add @poyraz/button
            </CopyBlock>
          </CardContent>
        </Card>
      </section>

      {/* Step 1: Install */}
      <section className="space-y-4">
        <Typography variant="h2">1. Install the V3 npm package</Typography>
        <Typography variant="p">
          The package route keeps supported imports under `poyraz-ui` and receives centralized
          updates through npm:
        </Typography>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-1.5">
              pnpm
            </p>
            <CopyBlock code="pnpm add poyraz-ui@3">pnpm add poyraz-ui@3</CopyBlock>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-1.5">npm</p>
            <CopyBlock code="npm install poyraz-ui@3">npm install poyraz-ui@3</CopyBlock>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-1.5">
              yarn
            </p>
            <CopyBlock code="yarn add poyraz-ui@3">yarn add poyraz-ui@3</CopyBlock>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <Typography variant="h2">Alternative: Own the source</Typography>
        <Typography variant="p">
          Choose this route when a component should live in your repository. Add the production
          namespace to `components.json`, then install only the source you need.
        </Typography>
        <CopyBlock code={registryConfig}>
          <pre className="whitespace-pre-wrap">{registryConfig}</pre>
        </CopyBlock>
        <CopyBlock code="pnpm dlx shadcn@latest add @poyraz/button">
          pnpm dlx shadcn@latest add @poyraz/button
        </CopyBlock>
        <Typography variant="muted">
          The installed files are consumer-owned. Registry installation is optional and does not
          replace the supported V3 npm runtime package.
        </Typography>
      </section>

      {/* Step 2: Peer Dependencies */}
      <section className="space-y-4">
        <Typography variant="h2">2. Peer Dependencies</Typography>
        <Typography variant="p">
          Poyraz UI requires the following peer dependencies. Make sure they are installed in your
          project:
        </Typography>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">Package</th>
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">Version</th>
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">
                  Required
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["react", "≥ 18", "Yes"],
                ["react-dom", "≥ 18", "Yes"],
                ["tailwindcss", "≥ 4", "Yes"],
              ].map(([pkg, version, required]) => (
                <tr key={pkg} className="border-b border-border">
                  <td className="p-3 font-mono text-xs">{pkg}</td>
                  <td className="p-3 text-muted-foreground">{version}</td>
                  <td className="p-3">
                    <span
                      className={`text-xs font-semibold ${required === "Yes" ? "text-primary" : "text-placeholder"}`}
                    >
                      {required}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step 3: CSS Setup */}
      <section className="space-y-4">
        <Typography variant="h2">3. Import CSS Preset</Typography>
        <Typography variant="p">
          Add the Poyraz UI CSS preset to your global stylesheet. The preset includes semantic
          design tokens (colors, fonts), base layer styles, motion utilities for molecule
          animations, and automatically configures Tailwind to scan Poyraz UI components for utility
          classes.
        </Typography>

        <Typography variant="muted">
          This import is required for animated Accordion, Dropdown Menu, Select, Popover, Tooltip,
          Dialog, Sheet, and other molecule interactions.
        </Typography>

        <Typography variant="p">You can set this up automatically with the CLI:</Typography>

        <CopyBlock code="npx poyraz-ui@3 init --mode package">
          npx poyraz-ui@3 init --mode package
        </CopyBlock>

        <Typography variant="muted">Or manually add the import to your CSS file:</Typography>

        <CopyBlock
          code={`/* globals.css */\n@import "tailwindcss";\n@import "poyraz-ui/preset.css";`}
        >
          <div className="text-slate-400">{"/* globals.css */"}</div>
          <div className="text-sky-300">@import</div>{" "}
          <span className="text-green-300">{'"tailwindcss"'}</span>;{"\n"}
          <div>
            <span className="text-sky-300">@import</span>{" "}
            <span className="text-green-300">{'"poyraz-ui/preset.css"'}</span>;
          </div>
        </CopyBlock>
      </section>

      {/* Step 4: Usage */}
      <section className="space-y-4">
        <Typography variant="h2">4. Start Using Components</Typography>
        <Typography variant="p">
          Import components directly from the package. You can import from the main entry point or
          use the tree-shakeable sub-paths:
        </Typography>

        <CopyBlock
          code={`// Import everything\nimport { Button, Card } from "poyraz-ui";\n\n// Or import by layer (tree-shake friendly)\nimport { Button } from "poyraz-ui/atoms";\nimport { Dialog } from "poyraz-ui/molecules";\nimport { Navbar } from "poyraz-ui/organisms";`}
        >
          <div className="space-y-3">
            <div>
              <div className="text-slate-400">{"// Import everything"}</div>
              <div>
                <span className="text-sky-300">import</span> {"{ Button, Card }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui"'}</span>;
              </div>
            </div>
            <div>
              <div className="text-slate-400">{"// Or import by layer (tree-shake friendly)"}</div>
              <div>
                <span className="text-sky-300">import</span> {"{ Button }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui/atoms"'}</span>;
              </div>
              <div>
                <span className="text-sky-300">import</span> {"{ Dialog }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui/molecules"'}</span>;
              </div>
              <div>
                <span className="text-sky-300">import</span> {"{ Navbar }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui/organisms"'}</span>;
              </div>
            </div>
          </div>
        </CopyBlock>
      </section>

      {/* Step 5: Example */}
      <section className="space-y-4">
        <Typography variant="h2">5. Minimal Example</Typography>
        <Typography variant="p">Here&apos;s a complete example using a Button:</Typography>

        <CopyBlock
          code={`import { Button } from "poyraz-ui/atoms";\n\nexport default function App() {\n  return (\n    <Button variant="default">\n      Click me\n    </Button>\n  );\n}`}
        >
          <div>
            <span className="text-sky-300">import</span> {"{ Button }"}{" "}
            <span className="text-sky-300">from</span>{" "}
            <span className="text-green-300">{'"poyraz-ui/atoms"'}</span>;
          </div>
          <br />
          <div>
            <span className="text-sky-300">export default function</span>{" "}
            <span className="text-yellow-300">App</span>
            {"() {"}
          </div>
          <div className="pl-4">
            <span className="text-sky-300">return</span> (
          </div>
          <div className="pl-8">
            {"<"}
            <span className="text-green-300">Button</span>{" "}
            <span className="text-sky-300">variant</span>
            {"="}
            <span className="text-green-300">{'"default"'}</span>
            {">"}
          </div>
          <div className="pl-12">Click me</div>
          <div className="pl-8">
            {"</"}
            <span className="text-green-300">Button</span>
            {">"}
          </div>
          <div className="pl-4">);</div>
          <div>{"}"}</div>
        </CopyBlock>
      </section>

      {/* Step 6: Theming (Optional) */}
      <section className="space-y-4">
        <Typography variant="h2">6. Theme Support (Optional)</Typography>
        <Typography variant="p">
          Poyraz UI v3 uses semantic CSS tokens that can be overridden for full theme customization.
          For dynamic theme switching, install{" "}
          <code className="text-xs bg-accent px-1.5 py-0.5 border border-border">
            reactive-switcher
          </code>{" "}
          and use the built-in theme presets:
        </Typography>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-1.5">
              Install reactive-switcher
            </p>
            <CopyBlock code="pnpm add reactive-switcher">pnpm add reactive-switcher</CopyBlock>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-placeholder mb-1.5">
              Configure themes
            </p>
            <CopyBlock
              code={`import { ThemeProvider } from "reactive-switcher";\nimport { poyrazLightTheme, poyrazDarkTheme } from "poyraz-ui/themes";\n\nconst themes = [\n  { name: "light", variables: poyrazLightTheme.variables },\n  { name: "dark", variables: poyrazDarkTheme.variables },\n];\n\nexport default function Layout({ children }) {\n  return (\n    <ThemeProvider themes={themes} defaultTheme="light">\n      {children}\n    </ThemeProvider>\n  );\n}`}
            >
              <div className="space-y-1">
                <div>
                  <span className="text-sky-300">import</span> {"{ ThemeProvider }"}{" "}
                  <span className="text-sky-300">from</span>{" "}
                  <span className="text-green-300">{'"reactive-switcher"'}</span>;
                </div>
                <div>
                  <span className="text-sky-300">import</span>{" "}
                  {"{ poyrazLightTheme, poyrazDarkTheme }"}{" "}
                  <span className="text-sky-300">from</span>{" "}
                  <span className="text-green-300">{'"poyraz-ui/themes"'}</span>;
                </div>
              </div>
            </CopyBlock>
          </div>
        </div>

        <Typography variant="muted">
          The CLI wizard (<code className="text-xs">npx poyraz-ui@3 init --mode package</code>) can
          scaffold this configuration automatically.
        </Typography>
      </section>

      {/* Next */}
      <section className="space-y-4">
        <Separator />
        <div className="flex gap-4 pt-4">
          <Link href="/docs/atoms">
            <Button size="lg" className="gap-2">
              Browse Atoms <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
