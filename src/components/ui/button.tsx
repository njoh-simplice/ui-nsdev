import type { ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary";

// The six states: default (primary), secondary, hover, focus, clicked, disabled.
// Hover/active are guarded with not-data-[disabled] so a disabled button never reacts.
const base = [
  "inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md border px-3.5",
  "text-sm font-semibold select-none cursor-pointer",
  "transition-[background-color,border-color,color,transform] duration-100",
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text",
  "not-data-[disabled]:active:translate-y-px",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:bg-surface data-[disabled]:text-text-secondary",
].join(" ");

const variants: Record<Variant, string> = {
  primary: [
    "border-transparent bg-text text-bg",
    "not-data-[disabled]:hover:bg-text/85",
    "not-data-[disabled]:active:bg-text/70",
  ].join(" "),
  secondary: [
    "border-text bg-transparent text-text",
    "not-data-[disabled]:hover:bg-text/10",
    "not-data-[disabled]:active:bg-text/20",
  ].join(" "),
};

export type ButtonProps = Omit<ComponentProps<typeof BaseButton>, "className"> & {
  variant?: Variant;
  className?: string;
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <BaseButton className={cx(base, variants[variant], className)} {...props} />;
}
