"use client";

import { type CSSProperties, useState } from "react";
import { ArrowRight, Bell, Search, Settings, Sparkles, User } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Logo,
  NumberInput,
  PatternDots,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Separator,
  Skeleton,
  Switch,
  Textarea,
  Typography,
} from "poyraz-ui/atoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Autocomplete,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Calendar,
  CommandPalette,
  CommandPaletteContent,
  CommandPaletteEmpty,
  CommandPaletteGroup,
  CommandPaletteInput,
  CommandPaletteItem,
  CommandPaletteList,
  CommandPaletteTrigger,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Mermaid,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  StarRating,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  toast,
} from "poyraz-ui/molecules";

const HERO_COMPONENT_ROWS = [
  ["Avatar", "Badge", "Bg Pattern", "Button", "Card", "Checkbox", "Form Fields"],
  ["Input", "Label", "Logo", "Radio Group", "Scroll Area", "Separator", "Skeleton"],
  ["Switch", "Textarea", "Typography", "Accordion", "Alert", "Autocomplete", "Breadcrumb"],
  ["Calendar", "Command Palette", "Date Picker", "Dialog", "Drawer", "Dropdown Menu"],
  ["Form", "Hover Card", "Mermaid", "Modal", "Pagination", "Popover"],
  ["Select", "Sheet", "Sonner", "Star Rating", "Tabs", "Tooltip"],
] as const;

type HeroComponentName = (typeof HERO_COMPONENT_ROWS)[number][number];

const HERO_WIDE_COMPONENTS = new Set<HeroComponentName>([
  "Accordion",
  "Alert",
  "Autocomplete",
  "Calendar",
  "Card",
  "Command Palette",
  "Form",
  "Mermaid",
  "Pagination",
  "Scroll Area",
  "Tabs",
]);

const heroAutocompleteOptions = [
  { value: "button", label: "Button", description: "Atom" },
  { value: "dialog", label: "Dialog", description: "Molecule" },
  { value: "navbar", label: "Navbar", description: "Organism" },
];

function HeroNumberInputDemo() {
  const [value, setValue] = useState(3);

  return (
    <NumberInput
      aria-label="Component count"
      value={value}
      min={1}
      max={12}
      onChange={setValue}
      variant="glass"
      className="w-52 shadow-lg"
    />
  );
}

function HeroFormDemo() {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });

  return (
    <Form {...form}>
      <form
        className="flex w-80 items-end gap-2"
        onSubmit={form.handleSubmit(() => toast.success("Form submitted"))}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" variant="glass" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Join</Button>
      </form>
    </Form>
  );
}

