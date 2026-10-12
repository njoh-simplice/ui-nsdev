import type { ComponentProps } from "react";
import { Progress as BaseProgress } from "@base-ui/react/progress";
import { cx } from "@/lib/cx";

// Pass a number for a determinate bar, or `null` for one that is still working it out: the
// indicator then slides across the track. Reduced motion gets a still bar.
export function Progress({
  label,
  showValue = false,
  className,
  ...props
}: Omit<ComponentProps<typeof BaseProgress.Root>, "className" | "children"> & {
  label?: string;
  showValue?: boolean;
  className?: string;
}) {
  return (
    <BaseProgress.Root className={cx("flex w-full flex-col gap-2", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-base">
          {label && <BaseProgress.Label className="font-medium text-text">{label}</BaseProgress.Label>}
          {showValue && (
            <BaseProgress.Value className="ml-auto text-text-secondary tabular-nums" />
          )}
        </div>
      )}
      <BaseProgress.Track className="h-2 w-full overflow-hidden rounded-full bg-border-strong">
        <BaseProgress.Indicator className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out data-[indeterminate]:w-1/3 data-[indeterminate]:animate-[progress-indeterminate_1.4s_ease-in-out_infinite] motion-reduce:animate-none" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  );
}
