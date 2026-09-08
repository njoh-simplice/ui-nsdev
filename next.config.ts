import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root. Without this, Turbopack walks up the tree and finds a
  // stray C:\Users\LENOVO\package-lock.json, which is outside this repo.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
