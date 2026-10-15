import type { ReactNode } from "react";
import {
  AccordionTile,
  ButtonsTile,
  FormTile,
  NavigationTile,
  PricingTile,
  StatusTile,
  TabsTile,
  TextTile,
} from "@/components/home/tiles";
import { cx } from "@/lib/cx";

// The tiles of the home page, each a live component or block. Heights (lg) mirror the design
// mockup, so the layout is the same as when the tiles were empty. Below lg the columns dissolve
// into a flat grid and a tile is as tall as what is in it. `bare` tiles have no padding, for
// content that fills the whole tile.
type Tile = { height: string; content: ReactNode; bare?: boolean; className?: string };

const columns: Tile[][] = [
  [
    { height: "lg:h-[496px]", content: <NavigationTile />, bare: true, className: "h-[30rem] sm:col-span-2 lg:col-span-1" },
    { height: "lg:h-[280px]", content: <AccordionTile /> },
  ],
  [
    { height: "lg:h-[230px]", content: <ButtonsTile /> },
    { height: "lg:h-[210px]", content: <TabsTile /> },
    { height: "lg:h-[322px]", content: <FormTile /> },
  ],
  [
    { height: "lg:h-[272px]", content: <PricingTile /> },
    { height: "lg:h-[272px]", content: <TextTile /> },
    { height: "lg:h-[219px]", content: <StatusTile /> },
  ],
];

export function Mosaic() {
  return (
    <section aria-label="Live components" className="page-gutter mt-12 w-full lg:mt-14">
      <div className="relative">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[428fr_370fr_423fr]">
          {columns.map((tiles, i) => (
            <div key={i} className="contents lg:flex lg:flex-col lg:gap-3">
              {tiles.map(({ height, content, bare, className }, j) => (
                <div
                  key={j}
                  className={cx(
                    "relative flex min-h-44 items-center justify-center overflow-hidden rounded-lg border-2 border-border bg-surface",
                    !bare && "p-4",
                    height,
                    className,
                  )}
                >
                  {content}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Fades the last row into the page background. */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-bg to-transparent" />
      </div>
    </section>
  );
}
