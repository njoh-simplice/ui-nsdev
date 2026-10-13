import { SectionLayout } from "@/components/section-layout";
import { BLOCKS_MENU } from "@/lib/blocks";

// Left menu and content only, with the content as wide as it can be, so a preview has room.
export default function BlockLayout({ children }: LayoutProps<"/blocks">) {
  return (
    <SectionLayout menu={BLOCKS_MENU} toc={false} wide>
      {children}
    </SectionLayout>
  );
}
