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
          `Montserrat\:400,500,600,700`,
          `Poiret+One\:400`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content/pages`,
        name: `pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content/media`,
        name: `images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/content/settings`,
        name: `options`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amy and Martin`,
        short_name: `A&M`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0059ff`,
        display: `standalone`,
        icon: `static/favicon.png`,
        theme_color_in_head: false
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 90
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`
  ]
}
