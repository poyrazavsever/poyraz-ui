import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
export { B as Button, L as Label, b as buttonVariants } from '../label-BzWkLfNj.cjs';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as SwitchPrimitive from '@radix-ui/react-switch';

declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const cardVariants: (props?: ({
    variant?: "default" | "ghost" | "bordered" | "elevated" | "highlight" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LogoProps extends React.HTMLAttributes<HTMLElement> {
    /** Link destination. Pass undefined or "" to render without a link wrapper. */
    href?: string;
    /** Image width in pixels */
    width?: number;
    /** Image height in pixels */
    height?: number;
    /** Alt text for the logo image */
    alt?: string;
}
declare function Logo({ className, href, width, height, alt, ...props }: LogoProps): react_jsx_runtime.JSX.Element;
declare namespace Logo {
    var displayName: string;
}

declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Separator: React.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitive.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const variantMap: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    p: string;
    blockquote: string;
    list: string;
    lead: string;
    large: string;
    small: string;
    muted: string;
};
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant?: keyof typeof variantMap;
    component?: React.ElementType;
    secondaryFont?: boolean;
}
declare function Typography({ className, variant, component, secondaryFont, children, ...props }: TypographyProps): react_jsx_runtime.JSX.Element;

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

export { Avatar, AvatarFallback, AvatarImage, Badge, type BgPatternProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Input, Logo, NumberInput, PasswordInput, PatternCheckerboard, PatternCross, PatternDashedGrid, PatternDiagonal, PatternDiamond, PatternDots, PatternGrid, PatternLines, PatternRadial, type PatternRadialProps, PatternZigzag, PhoneInput, RadioGroup, RadioGroupItem, SearchInput, Separator, Skeleton, Switch, Textarea, Typography, UrlInput, badgeVariants };
