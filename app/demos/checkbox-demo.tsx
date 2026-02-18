"use client";

import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Label } from "@/components/ui/atoms/label";

export function CheckboxDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms" className="normal-case font-normal text-sm">
          Accept terms
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="news" />
        <Label htmlFor="news" className="normal-case font-normal text-sm">
          Subscribe
        </Label>
      </div>
      <div className="flex items-center gap-3">
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
