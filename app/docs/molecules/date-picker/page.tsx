"use client";

import * as React from "react";
import { DatePicker } from "poyraz-ui/molecules";
import { Label } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <DatePicker selected={date} onSelect={setDate} placeholder="Pick a date" />;
}

function DatePickerPreselected() {
  return (
    <DatePicker
      defaultSelected={new Date()}
      clearable
      popoverSurface="glass"
      placeholder="Pick a date"
    />
  );
}

export default function DatePickerPage() {
  return (
    <ComponentPage
      name="Date Picker"
      description="Controlled or uncontrolled date picker with independent selection/open state, clear action and customizable trigger/popover surfaces."
      importCode={`import { DatePicker } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Click to open the calendar popover and select a date."
        code={`const [date, setDate] = useState<Date | undefined>();

<DatePicker
  selected={date}
  onSelect={setDate}
  placeholder="Pick a date"
/>`}
      >
        <div className="max-w-xs space-y-2">
          <Label>Date</Label>
          <DatePickerDemo />
        </div>
      </DemoSection>

      <DemoSection
        title="Uncontrolled Glass"
        description="Use defaultSelected for uncontrolled state and opt into clearable glass UI."
        code={`<DatePicker defaultSelected={new Date()} clearable popoverSurface="glass" />`}
      >
        <div className="max-w-xs space-y-2">
          <Label>Start Date</Label>
          <DatePickerPreselected />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
