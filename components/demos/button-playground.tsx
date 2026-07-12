"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { CodeBlock } from "@/components/docs/code-snippet";
import { Button, ButtonIcon, ButtonLabel } from "@/components/ui/atoms/button";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/molecules/select";

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
  const iconOnly = state.size.startsWith("icon");
  const code = `<Button variant="${state.variant}" size="${state.size}" radius="${state.radius}" effect="${state.effect}"${state.effect === "fill" ? ` fillDirection="${state.fillDirection}"` : ""}${state.loading ? " loading" : ""}${state.disabled ? " disabled" : ""}>${iconOnly ? "<ArrowRight />" : "Continue"}</Button>`;

  const update = <Key extends keyof State>(key: Key, value: State[Key]) => {
    setState((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
      <div className="space-y-4 border-b border-border pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
        {(Object.keys(options) as Array<keyof typeof options>).map((key) => (
          <div key={key} className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase text-placeholder">{key}</span>
            <Select
              value={state[key] as string}
              onValueChange={(value) => update(key, value as never)}
            >
              <SelectTrigger
                aria-label={key}
                size="sm"
                className="w-full"
                disabled={key === "fillDirection" && state.effect !== "fill"}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {options[key].map((value) => (
                  <SelectItem key={value} value={value} size="sm">
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
        <div className="flex gap-4">
          {(["loading", "disabled"] as const).map((key) => (
            <label key={key} className="flex items-center gap-2 text-sm capitalize">
              <Checkbox
                checked={state[key]}
                onCheckedChange={(checked) => update(key, checked === true)}
              />
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
            {iconOnly ? (
              <ArrowRight />
            ) : state.effect === "swap" ? (
              <>
                <ButtonLabel>Continue</ButtonLabel>
                <ButtonIcon>
                  <ArrowRight />
                </ButtonIcon>
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
