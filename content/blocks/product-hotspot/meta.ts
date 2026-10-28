import type { BlockMeta } from "../types";

export const meta = {
  title: "Product Hotspot",
  slug: "product-hotspot",
  group: "Marketing",
  description: "A product photo with markers on its parts: each opens a card about that part, tucked into the corner of the picture",
  height: 980,
} as const satisfies BlockMeta;
