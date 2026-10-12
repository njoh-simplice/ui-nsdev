import type { ComponentProps } from "react";
import { cx } from "@/lib/cx";

// A placeholder that holds the shape of content that is still loading. It has no size of its
// own: give it one with classes (h-4 w-40 for a line, size-12 rounded-full for an avatar).
// It pulses, except for people who ask their system for reduced motion, and it is hidden from
// assistive tech, so mark the region that is loading with aria-busy instead.
export function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      aria-hidden
      className={cx("rounded-md bg-border-strong motion-safe:animate-pulse", className)}
      {...props}
    />
  );
}
