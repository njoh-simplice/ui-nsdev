import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import LabelDemo from "@content/components/label/demo";
import { meta } from "@content/components/label/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A label names a control. Click it and the control responds, and it dims along with a disabled control."
      demo={<LabelDemo />}
      demoPath="content/components/label/demo.tsx"
      sourcePath="src/components/ui/label.tsx"
      props={[
        {
          name: "htmlFor",
          type: "string",
          description: "The id of the input this label names. Not needed when the control is inside the label.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description:
            "Dims the label. Use it for a disabled control that sits next to the label, not inside it.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the label's own.",
        },
      ]}
      propsNote="Every other prop goes to the native label element."
      thinking={{
        intro:
          "A label is the simplest component here, and the one most often skipped. It is just a native label, styled once.",
        notes: [
          {
            label: "A real label:",
            text: "Because it is the native element, clicking it focuses or toggles its control with no script.",
          },
          {
            label: "Two ways to connect:",
            text: (
              <>
                Point <code>htmlFor</code> at an input&apos;s id, or wrap the control inside the
                label, which suits a checkbox, a switch or a radio.
              </>
            ),
          },
          {
            label: "It dims itself:",
            text: "Wrap a disabled control and the label dims with no prop. For a control beside it, pass disabled.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Text:",
            text: "16px medium in the main text color.",
          },
          {
            label: "With a control inside:",
            text: "The control and the text sit in a row, 8px apart.",
          },
          {
            label: "Disabled:",
            text: "The secondary text color and a not-allowed cursor.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Click:",
            text: "Clicking the text focuses its input or toggles its checkbox, switch or radio.",
          },
          {
            label: "No selection:",
            text: "The text can't be selected, so a quick double click on a label doesn't highlight it.",
          },
          {
            label: "No states of its own:",
            text: "A label has no hover, focus or pressed state. The control it names shows those.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "It is the name:",
            text: "A label gives its control the accessible name that a screen reader speaks.",
          },
          {
            label: "Keep it visible:",
            text: "Don't hide the label and rely on a placeholder. The label stays when someone starts typing.",
          },
          {
            label: "A bigger target:",
            text: "Wrapping a small control, like a checkbox, in a label makes the whole row clickable.",
          },
        ],
      }}
    />
  );
}
