import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockItem } from "@/components/block-item";
import { BlockPrerequisites } from "@/components/block-prerequisites";
import { SORTED_BLOCKS } from "@/lib/blocks";

// One page per block in content/blocks: its title, its viewer, then the components it needs.
export const dynamicParams = false;

export function generateStaticParams() {
  return SORTED_BLOCKS.map(({ meta }) => ({ slug: meta.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blocks/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const block = SORTED_BLOCKS.find(({ meta }) => meta.slug === slug);
  return { title: block?.meta.title, description: block?.meta.description };
}

export default async function Page({ params }: PageProps<"/blocks/[slug]">) {
  const { slug } = await params;
  const block = SORTED_BLOCKS.find(({ meta }) => meta.slug === slug);
  if (!block) notFound();

  return (
    <article>
      <h1 className="text-4xl leading-[1.05] font-bold text-text sm:text-5xl">{block.meta.title}</h1>
      <div className="doc-prose mt-8">
        <BlockItem meta={block.meta} />
        <BlockPrerequisites slug={block.meta.slug} />
      </div>
    </article>
  );
}
