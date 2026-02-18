"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/molecules/accordion";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function AccordionPage() {
  return (
    <ComponentPage
      name="Accordion"
      description="Vertically collapsible content panels. Built on Radix Accordion with dashed-border styling. Supports single or multiple open panels."
      importCode={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Single (Collapsible)"
        description="Only one panel open at a time, can close all."
        code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It uses the brutalist dashed-border aesthetic.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It uses the brutalist dashed-border aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I customize it?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Use className to override any styles.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>

      <DemoSection
        title="Multiple"
        description="Multiple panels can be open simultaneously."
        code={`<Accordion type="multiple">
  <AccordionItem value="a">
    <AccordionTrigger>Section A</AccordionTrigger>
    <AccordionContent>Content A</AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Section B</AccordionTrigger>
    <AccordionContent>Content B</AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="a">
            <AccordionTrigger>Section A</AccordionTrigger>
            <AccordionContent>
              You can open multiple panels at once.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Section B</AccordionTrigger>
            <AccordionContent>
              This one can also be open while A is open.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoSection>
    </ComponentPage>
  );
}
