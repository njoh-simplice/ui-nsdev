import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// /robots.txt. Everything is open to crawlers except the frames inside block previews, which
// are not pages in their own right.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/preview/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
