import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ScrambleOnHoverDemo from "@content/components/scramble-on-hover/demo";
import { meta } from "@content/components/scramble-on-hover/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="Scramble on Hover makes the letters of a word flicker through random characters when the mouse moves over it, then settle on the real word. It adds a little life to links and buttons without changing what they say."
      demo={<ScrambleOnHoverDemo />}
      demoPath="content/components/scramble-on-hover/demo.tsx"
      sourcePath="src/components/ui/scramble-on-hover.tsx"
      props={[
        {
          name: "children",
          type: "string",
          description: "The text. It must be a plain string. Required.",
        },
        {
          name: "render",
          type: "element",
          description:
            "Puts the effect on your own element, such as a link or a Button, instead of a span. The hover is read on that element, so the whole link reacts and not only its letters.",
        },
        {
          name: "duration",
          type: "number",
          default: "700",
          description: "The most time the effect takes, in milliseconds. A short word finishes sooner, at about 80ms per letter.",
        },
        {
          name: "characters",
          type: "string",
          default: "A–Z, 0–9 and #%&*+?",
          description: "The characters the random letters are picked from.",
        },
        {
          name: "before / after",
          type: "ReactNode",
          description: "Something inside the same element, before or after the text, such as an icon or a line. It does not scramble.",
        },
      ]}
      propsNote="Every other prop goes to the element, a span or the one you pass as render."
      thinking={{
        intro:
          "The effect is a flourish on something people already hover: a link, a button, a word in a menu. It should never be the reason they notice it is there.",
        notes: [
          {
            label: "One element does the work:",
            text: "It listens for the hover on itself. With render you choose which element that is, so a link can react across its whole row.",
          },
          {
            label: "Nothing moves:",
            text: "The real word stays underneath, invisible, and holds the width. The random characters sit on top of it and are clipped to it, so the layout never shifts.",
          },
          {
            label: "Words, not sentences:",
            text: "Every word keeps its own width, so a sentence that wraps still wraps in the same places while it flickers.",
          },
          {
            label: "Left alone:",
            text: "Spaces and punctuation never change, and a lowercase letter is only ever replaced by a lowercase one.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "It is only the letters:",
            text: "Size, weight, capitals and color come from the element, so the effect matches whatever text it is on.",
          },
          {
            label: "The noise:",
            text: "Capital letters, digits and a few symbols, which you can change with characters.",
          },
          {
            label: "The timing:",
            text: "About a tenth of a second of pure noise, then the real letters settle from left to right, about 80ms apart. A long text is sped up so it never takes longer than duration.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "The effect starts when the mouse (or a pen) enters the element, and starts again if it leaves and comes back.",
          },
          {
            label: "Leaving:",
            text: "If the mouse leaves in the middle of the effect, the real text comes back at once.",
          },
          {
            label: "Keyboard and touch:",
            text: "Nothing happens on keyboard focus or on a tap, so the text is always steady for them.",
          },
          {
            label: "Reduced motion:",
            text: "For people who ask their system for less motion, nothing flickers.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Screen readers:",
            text: "They always get the real text, from a visually hidden copy. The flickering copy is hidden from them, so they never hear random letters.",
          },
          {
            label: "Never the only signal:",
            text: "The effect carries no meaning. Keep your own hover style on the element, as the demo does with its color.",
          },
          {
            label: "Use it sparingly:",
            text: "Moving letters draw the eye. A few links in a menu is enough; a whole page of them is tiring.",
          },
          {
            label: "Short words read best:",
            text: "The effect is quick enough to read through, but a long sentence flickering under the pointer is harder to follow.",
          },
        ],
      }}
    />
  );
}
