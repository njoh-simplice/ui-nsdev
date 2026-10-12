import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SliderDemo from "@content/components/slider/demo";
import { meta } from "@content/components/slider/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A slider picks a number, or a range of two, by dragging or with the keyboard."
      demo={<SliderDemo />}
      demoPath="content/components/slider/demo.tsx"
      sourcePath="src/components/ui/slider.tsx"
      props={[
        {
          name: "label",
          type: "string",
          description:
            'Required. The name of what the slider controls. A range adds "minimum" and "maximum" to it.',
        },
        {
          name: "defaultValue",
          type: "number | number[]",
          description: "The starting value. An array of two makes a range with two thumbs.",
        },
        {
          name: "value",
          type: "number | number[]",
          description: "The value, when you control it yourself.",
        },
        {
          name: "min, max, step",
          type: "number",
          default: "0, 100, 1",
          description: "The smallest and largest value, and the size of one step.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns the slider off.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the slider's own.",
        },
      ]}
      propsNote="Every other prop, such as onValueChange, goes to the Base UI Slider underneath."
      thinking={{
        intro:
          "A slider is for a value where roughly right is good enough, like volume. For an exact number, an input is better.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It handles dragging, clicking the track, keyboard steps and the value itself. This file draws the track and thumb.",
          },
          {
            label: "A range is an array:",
            text: (
              <>
                Pass <code>[20, 70]</code> and you get two thumbs and a filled stretch between
                them. A single number gives one thumb.
              </>
            ),
          },
          {
            label: "Every thumb has a name:",
            text: "The label is required, so a slider can't be shipped without one.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Track:",
            text: "6px tall and fully rounded, in the strong border color. The filled part is the accent, 7.7:1 against the track.",
          },
          {
            label: "Thumb:",
            text: "A 20px circle in the main text color.",
          },
          {
            label: "Disabled:",
            text: "The filled part and the thumb both turn grey.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Pointer:",
            text: "Drag the thumb, or click the track to jump there. The thumb grows slightly while it is being dragged, and the cursor becomes a closed hand.",
          },
          {
            label: "Keyboard:",
            text: "The arrow keys move one step, Home and End jump to the ends.",
          },
          {
            label: "Focus:",
            text: "The focused thumb draws a 2px outline, 2px away.",
          },
          {
            label: "Disabled:",
            text: "It can't be dragged or focused, and shows a not-allowed cursor.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced:",
            text: "Each thumb is read as a slider with its name, its value and its limits.",
          },
          {
            label: "No printed value:",
            text: "This slider doesn't show a number. If the exact value matters, show it in text next to the slider.",
          },
          {
            label: "Target size:",
            text: "The thumb is 20px, under the 24px minimum of WCAG 2.2 AA. The whole track also responds to a click, and the arrow keys give a precise alternative to dragging.",
          },
        ],
      }}
    />
  );
}
