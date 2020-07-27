import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { PageLayout, PageContent, PageHeader, LanguageBar } from '../components'

const Home = ({ location }) => {
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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      page: markdownRemark(frontmatter: {title: {eq: "Home"}}) {
        frontmatter {
          translations {
            languageTitle
            title
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <PageLayout
      title="Amy and Martin's Wedding"
      description="Amy and Martin's Wedding"
      location={location}
    >
      <PageContent
        pageNav={true}
        image={{
          data: data,
          path: "martinamyhome.jpeg",
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