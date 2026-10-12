import type { ComponentProps } from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { cx } from "@/lib/cx";
import type { WithClass } from "@/lib/types";

// Scrollbars that stay out of the way: they are invisible until you hover the area or scroll,
// and only appear in a direction that actually overflows. Give the area a size with classes
// (h-48 w-64), and put your content inside. The viewport can be focused, so the keyboard can
// scroll it with the arrow keys.
const viewportRing =
  "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-text";

function Scrollbar({ orientation }: { orientation: "vertical" | "horizontal" }) {
  return (
    <BaseScrollArea.Scrollbar
      orientation={orientation}
      className="flex touch-none p-0.5 opacity-0 transition-opacity duration-150 select-none data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:w-3 motion-reduce:transition-none"
    >
      <BaseScrollArea.Thumb className="relative flex-1 rounded-full bg-text-secondary" />
    </BaseScrollArea.Scrollbar>
  );
}

export function ScrollArea({
  className,
  children,
  ...props
}: WithClass<Omit<ComponentProps<typeof BaseScrollArea.Root>, "children">> & { children?: React.ReactNode }) {
  return (
    <BaseScrollArea.Root className={cx("relative overflow-hidden rounded-lg border border-border", className)} {...props}>
      <BaseScrollArea.Viewport className={cx("size-full rounded-[inherit]", viewportRing)}>
        <BaseScrollArea.Content>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      <Scrollbar orientation="vertical" />
      <Scrollbar orientation="horizontal" />
      <BaseScrollArea.Corner />
    </BaseScrollArea.Root>
  );
}
