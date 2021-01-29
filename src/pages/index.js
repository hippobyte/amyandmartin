import React, { useEffect } from 'react'
import { useNavigate } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import { useOptions } from '../state/hooks'
import { PageLayout, PageContent, PageHeader, LanguageBar } from '../components'
import { slugger } from '../utils'

const Home = ({ location }) => {
  const { options } = useOptions()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== `/${options.language.locale}`) {
      navigate(`${options.language.locale}${location.search}`)
    }
  }, [options])

  const data = useStaticQuery(graphql`
    query {
      page: pagesJson(templateKey: {eq: "index"}) {
        translations {
          languageTitle
          title
        }
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
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
    }
  `)

  const pages = data.allPagesJson.edges.map(item => item.node)
  const pageNav = pages.map(item => ({ 
    path: slugger(["/", 'en', item.templateKey]), 
    label: item.translations.find(item => item.languageTitle === 'English').menuTitle
  }))

  return (
    <PageLayout
      title="Amy and Martin's Wedding"
      description="Amy and Martin's Wedding"
      location={location}
    >
      <PageContent
        pageNav={pageNav}
        image={{
          fluid: data.page.featuredimage.childImageSharp.fluid,
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        <PageHeader />
        <LanguageBar />
      </PageContent>
    </PageLayout>
  )
}

export default Home