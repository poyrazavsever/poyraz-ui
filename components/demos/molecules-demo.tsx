"use client";

import * as React from "react";
import {
  CreditCard,
  Settings,
  User,
  LogOut,
  Keyboard,
  CalendarIcon,
} from "lucide-react";
import { toast } from "@/components/ui/molecules/sonner";

import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/atoms/avatar";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/molecules/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/molecules/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/molecules/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/molecules/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/molecules/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/molecules/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/molecules/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/molecules/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/molecules/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/molecules/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/molecules/hover-card";
import { Calendar } from "@/components/ui/molecules/calendar";
import { DatePicker } from "@/components/ui/molecules/date-picker";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/molecules/drawer";
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

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar selected={date} onSelect={setDate} />;
}

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <DatePicker selected={date} onSelect={setDate} placeholder="Pick a date" />
  );
}

export function MoleculesDemo() {
  return (
    <div className="space-y-16 w-full">
      {/* ALERT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Alert</h3>
        <div className="grid gap-3">
          <Alert>
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="info">
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Your account has been updated with new permissions.
            </AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Your free trial is expiring in 3 days.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* TOAST */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Toast / Sonner</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => toast("Event has been created")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info("A new software update is available.")}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Changes saved successfully.")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("Your trial is expiring soon.")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Something went wrong.")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            With Action
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: "Loading...",
                  success: "Data loaded successfully!",
                  error: "Failed to load data.",
                },
              );
            }}
          >
            Promise
          </Button>
        </div>
      </section>

      {/* TABS */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Tabs</h3>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </section>

      {/* ACCORDION */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Accordion</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* BREADCRUMB */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Breadcrumb</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* PAGINATION */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Pagination</h3>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>

      {/* DIALOG */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Dialog</h3>
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
                <label htmlFor="name" className="text-right text-sm">
                  Name
                </label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right text-sm">
                  Username
                </label>
                <Input
                  id="username"
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
      </section>

      {/* POPOVER */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Popover</h3>
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
            </div>
          </PopoverContent>
        </Popover>
      </section>

      {/* TOOLTIP */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Tooltip</h3>
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
      </section>

      {/* SELECT */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Select</h3>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      {/* DROPDOWN MENU */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Dropdown Menu</h3>
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
      </section>

      {/* HOVER CARD */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Hover Card</h3>
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
      </section>

      {/* CALENDAR & DATE PICKER */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Calendar & Date Picker</h3>
        <div className="grid sm:grid-cols-2 gap-6 items-start">
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Inline Calendar</Label>
            <div className="border-2 border-dashed border-slate-200 bg-white w-fit">
              <CalendarDemo />
            </div>
          </div>
          <div className="space-y-2 max-w-xs">
            <Label className="text-sm font-semibold">Date Picker</Label>
            <DatePickerDemo />
          </div>
        </div>
      </section>

      {/* DRAWER */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Drawer</h3>
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
                  <Label htmlFor="drawer-name">Name</Label>
                  <Input id="drawer-name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="drawer-email">Email</Label>
                  <Input
                    id="drawer-email"
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
      </section>

      {/* MODAL */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold">Modal</h3>
        <p className="text-sm text-slate-500">
          Opinionated dialog with size variants (sm, default, lg, xl, full) and
          position options.
        </p>
        <div className="flex flex-wrap gap-3">
          <Modal>
            <ModalTrigger asChild>
              <Button variant="outline">Small Modal</Button>
            </ModalTrigger>
            <ModalContent size="sm">
              <ModalHeader>
                <ModalTitle>Small Modal</ModalTitle>
                <ModalDescription>
                  This is the small size variant.
                </ModalDescription>
              </ModalHeader>
              <p className="text-sm text-slate-600">
                Compact modal for confirmations and quick actions.
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
                <ModalDescription>
                  Standard size for forms and content.
                </ModalDescription>
              </ModalHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Name</Label>
                  <Input id="modal-name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modal-email">Email</Label>
                  <Input
                    id="modal-email"
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
                  Extra space for complex content.
                </ModalDescription>
              </ModalHeader>
              <p className="text-sm text-slate-600">
                The large variant provides more room for tables, multi-step
                forms, or detailed content layouts.
              </p>
              <ModalFooter>
                <ModalClose asChild>
                  <Button variant="outline">Close</Button>
                </ModalClose>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </section>
    </div>
  );
}
