/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  // Cho phép bỏ qua lỗi TypeScript khi build trên Vercel
  typescript: {
    ignoreBuildErrors: true,
  },
  // Cho phép bỏ qua lỗi ESLint khi build trên Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;