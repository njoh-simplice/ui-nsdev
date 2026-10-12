import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ToggleGroupDemo from "@content/components/toggle-group/demo";
import { meta } from "@content/components/toggle-group/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A toggle group is a row of toggles that belong together. Pick one, like an alignment, or several, like text styles."
      demo={<ToggleGroupDemo />}
      demoPath="content/components/toggle-group/demo.tsx"
      sourcePath="src/components/ui/toggle-group.tsx"
      props={[
        {
          name: "multiple",
          type: "boolean",
          default: "false",
          description: "Lets more than one toggle be pressed at a time.",
        },
        {
          name: "defaultValue",
          type: "string[]",
          description: "The values that start pressed, when you let it manage its own state.",
        },
        {
          name: "value",
          type: "string[]",
          description: "The pressed values, when you control them yourself.",
        },
        {
          name: "onValueChange",
          type: "function",
          description: "Called with the new list of pressed values.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns off every toggle in the group.",
        },
        {
          name: "value",
          type: "string",
          description: "On each Toggle inside. The value that toggle stands for. Required.",
        },
      ]}
      propsNote="Give the group an aria-label. Every other prop goes to the Base UI ToggleGroup underneath."
      thinking={{
        intro:
          "Some choices are a set: left, center or right, bold and italic. A group makes the set visible as one control.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "The group tracks which values are pressed. Each item is your Toggle with a value, so it looks and behaves the same as a lone Toggle.",
          },
          {
            label: "One or several:",
            text: "By default pressing a toggle releases the others, like alignment. Add multiple and any number can be pressed, like bold, italic and underline.",
          },
          {
            label: "Attached:",
            text: "The toggles share their borders, so the row reads as one segmented control, like a monthly and yearly switch on a pricing table.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Segments:",
            text: "Only the outer corners are rounded, with the md radius, 6px. Neighbours overlap by 1px, so a border is never doubled.",
          },
          {
            label: "Pressed:",
            text: "The pressed segment has its accent border drawn above its neighbours, so no part of it is covered.",
          },
          {
            label: "Disabled:",
            text: "Every segment is a flat surface with a quiet label.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Press:",
            text: "Click a segment, or press Enter or Space when it has focus. In a single-choice group, pressing one releases the one that was pressed.",
          },
          {
            label: "Keyboard:",
            text: "The group is one stop in the tab order, and the arrow keys move between its segments.",
          },
          {
            label: "Each segment:",
            text: "Hover, focus and the press animation are the same as a lone Toggle.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name the group:",
            text: "The group is announced as a group. Give it an aria-label such as Text alignment, as the demo does.",
          },
          {
            label: "Name each icon:",
            text: (
              <>
                Icon-only segments need an <code>aria-label</code> each, like Align left.
              </>
            ),
          },
          {
            label: "Pressed is announced:",
            text: "Each segment reports whether it is pressed, so the state isn't carried by color alone.",
          },
        ],
      }}
    />
  );
}
