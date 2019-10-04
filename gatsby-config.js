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
      forcedNavOrder: ["/introduction", "/codeblock"],
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
    `gatsby-plugin-offline`,
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
