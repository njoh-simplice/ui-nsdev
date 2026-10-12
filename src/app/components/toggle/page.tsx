import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ToggleDemo from "@content/components/toggle/demo";
import { meta } from "@content/components/toggle/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A toggle is a button that stays pressed until it is pressed again. Use it for something like bold or mute that someone switches on and off."
      demo={<ToggleDemo />}
      demoPath="content/components/toggle/demo.tsx"
      sourcePath="src/components/ui/toggle.tsx"
      props={[
        {
          name: "size",
          type: "default | icon",
          default: "default",
          description: (
            <>
              <code>icon</code> makes a square toggle for an icon with no label.
            </>
          ),
        },
        {
          name: "defaultPressed",
          type: "boolean",
          default: "false",
          description: "Whether it starts pressed, when you let it manage its own state.",
        },
        {
          name: "pressed",
          type: "boolean",
          description: "Whether it is pressed, when you control it yourself.",
        },
        {
          name: "onPressedChange",
          type: "function",
          description: "Called with the new value when the toggle is pressed.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns the toggle off.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the toggle's own.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Toggle underneath."
      thinking={{
        intro:
          "A toggle sits between a button and a switch: it looks like a button, and it remembers whether it is on.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It reports its pressed state to assistive tech, and is operated with the keyboard like any button.",
          },
          {
            label: "Match Button:",
            text: "The same height, radius, text size and press animation as Button, so the two sit side by side in a toolbar.",
          },
          {
            label: "Choose by effect:",
            text: "A toggle suits an action that shows its state on a button face, like Bold. For a setting in a list, use a switch.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "36px tall with 16px of side padding. The icon toggle is a 36px square. Corners use the md radius, 6px.",
          },
          {
            label: "Off:",
            text: "A 1px outline in the secondary text color and the main text color for the label.",
          },
          {
            label: "Pressed:",
            text: "An accent outline, a 10% accent fill and an accent label, 14.6:1 against the page.",
          },
          {
            label: "Disabled:",
            text: "A surface fill and a quiet label. A disabled toggle that is pressed looks the same as one that isn't.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Press it:",
            text: "Click it, or press Enter or Space when it has focus. Each press flips it.",
          },
          {
            label: "Hover:",
            text: "An unpressed toggle gets a 10% wash. A pressed one deepens its accent fill to 20%.",
          },
          {
            label: "While you press:",
            text: "The toggle shrinks slightly, to 97%, over 150ms. People who ask for reduced motion don't get the shrink.",
          },
          {
            label: "Focus and disabled:",
            text: "Keyboard focus draws a 2px outline, 2px away. A disabled toggle doesn't react to hover or press.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced:",
            text: "A screen reader says it is a toggle button and whether it is pressed.",
          },
          {
            label: "Keep the name fixed:",
            text: (
              <>
                Don&apos;t change the label when it is pressed. Bold stays Bold, and the pressed
                state tells people it is on. Give icon toggles an <code>aria-label</code>, as the
                demo does.
              </>
            ),
          },
          {
            label: "Color isn't the only signal:",
            text: "The pressed look is a color change, so the pressed state carries the information for anyone who can't see it.",
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
