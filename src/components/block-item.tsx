import { BlockViewer } from "@/components/block-viewer";
import { highlight } from "@/lib/highlight";
import { readSource } from "@/lib/source";
import type { BlockMeta } from "@content/blocks/types";

// A block's viewer, with the file that renders it as its Code view. The file is
// content/blocks/<slug>/demo.tsx, the same one the preview frame shows, so they can't drift apart.
export async function BlockItem({ meta }: { meta: BlockMeta }) {
  const source = readSource(`content/blocks/${meta.slug}/demo.tsx`);
  const html = await highlight(source, "tsx");

  return (
    <BlockViewer src={`/preview/${meta.slug}`} description={meta.description} height={meta.height} code={source}>
      <div className="code-panel" dangerouslySetInnerHTML={{ __html: html }} />
    </BlockViewer>
  );
}
