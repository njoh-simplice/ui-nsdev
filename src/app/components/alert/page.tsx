import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import AlertDemo from "@content/components/alert/demo";
import { meta } from "@content/components/alert/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="An alert is a message that stays in the page: a note, a success, a warning or an error."
      demo={<AlertDemo />}
      demoPath="content/components/alert/demo.tsx"
      sourcePath="src/components/ui/alert.tsx"
      props={[
        {
          name: "variant",
          type: "default | success | warning | destructive",
          default: "default",
          description: "The tone of the message. It sets the color, the icon and how it is announced.",
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the alert's own.",
        },
      ]}
      propsNote="Alert, AlertTitle and AlertDescription are plain divs, so they take every normal prop."
      thinking={{
        intro: "An alert should say one thing, say how serious it is, and stay out of the way.",
        notes: [
          {
            label: "The icon says the tone:",
            text: "Each tone has its own icon, so the tone isn't carried by color alone.",
          },
          {
            label: "Quiet color:",
            text: "A soft wash and a full-strength icon, never a solid fill. This is the low-emphasis pattern from Theming.",
          },
          {
            label: "Static, not a toast:",
            text: "An alert sits in the page and stays. A message that appears and then fades away is a different component, a toast, which isn't built yet.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Box:",
            text: "A 1px border, 16px of padding and the lg radius, 8px. The default is the surface fill with a hairline border.",
          },
          {
            label: "Tones:",
            text: "Success, warning and destructive use a 10% fill and a 30% border in the tone's color.",
          },
          {
            label: "Icon:",
            text: "20px, in the tone's full-strength color, to the left of the text.",
          },
          {
            label: "Text:",
            text: "The title is 16px semibold. The description is 14px, in the main text color at 70%.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not interactive:",
            text: "An alert has no hover, focus or pressed state. Put a link or a Button inside it if it needs an action.",
          },
          {
            label: "How it is announced:",
            text: "A destructive alert is announced at once, as an alert. The others are announced politely, as a status.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Words, not just color:",
            text: "Write a title that says what happened, like Payment failed, not just Error.",
          },
          {
            label: "Contrast:",
            text: "The title is 13 to 15:1 against its tinted background, the description is above 7:1, and the icons are between 5:1 and 12:1.",
          },
          {
            label: "Don't over-announce:",
            text: "Only the destructive tone interrupts a screen reader. Keep it for something that needs attention now.",
          },
        ],
      }}
    />
  );
}
