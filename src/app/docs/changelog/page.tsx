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

      <h2 id="2026-10-13-navigation-1">First block: Navigation 1</h2>
      <p>
        <time dateTime="2026-10-13">2026-10-13</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Navigation 1:</strong> an animated navigation menu. A small card with a logo and a
          MENU button opens into a larger one with the links, and the button becomes a plain cross.
          Contact details and social links sit under the links. See{" "}
          <Link href="/blocks/navigation-1">Navigation 1</Link>.
        </li>
        <li>
          <strong>Blocks:</strong> the section is open, with a menu of Marketing, Form and
          Authentication, and a viewer that shows each block in a Desktop, Tablet or Mobile frame,
          with its code a click away.
        </li>
      </ul>

      <h2 id="2026-10-12-toast-examples">Ten toast examples</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Changed</h3>
      <ul>
        <li>
          <strong>Toast:</strong> now compact, with an icon before the text. The page shows ten
          examples: success, error, promise, multi line, emoji, dark, JSX content, themed, custom
          position and a fully custom layout. See <Link href="/components/toast">Toast</Link>.
        </li>
        <li>
          <strong>Toast options:</strong> a toast takes an icon, one of six positions and a tone
          through <code>data</code>, and <code>promise()</code> turns a loading toast into its result.
        </li>
        <li>
          <strong>Toast close button:</strong> now just a quiet cross in the top right corner, lined up
          with the first line of text, with no border.
        </li>
        <li>
          <strong>Toast loading type:</strong> <code>type: &quot;loading&quot;</code> shows a spinner and
          stays until it is updated or closed.
        </li>
      </ul>

      <h2 id="2026-10-12-overlays-and-menus">Overlays, menus and feedback</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Accordion:</strong> a stack of sections that open and close. See{" "}
          <Link href="/components/accordion">Accordion</Link>.
        </li>
        <li>
          <strong>Alert Dialog:</strong> a dialog for a question that has to be answered. See{" "}
          <Link href="/components/alert-dialog">Alert Dialog</Link>.
        </li>
        <li>
          <strong>Collapsible:</strong> one section with a button that opens it. See{" "}
          <Link href="/components/collapsible">Collapsible</Link>.
        </li>
        <li>
          <strong>Context Menu:</strong> a menu that opens where you right-click. See{" "}
          <Link href="/components/context-menu">Context Menu</Link>.
        </li>
        <li>
          <strong>Dialog:</strong> a window over the page that holds focus. See{" "}
          <Link href="/components/dialog">Dialog</Link>.
        </li>
        <li>
          <strong>Dropdown Menu:</strong> a list of actions that opens from a button. See{" "}
          <Link href="/components/dropdown-menu">Dropdown Menu</Link>.
        </li>
        <li>
          <strong>Hover Card:</strong> a preview that opens when you hover or focus a link. See{" "}
          <Link href="/components/hover-card">Hover Card</Link>.
        </li>
        <li>
          <strong>Popover:</strong> a floating panel that opens from a button. See{" "}
          <Link href="/components/popover">Popover</Link>.
        </li>
        <li>
          <strong>Scroll Area:</strong> a scrolling region with themed scrollbars. See{" "}
          <Link href="/components/scroll-area">Scroll Area</Link>.
        </li>
        <li>
          <strong>Select:</strong> choose one value from a list. See{" "}
          <Link href="/components/select">Select</Link>.
        </li>
        <li>
          <strong>Tabs:</strong> panels you switch between with a row of tabs. See{" "}
          <Link href="/components/tabs">Tabs</Link>.
        </li>
        <li>
          <strong>Toast:</strong> a short message that goes away by itself. See{" "}
          <Link href="/components/toast">Toast</Link>.
        </li>
        <li>
          <strong>Tooltip:</strong> a small label for hover and focus. See{" "}
          <Link href="/components/tooltip">Tooltip</Link>.
        </li>
      </ul>
      <h3>Changed</h3>
      <ul>
        <li>
          <strong>Components menu:</strong> it now has four groups: Foundations, Form controls,
          Disclosure &amp; Overlays, and Menus &amp; Feedback.
        </li>
        <li>
          <strong>Overlays share one look:</strong> every popup uses the same surface, motion and
          stacking order.
        </li>
      </ul>

      <h2 id="2026-10-12-more-components">Eight more components</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Alert:</strong> a message in the page, in four tones. See{" "}
          <Link href="/components/alert">Alert</Link>.
        </li>
        <li>
          <strong>Card:</strong> a raised surface built from a header, content and footer. See{" "}
          <Link href="/components/card">Card</Link>.
        </li>
        <li>
          <strong>Field:</strong> joins a label, a control, a hint and an error, with a Fieldset for groups. See{" "}
          <Link href="/components/field">Field</Link>.
        </li>
        <li>
          <strong>Kbd:</strong> a keyboard key. See{" "}
          <Link href="/components/kbd">Kbd</Link>.
        </li>
        <li>
          <strong>Skeleton:</strong> a placeholder that holds the shape of loading content. See{" "}
          <Link href="/components/skeleton">Skeleton</Link>.
        </li>
        <li>
          <strong>Spinner:</strong> a ring for something that is happening for an unknown time. See{" "}
          <Link href="/components/spinner">Spinner</Link>.
        </li>
        <li>
          <strong>Textarea:</strong> a multi-line text field. See{" "}
          <Link href="/components/textarea">Textarea</Link>.
        </li>
        <li>
          <strong>Toggle Group:</strong> a row of toggles, to pick one or several. See{" "}
          <Link href="/components/toggle-group">Toggle Group</Link>.
        </li>
      </ul>
      <h3>Changed</h3>
      <ul>
        <li>
          <strong>Components menu:</strong> it now has two groups, Foundations and Form controls.
          Checkbox, Input, Label, Radio Group, Slider, Switch and Toggle moved to Form controls.
        </li>
      </ul>

      <h2 id="2026-10-12-components">Eleven new components</h2>
      <p>
        <time dateTime="2026-10-12">2026-10-12</time>
      </p>
      <h3>Added</h3>
      <ul>
        <li>
          <strong>Avatar:</strong> an image with a fallback, three sizes and an overlapping group.
          See <Link href="/components/avatar">Avatar</Link>.
        </li>
        <li>
          <strong>Badge:</strong> a small status label, with success, warning and destructive
          variants, that can render as a link. See <Link href="/components/badge">Badge</Link>.
        </li>
        <li>
          <strong>Checkbox:</strong> checked, unchecked, indeterminate and disabled. See{" "}
          <Link href="/components/checkbox">Checkbox</Link>.
        </li>
        <li>
          <strong>Input:</strong> a text field with hover, focus, disabled and invalid states. See{" "}
          <Link href="/components/input">Input</Link>.
        </li>
        <li>
          <strong>Label:</strong> a label that dims along with a disabled control. See{" "}
          <Link href="/components/label">Label</Link>.
        </li>
        <li>
          <strong>Progress:</strong> a bar for known and unknown progress. See{" "}
          <Link href="/components/progress">Progress</Link>.
        </li>
        <li>
          <strong>Radio Group:</strong> pick one option from a list. See{" "}
          <Link href="/components/radio-group">Radio Group</Link>.
        </li>
        <li>
          <strong>Separator:</strong> a horizontal or vertical divider. See{" "}
          <Link href="/components/separator">Separator</Link>.
        </li>
        <li>
          <strong>Slider:</strong> a single value or a range of two. See{" "}
          <Link href="/components/slider">Slider</Link>.
        </li>
        <li>
          <strong>Switch:</strong> an on-off setting that works straight away. See{" "}
          <Link href="/components/switch">Switch</Link>.
        </li>
        <li>
          <strong>Toggle:</strong> a button that stays pressed. See{" "}
          <Link href="/components/toggle">Toggle</Link>.
        </li>
      </ul>
      <h3>Changed</h3>
      <ul>
        <li>
          <strong>Components menu and index:</strong> they now list components from A to Z.
        </li>
      </ul>

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
