import React from 'react'
import { ResponsiveContext } from 'grommet'
import { PageLayout, GalleryContent, Markdown, PageHeading, PhotoGallery } from '../components'
 
const GalleryTemplate = ({ location, pageContext }) => {
  const { pageNav, page, language, photos, thumbs } = pageContext

  const pageHeading = page.translations && page.translations.find(item => item.languageTitle === language.title) && page.translations.find(item => item.languageTitle === language.title).title
  const pageContent = page.descriptions && page.descriptions.find(item => item.languageTitle === language.title) && page.descriptions.find(item => item.languageTitle === language.title).description

  return (
    <PageLayout
      location={location}
      title={pageHeading}
    >
      <GalleryContent
        pageNav={pageNav}
      >
        <ResponsiveContext.Consumer>
        {
          size => (
            <>
            <PageHeading title={pageHeading} alignSelf="start" />
            {
              pageContent && <Markdown>{pageContent}</Markdown>
            }
            <PhotoGallery photos={photos} thumbs={thumbs} size={size} />
            </>
          )
        }
        </ResponsiveContext.Consumer>
      </GalleryContent>
    </PageLayout>
  )
}

export default GalleryTemplate
