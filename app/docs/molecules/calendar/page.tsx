"use client";

import * as React from "react";
import { Calendar, type DateRange } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar selected={date} onSelect={setDate} />;
}

function CalendarRangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>();
  return <Calendar mode="range" selected={range} onSelect={setRange} surface="glass" radius="xl" />;
}

export default function CalendarPage() {
  return (
    <ComponentPage
      name="Calendar"
      description="Controlled or uncontrolled single/range calendar with semantic today, selection and range states plus solid, soft and glass surfaces."
      importCode={`import { Calendar } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Interactive calendar with the current date selected. Click the month/year header to pick a different month or year."
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar selected={date} onSelect={setDate} />`}
      >
        <div className="border border-border rounded-sm bg-background w-fit">
          <CalendarDemo />
        </div>
      </DemoSection>

      <DemoSection
        title="Range + Glass"
        description="Range start, middle and end states use semantic selection roles."
        code={`const [range, setRange] = useState<DateRange | undefined>();

<Calendar mode="range" selected={range} onSelect={setRange} surface="glass" radius="xl" />`}
      >
        <div className="w-fit rounded-2xl bg-[radial-gradient(circle_at_top,var(--color-primary-muted),var(--color-background))] p-4">
          <CalendarRangeDemo />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
