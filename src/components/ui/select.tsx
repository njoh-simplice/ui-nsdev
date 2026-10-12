import type { ComponentProps } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Select as BaseSelect } from "@base-ui/react/select";
import { cx } from "@/lib/cx";
import { controlStyles, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

// Pass `items` (a list of { label, value }) to Select so the trigger can show the label of the
// chosen value, then render one SelectItem for each.
export const Select = BaseSelect.Root;

// The shown choice, in the secondary color while nothing is chosen yet (the placeholder).
export function SelectValue({ className, ...props }: WithClass<ComponentProps<typeof BaseSelect.Value>>) {
  return <BaseSelect.Value className={cx("truncate data-[placeholder]:text-text-secondary", className)} {...props} />;
}

// The button that opens the list. It looks like an Input, with a pair of arrows on the right.
export function SelectTrigger({ className, children, ...props }: WithClass<ComponentProps<typeof BaseSelect.Trigger>>) {
  return (
    <BaseSelect.Trigger
      className={cx(
        "inline-flex h-9 cursor-pointer items-center justify-between gap-2 text-left",
        controlStyles,
        "data-[popup-open]:border-text",
        className,
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon>
        <ChevronsUpDown aria-hidden className="size-4 text-text-secondary" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

// The list opens below the trigger and is at least as wide as it.
export function SelectContent({
  sideOffset = 4,
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseSelect.Popup>> & Pick<ComponentProps<typeof BaseSelect.Positioner>, "sideOffset">) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner sideOffset={sideOffset} alignItemWithTrigger={false} className="z-50">
        <BaseSelect.Popup
          className={cx(popupSurface, popupMotion, "min-w-[var(--anchor-width)]", className)}
          {...props}
        >
          <BaseSelect.List className="max-h-[var(--available-height)] overflow-y-auto p-1">{children}</BaseSelect.List>
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export function SelectItem({ className, children, ...props }: WithClass<ComponentProps<typeof BaseSelect.Item>>) {
  return (
    <BaseSelect.Item
      className={cx(
        "grid cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1.5 pr-3 pl-2 text-base text-text outline-hidden select-none data-[highlighted]:bg-text/10 data-[disabled]:cursor-not-allowed data-[disabled]:text-text-secondary",
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemIndicator className="col-start-1">
        <Check aria-hidden className="size-4" />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText className="col-start-2">{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  );
}

export const SelectGroup = BaseSelect.Group;

export function SelectLabel({ className, ...props }: WithClass<ComponentProps<typeof BaseSelect.GroupLabel>>) {
  return <BaseSelect.GroupLabel className={cx("px-2 py-1.5 text-sm font-medium text-text-secondary", className)} {...props} />;
}

export function SelectSeparator({ className, ...props }: WithClass<ComponentProps<typeof BaseSelect.Separator>>) {
  return <BaseSelect.Separator className={cx("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}
