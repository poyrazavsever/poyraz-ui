"use client";

import { Button } from "@/components/ui/atoms/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/molecules/popover";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function PopoverPage() {
  return (
    <ComponentPage
      name="Popover"
      description="Floating content panel anchored to a trigger element. Built on Radix Popover — ideal for settings, filters, and inline forms."
      importCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Click the trigger to open a popover panel."
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-slate-500">
          Set the dimensions for the layer.
        </p>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-slate-500">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Width
                  </p>
                  <p className="text-sm">100%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Height
                  </p>
                  <p className="text-sm">auto</p>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DemoSection>
    </ComponentPage>
  );
}
