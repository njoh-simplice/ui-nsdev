import type { Metadata } from "next";
import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Introduction",
  description: "What nsdev/ui is, and the principles it is built on.",
};

export default function Page() {
  return (
    <DocPage title="Introduction">
      <p className="lead">
        nsdev/ui is a collection of accessible, fully styled components, blocks and page templates
        built on Base UI and Tailwind CSS. Open code, dark by default, and made to be adapted to
        your own design system.
      </p>
      <p>
        Most component libraries are a black box behind an npm import. That works until a button
        has to behave differently, or you need something the library doesn&apos;t ship. Then you
        wrap components, fight their styles, or mix libraries whose APIs don&apos;t agree. nsdev/ui
        starts from the other end: the code is the documentation, and every piece is built so you
        can read it, change it and make it fit.
      </p>
      <p>It is built around these principles:</p>
      <ul>
        <li>
          <strong>Open code:</strong> the source of every component is public and readable, with no
          compiled layer between you and what renders.
        </li>
        <li>
          <strong>Built on Base UI:</strong> behaviour, focus and keyboard handling come from
          accessible headless primitives. This library adds the styling.
        </li>
        <li>
          <strong>Tokens first:</strong> color, type and radius live in one theme. Change a token
          and every component follows.
        </li>
        <li>
          <strong>Composition:</strong> components combine into blocks, blocks into pages, pages
          into full app screens.
        </li>
        <li>
          <strong>Real source:</strong> the code on a component page is the file that renders its
          demo, never a copy written on the side.
        </li>
        <li>
          <strong>Beautiful defaults:</strong> a clean, minimal look with one accent, so things
          look right before you touch anything.
        </li>
        <li>
          <strong>AI-ready:</strong> plain, consistently structured source that people and LLMs can
          both read and extend.
        </li>
      </ul>

      <h2 id="open-code">Open code</h2>
      <p>
        You get the actual component code, not an abstraction over it. You see exactly how each
        component is built, and changing one means editing its file. There is no override layer, no
        wrapper component and no style workaround to maintain. The whole project lives in a public
        repository on{" "}
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <h2 id="built-on-base-ui">Built on Base UI</h2>
      <p>
        The hard parts of an interface, such as focus management, keyboard navigation, ARIA
        attributes and open and close behaviour, are handled by{" "}
        <a href="https://base-ui.com" target="_blank" rel="noopener noreferrer">
          Base UI
        </a>
        , a headless primitive layer. nsdev/ui styles those primitives with Tailwind and nothing
        else, so you keep the accessibility without inheriting someone else&apos;s look.
      </p>

      <h2 id="tokens">Tokens</h2>
      <p>
        Every component is styled from a small set of design tokens: color, typography and radius.
        They are declared once in a Tailwind <code>@theme</code> block, and components use the
        utilities generated from them, never raw values. Swap the tokens and the whole library
        follows. See <Link href="/docs/theming">Theming</Link> for the full set.
      </p>

      <h2 id="composition">Composition</h2>
      <p>
        The library is layered, and each layer is built from the one below it:
      </p>
      <ul>
        <li>
          <strong>Components:</strong> the primitives, such as Button, Input and Dialog.
        </li>
        <li>
          <strong>Blocks:</strong> sections composed from components, such as a hero, a bento grid
          or a pricing table.
        </li>
        <li>
          <strong>Pages:</strong> full templates composed from blocks.
        </li>
        <li>
          <strong>Dashboard:</strong> complete app screens, kept separate from pages.
        </li>
      </ul>
      <p>
        Components share a common, composable shape, so once you have learned one you can predict
        the next, and so can your team.
      </p>

      <h2 id="real-source">Real source</h2>
      <p>
        Each component page pairs a live demo with its source. The source is not written
        separately for the docs: it is read from the same file that renders the demo and
        highlighted when the site is built. What you read can never drift from what you see.
      </p>

      <h2 id="beautiful-defaults">Beautiful defaults</h2>
      <p>
        Components are designed to look good on their own and to sit well together. The look is
        dark and minimal, with a single green accent reserved for what is active, on or successful
        inside a component. If you want something different, change the tokens or edit the
        component.
      </p>

      <h2 id="ai-ready">AI-ready</h2>
      <p>
        Open code and a consistent structure make the library easy for AI tools to work with. A
        model can read how a component is built, suggest improvements, or write a new one that
        matches the ones already there.
      </p>

      <h2 id="distribution">Distribution</h2>
      <p>
        How nsdev/ui reaches your project is still being decided. For now, the way to use it is to
        read the source in the repository. Whether it ships as an npm package or as a copy-paste
        registry with a command-line tool is open, and nothing above depends on that choice. This
        page will be updated when it is settled.
      </p>
    </DocPage>
  );
}
