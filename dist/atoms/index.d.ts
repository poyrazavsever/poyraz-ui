import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';
export { B as Button, a as ButtonEffect, b as ButtonFillDirection, c as ButtonIcon, d as ButtonLabel, e as ButtonProps, f as ButtonSwapTarget, L as Label, g as buttonVariants } from '../label-DSn-swSp.js';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';

declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "default" | "lg" | "xl" | null | undefined;
    radius?: "sm" | "lg" | "md" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & VariantProps<(props?: ({
    size?: "xs" | "sm" | "default" | "lg" | "xl" | null | undefined;
    radius?: "sm" | "lg" | "md" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "glass" | "info" | "success" | "warning" | "destructive" | null | undefined;
    size?: "sm" | "default" | "lg" | null | undefined;
    radius?: "sm" | "md" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, radius, size, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const cardVariants: (props?: ({
    variant?: "default" | "outline" | "glass" | "soft" | "ghost" | "elevated" | "interactive" | "bordered" | "highlight" | null | undefined;
    radius?: "lg" | "xl" | "md" | "none" | "2xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
interface CardImageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Aspect ratio utility class, e.g. "aspect-video" or "aspect-square" */
    aspect?: string;
}
declare const CardImage: React.ForwardRefExoticComponent<CardImageProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardAction: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

type CompositionProps = CardProps;
interface BasicContentCardProps extends Omit<CompositionProps, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
}
declare function BasicContentCard({ action, children, description, title, ...props }: BasicContentCardProps): react_jsx_runtime.JSX.Element;
interface ImageContentCardProps extends Omit<CompositionProps, "title"> {
    src: string;
    alt: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    category?: React.ReactNode;
    action?: React.ReactNode;
}
declare function ImageContentCard({ action, alt, category, description, src, title, ...props }: ImageContentCardProps): react_jsx_runtime.JSX.Element;
interface HorizontalCardProps extends ImageContentCardProps {
    imageClassName?: string;
}
declare function HorizontalCard({ action, alt, category, description, imageClassName, src, title, ...props }: HorizontalCardProps): react_jsx_runtime.JSX.Element;
interface ProfileCardProps extends Omit<CompositionProps, "title" | "role"> {
    avatar: string;
    name: React.ReactNode;
    role?: React.ReactNode;
    bio?: React.ReactNode;
    socialActions?: React.ReactNode;
}
declare function ProfileCard({ avatar, bio, name, role, socialActions, ...props }: ProfileCardProps): react_jsx_runtime.JSX.Element;
interface StatisticCardProps extends CompositionProps {
    label: React.ReactNode;
    value: React.ReactNode;
    change?: React.ReactNode;
    trend?: "up" | "down" | "neutral";
    chart?: React.ReactNode;
    icon?: React.ReactNode;
}
declare function StatisticCard({ chart, change, icon, label, trend, value, ...props }: StatisticCardProps): react_jsx_runtime.JSX.Element;
interface PricingPlanCardProps extends Omit<CompositionProps, "title"> {
    name: React.ReactNode;
    price: React.ReactNode;
    period?: React.ReactNode;
    description?: React.ReactNode;
    features: React.ReactNode[];
    action: React.ReactNode;
    popular?: boolean;
}
declare function PricingPlanCard({ action, description, features, name, period, popular, price, ...props }: PricingPlanCardProps): react_jsx_runtime.JSX.Element;
interface FeatureCardProps extends Omit<CompositionProps, "title"> {
    icon: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    action?: React.ReactNode;
}
declare function FeatureCard({ action, description, icon, title, ...props }: FeatureCardProps): react_jsx_runtime.JSX.Element;
declare function GlassCard({ className, ...props }: CompositionProps): react_jsx_runtime.JSX.Element;
interface InteractiveCardProps extends CompositionProps {
    actions?: React.ReactNode;
}
declare function InteractiveCard({ actions, children, className, ...props }: InteractiveCardProps): react_jsx_runtime.JSX.Element;
interface ExpandableCardProps extends CompositionProps {
    summary: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    expandLabel?: string;
}
declare function ExpandableCard({ children, defaultOpen, expandLabel, onOpenChange, open, summary, ...props }: ExpandableCardProps): react_jsx_runtime.JSX.Element;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const fieldVariants: (props?: ({
    variant?: "default" | "glass" | "soft" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "full" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof fieldVariants> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const InputGroup: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "glass" | "soft" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "full" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
type InputGroupAddonProps = React.HTMLAttributes<HTMLDivElement> & {
    position?: "start" | "end";
};
declare function InputGroupAddon({ className, position, ...props }: InputGroupAddonProps): react_jsx_runtime.JSX.Element;

declare const logoVariants: (props?: ({
    effect?: "none" | "shine" | "shine-loop" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "full" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LogoProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof logoVariants> {
    href?: string;
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
}
declare function Logo({ alt, className, effect, height, href, interactive, radius, src, style, width, ...props }: LogoProps): react_jsx_runtime.JSX.Element;
declare namespace Logo {
    var displayName: string;
}

declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof fieldVariants> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const typographyVariants: (props?: ({
    variant?: "h2" | "h3" | "p" | "blockquote" | "body" | "caption" | "h1" | "h4" | "small" | "list" | "display" | "large" | "lead" | "muted" | null | undefined;
    font?: "inherit" | "secondary" | "primary" | null | undefined;
    balance?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const textEffectVariants: (props?: ({
    effect?: "marker" | "none" | "outline" | "hand-drawn" | "contrast" | "shimmer" | null | undefined;
    tone?: "warning" | "neutral" | "primary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TypographyProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof typographyVariants> {
    component?: React.ElementType;
    /** @deprecated Use font="secondary". */
    secondaryFont?: boolean;
}
declare function Typography({ balance, className, component, font, secondaryFont, variant, ...props }: TypographyProps): react_jsx_runtime.JSX.Element;
interface TextEffectProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof textEffectVariants> {
}
declare function TextEffect({ className, effect, tone, ...props }: TextEffectProps): react_jsx_runtime.JSX.Element;

interface NumberInputProps extends Omit<InputProps, "type" | "onChange" | "value"> {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}
declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
interface SearchInputProps extends InputProps {
    onSearch?: (value: string) => void;
}
declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;
interface PhoneInputProps extends InputProps {
    /** Country code prefix, e.g. "+90" */
    countryCode?: string;
}
declare const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps & React.RefAttributes<HTMLInputElement>>;
declare const PasswordInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const UrlInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface BgPatternProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Pattern color — any valid CSS color */
    color?: string;
    /** Pattern opacity (0-1) */
    opacity?: number;
    /** Pattern size / spacing in px */
    size?: number;
    /** Whether the pattern covers its parent absolutely */
    overlay?: boolean;
}
declare const PatternDots: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternGrid: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternLines: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternDiagonal: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternCross: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternCheckerboard: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternDiamond: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternZigzag: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
declare const PatternDashedGrid: React.ForwardRefExoticComponent<BgPatternProps & React.RefAttributes<HTMLDivElement>>;
interface PatternRadialProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Center color */
    from?: string;
    /** Edge color */
    to?: string;
    /** Overall opacity */
    opacity?: number;
    /** Cover parent absolutely */
    overlay?: boolean;
}
declare const PatternRadial: React.ForwardRefExoticComponent<PatternRadialProps & React.RefAttributes<HTMLDivElement>>;

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum height before scrolling kicks in */
    maxHeight?: string | number;
    /** Orientation of the scrollbar */
    orientation?: "vertical" | "horizontal" | "both";
    /** Scrollbar size: track + thumb width / height */
    scrollbarSize?: "sm" | "md" | "lg";
}
/**
 * Theme-aware scroll area with a soft scrollbar track and thumb.
 *
 * Uses pure CSS `scrollbar-*` properties (supported in Chrome 121+ / Firefox 64+)
 * with a fallback for webkit browsers.
 */
declare const ScrollArea: React.ForwardRefExoticComponent<ScrollAreaProps & React.RefAttributes<HTMLDivElement>>;

export { Avatar, AvatarFallback, AvatarImage, Badge, BasicContentCard, type BgPatternProps, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle, Checkbox, ExpandableCard, FeatureCard, GlassCard, HorizontalCard, ImageContentCard, Input, InputGroup, InputGroupAddon, InteractiveCard, Logo, NumberInput, PasswordInput, PatternCheckerboard, PatternCross, PatternDashedGrid, PatternDiagonal, PatternDiamond, PatternDots, PatternGrid, PatternLines, PatternRadial, type PatternRadialProps, PatternZigzag, PhoneInput, PricingPlanCard, ProfileCard, RadioGroup, RadioGroupItem, ScrollArea, type ScrollAreaProps, SearchInput, Separator, Skeleton, StatisticCard, Switch, TextEffect, Textarea, Typography, UrlInput, avatarVariants, badgeVariants, cardVariants, fieldVariants, logoVariants, textEffectVariants, typographyVariants };
