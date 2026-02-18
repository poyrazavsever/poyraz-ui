"use client";

import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/molecules/modal";
import { ComponentPage, DemoSection } from "@/components/docs/code-block";

export default function ModalPage() {
  return (
    <ComponentPage
      name="Modal"
      description="Opinionated dialog wrapper with size variants (sm, default, lg, xl, full) and positioned at center. Built on Radix Dialog."
      importCode={`import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "poyraz-ui/molecules";`}
    >
      <DemoSection
        title="Size Variants"
        description="Small, default, and large modal sizes."
        code={`<Modal>
  <ModalTrigger asChild>
    <Button variant="outline">Default Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Default Modal</ModalTitle>
      <ModalDescription>Standard size.</ModalDescription>
    </ModalHeader>
    <p>Modal content here.</p>
    <ModalFooter>
      <ModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ModalClose>
      <Button>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`}
      >
        <div className="flex flex-wrap gap-3">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Small Modal</Button>
            </ModalTrigger>
            <ModalContent size="sm">
              <ModalHeader>
                <ModalTitle>Small Modal</ModalTitle>
                <ModalDescription>
                  Compact size for confirmations.
                </ModalDescription>
              </ModalHeader>
              <p className="text-sm text-slate-600">
                Are you sure you want to continue?
              </p>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </ModalClose>
                <Button size="sm">Confirm</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Default Modal</Button>
            </ModalTrigger>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>Default Modal</ModalTitle>
                <ModalDescription>Standard size for forms.</ModalDescription>
              </ModalHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="mdl-name">Name</Label>
                  <Input id="mdl-name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mdl-email">Email</Label>
                  <Input
                    id="mdl-email"
                    type="email"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="outline">Cancel</Button>
                </ModalClose>
                <Button>Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Large Modal</Button>
            </ModalTrigger>
            <ModalContent size="lg">
              <ModalHeader>
                <ModalTitle>Large Modal</ModalTitle>
                <ModalDescription>
                  Extra room for complex content.
                </ModalDescription>
              </ModalHeader>
              <p className="text-sm text-slate-600">
                The large variant provides more room for tables, multi-step
                forms, or detailed content.
              </p>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="outline">Close</Button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </DemoSection>
    </ComponentPage>
  );
}
