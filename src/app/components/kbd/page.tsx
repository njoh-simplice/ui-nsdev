import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import KbdDemo from "@content/components/kbd/demo";
import { meta } from "@content/components/kbd/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="Kbd shows a keyboard key, so a shortcut like ⌘K reads as keys and not as text."
      demo={<KbdDemo />}
      demoPath="content/components/kbd/demo.tsx"
      sourcePath="src/components/ui/kbd.tsx"
      props={[
        {
          name: "className",
          type: "string",
          description: "On Kbd and KbdGroup. Extra classes, added after the component's own.",
        },
      ]}
      propsNote="Kbd is the native kbd element and KbdGroup is a span, so both take every normal prop, such as aria-label."
      thinking={{
        intro: "A shortcut is easier to spot and to remember when each key looks like a key.",
        notes: [
          {
            label: "The real element:",
            text: "Kbd renders the native kbd element, which tells assistive tech that the text is input from a keyboard.",
          },
          {
            label: "One key each:",
            text: "Put each key in its own Kbd, and wrap keys that are pressed together in a KbdGroup.",
          },
          {
            label: "Show it where it applies:",
            text: "Place a shortcut next to the control or command it triggers, such as in a button or a menu item.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Key:",
            text: "At least 24px wide and exactly 24px tall, with the sm radius, 4px, the surface fill and a strong 1px border.",
          },
          {
            label: "Text:",
            text: "12px medium, in the mono face, in the main text color.",
          },
          {
            label: "Group:",
            text: "Keys in a KbdGroup sit 4px apart.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Display only:",
            text: "A key has no hover, focus or pressed state, and can't be focused. It shows a shortcut but doesn't create one, so you still have to handle the keys yourself.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name the symbols:",
            text: (
              <>
                Screen readers don&apos;t all read a symbol like ⌘ the same way. Give it an{" "}
                <code>aria-label</code> such as Command, as the demo does.
              </>
            ),
          },
          {
            label: "Contrast:",
            text: "The text is 14.2:1 against the key's fill.",
          },
          {
            label: "Don't hide the action:",
            text: "A shortcut is a shortcut, not the only way in. The action behind it should also have a visible control.",
          },
        ],
      }}
    />
  );
}
