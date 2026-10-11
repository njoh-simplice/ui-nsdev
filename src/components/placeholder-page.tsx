// Stand-in for sections that are not built yet: just the section name for now.
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="page-gutter flex-1 pt-16 lg:pt-24">
      <h1 className="text-[2.75rem] leading-[1.05] font-bold text-text sm:text-[3.5rem]">
        {title}
      </h1>
    </main>
  );
}
