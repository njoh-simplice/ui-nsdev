"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// The shared part of the two scramble components (Scramble on Hover and Scramble on Load): the
// timer that picks random characters, and the markup that shows them without moving the layout.

export const SCRAMBLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+?";

const isScrambled = (char: string) => /[\p{L}\p{N}]/u.test(char);

// `display` is the text to show right now. play() starts the effect: the letters flicker through
// random characters, and settle on the real ones from left to right. Spaces and punctuation are
// never changed, and a lowercase letter is only ever replaced by a lowercase one. The effect
// lasts `duration` milliseconds at the most (a short word takes about 80ms per letter). Nothing
// happens when the visitor asks their system for reduced motion. stop() puts the real text back.
export function useScramble(
  text: string,
  { duration, characters = SCRAMBLE_CHARACTERS }: { duration: number; characters?: string },
) {
  const [display, setDisplay] = useState(text);
  const timer = useRef<number | undefined>(undefined);

  const stop = useCallback(() => {
    window.clearInterval(timer.current);
    setDisplay(text);
  }, [text]);

  const play = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearInterval(timer.current);
    const letters = Array.from(text);
    const pool = Array.from(characters);
    const lead = Math.min(120, duration / 4);
    const step = letters.length > 1 ? Math.min(80, (duration - lead) / (letters.length - 1)) : 0;
    const began = performance.now();

    const frame = () => {
      const elapsed = performance.now() - began;
      let settled = true;
      const next = letters.map((letter, index) => {
        if (!isScrambled(letter) || elapsed >= lead + index * step) return letter;
        settled = false;
        const glyph = pool[Math.floor(Math.random() * pool.length)];
        return letter !== letter.toUpperCase() ? glyph.toLowerCase() : glyph;
      });
      setDisplay(next.join(""));
      if (settled) window.clearInterval(timer.current);
    };

    frame();
    timer.current = window.setInterval(frame, 40);
  }, [text, duration, characters]);

  useEffect(() => () => window.clearInterval(timer.current), []);

  return { display, play, stop };
}

// Shows `display` in place of `text`. A screen reader gets the real text (visually hidden), and
// the flickering copy is hidden from it. Every word keeps the width of the real word, held by an
// invisible copy underneath, so the random characters never move anything and a phrase that
// wraps still wraps in the same places.
export function ScrambledText({ text, display }: { text: string; display: string }) {
  const shown = Array.from(display);
  // Each piece of the text (a word, or the spaces between words) with where it starts.
  const pieces = text.split(/(\s+)/).reduce<{ part: string; start: number }[]>((all, part) => {
    const last = all.at(-1);
    all.push({ part, start: last ? last.start + Array.from(last.part).length : 0 });
    return all;
  }, []);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {pieces.map(({ part, start }, index) => {
          if (part === "" || /^\s+$/.test(part)) return part;
          return (
            <span key={index} className="inline-grid">
              <span className="invisible col-start-1 row-start-1">{part}</span>
              <span className="col-start-1 row-start-1 w-0 min-w-full overflow-hidden whitespace-nowrap">
                {shown.slice(start, start + Array.from(part).length).join("")}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}
