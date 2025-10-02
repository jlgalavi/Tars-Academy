import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración optimizada para Vercel
  output: 'standalone',
  // Compresión de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    // No hay imágenes externas por ahora
    remotePatterns: [],
  },
  // Optimización de headers para recursos estáticos
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
