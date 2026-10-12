import type { ReactNode } from "react";
import { OnThisPage } from "@/components/on-this-page";
import { SideMenu, type MenuGroup } from "@/components/side-menu";
import { cx } from "@/lib/cx";

// Left menu | content | On this page. The content is centered; with the right column the two
// side columns are the same width, so it is centered on the page. Pass toc={false} for sections without the right column.
export function SectionLayout({
  menu,
  toc = true,
  children,
}: {
  menu: MenuGroup[];
  toc?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "page-gutter grid w-full flex-1 content-start gap-8 pt-10 pb-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 lg:pt-14",
        toc && "xl:grid-cols-[15rem_minmax(0,1fr)_15rem]",
      )}
    >
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <SideMenu groups={menu} />
      </aside>

      <main id="content" className="mx-auto w-full max-w-3xl min-w-0">
        {children}
      </main>

      {toc && (
        <aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
          <OnThisPage />
        </aside>
      )}
    </div>
  );
}
