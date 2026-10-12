import type { ComponentProps } from "react";
import { Slider as BaseSlider } from "@base-ui/react/slider";
import { cx } from "@/lib/cx";

// The focused element is the hidden range input inside the thumb, not the thumb itself, so the ring
// is drawn when the thumb *contains* keyboard focus rather than with focus-visible on the thumb.
const thumbRing =
  "outline-hidden has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-solid has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-text";

// Pass a number for one thumb or an array of two for a range. Every thumb needs a name for
// assistive tech, so `label` is required; a range gets "minimum" and "maximum" added to it.
export function Slider({
  label,
  className,
  ...props
}: Omit<ComponentProps<typeof BaseSlider.Root>, "className" | "children"> & {
  label: string;
  className?: string;
}) {
  const current = props.value ?? props.defaultValue ?? 0;
  const thumbs = Array.isArray(current) ? current.length : 1;

  return (
    <BaseSlider.Root className={cx("w-full", className)} {...props}>
      <BaseSlider.Control className="flex h-5 w-full touch-none items-center select-none">
        <BaseSlider.Track className="relative h-1.5 w-full rounded-full bg-border-strong select-none">
          <BaseSlider.Indicator className="rounded-full bg-accent data-[disabled]:bg-text-secondary" />
          {Array.from({ length: thumbs }, (_, index) => (
            <BaseSlider.Thumb
              key={index}
              index={thumbs > 1 ? index : undefined}
              aria-label={thumbs > 1 ? `${label} ${index === 0 ? "minimum" : "maximum"}` : label}
              className={cx(
                "block size-5 cursor-grab rounded-full bg-text transition-transform duration-150",
                thumbRing,
                "data-[dragging]:scale-110 data-[dragging]:cursor-grabbing",
                "data-[disabled]:cursor-not-allowed data-[disabled]:bg-text-secondary",
              )}
            />
          ))}
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
