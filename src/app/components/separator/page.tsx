import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SeparatorDemo from "@content/components/separator/demo";
import { meta } from "@content/components/separator/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A separator is a thin line that divides content. It is horizontal by default, and can be vertical."
      demo={<SeparatorDemo />}
      demoPath="content/components/separator/demo.tsx"
      sourcePath="src/components/ui/separator.tsx"
      props={[
        {
          name: "orientation",
          type: "horizontal | vertical",
          default: "horizontal",
          description: "Which way the line runs.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the separator's own.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Separator underneath."
      thinking={{
        intro:
          "A separator groups things. It should be there because two blocks are different, not to fill space.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It carries the separator role and its orientation, so assistive tech knows it is a divider and which way it runs.",
          },
          {
            label: "One component, two directions:",
            text: "The orientation prop switches it between a full-width line and a full-height one.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Line:",
            text: "1px, in the border color.",
          },
          {
            label: "Horizontal:",
            text: "Fills the width of its container.",
          },
          {
            label: "Vertical:",
            text: "Fills the height of its container, so put it in a flex row that has a height, like the h-5 row in the demo.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not interactive:",
            text: "A separator has no hover, focus or pressed state, and can't be focused.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced:",
            text: "A screen reader can announce it as a separator, so don't scatter them as decoration.",
          },
          {
            label: "Quiet by design:",
            text: "The line is the border color, 1.3:1 against the page. That is right for a hint of grouping, but it isn't enough to carry meaning on its own, so don't rely on it alone to show structure.",
          },
        ],
      }}
    />
  );
}
