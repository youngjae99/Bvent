/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bventday.xyz',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/mypage'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/mypage'],
      },
    ],
  },
};
