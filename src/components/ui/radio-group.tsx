import type { ComponentProps } from "react";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

export function RadioGroup({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseRadioGroup>, "className"> & { className?: string }) {
  return <BaseRadioGroup className={cx("flex flex-col gap-3", className)} {...props} />;
}

// The selected radio gets an accent ring and dot. A disabled one keeps its dot but greys out
// and never reacts to hover.
const radio = [
  "group inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-text-secondary",
  "transition-colors duration-150",
  focusRing,
  "not-data-[disabled]:hover:border-text",
  "not-data-[disabled]:data-[checked]:border-accent",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:bg-surface",
].join(" ");

export function Radio({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseRadio.Root>, "className"> & { className?: string }) {
  return (
    <BaseRadio.Root className={cx(radio, className)} {...props}>
      <BaseRadio.Indicator className="size-2.5 rounded-full bg-accent group-data-[disabled]:bg-text-secondary" />
    </BaseRadio.Root>
  );
}
