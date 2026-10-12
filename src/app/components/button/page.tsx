import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { DocPage } from "@/components/doc-page";
import { readSource } from "@/lib/source";
import ButtonDemo from "@content/components/button/demo";
import { meta } from "@content/components/button/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default async function Page() {
  // Both are read from the real files, so the code on this page is the code that renders.
  const demoSource = readSource("content/components/button/demo.tsx");
  const buttonSource = readSource("src/components/ui/button.tsx");

  return (
    <DocPage title={meta.title}>
      <p className="lead">
        A button triggers an action. It comes in three intents (default, secondary and
        destructive), can carry an icon, and has a square icon-only form. Every one of them has
        hover, focus, pressed and disabled states.
      </p>

      <ComponentPreview source={demoSource}>
        <ButtonDemo />
      </ComponentPreview>

      <h2 id="the-code">The code</h2>
      <p>
        The component is a single file. This is that file in full, read from the repository when
        the site is built.
      </p>
      <CodeBlock code={buttonSource} lang="tsx" />
      <h3>Props</h3>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Prop</th>
              <th scope="col">Type</th>
              <th scope="col">Default</th>
              <th scope="col">What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="whitespace-nowrap">
                <code>variant</code>
              </td>
              <td data-label="Type">
                <code>default | secondary | destructive | inverse</code>
              </td>
              <td data-label="Default">
                <code>default</code>
              </td>
              <td data-label="Use">The intent of the button, and its color.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">
                <code>size</code>
              </td>
              <td data-label="Type">
                <code>default | icon</code>
              </td>
              <td data-label="Default">
                <code>default</code>
              </td>
              <td data-label="Use">
                <code>icon</code> makes a square button for an icon with no label.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">
                <code>disabled</code>
              </td>
              <td data-label="Type">
                <code>boolean</code>
              </td>
              <td data-label="Default">
                <code>false</code>
              </td>
              <td data-label="Use">Turns off the button and its hover and pressed states.</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">
                <code>render</code>
              </td>
              <td data-label="Type">
                <code>element</code>
              </td>
              <td data-label="Default">—</td>
              <td data-label="Use">
                Renders the button as another element, such as a link. Pass{" "}
                <code>nativeButton={"{false}"}</code> with it.
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap">
                <code>className</code>
              </td>
              <td data-label="Type">
                <code>string</code>
              </td>
              <td data-label="Default">—</td>
              <td data-label="Use">Extra classes, added after the button&apos;s own.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Every other prop goes straight to the Base UI <code>Button</code> underneath.
      </p>

      <h2 id="the-thinking">The thinking</h2>
      <p>
        A button should be predictable: it does one thing when pressed, and its label says what. So
        there is one component with a small set of intents, not a different button for every use.
      </p>
      <ul>
        <li>
          <strong>Built on Base UI.</strong> Disabled handling, keyboard activation and focus come
          from Base UI&apos;s <code>Button</code>. This file only adds the look.
        </li>
        <li>
          <strong>Intent is a variant.</strong> <code>default</code> is the main action,{" "}
          <code>secondary</code> a quieter one, and <code>destructive</code> is for actions that
          remove something or can&apos;t be undone.
        </li>
        <li>
          <strong>Green belongs to the component.</strong> The default button uses the accent. The{" "}
          <code>inverse</code> variant is a light fill for places where green isn&apos;t wanted,
          like this site&apos;s own header and hero.
        </li>
      </ul>

      <h2 id="interface-design">Interface design</h2>
      <ul>
        <li>
          <strong>Size:</strong> 36px tall with 16px of side padding. The icon-only button is a
          36px square. Corners use the <code>md</code> radius, 6px.
        </li>
        <li>
          <strong>Label:</strong> 16px, semibold. An icon goes after the label, 8px away, and is
          16px unless you size it yourself.
        </li>
        <li>
          <strong>Color:</strong> <code>default</code> fills with the accent, <code>destructive</code>{" "}
          with the danger color, and <code>inverse</code> with the main text color.{" "}
          <code>secondary</code> has no fill and a 1px outline. See{" "}
          <Link href="/docs/theming">Theming</Link> for the tokens.
        </li>
        <li>
          <strong>Text on a fill:</strong> always <code>bg</code>, per the theming rule. That gives
          14.6:1 contrast on the accent, 5.5:1 on danger and 15.7:1 on the light fill.
        </li>
        <li>
          <strong>Disabled:</strong> a flat <code>surface</code> fill and a quiet label, so it reads
          as off whichever variant it was.
        </li>
      </ul>

      <h2 id="interaction">Interaction</h2>
      <ul>
        <li>
          <strong>Hover:</strong> the fill eases to 85%.
        </li>
        <li>
          <strong>Focus:</strong> keyboard focus draws a 2px outline in the main text color, 2px
          away from the button. A mouse click doesn&apos;t show it.
        </li>
        <li>
          <strong>Pressed:</strong> the button shrinks slightly, to 97%, and the fill drops to
          70%. Both animate over 150ms. People who ask their system for reduced motion get the
          color change without the shrink.
        </li>
        <li>
          <strong>Disabled:</strong> no hover, no press, and a not-allowed cursor. Base UI also
          takes it out of the tab order unless you set <code>focusableWhenDisabled</code>.
        </li>
      </ul>

      <h2 id="empathy">Empathy</h2>
      <ul>
        <li>
          <strong>It is a real button.</strong> Enter and Space activate it, and screen readers
          announce it as one. As a link it keeps link behavior.
        </li>
        <li>
          <strong>Icon-only needs a name.</strong> The icon button has no text, so always give it
          an <code>aria-label</code>, as the demo does.
        </li>
        <li>
          <strong>Never color alone.</strong> A destructive button is red, and its label still says
          what it does. The focus outline has 15.7:1 contrast against the page.
        </li>
        <li>
          <strong>Target size:</strong> 36px clears the 24px minimum of WCAG 2.2 AA. It is smaller
          than the 44px often advised for touch, so give it room around it on phones.
        </li>
      </ul>
    </DocPage>
  );
}
