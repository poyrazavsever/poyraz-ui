"use client";

import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option-1" className="animate-poyraz-fade-in">
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1" className="normal-case font-normal text-sm">
          Option One
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2" className="normal-case font-normal text-sm">
          Option Two
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <RadioGroupItem value="option-3" id="r3" disabled />
        <Label
          htmlFor="r3"
          className="normal-case font-normal text-sm opacity-40"
        >
          Disabled
        </Label>
      </div>
    </RadioGroup>
  );
}
