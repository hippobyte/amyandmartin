const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('github-slugger').slug

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const defaultPageComponent  = path.resolve(`./src/templates/DefaultPageTemplate.js`)

  const slugger = (options, join="/") => {
    return options.map(option => slugify(option)).join(join)
  }

  // 
  // DEFAULT PAGES
  // 
  const defaultRequest = await graphql(`
    {
      allPagesJson(filter: {templateKey: {in: ["activities", "travel", "story"]}}) {
        edges {
          node {
            templateKey
            translations {
              languageTitle
              title
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
    }
  `)

  if (defaultRequest.errors) {
    throw defaultRequest.errors
  }

  const defaultPages = defaultRequest.data.allPagesJson.edges.map(item => item.node)
  defaultPages.forEach(item => {
    const slug = slugger([item.templateKey])
    createPage({
      path: slug,
      component: defaultPageComponent,
      context: {
        ...item
      }
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
