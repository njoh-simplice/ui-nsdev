"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";
import { popupSurface } from "@/lib/styles";

// Toasts are messages that appear for a few seconds and go away by themselves. Mount one
// ToastProvider near the top of the app (this site does it in the root layout) and call
// `useToast().add({ title, description })` from anywhere inside it.
//
// `type` ("success" or "error") tints the border. `timeout` is how long it stays, in
// milliseconds (5000 by default). `actionProps` adds a button, such as Undo, to the toast.
export const useToast = BaseToast.useToastManager;

function ToastList() {
  const { toasts } = BaseToast.useToastManager();

  return toasts.map((toast) => (
    <BaseToast.Root
      key={toast.id}
      toast={toast}
      className={cx(
        popupSurface,
        "relative flex flex-col gap-1 p-4 pr-14 select-none",
        "transition-[opacity,translate] duration-200 ease-out data-[starting-style]:translate-y-2 data-[starting-style]:opacity-0 data-[ending-style]:translate-y-2 data-[ending-style]:opacity-0 motion-reduce:transition-none",
        "data-[type=success]:border-accent/40 data-[type=error]:border-danger/40",
      )}
    >
      <BaseToast.Title className="text-base font-semibold text-text" />
      <BaseToast.Description className="text-sm text-text/70" />
      <BaseToast.Action render={<Button variant="secondary" className="mt-2 self-start" />} />
      <BaseToast.Close
        render={<Button variant="secondary" size="icon" aria-label="Dismiss" className="absolute top-3 right-3" />}
      >
        <X />
      </BaseToast.Close>
    </BaseToast.Root>
  ));
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <BaseToast.Provider>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className="fixed right-4 bottom-4 z-60 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2 outline-hidden sm:right-6 sm:bottom-6">
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}
