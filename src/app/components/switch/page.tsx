import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SwitchDemo from "@content/components/switch/demo";
import { meta } from "@content/components/switch/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A switch turns a setting on or off, and takes effect straight away. It can also be disabled, on or off."
      demo={<SwitchDemo />}
      demoPath="content/components/switch/demo.tsx"
      sourcePath="src/components/ui/switch.tsx"
      props={[
        {
          name: "defaultChecked",
          type: "boolean",
          default: "false",
          description: "Whether it starts on, when you let it manage its own state.",
        },
        {
          name: "checked",
          type: "boolean",
          description: "Whether it is on, when you control it yourself.",
        },
        {
          name: "onCheckedChange",
          type: "function",
          description: "Called with the new value when the switch is flipped.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Turns the switch off. It keeps showing which way it was set.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the switch's own.",
        },
      ]}
      propsNote="Every other prop, such as name, goes to the Base UI Switch underneath."
      thinking={{
        intro:
          "A switch and a checkbox look alike but promise different things, and the difference matters to the person using them.",
        notes: [
          {
            label: "Immediate or later:",
            text: "Use a switch for a setting that applies the moment it flips, like Wi-Fi. Use a checkbox for a choice that is submitted later with a form.",
          },
          {
            label: "Built on Base UI:",
            text: "It is announced as a switch, with the on or off state, and flips with the keyboard.",
          },
          {
            label: "Green means on:",
            text: "The accent fills the track when the switch is on, so the state reads at a glance.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "A pill 44px wide and 24px tall, with a 20px thumb.",
          },
          {
            label: "Off:",
            text: "The strong border color for the track and a light thumb, 8.2:1 against the track.",
          },
          {
            label: "On:",
            text: "An accent track and a dark thumb, 14.6:1 against it.",
          },
          {
            label: "Disabled:",
            text: "A flat track with a hairline edge and a grey thumb. The thumb still sits left or right, so you can see how it is set.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Flip it:",
            text: "Click it, click its label's text, or press Space when it has focus.",
          },
          {
            label: "Motion:",
            text: "The thumb slides across and the track changes color over 150ms.",
          },
          {
            label: "Focus:",
            text: "Keyboard focus draws a 2px outline, 2px away from the pill.",
          },
          {
            label: "Disabled:",
            text: "It doesn't flip, and shows a not-allowed cursor.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Name the setting, not the state:",
            text: "Label it Wi-Fi, not On. The switch itself already says whether it is on.",
          },
          {
            label: "Announced:",
            text: "A screen reader says the label, that it is a switch, and whether it is on or off.",
          },
          {
            label: "Don't rely on color:",
            text: "The thumb's position shows the state as well as the track color.",
          },
          {
            label: "Target size:",
            text: "44px wide and 24px tall, which meets the 24px minimum of WCAG 2.2 AA.",
          },
        ],
      }}
    />
  );
}
