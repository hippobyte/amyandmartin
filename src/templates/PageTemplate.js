import React from 'react'
import { LanguageBar, PageLayout, PageContent, PageHeading, PageHeader } from '../components'
import { slugger } from '../utils'
 
const PageTemplate = ({ location, navigate, pageContext }) => {
  const { pages, page, language } = pageContext

  const pageHeading = page.translations.find(item => item.languageTitle === language.title).title
  const pageNav = pages.map(item => ({ path: slugger(["/", language.locale, item.templateKey === "index" ? "" : item.templateKey]), label: item.translations.find(item => item.languageTitle === language.title).menuTitle }))

  return (
    <PageLayout
      location={location}
    >
      <PageContent
        pageNav={pageNav}
        image={{
          fluid: page.featuredimage.childImageSharp.fluid,
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        {
          page.templateKey === "index" ? (
            <>
            <PageHeader />
            <LanguageBar />
            </>
          ) : (
            <PageHeading title={pageHeading} />
          )
        }
      </PageContent>
    </PageLayout>
  )
}

export default PageTemplate
