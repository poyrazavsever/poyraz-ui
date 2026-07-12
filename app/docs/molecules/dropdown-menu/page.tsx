"use client";

import { User, CreditCard, Settings, Keyboard, LogOut, Sparkles, Users } from "lucide-react";
import { Button } from "poyraz-ui/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function DropdownMenuPage() {
  return (
    <ComponentPage
      name="Dropdown Menu"
      description="A floating menu of actions. Built on Radix DropdownMenu with grouped items, shortcuts, separators, and sub-menus."
      importCode={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="A menu with grouped items, keyboard shortcuts, and a separator."
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        Profile
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard className="mr-2 h-4 w-4" />
        Billing
        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        Settings
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 h-4 w-4" />
      Log out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>

      <DemoSection
        title="Hover + Glass"
        description="Mouse hover opens the menu; keyboard, touch, and click remain available. Surface, radius, density, and nested motion are independent options."
        code={`<DropdownMenu interaction="hover" closeDelay={160}>
  <DropdownMenuTrigger asChild>
    <Button variant="glass">Hover me</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent surface="glass" radius="xl" itemSize="lg">
    <DropdownMenuItem media={<Sparkles />} description="Generate a polished starting point">
      AI workspace
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu interaction="hover" closeDelay={160}>
          <DropdownMenuTrigger asChild>
            <Button variant="glass">Hover or click</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent surface="glass" radius="xl" itemSize="lg" className="w-72">
            <DropdownMenuLabel>Quick actions</DropdownMenuLabel>
            <DropdownMenuItem
              media={<Sparkles className="size-4 text-primary" />}
              description="Generate a polished starting point"
              trailing={<DropdownMenuShortcut>⌘G</DropdownMenuShortcut>}
            >
              AI workspace
            </DropdownMenuItem>
            <DropdownMenuItem
              media={<Users className="size-4" />}
              description="Invite and manage collaborators"
            >
              Team access
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>

      <DemoSection
        title="Compact and Spacious"
        description="The same menu anatomy can be compact and text-only, or spacious with rich media and supporting copy."
        code={`<DropdownMenuContent surface="soft" itemSize="sm">...</DropdownMenuContent>
<DropdownMenuContent surface="solid" itemSize="lg" itemRadius="lg">...</DropdownMenuContent>`}
      >
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline" size="sm">Compact</Button></DropdownMenuTrigger>
            <DropdownMenuContent surface="soft" itemSize="sm" radius="md">
              <DropdownMenuItem>Overview</DropdownMenuItem>
              <DropdownMenuItem>Analytics</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="outline">Rich content</Button></DropdownMenuTrigger>
            <DropdownMenuContent surface="solid" itemSize="lg" itemRadius="lg" className="w-72">
              <DropdownMenuItem media={<span className="font-semibold text-primary">PA</span>} description="Product designer · Istanbul">Poyraz Avsever</DropdownMenuItem>
              <DropdownMenuItem media={<CreditCard className="size-4" />} description="Plan, invoices and payment methods">Billing</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </DemoSection>

      <DemoSection
        title="Sub Menu"
        description="Nested sub-menu for grouped actions."
        code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
    <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu with Sub</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Slack</DropdownMenuItem>
                <DropdownMenuItem>Copy Link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoSection>
    </ComponentPage>
  );
}
