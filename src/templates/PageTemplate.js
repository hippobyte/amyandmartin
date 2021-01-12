import React from 'react'
import { ResponsiveContext } from 'grommet'
import { LanguageBar, Markdown, PageLayout, PageContent, PageHeading, PageHeader, Rsvp } from '../components'
import { slugger } from '../utils'
 
const PageTemplate = ({ location, pageContext }) => { 
  const { pages, page, language } = pageContext

  const pageHeading = page.translations && page.translations.find(item => item.languageTitle === language.title) && page.translations.find(item => item.languageTitle === language.title).title
  const pageContent = page.descriptions && page.descriptions.find(item => item.languageTitle === language.title) && page.descriptions.find(item => item.languageTitle === language.title).description
  const pageNav = pages.map(item => ({ path: slugger(["/", language.locale, item.templateKey === "index" ? "" : item.templateKey]), label: item.translations.find(item => item.languageTitle === language.title).menuTitle }))

  console.log(pages)

  const { templateKey, sections } = page

  return (
    <PageLayout
      location={location}
      title={pageHeading}
    >
      <PageContent
        pageNav={pageNav}
        image={
          page.featuredimage && {
            fluid: page.featuredimage.childImageSharp.fluid,
            imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
          }
        }
      >
        {
          templateKey === "index" ? (
            <>
            <PageHeader />
            <LanguageBar />
            <Rsvp />
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
      <ResponsiveContext.Consumer>
      {
        size => (
          <>
          {
            sections && sections.map((item, index) => {
              const current = item.content.find(item => item.languageTitle === language.title)
              const heading = current && current.title
              const content = current && current.description
              const reverse = index%2 === 0 ? true : false
              return (
                <PageContent
                  reverse={size === "small" ? false : reverse}
                  image={{
                    fluid: item.featuredimage.childImageSharp.fluid,
                    imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
                  }}
                >
                  <PageHeading title={heading} alignSelf="start" style={{ textTransform: 'uppercase' }} />
                  {
                    content && <Markdown>{content}</Markdown>
                  }
                </PageContent>
              )
            })
          }
          </>
        )
      }
      </ResponsiveContext.Consumer>
    </PageLayout>
  )
}

export default PageTemplate
