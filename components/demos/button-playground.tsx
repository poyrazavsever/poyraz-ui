"use client";

import * as React from "react";
import { ArrowRight, Check, Copy } from "lucide-react";

import { Button, ButtonIcon, ButtonLabel } from "@/components/ui/atoms/button";

const options = {
  variant: ["default", "secondary", "soft", "outline", "glass", "ghost", "destructive", "link"],
  size: ["xs", "sm", "default", "lg", "icon-sm", "icon", "icon-lg"],
  radius: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
  effect: ["none", "shine", "fill", "swap", "border-draw"],
  fillDirection: ["right", "left", "up", "down"],
} as const;

type State = {
  variant: (typeof options.variant)[number];
  size: (typeof options.size)[number];
  radius: (typeof options.radius)[number];
  effect: (typeof options.effect)[number];
  fillDirection: (typeof options.fillDirection)[number];
  loading: boolean;
  disabled: boolean;
};

export function ButtonPlayground() {
  const [state, setState] = React.useState<State>({
    variant: "default",
    size: "default",
    radius: "md",
    effect: "none",
    fillDirection: "right",
    loading: false,
    disabled: false,
  });
  const [copied, setCopied] = React.useState(false);
  const iconOnly = state.size.startsWith("icon");
  const code = `<Button variant="${state.variant}" size="${state.size}" radius="${state.radius}" effect="${state.effect}"${state.effect === "fill" ? ` fillDirection="${state.fillDirection}"` : ""}${state.loading ? " loading" : ""}${state.disabled ? " disabled" : ""}>${iconOnly ? "<ArrowRight />" : "Continue"}</Button>`;

  const update = <Key extends keyof State>(key: Key, value: State[Key]) => {
    setState((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <div className="space-y-4 border-b border-border pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
        {(Object.keys(options) as Array<keyof typeof options>).map((key) => (
          <label key={key} className="block space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-placeholder">{key}</span>
            <select
              className="h-9 w-full rounded-md border border-border bg-surface px-2 text-sm outline-none focus:border-ring"
              value={state[key] as string}
              disabled={key === "fillDirection" && state.effect !== "fill"}
              onChange={(event) => update(key, event.target.value as never)}
            >
              {options[key].map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        ))}
        <div className="flex gap-4">
          {(["loading", "disabled"] as const).map((key) => (
            <label key={key} className="flex items-center gap-2 text-sm capitalize">
              <input type="checkbox" checked={state[key]} onChange={(event) => update(key, event.target.checked)} />
              {key}
            </label>
          ))}
        </div>
      </div>

      <div className="min-w-0 space-y-5">
        <div className="flex min-h-52 items-center justify-center rounded-md border border-border bg-surface-subtle p-6">
          <Button
            variant={state.variant}
            size={state.size}
            radius={state.radius}
            effect={state.effect}
            fillDirection={state.fillDirection}
            loading={state.loading}
            disabled={state.disabled}
            aria-label={iconOnly ? "Continue" : undefined}
          >
            {iconOnly ? <ArrowRight /> : state.effect === "swap" ? <><ButtonLabel>Continue</ButtonLabel><ButtonIcon><ArrowRight /></ButtonIcon></> : "Continue"}
          </Button>
        </div>
        <div className="flex min-w-0 items-start gap-2 rounded-md bg-[#0b0e12] p-3 text-slate-100">
          <code className="min-w-0 flex-1 whitespace-pre-wrap break-all text-xs leading-5">{code}</code>
          <button
            type="button"
            aria-label="Copy playground code"
            className="shrink-0 rounded-sm p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
            onClick={async () => {
              await navigator.clipboard.writeText(code);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

