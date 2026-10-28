"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Marker } from "@/components/ui/marker";

// One marker and the card it opens. `x` and `y` are where the marker sits on the photo, as a
// percentage of its width and height, so it stays on the same part of the bike at any size.
type Hotspot = {
  id: string;
  label: string;
  x: number;
  y: number;
  image: string;
  alt: string;
  name: string;
  description: string;
};

const hotspots: Hotspot[] = [
  {
    id: "handlebars",
    label: "Handlebars",
    x: 72,
    y: 10.5,
    image: "/assets/images/product-hotspot/cockpit.webp",
    alt: "The handlebars seen from above, with the display between the grips",
    name: "Handlebars and display",
    description:
      "A wide, flat bar with textured grips and hydraulic brake levers within a finger's reach. The display shows speed, battery, trip distance and odometer at a glance.",
  },
  {
    id: "saddle",
    label: "Saddle",
    x: 41.8,
    y: 21.7,
    image: "/assets/images/product-hotspot/saddle.webp",
    alt: "The black saddle on its seatpost, seen from the side",
    name: "Contoured saddle",
    description:
      "A wide, stitched saddle with a pressure-relief channel down the middle. It sits on a low-profile clamp, so it stays put over rough ground and long days.",
  },
  {
    id: "wheels",
    label: "Rear wheel",
    x: 17.1,
    y: 41,
    image: "/assets/images/product-hotspot/wheel.webp",
    alt: "A three-spoke mag wheel with a wide knobby tire",
    name: "Mag wheels, fat tires",
    description:
      "One-piece, three-spoke mag wheels that stay true under load, wrapped in wide knobby tires. Run them soft and they float over sand, snow and loose gravel.",
  },
  {
    id: "brakes",
    label: "Front fork and brake",
    x: 82,
    y: 55.3,
    image: "/assets/images/product-hotspot/wheel.webp",
    alt: "The front wheel with its suspension fork and disc brake",
    name: "Suspension fork, disc brake",
    description:
      "The front fork soaks up roots and rocks so your hands stay calm. A disc brake with a wave-pattern rotor keeps the stopping steady in mud and rain.",
  },
];

// The rounded corners follow one rule: an outer radius is the inner radius plus the gap between
// them. The photo inside the card has --r-image, the card is --pad bigger, and the frame around it
// is --pad bigger again, so the three curves run parallel and the gaps look even all round.
export default function ProductHotspot() {
  const [activeId, setActiveId] = useState<string | null>(null);
  // The card keeps showing the last hotspot while it fades out, so it never empties mid-fade.
  const [lastId, setLastId] = useState(hotspots[0].id);
  const markers = useRef<Record<string, HTMLElement | null>>({});

  const current = hotspots.find(({ id }) => id === lastId) ?? hotspots[0];
  const open = activeId !== null;

  // Pressing a marker opens its card and closes whichever was open; pressing the open one closes it.
  const toggle = (id: string) => {
    setActiveId((now) => (now === id ? null : id));
    setLastId(id);
  };

  // Escape closes the card and puts focus back on the marker that opened it, wherever focus is.
  useEffect(() => {
    if (activeId === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      markers.current[activeId]?.focus();
      setActiveId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeId]);

  return (
    <section className="bg-text px-4 py-10 text-bg [--pad:8px] [--r-image:8px] sm:px-5 md:py-12 md:[--pad:12px]">
      <header className="mb-10 max-w-xl md:mb-16">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
          Stealth Black Fat-Tire <span className="text-text-secondary">Mountain Bike</span>
        </h2>
        <p className="mt-3 text-sm leading-6 text-bg/70">
          Frame geometry, rear shock, front suspension fork, 3-spoke mag wheels, wide knobby fat
          tires, disc brakes, drivetrain, saddle and handlebars.
        </p>
      </header>

      <div className="relative overflow-hidden rounded-[calc(var(--r-image)+var(--pad)*2)] border border-bg/10 bg-[#f2f1ef]">
        <div className="relative aspect-video">
          <Image
            src="/assets/images/product-hotspot/bike.webp"
            alt="A stealth black fat-tire mountain bike seen from the side"
            fill
            priority
            sizes="(min-width: 1280px) 1240px, 100vw"
            className="object-cover"
          />

          {hotspots.map(({ id, label, x, y }) => (
            <Marker
              key={id}
              ref={(node) => {
                markers.current[id] = node;
              }}
              size="sm"
              aria-label={label}
              aria-expanded={activeId === id}
              aria-controls="product-hotspot-card"
              onClick={() => toggle(id)}
              style={{ left: `${x}%`, top: `${y}%` }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 md:size-9 md:[&_svg]:size-4 lg:size-12 lg:[&_svg]:size-5"
            />
          ))}
        </div>

        {/* The card sits in the bottom-left corner of the photo, --pad in from the edges. On a
            phone it would cover the bike, so it drops below the photo instead. While closed it is
            inert, so it can't be reached or read. */}
        <div
          id="product-hotspot-card"
          role="region"
          aria-label={current.name}
          inert={!open}
          data-closed={open ? undefined : ""}
          className="m-(--pad) origin-bottom-left rounded-[calc(var(--r-image)+var(--pad))] bg-surface p-(--pad) text-text transition-[opacity,scale,translate] duration-200 ease-out starting:translate-y-2 starting:opacity-0 data-[closed]:pointer-events-none data-[closed]:translate-y-2 data-[closed]:scale-97 data-[closed]:opacity-0 max-md:data-[closed]:hidden motion-reduce:transition-none md:absolute md:bottom-0 md:left-0 md:w-[34%]"
        >
          <div
            key={current.id}
            className="flex flex-col gap-3 transition-opacity duration-200 starting:opacity-0 motion-reduce:transition-none"
          >
            <div className="relative aspect-video overflow-hidden rounded-(--r-image) bg-[#f2f1ef]">
              <Image
                src={current.image}
                alt={current.alt}
                fill
                sizes="(min-width: 768px) 34vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 px-1 pb-1">
              <h3 className="text-xl leading-tight font-medium md:text-2xl">{current.name}</h3>
              <p className="text-sm leading-5 text-text/70">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
