require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require('./src/utils/algolia')

module.exports = {
  siteMetadata: {
    title: `Bibwoe.com`,
    name: `Bibwoe`,
    siteUrl: `https://bibwoe.com`,
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
      forcedNavOrder: ["/contact", "/enoch", "/posts"],
      ignoreIndex: true
    }
  },
  plugins: [
    { 
      resolve: `gatsby-theme-document` 
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://donboulton.us4.list-manage.com/subscribe/post?u=946962f91a21100144db815b9&amp;id=c2a27bdd5f', // see instructions at official plugin page
      },
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-remark-autolink-headers`,
      options: {
        offsetY: `100`,
        icon: `<svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill='#d64000' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path></svg>`,
        className: `link-icon`,
        maintainCase: true,
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000
      }
    },
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
    'gatsby-plugin-netlify-cache',
  ]
};
