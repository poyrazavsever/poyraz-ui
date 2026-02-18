"use client";

import * as React from "react";
import {
  Autocomplete,
  type AutocompleteOption,
} from "@/components/ui/molecules/autocomplete";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

const fruits: AutocompleteOption[] = [
  { value: "apple", label: "Apple", group: "Popular" },
  { value: "banana", label: "Banana", group: "Popular" },
  { value: "cherry", label: "Cherry", group: "Berries" },
  { value: "blueberry", label: "Blueberry", group: "Berries" },
  { value: "strawberry", label: "Strawberry", group: "Berries" },
  { value: "mango", label: "Mango", group: "Tropical" },
  { value: "pineapple", label: "Pineapple", group: "Tropical" },
  { value: "kiwi", label: "Kiwi", group: "Tropical" },
  { value: "grapes", label: "Grapes" },
  { value: "watermelon", label: "Watermelon" },
];

const languages: AutocompleteOption[] = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
];

function SingleDemo() {
  const [value, setValue] = React.useState<string>("");
  return (
    <Autocomplete
      options={languages}
      value={value}
      onValueChange={(v) => setValue(v as string)}
      placeholder="Search a language…"
      className="max-w-xs"
    />
  );
}

function MultipleDemo() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Autocomplete
      options={fruits}
      value={value}
      onValueChange={(v) => setValue(v as string[])}
      placeholder="Pick fruits…"
      multiple
      className="max-w-sm"
    />
  );
}

function GroupedDemo() {
  const [value, setValue] = React.useState<string>("");
  return (
    <Autocomplete
      options={fruits}
      value={value}
      onValueChange={(v) => setValue(v as string)}
      placeholder="Search grouped options…"
      className="max-w-xs"
    />
  );
}

function FreeSoloDemo() {
  const [value, setValue] = React.useState<string[]>([]);
  return (
    <Autocomplete
      options={languages}
      value={value}
      onValueChange={(v) => setValue(v as string[])}
      placeholder="Type anything…"
      multiple
      freeSolo
      className="max-w-sm"
    />
  );
}

export default function AutocompletePage() {
  return (
    <ComponentPage
      name="Autocomplete"
      description="A searchable combobox / typeahead component. Supports single and multi-select, grouped options, free-form input, and keyboard navigation."
      importCode={`import { Autocomplete } from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Single Select"
        description="Basic autocomplete with single selection."
        code={`const [value, setValue] = useState("");

<Autocomplete
  options={languages}
  value={value}
  onValueChange={(v) => setValue(v as string)}
  placeholder="Search a language…"
/>`}
      >
        <SingleDemo />
      </DemoSection>

      <DemoSection
        title="Multiple Select"
        description="Select multiple options with tag-style chips."
        code={`const [value, setValue] = useState<string[]>([]);

<Autocomplete
  options={fruits}
  value={value}
  onValueChange={(v) => setValue(v as string[])}
  placeholder="Pick fruits…"
  multiple
/>`}
      >
        <MultipleDemo />
      </DemoSection>

      <DemoSection
        title="Grouped Options"
        description="Options organized by group headers."
        code={`<Autocomplete
  options={[
    { value: "apple", label: "Apple", group: "Popular" },
    { value: "cherry", label: "Cherry", group: "Berries" },
    { value: "mango", label: "Mango", group: "Tropical" },
  ]}
  value={value}
  onValueChange={setValue}
/>`}
      >
        <GroupedDemo />
      </DemoSection>

      <DemoSection
        title="Free Solo"
        description="Allow entering custom values not in the option list."
        code={`<Autocomplete
  options={languages}
  value={value}
  onValueChange={(v) => setValue(v as string[])}
  placeholder="Type anything…"
  multiple
  freeSolo
/>`}
      >
        <FreeSoloDemo />
      </DemoSection>
    </ComponentPage>
  );
}
