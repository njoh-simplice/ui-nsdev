"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// The header and footer of the site, except inside a block preview (/preview/...): there the
// block is shown on its own, in a frame, exactly as it would sit on a page of its own.
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const embedded = usePathname().startsWith("/preview/");
  return (
    <>
      {!embedded && header}
      {children}
      {!embedded && footer}
    </>
  );
}
