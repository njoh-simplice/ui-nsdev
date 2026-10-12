import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import SkeletonDemo from "@content/components/skeleton/demo";
import { meta } from "@content/components/skeleton/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A skeleton is a grey placeholder that holds the shape of content while it loads."
      demo={<SkeletonDemo />}
      demoPath="content/components/skeleton/demo.tsx"
      sourcePath="src/components/ui/skeleton.tsx"
      props={[
        {
          name: "className",
          type: "string",
          description: (
            <>
              Gives it a size and shape: <code>h-4 w-40</code> for a line,{" "}
              <code>size-12 rounded-full</code> for an avatar.
            </>
          ),
        },
      ]}
      propsNote="Skeleton is a plain div and takes every normal prop. It has no size of its own."
      thinking={{
        intro:
          "A skeleton is a promise that content is coming, in a particular shape. Keep the promise by matching the shape.",
        notes: [
          {
            label: "Same shape as the content:",
            text: "Size each skeleton like the thing it replaces, so the page doesn't jump when the real content arrives.",
          },
          {
            label: "No variants:",
            text: "Shape and size come from classes, so one component covers a line, a block and a circle.",
          },
          {
            label: "Only when you know:",
            text: "Use a skeleton when you know what is coming. If you don't know how long it will take, use a Spinner, or a Progress bar when you can measure it.",
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Fill:",
            text: "The strong border color, with the md radius, 6px, unless you change it.",
          },
          {
            label: "Pulse:",
            text: "It fades to half its opacity and back, once every two seconds.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "Not interactive:",
            text: "A skeleton has no hover, focus or pressed state.",
          },
          {
            label: "Reduced motion:",
            text: "For people who ask their system for less motion, it stops pulsing and stays as a still grey shape.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Hidden from screen readers:",
            text: (
              <>
                A grey shape means nothing when spoken, so each skeleton is hidden from assistive
                tech. Put <code>aria-busy=&quot;true&quot;</code> on the region that is loading, as
                the demo does.
              </>
            ),
          },
          {
            label: "Say it is loading:",
            text: "Pair a skeleton with a visually hidden status such as Loading, so people who can't see it still know.",
          },
          {
            label: "Don't leave it forever:",
            text: "Replace it with the content, or with an error message if it fails. A skeleton that never resolves looks like a broken page.",
          },
        ],
      }}
    />
  );
}
