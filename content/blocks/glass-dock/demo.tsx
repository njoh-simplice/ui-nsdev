"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, CreditCard, House, Layers, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Item = { label: string; icon: LucideIcon; href: string };

const items: Item[] = [
  { label: "Home", icon: House, href: "#" },
  { label: "Product", icon: Layers, href: "#" },
  { label: "Pricing", icon: CreditCard, href: "#" },
  { label: "Docs", icon: BookOpen, href: "#" },
  { label: "Contact", icon: Mail, href: "mailto:contact@nsdev.me" },
];

// The swell. Each tile's width follows the pointer: SIZE when it is RANGE px away or more,
// rising in a straight line to PEAK when it is directly under it. The widths are real layout
// sizes, so the neighbours are pushed apart and the bar widens, and a spring drives each width
// so the motion stays smooth. The bar keeps its height, so the tiles grow upward out of it.
const SIZE = 40;
const PEAK = 80;
const RANGE = 200;
const MASS = 0.1;
const STIFFNESS = 120;
const DAMPING = 12;

// `image` is the picture behind the dock. Pass false to put the dock on the plain page
// background, such as when the block sits inside something that already has its own look.
export default function GlassDock({ image = true }: { image?: boolean }) {
  const [current, setCurrent] = useState("Home");
  const dock = useRef<HTMLUListElement>(null);
  const tiles = useRef<Array<HTMLAnchorElement | null>>([]);

  // The pointer's position is kept in a variable and the tiles are resized straight on the
  // elements, a frame at a time, so moving the pointer never re-renders the block. The loop
  // stops by itself once every tile has come to rest. Only a mouse swells the dock: a finger
  // drags the page, and reduced motion keeps it still.
  useEffect(() => {
    const list = dock.current;
    if (
      !list ||
      !window.matchMedia("(hover: hover)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const sizes = items.map(() => SIZE);
    const speeds = items.map(() => 0);
    const targets = items.map(() => SIZE);
    let pointer = Infinity;
    let frame = 0;
    let last = 0;

    const step = (now: number) => {
      const dt = Math.min(Math.max((now - last) / 1000, 0), 0.05);
      last = now;
      const substeps = Math.max(1, Math.ceil(dt * 240));
      const h = dt / substeps;
      let moving = false;

      tiles.current.forEach((tile, index) => {
        if (!tile) return;
        for (let s = 0; s < substeps; s++) {
          const acceleration = (STIFFNESS * (targets[index] - sizes[index]) - DAMPING * speeds[index]) / MASS;
          speeds[index] += acceleration * h;
          sizes[index] += speeds[index] * h;
        }

        if (Math.abs(targets[index] - sizes[index]) < 0.01 && Math.abs(speeds[index]) < 0.01) {
          sizes[index] = targets[index];
          speeds[index] = 0;
        } else {
          moving = true;
        }
        tile.style.width = sizes[index] === SIZE ? "" : `${sizes[index].toFixed(2)}px`;
      });

      frame = moving ? requestAnimationFrame(step) : 0;
    };

    // Worked out again whenever the pointer moves, from the tiles' live positions.
    const aim = () => {
      tiles.current.forEach((tile, index) => {
        if (!tile) return;
        const rect = tile.getBoundingClientRect();
        const distance = Math.abs(pointer - (rect.left + rect.width / 2));
        targets[index] = distance >= RANGE ? SIZE : SIZE + (PEAK - SIZE) * (1 - distance / RANGE);
      });
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(step);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = event.clientX;
      aim();
    };
    const onLeave = () => {
      pointer = Infinity;
      aim();
    };

    list.addEventListener("pointermove", onMove);
    list.addEventListener("pointerleave", onLeave);
    return () => {
      list.removeEventListener("pointermove", onMove);
      list.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      {image && (
        <Image
          src="/assets/images/hero-legal.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
      )}

      <nav aria-label="Dock" className="absolute inset-x-0 bottom-6 flex justify-center px-4">
        {/* Black glass: a dark wash over a faint white fill that blurs and saturates the picture
            behind it, a light edge and a soft shadow. The bar is a fixed 54px tall, so the tiles
            rise out of its top edge as they swell. */}
        <ul
          ref={dock}
          className="flex h-[54px] items-end gap-1.5 rounded-[12px] border border-white/28 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-[18px] backdrop-saturate-[140%] [background:linear-gradient(rgba(0,0,0,0.26),rgba(0,0,0,0.26)),rgba(255,255,255,0.06)]"
        >
          {items.map(({ label, icon: Icon, href }, index) => (
            <li key={label} className="group/tile relative flex-none">
              <a
                ref={(node) => {
                  tiles.current[index] = node;
                }}
                href={href}
                aria-label={label}
                aria-current={label === current ? "page" : undefined}
                onClick={() => href === "#" && setCurrent(label)}
                className={cx(
                  "grid aspect-square w-10 place-items-center rounded-[36%] bg-white/7 text-text opacity-85 transition-opacity duration-300 hover:opacity-100 aria-[current=page]:bg-white/20 aria-[current=page]:opacity-100 motion-reduce:transition-none",
                  focusRing,
                )}
              >
                <Icon aria-hidden strokeWidth={1.75} className="aspect-square h-auto w-[52%]" />
              </a>

              {/* The name: fades in, un-blurs and settles up over the tile while it is pointed
                  at or focused. */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 -translate-x-1/2 translate-y-1.5 rounded-lg border border-white/12 bg-[rgba(8,8,10,0.7)] px-2 py-1 text-[0.8rem] font-semibold whitespace-nowrap text-text opacity-0 blur-[6px] backdrop-blur-[12px] transition-[opacity,filter,translate] duration-300 ease-[ease] group-hover/tile:translate-y-0 group-hover/tile:opacity-100 group-hover/tile:blur-none group-has-focus-visible/tile:translate-y-0 group-has-focus-visible/tile:opacity-100 group-has-focus-visible/tile:blur-none motion-reduce:transition-none"
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
