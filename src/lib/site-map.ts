import { SORTED_BLOCKS } from "@/lib/blocks";
import { SORTED_COMPONENTS } from "@/lib/components";
import { DOCS_MENU } from "@/lib/docs";
import { SITE_URL } from "@/lib/site";

// Every page that search engines and language models should find, grouped by section. It is
// built from the same lists as the menus, so a new component or block is included the moment
// it is added. Left out on purpose: /pages and /dashboard (placeholders until they are built)
// and /preview/* (the frames inside block previews).
export type SitePage = { path: string; title: string; description?: string };
export type SiteSection = { title: string; index?: SitePage; pages: SitePage[] };

export const SITE_SECTIONS: SiteSection[] = [
  {
    title: "Docs",
    pages: DOCS_MENU.flatMap((group) => group.items).map((item) => ({ path: item.href, title: item.label })),
  },
  {
    title: "Components",
    index: { path: "/components", title: "All components" },
    pages: SORTED_COMPONENTS.map((meta) => ({
      path: `/components/${meta.slug}`,
      title: meta.title,
      description: meta.description,
    })),
  },
  {
    title: "Blocks",
    index: { path: "/blocks", title: "All blocks" },
    pages: SORTED_BLOCKS.map(({ meta }) => ({
      path: `/blocks/${meta.slug}`,
      title: meta.title,
      description: meta.description,
    })),
  },
];

export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);
