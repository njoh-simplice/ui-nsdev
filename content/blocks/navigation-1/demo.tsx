"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

const links = ["Home", "Product", "Pricing", "Contact"];

const contact = [
  { label: "hello@example.com", href: "mailto:hello@example.com" },
  { label: "+1 (555) 000-0000", href: "tel:+15550000000" },
];

const social = ["LinkedIn", "GitHub", "X", "Instagram"];

// Every piece that appears when the card opens fades in a little after the one before it.
const appear = (open: boolean, step: number) => ({ transitionDelay: open ? `${150 + step * 60}ms` : "0ms" });
const appearStyles =
  "transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none";

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

      <div className="absolute inset-x-0 top-6 flex justify-center px-4">
        <div
          ref={root}
          onKeyDown={(event) => {
            if (event.key === "Escape" && open) {
              setOpen(false);
              toggle.current?.focus();
            }
          }}
          className={cx(
            "w-full overflow-hidden rounded-lg bg-surface text-text transition-[max-width] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
            open ? "max-w-[34rem]" : "max-w-md",
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
                open ? "w-7 bg-transparent text-text" : "w-[4.5rem] bg-text text-bg hover:bg-text/85",
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
                  "absolute inset-0 m-auto size-6 transition-[opacity,rotate] duration-300 motion-reduce:transition-none",
                  open ? "rotate-0 opacity-100 delay-100" : "-rotate-90 opacity-0",
                )}
              />
            </button>
          </div>

          <div
            id="navigation-1-panel"
            inert={!open}
            className={cx(
              "grid transition-[grid-template-rows] duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <nav aria-label="Main" className="px-3 pt-2 pb-6">
                <ul>
                  {links.map((label, index) => (
                    <li
                      key={label}
                      style={appear(open, index)}
                      className={cx(appearStyles, open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")}
                    >
                      <a
                        href="#"
                        aria-current={label === current ? "page" : undefined}
                        onClick={(event) => {
                          event.preventDefault();
                          setCurrent(label);
                          setOpen(false);
                        }}
                        className={cx("group flex items-center rounded-sm text-[2.5rem] leading-[1.33] font-medium uppercase", focusRing)}
                      >
                        {/* A short green line that grows in front of the current or hovered link. */}
                        <span
                          aria-hidden
                          className="h-0.5 w-0 shrink-0 bg-accent transition-[width,margin] duration-200 group-hover:mr-3 group-hover:w-6 group-aria-[current=page]:mr-3 group-aria-[current=page]:w-6 motion-reduce:transition-none"
                        />
                        <span className="transition-colors duration-200 group-hover:text-accent group-aria-[current=page]:text-accent motion-reduce:transition-none">
                          {label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="px-3">
                <Separator />
              </div>

              <div
                style={appear(open, links.length)}
                className={cx(
                  "grid grid-cols-2 gap-6 px-3 pt-6 pb-4 text-sm",
                  appearStyles,
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                <div className="flex flex-col gap-1.5">
                  <p className="text-text-secondary">Contact</p>
                  {contact.map(({ label, href }) => (
                    <a key={label} href={href} className={cx("w-fit rounded-sm hover:text-accent", focusRing)}>
                      {label}
                    </a>
                  ))}
                  <p className="text-text/70">123 Main Street, Your City</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-text-secondary">Follow us</p>
                  {social.map((label) => (
                    <a key={label} href="#" className={cx("flex w-fit items-center gap-1 rounded-sm hover:text-accent", focusRing)}>
                      {label}
                      <ArrowUpRight aria-hidden className="size-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
