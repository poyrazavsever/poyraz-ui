"use client";

import * as React from "react";
import { FileCode2, Package, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "poyraz-ui/molecules";

import docsCatalog from "@/src/docs-registry.json";
import { CodeBlock } from "@/components/docs/code-snippet";

type RegistryItem = (typeof docsCatalog.items)[number];
type RegistryPayload = Omit<RegistryItem, "files"> & {
  files?: Array<RegistryItem["files"][number] & { content?: string }>;
};
type Tab = "overview" | "source" | "api" | "accessibility";

const variantNames = [
  "default",
  "secondary",
  "soft",
  "outline",
  "glass",
  "ghost",
  "destructive",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];
const sizeNames = ["xs", "sm", "default", "lg", "icon-sm", "icon", "icon-lg"];
const radiusNames = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"];
const stateNames = [
  "open",
  "closed",
  "checked",
  "unchecked",
  "active",
  "disabled",
  "loading",
  "invalid",
  "selected",
  "empty",
  "error",
];

function valuesPresent(source: string, values: string[]) {
  return values.filter((value) =>
    new RegExp(`["']${value}["']|data-\\[state=${value}\\]|data-${value}`).test(source),
  );
}

export function RegistryDetails({ name }: { name: string }) {
  const pathname = usePathname();
  const metadata = docsCatalog.items.find(
    (item) => item.href === pathname || item.title === name || item.name === name.toLowerCase(),
  );
  const [payload, setPayload] = React.useState<RegistryPayload | null>(null);
  const [tab, setTab] = React.useState<Tab>("overview");

  React.useEffect(() => {
    if (!metadata) return;
    let active = true;
    fetch(`/r/${metadata.name}.json`)
      .then((response) => response.json())
      .then((item) => {
        if (active) setPayload(item);
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, [metadata]);

  if (!metadata) return null;
  const command = `pnpm dlx shadcn@latest add @poyraz/${metadata.name}`;
  const source = payload?.files?.map((file) => file.content ?? "").join("\n") ?? "";
  const apiRows = [
    ["Variants", valuesPresent(source, variantNames)],
    ["Sizes", valuesPresent(source, sizeNames)],
    ["Radius", valuesPresent(source, radiusNames)],
    ["States", valuesPresent(source, stateNames)],
  ] as const;
  const tabs: Array<{
    value: Tab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    { value: "overview", label: "Registry", icon: Package },
    { value: "source", label: "Source", icon: FileCode2 },
    { value: "api", label: "API", icon: SlidersHorizontal },
    { value: "accessibility", label: "Accessibility", icon: ShieldCheck },
  ];

  return (
    <section className="space-y-5 pt-2" data-slot="registry-details">
      <CodeBlock code={command} lang="bash" />

      <Tabs value={tab} onValueChange={(value) => setTab(value as Tab)}>
        <TabsList
          variant="line"
          radius="none"
          aria-label={`${name} registry details`}
          className="flex w-full justify-start"
        >
          {tabs.map(({ value, label, icon: Icon }) => (
            <TabsTrigger key={value} value={value} size="sm" radius="none" className="gap-1.5">
              <Icon className="size-3.5" />
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-x-8 gap-y-6 text-sm sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase text-placeholder">Runtime dependencies</p>
              <p className="mt-2 text-muted-foreground">
                {metadata.dependencies.length ? metadata.dependencies.join(", ") : "None"}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-placeholder">Registry dependencies</p>
              <p className="mt-2 text-muted-foreground">
                {metadata.registryDependencies.length
                  ? metadata.registryDependencies.join(", ")
                  : "None"}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-bold uppercase text-placeholder">Installed files</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {metadata.files.map((file) => (
                  <code key={file.target} className="text-xs text-muted-foreground">
                    {file.target}
                  </code>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="source" className="mt-6">
          <CodeBlock code={source || "Loading source..."} className="max-h-[32rem] overflow-auto" />
        </TabsContent>

        <TabsContent value="api" className="mt-6">
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="border-b border-border bg-surface-subtle">
                <tr>
                  <th className="p-3">Family</th>
                  <th className="p-3">Detected values</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {apiRows.map(([label, values]) => (
                  <tr key={label}>
                    <td className="p-3 font-semibold">{label}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">
                      {values.length ? values.join(" | ") : "Component-specific props"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="accessibility" className="mt-6">
          <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <p>
              <strong className="text-foreground">Keyboard:</strong> Native and primitive keyboard
              behavior remains available without pointer input.
            </p>
            <p>
              <strong className="text-foreground">Focus:</strong> Interactive controls preserve a
              visible focus indicator and logical tab order.
            </p>
            <p>
              <strong className="text-foreground">State:</strong> Disabled, invalid and open states
              use semantic attributes rather than color alone.
            </p>
            <p>
              <strong className="text-foreground">Motion:</strong> Essential content remains visible
              under reduced-motion preferences.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
