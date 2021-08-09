import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import {
  LanguageBar,
  Markdown,
  PageLayout,
  PageContent,
  PageHeading,
  PageHeader,
  Rsvp,
  WeddingDay
} from "../components"

const PageTemplate = ({ location, pageContext }) => {
  const { pageNav, page, language } = pageContext

  const pageHeading = page.translations && page.translations.find(item => item.languageTitle === language.title) && page.translations.find(item => item.languageTitle === language.title).title
  const pageContent = page.descriptions && page.descriptions.find(item => item.languageTitle === language.title) && page.descriptions.find(item => item.languageTitle === language.title).description

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
            <Box pad={{ bottom: "6em" }}>
              <WeddingDay
                pageContext={pageContext}
              />
              <Rsvp />
            </Box>
            </>
          ) : (
            <>
            <PageHeading alignSelf="start" title={pageHeading} />
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
              const isLast  = sections.length === (index + 1)

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
                    content && (
                      <Box pad={size === "small" && isLast && { bottom: "6em" }}>
                        <Markdown>{content}</Markdown>
                      </Box>
                    )
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
