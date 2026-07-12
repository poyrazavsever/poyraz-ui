"use client";

import * as React from "react";
import { Check, Circle, Gauge, Image, Layers3, Minus, Moon, Radius, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

type PreviewBackground = "solid" | "gradient" | "dark";
type PreviewRadius = "sharp" | "soft" | "round";
type PreviewDensity = "compact" | "default" | "spacious";
type PreviewMotion = "full" | "reduced";

type PreviewState = {
  background: PreviewBackground;
  radius: PreviewRadius;
  density: PreviewDensity;
  motion: PreviewMotion;
};

const PreviewContext = React.createContext<{
  state: PreviewState;
  update: <Key extends keyof PreviewState>(key: Key, value: PreviewState[Key]) => void;
} | null>(null);

export function PreviewProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<PreviewState>({
    background: "solid",
    radius: "soft",
    density: "default",
    motion: "full",
  });

  const update = React.useCallback(<Key extends keyof PreviewState>(key: Key, value: PreviewState[Key]) => {
    setState((current) => ({ ...current, [key]: value }));
  }, []);

  return <PreviewContext.Provider value={{ state, update }}>{children}</PreviewContext.Provider>;
}

export function usePreview() {
  const value = React.useContext(PreviewContext);
  if (!value) throw new Error("usePreview must be used inside PreviewProvider");
  return value;
}

const controls = {
  background: [
    { value: "solid", label: "Solid", icon: Circle },
    { value: "gradient", label: "Gradient", icon: Layers3 },
    { value: "dark", label: "Dark image", icon: Image },
  ],
  radius: [
    { value: "sharp", label: "Sharp", icon: Minus },
    { value: "soft", label: "Soft", icon: Radius },
    { value: "round", label: "Round", icon: Circle },
  ],
  density: [
    { value: "compact", label: "Compact", icon: Gauge },
    { value: "default", label: "Default", icon: Check },
    { value: "spacious", label: "Spacious", icon: Sparkles },
  ],
  motion: [
    { value: "full", label: "Full", icon: Sparkles },
    { value: "reduced", label: "Reduced", icon: Moon },
  ],
} as const;

export function PreviewToolbar() {
  const { state, update } = usePreview();

  return (
    <div className="sticky top-[65px] z-20 -mx-1 border-y border-border bg-background/92 px-1 py-2 backdrop-blur-lg">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {(Object.keys(controls) as Array<keyof typeof controls>).map((key) => (
          <div key={key} className="flex items-center gap-1">
            <span className="mr-1 text-[10px] font-bold uppercase text-placeholder">{key}</span>
            <div className="flex rounded-md border border-border bg-surface p-0.5">
              {controls[key].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  title={label}
                  aria-label={`${key}: ${label}`}
                  aria-pressed={state[key] === value}
                  className={cn(
                    "flex h-7 items-center gap-1.5 rounded-sm px-2 text-xs text-muted-foreground transition-colors hover:text-foreground",
                    state[key] === value && "bg-accent font-semibold text-foreground",
                  )}
                  onClick={() => update(key, value as never)}
                >
                  <Icon className="size-3" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function previewClassName(state: PreviewState) {
  return cn(
    state.background === "solid" && "bg-background",
    state.background === "gradient" && "bg-[linear-gradient(135deg,var(--poyraz-primary-muted),var(--poyraz-surface),var(--poyraz-info))]",
    state.background === "dark" && "bg-[radial-gradient(circle_at_20%_15%,#632329_0%,#20181b_34%,#0b0e12_78%)] text-white",
  );
}

export function previewStyle(state: PreviewState): React.CSSProperties {
  const radius = { sharp: "0.25rem", soft: "0.75rem", round: "1.25rem" }[state.radius];
  const control = { compact: "2rem", default: "2.5rem", spacious: "2.75rem" }[state.density];
  const gap = { compact: "0.375rem", default: "0.625rem", spacious: "0.875rem" }[state.density];
  return {
    "--poyraz-radius-sm": radius,
    "--poyraz-radius-md": radius,
    "--poyraz-radius-lg": radius,
    "--poyraz-density-default-control": control,
    "--poyraz-density-default-gap": gap,
  } as React.CSSProperties;
}
