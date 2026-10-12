import type { ComponentProps } from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export function Tabs({ className, ...props }: WithClass<ComponentProps<typeof BaseTabs.Root>>) {
  return <BaseTabs.Root className={cx("w-full", className)} {...props} />;
}

// The row of tabs, with a green line under the active one that slides to the next when you
// change tab.
export function TabsList({ className, children, ...props }: WithClass<ComponentProps<typeof BaseTabs.List>>) {
  return (
    <BaseTabs.List className={cx("relative flex gap-1 border-b border-border", className)} {...props}>
      {children}
      <BaseTabs.Indicator className="absolute -bottom-px left-0 h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] rounded-full bg-accent transition-[translate,width] duration-150 ease-out motion-reduce:transition-none" />
    </BaseTabs.List>
  );
}

export function TabsTrigger({ className, ...props }: WithClass<ComponentProps<typeof BaseTabs.Tab>>) {
  return (
    <BaseTabs.Tab
      className={cx(
        "cursor-pointer rounded-sm px-3 py-2 text-base font-medium text-text-secondary transition-colors",
        focusRing,
        "not-data-[disabled]:hover:text-text data-[active]:text-text data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: WithClass<ComponentProps<typeof BaseTabs.Panel>>) {
  return <BaseTabs.Panel className={cx("rounded-sm px-3 py-4 text-base text-text", focusRing, className)} {...props} />;
}
