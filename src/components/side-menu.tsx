"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cx } from "@/lib/cx";

export type MenuGroup = {
  title: string;
  items: { href: string; label: string }[];
};

// The menu is a ruler: every row is 36px tall and owns three evenly spaced lines — one
// aligned with its label, then two short ones before the next row. The row's own line
// grows and turns green when it is active or hovered, which also pushes the label right.
const line = "absolute left-0 h-px";

function Ticks({ active = false, interactive = false }: { active?: boolean; interactive?: boolean }) {
  return (
    <span
      aria-hidden
      className={cx(
        "relative h-9 shrink-0 transition-[width] duration-200 motion-reduce:transition-none",
        active ? "w-17" : "w-11",
        interactive && !active && "group-hover:w-17",
      )}
    >
      <span
        className={cx(
          line,
          "top-[17px] w-full transition-[background-color] duration-200 motion-reduce:transition-none",
          active ? "bg-accent" : "bg-border-strong",
          interactive && !active && "group-hover:bg-accent",
        )}
      />
      <span className={cx(line, "top-[29px] w-11 bg-border-strong")} />
      <span className={cx(line, "top-[41px] w-11 bg-border-strong")} />
    </span>
  );
}

export function SideMenu({ groups }: { groups: MenuGroup[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = groups.flatMap((g) => g.items).find((item) => item.href === pathname);

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
        id="side-menu"
        aria-label="Section"
        className={cx("mt-4 lg:mt-0 lg:block", open ? "block" : "hidden")}
      >
        {groups.map((group) => (
          <div key={group.title}>
            <div className="flex h-9 items-center gap-3.5">
              <Ticks />
              <span className="text-base font-medium text-text">{group.title}</span>
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
                      className="group flex h-9 items-center gap-3.5 rounded-sm text-base outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-text"
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
