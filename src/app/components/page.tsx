import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { SORTED_COMPONENTS } from "@/lib/components";

export const metadata: Metadata = {
  title: "Components",
  description: "The components in nsdev/ui, built on Base UI.",
};

export default function Page() {
  return (
    <DocPage title="Components">
      <p className="lead">
        The primitives of nsdev/ui, built on Base UI and styled with the theme tokens. More are
        added as they are built.
      </p>
      <ul>
        {SORTED_COMPONENTS.map((meta) => (
          <li key={meta.slug}>
            <Link href={`/components/${meta.slug}`}>{meta.title}</Link>: {meta.description}
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
