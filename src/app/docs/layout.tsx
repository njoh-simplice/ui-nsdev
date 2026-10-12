import { SectionLayout } from "@/components/section-layout";
import { DOCS_MENU } from "@/lib/docs";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return <SectionLayout menu={DOCS_MENU}>{children}</SectionLayout>;
}
