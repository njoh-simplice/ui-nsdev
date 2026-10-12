import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import DialogDemo from "@content/components/dialog/demo";
import { meta } from "@content/components/dialog/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A dialog is a window that opens over the page and asks for focus. Use it for a task that is better done in one place, away from everything else."
      demo={<DialogDemo />}
      demoPath="content/components/dialog/demo.tsx"
      sourcePath="src/components/ui/dialog.tsx"
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
          description: "On DialogTrigger and DialogClose. Uses your own element, such as a Button, instead of a plain button.",
        },
      ]}
      propsNote="Every other prop goes to the Base UI Dialog underneath. Always give the dialog a DialogTitle."
      thinking={{
        intro:
          "A dialog interrupts, so it has to be worth it. It is for a self-contained job: edit a profile, confirm a choice, read something before going on.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI holds focus inside, restores it when the dialog closes, locks the page behind and closes on Escape.",
          },
          {
            label: "Parts:",
            text: "DialogContent is the window with its backdrop and close button. DialogHeader, DialogTitle, DialogDescription and DialogFooter lay out the inside.",
          },
          {
            label: "Dialog or Alert Dialog:",
            text: "A dialog can be dismissed by clicking outside or with the corner button. If the question has to be answered, use an Alert Dialog.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Backdrop:",
            text: "Black at 60%, so the page is still there but clearly out of reach.",
          },
          {
            label: "Window:",
            text: "The shared overlay surface, centered, 28rem wide and never wider than the screen minus a 16px margin on each side.",
          },
          {
            label: "Footer:",
            text: "Actions sit on the right on desktop. On a phone they stack, with the main action at the bottom under the thumb.",
          },
          {
            label: "Close button:",
            text: "An icon-only button in the top corner, for people who want out.",
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
            text: "Focus moves into the dialog and Tab stays inside it. When the dialog closes, focus goes back to the trigger.",
          },
          {
            label: "Close:",
            text: "Escape, the corner button, a click on the backdrop, or a DialogClose button.",
          },
          {
            label: "Scroll:",
            text: "The page behind does not scroll while the dialog is open.",
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
            label: "Named:",
            text: "The dialog is announced with its title and described by its description.",
          },
          {
            label: "Nothing behind is reachable:",
            text: "Screen reader and keyboard users can't wander into the page underneath.",
          },
          {
            label: "Always a way out:",
            text: "Escape and the close button are both there, and Cancel sits next to the main action.",
          },
          {
            label: "Keep it short:",
            text: "On a small screen a long dialog scrolls badly. If it needs a whole page, make it a page.",
          },
        ],
      }}
    />
  );
}
