/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Amy and Martin`,
    author: `Martin Marzejon`,
    description: `Amy and Martin's Adventures`,
    siteUrl: `https://amyandmartin.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu\:400,500,700`,
          `Poiret+One\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/media`,
        name: `media`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`
  ]
}
