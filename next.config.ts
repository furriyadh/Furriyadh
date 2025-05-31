/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['shown.io'],
  },
  // إزالة الخيار التجريبي appDir
  // experimental: {
  //   appDir: true,
  // },
  // تكوين المسارات الثابتة للأصول
  async rewrites() {
    return [
      {
        source: '/favicons/:path*',
        destination: '/public/favicons/:path*',
      },
      {
        source: '/assets/:path*',
        destination: '/public/assets/:path*',
      },
      {
        source: '/static/:path*',
        destination: '/public/static/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
