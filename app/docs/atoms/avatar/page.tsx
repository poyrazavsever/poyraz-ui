"use client";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/atoms/avatar";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function AvatarPage() {
  return (
    <ComponentPage
      name="Avatar"
      description="User image and fallback primitive with explicit size and radius recipes."
      importCode={`import { Avatar, AvatarImage, AvatarFallback } from "poyraz-ui/atoms";`}
    >
      <DemoSection
        title="With Image"
        description="Displays an image when available, falls back to initials."
        code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      >
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/poyrazavsever.png" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>

      <DemoSection
        title="Fallback"
        description="When no image is provided, initials are shown."
        code={`<Avatar>
  <AvatarFallback>PA</AvatarFallback>
</Avatar>`}
      >
        <div className="flex gap-4 items-center">
          <Avatar>
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>UI</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        description="Use the size recipe and choose radius independently."
        code={`<Avatar className="h-8 w-8">
  <AvatarFallback className="text-xs">S</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>M</AvatarFallback>
</Avatar>
<Avatar className="h-14 w-14">
  <AvatarFallback className="text-lg">L</AvatarFallback>
</Avatar>`}
      >
        <div className="flex gap-4 items-center">
          <Avatar size="sm" radius="md">
            <AvatarFallback className="text-xs">S</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <Avatar size="xl" radius="full">
            <AvatarFallback className="text-lg">L</AvatarFallback>
          </Avatar>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
