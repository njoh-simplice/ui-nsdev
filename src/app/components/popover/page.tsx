import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import PopoverDemo from "@content/components/popover/demo";
import { meta } from "@content/components/popover/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A popover is a small floating panel that opens from a button. It holds a bit more than a tooltip can, such as a short explanation, a few settings or a form."
      demo={<PopoverDemo />}
      demoPath="content/components/popover/demo.tsx"
      sourcePath="src/components/ui/popover.tsx"
      props={[
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "On PopoverContent. Which side of the trigger it opens on. It flips to the other side if there is no room.",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "On PopoverContent. How it lines up along that side.",
        },
        {
          name: "sideOffset",
          type: "number",
          default: "8",
          description: "On PopoverContent. The gap in pixels between the trigger and the popover.",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          default: "false",
          description: "Starts the popover open, when it manages its own state.",
        },
        {
          name: "open",
          type: "boolean",
          description: "Whether it is open, when you control it yourself.",
        },
        {
          name: "onOpenChange",
          type: "function",
          description: "Called with the new open state.",
        },
        {
          name: "render",
          type: "element",
          description: "On PopoverTrigger and PopoverClose. Uses your own element, such as a Button, instead of a plain button.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Popover underneath. PopoverTitle and PopoverDescription name the panel for screen readers."
      thinking={{
        intro:
          "A popover is for something small that belongs to one control and shouldn't take over the page. It stays out of the way until asked.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI places the panel next to the trigger, flips it when there is no room, and handles the open state, the focus and the dismissal.",
          },
          {
            label: "Popover or Dialog:",
            text: "A popover sits beside its trigger and leaves the page usable. A Dialog covers the page and asks for full attention.",
          },
          {
            label: "Popover or Tooltip:",
            text: "A tooltip is a label that appears on hover. A popover opens on click and can hold buttons, links and fields.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Surface:",
            text: "The shared overlay surface: the surface fill, a strong hairline, the lg radius of 8px and a soft shadow. No arrow.",
          },
          {
            label: "Width:",
            text: "Fixed at 18rem, so every popover on the site feels like the same object.",
          },
          {
            label: "Text:",
            text: "A semibold title and a dimmer description, in the same rhythm as a Dialog.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Open:",
            text: "Click the trigger, or press Enter or Space when it has focus.",
          },
          {
            label: "Close:",
            text: "Escape, a click outside, or a PopoverClose button.",
          },
          {
            label: "Focus:",
            text: "Focus moves into the panel when it opens and returns to the trigger when it closes.",
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
            label: "State is announced:",
            text: "The trigger reports whether the popover is open.",
          },
          {
            label: "Named:",
            text: "The panel is named by its title and described by its description. Always include a PopoverTitle.",
          },
          {
            label: "Don't hide required steps:",
            text: "Anything people must do should be on the page, not behind a click.",
          },
        ],
      }}
    />
  );
}
