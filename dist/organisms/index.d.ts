import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { VariantProps } from 'class-variance-authority';

interface NavbarContextValue {
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    variant: "default" | "minimal" | "transparent" | "bordered";
    containerClassName: string;
}
declare const useNavbar: () => NavbarContextValue;
declare const navbarVariants: (props?: ({
    variant?: "default" | "bordered" | "transparent" | "minimal" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NavbarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof navbarVariants> {
    /** Show sticky behavior */
    sticky?: boolean;
    /** Auto-hide when scrolling down, reveal when scrolling up */
    autoHide?: boolean;
    /** Class name applied to inner containers for width constraint */
    containerClassName?: string;
}
declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
declare const NavbarTopBar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMain: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
}
declare const NavbarBrand: React.ForwardRefExoticComponent<NavbarBrandProps & React.RefAttributes<HTMLDivElement>>;
declare const NavbarLinks: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuProps & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLElement>>;
declare const NavbarLink: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
declare const NavbarDropdownTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const NavbarDropdown: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>, "ref"> & {
    label: string;
} & React.RefAttributes<HTMLLIElement>>;
declare const megaMenuVariants: (props?: ({
    layout?: "list" | "full" | "columns" | "featured" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NavbarMegaMenuProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof megaMenuVariants> {
}
declare const NavbarMegaMenu: React.ForwardRefExoticComponent<NavbarMegaMenuProps & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMegaMenuLinks: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMegaMenuFeatured: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMegaMenuItem: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    title: string;
    description?: string;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const NavbarActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMobileToggle: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
declare const NavbarMobileMenu: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface NavbarMobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
}
declare const NavbarMobileLink: React.ForwardRefExoticComponent<NavbarMobileLinkProps & React.RefAttributes<HTMLAnchorElement>>;
interface NavbarMobileGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
}
declare const NavbarMobileGroup: React.ForwardRefExoticComponent<NavbarMobileGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const NavbarMobileActions: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface NavbarSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Callback when user submits search */
    onSearch?: (value: string) => void;
    /** Container class */
    wrapperClassName?: string;
}
declare const NavbarSearch: React.ForwardRefExoticComponent<NavbarSearchProps & React.RefAttributes<HTMLInputElement>>;
declare const NavbarDivider: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface SidebarContextValue {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    variant: "default" | "collapsible" | "floating" | "mini" | "dark" | "bordered";
}
declare const useSidebar: () => SidebarContextValue;
declare const sidebarVariants: (props?: ({
    variant?: "default" | "bordered" | "dark" | "collapsible" | "floating" | "mini" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SidebarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
    /** Start in collapsed state (for collapsible variant) */
    defaultCollapsed?: boolean;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
declare const SidebarHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroup: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarGroupLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const SidebarMenu: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
interface SidebarMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /** Whether this item is the active/current page */
    active?: boolean;
    /** Icon component */
    icon?: React.ReactNode;
    /** Badge content (e.g. notification count) */
    badge?: React.ReactNode;
    /** Link href */
    href?: string;
}
declare const SidebarMenuItem: React.ForwardRefExoticComponent<SidebarMenuItemProps & React.RefAttributes<HTMLLIElement>>;
declare const SidebarSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHRElement> & React.RefAttributes<HTMLHRElement>>;
declare const SidebarFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface SidebarTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Which action: toggle collapse or toggle mobile */
    action?: "collapse" | "mobile";
}
declare const SidebarTrigger: React.ForwardRefExoticComponent<SidebarTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface SidebarSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearch?: (value: string) => void;
}
declare const SidebarSearch: React.ForwardRefExoticComponent<SidebarSearchProps & React.RefAttributes<HTMLInputElement>>;
interface SidebarSubMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Label shown as the trigger */
    label: string;
    /** Icon component */
    icon?: React.ReactNode;
    /** Start open */
    defaultOpen?: boolean;
}
declare const SidebarSubMenu: React.ForwardRefExoticComponent<SidebarSubMenuProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarSubMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    href?: string;
}
declare const SidebarSubMenuItem: React.ForwardRefExoticComponent<SidebarSubMenuItemProps & React.RefAttributes<HTMLDivElement>>;
interface SidebarUserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
    /** User display name */
    name: string;
    /** User role / subtitle */
    role?: string;
    /** Avatar URL */
    avatarUrl?: string;
    /** Fallback initials when no avatar URL */
    initials?: string;
}
declare const SidebarUserProfile: React.ForwardRefExoticComponent<SidebarUserProfileProps & React.RefAttributes<HTMLDivElement>>;

