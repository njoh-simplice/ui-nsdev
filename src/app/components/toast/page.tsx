import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ToastDemo from "@content/components/toast/demo";
import { meta } from "@content/components/toast/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A toast is a short message that slides in at the corner of the screen and leaves by itself. It confirms what just happened without getting in the way."
      demo={<ToastDemo />}
      demoPath="content/components/toast/demo.tsx"
      sourcePath="src/components/ui/toast.tsx"
      props={[
        {
          name: "title",
          type: "string",
          description: "In add(). The main line of the toast.",
        },
        {
          name: "description",
          type: "string",
          description: "In add(). A second, dimmer line with the details.",
        },
        {
          name: "type",
          type: '"success" | "error"',
          description: "In add(). Tints the border green or red. Leave it out for a plain toast.",
        },
        {
          name: "timeout",
          type: "number",
          default: "5000",
          description: "In add(). Milliseconds before it goes away by itself.",
        },
        {
          name: "actionProps",
          type: "object",
          description: "In add(). Adds a button, such as Undo, to the toast. Give it children for the label and onClick for what it does.",
        },
      ]}
      propsNote="Toasts are created with useToast().add({ ... }), from any client component inside the ToastProvider. This site mounts one in the root layout."
      thinking={{
        intro:
          "Some feedback is too small for a dialog and too important to lose. A toast says it, then gets out of the way.",
        notes: [
          {
            label: "Built on Base UI:",
            text: "Base UI keeps the list of toasts, runs each one's timer, pauses the timers while a toast is hovered or focused, and announces new toasts to screen readers.",
          },
          {
            label: "One provider:",
            text: "ToastProvider goes once, high in the app. After that any client component can call add() without passing anything down.",
          },
          {
            label: "Toast or Alert:",
            text: "A toast is temporary and about something that just happened. An Alert stays in the page for a state that is still true.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Corner:",
            text: "Bottom right, away from the content, and stretched across the width of a phone with a 16px margin.",
          },
          {
            label: "Surface:",
            text: "The shared overlay surface. Success and error toasts tint the border green or red, and the words still carry the meaning.",
          },
          {
            label: "Above a dialog:",
            text: "Toasts sit above dialogs, so a message is still visible while one is open.",
          },
          {
            label: "Close button:",
            text: "A small icon button in the corner, for people who want it gone now.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Appear and leave:",
            text: "Each toast fades and slides up in 200ms, stays for five seconds, then fades out. With reduced motion turned on it appears and leaves at once.",
          },
          {
            label: "Pause:",
            text: "While the pointer is over a toast, or it has focus, its timer is paused, so there is time to read it or reach its button.",
          },
          {
            label: "Dismiss:",
            text: "The close button removes it at once.",
          },
          {
            label: "Action:",
            text: "An action button such as Undo runs its function. Use it for what the person might regret.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced:",
            text: "New toasts are announced by screen readers without moving focus away from what the person is doing.",
          },
          {
            label: "Enough time:",
            text: "Five seconds is for short messages. Pausing on hover and focus gives slower readers more time.",
          },
          {
            label: "Don't hold what matters:",
            text: "A toast can be missed. Errors that block progress should also show in the page, next to the thing that failed.",
          },
        ],
      }}
    />
  );
}
