import type { ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cx } from "@/lib/cx";

type Variant = "default" | "secondary" | "destructive" | "inverse" | "ghost";
type Size = "default" | "sm" | "icon" | "icon-sm";

// Every variant has hover, focus, pressed and disabled states. Hover and pressed are guarded
// with not-data-[disabled] so a disabled button never reacts. Pressing scales the button to
// 97% and the scale animates (skipped for reduced motion); the transition names `scale`
// because Tailwind applies it as its own CSS property, not through `transform`. Width is in the
// list too, so a button that changes between two set widths (a label becoming an icon) grows or
// shrinks smoothly. Height and text size come from the size, so every size sets its own.
const base = [
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border",
  "font-semibold select-none cursor-pointer",
  "[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  "transition-[background-color,border-color,color,scale,width] duration-150 ease-out",
  "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text",
  "motion-safe:not-data-[disabled]:active:scale-97",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:bg-surface data-[disabled]:text-text-secondary",
].join(" ");

const variants: Record<Variant, string> = {
  default: [
    "border-transparent bg-accent text-bg",
    "not-data-[disabled]:hover:bg-accent/85",
    "not-data-[disabled]:active:bg-accent/70",
  ].join(" "),
  secondary: [
    "border-text bg-transparent text-text",
    "not-data-[disabled]:hover:bg-text/10",
    "not-data-[disabled]:active:bg-text/20",
  ].join(" "),
  destructive: [
    "border-transparent bg-danger text-bg",
    "not-data-[disabled]:hover:bg-danger/85",
    "not-data-[disabled]:active:bg-danger/70",
  ].join(" "),
  // A neutral, light fill for places where green is not wanted, like this site's own header.
  inverse: [
    "border-transparent bg-text text-bg",
    "not-data-[disabled]:hover:bg-text/85",
    "not-data-[disabled]:active:bg-text/70",
  ].join(" "),
  // No fill and no outline until you point at it: a faint wash on hover, a stronger one pressed.
  ghost: [
    "border-transparent bg-transparent text-text",
    "not-data-[disabled]:hover:bg-text/10",
    "not-data-[disabled]:active:bg-text/20",
  ].join(" "),
};

// "icon" and "icon-sm" are square, text-less buttons: a width replaces the side padding.
const sizes: Record<Size, string> = {
  default: "h-9 px-4 text-base",
  sm: "h-7 px-3 text-sm",
  icon: "h-9 w-9 text-base",
  "icon-sm": "h-7 w-7 text-sm",
};

export type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({ variant = "default", size = "default", className, ...props }: ButtonProps) {
  return <BaseButton className={cx(base, variants[variant], sizes[size], className)} {...props} />;
}
