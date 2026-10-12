import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import TabsDemo from "@content/components/tabs/demo";
import { meta } from "@content/components/tabs/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="Tabs split related content into panels and show one at a time. The row of tabs stays in place, so people always know where they are and where else they can go."
      demo={<TabsDemo />}
      demoPath="content/components/tabs/demo.tsx"
      sourcePath="src/components/ui/tabs.tsx"
      props={[
        {
          name: "defaultValue",
          type: "string",
          description: "The value of the tab that starts selected, when the tabs manage their own state.",
        },
        {
          name: "value",
          type: "string",
          description: "The selected tab, when you control it yourself.",
        },
        {
          name: "onValueChange",
          type: "function",
          description: "Called with the value of the newly selected tab.",
        },
        {
          name: "value",
          type: "string",
          description: "On each TabsTrigger and TabsContent. It ties a tab to its panel. Required.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "On a TabsTrigger. Makes that tab impossible to select.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Tabs underneath."
      thinking={{
        intro:
          "Tabs are for content that belongs together but is never read together. Each panel stands on its own, and switching is cheap.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI links each tab to its panel, selects tabs with the keyboard, and reports the position of the active tab so the indicator can slide to it.",
          },
          {
            label: "Four parts:",
            text: "Tabs holds the state, TabsList is the row, TabsTrigger is one tab and TabsContent is its panel.",
          },
          {
            label: "Tabs or Accordion:",
            text: "Tabs show one panel in a fixed place. An Accordion stacks sections so people can open several and read down the page.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Underline:",
            text: "The row sits on a hairline, and the selected tab has a 2px accent line over it. Accent green is part of the component, so it shows here too.",
          },
          {
            label: "Selected:",
            text: "The selected tab uses the main text color and the others use the secondary one, so the state doesn't depend on the line alone.",
          },
          {
            label: "Disabled:",
            text: "A disabled tab is dimmed to half and shows the not-allowed cursor.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Select:",
            text: "Click a tab. The accent line slides to it in 150ms.",
          },
          {
            label: "Keyboard:",
            text: "The row is one stop in the tab order. The left and right arrows move focus between tabs, and Home and End jump to the first and last. Enter or Space selects the focused tab. A disabled tab can still be focused, so it can be found, but it can't be selected.",
          },
          {
            label: "Hover:",
            text: "An unselected tab brightens under the pointer.",
          },
          {
            label: "Motion:",
            text: "With reduced motion turned on the line jumps instead of sliding.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Roles:",
            text: "The row is announced as a tab list, each tab reports whether it is selected, and each panel is labeled by its tab.",
          },
          {
            label: "Panels can be focused:",
            text: "After the tabs, Tab moves into the panel, which shows a focus ring, so keyboard users can reach content that has nothing focusable in it.",
          },
          {
            label: "Keep labels short:",
            text: "One or two words fit on a phone. The row scrolls sideways if it ever runs out of room.",
          },
        ],
      }}
    />
  );
}
