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
          description: "The diameter: 28px, 36px or 48px.",
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
            text: "Round at 28, 36 or 48px, with a 14, 16 or 20px plus, inside a 3px ring.",
          },
          {
            label: "Closed:",
            text: "A surface fill with a 3px ring and a plus, both in the secondary text color. The plus is 3.9:1 against the fill.",
          },
          {
            label: "Open:",
            text: "The fill changes to the accent, the ring and the icon to the page color (14.6:1 against the accent), and the plus turns 45 degrees into a cross.",
          },
          {
            label: "Made for images:",
            text: "The dark fill stands out on a light photo and the ring keeps it from disappearing on the dark page.",
          },
          {
            label: "Disabled:",
            text: "A quieter ring and a muted icon.",
          },
          {
            label: "Your own colors:",
            text: (
              <>
                Set <code>--marker-fill</code> and <code>--marker-ink</code> (the ring and the
                icon) for the closed marker, <code>--marker-hover-fill</code> for hover, and{" "}
                <code>--marker-open-fill</code> and <code>--marker-open-ink</code> for the open
                one, on the marker or on any parent. Each one you leave out keeps the colors above.
                Product Hotspot dresses the marker in wine and white smoke this way.
              </>
            ),
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
            text: "A closed marker lightens its fill to the border color and brightens the plus to the main text color. An open one softens its accent fill to 85%.",
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
            text: "Even the 28px size clears the 24px minimum of WCAG 2.2 AA.",
          },
        ],
      }}
    />
  );
}
