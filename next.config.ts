import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Auto-compress dan optimize semua image
    formats: ['image/avif', 'image/webp'],
    // Cache image optimization selama 60 hari
    minimumCacheTTL: 60 * 60 * 24 * 60,
    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;