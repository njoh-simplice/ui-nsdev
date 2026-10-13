import type { ReactNode } from "react";
import { OnThisPage } from "@/components/on-this-page";
import { SideMenu, type MenuGroup } from "@/components/side-menu";
import { cx } from "@/lib/cx";

// Left menu | content | On this page. The content is centered; with the right column the two
// side columns are the same width, so it is centered on the page. Pass toc={false} for sections
// without the right column, and wide for content that should fill the space (a block preview).
export function SectionLayout({
  menu,
  toc = true,
  wide = false,
  children,
}: {
  menu: MenuGroup[];
  toc?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "page-gutter grid w-full flex-1 content-start gap-8 pt-10 pb-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 lg:pt-14",
        toc && "xl:grid-cols-[15rem_minmax(0,1fr)_15rem]",
      )}
    >
      {/* Below lg the menu button stays under the header while the page scrolls, and the open list
          scrolls inside its own box. From lg the menu is pinned to the viewport (fixed, not
          sticky), because a sticky column is pushed up by the footer when the page ends. */}
      <aside className="sticky top-18 z-30 -my-2 self-start bg-bg py-2 lg:static lg:z-auto lg:my-0 lg:bg-transparent lg:py-0">
        <div className="lg:fixed lg:top-24 lg:w-60">
          <SideMenu groups={menu} />
        </div>
      </aside>

      <main id="content" className={cx("mx-auto w-full min-w-0", !wide && "max-w-3xl")}>
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
