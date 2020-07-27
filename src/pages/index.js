import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PageLayout, PageContent, PageHeader, LanguageBar } from '../components'

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {in: [
        "martinamyhome.jpeg"
      ]}}) {
        images: edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
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
    >
      <PageContent
        pageNav={true}
        image={{
          data: data,
          path: "martinamyhome.jpeg",
          imgStyle: { objectFit: 'cover', objectPosition: '0 30%' }
        }}
      >
        <PageHeader />
        <LanguageBar margin={{ vertical: "medium" }} />
      </PageContent>
    </PageLayout>
  )
}

export default Home