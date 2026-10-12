import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import FieldDemo from "@content/components/field/demo";
import { meta } from "@content/components/field/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A field joins a label, a control, a hint and an error message, and keeps them connected for assistive tech. A fieldset groups related controls under one name."
      demo={<FieldDemo />}
      demoPath="content/components/field/demo.tsx"
      sourcePath="src/components/ui/field.tsx"
      props={[
        {
          name: "name",
          type: "string",
          description: "On Field. The name of the control, used when the field is part of a form.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On Field. Disables the control and dims the label.",
        },
        {
          name: "invalid",
          type: "boolean",
          description: "On Field. Marks the control invalid yourself, instead of waiting for validation.",
        },
        {
          name: "validationMode",
          type: "onSubmit | onBlur | onChange",
          default: "onSubmit",
          description: "On Field. When the control is checked: on submit, when focus leaves, or on every change.",
        },
        {
          name: "match",
          type: "string | boolean",
          description: (
            <>
              On FieldError. Which problem it is for, such as <code>valueMissing</code> or{" "}
              <code>typeMismatch</code>, or <code>true</code> to show it for any.
            </>
          ),
        },
        {
          name: "render",
          type: "element",
          description: (
            <>
              On FieldControl. The control to connect, such as <code>{"<Textarea />"}</code>.
            </>
          ),
        },
      ]}
      propsNote="Field, FieldLabel, FieldDescription, FieldError, Fieldset and FieldsetLegend pass every other prop to the matching Base UI part."
      thinking={{
        intro:
          "Every form control needs a name, a hint when the rule isn't obvious, and a clear message when it goes wrong. A field keeps those three attached to the control.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI links the label to the control and ties the hint and the error to it, so none of that wiring is written by hand.",
          },
          {
            label: "Input just works:",
            text: "Put an Input inside a Field and it connects on its own. For another control, such as a Textarea, render it through FieldControl.",
          },
          {
            label: "Fieldset for groups:",
            text: "When several controls answer one question, like a set of checkboxes, wrap them in a Fieldset with a legend.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Layout:",
            text: "A column with 8px between the label, the control and the message under it.",
          },
          {
            label: "Label:",
            text: "16px medium in the main text color. It dims when the field is disabled.",
          },
          {
            label: "Hint and error:",
            text: "Both 14px. The hint is the main text color at 70%, 7.9:1 against the page. The error is the danger color, 5.5:1.",
          },
          {
            label: "Legend:",
            text: "16px semibold, above the grouped controls.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Label click:",
            text: "Clicking a field's label focuses its control.",
          },
          {
            label: "Validation timing:",
            text: "The Email field checks itself when focus leaves it, once you have typed in it. Type something that isn't an email, or type and then delete it, and the matching error appears. Fix it and the error goes away. A field you haven't typed in doesn't complain when you tab past it.",
          },
          {
            label: "Invalid state:",
            text: "While an error shows, the control gets the danger border.",
          },
          {
            label: "Disabled:",
            text: "The control can't be focused or edited, and the label dims.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Connected, not just near:",
            text: (
              <>
                The hint and the error are tied to the control with <code>aria-describedby</code>,
                so a screen reader reads them with the field and not as stray text.
              </>
            ),
          },
          {
            label: "Say how to fix it:",
            text: "Write an error that tells people what to do, like Enter your email address, not just Invalid.",
          },
          {
            label: "A group has a name:",
            text: "A Fieldset is a native fieldset named by its legend, so a screen reader announces Notify me about as the name of the group of checkboxes.",
          },
        ],
      }}
    />
  );
}
