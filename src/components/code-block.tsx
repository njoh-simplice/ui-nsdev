import { CopyButton } from "@/components/copy-button";

// A code block with a copy button in the corner. Use it inside .doc-prose.
export function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative">
      <pre tabIndex={0} className="pr-14">
        <code>{code}</code>
      </pre>
      <CopyButton text={code} className="absolute top-2 right-2" />
    </div>
  );
}
