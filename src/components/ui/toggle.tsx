import type { ComponentProps } from "react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Size = "default" | "icon";

// A button that stays pressed. Pressed uses the accent. Hover and pressed are guarded with
// not-data-[disabled], and the scale-down on press is skipped for reduced motion, as in Button.
const base = [
  "inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-text-secondary text-base font-semibold text-text",
  "[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  "transition-[background-color,border-color,color,scale] duration-150 ease-out",
  focusRing,
  "motion-safe:not-data-[disabled]:active:scale-97",
  "not-data-[disabled]:not-data-[pressed]:hover:bg-text/10",
  "not-data-[disabled]:data-[pressed]:border-accent not-data-[disabled]:data-[pressed]:bg-accent/10 not-data-[disabled]:data-[pressed]:text-accent",
  "not-data-[disabled]:data-[pressed]:hover:bg-accent/20",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:bg-surface data-[disabled]:text-text-secondary",
].join(" ");

const sizes: Record<Size, string> = {
  default: "px-4",
  icon: "w-9",
};

export function Toggle({
  size = "default",
  className,
  ...props
}: Omit<ComponentProps<typeof BaseToggle>, "className"> & { size?: Size; className?: string }) {
  return <BaseToggle className={cx(base, sizes[size], className)} {...props} />;
}
