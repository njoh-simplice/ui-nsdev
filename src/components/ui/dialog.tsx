import type { ComponentProps } from "react";
import { X } from "lucide-react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";
import { backdropStyles, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export const Dialog = BaseDialog.Root;

// Renders a button by default. To open it from your own element, such as a Button, pass it as
// render: <DialogTrigger render={<Button />}>.
export const DialogTrigger = BaseDialog.Trigger;

// A dim backdrop, and a panel centered on the screen with a close button in the corner. Focus is
// held inside while it is open, and goes back to the trigger when it closes.
export function DialogContent({ className, children, ...props }: WithClass<ComponentProps<typeof BaseDialog.Popup>>) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className={backdropStyles} />
      <BaseDialog.Popup
        className={cx(
          popupSurface,
          popupMotion,
          "fixed top-1/2 left-1/2 z-50 flex w-[28rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-6",
          className,
        )}
        {...props}
      >
        {children}
        <BaseDialog.Close render={<Button variant="secondary" size="icon" aria-label="Close" className="absolute top-3 right-3" />}>
          <X />
        </BaseDialog.Close>
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  );
}

export function DialogHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex flex-col gap-1.5 pr-10", className)} {...props} />;
}

export function DialogTitle({ className, ...props }: WithClass<ComponentProps<typeof BaseDialog.Title>>) {
  return <BaseDialog.Title className={cx("text-xl leading-tight font-semibold text-text", className)} {...props} />;
}

export function DialogDescription({ className, ...props }: WithClass<ComponentProps<typeof BaseDialog.Description>>) {
  return <BaseDialog.Description className={cx("text-base text-text/70", className)} {...props} />;
}

export function DialogFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex flex-col gap-2 sm:flex-row sm:justify-end", className)} {...props} />;
}

export const DialogClose = BaseDialog.Close;
