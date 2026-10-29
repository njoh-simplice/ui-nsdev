// Every block on the site. To add one: create content/blocks/<slug>/ with a meta.ts and a
// demo.tsx, import both here and add `{ meta, Component: Demo }` to the list. The page, the menu
// entry and the preview are generated from it. The order here doesn't matter: the menu sorts
// the blocks of each section A to Z.
import CardMenu from "./card-menu/demo";
import { meta as cardMenu } from "./card-menu/meta";
import EventCalendar from "./event-calendar/demo";
import { meta as eventCalendar } from "./event-calendar/meta";
import GlassDock from "./glass-dock/demo";
import { meta as glassDock } from "./glass-dock/meta";
import ProductHotspot from "./product-hotspot/demo";
import { meta as productHotspot } from "./product-hotspot/meta";
import UnderlayMenu from "./underlay-menu/demo";
import { meta as underlayMenu } from "./underlay-menu/meta";
import type { BlockEntry } from "./types";

export const blocks: BlockEntry[] = [
  { meta: cardMenu, Component: CardMenu },
  { meta: eventCalendar, Component: EventCalendar },
  { meta: glassDock, Component: GlassDock },
  { meta: productHotspot, Component: ProductHotspot },
  { meta: underlayMenu, Component: UnderlayMenu },
];
