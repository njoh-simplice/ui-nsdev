import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ScrambleOnLoadDemo from "@content/components/scramble-on-load/demo";
import { meta } from "@content/components/scramble-on-load/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="Scramble on Load makes the letters of a heading or a line of text flicker through random characters and settle on the real ones, as soon as the text is on the screen: when the page loads, or when you scroll to it."
      demo={<ScrambleOnLoadDemo />}
      demoPath="content/components/scramble-on-load/demo.tsx"
      sourcePath="src/components/ui/scramble-on-load.tsx"
      props={[
        {
          name: "children",
          type: "string",
          description: "The text. It must be a plain string. Required.",
        },
        {
          name: "render",
          type: "element",
          description: "Makes it your own element, such as a heading or a paragraph, instead of a span.",
        },
        {
          name: "duration",
          type: "number",
          default: "1200",
          description: "The most time the effect takes, in milliseconds. A short word finishes sooner, at about 80ms per letter.",
        },
        {
          name: "delay",
          type: "number",
          default: "0",
          description: "How long to wait after the text comes into view before it starts, in milliseconds.",
        },
        {
          name: "once",
          type: "boolean",
          default: "true",
          description: "Plays only the first time the text comes into view. Pass false to play it again every time it scrolls out of view and back.",
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
          "A heading that assembles itself is a way to say: this is the start. It works best once per page, on the one line you want read first.",
        notes: [
          {
            label: "Starts when it is seen:",
            text: "It waits until at least a fifth of the text is on the screen, so a heading far down the page plays when you reach it, not while you cannot see it.",
          },
          {
            label: "Once by default:",
            text: "Scrolling back up does not replay it. Set once to false for text that should play every time it returns.",
          },
          {
            label: "Same parts as Scramble on Hover:",
            text: "The real text holds the width and the layout never moves, and every word keeps its own width. Spaces and punctuation are left alone.",
          },
          {
            label: "Headings and paragraphs:",
            text: "Pass render to make it an h1 or a p. A heading keeps its meaning for screen readers.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Only the letters:",
            text: "Size, weight and color come from the element you render, so it matches the page.",
          },
          {
            label: "Slower than hover:",
            text: "It takes up to 1.2 seconds by default, because it is a moment to watch and not a reaction to a pointer.",
          },
          {
            label: "Staggering:",
            text: "Give a second line a delay, as the demo does, and it starts after the first instead of at the same time.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Play:",
            text: "It plays as soon as the element is on the screen, which for text at the top of a page is right after the page loads.",
          },
          {
            label: "Scroll:",
            text: "Text below the fold stays steady until you scroll to it, then plays.",
          },
          {
            label: "Replay:",
            text: "With once set to false it plays again each time it comes back into view, and shows the real text while it is out of view.",
          },
          {
            label: "Reduced motion:",
            text: "For people who ask their system for less motion, the text is simply shown.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Screen readers:",
            text: "They get the real text from a visually hidden copy, and never hear the random letters.",
          },
          {
            label: "Before the scripts load:",
            text: "The real text is in the page from the start, so it can be read, searched and found before any effect runs.",
          },
          {
            label: "Easy to wait for:",
            text: "Keep it short and fast. People should never have to wait for a heading to finish before they can read it.",
          },
          {
            label: "One at a time:",
            text: "A few moving headings on a page are plenty. Too many make the page feel unsteady.",
          },
        ],
      }}
    />
  );
}
