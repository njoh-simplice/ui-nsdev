import type { ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

// Mark an input invalid with aria-invalid (or let a Base UI Field do it) and the border turns
// to the danger color. Hover only brightens the border of a valid, enabled input.
const base = [
  "h-9 w-full min-w-0 rounded-md border border-text-secondary bg-transparent px-3 text-base text-text",
  "placeholder:text-text-secondary",
  "transition-colors duration-150",
  focusRing,
  "not-aria-invalid:not-data-[invalid]:not-disabled:hover:border-text",
  "aria-invalid:border-danger data-[invalid]:border-danger",
  "disabled:cursor-not-allowed disabled:border-border disabled:bg-surface disabled:text-text-secondary",
].join(" ");

export function Input({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseInput>, "className"> & { className?: string }) {
  return <BaseInput className={cx(base, className)} {...props} />;
}
