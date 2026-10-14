import type { MetadataRoute } from "next";
import { SITE_SECTIONS, absoluteUrl } from "@/lib/site-map";

// /sitemap.xml, generated at build time from the same lists as the menus. No lastModified: the
// build date would say every page changed on every deploy, which is not true.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...SITE_SECTIONS.flatMap((section) => [...(section.index ? [section.index.path] : []), ...section.pages.map((page) => page.path)])];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
