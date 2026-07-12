"use client";

import { type CSSProperties, useState } from "react";
import { LoaderCircle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/atoms/button";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/molecules/tabs";
import { cn } from "@/lib/utils";

const samples = [
  { name: "Fade", className: "animate-poyraz-fade-in", slot: "fade", detail: "Opacity: 0 to 1" },
  { name: "Scale", className: "animate-poyraz-scale-in", slot: "scale", detail: "Scale: 0.96 to 1" },
  { name: "From top", className: "animate-poyraz-slide-in-from-top", slot: "top", detail: "Y: -8px to 0" },
  { name: "From right", className: "animate-poyraz-slide-in-from-right", slot: "right", detail: "X: +8px to 0" },
] as const;

const inspectStyle = {
  "--poyraz-motion-duration-fast": "500ms",
  "--poyraz-motion-duration-base": "700ms",
} as CSSProperties;

export function MotionDemo() {
  const [iteration, setIteration] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [sampleIndex, setSampleIndex] = useState(0);
  const [speed, setSpeed] = useState<"inspect" | "actual">("inspect");
  const sample = samples[sampleIndex];

  const selectSample = (index: number) => {
    setSampleIndex(index);
    setIteration((value) => value + 1);
  };

  return (
    <div
      data-poyraz-motion={reduced ? "reduced" : undefined}
      className="space-y-5"
      style={speed === "inspect" ? inspectStyle : undefined}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-md border border-border bg-surface p-1" aria-label="Preview speed">
          {(["inspect", "actual"] as const).map((value) => (
            <Button
              key={value}
              type="button"
              size="xs"
              variant={speed === value ? "secondary" : "ghost"}
              aria-pressed={speed === value}
              onClick={() => {
                setSpeed(value);
                setIteration((current) => current + 1);
              }}
            >
              {value === "inspect" ? "Inspect 700ms" : "Actual 180ms"}
            </Button>
          ))}
        </div>
        <label className="flex min-h-9 cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm">
          <Checkbox checked={reduced} onCheckedChange={(checked) => setReduced(checked === true)} />
          Reduced motion
        </label>
      </div>

      <Tabs value={sample.slot} onValueChange={(value) => selectSample(samples.findIndex((item) => item.slot === value))}>
        <TabsList aria-label="Motion family">
          {samples.map((item, index) => (
            <TabsTrigger
              key={item.name}
              value={item.slot}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-md border border-border bg-surface-subtle p-6 sm:min-h-64">
        <div className="absolute left-4 top-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{sample.name}</span>
          <span className="ml-2 font-mono">{sample.detail}</span>
        </div>
        <div
          key={`${sample.slot}-${iteration}`}
          data-motion-sample={sample.slot}
          className={cn(
            "flex h-20 w-36 items-center justify-center rounded-md border border-primary/30 bg-primary-muted text-sm font-semibold text-primary-muted-foreground sm:h-24 sm:w-44",
            sample.className,
          )}
        >
          Preview
        </div>
        <Button
          data-motion-replay
          variant="outline"
          size="sm"
          className="absolute bottom-4 right-4"
          onClick={() => setIteration((value) => value + 1)}
        >
          <RotateCcw /> Replay
        </Button>
      </div>

      <div className="space-y-3 border-t border-border pt-5">
        <div>
          <h3 className="text-sm font-semibold">Continuous feedback</h3>
          <p className="mt-1 text-xs text-muted-foreground">Reserved for active progress; reduced motion stops repetition.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex min-h-20 items-center gap-4 rounded-md border border-border bg-surface px-4">
            <LoaderCircle className="size-5 animate-poyraz-spin text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Spinner</p>
              <p className="text-xs text-muted-foreground">Loading in progress</p>
            </div>
          </div>
          <div className="flex min-h-20 items-center gap-4 rounded-md border border-border bg-surface px-4">
            <span className="size-5 rounded-full bg-primary animate-poyraz-pulse" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Pulse</p>
              <p className="text-xs text-muted-foreground">Background activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
