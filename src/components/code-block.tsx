import { CodePanel } from "@/components/code-panel";
import { CopyButton } from "@/components/copy-button";
import { highlight } from "@/lib/highlight";

// A code block with a copy button in the corner. Use it inside .doc-prose. Pass `lang`
// (for example "tsx" or "css") to syntax-highlight it; highlighted code is collapsed to a
// few lines with a "Show code" button, so a long file doesn't stretch the page. Without
// `lang` the code is plain text, shown in full.
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
    <div className="overflow-hidden rounded-lg border border-border">
      <CodePanel code={code}>
        <div className="code-panel" dangerouslySetInnerHTML={{ __html: html }} />
      </CodePanel>
    </div>
  );
}
