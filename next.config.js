/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },

  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Author',
            value: require('./package.json').author,
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/',
        destination: '/account/top',
      },
    ];
  },
};

module.exports = nextConfig;
