const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('github-slugger').slug

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageComponent  = path.resolve(`./src/templates/PageTemplate.js`)

  const slugger = (options, join="/") => {
    return options.map(option => slugify(option)).join(join)
  }

  // 
  // DEFAULT PAGES
  // 
  const defaultRequest = await graphql(`
    {
      allPagesJson(
        sort: {fields: order, order: ASC}
      ) {
        edges {
          node {
            templateKey
            translations {
              languageTitle
              title
              menuTitle
            }
            featuredimage {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
                  src
                }
              }
            }
          }
        }
      }
      allSettingsJson(
        filter: {templateKey: {eq: "language-settings"}}, 
        sort: {fields: order, order: ASC}) {
        edges {
          node {
            title
            description
            locale
            default
            order
            translations {
              languageTitle
              translation
            }
          }
        }
      }
    }
  `)

  if (defaultRequest.errors) {
    throw defaultRequest.errors
  }

  const defaultPages = defaultRequest.data.allPagesJson.edges.map(item => item.node)
  const languages = defaultRequest.data.allSettingsJson.edges.map(item => item.node)

  languages.forEach(language => {
    defaultPages.forEach(page => {
      const pageKey = page.templateKey === "index" ? "" : page.templateKey
      const slug = slugger([language.locale, pageKey])
      createPage({
        path: slug,
        component: pageComponent,
        context: {
          slug: slug,
          pages: defaultPages,
          page: page,
          language: language
        }
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
