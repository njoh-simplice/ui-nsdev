"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";

export type MenuGroup = {
  title: string;
  items: { href: string; label: string }[];
};

// The menu is a ruler: every row is 27px tall and owns three evenly spaced lines (9px apart) —
// one aligned with its label, then two short ones before the next row. The row's own line
// grows and turns green when it is active or hovered, which also pushes the label right.
const line = "absolute left-0 h-px";

function Ticks({ active = false, interactive = false }: { active?: boolean; interactive?: boolean }) {
  return (
    <span
      aria-hidden
      className={cx(
        "relative h-[27px] shrink-0 transition-[width] duration-200 motion-reduce:transition-none",
        active ? "w-17" : "w-11",
        interactive && !active && "group-hover:w-17",
      )}
    >
      <span
        className={cx(
          line,
          "top-[13px] w-full transition-[background-color] duration-200 motion-reduce:transition-none",
          active ? "bg-accent" : "bg-border-strong",
          interactive && !active && "group-hover:bg-accent",
        )}
      />
      <span className={cx(line, "top-[22px] w-11 bg-border-strong")} />
      <span className={cx(line, "top-[31px] w-11 bg-border-strong")} />
    </span>
  );
}

export function SideMenu({ groups }: { groups: MenuGroup[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const current = groups.flatMap((g) => g.items).find((item) => item.href === pathname);

  // The list scrolls on its own, so bring the current page into view when it is off screen.
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>("[aria-current=page]");
    if (!nav || !link) return;
    const n = nav.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    if (l.top < n.top || l.bottom > n.bottom) nav.scrollTop += l.top - n.top - (n.height - l.height) / 2;
  }, [pathname]);

  return (
    <div>
      {/* Below lg the menu collapses behind a button that shows the current page. */}
      <Button
        variant="secondary"
        aria-expanded={open}
        aria-controls="side-menu"
        onClick={() => setOpen((v) => !v)}
        className="w-full justify-between lg:hidden"
      >
        {current?.label ?? "Menu"}
        <ChevronDown
          aria-hidden
          className={cx("size-4 transition-transform", open && "rotate-180")}
        />
      </Button>

      <nav
        ref={navRef}
        id="side-menu"
        aria-label="Section"
        className={cx(
          "mt-4 lg:-mx-1 lg:-mt-0.5 lg:block lg:max-h-[calc(100dvh-7.5rem)] lg:overflow-y-auto lg:overscroll-contain lg:px-1 lg:pt-0.5 lg:pb-2",
          "lg:[scrollbar-color:var(--color-border-strong,#404040)_transparent] lg:[scrollbar-width:thin]",
          open ? "block" : "hidden",
        )}
      >
        {groups.map((group) => (
          <div key={group.title}>
            <div className="flex h-[27px] items-center gap-3.5">
              <Ticks />
              <span className="text-base font-medium whitespace-nowrap text-text">{group.title}</span>
            </div>
            <ul>
              {group.items.map(({ href, label }) => {
                const active = href === pathname;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex h-[27px] items-center gap-3.5 rounded-sm text-base outline-hidden focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-0 focus-visible:outline-text"
                    >
                      <Ticks active={active} interactive />
                      <span
                        className={cx(
                          "transition-colors duration-200 motion-reduce:transition-none",
                          active ? "text-accent" : "text-text-secondary group-hover:text-accent",
                        )}
                      >
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
