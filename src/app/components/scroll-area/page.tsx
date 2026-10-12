import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ScrollAreaDemo from "@content/components/scroll-area/demo";
import { meta } from "@content/components/scroll-area/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A scroll area is a fixed-size region whose content scrolls inside it. Its scrollbars follow the theme instead of changing with each browser and system."
      demo={<ScrollAreaDemo />}
      demoPath="content/components/scroll-area/demo.tsx"
      sourcePath="src/components/ui/scroll-area.tsx"
      props={[
        {
          name: "className",
          type: "string",
          description: "Give the area a size with it, such as h-56 w-48. Without a size it grows to fit its content and nothing scrolls.",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "The content that scrolls. It can be taller, wider or both.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI ScrollArea underneath."
      thinking={{
        intro:
          "Scrolling inside a box is sometimes the right call: a long list in a side panel, a row of cards, a code listing. The box needs to say that it scrolls.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI draws its own scrollbars over a native scrolling viewport. The scrolling itself is the browser's, so wheel, touch, momentum and keyboard all behave as people expect.",
          },
          {
            label: "Both directions:",
            text: "A vertical and a horizontal scrollbar are built in. Each one only appears when the content overflows in that direction.",
          },
          {
            label: "Same look everywhere:",
            text: "Native scrollbars differ between Windows, macOS and each browser. These are the same thick and the same color everywhere.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Border:",
            text: "A hairline border and the lg radius, so the edge of the area is clear.",
          },
          {
            label: "Quiet scrollbars:",
            text: "They are invisible until you hover the area or scroll it, then fade in. The thumb is a rounded bar in the secondary text color.",
          },
          {
            label: "Padding:",
            text: "The area has none. Put padding on the content inside, so the scrollbar can sit at the edge.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Scroll:",
            text: "Use the mouse wheel, a trackpad, touch, or drag the thumb.",
          },
          {
            label: "Keyboard:",
            text: "The area takes focus with Tab and shows a ring. The arrow keys, Page Up, Page Down, Home and End then scroll it.",
          },
          {
            label: "Motion:",
            text: "The scrollbars fade in over 150ms. With reduced motion turned on they appear at once.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Reachable by keyboard:",
            text: "Without focus a keyboard user can't scroll a box. That is why the area itself is a tab stop.",
          },
          {
            label: "Show that there is more:",
            text: "Because scrollbars are hidden at rest, let content run past the edge, or cut it off mid-row, so people see there is more to scroll to.",
          },
          {
            label: "Use sparingly:",
            text: "A scroll inside a page that also scrolls can trap a wheel or a thumb. Prefer the page for long content.",
          },
        ],
      }}
    />
  );
}
