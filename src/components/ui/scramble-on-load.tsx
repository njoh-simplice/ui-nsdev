"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ScrambledText, useScramble } from "@/lib/scramble";

export interface ScrambleOnLoadProps extends Omit<useRender.ComponentProps<"span">, "children"> {
  // The text. It must be a plain string.
  children: string;
  // The most time the effect takes, in milliseconds. A short word finishes sooner.
  duration?: number;
  // How long to wait, in milliseconds, after the text comes into view before it starts.
  delay?: number;
  // Plays only the first time the text comes into view. Pass false to play again every time it
  // scrolls out of view and back.
  once?: boolean;
  // The characters the random letters are picked from.
  characters?: string;
  // Something inside the same element, before or after the text, such as an icon. It does not
  // scramble.
  before?: ReactNode;
  after?: ReactNode;
}

// The letters of the text flicker through random characters and settle on the real ones from
// left to right, as soon as it is on the screen: when the page loads, if it is already in view,
// or when it scrolls into view. It is a span by default; pass `render` to make it a heading or a
// paragraph. Nobody sees the effect if they ask for reduced motion.
export function ScrambleOnLoad({
  children,
  duration = 1200,
  delay = 0,
  once = true,
  characters,
  before,
  after,
  render,
  ...props
}: ScrambleOnLoadProps) {
  const { display, play, stop } = useScramble(children, { duration, characters });
  const element = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timer = window.setTimeout(play, delay);
            if (once) observer.disconnect();
          } else if (!once) {
            window.clearTimeout(timer);
            stop();
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [play, stop, delay, once]);

  return useRender({
    defaultTagName: "span",
    render,
    ref: element,
    props: mergeProps<"span">(
      {
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
