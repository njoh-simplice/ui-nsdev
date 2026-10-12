"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Variant = "default" | "success" | "warning" | "destructive";

// Status variants use a soft wash (about 9% fill, 30% border) with a full-strength dot, as
// the theming rules ask: the full color is for the indicator, never the whole surface.
const base = [
  "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium whitespace-nowrap text-text",
  "[&_svg:not([class*='size-'])]:size-3 [&_svg]:shrink-0",
  "transition-colors duration-150",
  focusRing,
].join(" ");

const dot = "before:size-1.5 before:shrink-0 before:rounded-full before:content-['']";

// [a&] only matches when the badge is rendered as a link, so a plain badge has no hover state.
const variants: Record<Variant, string> = {
  default: "border-border bg-surface [a&]:hover:bg-border",
  success: `border-accent/30 bg-accent/10 ${dot} before:bg-accent [a&]:hover:bg-accent/20`,
  warning: `border-warning/30 bg-warning/10 ${dot} before:bg-warning [a&]:hover:bg-warning/20`,
  destructive: `border-danger/30 bg-danger/10 ${dot} before:bg-danger [a&]:hover:bg-danger/20`,
};

export interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: Variant;
}

export function Badge({ variant = "default", className, render, ...props }: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">({ className: cx(base, variants[variant], className) }, props),
  });
}
