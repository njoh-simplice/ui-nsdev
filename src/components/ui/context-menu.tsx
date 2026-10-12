import type { ComponentProps } from "react";
import { Check } from "lucide-react";
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { cx } from "@/lib/cx";
import { menuItemStyles, menuItemTones, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export const ContextMenu = BaseContextMenu.Root;

// The area that opens the menu when it is right-clicked, or long-pressed on a touch screen. Give
// it a size and a look with classes.
export const ContextMenuTrigger = BaseContextMenu.Trigger;

// The menu opens at the pointer, so there is no side or align to set.
export function ContextMenuContent({
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.Popup>>) {
  return (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner className="z-50">
        <BaseContextMenu.Popup className={cx(popupSurface, popupMotion, "min-w-48 p-1", className)} {...props} />
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  );
}

// variant="destructive" turns the row red, for something like Log out or Delete.
export function ContextMenuItem({
  variant = "default",
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.Item>> & { variant?: keyof typeof menuItemTones }) {
  return <BaseContextMenu.Item className={cx(menuItemStyles, menuItemTones[variant], className)} {...props} />;
}

export function ContextMenuSeparator({
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.Separator>>) {
  return <BaseContextMenu.Separator className={cx("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

export const ContextMenuGroup = BaseContextMenu.Group;

export function ContextMenuLabel({
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.GroupLabel>>) {
  return (
    <BaseContextMenu.GroupLabel className={cx("px-2 py-1.5 text-sm font-medium text-text-secondary", className)} {...props} />
  );
}

export function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.CheckboxItem>>) {
  return (
    <BaseContextMenu.CheckboxItem className={cx(menuItemStyles, menuItemTones.default, "relative pl-8", className)} {...props}>
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseContextMenu.CheckboxItemIndicator>
          <Check aria-hidden className="size-4" />
        </BaseContextMenu.CheckboxItemIndicator>
      </span>
      {children}
    </BaseContextMenu.CheckboxItem>
  );
}

export const ContextMenuRadioGroup = BaseContextMenu.RadioGroup;

export function ContextMenuRadioItem({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseContextMenu.RadioItem>>) {
  return (
    <BaseContextMenu.RadioItem className={cx(menuItemStyles, menuItemTones.default, "relative pl-8", className)} {...props}>
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseContextMenu.RadioItemIndicator>
          <span className="block size-2 rounded-full bg-text" />
        </BaseContextMenu.RadioItemIndicator>
      </span>
      {children}
    </BaseContextMenu.RadioItem>
  );
}

export function ContextMenuShortcut({ className, ...props }: ComponentProps<"span">) {
  return <span className={cx("ml-auto pl-6 text-sm text-text-secondary", className)} {...props} />;
}
