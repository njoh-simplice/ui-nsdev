import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SelectDemo from "@content/components/select/demo";
import { meta } from "@content/components/select/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A select is a field where you choose one value from a list. It opens from a button that looks like an Input, and shows the choice once made."
      demo={<SelectDemo />}
      demoPath="content/components/select/demo.tsx"
      sourcePath="src/components/ui/select.tsx"
      props={[
        {
          name: "items",
          type: "{ label, value }[]",
          description: "On Select. The choices, so the button can show the label of the chosen value. Pass an item with a null value for a placeholder.",
        },
        {
          name: "value",
          type: "string",
          description: "On each SelectItem. What the item stands for. Required.",
        },
        {
          name: "defaultValue",
          type: "string",
          description: "On Select. The value that starts chosen, when it manages its own state.",
        },
        {
          name: "onValueChange",
          type: "function",
          description: "On Select. Called with the newly chosen value.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On Select or on one SelectItem. Stops it from being opened or chosen.",
        },
        {
          name: "name",
          type: "string",
          description: "On Select, or on the Field around it. The name the value is submitted under in a form.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Select underneath. Wrap it in a Field to give it a label."
      thinking={{
        intro:
          "A select is for choosing one value out of too many to show as a row of radios. It saves space, at the cost of one extra click.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI handles the open state, the highlight, type-ahead, the placement and the hidden form input.",
          },
          {
            label: "Not a native select:",
            text: "A native select can't be styled, so the open list would look different on every system. This one looks like the rest of the library.",
          },
          {
            label: "Use items:",
            text: "Give Select an items list so the button can show the label of the chosen value, such as Pro, rather than its value.",
          },
          {
            label: "Select or Dropdown Menu:",
            text: "A select picks a value for a field. A Dropdown Menu runs commands.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Looks like an Input:",
            text: "The button shares the Input's height, border and focus ring, with a pair of up and down arrows after the text.",
          },
          {
            label: "Placeholder:",
            text: "While nothing is chosen, the text is the quiet secondary color, like an Input's placeholder.",
          },
          {
            label: "List:",
            text: "The shared overlay surface, at least as wide as the button, opening below it. The chosen row has a tick on the left.",
          },
          {
            label: "Disabled:",
            text: "A flat surface with a muted border, as for a disabled Input.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open:",
            text: "Click the button, or press Enter, Space or the Down arrow when it has focus.",
          },
          {
            label: "Keyboard:",
            text: "The arrow keys move the highlight, and typing a letter jumps to a row that starts with it. Enter or Space chooses. A disabled row can be highlighted but not chosen.",
          },
          {
            label: "Close:",
            text: "Choosing a row, Escape, or a click outside. Focus goes back to the button.",
          },
          {
            label: "Open state:",
            text: "While the list is open, the border of the button brightens.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Labeled:",
            text: "Wrap it in a Field with a FieldLabel so the button is announced with a name.",
          },
          {
            label: "Announced as a listbox:",
            text: "The list reports its options, and which one is selected.",
          },
          {
            label: "Few choices?:",
            text: "With five or fewer options, a RadioGroup shows them all at once and takes fewer clicks.",
          },
        ],
      }}
    />
  );
}
