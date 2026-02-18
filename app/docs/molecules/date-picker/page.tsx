"use client";

import * as React from "react";
import { DatePicker } from "poyraz-ui/molecules";
import { Label } from "poyraz-ui/atoms";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <DatePicker selected={date} onSelect={setDate} placeholder="Pick a date" />
  );
}

function DatePickerPreselected() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <DatePicker selected={date} onSelect={setDate} placeholder="Pick a date" />
  );
}

export default function DatePickerPage() {
  return (
    <ComponentPage
      name="Date Picker"
      description="A popover-based date picker that combines the Calendar component with a trigger button. Displays the selected date in a readable format."
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
        title="Pre-selected"
        description="Date picker with a default date already selected."
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<DatePicker selected={date} onSelect={setDate} />`}
      >
        <div className="max-w-xs space-y-2">
          <Label>Start Date</Label>
          <DatePickerPreselected />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
