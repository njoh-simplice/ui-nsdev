import type { ComponentProps } from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

// On is the accent; off is the strong border color. The thumb is light on the off track and dark
// on the green one. A disabled switch goes flat and grey but still shows which way it is set.
const root = [
  "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full bg-border-strong p-0.5",
  "transition-colors duration-150",
  focusRing,
  "not-data-[disabled]:data-[checked]:bg-accent",
  "data-[disabled]:cursor-not-allowed data-[disabled]:bg-surface data-[disabled]:ring-1 data-[disabled]:ring-border data-[disabled]:ring-inset",
].join(" ");

const thumb = [
  "block size-5 rounded-full bg-text",
  "transition-[translate,background-color] duration-150",
  "data-[checked]:translate-x-5 not-data-[disabled]:data-[checked]:bg-bg",
  "data-[disabled]:bg-text-secondary",
].join(" ");

export function Switch({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseSwitch.Root>, "className"> & { className?: string }) {
  return (
    <BaseSwitch.Root className={cx(root, className)} {...props}>
      <BaseSwitch.Thumb className={thumb} />
    </BaseSwitch.Root>
  );
}
