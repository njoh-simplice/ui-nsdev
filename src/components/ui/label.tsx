import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

// A label for a control. Use htmlFor to point at an input, or wrap the control inside it so
// clicking the text toggles it. It dims itself when it wraps a disabled control, or when you
// pass `disabled` for a control that sits next to it.
const base = [
  "inline-flex items-center gap-2 text-base font-medium text-text select-none",
  "data-[disabled]:cursor-not-allowed data-[disabled]:text-text-secondary",
  "has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:text-text-secondary",
  "has-[:disabled]:cursor-not-allowed has-[:disabled]:text-text-secondary",
].join(" ");

export function Label({
  disabled,
  className,
  ...props
}: ComponentProps<"label"> & { disabled?: boolean }) {
  return <label data-disabled={disabled ? "" : undefined} className={cx(base, className)} {...props} />;
}
