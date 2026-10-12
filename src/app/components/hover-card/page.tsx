import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import HoverCardDemo from "@content/components/hover-card/demo";
import { meta } from "@content/components/hover-card/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A hover card previews where a link goes. Hover or focus the link and a small card shows who or what it points to, without leaving the page."
      demo={<HoverCardDemo />}
      demoPath="content/components/hover-card/demo.tsx"
      sourcePath="src/components/ui/hover-card.tsx"
      props={[
        {
          name: "href",
          type: "string",
          description: "On HoverCardTrigger. Where the link goes. It is a real link, so it works without the card.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "On HoverCardContent. Which side of the link it opens on. It flips to the other side if there is no room.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "On HoverCardContent. How it lines up along that side.",
        },
        {
          name: "delay",
          type: "number",
          default: "600",
          description: "On HoverCardTrigger. Milliseconds to wait after hovering before it opens.",
        },
        {
          name: "closeDelay",
          type: "number",
          default: "300",
          description: "On HoverCardTrigger. Milliseconds to wait after leaving before it closes.",
        },
      ]}
      propsNote="HoverCard is built on Base UI's PreviewCard. Every other prop goes to it."
      thinking={{
        intro:
          "A hover card is a courtesy to people who want a quick look before they commit to a click. The page works exactly the same without it.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It uses Base UI's PreviewCard, which opens the card on hover and focus, keeps it open while the pointer is over it, and places it next to the link.",
          },
          {
            label: "A real link:",
            text: "The trigger is an anchor with an href. If the card never opens, the link still goes where it should.",
          },
          {
            label: "Preview, not interface:",
            text: "The card is for reading. Anything people need to click, such as a button, belongs in a Popover.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Link:",
            text: "Underlined with a quiet line that turns to the main text color on hover, so it reads as a link in running text.",
          },
          {
            label: "Card:",
            text: "The shared overlay surface, 18rem wide, with no arrow. The demo shows a profile with the avatar.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "The card opens after a short pause and stays open while the pointer moves from the link onto the card.",
          },
          {
            label: "Focus:",
            text: "It opens when the link receives keyboard focus, and closes when focus leaves.",
          },
          {
            label: "Click:",
            text: "Following the link works as usual.",
          },
          {
            label: "Motion:",
            text: "A 150ms fade and a small scale from the side it opens from. With reduced motion turned on it appears at once.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Nothing is lost without it:",
            text: "On touch screens there is no hover, so the card doesn't open. The link still works, so nothing the card says should be needed to use the page.",
          },
          {
            label: "Link text:",
            text: "The link has its own readable text, such as a name, so it makes sense out of context.",
          },
          {
            label: "Keyboard:",
            text: "Keyboard users get the card on focus, not only mouse users on hover.",
          },
        ],
      }}
    />
  );
}