declare const footerVariants: (props?: ({
    variant?: "dark" | "compact" | "full" | "branded" | "centered" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface FooterProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof footerVariants> {
    /** Class name applied to inner container for width constraint */
    containerClassName?: string;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
declare const FooterGrid: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FooterSection: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FooterHeading: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const FooterLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
declare const FooterBrand: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FooterSocials: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FooterSocialLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
declare const FooterBottom: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const FooterBottomLinks: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
interface FooterNewsletterProps extends React.HTMLAttributes<HTMLDivElement> {
    heading?: string;
    description?: string;
    placeholder?: string;
    buttonText?: string;
    onSubscribe?: (email: string) => void;
}
declare const FooterNewsletter: React.ForwardRefExoticComponent<FooterNewsletterProps & React.RefAttributes<HTMLDivElement>>;
declare const FooterDivider: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHRElement> & React.RefAttributes<HTMLHRElement>>;

declare const announcementBarVariants: (props?: ({
    variant?: "default" | "info" | "success" | "warning" | "branded" | "danger" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof announcementBarVariants> {
    /** Allow users to dismiss the bar */
    dismissible?: boolean;
    /** Callback when dismissed */
    onDismiss?: () => void;
    /** Icon to show before the content */
    icon?: React.ReactNode;
    /** Action element (e.g. link or button) at the end */
    action?: React.ReactNode;
}
declare const AnnouncementBar: React.ForwardRefExoticComponent<AnnouncementBarProps & React.RefAttributes<HTMLDivElement>>;

interface ColumnDef<T> {
    /** Unique key for the column (matches object key or custom) */
    id: string;
    /** Column header label */
    header: string;
    /** Accessor function to get cell value */
    accessorFn?: (row: T) => unknown;
    /** Key of T to access directly */
    accessorKey?: keyof T;
    /** Custom cell renderer */
    cell?: (row: T) => React.ReactNode;
    /** Enable sorting (default: true) */
    sortable?: boolean;
    /** Enable filtering on this column */
    filterable?: boolean;
    /** Column width class */
    className?: string;
    /** Hidden by default */
    hidden?: boolean;
}
interface DataTableProps<T> {
    /** Column definitions */
    columns: ColumnDef<T>[];
    /** Data rows */
    data: T[];
    /** Unique key extractor for each row */
    getRowId?: (row: T, index: number) => string;
    /** Rows per page (default: 10) */
    pageSize?: number;
    /** Show pagination (default: true) */
    pagination?: boolean;
    /** Show global search (default: true) */
    searchable?: boolean;
    /** Search placeholder */
    searchPlaceholder?: string;
    /** Enable row selection (default: false) */
    selectable?: boolean;
    /** Callback when selection changes */
    onSelectionChange?: (selectedRows: T[]) => void;
    /** Show column visibility toggle (default: false) */
    columnToggle?: boolean;
    /** Additional class for the wrapper */
    className?: string;
    /** Caption for accessibility */
    caption?: string;
    /** Empty state message */
    emptyMessage?: string;
}
declare const DataTable: <T>(props: DataTableProps<T> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;

export { AnnouncementBar, DataTable, type ColumnDef as DataTableColumnDef, Footer, FooterBottom, FooterBottomLinks, FooterBrand, FooterDivider, FooterGrid, FooterHeading, FooterLink, FooterNewsletter, FooterSection, FooterSocialLink, FooterSocials, Navbar, NavbarActions, NavbarBrand, NavbarDivider, NavbarDropdown, NavbarDropdownTrigger, NavbarLink, NavbarLinks, NavbarMain, NavbarMegaMenu, NavbarMegaMenuFeatured, NavbarMegaMenuItem, NavbarMegaMenuLinks, NavbarMobileActions, NavbarMobileGroup, NavbarMobileLink, NavbarMobileMenu, NavbarMobileToggle, NavbarSearch, NavbarTopBar, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSearch, SidebarSeparator, SidebarSubMenu, SidebarSubMenuItem, SidebarTrigger, SidebarUserProfile, announcementBarVariants, footerVariants, megaMenuVariants, navbarVariants, sidebarVariants, useNavbar, useSidebar };