function HeroComponentPreview({
  name,
  onInteractionChange,
}: {
  name: HeroComponentName;
  onInteractionChange: (active: boolean) => void;
}) {
  switch (name) {
    case "Avatar":
      return (
        <div className="flex items-center -space-x-3">
          {["PA", "UI", "V3"].map((label, index) => (
            <Avatar key={label} className="size-14 border-2 border-background shadow-xl">
              {index === 0 ? (
                <AvatarImage src="https://github.com/poyrazavsever.png" alt="Poyraz Avsever" />
              ) : null}
              <AvatarFallback>{label}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      );

    case "Badge":
      return (
        <Badge
          variant="success"
          className="px-5 py-2 text-sm shadow-lg"
          onClick={() => toast.success("Badge is rendered from Poyraz UI")}
        >
          Production ready
        </Badge>
      );

    case "Bg Pattern":
      return (
        <PatternDots
          color="currentColor"
          opacity={0.42}
          size={18}
          className="h-24 w-56 rounded-2xl border border-border bg-surface/40 text-primary shadow-xl"
        />
      );

    case "Button":
      return (
        <Button
          size="lg"
          effect="shine"
          onClick={() => toast.success("Poyraz UI button clicked")}
          className="shadow-xl"
        >
          Try Poyraz UI <ArrowRight className="size-4" />
        </Button>
      );

    case "Card":
      return (
        <Card
          variant="interactive"
          tabIndex={0}
          className="w-72 shadow-xl"
          onClick={() => toast.info("Interactive Card selected")}
          onKeyDown={(event) => {
            if (event.key === "Enter") toast.info("Interactive Card selected");
          }}
        >
          <CardHeader className="pb-2">
            <CardTitle>Source owned</CardTitle>
            <CardDescription>Copy it, customize it, ship it.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">poyraz-ui</Badge>
          </CardContent>
        </Card>
      );

    case "Checkbox":
      return (
        <Label className="flex cursor-pointer items-center gap-3 text-base">
          <Checkbox defaultChecked />
          Accessible defaults
        </Label>
      );

    case "Form Fields":
      return <HeroNumberInputDemo />;

    case "Input":
      return (
        <Input
          aria-label="Hero email input"
          placeholder="Type something..."
          variant="glass"
          className="w-64 shadow-lg"
        />
      );

    case "Label":
      return (
        <Label className="cursor-pointer text-lg" onClick={() => toast.info("Label")}>
          Email address <span className="text-destructive">*</span>
        </Label>
      );

    case "Logo":
      return (
        <Logo
          href="/docs"
          width={68}
          height={68}
          effect="shine-loop"
          radius="xl"
          className="shadow-2xl"
        />
      );

    case "Radio Group":
      return (
        <RadioGroup defaultValue="registry" className="flex gap-5">
          {[
            ["registry", "Registry"],
            ["package", "Package"],
          ].map(([value, label]) => (
            <Label key={value} className="flex cursor-pointer items-center gap-2">
              <RadioGroupItem value={value} />
              {label}
            </Label>
          ))}
        </RadioGroup>
      );

    case "Scroll Area":
      return (
        <ScrollArea
          maxHeight={116}
          scrollbarSize="sm"
          className="w-72 rounded-xl border border-border bg-surface p-3 text-foreground shadow-xl"
        >
          <div className="space-y-2 pr-3">
            {["Avatar", "Button", "Dialog", "Navbar"].map((component) => (
              <Button
                key={component}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => toast.info(component)}
              >
                {component}
              </Button>
            ))}
          </div>
        </ScrollArea>
      );

    case "Separator":
      return <Separator className="w-64 border-border-strong" />;

    case "Skeleton":
      return (
        <div className="flex w-64 items-center gap-3">
          <Skeleton className="size-14 rounded-full" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      );

    case "Switch":
      return (
        <Label className="flex cursor-pointer items-center gap-4 text-base">
          <Switch defaultChecked />
          Motion
        </Label>
      );

    case "Textarea":
      return (
        <Textarea
          aria-label="Hero notes"
          placeholder="Write component notes..."
          variant="glass"
          className="min-h-24 w-72 shadow-lg"
        />
      );

    case "Typography":
      return (
        <Typography variant="h3" className="max-w-72 text-2xl leading-tight">
          Build beautifully.
        </Typography>
      );

    case "Accordion":
      return (
        <Accordion
          type="single"
          collapsible
          className="w-80 rounded-xl bg-surface px-5 text-foreground shadow-xl"
        >
          <AccordionItem value="hero-accessible">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. Keyboard and screen-reader behavior is built in.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    case "Alert":
      return (
        <Alert
          variant="success"
          appearance="glass"
          radius="xl"
          dismissible
          className="w-80 shadow-xl"
        >
          <AlertTitle>Ready to ship</AlertTitle>
          <AlertDescription>All component checks passed.</AlertDescription>
        </Alert>
      );

    case "Autocomplete":
      return (
        <Autocomplete
          options={heroAutocompleteOptions}
          defaultValue="button"
          placeholder="Find component..."
          variant="glass"
          radius="xl"
          className="w-72 [&>div:first-child]:shadow-xl"
        />
      );

    case "Breadcrumb":
      return (
        <Breadcrumb className="text-base">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/atoms">Atoms</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Button</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );

    case "Calendar":
      return (
        <Calendar
          mode="single"
          size="compact"
          surface="glass"
          radius="xl"
          defaultSelected={new Date(2026, 6, 13)}
          initialMonth={new Date(2026, 6, 1)}
          className="origin-center scale-[0.64] shadow-xl"
        />
      );

    case "Command Palette":
      return (
        <CommandPalette onOpenChange={onInteractionChange}>
          <CommandPaletteTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              <Search className="size-4" /> Search commands
            </Button>
          </CommandPaletteTrigger>
          <CommandPaletteContent surface="glass" radius="xl">
            <CommandPaletteInput placeholder="Type a command..." />
            <CommandPaletteList>
              <CommandPaletteEmpty>No results found.</CommandPaletteEmpty>
              <CommandPaletteGroup heading="Components">
                <CommandPaletteItem icon={<Sparkles className="size-4" />}>
                  Browse components
                </CommandPaletteItem>
                <CommandPaletteItem icon={<Settings className="size-4" />}>
                  Open settings
                </CommandPaletteItem>
              </CommandPaletteGroup>
            </CommandPaletteList>
          </CommandPaletteContent>
        </CommandPalette>
      );

    case "Date Picker":
      return (
        <DatePicker
          defaultSelected={new Date(2026, 6, 13)}
          popoverSurface="glass"
          triggerVariant="glass"
          className="w-64 [&_[data-slot=button]]:shadow-xl"
        />
      );

    case "Dialog":
      return (
        <Dialog onOpenChange={onInteractionChange}>
          <DialogTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent surface="glass" radius="xl">
            <DialogHeader>
              <DialogTitle>Poyraz UI Dialog</DialogTitle>
              <DialogDescription>
                This is the original interactive Dialog component.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => toast.success("Dialog action completed")}>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );

    case "Drawer":
      return (
        <Drawer onOpenChange={onInteractionChange}>
          <DrawerTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent surface="glass">
            <DrawerHeader>
              <DrawerTitle>Poyraz UI Drawer</DrawerTitle>
              <DrawerDescription>Drag or press Escape to close.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={() => toast.success("Drawer action")}>Save changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );

    case "Dropdown Menu":
      return (
        <DropdownMenu onOpenChange={onInteractionChange}>
          <DropdownMenuTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Quick actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent surface="glass" radius="xl" className="w-64">
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem media={<User className="size-4" />}>
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem media={<Settings className="size-4" />}>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );

    case "Form":
      return <HeroFormDemo />;

    case "Hover Card":
      return (
        <HoverCard onOpenChange={onInteractionChange}>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-base">
              @poyrazavsever
            </Button>
          </HoverCardTrigger>
          <HoverCardContent surface="glass" radius="xl" className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/poyrazavsever.png" alt="Poyraz Avsever" />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">@poyrazavsever</p>
                <p className="text-sm text-muted-foreground">Creator of Poyraz UI.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      );

    case "Mermaid":
      return (
        <Mermaid
          code={"graph LR\n  UI[Poyraz UI] --> A[Atoms]\n  UI --> M[Molecules]"}
          surface="glass"
          radius="xl"
          diagramStyle="soft"
          className="w-80 p-3 shadow-xl [&_svg]:max-h-32"
        />
      );

    case "Modal":
      return (
        <Modal onOpenChange={onInteractionChange}>
          <ModalTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Open Modal
            </Button>
          </ModalTrigger>
          <ModalContent size="sm" surface="glass">
            <ModalHeader>
              <ModalTitle>Publish component?</ModalTitle>
              <ModalDescription>The registry will be updated.</ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <ModalClose asChild>
                <Button variant="secondary">Cancel</Button>
              </ModalClose>
              <Button onClick={() => toast.success("Component published")}>Publish</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );

    case "Pagination":
      return (
        <Pagination>
          <PaginationContent className="rounded-xl border border-glass-border-outer bg-glass p-2 shadow-xl backdrop-blur-glass">
            <PaginationItem>
              <PaginationPrevious href="/docs" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/docs/atoms">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/docs/molecules" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/docs/organisms" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      );

    case "Popover":
      return (
        <Popover onOpenChange={onInteractionChange}>
          <PopoverTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              <Settings className="size-4" /> Configure
            </Button>
          </PopoverTrigger>
          <PopoverContent surface="glass" radius="xl" className="w-72">
            <div className="space-y-2">
              <p className="font-semibold">Component settings</p>
              <Input placeholder="Component name" />
            </div>
          </PopoverContent>
        </Popover>
      );

    case "Select":
      return (
        <Select defaultValue="react" onOpenChange={onInteractionChange}>
          <SelectTrigger variant="glass" className="w-64 shadow-xl">
            <SelectValue placeholder="Choose framework" />
          </SelectTrigger>
          <SelectContent surface="glass" radius="xl">
            <SelectGroup>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="vite">Vite</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      );

    case "Sheet":
      return (
        <Sheet onOpenChange={onInteractionChange}>
          <SheetTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Open Sheet
            </Button>
          </SheetTrigger>
          <SheetContent surface="glass" side="right">
            <SheetHeader>
              <SheetTitle>Component inspector</SheetTitle>
              <SheetDescription>Review props and source code.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      );

    case "Sonner":
      return (
        <Button
          size="lg"
          effect="shine"
          className="shadow-xl"
          onClick={() =>
            toast.success("Component saved", {
              description: "The Poyraz UI toast is working.",
            })
          }
        >
          <Bell className="size-4" /> Show Toast
        </Button>
      );

    case "Star Rating":
      return (
        <StarRating
          rating={4.8}
          label="4.8 out of 5 stars"
          className="gap-1 text-warning-icon [&_svg]:size-7"
        />
      );

    case "Tabs":
      return (
        <Tabs defaultValue="preview" className="w-80">
          <TabsList variant="glass" radius="lg" className="shadow-xl">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="px-2 text-sm">
            Live component
          </TabsContent>
          <TabsContent value="code" className="px-2 text-sm">
            Copy source
          </TabsContent>
          <TabsContent value="usage" className="px-2 text-sm">
            Read docs
          </TabsContent>
        </Tabs>
      );

    case "Tooltip":
      return (
        <Tooltip onOpenChange={onInteractionChange}>
          <TooltipTrigger asChild>
            <Button variant="glass" size="lg" className="shadow-xl">
              Hover for help
            </Button>
          </TooltipTrigger>
          <TooltipContent surface="glass" radius="lg">
            Original Poyraz UI Tooltip
          </TooltipContent>
        </Tooltip>
      );
  }
}

function HeroComponentItem({
  name,
  onInteractionChange,
}: {
  name: HeroComponentName;
  onInteractionChange: (active: boolean) => void;
}) {
  return (
    <div
      data-hero-component={name}
      className={
        "flex h-full shrink-0 items-center justify-center px-5 " +
        (HERO_WIDE_COMPONENTS.has(name) ? "w-[21rem]" : "w-[17rem]")
      }
    >
      <HeroComponentPreview name={name} onInteractionChange={onInteractionChange} />
    </div>
  );
}

function HeroMarqueeRow({
  items,
  duration,
  delay,
  onInteractionChange,
}: {
  items: readonly HeroComponentName[];
  duration: number;
  delay: number;
  onInteractionChange: (active: boolean) => void;
}) {
  const animationStyle = {
    "--hero-marquee-duration": String(duration) + "s",
    "--hero-marquee-delay": String(delay) + "s",
  } as CSSProperties;

  return (
    <div className="poyraz-hero-marquee-viewport relative h-full min-h-0 overflow-x-clip overflow-y-visible">
      <div className="poyraz-hero-marquee-edge poyraz-hero-marquee-edge-start bg-background/[0.01] backdrop-blur-[4px]" />
      <div className="poyraz-hero-marquee-track flex h-full w-max" style={animationStyle}>
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} data-marquee-copy={copyIndex} className="flex h-full shrink-0">
            {items.map((name) => (
              <HeroComponentItem
                key={name + "-" + String(copyIndex)}
                name={name}
                onInteractionChange={onInteractionChange}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroComponentShowcase() {
  const [interactionActive, setInteractionActive] = useState(false);
  const rowTiming = [
    { duration: 52, delay: -7 },
    { duration: 55, delay: -18 },
    { duration: 54, delay: -31 },
    { duration: 56, delay: -43 },
    { duration: 49, delay: -12 },
    { duration: 53, delay: -27 },
  ];

  return (
    <TooltipProvider delayDuration={120}>
      <div
        data-interacting={interactionActive ? "" : undefined}
        className="poyraz-hero-showcase pointer-events-auto absolute right-0 top-1/2 hidden h-[86svh] min-h-[40rem] max-h-[58rem] w-[44vw] -translate-y-1/2 text-foreground lg:block xl:w-[52vw] 2xl:w-[min(52vw,60rem)]"
      >
        <div className="relative grid h-full grid-rows-[1.1fr_1fr_1.1fr_1.65fr_1.15fr_1fr]">
          {HERO_COMPONENT_ROWS.map((row, index) => (
            <HeroMarqueeRow
              key={index}
              items={row}
              duration={rowTiming[index].duration}
              delay={rowTiming[index].delay}
              onInteractionChange={setInteractionActive}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
