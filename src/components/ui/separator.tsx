import type { ComponentProps } from "react";
import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cx } from "@/lib/cx";

// A 1px line that divides content. Horizontal fills the width; vertical fills the height of
// whatever flex row it sits in, so give that row a height.
export function Separator({
  orientation = "horizontal",
  className,
  ...props
}: Omit<ComponentProps<typeof BaseSeparator>, "className"> & { className?: string }) {
  return (
    <BaseSeparator
      orientation={orientation}
      className={cx(
        "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}
