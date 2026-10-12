import type { Metadata } from "next";
import { ComponentPage } from "@/components/component-page";
import BadgeDemo from "@content/components/badge/demo";
import { meta } from "@content/components/badge/meta";

export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return (
    <ComponentPage
      title={meta.title}
      lead="A badge is a small label for a status. It has a neutral style and three status variants, and can be rendered as a link."
      demo={<BadgeDemo />}
      demoPath="content/components/badge/demo.tsx"
      sourcePath="src/components/ui/badge.tsx"
      props={[
        {
          name: "variant",
          type: "default | success | warning | destructive",
          default: "default",
          description: "The status. Only the three status variants carry color.",
        },
        {
          name: "render",
          type: "element",
          description: (
            <>
              Renders the badge as another element, such as a link: <code>render={"{<a href />}"}</code>.
            </>
          ),
        },
        {
          name: "className",
          type: "string",
          description: "Extra classes, added after the badge's own.",
        },
      ]}
      propsNote="Every other prop goes to the element the badge renders, a span unless you pass render."
      thinking={{
        intro:
          "A badge labels something; it doesn't ask for anything. So it stays small and quiet, and only a status gets color.",
        notes: [
          {
            label: "Status, not decoration:",
            text: (
              <>
                <code>success</code>, <code>warning</code> and <code>destructive</code> use the
                accent, warning and danger tokens. Reach for them only when the label really is a
                status.
              </>
            ),
          },
          {
            label: "Quiet color:",
            text: "A soft wash and a colored dot, never a solid fill, so a row of badges doesn't shout. This is the low-emphasis pattern from Theming.",
          },
          {
            label: "A link when it needs to be:",
            text: (
              <>
                Pass <code>render</code> with a link and the badge gains hover and focus states.
                Without it, a badge has none.
              </>
            ),
          },
        ],
      }}
      design={{
        notes: [
          {
            label: "Size:",
            text: "12px medium text with 8px of side padding and 2px above and below. Corners use the sm radius, 4px.",
          },
          {
            label: "Status color:",
            text: "A 10% fill and a 30% border in the status color, plus a 6px dot at full strength. The label stays in the main text color.",
          },
          {
            label: "Neutral:",
            text: (
              <>
                <code>default</code> is the surface fill with a hairline border and no dot.
              </>
            ),
          },
          {
            label: "Icons:",
            text: "An icon goes after the text, 12px, as in the link example.",
          },
        ],
      }}
      interaction={{
        notes: [
          {
            label: "A plain badge:",
            text: "No hover, focus or pressed state, because it isn't a control.",
          },
          {
            label: "As a link:",
            text: "Hover deepens the fill, to 20% for a status badge. Keyboard focus draws the 2px outline.",
          },
        ],
      }}
      empathy={{
        notes: [
          {
            label: "Words, not just color:",
            text: "The dot is color, but the label says the status. Write Failed, not only a red dot.",
          },
          {
            label: "Contrast:",
            text: "The label is the main text color on a dark wash, well above the 4.5:1 that AA asks for.",
          },
          {
            label: "Links say where they go:",
            text: "A badge used as a link should name its destination, like New component.",
          },
        ],
      }}
    />
  );
}
