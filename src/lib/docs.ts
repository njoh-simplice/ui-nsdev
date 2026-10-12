import type { MenuGroup } from "@/components/side-menu";

export const DOCS_MENU: MenuGroup[] = [
  {
    title: "Get started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/theming", label: "Theming" },
      { href: "/docs/typeset", label: "Typeset" },
      { href: "/docs/changelog", label: "Changelog" },
    ],
  },
];
