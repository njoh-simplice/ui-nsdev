import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up the tree and finds a
  // stray C:\Users\LENOVO\package-lock.json, which is outside this repo.
  turbopack: {
    root: __dirname,
  },
  // The first two blocks were called Navigation 1 and Navigation 2. Their old addresses, and
  // their preview frames, keep working.
  async redirects() {
    return [
      { source: "/blocks/navigation-1", destination: "/blocks/card-menu", permanent: true },
      { source: "/blocks/navigation-2", destination: "/blocks/underlay-menu", permanent: true },
      { source: "/preview/navigation-1", destination: "/preview/card-menu", permanent: true },
      { source: "/preview/navigation-2", destination: "/preview/underlay-menu", permanent: true },
    ];
  },
};

export default nextConfig;
