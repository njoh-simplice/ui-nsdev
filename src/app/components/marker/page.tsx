import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import MarkerDemo from "@content/components/marker/demo";
import { meta } from "@content/components/marker/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A marker is a small round button pinned on something, usually a photo, that opens more about that spot. It shows a plus, and turns into a cross while it is open."
      demo={<MarkerDemo />}
      demoPath="content/components/marker/demo.tsx"
      sourcePath="src/components/ui/marker.tsx"
      props={[
        {
          name: "size",
          type: "sm | default | lg",
          default: "default",
          description: "The diameter: 32px, 44px or 60px.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns the marker off.",
        },
        {
          name: "aria-label",
          type: "string",
          description: "What the marker points at. It has no text, so it needs one.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the marker's own. Use them to position it.",
        },
      ]}
      propsNote={
        <>
          Every other prop goes to the Base UI Button underneath. To open something from a marker,
          pass it as the trigger&apos;s <code>render</code>, as the demo does with Popover.
        </>
      }
      thinking={{
        intro:
          "A marker only points. What it opens, and where, is up to the Popover, Hover Card or Tooltip you pair it with.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "It is a Base UI Button, so it works with the keyboard like any button and can be disabled.",
          },
          {
            label: "No state of its own:",
            text: (
              <>
                It reads whether it is open from <code>aria-expanded</code>, which a Popover trigger
                already sets. Pair it with anything that sets that attribute and it follows along.
              </>
            ),
          },
          {
            label: "Position it yourself:",
            text: "The marker doesn't place itself. Put it in a relatively positioned wrapper and offset it with a percentage, so it stays on the same spot as the image scales.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Sizes:",
            text: "Round at 32, 44 or 60px, with a 16, 20 or 24px plus. The 44px default matches a comfortable touch target.",
          },
          {
            label: "Closed:",
            text: "A surface fill with a strong hairline and a plus in the secondary text color, 3.9:1 against the fill.",
          },
          {
            label: "Open:",
            text: "The hairline and the icon switch to the main text color, and the plus turns 45 degrees into a cross.",
          },
          {
            label: "Made for images:",
            text: "The dark fill stands out on a light photo and the hairline keeps it from disappearing on the dark page.",
          },
          {
            label: "Disabled:",
            text: "A quieter hairline and a muted icon.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Press it:",
            text: "Click it, or press Enter or Space when it has focus.",
          },
          {
            label: "Hover:",
            text: "The fill lightens to the border color and the plus brightens to the main text color.",
          },
          {
            label: "Turning:",
            text: "The plus turns into a cross over 200ms, and back when what it opened closes.",
          },
          {
            label: "While you press:",
            text: "The marker shrinks slightly, to 95%, over 150ms. People who ask for reduced motion get neither the turn nor the shrink.",
          },
          {
            label: "Focus:",
            text: "Keyboard focus draws a 2px outline, 2px away, with a dark halo in the gap so it also shows on a light photo.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name every marker:",
            text: "An icon alone says nothing to a screen reader. Give each marker an aria-label that names its spot, like Handlebars, not Marker 1.",
          },
          {
            label: "Announced:",
            text: "Paired with a Popover, a screen reader hears that it is a button and whether it is expanded or collapsed.",
          },
          {
            label: "Not only a shape change:",
            text: "The cross is a shape, and the expanded state is announced, so no one depends on seeing the color change.",
          },
          {
            label: "Target size:",
            text: "Even the 32px size clears the 24px minimum of WCAG 2.2 AA.",
          },
        ],
      }}
    />
  );
}
