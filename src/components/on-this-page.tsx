"use client";

import { useMemo, useSyncExternalStore } from "react";
import { cx } from "@/lib/cx";

type Snapshot = { headings: { id: string; label: string }[]; activeId: string };

const EMPTY = JSON.stringify({ headings: [], activeId: "" } satisfies Snapshot);

// The headings live in the page's HTML, so we read them from the DOM as an external store.
// The snapshot is a string so React can compare it cheaply and only re-render on a change.
function getSnapshot() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("#content h2[id]"));
  // The active heading is the last one whose top has scrolled past a line near the top.
  // A short final section can never reach that line, so once the reader hits the bottom
  // of a scrolled page the last heading counts as active.
  const passed = elements.filter((el) => el.getBoundingClientRect().top <= 120);
  const atBottom =
    window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const active = atBottom ? elements.at(-1) : (passed.at(-1) ?? elements[0]);
  return JSON.stringify({
    headings: elements.map((el) => ({ id: el.id, label: el.textContent ?? "" })),
    activeId: active?.id ?? "",
  } satisfies Snapshot);
}

function subscribe(onChange: () => void) {
  // Fires when the content changes (navigation) or the reader scrolls/resizes.
  const observer = new MutationObserver(onChange);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// Lists the h2 headings (that have an id) inside #content and highlights the one being read.
// Authors only need to write <h2 id="...">; nothing is registered separately.
export function OnThisPage() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
  const { headings, activeId } = useMemo(() => JSON.parse(snapshot) as Snapshot, [snapshot]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page">
      <p className="py-1.5 text-base font-medium text-text">On this page</p>
      <ul>
        {headings.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={id === activeId ? "location" : undefined}
              className={cx(
                "block rounded-sm py-1.5 text-base outline-hidden transition-colors focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-0 focus-visible:outline-text",
                id === activeId ? "text-text" : "text-text-secondary hover:text-text",
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
