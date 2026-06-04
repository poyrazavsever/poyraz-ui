"use client";

import { Switch } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

export function SwitchDemo() {
  return (
    <div className="space-y-3 animate-poyraz-fade-in">
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Switch id="airplane" defaultChecked />
        <Label htmlFor="airplane" className="normal-case font-normal text-sm">
          Airplane Mode
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Switch id="notifications" />
        <Label
          htmlFor="notifications"
          className="normal-case font-normal text-sm"
        >
          Notifications
        </Label>
      </div>
      <div className="flex items-center gap-3 transition-transform duration-[var(--poyraz-motion-duration-fast)] ease-[var(--poyraz-motion-ease-out)] hover:translate-x-0.5">
        <Switch id="disabled-switch" disabled />
        <Label
          htmlFor="disabled-switch"
          className="normal-case font-normal text-sm opacity-40"
        >
          Disabled
        </Label>
      </div>
    </div>
  );
}
