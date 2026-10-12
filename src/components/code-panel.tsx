"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";

const COLLAPSED_HEIGHT = 112;

// Highlighted code that shows a few lines with a fade, and a button on the right that expands
// it. `children` is the already-highlighted code, rendered on the server. On open it animates
// to the code's real height, so a file of any length is shown in full.
export function CodePanel({
  code,
  children,
  className,
}: {
  code: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [openHeight, setOpenHeight] = useState<number>();
  const clip = useRef<HTMLDivElement>(null);
  const id = useId();

  function toggle() {
    if (!open) setOpenHeight(clip.current?.scrollHeight);
    setOpen((value) => !value);
  }

  return (
    <div className={cx("bg-surface", className)}>
      <div className="relative">
        <div
          ref={clip}
          id={id}
          style={{ maxHeight: open ? openHeight : COLLAPSED_HEIGHT }}
          className="overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none"
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
        <Button variant="secondary" aria-expanded={open} aria-controls={id} onClick={toggle}>
          {open ? "Hide code" : "Show code"}
          <ChevronDown aria-hidden className={cx("transition-transform", open && "rotate-180")} />
        </Button>
      </div>
    </div>
  );
}
