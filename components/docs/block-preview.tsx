"use client";

import * as React from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";

import { cn } from "@/lib/utils";

const viewports = {
  desktop: { label: "Desktop", width: "100%", icon: Monitor },
  tablet: { label: "Tablet", width: "768px", icon: Tablet },
  mobile: { label: "Mobile", width: "390px", icon: Smartphone },
} as const;

export function BlockPreview({ children }: { children: React.ReactNode }) {
  const [viewport, setViewport] = React.useState<keyof typeof viewports>("desktop");

  return (
    <div className="space-y-3" data-slot="block-preview">
      <div className="flex justify-end">
        <div className="flex rounded-md border border-border bg-surface p-0.5" aria-label="Block viewport">
          {Object.entries(viewports).map(([value, config]) => {
            const Icon = config.icon;
            return (
              <button
                key={value}
                type="button"
                title={config.label}
                aria-label={`${config.label} preview`}
                aria-pressed={viewport === value}
                className={cn(
                  "flex size-8 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground",
                  viewport === value && "bg-accent text-foreground",
                )}
                onClick={() => setViewport(value as keyof typeof viewports)}
              >
                <Icon className="size-4" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="overflow-x-auto pb-2">
        <div
          className="mx-auto min-w-[390px] overflow-hidden rounded-md border border-border bg-background transition-[width] duration-[var(--poyraz-motion-duration-base)]"
          style={{ width: viewports[viewport].width, maxWidth: "100%" }}
          data-viewport={viewport}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

