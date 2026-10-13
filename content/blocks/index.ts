// Every block on the site. To add one: create content/blocks/<slug>/ with a meta.ts and a
// demo.tsx, import both here and add `{ meta, Component: Demo }` to the list. The page, the menu
// entry and the preview are generated from it. The order here doesn't matter: the menu sorts
// the blocks of each section A to Z.
import type { BlockEntry } from "./types";

export const blocks: BlockEntry[] = [];
