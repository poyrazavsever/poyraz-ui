"use client";

import { Switch } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";

export function SwitchDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Switch id="airplane" defaultChecked />
        <Label htmlFor="airplane" className="normal-case font-normal text-sm">
          Airplane Mode
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <Switch id="notifications" />
        <Label
          htmlFor="notifications"
          className="normal-case font-normal text-sm"
        >
          Notifications
        </Label>
      </div>
      <div className="flex items-center gap-3">
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
