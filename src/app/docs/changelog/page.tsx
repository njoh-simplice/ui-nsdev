import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/doc-page";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Notable changes to nsdev/ui, newest first.",
};

// Newest entry on top. Each entry is an <h2 id="its-date">, so it appears in "On this page".
// Group changes under Added, Changed and Fixed (h3), and leave out site-only tweaks.
export default function Page() {
  return (
    <DocPage title="Changelog">
      <p className="lead">
        Notable changes to nsdev/ui, newest first. Entries are dated, not versioned, until it is
        decided how the library is distributed.
      </p>

      <h2 id="2026-10-12">Foundations begin</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Design tokens:</strong> color, typography and radius, declared once in a single{" "}
          <code>@theme</code> block. See <Link href="/docs/theming">Theming</Link>.
        </li>
        <li>
          <strong>Typefaces:</strong> Host Grotesk for interface text and Geist Mono for code. See{" "}
          <Link href="/docs/typeset">Typeset</Link>.
        </li>
        <li>
          <strong>Button:</strong> primary and secondary variants and a default and an icon size,
          built on Base UI. Hover, focus, pressed and disabled states are all styled.
        </li>
        <li>
          <strong>Docs:</strong> Introduction, Theming and Typeset.
        </li>
      </ul>
    </DocPage>
  );
}
