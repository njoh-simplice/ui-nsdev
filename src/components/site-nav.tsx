"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "@/lib/cx";
import { NAV_LINKS } from "@/lib/site";

// "/" only matches itself; every other link also matches its sub-routes (/docs/button).
function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main"
      className="order-last col-span-2 -mx-1 overflow-x-auto lg:order-0 lg:col-span-1 lg:mx-0 lg:overflow-visible"
    >
      <ul className="flex items-center gap-1 text-lg font-medium">
        {NAV_LINKS.map(({ href, label }) => {
          const active = isActive(href, pathname);
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
