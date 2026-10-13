import { SectionLayout } from "@/components/section-layout";
import { BLOCKS_MENU } from "@/lib/blocks";

// The index has the same layout as the Components index: left menu, content centered on the page
// and a column on the right. (A block's own page is wider, see the (block) layout.)
export default function BlocksIndexLayout({ children }: LayoutProps<"/blocks">) {
  return <SectionLayout menu={BLOCKS_MENU}>{children}</SectionLayout>;
}
