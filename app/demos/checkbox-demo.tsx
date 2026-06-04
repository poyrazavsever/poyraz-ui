"use client";

import { Checkbox } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

export function CheckboxDemo() {
  return (
    <div className="space-y-3 animate-poyraz-fade-in">
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms" className="normal-case font-normal text-sm">
          Accept terms
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Checkbox id="news" />
        <Label htmlFor="news" className="normal-case font-normal text-sm">
          Subscribe
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Checkbox id="disabled-check" disabled />
        <Label
          htmlFor="disabled-check"
          className="normal-case font-normal text-sm opacity-40"
        >
          Disabled
        </Label>
      </div>
    </div>
  );
}
