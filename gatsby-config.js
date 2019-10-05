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
      forcedNavOrder: ["/introduction", "/enoch", "/posts"],
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
