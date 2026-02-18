"use client";

import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/molecules/dialog";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function DialogPage() {
  return (
    <ComponentPage
      name="Dialog"
      description="Modal dialog overlay built on Radix Dialog. Blocks interaction with the rest of the page until dismissed."
      importCode={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Default"
        description="A standard dialog with header, content, and footer."
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right">Name</Label>
        <Input className="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dlg-name" className="text-right text-sm">
                  Name
                </Label>
                <Input
                  id="dlg-name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dlg-user" className="text-right text-sm">
                  Username
                </Label>
                <Input
                  id="dlg-user"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoSection>
    </ComponentPage>
  );
}
