import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import CollapsibleDemo from "@content/components/collapsible/demo";
import { meta } from "@content/components/collapsible/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A collapsible is one section with a button that opens and closes it. Use it when a single piece of extra content should stay out of the way until it is wanted."
      demo={<CollapsibleDemo />}
      demoPath="content/components/collapsible/demo.tsx"
      sourcePath="src/components/ui/collapsible.tsx"
      props={[
        {
          name: "defaultOpen",
          type: "boolean",
          default: "false",
          description: "Starts the section open, when it manages its own state.",
        },
        {
          name: "open",
          type: "boolean",
          description: "Whether the section is open, when you control it yourself.",
        },
        {
          name: "onOpenChange",
          type: "function",
          description: "Called with the new open state.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Stops the button from opening or closing the section.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Collapsible underneath. CollapsibleTrigger takes its label as children."
      thinking={{
        intro:
          "Not everything deserves space on the page at all times. A collapsible is the smallest way to tuck something away: one button, one panel.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI links the button to its panel, tracks the open state and measures the panel so it can animate to its real height.",
          },
          {
            label: "Three parts:",
            text: "Collapsible holds the state, CollapsibleTrigger is the button and CollapsiblePanel is what opens.",
          },
          {
            label: "Collapsible or Accordion:",
            text: "Use a Collapsible for one section. Use an Accordion for a stack of related sections that belong together.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "A real Button:",
            text: "The trigger is the secondary Button, so it has the same hover, focus and press as every other button.",
          },
          {
            label: "Chevron after the label:",
            text: "The chevron sits after the text, like icons in the other buttons, and turns a quarter turn down while the section is open.",
          },
          {
            label: "No box:",
            text: "The panel has no border or fill. What you put inside decides how it looks.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open and close:",
            text: "Click the button, or press Enter or Space when it has focus.",
          },
          {
            label: "Press:",
            text: "The button shrinks slightly while pressed, like every Button.",
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
            label: "State is announced:",
            text: "The button reports whether the section is expanded and which panel it controls.",
          },
          {
            label: "Closed means hidden:",
            text: "A closed panel is hidden from screen readers and the tab order, so its links and buttons can't be reached by accident.",
          },
          {
            label: "Name it by what is inside:",
            text: "The label is all anyone sees while it is closed, so Recovery keys is better than Show more.",
          },
        ],
      }}
    />
  );
}
