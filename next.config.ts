import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimasi otomatis ke format modern (AVIF preferred, WebP fallback)
    formats: ['image/avif', 'image/webp'],
    // Konfigurasi kualitas dan caching
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 hari
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;