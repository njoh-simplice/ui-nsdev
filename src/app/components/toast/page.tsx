import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import ToastDemo from "@content/components/toast/demo";
import { meta } from "@content/components/toast/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A toast is a short message that slides in at the edge of the screen and leaves by itself. It confirms what just happened without getting in the way. The ten examples below cover the common cases."
      demo={<ToastDemo />}
      demoPath="content/components/toast/demo.tsx"
      sourcePath="src/components/ui/toast.tsx"
      props={[
        {
          name: "title",
          type: "ReactNode",
          description: "In add(). The main line of the toast. Text, or any element.",
        },
        {
          name: "description",
          type: "ReactNode",
          description: "In add(). A second, dimmer line with the details. Text, or any element.",
        },
        {
          name: "type",
          type: '"success" | "error" | "loading"',
          description:
            "In add(). Success and error add an icon and tint the border green or red. Loading shows a spinner and stays until it is updated or closed. Leave it out for a plain toast.",
        },
        {
          name: "timeout",
          type: "number",
          default: "5000",
          description: "In add(). Milliseconds before it goes away by itself. 0 keeps it until it is closed.",
        },
        {
          name: "id",
          type: "string",
          description: "In add(). A name for the toast, so you can close or update it later with close(id).",
        },
        {
          name: "actionProps",
          type: "object",
          description: "In add(). Adds a button, such as Undo, to the toast. Give it children for the label and onClick for what it does.",
        },
        {
          name: "data.icon",
          type: "ReactNode",
          description: "In add(). Replaces the icon of the type, or gives a plain toast one. An emoji or any icon element.",
        },
        {
          name: "data.position",
          type: "ToastPosition",
          default: '"bottom-right"',
          description: (
            <>
              In add(). Where the toast appears: <code>top-left</code>, <code>top-center</code>,{" "}
              <code>top-right</code>, <code>bottom-left</code>, <code>bottom-center</code> or{" "}
              <code>bottom-right</code>. Toasts in the same place stack.
            </>
          ),
        },
        {
          name: "data.tone",
          type: '"dark" | "themed"',
          description: "In add(). Dark puts the toast on the page background with a bright border. Themed gives it a soft accent wash.",
        },
        {
          name: "data.custom",
          type: "ReactNode",
          description: "In add(). Replaces the whole body with your own layout. Build it with ToastTitle and ToastDescription so it is still announced.",
        },
        {
          name: "promise",
          type: "function",
          description: (
            <>
              On <code>useToast()</code>. Call <code>promise(thePromise, {"{ loading, success, error }"})</code>{" "}
              to show a loading toast that turns into a success or an error toast when the promise
              settles. Each message is a string.
            </>
          ),
        },
      ]}
      propsNote="Toasts are created with useToast().add({ ... }) from any client component inside the ToastProvider. This site mounts one in the root layout. Every other option goes to the Base UI Toast underneath."
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
            label: "Ten examples:",
            text: "Success, error, promise, multi-line, emoji, dark, JSX content, themed, custom position and a fully custom layout. Each button in the demo is one of them, and its code is in the file below.",
          },
          {
            label: "Promise:",
            text: "For work that takes a moment, like saving. The toast shows a spinner while it waits and then becomes the result in place, so there is one toast and not two.",
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
            label: "Compact:",
            text: "An icon, then the text. Icons come from the icon library, tinted green for success and red for error, and a spinner for loading.",
          },
          {
            label: "Surface:",
            text: "The shared overlay surface. Success and error toasts tint the border, and the words and icon still carry the meaning.",
          },
          {
            label: "Places:",
            text: "Six places: the corners and the top and bottom middle. Bottom right is the default. Toasts in a place stack, with the newest nearest the edge, and the top places start below the sticky header.",
          },
          {
            label: "Phone:",
            text: "Toasts stretch across the screen with a 16px margin on each side.",
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
            text: "Each toast fades and slides in from the edge it is closest to in 200ms, stays for five seconds, then fades out. With reduced motion turned on it appears and leaves at once.",
          },
          {
            label: "Pause:",
            text: "While the pointer is over a toast, or it has focus, its timer is paused, so there is time to read it or reach its button.",
          },
          {
            label: "Loading:",
            text: "A loading toast has no timer. When the promise settles it changes to success or error and starts the usual five seconds.",
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
            label: "Icons are decoration:",
            text: "The icon repeats what the words say, so it is hidden from screen readers. The title carries the meaning.",
          },
          {
            label: "Custom layouts:",
            text: "If you replace the body, put the text in ToastTitle and ToastDescription. A toast made of loose elements has no name for a screen reader.",
          },
          {
            label: "Enough time:",
            text: "Five seconds is for short messages. Pausing on hover and focus gives slower readers more time, and a longer timeout suits longer text.",
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
