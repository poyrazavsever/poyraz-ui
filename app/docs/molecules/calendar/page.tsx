"use client";

import * as React from "react";
import { Calendar } from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar selected={date} onSelect={setDate} />;
}

function CalendarRangeDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <Calendar selected={date} onSelect={setDate} />;
}

export default function CalendarPage() {
  return (
    <ComponentPage
      name="Calendar"
      description="An inline date calendar component with month navigation. Click the month/year header to switch to month view, then year view. Supports single-date selection with custom styling."
      importCode={`import { Calendar } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Interactive calendar with the current date selected. Click the month/year header to pick a different month or year."
        code={`const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar selected={date} onSelect={setDate} />`}
      >
        <div className="border-2 border-dashed border-slate-200 bg-white w-fit">
          <CalendarDemo />
        </div>
      </DemoSection>

      <DemoSection
        title="No Default Selection"
        description="Calendar with no date pre-selected. Use the header to navigate months and years."
        code={`const [date, setDate] = useState<Date | undefined>();

<Calendar selected={date} onSelect={setDate} />`}
      >
        <div className="border-2 border-dashed border-slate-200 bg-white w-fit">
          <CalendarRangeDemo />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
