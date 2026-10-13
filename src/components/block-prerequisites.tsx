import Link from "next/link";
import { getPrerequisites } from "@/lib/prerequisites";
import { readSource } from "@/lib/source";

// Under a block's preview: the components its file imports (and the ones those need), read from
// the file itself, each linking to its page.
export function BlockPrerequisites({ slug }: { slug: string }) {
  const items = getPrerequisites(readSource(`content/blocks/${slug}/demo.tsx`));

  return (
    <section className="max-w-3xl">
      <h2 id="prerequisites">Prerequisites</h2>
      {items.length === 0 ? (
        <p>This block does not use any nsdev/ui components, so there is nothing to add first.</p>
      ) : (
        <>
          <p>The components this block is built from. Add them to your project before you use it.</p>
          <ul>
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/components/${item.slug}`}>{item.title}</Link>
                {item.description && `: ${item.description}`}
                {item.neededBy.length > 0 && <span className="text-text-secondary"> Needed by {item.neededBy.join(" and ")}.</span>}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
