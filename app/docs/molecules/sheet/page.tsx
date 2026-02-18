"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/molecules/sheet";
import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function SheetPage() {
  return (
    <ComponentPage
      name="Sheet"
      description="Full-height side panel that slides in from any edge. Built on Radix Dialog with side variants."
      importCode={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Right (Default)"
        description="Sheet sliding in from the right side."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Name</Label>
        <Input className="col-span-3" defaultValue="Poyraz" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Email</Label>
        <Input className="col-span-3" defaultValue="hello@poyraz.dev" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Name</Label>
                <Input className="col-span-3" defaultValue="Poyraz" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Email</Label>
                <Input className="col-span-3" defaultValue="hello@poyraz.dev" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </DemoSection>

      <DemoSection
        title="Left Side"
        description="Sheet sliding from the left."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>Browse sections of the app.</SheetDescription>
    </SheetHeader>
    <nav className="flex flex-col gap-2 py-4">
      <a href="#" className="text-sm font-medium hover:underline">Home</a>
      <a href="#" className="text-sm font-medium hover:underline">About</a>
      <a href="#" className="text-sm font-medium hover:underline">Contact</a>
    </nav>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Browse sections of the app.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 py-4">
              <a href="#" className="text-sm font-medium hover:underline">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:underline">
                About
              </a>
              <a href="#" className="text-sm font-medium hover:underline">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </DemoSection>

      <DemoSection
        title="Top & Bottom"
        description="Sheets can also slide from top or bottom edges."
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Top</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Notification</SheetTitle>
      <SheetDescription>You have 3 unread messages.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Cookie Consent</SheetTitle>
      <SheetDescription>We use cookies to improve your experience.</SheetDescription>
    </SheetHeader>
    <div className="flex gap-2 pt-4">
      <Button>Accept All</Button>
      <Button variant="outline">Decline</Button>
    </div>
  </SheetContent>
</Sheet>`}
      >
        <div className="flex gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notification</SheetTitle>
                <SheetDescription>You have 3 unread messages.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Cookie Consent</SheetTitle>
                <SheetDescription>
                  We use cookies to improve your experience.
                </SheetDescription>
              </SheetHeader>
              <div className="flex gap-2 pt-4">
                <Button>Accept All</Button>
                <Button variant="outline">Decline</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
