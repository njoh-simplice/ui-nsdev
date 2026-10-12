"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";

// The code half of a component preview: a few lines with a fade, and a button on the right
// that expands it. `children` is the already-highlighted code, rendered on the server.
export function CodePanel({ code, children }: { code: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-t border-border bg-surface">
      <div className="relative">
        <div
          id={id}
          className={cx(
            "overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none",
            open ? "max-h-[120rem]" : "max-h-28",
          )}
        >
          {children}
        </div>
        {!open && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-surface to-transparent"
          />
        )}
        <CopyButton text={code} className="absolute top-3 right-3" />
      </div>
      <div className="flex justify-end p-3">
        <Button
          variant="secondary"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide code" : "Show code"}
          <ChevronDown aria-hidden className={cx("transition-transform", open && "rotate-180")} />
        </Button>
      </div>
    </div>
  );
}
