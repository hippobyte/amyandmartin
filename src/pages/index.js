import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PageLayout, PageContent, PageHeader, LanguageBar } from '../components'

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      page: pagesJson(templateKey: {eq: "home"}) {
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
    }
  `)

  return (
    <PageLayout
      title="Amy and Martin's Wedding"
      description="Amy and Martin's Wedding"
      location={location}
    >
      <PageContent
        pageNav={true}
        image={{
          fluid: data.page.featuredimage.childImageSharp.fluid,
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        <PageHeader />
        <LanguageBar margin={{ vertical: "medium" }} />
      </PageContent>
    </PageLayout>
  )
}

export default Home