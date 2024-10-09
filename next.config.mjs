/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai.w-manage.org',
        pathname: '/public/images/**',
      },
    ],
  },
};

export default nextConfig;
