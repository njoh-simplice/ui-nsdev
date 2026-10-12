import { SectionLayout } from "@/components/section-layout";
import { COMPONENTS_MENU } from "@/lib/components";

export default function ComponentsLayout({ children }: LayoutProps<"/components">) {
  return <SectionLayout menu={COMPONENTS_MENU}>{children}</SectionLayout>;
}
