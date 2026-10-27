// Every block on the site. To add one: create content/blocks/<slug>/ with a meta.ts and a
// demo.tsx, import both here and add `{ meta, Component: Demo }` to the list. The page, the menu
// entry and the preview are generated from it. The order here doesn't matter: the menu sorts
// the blocks of each section A to Z.
import CardMenu from "./card-menu/demo";
import { meta as cardMenu } from "./card-menu/meta";
import GlassDock from "./glass-dock/demo";
import { meta as glassDock } from "./glass-dock/meta";
import UnderlayMenu from "./underlay-menu/demo";
import { meta as underlayMenu } from "./underlay-menu/meta";
import type { BlockEntry } from "./types";

export const blocks: BlockEntry[] = [
  { meta: cardMenu, Component: CardMenu },
  { meta: glassDock, Component: GlassDock },
  { meta: underlayMenu, Component: UnderlayMenu },
];
