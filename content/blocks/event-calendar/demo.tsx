"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cx } from "@/lib/cx";
import { focusRing } from "@/lib/styles";

type Kind = "feast" | "brunch" | "picnic" | "cocktail";

// What each kind of event is called and shown as. Every event on the calendar is one of these.
// `image` is the big photo for the card and `thumb` the small copy shown in the calendar. They are
// separate files on purpose: if the card and a day shared one, Next.js could not tell their loading
// apart and would warn that the card photo, which is above the fold, loads lazily.
const kinds: Record<Kind, { name: string; description: string; image: string; thumb: string; alt: string }> = {
  feast: {
    name: "Feast Night",
    description:
      "A long table, big platters and louder-than-usual laughter. Come hungry and bring friends: the whole room celebrates together, with music until late.",
    image: "/assets/images/event-calendar/feast.webp",
    thumb: "/assets/images/event-calendar/feast-thumb.webp",
    alt: "A crowd at a lively night, hands raised in the red light",
  },
  brunch: {
    name: "Sunday Brunch",
    description:
      "Slow mornings, done properly. Poached eggs on toasted sourdough with smoked salmon, hollandaise and fresh herbs, served with good coffee and better company.",
    image: "/assets/images/event-calendar/brunch.webp",
    thumb: "/assets/images/event-calendar/brunch-thumb.webp",
    alt: "Toast topped with poached eggs, smoked salmon, hollandaise and micro herbs",
  },
  picnic: {
    name: "Park Picnic",
    description:
      "Blankets on the grass and a spread to share: croissants, warm pizza, guacamole and cold watermelon. We bring the table, you bring the sunshine.",
    image: "/assets/images/event-calendar/picnic.webp",
    thumb: "/assets/images/event-calendar/picnic-thumb.webp",
    alt: "A picnic on a red blanket with croissants, pizza, guacamole, chips and watermelon",
  },
  cocktail: {
    name: "Cocktail Evening",
    description:
      "An evening at the bar. Sharp, citrusy cocktails mixed to order and served ice cold, finished with a twist of lime. Dress up a little.",
    image: "/assets/images/event-calendar/cocktail.webp",
    thumb: "/assets/images/event-calendar/cocktail-thumb.webp",
    alt: "A pale green cocktail in a martini glass with a lime wedge",
  },
};

const YEAR = 2027;
const MONTHS = ["January", "February", "March"];

// The days with an event, per month (0 is January): day of the month -> kind of event.
const events: Record<number, Record<number, Kind>> = {
  0: { 2: "feast", 10: "brunch", 22: "cocktail", 30: "feast" },
  1: { 6: "feast", 12: "cocktail", 14: "brunch", 21: "picnic" },
  2: { 7: "brunch", 13: "picnic", 19: "cocktail", 27: "feast" },
};

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const longDate = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });

// The week starts on Monday: how many empty cells come before the 1st, and how many days there are.
const layout = (month: number) => {
  const first = new Date(Date.UTC(YEAR, month, 1));
  return { lead: (first.getUTCDay() + 6) % 7, days: new Date(Date.UTC(YEAR, month + 1, 0)).getUTCDate() };
};

const firstEventDay = (month: number) => Math.min(...Object.keys(events[month]).map(Number));

