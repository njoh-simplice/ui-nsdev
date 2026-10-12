import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import InputDemo from "@content/components/input/demo";
import { meta } from "@content/components/input/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="An input is a single-line text field. It has hover, focus, disabled and invalid states."
      demo={<InputDemo />}
      demoPath="content/components/input/demo.tsx"
      sourcePath="src/components/ui/input.tsx"
      props={[
        {
          name: "type",
          type: "string",
          default: "text",
          description: "The kind of text: text, email, password, and so on.",
        },
        {
          name: "placeholder",
          type: "string",
          description: "A hint shown while the field is empty. It is not a name for the field.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns the field off. It can't be focused or edited.",
        },
        {
          name: "aria-invalid",
          type: "boolean",
          description: "Marks the value as wrong, and turns the border to the danger color.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the input's own.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Input underneath, so it behaves like a native input."
      thinking={{
        intro:
          "A text field should look like one and feel the same everywhere, so it has no variants, just states.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It is Base UI's Input, which also reports its state when you place it inside a Base UI Field.",
          },
          {
            label: "Invalid is a state:",
            text: "Set aria-invalid and the border turns to the danger color. Base UI's own invalid flag does the same.",
          },
          {
            label: "The label is separate:",
            text: "Pair it with a Label using htmlFor. The placeholder is a hint, not a name.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "36px tall, to match Button, with 12px of side padding, 16px text and the md radius, 6px.",
          },
          {
            label: "Outline:",
            text: "A 1px border in the secondary text color, 4.2:1 against the page, on a see-through fill.",
          },
          {
            label: "Invalid:",
            text: "A danger-colored border. Put the message under the field in danger-colored text, as the demo does.",
          },
          {
            label: "Disabled:",
            text: "A surface fill, a hairline border and quiet text.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "The border brightens, but only on an input that is valid and enabled.",
          },
          {
            label: "Focus:",
            text: "A 2px outline 2px away from the field, the same as every control.",
          },
          {
            label: "Invalid:",
            text: "Keeps its danger border on hover and focus, so the problem doesn't disappear when you click in.",
          },
          {
            label: "Disabled:",
            text: "It can't be focused or edited, and shows a not-allowed cursor.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name every field:",
            text: (
              <>
                Use a Label with <code>htmlFor</code>, or an <code>aria-label</code>. The bare
                fields in the demo have one.
              </>
            ),
          },
          {
            label: "Say what is wrong:",
            text: (
              <>
                A red border alone isn&apos;t enough. Write the message next to the field and tie
                it in with <code>aria-describedby</code>, as the invalid example does.
              </>
            ),
          },
          {
            label: "A placeholder is not a label:",
            text: "It vanishes as soon as someone types, and its color is 4.2:1 against the page, just under the 4.5:1 that AA asks for.",
          },
          {
            label: "Target size:",
            text: "36px tall clears the 24px minimum of WCAG 2.2 AA.",
          },
        ],
      }}
    />
  );
}
