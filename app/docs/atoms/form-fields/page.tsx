"use client";

import * as React from "react";
import { Label } from "@/components/ui/atoms/label";
import {
  NumberInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
} from "@/components/ui/atoms/form-fields";
import {
  ComponentPage,
  DemoSection,
} from "@/components/docs/code-block";

function NumberInputDemo() {
  const [value, setValue] = React.useState(5);
  return <NumberInput value={value} onChange={setValue} min={0} max={100} />;
}

export default function FormFieldsPage() {
  return (
    <ComponentPage
      name="Form Fields"
      description="Specialized input variants — number stepper, search, phone, password toggle, and URL prefix. Built on top of the base Input atom."
      importCode={`import {
  NumberInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
} from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="Number Input"
        description="Stepper input with increment/decrement buttons and min/max constraints."
        code={`const [value, setValue] = useState(5);

<NumberInput
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`}
      >
        <div className="max-w-xs space-y-2">
          <Label>Quantity</Label>
          <NumberInputDemo />
        </div>
      </DemoSection>

      <DemoSection
        title="Search Input"
        description="Input with a search icon prefix."
        code={`<SearchInput placeholder="Search components..." />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>Search</Label>
          <SearchInput placeholder="Search components..." />
        </div>
      </DemoSection>

      <DemoSection
        title="Phone Input"
        description="Input with a country code prefix."
        code={`<PhoneInput countryCode="+90" placeholder="555 123 4567" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>Phone</Label>
          <PhoneInput countryCode="+90" placeholder="555 123 4567" />
        </div>
      </DemoSection>

      <DemoSection
        title="Password Input"
        description="Input with a toggle button to show/hide password."
        code={`<PasswordInput placeholder="Enter password" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>Password</Label>
          <PasswordInput placeholder="Enter password" />
        </div>
      </DemoSection>

      <DemoSection
        title="URL Input"
        description="Input with an https:// prefix."
        code={`<UrlInput placeholder="example.com" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>URL</Label>
          <UrlInput placeholder="example.com" />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
