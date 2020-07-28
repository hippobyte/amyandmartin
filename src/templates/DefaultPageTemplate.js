import React from 'react'
import { PageLayout, PageContent } from '../components'
 
const DefaultPageTemplate = ({ location, pageContext }) => {
  return (
    <PageLayout
      location={location}
    >
      <PageContent
        pageNav={true}
        image={{
          fluid: pageContext.featuredimage.childImageSharp.fluid,
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
      </PageContent>
    </PageLayout>
  )
}

export default DefaultPageTemplate
