// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.printerassistance.com/",
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};