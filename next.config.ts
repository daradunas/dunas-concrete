import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    useCache: true,
  },
};

export default nextConfig;
