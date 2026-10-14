export const GITHUB_URL = "https://github.com/njoh-simplice/ui-nsdev";
export const AUTHOR_URL = "https://heysimplice.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Doc" },
  { href: "/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/pages", label: "Pages" },
  { href: "/dashboard", label: "Dashboard" },
];

// "/" only matches itself; every other link also matches its sub-routes (/docs/button).
export function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const SITE_URL = "https://ui.nsdev.me";
export const SITE_NAME = "nsdev/ui";
export const SITE_DESCRIPTION = "A component library built on Base UI and Tailwind.";
