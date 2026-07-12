"use client";

import * as React from "react";
import { Label } from "@/components/ui/atoms/label";
import {
  NumberInput,
  MaskedInput,
  SearchInput,
  PhoneInput,
  PasswordInput,
  UrlInput,
} from "@/components/ui/atoms/form-fields";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

function NumberInputDemo() {
  const [value, setValue] = React.useState(5);
  return <NumberInput value={value} onChange={setValue} min={0} max={100} />;
}

export default function FormFieldsPage() {
  return (
    <ComponentPage
      name="Form Fields"
      description="Specialized InputGroup compositions with one shared focus ring across editable input, icons, prefixes and actions."
      importCode={`import {
  NumberInput,
  MaskedInput,
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
          <SearchInput variant="glass" radius="xl" placeholder="Search components..." />
        </div>
      </DemoSection>

      <DemoSection
        title="Phone Input"
        description="Country prefix and customizable digit mask. # accepts digits, A letters and * alphanumeric characters."
        code={`<PhoneInput countryCode="+90" mask="(###) ### ## ##" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>Phone</Label>
          <PhoneInput countryCode="+90" mask="(###) ### ## ##" />
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
        description="Protocol-aware URL field strips duplicate protocol and whitespace while preserving the normalized value."
        code={`<UrlInput protocol="https://" placeholder="example.com/path" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>URL</Label>
          <UrlInput placeholder="example.com" />
        </div>
      </DemoSection>

      <DemoSection
        title="Custom Mask"
        description="Use MaskedInput for project-specific identifiers without adding a masking dependency."
        code={`<MaskedInput mask="AA-####-****" placeholder="TR-2026-A1B2" />`}
      >
        <div className="max-w-sm space-y-2">
          <Label>Reference code</Label>
          <MaskedInput mask="AA-####-****" placeholder="TR-2026-A1B2" />
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
