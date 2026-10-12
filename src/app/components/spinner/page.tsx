import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SpinnerDemo from "@content/components/spinner/demo";
import { meta } from "@content/components/spinner/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A spinner shows that something is happening when you can't say how long it will take."
      demo={<SpinnerDemo />}
      demoPath="content/components/spinner/demo.tsx"
      sourcePath="src/components/ui/spinner.tsx"
      props={[
        {
          name: "className",
          type: "string",
          description: (
            <>
              Sizes the spinner: <code>size-6</code> or <code>size-8</code>. It is 16px by default.
            </>
          ),
        },
        {
          name: "aria-hidden",
          type: "boolean",
          description: "Hides it from assistive tech. Use it inside a button that already says what is happening.",
        },
      ]}
      propsNote="Spinner is a lucide icon, so it takes every normal svg prop."
      thinking={{
        intro:
          "A spinner is the honest answer to how long will this take when you don't know. When you do know, show a measure instead.",
        notes: [
          {
            label: "Unknown duration only:",
            text: "Use Progress when you can say how far along something is, and a Skeleton when you know the shape of what is coming.",
          },
          {
            label: "It draws in the current color:",
            text: "It takes the text color of whatever it sits in, so it matches inside a green button, an outline button or plain text.",
          },
          {
            label: "Pair it with a label:",
            text: "In a button, show the spinner and say what is happening, like Saving. Disable the button while it works so it can't be sent twice.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "16px by default, with a shrink guard so it stays round in a tight row. Size it with a class.",
          },
          {
            label: "Motion:",
            text: "One full turn every second, at a steady speed.",
          },
          {
            label: "In a button:",
            text: "It sits before the label, 8px away, like any icon in a Button.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not interactive:",
            text: "A spinner has no hover, focus or pressed state.",
          },
          {
            label: "Reduced motion:",
            text: "For people who ask their system for less motion it stops turning. The label next to it, such as Saving, still says what is happening.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Announced as loading:",
            text: "On its own it has a status role and the name Loading, so a screen reader mentions it politely.",
          },
          {
            label: "Don't announce it twice:",
            text: (
              <>
                Inside a button that already has text, pass <code>aria-hidden</code>, as the demo
                does, so the screen reader reads Saving and not Loading, Saving.
              </>
            ),
          },
          {
            label: "Time matters:",
            text: "If something can take more than a few seconds, say so in words as well as showing a spinner.",
          },
        ],
      }}
    />
  );
}
