"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrambleOnHover } from "@/components/ui/scramble-on-hover";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

const links = ["Home", "Product", "Pricing", "About", "Contact"];

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

// How things move. The page slides aside with a long ease-out, and each piece of the menu slides
// up out of its own line (a clipped row) a little after the one before it, as in Card Menu.
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
// A gentler curve for the content, so its slide reads as smooth rather than sudden.
const GLIDE = "ease-[cubic-bezier(0.33,1,0.68,1)]";
// The menu starts moving once the page is already on its way.
const stagger = (open: boolean, step: number) => ({ transitionDelay: open ? `${240 + step * 90}ms` : "0ms" });
const rise = (open: boolean) =>
  cx(
    "transition-[translate,opacity] motion-reduce:transition-none",
    GLIDE,
    open ? "translate-y-0 opacity-100 duration-900" : "translate-y-full opacity-0 duration-200",
  );

// The contact and social lines enter more softly than the links: the headings only fade, then
// each line fades in with a small rise, one after another. Both columns step together.
const settle = (open: boolean, step: number) => ({ transitionDelay: open ? `${600 + step * 110}ms` : "0ms" });
const soft = (open: boolean, move = true) =>
  cx(
    "transition-[opacity,translate] motion-reduce:transition-none",
    GLIDE,
    open ? "translate-y-0 opacity-100 duration-700" : cx("opacity-0 duration-200", move ? "translate-y-2" : "translate-y-0"),
  );

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
  return (
    // The row clips its link, so the link slides up from underneath it. The padding and
    // negative margin keep the focus ring from being cut off.
    <li className="-m-1 overflow-hidden p-1">
      <div style={stagger(open, step)} className={rise(open)}>
        {/* Hovering the link scrambles its word (Scramble on Hover). It stays still otherwise. */}
        <ScrambleOnHover
          render={
            <a
              href="#"
              aria-current={current ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                onChoose();
              }}
              className={cx(
                "group flex items-center rounded-sm text-[2.5rem] leading-[1.33] font-medium uppercase transition-colors duration-300 hover:text-accent aria-[current=page]:text-accent motion-reduce:transition-none",
                focusRing,
              )}
            />
          }
          // A short green line that grows in front of the current or hovered link.
          before={
            <span
              aria-hidden
              className="h-0.5 w-0 shrink-0 bg-accent transition-[width,margin] duration-300 group-hover:mr-3 group-hover:w-6 group-aria-[current=page]:mr-3 group-aria-[current=page]:w-6 motion-reduce:transition-none"
            />
          }
        >
          {label}
        </ScrambleOnHover>
      </div>
    </li>
  );
}

// `--panel` is how much of the width the menu takes: 26rem, or the whole width less a sliver of
// the page on a narrow screen. The page slides left by exactly that much.
export default function UnderlayMenu() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("Home");
  const toggle = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and puts focus back on its button.
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-bg text-text [--panel:min(26rem,calc(100%_-_3rem))]">
      {/* The menu sits underneath the page, fixed to the right edge, and is shown by moving the
          page out of the way. It cannot be reached while it is covered. */}
      <div
        id="underlay-menu-panel"
        inert={!open}
        className="absolute inset-y-0 right-0 flex w-(--panel) flex-col overflow-y-auto px-6 pt-20 pb-6"
      >
        <nav aria-label="Main">
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

        <div className="mt-auto pt-8">
          {/* A faint hairline that draws itself from left to right. */}
          <div
            aria-hidden
            style={stagger(open, links.length)}
            className={cx(
              "h-px origin-left bg-text/10 transition-[scale] motion-reduce:transition-none",
              GLIDE,
              open ? "scale-x-100 duration-1000" : "scale-x-0 duration-200",
            )}
          />

          <div className="grid grid-cols-[1fr_auto] gap-6 pt-6 text-sm">
            <div className="flex flex-col gap-1.5">
              <p style={settle(open, 0)} className={cx("text-text/70", soft(open, false))}>
                Contact
              </p>
              {contact.map(({ label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  style={settle(open, index + 1)}
                  className={cx("w-fit rounded-sm hover:text-accent", focusRing, soft(open))}
                >
                  {label}
                </a>
              ))}
              <p style={settle(open, contact.length + 1)} className={cx("text-text/70", soft(open))}>
                {address}
              </p>
            </div>
            {/* Follow us sits against the right edge, with the same three rows as Contact. */}
            <div className="flex flex-col items-end gap-1.5">
              <p style={settle(open, 0)} className={cx("text-text/70", soft(open, false))}>
                Follow us
              </p>
              {social.map(({ label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={settle(open, index + 1)}
                  className={cx("flex w-fit items-center gap-1 rounded-sm hover:text-accent", focusRing, soft(open))}
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

      {/* The page. It slides to the left, rounds its corners and darkens a little while the menu
          is open, and a press on it closes the menu. */}
      <div
        className={cx(
          "absolute inset-0 overflow-hidden bg-bg transition-[translate,border-radius] duration-700 motion-reduce:transition-none",
          EASE,
          open ? "-translate-x-(--panel) rounded-lg" : "translate-x-0 rounded-none",
        )}
      >
        <Image
          src="/assets/images/software-developer-canyon.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* A veil keeps the white text readable over the bright sky. */}
        <div aria-hidden className="absolute inset-0 bg-bg/35" />
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className={cx(
            "absolute inset-0 bg-bg transition-opacity duration-600 motion-reduce:transition-none",
            EASE,
            open ? "cursor-pointer opacity-35" : "pointer-events-none opacity-0",
          )}
        />

        <div inert={open} className="pointer-events-none absolute inset-0">
          <a
            href="#"
            aria-label="Logo, home"
            className={cx("pointer-events-auto absolute top-5 left-4 rounded-sm", focusRing)}
          >
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
          <div className="flex h-full items-center justify-center px-6">
            <h1 className="text-center text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Fixed Underlay Navigation
            </h1>
          </div>
        </div>
      </div>

      {/* One button for both states, so it stays where it is while the page moves: MENU over the
          picture, then CLOSE over the menu. The two labels cross-fade in the same space. */}
      <Button
        ref={toggle}
        variant={open ? "ghost" : "inverse"}
        size="sm"
        aria-expanded={open}
        aria-controls="underlay-menu-panel"
        onClick={() => setOpen((value) => !value)}
        className="absolute top-4 right-4 z-10 uppercase"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="grid">
          <span
            className={cx(
              "col-start-1 row-start-1 flex items-center justify-end gap-2 transition-opacity duration-300 motion-reduce:transition-none",
              open ? "opacity-0" : "opacity-100 delay-100",
            )}
          >
            Menu
            <Menu />
          </span>
          <span
            className={cx(
              "col-start-1 row-start-1 flex items-center justify-end gap-2 transition-opacity duration-300 motion-reduce:transition-none",
              open ? "opacity-100 delay-100" : "opacity-0",
            )}
          >
            Close
            <X />
          </span>
        </span>
      </Button>
    </div>
  );
}
