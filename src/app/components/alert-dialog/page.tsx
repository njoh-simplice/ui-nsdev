import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import AlertDialogDemo from "@content/components/alert-dialog/demo";
import { meta } from "@content/components/alert-dialog/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="An alert dialog stops everything to ask one question. Use it before something that can't be undone, when a wrong click would cost the person real work."
      demo={<AlertDialogDemo />}
      demoPath="content/components/alert-dialog/demo.tsx"
      sourcePath="src/components/ui/alert-dialog.tsx"
      props={[
        {
          name: "defaultOpen",
          type: "boolean",
          default: "false",
          description: "Starts the dialog open, when it manages its own state.",
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
          description: "On AlertDialogTrigger and AlertDialogClose. Uses your own element, such as a Button, instead of a plain button.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI AlertDialog underneath. Give it an AlertDialogTitle and an AlertDialogDescription."
      thinking={{
        intro:
          "Most dialogs can be waved away. This one can't, on purpose: the person has to choose an answer.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI marks it as an alert dialog, holds focus inside, restores it on close and locks the page behind.",
          },
          {
            label: "Different from a Dialog:",
            text: "Clicking the backdrop does nothing and there is no corner button. Escape, Cancel or the main action are the ways out.",
          },
          {
            label: "Say what will happen:",
            text: "Title it as a question and name the consequence in the description. The buttons repeat the verb, like Delete account, rather than OK.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Same window:",
            text: "The same surface, backdrop and size as a Dialog, so the two feel like one family.",
          },
          {
            label: "Destructive action:",
            text: "When the answer can't be undone, the main button is the destructive one, in red. Cancel is the secondary button next to it.",
          },
          {
            label: "No corner button:",
            text: "The only choices are in the footer, where the eyes are already reading.",
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
            label: "Focus:",
            text: "Focus moves into the dialog and Tab stays inside it. When it closes, focus goes back to the trigger.",
          },
          {
            label: "Close:",
            text: "Escape, Cancel, or the main action. A click on the backdrop does not close it.",
          },
          {
            label: "Motion:",
            text: "A 150ms fade, with a small scale on the window. With reduced motion turned on it appears at once.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced as an alert:",
            text: "Screen readers announce it right away, with its title and description.",
          },
          {
            label: "Easy to back out:",
            text: "Escape and Cancel always work, so a dialog opened by mistake costs nothing.",
          },
          {
            label: "Use it rarely:",
            text: "If every action asks for confirmation, people click through without reading. Keep it for what can't be undone, and offer Undo for the rest.",
          },
        ],
      }}
    />
  );
}
