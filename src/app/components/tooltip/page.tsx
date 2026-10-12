import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import TooltipDemo from "@content/components/tooltip/demo";
import { meta } from "@content/components/tooltip/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A tooltip is a short label that appears next to an element when you hover or focus it. It names things that have no room for a visible label, like icon buttons."
      demo={<TooltipDemo />}
      demoPath="content/components/tooltip/demo.tsx"
      sourcePath="src/components/ui/tooltip.tsx"
      props={[
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"top"',
          description: "On TooltipContent. Which side of the trigger it opens on. It flips to the other side if there is no room.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "On TooltipContent. How it lines up along that side.",
        },
        {
          name: "sideOffset",
          type: "number",
          default: "6",
          description: "On TooltipContent. The gap in pixels between the trigger and the tooltip.",
        },
        {
          name: "delay",
          type: "number",
          default: "600",
          description: "On TooltipTrigger. Milliseconds to wait after hovering before it opens.",
        },
        {
          name: "closeDelay",
          type: "number",
          default: "0",
          description: "On TooltipTrigger. Milliseconds to wait after leaving before it closes.",
        },
        {
          name: "render",
          type: "element",
          description: "On TooltipTrigger. Puts the tooltip on your own element, such as a Button, instead of a plain button.",
        },
      ]}
      propsNote="Wrap the part of the page that has tooltips in a TooltipProvider. Every other prop goes to the Base UI Tooltip underneath."
      thinking={{
        intro:
          "A tooltip adds one thing: a name. If it needs a sentence, a button or a link, use a Popover instead.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI handles the hover delay, the keyboard focus, the collision-aware placement and the Escape key.",
          },
          {
            label: "Provider:",
            text: "Inside a TooltipProvider, once one tooltip has opened the next ones open without the delay. Sliding along a toolbar feels quick instead of sticky.",
          },
          {
            label: "Your own trigger:",
            text: "Pass render to put the tooltip on a Button, as the demo does. The button keeps its own look and behavior.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Small:",
            text: "Small text, snug padding, the shared overlay surface and no arrow. The gap to the trigger is enough to show what it belongs to.",
          },
          {
            label: "Shortcuts:",
            text: "A Kbd can sit after the label to show the shortcut, as in the Save example.",
          },
          {
            label: "Above everything:",
            text: "It floats above the page and the sticky header.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Hover:",
            text: "It opens after a short pause, so moving the pointer across a toolbar doesn't flash tooltips.",
          },
          {
            label: "Focus:",
            text: "It opens at once when the trigger receives keyboard focus.",
          },
          {
            label: "Dismiss:",
            text: "Escape, moving the pointer away, moving focus away or clicking the trigger closes it.",
          },
          {
            label: "Motion:",
            text: "A 150ms fade and a small scale from the side it opens from. With reduced motion turned on it appears at once.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Not the only label:",
            text: (
              <>
                A tooltip doesn&apos;t appear on touch screens. An icon-only button still needs its own{" "}
                <code>aria-label</code>, as the demo does.
              </>
            ),
          },
          {
            label: "Keyboard users see it:",
            text: "It opens on focus, not only on hover.",
          },
          {
            label: "Don't hide what matters:",
            text: "Use a tooltip to repeat or sharpen a name, never to hold information people need to finish a task.",
          },
        ],
      }}
    />
  );
}
