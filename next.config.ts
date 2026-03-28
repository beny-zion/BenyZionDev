import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.torinoil.com' },
      { protocol: 'https', hostname: 'www.itpa.org.il' },
      { protocol: 'https', hostname: 'ibt-seven.vercel.app' },
    ],
  },
};

export default nextConfig;
