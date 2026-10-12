import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { TokenTable } from "@/components/token-table";
import { readProseSource, readTheme } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Typeset",
  description: "The typefaces, type scale and long-form content styles used across nsdev/ui.",
};

// Descriptions are written by hand; the font stacks and the CSS at the bottom are read from globals.css.
const fontNotes: Record<string, string> = {
  "font-sans": "Host Grotesk. Interface text, headings and body copy.",
  "font-mono": "Geist Mono. Code, source panels and inline code.",
};

export default function Page() {
  const { fonts } = readTheme();
  const proseSource = readProseSource();

  return (
    <DocPage title="Typeset">
      <p className="lead">
        Two typefaces, one type scale, and one container class for long-form content. This is how
        text is set across nsdev/ui.
      </p>

      <h2 id="typefaces">Typefaces</h2>
      <p>
        Two faces cover every piece of text, and there is no third. Host Grotesk sets the
        interface: headings, body copy, buttons and menus. Geist Mono sets code, so inline code
        matches the source panels on component pages.
      </p>
      <TokenTable tokens={fonts} notes={fontNotes} wrapValue />
      <p>
        Keeping the system closed means every piece of text maps to a role without a judgement
        call. The mono face isn&apos;t optional: component pages show real source code, and it has
        to sit comfortably next to the surrounding text.
      </p>

      <h2 id="loading">Loading</h2>
      <p>
        Both faces load through <code>next/font/google</code> in <code>src/app/layout.tsx</code>.
        Next downloads them at build time and serves them from your own domain, so visitors never
        make a request to Google. Each face exposes a CSS variable, <code>--font-host-grotesk</code>{" "}
        and <code>--font-geist-mono</code>, and the <code>--font-sans</code> and{" "}
        <code>--font-mono</code> tokens above point at them, with system fonts as the fallback while
        a face loads. The page body uses <code>font-sans</code> by default.
      </p>

      <h2 id="scale">Scale</h2>
      <p>
        Sizes are set with Tailwind utilities, and a few steps are fluid so large headings fit
        small screens.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Size</th>
              <th scope="col">Weight</th>
              <th scope="col">Used for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap">Display</td>
              <td data-label="Size" className="whitespace-nowrap">32–44px, 56px from sm</td>
              <td data-label="Weight">Bold</td>
              <td data-label="Used for">The home page headline. Scales with the viewport on phones.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Page title</td>
              <td data-label="Size" className="whitespace-nowrap">36px, 48px from sm</td>
              <td data-label="Weight">Bold</td>
              <td data-label="Used for">The title at the top of a doc page.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Heading</td>
              <td data-label="Size" className="whitespace-nowrap">24px</td>
              <td data-label="Weight">Semibold</td>
              <td data-label="Used for">Sections of a page, the entries in &ldquo;On this page&rdquo;.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Subheading</td>
              <td data-label="Size" className="whitespace-nowrap">20px</td>
              <td data-label="Weight">Semibold</td>
              <td data-label="Used for">Sub-sections inside a section.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Lead</td>
              <td data-label="Size" className="whitespace-nowrap">20px</td>
              <td data-label="Weight">Regular</td>
              <td data-label="Used for">The opening paragraph of a page.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Body</td>
              <td data-label="Size" className="whitespace-nowrap">17px</td>
              <td data-label="Weight">Regular</td>
              <td data-label="Used for">Paragraphs and lists in long-form content, with 28px line height.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Interface</td>
              <td data-label="Size" className="whitespace-nowrap">16px</td>
              <td data-label="Weight">Medium or semibold</td>
              <td data-label="Used for">Navigation, menus and buttons.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Code</td>
              <td data-label="Size" className="whitespace-nowrap">14px, 0.875em inline</td>
              <td data-label="Weight">Regular</td>
              <td data-label="Used for">Code blocks, and inline code relative to the text around it.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">Caption</td>
              <td data-label="Size" className="whitespace-nowrap">11px</td>
              <td data-label="Weight">Medium</td>
              <td data-label="Used for">Small badges and tags.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Colors come from the theme. Body text uses <code>text</code>, and{" "}
        <code>text-secondary</code> is kept for labels and larger text. See{" "}
        <Link href="/docs/theming">Theming</Link> for the rules.
      </p>

      <h2 id="long-form">Long-form content</h2>
      <p>
        Rendered content such as docs, articles and notes has no styles of its own, so one class
        sets them all. Wrap it in <code>doc-prose</code> and headings, paragraphs, lists, links,
        inline code, code blocks and tables are styled to the scale above. This page is built that
        way.
      </p>
      <CodeBlock code={`<div className="doc-prose">
  <h2 id="installation">Installation</h2>
  <p>Content goes here.</p>
</div>`} />
      <p>
        Write each section heading as <code>&lt;h2 id=&quot;…&quot;&gt;</code> and it also appears
        in the &ldquo;On this page&rdquo; column. The class lives in the components layer of{" "}
        <code>src/app/globals.css</code>.
      </p>

      <h2 id="rhythm">Rhythm</h2>
      <p>
        Spacing follows one rule. Each block sits one step below the one before it, and headings
        add their own space above and pull the block under them closer. Space only ever opens
        above a block, never below, so adding content to the end of a page doesn&apos;t change the
        blocks already there.
      </p>
      <ul>
        <li>
          <strong>Blocks:</strong> 1rem between paragraphs, lists, code blocks and tables.
        </li>
        <li>
          <strong>Headings:</strong> 3.5rem above a heading and 0.75rem between it and the block
          after it. Subheadings get 2rem above.
        </li>
        <li>
          <strong>Lists:</strong> 0.5rem between items, with the markers in{" "}
          <code>text-secondary</code>.
        </li>
      </ul>

      <h2 id="specimen">Specimen</h2>
      <p>This is every element in one place, set by <code>doc-prose</code> exactly as above.</p>
      <div className="doc-prose rounded-lg border border-border p-6 [&>:first-child]:mt-0">
        <h3>A subheading</h3>
        <p>
          Body text with a <a href="#specimen">link</a>, some <strong>bold text</strong> and an
          inline <code>code</code> sample, set at 17px on a 28px line.
        </p>
        <ul>
          <li>List items are spaced by half a rem.</li>
          <li>Markers use the secondary text color.</li>
        </ul>
      </div>

      <h2 id="tables-and-code">Tables and code</h2>
      <p>
        Tables stay real tables. Wide ones sit in a container that scrolls sideways, and on phones
        each row stacks into a block so nothing is squeezed. Code blocks scroll horizontally
        instead of wrapping, and take keyboard focus so they can be scrolled without a mouse.
      </p>

      <h2 id="overrides">Overrides</h2>
      <p>
        The styles sit in the components layer, so any Tailwind utility on an element wins without{" "}
        <code>!important</code>. This paragraph sets <code>text-lg</code> and is larger than the
        body text around it:
      </p>
      <p className="text-lg">One element, one utility, no override needed.</p>
      <CodeBlock code={`<div className="doc-prose">
  <p className="text-lg">One element, one utility, no override needed.</p>
</div>`} />

      <h2 id="source">Source</h2>
      <p>
        This is the live <code>doc-prose</code> CSS, read from <code>src/app/globals.css</code>{" "}
        when the site is built, so it always matches the styles you see on this page.
      </p>
      <CodeBlock code={proseSource} />
    </DocPage>
  );
}
