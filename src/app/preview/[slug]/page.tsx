import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks } from "@content/blocks";

// The page inside a block's preview frame: the block alone, with no site header or footer (see
// SiteChrome). Search engines are told to skip it.
export const dynamicParams = false;
export const metadata: Metadata = { title: "Block preview", robots: { index: false, follow: false } };

export function generateStaticParams() {
  return blocks.map(({ meta }) => ({ slug: meta.slug }));
}

export default async function Page({ params }: PageProps<"/preview/[slug]">) {
  const { slug } = await params;
  const Block = blocks.find(({ meta }) => meta.slug === slug)?.Component;
  if (!Block) notFound();
  return (
    <main className="min-h-screen bg-bg">
      <Block />
    </main>
  );
}
