"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/molecules/tooltip";
import { Button } from "@/components/ui/atoms/button";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function TooltipPage() {
  return (
    <ComponentPage
      name="Tooltip"
      description="Popup hint that appears on hover. Built on Radix Tooltip with brutalist dashed border style."
      importCode={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Basic tooltip on hover."
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DemoSection>

      <DemoSection
        title="Side Positions"
        description="Tooltip can appear on any side of the trigger."
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">Tooltip on top</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Right</Button>
    </TooltipTrigger>
    <TooltipContent side="right">Tooltip on right</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
  </Tooltip>

  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Left</Button>
    </TooltipTrigger>
    <TooltipContent side="left">Tooltip on left</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Tooltip on top</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">Tooltip on right</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">Tooltip on left</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </DemoSection>
    </ComponentPage>
  );
}
