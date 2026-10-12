"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cx } from "@/lib/cx";

// Copies `text` to the clipboard. For 2 seconds afterwards the icon becomes a green tick.
export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return; // clipboard unavailable or denied: leave the button as it was
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy code"}
        className={cx(
          "inline-flex size-8 cursor-pointer items-center justify-center rounded-md border bg-surface outline-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text motion-reduce:transition-none",
          copied
            ? "border-accent text-accent"
            : "border-border text-text-secondary hover:border-border-strong hover:text-text",
          className,
        )}
      >
        {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}
