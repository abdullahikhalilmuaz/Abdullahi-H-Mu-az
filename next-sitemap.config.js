/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abdullahihmuaz.onrender.com",
  generateRobotsTxt: true,
  outDir: "./public",
  sitemapSize: 7000,
  exclude: ["/private/*", "/404"], // optional
  sourceDir: "src/app", // 👈 tell next-sitemap where your routes are
  changefreq: "weekly",
  priority: 0.7,
};
