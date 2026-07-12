import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "secondary" | "outline" | "glass" | "destructive" | "soft" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "default" | "lg" | "icon-sm" | "icon" | "icon-lg" | null | undefined;
    radius?: "xs" | "sm" | "lg" | "xl" | "md" | "full" | "none" | "2xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonEffect = "none" | "shine" | "fill" | "swap" | "border-draw";
type ButtonFillDirection = "right" | "left" | "up" | "down";
type ButtonSwapTarget = "icon" | "label" | "both";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants> & {
    /** Render the button styles and behavior on the single child element. */
    asChild?: boolean;
    /** Keep the label in-flow while showing a centered busy indicator. */
    loading?: boolean;
    /** Optional decorative hover motion; semantic state remains unchanged. */
    effect?: ButtonEffect;
    /** Direction in which the fill effect travels. */
    fillDirection?: ButtonFillDirection;
    /** Anatomy animated by the swap effect. Raw text is treated as content. */
    swapTarget?: ButtonSwapTarget;
};
declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "default" | "link" | "secondary" | "outline" | "glass" | "destructive" | "soft" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "default" | "lg" | "icon-sm" | "icon" | "icon-lg" | null | undefined;
    radius?: "xs" | "sm" | "lg" | "xl" | "md" | "full" | "none" | "2xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Render the button styles and behavior on the single child element. */
    asChild?: boolean;
    /** Keep the label in-flow while showing a centered busy indicator. */
    loading?: boolean;
    /** Optional decorative hover motion; semantic state remains unchanged. */
    effect?: ButtonEffect;
    /** Direction in which the fill effect travels. */
    fillDirection?: ButtonFillDirection;
    /** Anatomy animated by the swap effect. Raw text is treated as content. */
    swapTarget?: ButtonSwapTarget;
} & React.RefAttributes<HTMLButtonElement>>;
declare function ButtonIcon({ className, ...props }: React.ComponentPropsWithoutRef<"span">): react_jsx_runtime.JSX.Element;
declare function ButtonLabel({ className, ...props }: React.ComponentPropsWithoutRef<"span">): react_jsx_runtime.JSX.Element;

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
declare const CardHeading: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardAction: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const fieldVariants: (props?: ({
    variant?: "default" | "glass" | "soft" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "full" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const floatingSurfaceVariants: (props?: ({
    surface?: "glass" | "soft" | "solid" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const floatingItemVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
    radius?: "sm" | "lg" | "md" | "none" | null | undefined;
    inset?: boolean | null | undefined;
    interactiveMotion?: "shift" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const overlayVariants: (props?: ({
    tone?: "glass" | "soft" | "dim" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const overlaySurfaceVariants: (props?: ({
    surface?: "glass" | "soft" | "solid" | null | undefined;
    radius?: "sm" | "lg" | "xl" | "md" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type FloatingSurfaceProps = VariantProps<typeof floatingSurfaceVariants>;
type FloatingItemProps = VariantProps<typeof floatingItemVariants>;
type OverlayProps = VariantProps<typeof overlayVariants>;
type OverlaySurfaceProps = VariantProps<typeof overlaySurfaceVariants>;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

export { Button as B, Card as C, type FloatingSurfaceProps as F, Label as L, type OverlaySurfaceProps as O, type ButtonEffect as a, type ButtonFillDirection as b, ButtonIcon as c, ButtonLabel as d, type ButtonProps as e, type ButtonSwapTarget as f, CardAction as g, CardContent as h, CardDescription as i, CardFooter as j, CardHeader as k, CardHeading as l, CardImage as m, CardTitle as n, buttonVariants as o, cardVariants as p, fieldVariants as q, type CardProps as r, type OverlayProps as s, type FloatingItemProps as t, type LabelProps as u };
