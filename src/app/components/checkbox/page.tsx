import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import CheckboxDemo from "@content/components/checkbox/demo";
import { meta } from "@content/components/checkbox/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A checkbox is a yes-or-no choice. It can be checked, unchecked or indeterminate, and it can be disabled."
      demo={<CheckboxDemo />}
      demoPath="content/components/checkbox/demo.tsx"
      sourcePath="src/components/ui/checkbox.tsx"
      props={[
        {
          name: "defaultChecked",
          type: "boolean",
          default: "false",
          description: "Whether it starts checked, when you let it manage its own state.",
        },
        {
          name: "checked",
          type: "boolean",
          description: "The checked state, when you control it yourself.",
        },
        {
          name: "onCheckedChange",
          type: "function",
          description: "Called with the new value when the checkbox is toggled.",
        },
        {
          name: "indeterminate",
          type: "boolean",
          default: "false",
          description: "Shows a dash instead of a check, for a group that is partly selected.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns off the checkbox and its hover state.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the checkbox's own.",
        },
      ]}
      propsNote="Every other prop, such as name and value, goes to the Base UI Checkbox underneath."
      thinking={{
        intro:
          "A checkbox answers one question with yes or no, and its box should show the answer without any explanation.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI keeps the checked state, the hidden form input and the keyboard behavior. This file draws the box.",
          },
          {
            label: "A mark for each state:",
            text: "A check for checked and a dash for indeterminate. They swap on a data attribute, with no script.",
          },
          {
            label: "Put it in a label:",
            text: "Wrap the checkbox in a Label and the text becomes clickable too, which also makes the target larger.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "A 20px square with a 1px outline and the sm radius, 4px.",
          },
          {
            label: "Outline:",
            text: "The secondary text color, 4.2:1 against the page, so the box is easy to find when it is empty.",
          },
          {
            label: "Checked:",
            text: "Fills with the accent and draws the mark in the page color, 14.6:1. Indeterminate looks the same, with a dash.",
          },
          {
            label: "Disabled:",
            text: "A surface fill, a hairline border and a grey mark. A disabled checkbox that is checked still shows its mark.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Toggle:",
            text: "Click it, press Space when it has focus, or click the text of its label.",
          },
          {
            label: "Hover:",
            text: "An unchecked box's outline brightens to the main text color.",
          },
          {
            label: "Focus:",
            text: "Keyboard focus draws a 2px outline, 2px away from the box. A mouse click doesn't show it.",
          },
          {
            label: "Disabled:",
            text: "It doesn't toggle, doesn't react to hover, and shows a not-allowed cursor.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Real semantics:",
            text: "It is announced as a checkbox with its checked state, and as mixed when indeterminate.",
          },
          {
            label: "Always name it:",
            text: (
              <>
                A box needs text. Wrap it in a Label, or give it an <code>aria-label</code> as the
                bare boxes in the demo do.
              </>
            ),
          },
          {
            label: "Target size:",
            text: "The box alone is 20px, under the 24px minimum of WCAG 2.2 AA. Wrapped in a Label, the whole row is the target, so do that.",
          },
        ],
      }}
    />
  );
}
