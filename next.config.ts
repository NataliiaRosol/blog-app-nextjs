import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Дозволяє зображення з будь-якого домену
      },
    ],
  },
};

export default nextConfig;
