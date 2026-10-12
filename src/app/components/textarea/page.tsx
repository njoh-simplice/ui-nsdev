import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import TextareaDemo from "@content/components/textarea/demo";
import { meta } from "@content/components/textarea/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A textarea is a multi-line text field. It has the same states as Input, and can be resized up and down."
      demo={<TextareaDemo />}
      demoPath="content/components/textarea/demo.tsx"
      sourcePath="src/components/ui/textarea.tsx"
      props={[
        {
          name: "rows",
          type: "number",
          description: "How many lines tall it starts, if you don't want the default minimum.",
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
          description: "Extra classes, added after the textarea's own.",
        },
      ]}
      propsNote="Textarea is the native element, so every other textarea prop works."
      thinking={{
        intro: "A textarea is an Input that grows. It should look and behave like one.",
        notes: [
          {
            label: "The native element:",
            text: "There is no wrapper, so it behaves exactly like a normal textarea in forms and with the browser's spell check.",
          },
          {
            label: "One look for text fields:",
            text: "It shares its styles with Input, so a field of either kind has the same border, colors and states.",
          },
          {
            label: "Inside a Field:",
            text: "To connect a label, a hint and an error to it, render it through FieldControl. The Field page shows how.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "At least 96px tall, with 12px of side padding and 8px above and below, 16px text, and the md radius, 6px.",
          },
          {
            label: "Outline:",
            text: "A 1px border in the secondary text color, 4.2:1 against the page, the same as Input.",
          },
          {
            label: "Resizing:",
            text: "It can be dragged taller or shorter from the bottom corner. It can't be dragged wider, so it can't break the layout.",
          },
          {
            label: "States:",
            text: "Invalid turns the border to the danger color. Disabled is a surface fill with a hairline border and quiet text.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "The border brightens, but only on a field that is valid and enabled.",
          },
          {
            label: "Focus:",
            text: "A 2px outline, 2px away from the field.",
          },
          {
            label: "Invalid:",
            text: "Keeps its danger border on hover and focus.",
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
            label: "Name it:",
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
                Write the message next to the field and tie it in with{" "}
                <code>aria-describedby</code>, as the invalid example does.
              </>
            ),
          },
          {
            label: "A placeholder is not a label:",
            text: "It disappears as soon as someone types, and its color is 4.2:1, just under the 4.5:1 that AA asks for.",
          },
        ],
      }}
    />
  );
}
