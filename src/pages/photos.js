import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PageLayout, PageContent, PageHeader } from '../components'

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {in: [
        "amymartin.jpeg"
      ]}}) {
        images: edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PageLayout
      title="Photo Galley"
    >
      <PageContent
        pageNav={true}
        image={{
          data: data,
          path: "amymartin.jpeg",
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        <PageHeader />

      </PageContent>
      <PageContent
        reverse
        image={{
          data: data,
          path: "amymartin.jpeg",
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        <PageHeader />
        
      </PageContent>
    </PageLayout>
  )
}

export default Home