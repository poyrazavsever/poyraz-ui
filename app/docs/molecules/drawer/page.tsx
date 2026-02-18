"use client";

import { Button } from "poyraz-ui/atoms";
import { Input } from "poyraz-ui/atoms";
import { Label } from "poyraz-ui/atoms";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "poyraz-ui/molecules";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function DrawerPage() {
  return (
    <ComponentPage
      name="Drawer"
      description="A bottom sheet component built on vaul. Slides up from the bottom with drag-to-dismiss support."
      importCode={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="A drawer with a form inside. Drag the handle or click overlay to dismiss."
        code={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Edit Profile</DrawerTitle>
        <DrawerDescription>
          Make changes to your profile.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label>Name</Label>
          <Input placeholder="Your name" />
        </div>
      </div>
      <DrawerFooter>
        <Button>Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit Profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile. Click save when you&apos;re
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="drw-name">Name</Label>
                  <Input id="drw-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="drw-email">Email</Label>
                  <Input
                    id="drw-email"
                    type="email"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </DemoSection>
    </ComponentPage>
  );
}
