import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    useCache: true,
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
