import React from 'react'
import { LanguageBar, Markdown, PageLayout, PageContent, PageHeading, PageHeader } from '../components'
import { slugger } from '../utils'
 
const PageTemplate = ({ location, pageContext }) => {
  const { pages, page, language } = pageContext

  const pageHeading = page.translations.find(item => item.languageTitle === language.title).title
  const pageContent = page.descriptions && page.descriptions.find(item => item.languageTitle === language.title).description
  const pageNav = pages.map(item => ({ path: slugger(["/", language.locale, item.templateKey === "index" ? "" : item.templateKey]), label: item.translations.find(item => item.languageTitle === language.title).menuTitle }))

  const { templateKey, sections } = page

  return (
    <PageLayout
      location={location}
      title={pageHeading}
    >
      <PageContent
        pageNav={pageNav}
        image={{
          fluid: page.featuredimage.childImageSharp.fluid,
          imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
        }}
      >
        {
          templateKey === "index" ? (
            <>
            <PageHeader />
            <LanguageBar />
            </>
          ) : (
            <>
            <PageHeading title={pageHeading} />
            {
              pageContent && <Markdown>{pageContent}</Markdown>
            }
            </>
          )
        }
      </PageContent>
      {
        sections && sections.map(item => {
          const current = item.content.find(item => item.languageTitle === language.title)
          const heading = current && current.title
          const content = current && current.description
          return (
            <PageContent
              image={{
                fluid: item.featuredimage.childImageSharp.fluid,
                imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
              }}
            >
              <PageHeading title={heading} />
              {
                content && <Markdown>{content}</Markdown>
              }
            </PageContent>
          )
        })
      }
    </PageLayout>
  )
}

export default PageTemplate