// This block wears its own colors, set below on the section: wine and white smoke, and a wine-black
// (--ink) for the card and the selected day, with --ink-line for their edges.
//
// The rounded corners follow one rule: an outer radius is the inner radius plus the gap between
// them. A photo in a day (--r minus its 5px of border and padding) sits in a day (--r), and the
// day sits in a panel --pad bigger. The card is the same: its photo has --r, and the card is --pad
// bigger (its 2px border plus the rest of the padding), so both panels end up with the same corner.
export default function EventCalendar() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(12);
  // The card keeps the month it was chosen in, so changing the month never leaves it empty.
  const [chosenMonth, setChosenMonth] = useState(1);

  const { lead, days } = layout(month);
  const kind = kinds[events[chosenMonth][day]];
  const date = longDate.format(new Date(Date.UTC(YEAR, chosenMonth, day)));

  // Moving to another month selects that month's first event, so the card always shows one.
  const goTo = (next: number) => {
    setMonth(next);
    setChosenMonth(next);
    setDay(firstEventDay(next));
  };

  const arrow = cx(
    "grid size-10 shrink-0 place-items-center rounded-full bg-(--smoke) text-(--wine) transition-colors duration-150 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-(--smoke) sm:size-12",
    focusRing,
  );

  return (
    <section className="min-h-screen bg-(--smoke) px-4 py-10 text-bg [--ink-line:color-mix(in_srgb,var(--wine)_70%,var(--smoke))] [--ink:#2A0F18] [--line:color-mix(in_srgb,var(--wine)_22%,var(--smoke))] [--pad:8px] [--r:8px] [--smoke:#F7F4F3] [--wine:#5B2333] md:px-[10%] md:py-12 md:[--pad:12px]">
      <header className="max-w-3xl">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
          We&apos;re preparing for the <span className="text-(--wine)">next celebrations.</span>
        </h2>
        <p className="mt-2 text-base text-bg/70">Themes, atmosphere, everything you need.</p>
      </header>

      <div className="mt-10 grid gap-5 md:mt-16 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,2.15fr)_minmax(0,1fr)]">
        <div className="rounded-[calc(var(--r)+var(--pad))] bg-(--wine) p-(--pad) text-(--smoke)">
          <div className="flex items-center justify-between gap-3 px-1 pt-1">
            <h3 aria-live="polite" className="text-2xl font-medium sm:text-3xl">
              {MONTHS[month]}
            </h3>
            <div className="flex gap-3">
              <button type="button" aria-label="Previous month" disabled={month === 0} onClick={() => goTo(month - 1)} className={arrow}>
                <ChevronLeft aria-hidden strokeWidth={3} className="size-5" />
              </button>
              <button type="button" aria-label="Next month" disabled={month === MONTHS.length - 1} onClick={() => goTo(month + 1)} className={arrow}>
                <ChevronRight aria-hidden strokeWidth={3} className="size-5" />
              </button>
            </div>
          </div>

          <ul aria-hidden className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs font-medium uppercase opacity-70 md:mt-8 md:gap-2">
            {WEEKDAYS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          {/* Only the days with an event are buttons. The others are plain numbers, so they are
              not in the tab order and don't react. */}
          <ul className="mt-2 grid grid-cols-7 gap-1.5 md:gap-2">
            {Array.from({ length: lead }, (_, index) => (
              <li key={`empty-${index}`} aria-hidden />
            ))}
            {Array.from({ length: days }, (_, index) => {
              const number = index + 1;
              const eventKind = events[month][number];
              const selected = eventKind !== undefined && chosenMonth === month && day === number;
              const cell = "flex aspect-11/10 w-full flex-col rounded-(--r) border-2 p-[3px] text-left";
              const plain = "border-transparent bg-(--smoke) text-(--wine)";
              const numeral = "px-1 pt-0.5 text-sm leading-none font-semibold sm:px-1.5 sm:text-xl lg:text-2xl xl:text-3xl";

              if (!eventKind) {
                return (
                  <li key={number}>
                    <div className={cx(cell, plain)}>
                      <span className={numeral}>{number}</span>
                    </div>
                  </li>
                );
              }

              return (
                <li key={number}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls="event-calendar-card"
                    aria-label={`${longDate.format(new Date(Date.UTC(YEAR, month, number)))}: ${kinds[eventKind].name}`}
                    onClick={() => {
                      setChosenMonth(month);
                      setDay(number);
                    }}
                    className={cx(
                      cell,
                      "group/day cursor-pointer transition-[background-color,border-color,color,scale,translate] duration-150 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95",
                      selected
                        ? "border-(--ink-line) bg-(--ink) text-(--smoke) hover:bg-[color-mix(in_srgb,var(--ink)_75%,var(--wine))] active:bg-[color-mix(in_srgb,var(--ink)_55%,var(--wine))]"
                        : "border-(--line) bg-(--smoke) text-(--wine) hover:bg-[color-mix(in_srgb,var(--wine)_10%,var(--smoke))] active:bg-[color-mix(in_srgb,var(--wine)_20%,var(--smoke))]",
                      focusRing,
                    )}
                  >
                    <span className={numeral}>{number}</span>
                    <span className="relative mt-auto h-[48%] w-full overflow-hidden rounded-[calc(var(--r)-5px)]">
                      <Image
                        src={kinds[eventKind].thumb}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover/day:scale-110"
                      />
                      {/* The white smoke edge of the selected day's photo. It is drawn over the photo, so the
                          photo keeps its size and nothing shifts when a day is selected. */}
                      {selected && <span aria-hidden className="absolute inset-0 rounded-[inherit] border-2 border-(--smoke)" />}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="event-calendar-card"
          role="region"
          aria-live="polite"
          aria-label="Selected event"
          className="flex flex-col rounded-[calc(var(--r)+var(--pad))] border-2 border-(--ink-line) bg-(--ink) p-[calc(var(--pad)-2px)] text-(--smoke)"
        >
          <div
            key={`${chosenMonth}-${day}`}
            className="flex flex-1 flex-col gap-3 transition-opacity duration-200 starting:opacity-0 motion-reduce:transition-none"
          >
            <div className="relative aspect-5/3 overflow-hidden rounded-(--r) border-2 border-(--ink-line) lg:aspect-2/1 xl:aspect-5/3">
              <Image
                src={kind.image}
                alt={kind.alt}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 px-1">
              <p className="text-sm font-medium tracking-wide uppercase">{date}</p>
              <h3 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-3xl xl:text-4xl">{kind.name}</h3>
              <p className="text-base leading-6 opacity-75">{kind.description}</p>
            </div>
          </div>
          <a
            href="#"
            aria-label={`Book a ticket for ${kind.name}, ${date}`}
            className={cx(
              "mt-4 grid h-12 place-items-center rounded-(--r) bg-(--smoke) text-base font-semibold tracking-wide text-(--ink) uppercase transition-colors duration-150 hover:bg-white",
              focusRing,
            )}
          >
            Book a ticket
          </a>
        </div>
      </div>
    </section>
  );
}
