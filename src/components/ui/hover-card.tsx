import type { ComponentProps } from "react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import { cx } from "@/lib/cx";
import { focusRing, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

// A card that opens when you hover or focus a link, to preview where it goes. It is built on
// Base UI's PreviewCard.
export const HoverCard = BasePreviewCard.Root;

// A real link (an <a>), underlined. Give it an href.
export function HoverCardTrigger({ className, ...props }: WithClass<ComponentProps<typeof BasePreviewCard.Trigger>>) {
  return (
    <BasePreviewCard.Trigger
      className={cx(
        "rounded-sm text-text underline decoration-text-secondary underline-offset-4 transition-colors hover:decoration-text",
        focusRing,
        className,
      )}
      {...props}
    />
  );
}

export function HoverCardContent({
  side = "bottom",
  sideOffset = 8,
  align = "center",
  className,
  ...props
}: WithClass<ComponentProps<typeof BasePreviewCard.Popup>> &
  Pick<ComponentProps<typeof BasePreviewCard.Positioner>, "side" | "sideOffset" | "align">) {
  return (
    <BasePreviewCard.Portal>
      <BasePreviewCard.Positioner side={side} sideOffset={sideOffset} align={align} className="z-50">
        <BasePreviewCard.Popup className={cx(popupSurface, popupMotion, "w-72 p-4", className)} {...props} />
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}
