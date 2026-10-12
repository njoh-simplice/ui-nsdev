import type { ComponentProps } from "react";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import { cx } from "@/lib/cx";

// A row of Toggles that belong together. The toggles are attached: only the outer corners are
// round and neighbours overlap by 1px so borders don't double. The pressed (or hovered, or
// focused) one is lifted above its neighbours so its whole border shows.
// Give each Toggle a `value`. By default pressing one releases the others; add `multiple` to
// allow several. Give the group an aria-label.
const attached = [
  "[&>button]:relative [&>button]:rounded-none",
  "[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
  "[&>button:not(:first-child)]:-ml-px",
  "[&>button:hover]:z-10 [&>button:focus-visible]:z-10 [&>button[data-pressed]]:z-10",
].join(" ");

export function ToggleGroup({
  className,
  ...props
}: Omit<ComponentProps<typeof BaseToggleGroup>, "className"> & { className?: string }) {
  return <BaseToggleGroup className={cx("inline-flex", attached, className)} {...props} />;
}
