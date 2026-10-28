import type { ComponentProps } from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { Plus } from "lucide-react";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Size = "sm" | "default" | "lg";

// A round "+" pinned on something, such as a photo, that opens more about that spot. While what it
// opens is showing, the plus turns a quarter of the way round and becomes a cross, and the fill
// switches to the accent, the library's active color. "Open" is read from aria-expanded, which a
// Popover trigger sets, so the Marker needs no state of its own. The dark fill and the 3px ring
// keep it visible on a light photo and on the dark page. The focus ring adds a 2px halo in the
// page color: over a light photo the light ring alone would vanish, and the halo gives the marker
// an edge there. Hover and press are guarded with not-data-[disabled], and the turn and the press
// scale are both skipped for reduced motion.
//
// To recolor it, set these custom properties on the marker or any parent; each falls back to the
// library's own color: --marker-fill and --marker-ink (the ring and the icon) when closed,
// --marker-hover-fill when pointed at, and --marker-open-fill and --marker-open-ink when open.
const base = [
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-3 border-[color:var(--marker-ink,var(--color-text-secondary))] bg-[var(--marker-fill,var(--color-surface))] text-[color:var(--marker-ink,var(--color-text-secondary))] select-none",
  "[&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out motion-reduce:[&_svg]:transition-none",
  "transition-[background-color,border-color,color,scale,filter] duration-150 ease-out",
  focusRing,
  "focus-visible:shadow-[0_0_0_2px_var(--color-bg)]",
  "motion-safe:not-data-[disabled]:active:scale-95",
  "not-aria-expanded:not-data-[disabled]:hover:bg-[var(--marker-hover-fill,var(--color-border))] not-aria-expanded:not-data-[disabled]:hover:text-[color:var(--marker-ink,var(--color-text))]",
  "aria-expanded:border-[color:var(--marker-open-ink,var(--color-bg))] aria-expanded:bg-[var(--marker-open-fill,var(--color-accent))] aria-expanded:text-[color:var(--marker-open-ink,var(--color-bg))] aria-expanded:[&_svg]:rotate-45",
  "aria-expanded:not-data-[disabled]:hover:brightness-90",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:text-muted",
].join(" ");

const sizes: Record<Size, string> = {
  sm: "size-7 [&_svg]:size-3.5",
  default: "size-9 [&_svg]:size-4",
  lg: "size-12 [&_svg]:size-5",
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
