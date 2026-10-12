import type { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";
import type { WithClass } from "@/lib/types";

// One section that opens and closes. For several in a stack, use an Accordion instead.
export function Collapsible({ className, ...props }: WithClass<ComponentProps<typeof BaseCollapsible.Root>>) {
  return <BaseCollapsible.Root className={cx("flex w-full flex-col gap-2", className)} {...props} />;
}

// A secondary Button with a chevron that turns down while the panel is open.
export function CollapsibleTrigger({
  children,
  className,
  ...props
}: Omit<ComponentProps<typeof BaseCollapsible.Trigger>, "render" | "className"> & { className?: string }) {
  return (
    <BaseCollapsible.Trigger render={<Button variant="secondary" className={cx("self-start", className)} />} {...props}>
      {children}
      <ChevronRight
        aria-hidden
        className="transition-transform duration-150 [[data-panel-open]>&]:rotate-90 motion-reduce:transition-none"
      />
    </BaseCollapsible.Trigger>
  );
}

export function CollapsiblePanel({ className, ...props }: WithClass<ComponentProps<typeof BaseCollapsible.Panel>>) {
  return (
    <BaseCollapsible.Panel
      className={cx(
        "h-[var(--collapsible-panel-height)] overflow-hidden text-base transition-[height] duration-150 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 [&[hidden]:not([hidden='until-found'])]:hidden motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  );
}
