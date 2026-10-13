import type { ComponentType } from "react";
import type { BLOCK_GROUPS } from "./groups";

// One block, a page like a component's: content/blocks/<slug>/ holds a meta.ts (this) and a
// demo.tsx (the block itself). `description` is the line in the viewer's toolbar and in the index,
// and `height` is how tall the preview is at desktop size, in pixels.
export type BlockMeta = {
  title: string;
  slug: string;
  group: (typeof BLOCK_GROUPS)[number];
  description: string;
  height: number;
};

export type BlockEntry = { meta: BlockMeta; Component: ComponentType };
