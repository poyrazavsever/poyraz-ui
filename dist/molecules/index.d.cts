import * as React$1 from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { F as FloatingSurfaceProps, O as OverlaySurfaceProps, s as OverlayProps, t as FloatingItemProps, u as LabelProps, e as ButtonProps, r as CardProps } from '../label-CzTR-4vC.cjs';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as _radix_ui_react_slot from '@radix-ui/react-slot';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Toaster as Toaster$1 } from 'sonner';
export { toast } from 'sonner';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as vaul from 'vaul';
import { Drawer as Drawer$1 } from 'vaul';

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    separated?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const alertVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "destructive" | null | undefined;
    appearance?: "inline" | "outline" | "glass" | "soft" | "filled" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "none" | null | undefined;
    motion?: "none" | "scale" | "fade" | "slide" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AlertProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    icon?: React$1.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    dismissLabel?: string;
}
declare const Alert: React$1.ForwardRefExoticComponent<AlertProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const Breadcrumb: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, "aria-label": ariaLabel, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlayProps & React$1.RefAttributes<HTMLDivElement>>;
interface DialogContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, OverlaySurfaceProps {
    showClose?: boolean;
    mobile?: "floating" | "fullscreen";
    overlayTone?: NonNullable<OverlayProps["tone"]>;
    overlayClassName?: string;
}
declare const DialogContent: React$1.ForwardRefExoticComponent<DialogContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

type DropdownInteraction = "click" | "hover";
interface DropdownMenuProps extends React$1.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> {
    /** `hover` remains click-accessible on touch and keyboard. */
    interaction?: DropdownInteraction;
    /** Grace period while the pointer travels from trigger to content. */
    closeDelay?: number;
}
declare function DropdownMenu({ interaction, closeDelay, open: controlledOpen, defaultOpen, onOpenChange, modal, children, ...props }: DropdownMenuProps): react_jsx_runtime.JSX.Element;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface DropdownMenuContentProps extends React$1.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>, FloatingSurfaceProps {
    itemSize?: NonNullable<FloatingItemProps["size"]>;
    itemRadius?: NonNullable<FloatingItemProps["radius"]>;
}
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>>;
interface DropdownMenuSubContentProps extends React$1.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>, FloatingSurfaceProps {
}
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>>;
interface DropdownMenuItemProps extends React$1.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>, FloatingItemProps {
    media?: React$1.ReactNode;
    description?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
}
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const FormLabel: React$1.ForwardRefExoticComponent<Omit<LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & React$1.RefAttributes<HTMLLabelElement>>;
declare const FormControl: React$1.ForwardRefExoticComponent<Omit<_radix_ui_react_slot.SlotProps & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const FormDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Pagination: {
    ({ className, ...props }: React$1.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationContent: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React$1.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, "size"> & React$1.ComponentProps<"a">;
declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, ...props }: React$1.ComponentProps<typeof PaginationLink>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    padding?: "none" | "sm" | "md" | "lg";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "default" | "soft" | "glass";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    size?: "sm" | "md" | "lg";
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    itemSize?: NonNullable<FloatingItemProps["size"]>;
    itemRadius?: NonNullable<FloatingItemProps["radius"]>;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingItemProps & {
    media?: React$1.ReactNode;
    description?: React$1.ReactNode;
    trailing?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type ToasterProps = React.ComponentProps<typeof Toaster$1> & {
    surface?: "solid" | "soft" | "glass";
    radius?: "sm" | "md" | "lg" | "xl";
    motion?: "spring" | "slide" | "fade";
};
declare const Toaster: ({ className, motion, radius, surface, ...props }: ToasterProps) => react_jsx_runtime.JSX.Element;

type TabsVariant = "line" | "soft" | "glass";
declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: TabsVariant;
    radius?: "none" | "sm" | "md" | "lg" | "full";
} & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
} & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    contained?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    size?: "sm" | "md";
} & React$1.RefAttributes<HTMLDivElement>>;

declare const HoverCard: React$1.FC<HoverCardPrimitive.HoverCardProps>;
declare const HoverCardTrigger: React$1.ForwardRefExoticComponent<HoverCardPrimitive.HoverCardTriggerProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React$1.ForwardRefExoticComponent<Omit<HoverCardPrimitive.HoverCardContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & FloatingSurfaceProps & {
    size?: "sm" | "md" | "lg";
} & React$1.RefAttributes<HTMLDivElement>>;

