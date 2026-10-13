"use client";

import type { ReactNode } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ScrambledText, useScramble } from "@/lib/scramble";

export interface ScrambleOnHoverProps extends Omit<useRender.ComponentProps<"span">, "children"> {
  // The text. It must be a plain string.
  children: string;
  // The most time the effect takes, in milliseconds. A short word finishes sooner.
  duration?: number;
  // The characters the random letters are picked from.
  characters?: string;
  // Something inside the same element, before or after the text, such as an icon. It does not
  // scramble.
  before?: ReactNode;
  after?: ReactNode;
}

// When the mouse moves over it, the letters of the text flicker through random characters and
// settle on the real ones from left to right. It is a span by default; pass `render` to put the
// effect on your own element, such as a link or a Button, and the whole element reacts to the
// hover, not only the letters. Keyboard focus and touch do nothing, and neither does a visitor
// who asks for reduced motion.
export function ScrambleOnHover({
  children,
  duration = 700,
  characters,
  before,
  after,
  render,
  ...props
}: ScrambleOnHoverProps) {
  const { display, play, stop } = useScramble(children, { duration, characters });

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        onPointerEnter: (event) => {
          if (event.pointerType === "mouse") play();
        },
        onPointerLeave: stop,
        children: (
          <>
            {before}
            <ScrambledText text={children} display={display} />
            {after}
          </>
        ),
      },
      props,
    ),
  });
}
