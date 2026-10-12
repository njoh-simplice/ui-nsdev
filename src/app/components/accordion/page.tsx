import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import AccordionDemo from "@content/components/accordion/demo";
import { meta } from "@content/components/accordion/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="An accordion is a stack of sections where each heading opens its own content. It keeps a long page short and lets people read only what they need."
      demo={<AccordionDemo />}
      demoPath="content/components/accordion/demo.tsx"
      sourcePath="src/components/ui/accordion.tsx"
      props={[
        {
          name: "multiple",
          type: "boolean",
          default: "false",
          description: "Lets several sections be open at the same time. By default opening one closes the other.",
        },
        {
          name: "defaultValue",
          type: "string[]",
          description: "The values of the items that start open, when the accordion manages its own state.",
        },
        {
          name: "value",
          type: "string[]",
          description: "The values of the open items, when you control them yourself.",
        },
        {
          name: "onValueChange",
          type: "function",
          description: "Called with the new list of open values.",
        },
        {
          name: "value",
          type: "string",
          description: "On each AccordionItem. The name of that section. Required if you control the accordion.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On the Accordion or on one AccordionItem. Stops it from opening or closing.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Accordion underneath."
      thinking={{
        intro:
          "Some content is needed by a few people and ignored by the rest. An accordion hides it behind its heading without removing it.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI tracks which items are open, wires the heading to its panel, and measures the panel so it can animate to its real height.",
          },
          {
            label: "Four parts:",
            text: "Accordion holds the stack, AccordionItem is one section, AccordionTrigger is its heading and AccordionContent is what opens.",
          },
          {
            label: "One or several:",
            text: "By default one section is open at a time. Add multiple when people may want to compare two answers side by side.",
          },
          {
            label: "Not the same as Tabs:",
            text: "An accordion stacks sections vertically and reads top to bottom. Tabs show one panel at a time, in the same place.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Quiet:",
            text: "Each section is a heading and a hairline under it. There are no boxes, so a stack of them stays light.",
          },
          {
            label: "Plus to cross:",
            text: "The plus turns a quarter turn into a cross while the section is open, and sits after the heading text.",
          },
          {
            label: "Open:",
            text: "The panel text is the dimmer secondary text color, so the heading stays the strongest thing in the row.",
          },
          {
            label: "Disabled:",
            text: "The heading uses the muted text color, drops the hover change and shows the not-allowed cursor.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open and close:",
            text: "Click a heading, or press Enter or Space when it has focus.",
          },
          {
            label: "Keyboard:",
            text: "Each heading is its own stop in the tab order, so Tab moves from one to the next.",
          },
          {
            label: "Hover:",
            text: "A heading dims slightly under the pointer to show it can be pressed.",
          },
          {
            label: "Motion:",
            text: "The panel grows and shrinks in 150ms. With reduced motion turned on it opens at once.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Headings:",
            text: "Each trigger sits inside a heading, so a screen reader user can jump between sections the way they jump between headings on a page.",
          },
          {
            label: "State is announced:",
            text: "Each trigger reports whether it is expanded, so the plus and cross are never the only signal.",
          },
          {
            label: "Focus:",
            text: "Keyboard focus draws a ring around the heading.",
          },
          {
            label: "Write real headings:",
            text: "The trigger text is the only thing visible while closed, so make it say what is inside.",
          },
        ],
      }}
    />
  );
}
