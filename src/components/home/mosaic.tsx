// Placeholder tiles — each one becomes a live component demo as the library is built.
// Heights (lg) mirror the design mockup; below lg the columns dissolve into a flat grid.
const columns: string[][] = [
  ["lg:h-[496px]", "lg:h-[280px]"],
  ["lg:h-[230px]", "lg:h-[210px]", "lg:h-[322px]"],
  ["lg:h-[272px]", "lg:h-[272px]", "lg:h-[219px]"],
];

export function Mosaic() {
  return (
    <section aria-hidden className="page-gutter mt-12 w-full lg:mt-14">
      <div className="relative">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[428fr_370fr_423fr]">
          {columns.map((tiles, i) => (
            <div key={i} className="contents lg:flex lg:flex-col lg:gap-3">
              {tiles.map((height, j) => (
                <div
                  key={j}
                  className={`h-44 rounded-lg border-2 border-border bg-surface sm:h-52 ${height}`}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Fades the last row into the page background. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-bg to-transparent" />
      </div>
    </section>
  );
}
