import type { ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { Plus } from "lucide-react";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Size = "sm" | "default" | "lg";

// A round "+" pinned on something, such as a photo, that opens more about that spot. While what it
// opens is showing, the plus turns a quarter of the way round and becomes a cross. "Open" is read
// from aria-expanded, which a Popover trigger sets, so the Marker needs no state of its own. The
// dark fill and the hairline keep it visible on a light photo and on the dark page. The focus ring
// adds a 2px halo in the page color: over a light photo the light ring alone would vanish, and the
// halo gives the marker an edge there. Hover and press are guarded with not-data-[disabled], and the turn and the press scale are both
// skipped for reduced motion.
const base = [
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-surface text-text-secondary select-none",
  "[&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out motion-reduce:[&_svg]:transition-none",
  "transition-[background-color,border-color,color,scale] duration-150 ease-out",
  focusRing,
  "focus-visible:shadow-[0_0_0_2px_var(--color-bg)]",
  "motion-safe:not-data-[disabled]:active:scale-95",
  "not-data-[disabled]:hover:bg-border not-data-[disabled]:hover:text-text",
  "aria-expanded:border-text aria-expanded:text-text aria-expanded:[&_svg]:rotate-45",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:text-muted",
].join(" ");

const sizes: Record<Size, string> = {
  sm: "size-8 [&_svg]:size-4",
  default: "size-11 [&_svg]:size-5",
  lg: "size-15 [&_svg]:size-6",
};

export type MarkerProps = Omit<ComponentProps<typeof BaseButton>, "className" | "children"> & {
  size?: Size;
  className?: string;
};

// The marker has no text, so always give it an aria-label that names the spot it marks.
export function Marker({ size = "default", className, ...props }: MarkerProps) {
  return (
    <BaseButton className={cx(base, sizes[size], className)} {...props}>
      <Plus aria-hidden />
    </BaseButton>
  );
}
