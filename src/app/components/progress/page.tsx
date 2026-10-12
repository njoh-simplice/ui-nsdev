import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ProgressDemo from "@content/components/progress/demo";
import { meta } from "@content/components/progress/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A progress bar shows how far a task has got, or that it is still working that out."
      demo={<ProgressDemo />}
      demoPath="content/components/progress/demo.tsx"
      sourcePath="src/components/ui/progress.tsx"
      props={[
        {
          name: "value",
          type: "number | null",
          description: (
            <>
              How far along it is, from 0 to 100. <code>null</code> means it doesn&apos;t know yet.
            </>
          ),
        },
        {
          name: "label",
          type: "string",
          description: "A visible name, shown above the bar on the left.",
        },
        {
          name: "showValue",
          type: "boolean",
          default: "false",
          description: "Shows the value as a percentage above the bar on the right.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the progress bar's own.",
        },
      ]}
      propsNote="Every other prop, such as min, max and aria-label, goes to the Base UI Progress underneath."
      thinking={{
        intro:
          "A progress bar is a promise about time, so it should never promise more than it knows.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It exposes the progressbar role and its current value for assistive tech, and formats the percentage for you.",
          },
          {
            label: "Unknown is a state:",
            text: (
              <>
                Pass <code>null</code> when you can&apos;t tell how long it will take. The bar
                slides across instead of showing a number that would be a guess.
              </>
            ),
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Track:",
            text: "8px tall and fully rounded, in the strong border color. The fill is the accent, 7.7:1 against the track.",
          },
          {
            label: "Label and value:",
            text: "Above the bar. The label is on the left in the main text color, the value on the right in the secondary color, with numerals of equal width so it doesn't jitter.",
          },
          {
            label: "Indeterminate:",
            text: "A bar one third of the track's width, sliding across in 1.4 seconds, over and over.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not a control:",
            text: "A progress bar has no hover, focus or pressed state.",
          },
          {
            label: "Changing value:",
            text: "When the value changes, the fill grows or shrinks over 500ms.",
          },
          {
            label: "Reduced motion:",
            text: "For people who ask their system for less motion, the indeterminate bar stays still.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced:",
            text: "Assistive tech reads the label and the current value. An indeterminate bar reports no value.",
          },
          {
            label: "Name it:",
            text: (
              <>
                Give every bar a name, either the visible <code>label</code> or an{" "}
                <code>aria-label</code>, as the first bar in the demo does.
              </>
            ),
          },
          {
            label: "Numbers help:",
            text: "The fill shows progress by length alone. Turn on showValue when the exact figure matters.",
          },
        ],
      }}
    />
  );
}
