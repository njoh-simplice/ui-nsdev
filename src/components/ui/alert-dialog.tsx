import type { ComponentProps } from "react";
import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import { cx } from "@/lib/cx";
import { backdropStyles, popupMotion, popupSurface } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

export const AlertDialog = BaseAlertDialog.Root;

// Renders a button by default. To open it from your own element, such as a Button, pass it as
// render: <AlertDialogTrigger render={<Button />}>.
export const AlertDialogTrigger = BaseAlertDialog.Trigger;

// Like a Dialog, but for a question that needs an answer: clicking the backdrop does not close
// it, and there is no close button in the corner. The person has to choose one of the actions.
export function AlertDialogContent({
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseAlertDialog.Popup>>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className={backdropStyles} />
      <BaseAlertDialog.Popup
        className={cx(
          popupSurface,
          popupMotion,
          "fixed top-1/2 left-1/2 z-50 flex w-[28rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 p-6",
          className,
        )}
        {...props}
      />
    </BaseAlertDialog.Portal>
  );
}

export function AlertDialogHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex flex-col gap-1.5", className)} {...props} />;
}

export function AlertDialogTitle({ className, ...props }: WithClass<ComponentProps<typeof BaseAlertDialog.Title>>) {
  return <BaseAlertDialog.Title className={cx("text-xl leading-tight font-semibold text-text", className)} {...props} />;
}

export function AlertDialogDescription({
  className,
  ...props
}: WithClass<ComponentProps<typeof BaseAlertDialog.Description>>) {
  return <BaseAlertDialog.Description className={cx("text-base text-text/70", className)} {...props} />;
}

export function AlertDialogFooter({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("flex flex-col gap-2 sm:flex-row sm:justify-end", className)} {...props} />;
}

// Each action closes the dialog. Pass a Button as render to style it:
// <AlertDialogClose render={<Button variant="destructive" />}>Delete</AlertDialogClose>.
export const AlertDialogClose = BaseAlertDialog.Close;
