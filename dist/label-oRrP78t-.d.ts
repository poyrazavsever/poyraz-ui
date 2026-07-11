import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "soft" | "glass" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon-sm" | "icon" | "icon-lg" | null | undefined;
    radius?: "none" | "xs" | "sm" | "lg" | "md" | "xl" | "2xl" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonEffect = "none" | "shine" | "fill" | "swap" | "border-draw";
type ButtonFillDirection = "right" | "up";
type ButtonSwapTarget = "icon" | "label" | "both";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants> & {
    /** Render the button styles and behavior on the single child element. */
    asChild?: boolean;
    /** Keep the label in-flow while showing a centered busy indicator. */
    loading?: boolean;
    /** Optional decorative hover motion; semantic state remains unchanged. */
    effect?: ButtonEffect;
    /** Axis used by the fill effect. */
    fillDirection?: ButtonFillDirection;
    /** Anatomy animated by the swap effect. Raw text is treated as content. */
    swapTarget?: ButtonSwapTarget;
};
declare const Button: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "soft" | "glass" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon-sm" | "icon" | "icon-lg" | null | undefined;
    radius?: "none" | "xs" | "sm" | "lg" | "md" | "xl" | "2xl" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Render the button styles and behavior on the single child element. */
    asChild?: boolean;
    /** Keep the label in-flow while showing a centered busy indicator. */
    loading?: boolean;
    /** Optional decorative hover motion; semantic state remains unchanged. */
    effect?: ButtonEffect;
    /** Axis used by the fill effect. */
    fillDirection?: ButtonFillDirection;
    /** Anatomy animated by the swap effect. Raw text is treated as content. */
    swapTarget?: ButtonSwapTarget;
} & React.RefAttributes<HTMLButtonElement>>;
declare function ButtonIcon({ className, ...props }: React.ComponentPropsWithoutRef<"span">): react_jsx_runtime.JSX.Element;
declare function ButtonLabel({ className, ...props }: React.ComponentPropsWithoutRef<"span">): react_jsx_runtime.JSX.Element;

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

export { Button as B, Label as L, type ButtonEffect as a, type ButtonFillDirection as b, ButtonIcon as c, ButtonLabel as d, type ButtonProps as e, type ButtonSwapTarget as f, buttonVariants as g, type LabelProps as h };
