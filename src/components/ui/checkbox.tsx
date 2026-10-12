import type { ComponentProps } from "react";
import { Check, Minus } from "lucide-react";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

// Checked and indeterminate fill with the accent. A disabled checkbox keeps its mark but loses
// the accent, and never reacts to hover. The two icons swap on the root's data-indeterminate.
const root = [
  "group inline-flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border border-text-secondary text-bg",
  "transition-colors duration-150",
  focusRing,
  "not-data-[disabled]:hover:border-text",
  "not-data-[disabled]:data-[checked]:border-accent not-data-[disabled]:data-[checked]:bg-accent",
  "not-data-[disabled]:data-[indeterminate]:border-accent not-data-[disabled]:data-[indeterminate]:bg-accent",
  "data-[disabled]:cursor-not-allowed data-[disabled]:border-border data-[disabled]:bg-surface data-[disabled]:text-text-secondary",
].join(" ");

export function Checkbox({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseCheckbox.Root>, "className"> & { className?: string }) {
  return (
    <BaseCheckbox.Root className={cx(root, className)} {...props}>
      <BaseCheckbox.Indicator className="flex">
        <Check aria-hidden strokeWidth={3} className="size-3.5 group-data-[indeterminate]:hidden" />
        <Minus aria-hidden strokeWidth={3} className="hidden size-3.5 group-data-[indeterminate]:block" />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
