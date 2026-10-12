import type { ReactNode } from "react";
import { CodePanel } from "@/components/code-panel";
import { highlight } from "@/lib/highlight";

// The live demo on top, its source underneath. `source` must be the text of the file that
// renders `children` (read it with readSource), so the two can never drift apart.
export async function ComponentPreview({ children, source }: { children: ReactNode; source: string }) {
  const html = await highlight(source, "tsx");

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="flex min-h-72 flex-wrap items-center justify-center gap-3 bg-bg p-8">
        {children}
      </div>
      <CodePanel code={source} className="border-t border-border">
        <div className="code-panel" dangerouslySetInnerHTML={{ __html: html }} />
      </CodePanel>
    </div>
  );
}
