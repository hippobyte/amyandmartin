const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('github-slugger').slug

if (process.env.NODE_ENV === 'development') {
  process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageComponent  = path.resolve(`./src/templates/PageTemplate.js`)
  const photosComponent  = path.resolve(`./src/templates/GalleryTemplate.js`)
  const rsvpComponent  = path.resolve(`./src/templates/RsvpTemplate.js`)

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
            descriptions {
              languageTitle
              description
            }
            sections {
              order
              content {
                languageTitle
                title
                description
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
      thumbs: allImageSharp {
        edges {
          node {
            id
            fixed(
              cropFocus: ATTENTION, 
              quality: 40,
              width: 375,
              height: 375
            ) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalName
              src
            }
          }
        }
      }
      fluidImages: allImageSharp {
        edges {
          node {
            id
            fluid(
              cropFocus: ATTENTION, 
              quality: 70
            ) {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
              src
              presentationWidth
              presentationHeight
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
  const thumbs = defaultRequest.data.thumbs.edges.map(item => item.node)
  const photos = defaultRequest.data.fluidImages.edges.map(item => item.node)
  const languages = defaultRequest.data.allSettingsJson.edges.map(item => item.node)

  languages.forEach(language => {
    defaultPages.forEach(page => {
      const pageKey = page.templateKey === "index" ? "" : page.templateKey
      const slug = slugger([language.locale, pageKey])
      createPage({
        path: slug,
        component: page.templateKey === "photos" ? photosComponent : pageComponent,
        context: {
          slug: slug,
          pages: defaultPages,
          page: page,
          language: language,
          photos: photos,
          thumbs: thumbs
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
