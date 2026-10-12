import type { ReactNode } from "react";

// One page of the content column. Sections inside should use <h2 id="..."> so they
// show up in the "On this page" column; styling comes from .doc-prose in globals.css.
export function DocPage({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <article className="max-w-3xl">
      <h1 className="text-4xl leading-[1.05] font-bold text-text sm:text-5xl">{title}</h1>
      {children && <div className="doc-prose mt-6">{children}</div>}
    </article>
  );
}
