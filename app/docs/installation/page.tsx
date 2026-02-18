"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/molecules/sonner";

import { Typography } from "@/components/ui/atoms/typography";
import { Separator } from "@/components/ui/atoms/separator";
import { Button } from "@/components/ui/atoms/button";
import { Card, CardContent } from "@/components/ui/atoms/card";

function CopyBlock({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
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
        className="absolute top-3 right-3 text-slate-500 hover:text-white cursor-pointer transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <CardContent className="p-4 font-mono text-sm leading-relaxed">
        {children}
      </CardContent>
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
          Get Poyraz UI up and running in your project in minutes.
        </Typography>
      </div>

      <Separator />

      {/* Step 1: Install */}
      <section className="space-y-4">
        <Typography variant="h2">1. Install the package</Typography>
        <Typography variant="p">
          Install Poyraz UI with your preferred package manager:
        </Typography>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1.5">
              pnpm
            </p>
            <CopyBlock code="pnpm add poyraz-ui">pnpm add poyraz-ui</CopyBlock>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1.5">
              npm
            </p>
            <CopyBlock code="npm install poyraz-ui">
              npm install poyraz-ui
            </CopyBlock>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1.5">
              yarn
            </p>
            <CopyBlock code="yarn add poyraz-ui">yarn add poyraz-ui</CopyBlock>
          </div>
        </div>
      </section>

      {/* Step 2: Peer Dependencies */}
      <section className="space-y-4">
        <Typography variant="h2">2. Peer Dependencies</Typography>
        <Typography variant="p">
          Poyraz UI requires the following peer dependencies. Make sure they are
          installed in your project:
        </Typography>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-2 border-dashed border-slate-200">
            <thead>
              <tr className="border-b-2 border-dashed border-slate-200 bg-slate-50">
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">
                  Package
                </th>
                <th className="text-left p-3 font-bold uppercase text-xs tracking-wide">
                  Version
                </th>
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
                ["next", "≥ 14", "Optional"],
              ].map(([pkg, version, required]) => (
                <tr
                  key={pkg}
                  className="border-b border-dashed border-slate-100"
                >
                  <td className="p-3 font-mono text-xs">{pkg}</td>
                  <td className="p-3 text-slate-500">{version}</td>
                  <td className="p-3">
                    <span
                      className={`text-xs font-semibold ${required === "Yes" ? "text-red-600" : "text-slate-400"}`}
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
          Add the Poyraz UI CSS preset to your global stylesheet. The preset
          includes design tokens (colors, fonts) and base layer styles.
        </Typography>

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
          Import components directly from the package. You can import from the
          main entry point or use the tree-shakeable sub-paths:
        </Typography>

        <CopyBlock
          code={`// Import everything\nimport { Button, Card } from "poyraz-ui";\n\n// Or import by layer (tree-shake friendly)\nimport { Button } from "poyraz-ui/atoms";\nimport { Dialog } from "poyraz-ui/molecules";\nimport { Navbar } from "poyraz-ui/organisms";`}
        >
          <div className="space-y-3">
            <div>
              <div className="text-slate-400">{"// Import everything"}</div>
              <div>
                <span className="text-sky-300">import</span>{" "}
                {"{ Button, Card }"} <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui"'}</span>;
              </div>
            </div>
            <div>
              <div className="text-slate-400">
                {"// Or import by layer (tree-shake friendly)"}
              </div>
              <div>
                <span className="text-sky-300">import</span> {"{ Button }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">{'"poyraz-ui/atoms"'}</span>;
              </div>
              <div>
                <span className="text-sky-300">import</span> {"{ Dialog }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">
                  {'"poyraz-ui/molecules"'}
                </span>
                ;
              </div>
              <div>
                <span className="text-sky-300">import</span> {"{ Navbar }"}{" "}
                <span className="text-sky-300">from</span>{" "}
                <span className="text-green-300">
                  {'"poyraz-ui/organisms"'}
                </span>
                ;
              </div>
            </div>
          </div>
        </CopyBlock>
      </section>

      {/* Step 5: Example */}
      <section className="space-y-4">
        <Typography variant="h2">5. Minimal Example</Typography>
        <Typography variant="p">
          Here&apos;s a complete example using a Button:
        </Typography>

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
