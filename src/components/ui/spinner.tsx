import type { ComponentProps } from "react";
import { LoaderCircle } from "lucide-react";
import { cx } from "@/lib/cx";

// A spinning ring for something that is happening for an unknown time. It draws in the current
// text color, is 16px unless you size it, and stops spinning for reduced motion. It announces
// "Loading"; inside a button that already says what is happening, pass aria-hidden.
export function Spinner({ className, ...props }: ComponentProps<typeof LoaderCircle>) {
  return (
    <LoaderCircle
      role="status"
      aria-label="Loading"
      className={cx("size-4 shrink-0 motion-safe:animate-spin", className)}
      {...props}
    />
  );
}
