import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

// One keyboard key. It is the native kbd element, so it keeps its meaning for assistive tech.
export function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return (
    <kbd
      className={cx(
        "inline-flex h-6 min-w-6 items-center justify-center rounded-sm border border-border-strong bg-surface px-1.5 font-mono text-xs font-medium text-text",
        className,
      )}
      {...props}
    />
  );
}

// Keys that are pressed together, such as Command and K.
export function KbdGroup({ className, ...props }: ComponentProps<"span">) {
  return <span className={cx("inline-flex items-center gap-1", className)} {...props} />;
}
