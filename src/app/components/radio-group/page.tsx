import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import RadioGroupDemo from "@content/components/radio-group/demo";
import { meta } from "@content/components/radio-group/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A radio group lets someone pick exactly one option from a short list."
      demo={<RadioGroupDemo />}
      demoPath="content/components/radio-group/demo.tsx"
      sourcePath="src/components/ui/radio-group.tsx"
      props={[
        {
          name: "defaultValue",
          type: "string",
          description: "On RadioGroup. The value that starts selected.",
        },
        {
          name: "value",
          type: "string",
          description: "On RadioGroup. The selected value, when you control it yourself.",
        },
        {
          name: "onValueChange",
          type: "function",
          description: "On RadioGroup. Called with the new value when the selection changes.",
        },
        {
          name: "value",
          type: "string",
          description: "On Radio. The value this radio stands for. Required.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On Radio, to disable one option, or on RadioGroup, to disable them all.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the component's own.",
        },
      ]}
      propsNote="Every other prop goes to the matching Base UI part. Give the group a name with aria-label or aria-labelledby."
      thinking={{
        intro:
          "Radios are for a short list where all the options deserve to be visible and exactly one is true.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "The group owns the selection, so selecting one radio clears the rest. It also handles arrow-key movement.",
          },
          {
            label: "One tab stop:",
            text: "The group is a single stop in the tab order, and the arrow keys move inside it, the way a native radio group does.",
          },
          {
            label: "Short lists only:",
            text: "Past five or six options, a select is easier to scan than a column of radios.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "A 20px circle with a 1px outline in the secondary text color, 4.2:1 against the page.",
          },
          {
            label: "Selected:",
            text: "An accent outline and a 10px accent dot in the middle.",
          },
          {
            label: "Spacing:",
            text: "12px between options, stacked in a column.",
          },
          {
            label: "Disabled:",
            text: "A surface fill and a hairline border. A disabled option that is selected keeps a grey dot.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Select:",
            text: "Click a radio or its label's text, or move with the arrow keys once the group has focus.",
          },
          {
            label: "Hover:",
            text: "An unselected radio's outline brightens to the main text color.",
          },
          {
            label: "Focus:",
            text: "Keyboard focus draws a 2px outline, 2px away from the circle.",
          },
          {
            label: "Disabled:",
            text: "It can't be selected, doesn't react to hover, and the arrow keys skip over it.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name the group:",
            text: (
              <>
                A screen reader needs the question as well as the options. The demo labels its group
                with <code>aria-label=&quot;Density&quot;</code>.
              </>
            ),
          },
          {
            label: "Announced as a set:",
            text: "Each radio is read with its label and whether it is selected, inside the group that names it.",
          },
          {
            label: "Target size:",
            text: "The circle alone is 20px, under the 24px minimum of WCAG 2.2 AA. Put each radio in a Label, as the demo does, so the whole row is the target.",
          },
        ],
      }}
    />
  );
}
