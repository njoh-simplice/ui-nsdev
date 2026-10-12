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

      <h2 id="2026-10-12-button">Button page, and a green default</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Button page:</strong> a live demo of every variant with its source, plus notes on
          the design, the interaction and accessibility. See{" "}
          <Link href="/components/button">Button</Link>.
        </li>
        <li>
          <strong>Destructive variant:</strong> a danger fill for actions that remove something.
        </li>
        <li>
          <strong>Inverse variant:</strong> the light fill the default button used to have, for
          places where green isn&apos;t wanted.
        </li>
        <li>
          <strong>Components section:</strong> its own menu on the left, and an index page.
        </li>
      </ul>
      <h3>Changed</h3>
      <ul>
        <li>
          <strong>Default Button:</strong> it now uses the green accent. The old light fill is the
          <code>inverse</code> variant.
        </li>
        <li>
          <strong>Pressed state:</strong> a pressed button shrinks to 97% with a 150ms animation.
          Before, it moved 1px, and the animation never ran.
        </li>
        <li>
          <strong>Icons in a button:</strong> they are 16px unless you size them yourself.
        </li>
      </ul>
      <h3>Fixed</h3>
      <ul>
        <li>
          <strong>Focus rings:</strong> keyboard focus was not visible on buttons and links across
          the site. It now draws a 2px outline.
        </li>
      </ul>

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
