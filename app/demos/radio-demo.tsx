"use client";

import { RadioGroup, RadioGroupItem } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1" className="normal-case font-normal text-sm">
          Option One
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2" className="normal-case font-normal text-sm">
          Option Two
        </Label>
      </div>
      <div className="flex items-center gap-3">
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
