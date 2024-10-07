/** @type {import('next').NextConfig} */
const nextConfig = {
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
