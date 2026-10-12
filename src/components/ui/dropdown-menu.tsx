import type { ComponentProps } from "react";
import { Check } from "lucide-react";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { cx } from "@/lib/cx";
import { menuItemStyles, menuItemTones, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export const DropdownMenu = BaseMenu.Root;

// Renders a button by default. To open it from your own element, such as a Button, pass it as
// render: <DropdownMenuTrigger render={<Button />}>.
export const DropdownMenuTrigger = BaseMenu.Trigger;

// side, sideOffset and align place the menu against its trigger; every other prop goes to the
// popup itself.
export function DropdownMenuContent({
  side = "bottom",
  sideOffset = 6,
  align = "start",
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseMenu.Popup>> &
  Pick<ComponentProps<typeof BaseMenu.Positioner>, "side" | "sideOffset" | "align">) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner side={side} sideOffset={sideOffset} align={align} className="z-50">
        <BaseMenu.Popup className={cx(popupSurface, popupMotion, "min-w-48 p-1", className)} {...props} />
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

// variant="destructive" turns the row red, for something like Log out or Delete.
export function DropdownMenuItem({
  variant = "default",
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseMenu.Item>> & { variant?: keyof typeof menuItemTones }) {
  return <BaseMenu.Item className={cx(menuItemStyles, menuItemTones[variant], className)} {...props} />;
}

export function DropdownMenuSeparator({ className, ...props }: WithClass<ComponentProps<typeof BaseMenu.Separator>>) {
  return <BaseMenu.Separator className={cx("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

// A group with a label. Put DropdownMenuLabel inside a DropdownMenuGroup.
export const DropdownMenuGroup = BaseMenu.Group;

export function DropdownMenuLabel({ className, ...props }: WithClass<ComponentProps<typeof BaseMenu.GroupLabel>>) {
  return <BaseMenu.GroupLabel className={cx("px-2 py-1.5 text-sm font-medium text-text-secondary", className)} {...props} />;
}

// A row that can be ticked on and off. The tick shows in the space on the left.
export function DropdownMenuCheckboxItem({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseMenu.CheckboxItem>>) {
  return (
    <BaseMenu.CheckboxItem className={cx(menuItemStyles, menuItemTones.default, "relative pl-8", className)} {...props}>
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseMenu.CheckboxItemIndicator>
          <Check aria-hidden className="size-4" />
        </BaseMenu.CheckboxItemIndicator>
      </span>
      {children}
    </BaseMenu.CheckboxItem>
  );
}

// Radio rows, where exactly one is chosen. Wrap the DropdownMenuRadioItems in a
// DropdownMenuRadioGroup.
export const DropdownMenuRadioGroup = BaseMenu.RadioGroup;

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseMenu.RadioItem>>) {
  return (
    <BaseMenu.RadioItem className={cx(menuItemStyles, menuItemTones.default, "relative pl-8", className)} {...props}>
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseMenu.RadioItemIndicator>
          <span className="block size-2 rounded-full bg-text" />
        </BaseMenu.RadioItemIndicator>
      </span>
      {children}
    </BaseMenu.RadioItem>
  );
}

// A keyboard shortcut at the right end of a row, such as <Kbd> or plain text.
export function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return <span className={cx("ml-auto pl-6 text-sm text-text-secondary", className)} {...props} />;
}
