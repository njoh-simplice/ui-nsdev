import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { SORTED_BLOCKS } from "@/lib/blocks";

export const metadata: Metadata = {
  title: "Blocks",
  description: "Sections of a page built from nsdev/ui components.",
};

export default function Page() {
  return (
    <DocPage title="Blocks">
      <p className="lead">
        Sections of a page built by combining components: a hero, a navigation bar, a login form.
        More are added as they are built.
      </p>
      <ul>
        {SORTED_BLOCKS.map(({ meta }) => (
          <li key={meta.slug}>
            <Link href={`/blocks/${meta.slug}`}>{meta.title}</Link>: {meta.description}
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
