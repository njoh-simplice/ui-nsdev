import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import CardDemo from "@content/components/card/demo";
import { meta } from "@content/components/card/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A card groups related content on a raised surface. It is built from parts you put together: a header, a title, a description, content and a footer."
      demo={<CardDemo />}
      demoPath="content/components/card/demo.tsx"
      sourcePath="src/components/ui/card.tsx"
      props={[
        {
          name: "className",
          type: "string",
          description: "On every part. Extra classes, added after the part's own.",
        },
      ]}
      propsNote="Card, CardHeader, CardContent and CardFooter are plain divs. CardTitle is an h3 and CardDescription a paragraph. Every part takes the normal props of its element."
      thinking={{
        intro:
          "A card is a container, so it should have no opinions about what is inside it. That is why it is parts, not props.",
        notes: [
          {
            label: "Parts, not props:",
            text: "There is no title or footer prop. You place the parts yourself, so the demo can put a Badge beside the title.",
          },
          {
            label: "Leave out what you don't need:",
            text: "A card with only content is fine. Each part adds its own padding, so none depends on another.",
          },
          {
            label: "No click behavior:",
            text: "A card isn't a control. If the whole card is a link, put the link on the title or wrap the card, so there is one real link.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Surface:",
            text: "The surface fill with a 1px hairline border and the lg radius, 8px.",
          },
          {
            label: "Spacing:",
            text: "The header, content and footer each have 24px of padding at the sides. The footer is a row with 12px between its items.",
          },
          {
            label: "Text:",
            text: "The title is 20px semibold. The description is 14px, in the main text color at 70%.",
          },
          {
            label: "Dividers:",
            text: "Put a Separator between parts when you want a line, as the demo does.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not interactive:",
            text: "A card has no hover, focus or pressed state. The buttons and links inside it have their own.",
          },
          {
            label: "Focus order:",
            text: "It follows the page order: header, content, then footer, so the buttons in the footer come last.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Choose the heading level:",
            text: "CardTitle is an h3. If the card sits under a different heading, change the level in the file so the page outline stays in order.",
          },
          {
            label: "Contrast:",
            text: "The title is 14.2:1 against the surface and the description is 7.5:1.",
          },
          {
            label: "One link per card:",
            text: "A card with several links or buttons is fine. A card that is itself a link should have only one.",
          },
        ],
      }}
    />
  );
}
