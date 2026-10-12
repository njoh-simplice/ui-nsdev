import type { ComponentProps } from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { cx } from "@/lib/cx";
import { popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

// Wrap part of the page (or all of it) in a TooltipProvider and tooltips open without their
// usual delay once one has opened, so moving along a toolbar feels quick.
export const TooltipProvider = BaseTooltip.Provider;
export const Tooltip = BaseTooltip.Root;

// Renders a button by default. To put a tooltip on your own element, such as a Button, pass it
// as render: <TooltipTrigger render={<Button />}>.
export const TooltipTrigger = BaseTooltip.Trigger;

// side, sideOffset and align place the tooltip against its trigger; every other prop goes to the
// popup itself.
export function TooltipContent({
  side = "top",
  sideOffset = 6,
  align,
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseTooltip.Popup>> &
  Pick<ComponentProps<typeof BaseTooltip.Positioner>, "side" | "sideOffset" | "align">) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner side={side} sideOffset={sideOffset} align={align} className="z-50">
        <BaseTooltip.Popup className={cx(popupSurface, popupMotion, "px-2 py-1 text-sm", className)} {...props}>
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}
