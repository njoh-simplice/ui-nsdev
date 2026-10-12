"use client";

import type { ComponentProps, ReactNode } from "react";
import { CircleAlert, CircleCheck, X } from "lucide-react";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cx } from "@/lib/cx";
import { popupShape } from "@/lib/styles";
import type { WithClass } from "@/lib/types";

// Toasts are messages that appear for a few seconds and go away by themselves. Mount one
// ToastProvider near the top of the app (this site does it in the root layout) and call
// `useToast().add({ title, description })` from anywhere inside it.
//
// Options for add():
// - `type`: "success" or "error" add an icon and tint the border; "loading" shows a spinner
//   and never goes away on its own. Leave it out for a plain toast.
// - `timeout`: how long it stays, in milliseconds (5000 by default, 0 keeps it until closed).
// - `actionProps`: adds a button, such as Undo.
// - `id`: lets you close or update that toast later with `toast.close(id)`.
// - `data`: the extras below.
export type ToastPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";

export type ToastData = {
  // Replaces the icon of the type, or adds one to a plain toast. An emoji or any element.
  icon?: ReactNode;
  // Where the toast appears. Toasts in the same place stack. Bottom right by default.
  position?: ToastPosition;
  // "dark" puts the toast on the page background with a bright border. "themed" gives it a
  // soft accent wash.
  tone?: "dark" | "themed";
  // Replaces the whole body. Build it from ToastTitle and ToastDescription so the toast is
  // still announced and named.
  custom?: ReactNode;
};

// useToast().promise(promise, { loading, success, error }) shows a spinner toast and turns it
// into a success or an error toast when the promise settles.
export function useToast() {
  return BaseToast.useToastManager<ToastData>();
}

const typeIcons: Record<string, ReactNode> = {
  success: <CircleCheck className="text-accent" />,
  error: <CircleAlert className="text-danger" />,
  loading: <Spinner aria-hidden className="size-5" />,
};

const tones = {
  default: "border-border-strong bg-surface",
  dark: "border-text bg-bg",
  themed: "border-accent/30 bg-accent/10",
} as const;

// Each place is a column in a corner (or the top and bottom middle). The newest toast sits
// closest to the edge. Top places start below the sticky header.
const places: Record<ToastPosition, string> = {
  "top-left": "top-20 left-4 flex-col sm:left-6",
  "top-center": "top-20 left-1/2 -translate-x-1/2 flex-col",
  "top-right": "top-20 right-4 flex-col sm:right-6",
  "bottom-left": "bottom-4 left-4 flex-col-reverse sm:bottom-6 sm:left-6",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse sm:bottom-6",
  "bottom-right": "bottom-4 right-4 flex-col-reverse sm:right-6 sm:bottom-6",
};

export function ToastTitle({ className, ...props }: WithClass<ComponentProps<typeof BaseToast.Title>>) {
  return <BaseToast.Title className={cx("text-base leading-snug font-semibold text-text", className)} {...props} />;
}

export function ToastDescription({ className, ...props }: WithClass<ComponentProps<typeof BaseToast.Description>>) {
  return <BaseToast.Description className={cx("text-sm text-text/70", className)} {...props} />;
}

function ToastItem({ toast, top }: { toast: BaseToast.Root.ToastObject<ToastData>; top: boolean }) {
  const { type, data } = toast;
  const icon = data?.icon ?? (type ? typeIcons[type] : undefined);
  const slide = top
    ? "data-[starting-style]:-translate-y-2 data-[ending-style]:-translate-y-2"
    : "data-[starting-style]:translate-y-2 data-[ending-style]:translate-y-2";

  return (
    <BaseToast.Root
      toast={toast}
      className={cx(
        popupShape,
        tones[data?.tone ?? "default"],
        "pointer-events-auto relative flex items-start gap-3 p-4 pr-11 select-none",
        "transition-[opacity,translate] duration-200 ease-out data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 motion-reduce:transition-none",
        slide,
        "data-[type=success]:border-accent/40 data-[type=error]:border-danger/40",
      )}
    >
      {data?.custom ?? (
        <>
          {icon && (
            <span
              aria-hidden
              className="mt-px flex size-5 shrink-0 items-center justify-center text-lg leading-none [&_svg]:size-5"
            >
              {icon}
            </span>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-1 break-words">
            <ToastTitle />
            <ToastDescription />
            <BaseToast.Action render={<Button variant="secondary" className="mt-2 self-start" />} />
          </div>
        </>
      )}
      <BaseToast.Close
        aria-label="Dismiss"
        className={cx(
          "absolute top-[15px] right-3 flex size-6 cursor-pointer items-center justify-center rounded-sm text-text-secondary transition-colors after:absolute after:-inset-1.5 hover:text-text",
          "outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-text",
        )}
      >
        <X aria-hidden className="size-4" />
      </BaseToast.Close>
    </BaseToast.Root>
  );
}

function ToastList() {
  const { toasts } = BaseToast.useToastManager<ToastData>();

  return (Object.keys(places) as ToastPosition[]).map((position) => {
    const group = toasts.filter((toast) => (toast.data?.position ?? "bottom-right") === position);
    if (group.length === 0) return null;
    return (
      <div
        key={position}
        className={cx("pointer-events-none absolute flex w-[calc(100vw-2rem)] max-w-sm gap-2", places[position])}
      >
        {group.map((toast) => (
          <ToastItem key={toast.id} toast={toast} top={position.startsWith("top")} />
        ))}
      </div>
    );
  });
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <BaseToast.Provider>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className="pointer-events-none fixed inset-0 z-60 outline-hidden">
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}
