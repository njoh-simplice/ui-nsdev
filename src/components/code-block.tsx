import { CopyButton } from "@/components/copy-button";
import { highlight } from "@/lib/highlight";

// A code block with a copy button in the corner. Use it inside .doc-prose. Pass `lang`
// (for example "tsx" or "css") to syntax-highlight it; without it the code is plain text.
export async function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  if (!lang) {
    return (
      <div className="relative">
        <pre tabIndex={0} className="pr-14">
          <code>{code}</code>
        </pre>
        <CopyButton text={code} className="absolute top-2 right-2" />
      </div>
    );
  }

  const html = await highlight(code, lang);
  return (
    <div className="relative rounded-lg border border-border bg-surface">
      <div className="code-panel" dangerouslySetInnerHTML={{ __html: html }} />
      <CopyButton text={code} className="absolute top-2 right-2" />
    </div>
  );
}
