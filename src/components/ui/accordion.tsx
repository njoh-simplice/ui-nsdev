import type { ComponentProps } from "react";
import { Plus } from "lucide-react";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

// A stack of sections that open and close. Only one is open at a time unless you pass `multiple`.
export function Accordion({ className, ...props }: WithClass<ComponentProps<typeof BaseAccordion.Root>>) {
  return <BaseAccordion.Root className={cx("flex w-full flex-col", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: WithClass<ComponentProps<typeof BaseAccordion.Item>>) {
  return <BaseAccordion.Item className={cx("border-b border-border", className)} {...props} />;
}

// The heading wraps the button, as the pattern asks. The plus turns into a cross while open.
export function AccordionTrigger({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseAccordion.Trigger>>) {
  return (
    <BaseAccordion.Header className="flex">
      <BaseAccordion.Trigger
        className={cx(
          "group flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-sm py-4 text-left text-base font-medium text-text transition-colors",
          focusRing,
          "not-data-[disabled]:hover:text-text/70 data-[disabled]:cursor-not-allowed data-[disabled]:text-text-secondary",
          className,
        )}
        {...props}
      >
        {children}
        <Plus
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-150 group-data-[panel-open]:rotate-45 motion-reduce:transition-none"
        />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  );
}

// The panel animates its height, using the height Base UI measures for it.
export function AccordionContent({
  className,
  children,
  ...props
}: WithClass<ComponentProps<typeof BaseAccordion.Panel>>) {
  return (
    <BaseAccordion.Panel
      className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-text/70 transition-[height] duration-150 ease-out data-[ending-style]:h-0 data-[starting-style]:h-0 motion-reduce:transition-none"
      {...props}
    >
      <div className={cx("pb-4", className)}>{children}</div>
    </BaseAccordion.Panel>
  );
}
