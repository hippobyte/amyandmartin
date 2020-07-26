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
          `Forum\:400`
        ],
        display: 'swap'
      }
    }
  ]
}
