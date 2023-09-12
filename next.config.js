/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    serverActions: true,
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
      {
        source: '/logout',
        destination: '/api/logout',
      },
    ];
  },
};

module.exports = nextConfig;
