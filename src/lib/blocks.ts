import type { MenuGroup } from "@/components/side-menu";
import { blocks } from "@content/blocks";
import { BLOCK_GROUPS } from "@content/blocks/groups";

const byTitle = (a: string, b: string) => a.localeCompare(b, "en", { sensitivity: "base" });

// Every block, A to Z. The index page and the left menu both read this.
export const SORTED_BLOCKS = [...blocks].sort((a, b) => byTitle(a.meta.title, b.meta.title));

// The left menu of the Blocks section: the sections in BLOCK_GROUPS order, each with its blocks
// A to Z. A section with no blocks yet still shows its heading.
export const BLOCKS_MENU: MenuGroup[] = BLOCK_GROUPS.map((title) => ({
  title,
  items: SORTED_BLOCKS.filter(({ meta }) => meta.group === title).map(({ meta }) => ({
    href: `/blocks/${meta.slug}`,
    label: meta.title,
  })),
}));
