import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { PageLayout, PageNav, RsvpConfirm } from '../components'
import { slugger } from '../utils'
 
const RsvpTemplate = ({ location, pageContext }) => { 
  const { pages, page, language } = pageContext

  const pageHeading = page.translations && page.translations.find(item => item.languageTitle === language.title) && page.translations.find(item => item.languageTitle === language.title).title
  const pageNav = pages.filter(item => item.templateKey !== 'confirm').map(item => ({ path: slugger(["/", language.locale, item.templateKey === "index" ? "" : item.templateKey]), label: item.translations.find(item => item.languageTitle === language.title).menuTitle }))

  return (
    <PageLayout
      location={location}
      title={pageHeading}
    >
      <Box pad={{ bottom: "8em" }}>
        <PageNav items={pageNav} />
        <ResponsiveContext.Consumer>
          {
            size => {
              return <RsvpConfirm page={page} viewportSize={size} language={language} />
            }
          }
        </ResponsiveContext.Consumer>
      </Box>
    </PageLayout>
  )
}

export default RsvpTemplate
