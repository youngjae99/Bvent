// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([], {
  images: {
    domains: ['drive.google.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.bventdao.xyz/:path*',
      },
    ]
  },
});
