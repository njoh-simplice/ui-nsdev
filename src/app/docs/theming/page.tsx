import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { TokenTable } from "@/components/token-table";
import { readTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Theming",
  description: "How nsdev/ui is themed with design tokens, and how to change or extend them.",
};

// Descriptions are written by hand; every value in the tables below is read from globals.css.
const colorNotes: Record<string, string> = {
  "color-bg": "The page background.",
  "color-surface": "Cards and panels.",
  "color-border": "The default hairline border.",
  "color-border-strong": "Emphasized borders, and the off-state track of a toggle.",
  "color-muted": "Structural only: dividers and disabled fills. Never text.",
  "color-text-secondary": "Labels, captions and larger text only.",
  "color-text": "Primary text.",
  "color-accent": "Active and on states inside components.",
  "color-success": "Success states. The same green as accent.",
  "color-warning": "Warning states.",
  "color-danger": "Destructive actions and error states.",
};

const radiusNotes: Record<string, string> = {
  "radius-sm": "Small controls: checkboxes, badges, tags.",
  "radius-md": "Buttons, inputs, small cards.",
  "radius-lg": "Cards, panels, dialogs, dropdowns. The ceiling.",
};

export default function Page() {
  const { block, colors, radii } = readTheme();

  return (
    <DocPage title="Theming">
      <p className="lead">
        nsdev/ui is themed with design tokens declared once and used everywhere. Components never
        use raw values, so changing a token restyles every component that uses it.
      </p>

      <h2 id="tokens">Tokens</h2>
      <p>
        The tokens live in the <code>@theme</code> block of <code>src/app/globals.css</code>.
        Tailwind CSS v4 is configured in CSS, so there is no <code>tailwind.config.js</code>: each
        token in that block becomes a CSS variable and a set of utilities.
      </p>
      <p>
        A color token like <code>--color-surface</code> gives you <code>bg-surface</code>,{" "}
        <code>text-surface</code>, <code>border-surface</code> and the rest, plus{" "}
        <code>var(--color-surface)</code> for plain CSS. Components are built from those
        utilities:
      </p>
      <CodeBlock code={`<div className="rounded-lg border border-border bg-surface text-text" />`} />

      <h2 id="pairing">Text on fills</h2>
      <p>
        Many themes pair every surface with a matching foreground token. nsdev/ui keeps the palette
        small and uses one rule instead: the text or icon on top of a solid{" "}
        <code>accent</code>, <code>success</code>, <code>warning</code> or <code>danger</code> fill
        is always <code>bg</code>, never <code>text</code>.
      </p>
      <CodeBlock code={`<div className="bg-warning text-bg" />`} />
      <p>
        Light text on these fills fails contrast badly, as low as 1.08:1. Dark text on them sits
        between 5.5:1 and 14.6:1 across all four.
      </p>

      <h2 id="colors">Color tokens</h2>
      <TokenTable tokens={colors} notes={colorNotes} swatch />
      <p>
        <code>accent</code> and <code>success</code> share one value on purpose. A single green
        covers both roles, so don&apos;t split them.
      </p>

      <h2 id="usage-rules">Usage rules</h2>
      <ul>
        <li>
          <strong>muted is structural only.</strong> Use it for dividers and disabled fills, never
          for text. It measures 2.53:1 on <code>bg</code>, which fails AA.
        </li>
        <li>
          <strong>text-secondary is for labels, captions and larger text.</strong> At 4.18:1 on{" "}
          <code>bg</code> it is just under AA for small body copy, so keep it out of paragraphs.
        </li>
        <li>
          <strong>Green stays inside components.</strong> The site around them is neutral. Green
          shows a component&apos;s active, on or success state.
        </li>
        <li>
          <strong>Soft alerts use a wash.</strong> For inline alerts and banners, use about 9%
          opacity of the semantic color as the background and about 30% as the border. Keep the full
          color for the indicator dot, the icon or the button.
        </li>
      </ul>
      <p>The contrast ratios above are measured against the default <code>bg</code>.</p>

      <h2 id="radius">Radius</h2>
      <p>
        Corners scale with the size of the component, and nothing rounds past 8px. These tokens
        override Tailwind&apos;s built-in <code>rounded-sm</code>, <code>rounded-md</code> and{" "}
        <code>rounded-lg</code>, so those are the utility names to use.
      </p>
      <TokenTable tokens={radii} notes={radiusNotes} />

      <h2 id="typography">Typography</h2>
      <p>
        Two faces cover everything: Host Grotesk for interface text and headings, Geist Mono for
        code. They are exposed as <code>--font-sans</code> and <code>--font-mono</code>, which give
        you <code>font-sans</code> and <code>font-mono</code>. The scale and usage are on the{" "}
        <Link href="/docs/typeset">Typeset</Link> page.
      </p>

      <h2 id="light-mode">Light mode</h2>
      <p>
        nsdev/ui ships a single dark theme for now. A light theme is planned for the polish phase.
        It will be defined by overriding these same tokens, so components won&apos;t need to change.
      </p>

      <h2 id="adding-tokens">Adding a token</h2>
      <p>
        Declare it in the <code>@theme</code> block and Tailwind generates the utilities for you.
      </p>
      <CodeBlock code={`@theme {
  --color-info: #4DA3FF;
}`} />
      <p>
        You can now use <code>bg-info</code>, with <code>text-bg</code> on top by the rule above.
        Check that <code>bg</code> stays readable on your new color.
      </p>

      <h2 id="source">Theme source</h2>
      <p>
        This is the live theme, read from <code>src/app/globals.css</code> when the site is built,
        so it always matches what the components use.
      </p>
      <CodeBlock code={block} />
    </DocPage>
  );
}
