"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

const links = ["Home", "Product", "Pricing", "Contact"];

const contact = [
  { label: "contact@nsdev.me", href: "mailto:contact@nsdev.me" },
  { label: "(+237) 652 02 59 01", href: "tel:+237652025901" },
];

const address = "Yaoundé, Cameroon";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/njoh-simplice-junior/" },
  { label: "GitHub", href: "https://github.com/njoh-simplice" },
  { label: "X", href: "https://x.com/njoh_simplice" },
];

// How the card and its contents move. The card opens with a long ease-out, and each piece of
// content slides up out of its own line (a clipped row) a little after the one before it.
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
// A gentler curve for the content, so its slide reads as smooth rather than sudden.
const GLIDE = "ease-[cubic-bezier(0.33,1,0.68,1)]";
const stagger = (open: boolean, step: number) => ({ transitionDelay: open ? `${180 + step * 90}ms` : "0ms" });
const rise = (open: boolean) =>
  cx(
    "transition-[translate,opacity] motion-reduce:transition-none",
    GLIDE,
    open ? "translate-y-0 opacity-100 duration-900" : "translate-y-full opacity-0 duration-200",
  );

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+?";

// On hover the letters of a word flicker through random characters, settling on the real ones
// from left to right. The real word is always what a screen reader gets (see NavLink), and
// nothing happens for people who ask their system for reduced motion.
function useScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const timer = useRef<number | undefined>(undefined);

  const stop = useCallback(() => {
    window.clearInterval(timer.current);
    setDisplay(text);
  }, [text]);

  const start = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    window.clearInterval(timer.current);
    const began = performance.now();
    timer.current = window.setInterval(() => {
      const elapsed = performance.now() - began;
      let settled = true;
      const next = [...text]
        .map((char, index) => {
          if (elapsed >= 150 + index * 80) return char;
          settled = false;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      setDisplay(next);
      if (settled) window.clearInterval(timer.current);
    }, 40);
  }, [text]);

  useEffect(() => () => window.clearInterval(timer.current), []);

  return { display, start, stop };
}

function NavLink({
  label,
  current,
  open,
  step,
  onChoose,
}: {
  label: string;
  current: boolean;
  open: boolean;
  step: number;
  onChoose: () => void;
}) {
  const { display, start, stop } = useScramble(label);

  return (
    // The row clips its link, so the link slides up from underneath it. The padding and
    // negative margin keep the focus ring from being cut off.
    <li className="-m-1 overflow-hidden p-1">
      <a
        href="#"
        aria-label={label}
        aria-current={current ? "page" : undefined}
        style={stagger(open, step)}
        onPointerEnter={(event) => event.pointerType === "mouse" && start()}
        onPointerLeave={stop}
        onClick={(event) => {
          event.preventDefault();
          onChoose();
        }}
        className={cx(
          "group flex items-center rounded-sm text-[2.5rem] leading-[1.33] font-medium uppercase",
          focusRing,
          rise(open),
        )}
      >
        {/* A short green line that grows in front of the current or hovered link. */}
        <span
          aria-hidden
          className="h-0.5 w-0 shrink-0 bg-accent transition-[width,margin] duration-300 group-hover:mr-3 group-hover:w-6 group-aria-[current=page]:mr-3 group-aria-[current=page]:w-6 motion-reduce:transition-none"
        />
        {/* The real word holds the width, so the scrambled letters never move the layout. */}
        <span className="grid transition-colors duration-300 group-hover:text-accent group-aria-[current=page]:text-accent motion-reduce:transition-none">
          <span aria-hidden className="invisible col-start-1 row-start-1">
            {label}
          </span>
          <span aria-hidden className="col-start-1 row-start-1 w-0 min-w-full overflow-hidden whitespace-nowrap">
            {display}
          </span>
        </span>
      </a>
    </li>
  );
}

