import type { Metadata } from "next";
import Link from "next/link";
import { ComponentPage } from "@/components/component-page";
import ButtonDemo from "@content/components/button/demo";
import { meta } from "@content/components/button/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A button triggers an action. It comes in four intents (default, secondary, destructive and ghost), in a regular and a small size, can carry an icon, and has square icon-only forms. Every one of them has hover, focus, pressed and disabled states."
      demo={<ButtonDemo />}
      demoPath="content/components/button/demo.tsx"
      sourcePath="src/components/ui/button.tsx"
      props={[
        {
          name: "variant",
          type: "default | secondary | destructive | ghost | inverse",
          default: "default",
          description: (
            <>
              The intent of the button, and its color. <code>ghost</code> has no fill and no outline
              until you point at it.
            </>
          ),
        },
        {
          name: "size",
          type: "default | sm | icon | icon-sm",
          default: "default",
          description: (
            <>
              <code>sm</code> is a smaller button, for tight places. <code>icon</code> and{" "}
              <code>icon-sm</code> make square buttons for an icon with no label.
            </>
          ),
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns off the button and its hover and pressed states.",
        },
        {
          name: "render",
          type: "element",
          description: (
            <>
              Renders the button as another element, such as a link. Pass{" "}
              <code>nativeButton={"{false}"}</code> with it.
            </>
          ),
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the button's own.",
        },
      ]}
      propsNote={
        <>
          Every other prop goes straight to the Base UI <code>Button</code> underneath.
        </>
      }
      thinking={{
        intro:
          "A button should be predictable: it does one thing when pressed, and its label says what. So there is one component with a small set of intents, not a different button for every use.",
        notes: [
          {
            label: "Built on Base UI.",
            text: (
              <>
                Disabled handling, keyboard activation and focus come from Base UI&apos;s{" "}
                <code>Button</code>. This file only adds the look.
              </>
            ),
          },
          {
            label: "Intent is a variant.",
            text: (
              <>
                <code>default</code> is the main action, <code>secondary</code> a quieter one, and{" "}
                <code>destructive</code> is for actions that remove something or can&apos;t be
                undone.
              </>
            ),
          },
          {
            label: "Green belongs to the component.",
            text: (
              <>
                The default button uses the accent. The <code>inverse</code> variant is a light fill
                for places where green isn&apos;t wanted, like this site&apos;s own header and
                hero.
              </>
            ),
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: (
              <>
                36px tall with 16px of side padding. <code>sm</code> is 28px tall with 12px of side
                padding and 14px text. The icon-only buttons are squares of 36px and 28px. Corners use
                the <code>md</code> radius, 6px.
              </>
            ),
          },
          {
            label: "Label:",
            text: "16px, semibold. An icon goes after the label, 8px away, and is 16px unless you size it yourself.",
          },
          {
            label: "Color:",
            text: (
              <>
                <code>default</code> fills with the accent, <code>destructive</code> with the danger
                color, and <code>inverse</code> with the main text color. <code>secondary</code> has
                no fill and a 1px outline, and <code>ghost</code> has neither until it is hovered. See <Link href="/docs/theming">Theming</Link> for the
                tokens.
              </>
            ),
          },
          {
            label: "Text on a fill:",
            text: (
              <>
                always <code>bg</code>, per the theming rule. That gives 14.6:1 contrast on the
                accent, 5.5:1 on danger and 15.7:1 on the light fill.
              </>
            ),
          },
          {
            label: "Disabled:",
            text: (
              <>
                a flat <code>surface</code> fill and a quiet label, so it reads as off whichever
                variant it was.
              </>
            ),
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "the fill eases to 85%. A ghost button gets a faint 10% wash, since it has no fill to ease.",
          },
          {
            label: "Focus:",
            text: "keyboard focus draws a 2px outline in the main text color, 2px away from the button. A mouse click doesn't show it.",
          },
          {
            label: "Pressed:",
            text: "the button shrinks slightly, to 97%, and the fill drops to 70% (a ghost button's wash deepens to 20%). Both animate over 150ms. People who ask their system for reduced motion get the color change without the shrink.",
          },
          {
            label: "Disabled:",
            text: (
              <>
                no hover, no press, and a not-allowed cursor. Base UI also takes it out of the tab
                order unless you set <code>focusableWhenDisabled</code>.
              </>
            ),
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "It is a real button.",
            text: "Enter and Space activate it, and screen readers announce it as one. As a link it keeps link behavior.",
          },
          {
            label: "Icon-only needs a name.",
            text: (
              <>
                The icon button has no text, so always give it an <code>aria-label</code>, as the
                demo does.
              </>
            ),
          },
          {
            label: "Never color alone.",
            text: "A destructive button is red, and its label still says what it does. The focus outline has 15.7:1 contrast against the page.",
          },
          {
            label: "Target size:",
            text: "36px clears the 24px minimum of WCAG 2.2 AA, and so does the 28px small size, but both are smaller than the 44px often advised for touch. Give them room around them on phones, and keep the small size for dense places like a toolbar.",
          },
        ],
      }}
    />
  );
}
