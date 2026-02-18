"use client";

import {
  CalendarIcon,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
} from "lucide-react";
import { Button } from "poyraz-ui/atoms";
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteSeparator,
  CommandPaletteFooter,
} from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function CommandPalettePage() {
  return (
    <ComponentPage
      name="Command Palette"
      description="A Cmd+K style global search and command overlay. Built on Radix Dialog with a built-in search context, keyboard hint badges, and grouped items."
      importCode={`import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteSeparator,
  CommandPaletteFooter,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="Full command palette with grouped items, icons, and keyboard shortcuts."
        code={`<CommandPalette>
  <CommandPaletteTrigger asChild>
    <Button variant="outline">Open Command Palette</Button>
  </CommandPaletteTrigger>
  <CommandPaletteContent>
    <CommandPaletteInput placeholder="Type a command or search..." />
    <CommandPaletteList>
      <CommandPaletteGroup heading="Suggestions">
        <CommandPaletteItem icon={<CalendarIcon />} shortcut="⌘D">
          Calendar
        </CommandPaletteItem>
        <CommandPaletteItem icon={<Smile />} shortcut="⌘E">
          Search Emoji
        </CommandPaletteItem>
      </CommandPaletteGroup>
      <CommandPaletteSeparator />
      <CommandPaletteGroup heading="Settings">
        <CommandPaletteItem icon={<User />} shortcut="⌘P">
          Profile
        </CommandPaletteItem>
        <CommandPaletteItem icon={<Settings />} shortcut="⌘S">
          Settings
        </CommandPaletteItem>
      </CommandPaletteGroup>
    </CommandPaletteList>
    <CommandPaletteFooter>
      <span>↑↓ Navigate</span>
      <span>·</span>
      <span>↵ Select</span>
      <span>·</span>
      <span>Esc Close</span>
    </CommandPaletteFooter>
  </CommandPaletteContent>
</CommandPalette>`}
      >
        <CommandPalette>
          <CommandPaletteTrigger asChild>
            <Button variant="outline" className="gap-2">
              <span>Open Command Palette</span>
              <kbd className="ml-1 text-[11px] font-mono tracking-wider text-slate-400 border border-dashed border-slate-200 px-1.5 py-0.5">
                ⌘K
              </kbd>
            </Button>
          </CommandPaletteTrigger>
          <CommandPaletteContent>
            <CommandPaletteInput placeholder="Type a command or search..." />
            <CommandPaletteList>
              <CommandPaletteGroup heading="Suggestions">
                <CommandPaletteItem
                  icon={<CalendarIcon className="h-4 w-4" />}
                  shortcut="⌘D"
                >
                  Calendar
                </CommandPaletteItem>
                <CommandPaletteItem
                  icon={<Smile className="h-4 w-4" />}
                  shortcut="⌘E"
                >
                  Search Emoji
                </CommandPaletteItem>
                <CommandPaletteItem icon={<Calculator className="h-4 w-4" />}>
                  Calculator
                </CommandPaletteItem>
              </CommandPaletteGroup>
              <CommandPaletteSeparator />
              <CommandPaletteGroup heading="Settings">
                <CommandPaletteItem
                  icon={<User className="h-4 w-4" />}
                  shortcut="⌘P"
                >
                  Profile
                </CommandPaletteItem>
                <CommandPaletteItem
                  icon={<CreditCard className="h-4 w-4" />}
                  shortcut="⌘B"
                >
                  Billing
                </CommandPaletteItem>
                <CommandPaletteItem
                  icon={<Settings className="h-4 w-4" />}
                  shortcut="⌘S"
                >
                  Settings
                </CommandPaletteItem>
              </CommandPaletteGroup>
            </CommandPaletteList>
            <CommandPaletteFooter>
              <span>Navigate with ↑↓</span>
              <span>·</span>
              <span>Select with ↵</span>
              <span>·</span>
              <span>Close with Esc</span>
            </CommandPaletteFooter>
          </CommandPaletteContent>
        </CommandPalette>
      </DemoSection>
    </ComponentPage>
  );
}
