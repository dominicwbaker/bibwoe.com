module.exports = {
  siteMetadata: {
    title: `Bibwoe.com`,
    name: `Bibwoe`,
    author: `Donald Boulton`,
    siteUrl: `https://bibwoe.com`,
    pathPrefix: `/`,
    language: `en-US`,
    description: `Basic Instructions Books While On Earth`,
    social: [
      {
        name: `github`,
        url: `https://github.com/donaldboulton/bibwoe.com`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/donboulton`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/posts", "/enoch"],
      ignoreIndex: true,
      navOpen: false
    }
  },
  plugins: [
    { 
      resolve: `gatsby-theme-document` 
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "nofollow"
          }
        }
        ]
      }
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*.js': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/*.css': [
            'cache-control: public, max-age=31536000, immutable',
          ],
          '/sw.js': [
            'cache-control: public, max-age=0, must-revalidate',
          ],
        },
      },
    },
  ]
};
