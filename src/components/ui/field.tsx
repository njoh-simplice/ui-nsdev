import type { ComponentProps } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import { cx } from "@/lib/cx";

type WithClass<T> = Omit<T, "className"> & { className?: string };

// A Field joins a label, a control, a hint and an error message. Base UI connects them: clicking
// the label focuses the control, and the hint and error are tied to it for assistive tech.
// Input works inside a Field with no extra code. For any other control, such as a Textarea,
// render it through FieldControl: <FieldControl render={<Textarea />} />.
export function Field({ className, ...props }: WithClass<ComponentProps<typeof BaseField.Root>>) {
  return <BaseField.Root className={cx("flex w-full flex-col gap-2", className)} {...props} />;
}

export function FieldLabel({ className, ...props }: WithClass<ComponentProps<typeof BaseField.Label>>) {
  return (
    <BaseField.Label
      className={cx("text-base font-medium text-text data-[disabled]:text-text-secondary", className)}
      {...props}
    />
  );
}

export function FieldDescription({ className, ...props }: WithClass<ComponentProps<typeof BaseField.Description>>) {
  return <BaseField.Description className={cx("text-sm text-text/70", className)} {...props} />;
}

// Shown when the control is invalid. `match` picks which problem it is for, such as
// valueMissing or typeMismatch, or pass true to show it whenever the field is invalid.
export function FieldError({ className, ...props }: WithClass<ComponentProps<typeof BaseField.Error>>) {
  return <BaseField.Error className={cx("text-sm text-danger", className)} {...props} />;
}

export const FieldControl = BaseField.Control;

// A group of related controls under one legend. It is a native fieldset that is named by its
// legend (through aria-labelledby), so a screen reader announces the legend as the group's name.
export function Fieldset({ className, ...props }: WithClass<ComponentProps<typeof BaseFieldset.Root>>) {
  return <BaseFieldset.Root className={cx("flex flex-col gap-3", className)} {...props} />;
}

export function FieldsetLegend({ className, ...props }: WithClass<ComponentProps<typeof BaseFieldset.Legend>>) {
  return <BaseFieldset.Legend className={cx("text-base font-semibold text-text", className)} {...props} />;
}
