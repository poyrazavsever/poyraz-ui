"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "poyraz-ui/atoms";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "poyraz-ui/atoms";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function HoverCardPage() {
  return (
    <ComponentPage
      name="Hover Card"
      description="A floating card that appears on hover. Built on Radix HoverCard — great for user profiles and preview tooltips."
      importCode={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="User Profile"
        description="Hover to show a user profile card."
        code={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@poyrazavsever</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/poyrazavsever.png" />
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@poyrazavsever</h4>
        <p className="text-sm text-slate-500">
          Creator of Poyraz UI.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-base">
              @poyrazavsever
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/poyrazavsever.png" />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@poyrazavsever</h4>
                <p className="text-sm text-slate-500">
                  Creator of Poyraz UI — Brutalist design system for the modern
                  web.
                </p>
                <div className="flex items-center pt-1">
                  <CalendarIcon className="mr-2 h-3 w-3 opacity-70" />
                  <span className="text-xs text-slate-400">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </DemoSection>
    </ComponentPage>
  );
}
