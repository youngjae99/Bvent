/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bventday.xyz',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/mypage', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/mypage'],
      },
    ],
    additionalSitemaps: ['https://www.bventdao.xyz/server-sitemap.xml'],
  },
};
