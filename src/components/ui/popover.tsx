import type { ComponentProps } from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { cx } from "@/lib/cx";
import { popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export const Popover = BasePopover.Root;

// Renders a button by default. To open it from your own element, such as a Button, pass it as
// render: <PopoverTrigger render={<Button />}>.
export const PopoverTrigger = BasePopover.Trigger;

// side, sideOffset and align place the popover against its trigger; every other prop goes to the
// popup itself.
export function PopoverContent({
  side = "bottom",
  sideOffset = 8,
  align = "center",
  className,
  ...props
}: WithClass<ComponentProps<typeof BasePopover.Popup>> &
  Pick<ComponentProps<typeof BasePopover.Positioner>, "side" | "sideOffset" | "align">) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} sideOffset={sideOffset} align={align} className="z-50">
        <BasePopover.Popup className={cx(popupSurface, popupMotion, "flex w-72 flex-col gap-2 p-4", className)} {...props} />
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

export function PopoverTitle({ className, ...props }: WithClass<ComponentProps<typeof BasePopover.Title>>) {
  return <BasePopover.Title className={cx("text-base font-semibold text-text", className)} {...props} />;
}

export function PopoverDescription({ className, ...props }: WithClass<ComponentProps<typeof BasePopover.Description>>) {
  return <BasePopover.Description className={cx("text-sm text-text/70", className)} {...props} />;
}

export const PopoverClose = BasePopover.Close;
