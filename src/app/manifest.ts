import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION } from "@/lib/site";

// /manifest.webmanifest, which Next links from every page. The icons are the files in public/.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NSDEV UI",
    short_name: "NSDEV UI",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