export default function Navigation1() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Product");
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // A press anywhere outside the card closes it.
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Image
        src="/assets/images/software-developer-canyon.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* The picture darkens a little while the menu is open. */}
      <div
        aria-hidden
        className={cx(
          "pointer-events-none absolute inset-0 -z-10 bg-bg transition-opacity duration-600 motion-reduce:transition-none",
          EASE,
          open ? "opacity-35" : "opacity-0",
        )}
      />

      <div className="absolute inset-x-0 top-6 flex justify-center px-4">
        {/* Black glass: a dark, see-through fill (70%) that blurs the picture behind it, a faint
            light edge and a highlight along the top. */}
        <div
          ref={root}
          onKeyDown={(event) => {
            if (event.key === "Escape" && open) {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
          className={cx(
            "w-full overflow-hidden rounded-lg border border-text/10 bg-bg/70 text-text shadow-2xl inset-shadow-xs shadow-black/40 inset-shadow-text/10 backdrop-blur-2xl backdrop-saturate-150",
            "transition-[max-width] duration-600 motion-reduce:transition-none",
            EASE,
            open ? "max-w-136" : "max-w-md",
          )}
        >
          <div className="flex items-center justify-between p-3">
            <a href="#" aria-label="Logo, home" className={cx("rounded-sm", focusRing)}>
              <span
                aria-hidden
                className="block h-5 w-[3.84rem] bg-text"
                style={{
                  maskImage: "url(/assets/images/logoipsum.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "left center",
                }}
              />
            </a>

            {/* MENU while closed; a plain cross, with no fill or border, while open. */}
            <button
              ref={toggle}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="navigation-1-panel"
              onClick={() => setOpen((value) => !value)}
              className={cx(
                "relative h-7 cursor-pointer rounded-md text-sm font-semibold uppercase transition-[width,background-color,color] duration-300 ease-out motion-reduce:transition-none",
                focusRing,
                open ? "w-7 bg-transparent text-text" : "w-18 bg-text text-bg hover:bg-text/85",
              )}
            >
              <span
                className={cx(
                  "absolute inset-0 flex items-center justify-center transition-opacity duration-200 motion-reduce:transition-none",
                  open ? "opacity-0" : "opacity-100 delay-100",
                )}
              >
                Menu
              </span>
              <X
                aria-hidden
                className={cx(
                  "absolute inset-0 m-auto size-6 transition-[opacity,rotate] duration-500 motion-reduce:transition-none",
                  EASE,
                  open ? "rotate-0 opacity-100 delay-100" : "-rotate-90 opacity-0",
                )}
              />
            </button>
          </div>

          <div
            id="navigation-1-panel"
            inert={!open}
            className={cx(
              "grid transition-[grid-template-rows] duration-600 motion-reduce:transition-none",
              EASE,
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <nav aria-label="Main" className="px-3 pt-2 pb-6">
                <ul>
                  {links.map((label, index) => (
                    <NavLink
                      key={label}
                      label={label}
                      current={label === current}
                      open={open}
                      step={index}
                      onChoose={() => {
                        setCurrent(label);
                        setOpen(false);
                      }}
                    />
                  ))}
                </ul>
              </nav>

              {/* A faint hairline that draws itself from left to right. */}
              <div className="px-3">
                <div
                  aria-hidden
                  style={stagger(open, links.length)}
                  className={cx(
                    "h-px origin-left bg-text/10 transition-[scale] motion-reduce:transition-none",
                    GLIDE,
                    open ? "scale-x-100 duration-1000" : "scale-x-0 duration-200",
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-6 px-3 pt-6 pb-4 text-sm">
                <div className="-m-1 overflow-hidden p-1">
                  <div style={stagger(open, links.length)} className={cx("flex flex-col gap-1.5", rise(open))}>
                    <p className="text-text/70">Contact</p>
                    {contact.map(({ label, href }) => (
                      <a key={label} href={href} className={cx("w-fit rounded-sm hover:text-accent", focusRing)}>
                        {label}
                      </a>
                    ))}
                    <p className="text-text/70">{address}</p>
                  </div>
                </div>
                {/* Follow us sits against the right edge, with the same three rows as Contact. */}
                <div className="-m-1 overflow-hidden p-1">
                  <div style={stagger(open, links.length + 1)} className={cx("flex flex-col items-end gap-1.5", rise(open))}>
                    <p className="text-text/70">Follow us</p>
                    {social.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cx("flex w-fit items-center gap-1 rounded-sm hover:text-accent", focusRing)}
                      >
                        {label}
                        <span className="sr-only"> (opens in a new tab)</span>
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
