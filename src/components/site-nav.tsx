"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";
import { NAV_LINKS, isActivePath } from "@/lib/site";

// Desktop nav. Below lg the header shows the drawer menu instead (see mobile-nav.tsx).
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1 text-base font-medium">
        {NAV_LINKS.map(({ href, label }) => {
          const active = isActivePath(href, pathname);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "rounded-md px-3 py-1.5 outline-none transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-text",
                  active ? "text-text" : "text-text-secondary hover:text-text",
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