interface DateRange {
    from?: Date;
    to?: Date;
}
interface CalendarBaseProps {
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    className?: string;
    surface?: "plain" | "solid" | "soft" | "glass";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    size?: "compact" | "default" | "spacious";
    initialMonth?: Date;
    onMonthChange?: (month: Date) => void;
}
interface CalendarSingleProps extends CalendarBaseProps {
    mode?: "single";
    selected?: Date;
    defaultSelected?: Date;
    onSelect?: (date: Date | undefined) => void;
}
interface CalendarRangeProps extends CalendarBaseProps {
    mode: "range";
    selected?: DateRange;
    defaultSelected?: DateRange;
    onSelect?: (range: DateRange | undefined) => void;
}
type CalendarProps = CalendarSingleProps | CalendarRangeProps;
declare function Calendar(props: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

interface DatePickerProps {
    /** Controlled selection. Passing the prop makes selection controlled, including `undefined`. */
    selected?: Date;
    /** Initial value for uncontrolled usage. */
    defaultSelected?: Date;
    onSelect?: (date: Date | undefined) => void;
    /** Controlled popover state. */
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    placeholder?: string;
    formatDate?: (date: Date) => string;
    className?: string;
    disabled?: boolean;
    clearable?: boolean;
    closeOnSelect?: boolean;
    triggerVariant?: ButtonProps["variant"];
    triggerSize?: ButtonProps["size"];
    triggerRadius?: ButtonProps["radius"];
    popoverSurface?: NonNullable<FloatingSurfaceProps["surface"]>;
    popoverRadius?: NonNullable<FloatingSurfaceProps["radius"]>;
    calendarProps?: Omit<CalendarSingleProps, "mode" | "selected" | "defaultSelected" | "onSelect">;
}
declare function DatePicker(props: DatePickerProps): react_jsx_runtime.JSX.Element;
declare namespace DatePicker {
    var displayName: string;
}

interface MermaidProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Mermaid code — pass as children (string) or as this prop */
    code?: string;
    /** Chart id prefix */
    chartId?: string;
    children?: React$1.ReactNode;
    surface?: "solid" | "soft" | "glass";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    diagramStyle?: "soft" | "minimal" | "technical";
    loadingContent?: React$1.ReactNode;
    errorContent?: (error: string) => React$1.ReactNode;
}
declare const Mermaid: React$1.ForwardRefExoticComponent<MermaidProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Drawer: {
    ({ shouldScaleBackground, ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: typeof vaul.Portal;
declare const DrawerClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerOverlay: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlayProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: React$1.ForwardRefExoticComponent<Omit<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlaySurfaceProps & {
    overlayTone?: NonNullable<OverlayProps["tone"]>;
    overlayClassName?: string;
    handle?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DrawerTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const modalContentVariants: (props?: ({
    size?: "sm" | "default" | "lg" | "xl" | "full" | null | undefined;
    position?: "center" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Modal: React$1.FC<DialogPrimitive.DialogProps>;
declare const ModalTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const ModalClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const ModalOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlayProps & React$1.RefAttributes<HTMLDivElement>>;
interface ModalContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof modalContentVariants>, OverlaySurfaceProps {
    /** Hide the default close (X) button */
    hideClose?: boolean;
    mobile?: "floating" | "fullscreen";
    overlayTone?: NonNullable<OverlayProps["tone"]>;
    overlayClassName?: string;
}
declare const ModalContent: React$1.ForwardRefExoticComponent<ModalContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const ModalDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

interface CommandPaletteContextValue {
    search: string;
    setSearch: React$1.Dispatch<React$1.SetStateAction<string>>;
}
interface CommandPaletteProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
    children: React$1.ReactNode;
}
declare function CommandPalette({ children, ...props }: CommandPaletteProps): react_jsx_runtime.JSX.Element;
declare namespace CommandPalette {
    var displayName: string;
}
declare const CommandPaletteTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const CommandPaletteContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlaySurfaceProps & {
    overlayTone?: NonNullable<OverlayProps["tone"]>;
    overlayClassName?: string;
    mobile?: "floating" | "fullscreen";
} & React$1.RefAttributes<HTMLDivElement>>;
interface CommandPaletteInputProps extends Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    onValueChange?: (value: string) => void;
}
declare const CommandPaletteInput: React$1.ForwardRefExoticComponent<CommandPaletteInputProps & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandPaletteList: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
interface CommandPaletteGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    heading?: string;
}
declare const CommandPaletteGroup: React$1.ForwardRefExoticComponent<CommandPaletteGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface CommandPaletteItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Keyboard shortcut hint (e.g. "⌘K") */
    shortcut?: string;
    disabled?: boolean;
    /** Icon element */
    icon?: React$1.ReactNode;
    description?: React$1.ReactNode;
    media?: React$1.ReactNode;
    size?: NonNullable<FloatingItemProps["size"]>;
    radius?: NonNullable<FloatingItemProps["radius"]>;
}
declare const CommandPaletteItem: React$1.ForwardRefExoticComponent<CommandPaletteItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandPaletteEmpty: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandPaletteSeparator: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandPaletteFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare function useCommandPalette(): CommandPaletteContextValue;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & OverlayProps & React$1.RefAttributes<HTMLDivElement>>;
declare const sheetContentVariants: (props?: ({
    side?: "right" | "left" | "bottom" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetContentVariants>, OverlaySurfaceProps {
    overlayTone?: NonNullable<OverlayProps["tone"]>;
    overlayClassName?: string;
    showClose?: boolean;
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

interface AutocompleteOption {
    /** Unique value */
    value: string;
    /** Display label */
    label: string;
    /** Whether this option is disabled */
    disabled?: boolean;
    /** Optional group name */
    group?: string;
    description?: string;
    media?: React$1.ReactNode;
}
interface AutocompleteProps {
    /** Available options */
    options: AutocompleteOption[];
    /** Currently selected value(s) */
    value?: string | string[];
    defaultValue?: string | string[];
    /** Called when selection changes */
    onValueChange?: (value: string | string[]) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Placeholder for the input */
    placeholder?: string;
    /** Allow multiple selections */
    multiple?: boolean;
    /** Allow free-form text (not just from the list) */
    freeSolo?: boolean;
    /** Custom filter function */
    filterFn?: (option: AutocompleteOption, query: string) => boolean;
    /** Called when the search query changes */
    onSearchChange?: (query: string) => void;
    /** Show a loading spinner */
    loading?: boolean;
    state?: "ready" | "loading" | "error";
    loadingText?: React$1.ReactNode;
    errorText?: React$1.ReactNode;
    /** Disabled state */
    disabled?: boolean;
    /** Empty state text */
    emptyText?: string;
    emptyContent?: React$1.ReactNode;
    /** Additional class for the wrapper */
    className?: string;
    variant?: "default" | "soft" | "glass";
    radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
    size?: "sm" | "md" | "lg";
    dropdownSurface?: NonNullable<FloatingSurfaceProps["surface"]>;
    dropdownRadius?: NonNullable<FloatingSurfaceProps["radius"]>;
    itemSize?: NonNullable<FloatingItemProps["size"]>;
}
declare function Autocomplete({ options, value, defaultValue, onValueChange, open: controlledOpen, defaultOpen, onOpenChange, placeholder, multiple, freeSolo, filterFn, onSearchChange, loading, state, loadingText, errorText, disabled, emptyText, emptyContent, className, variant, radius, size, dropdownSurface, dropdownRadius, itemSize, }: AutocompleteProps): react_jsx_runtime.JSX.Element;
declare namespace Autocomplete {
    var displayName: string;
}

interface ArticleCardProps extends Omit<CardProps, "title"> {
    image?: string;
    category?: string;
    title: string;
    excerpt?: string;
    author?: {
        name: string;
        avatar?: string;
    };
    date?: string;
    readTime?: string;
    href?: string;
}
declare const ArticleCard: React$1.ForwardRefExoticComponent<ArticleCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface ImageCardProps extends Omit<CardProps, "title"> {
    image: string;
    title: string;
    description?: string;
    badge?: string;
    href?: string;
}
declare const ImageCard: React$1.ForwardRefExoticComponent<ImageCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface NewsCardProps extends Omit<CardProps, "title"> {
    image?: string;
    category?: string;
    title: string;
    date?: string;
    href?: string;
}
declare const NewsCard: React$1.ForwardRefExoticComponent<NewsCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface StatsCardProps extends CardProps {
    icon?: React$1.ReactNode;
    label: string;
    value: string | number;
    trend?: "up" | "down" | "neutral";
    trendValue?: string;
    chart?: React$1.ReactNode;
}
declare const StatsCard: React$1.ForwardRefExoticComponent<StatsCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface TestimonialCardProps extends CardProps {
    quote: string;
    author: string;
    role?: string;
    avatar?: string;
    rating?: number;
}
declare const TestimonialCard: React$1.ForwardRefExoticComponent<TestimonialCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface PricingCardProps extends Omit<CardProps, "title"> {
    name?: string;
    title?: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    action?: React$1.ReactNode;
    popular?: boolean;
    highlighted?: boolean;
}
declare const PricingCard: React$1.ForwardRefExoticComponent<PricingCardProps & React$1.RefAttributes<HTMLDivElement>>;

interface ProductCardProps extends Omit<CardProps, "title"> {
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    rating?: number;
    badge?: string;
    action?: React$1.ReactNode;
    href?: string;
}
declare const ProductCard: React$1.ForwardRefExoticComponent<ProductCardProps & React$1.RefAttributes<HTMLDivElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, ArticleCard, type ArticleCardProps, Autocomplete, type AutocompleteOption, type AutocompleteProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Calendar, type CalendarProps, type CalendarRangeProps, type CalendarSingleProps, CommandPalette, CommandPaletteContent, CommandPaletteEmpty, CommandPaletteFooter, CommandPaletteGroup, CommandPaletteInput, CommandPaletteItem, CommandPaletteList, CommandPaletteSeparator, CommandPaletteTrigger, DatePicker, type DatePickerProps, type DateRange, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, ImageCard, type ImageCardProps, Mermaid, type MermaidProps, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalTitle, ModalTrigger, NewsCard, type NewsCardProps, Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, Popover, PopoverContent, PopoverTrigger, PricingCard, type PricingCardProps, ProductCard, type ProductCardProps, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, StatsCard, type StatsCardProps, Tabs, TabsContent, TabsList, TabsTrigger, TestimonialCard, type TestimonialCardProps, Toaster, type ToasterProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, modalContentVariants, sheetContentVariants, useCommandPalette, useFormField };
