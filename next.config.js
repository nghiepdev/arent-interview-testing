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
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/account/top',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/logout',
        destination: '/api/logout',
      },
    ];
  },
};

module.exports = nextConfig;
