 import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { Image, PageNav, ResponsiveGrid } from '../..'

const GalleryContent = ({ pageNav, image, reverse, children }) => {
  return (
    <ResponsiveGrid
      columns={{
        small: ['2/2'],
        medium: ['2/2'],
        large: ['2/2'],
        xlarge: ['2/2'],
      }}
      rows={{
        small: ['auto'],
        medium: ['auto'],
        large: ['auto'],
        xlarge: ['auto'],
      }}
    >
      <ResponsiveContext.Consumer>
      {
        size => {
          return (
            <Main pageNav={pageNav} children={children} size={size} image={image} />
          )
        }
      }
      </ResponsiveContext.Consumer>
    </ResponsiveGrid>
  )
}

const Main = ({ pageNav, size, image, children }) => (
  <Box height={{ min: '100vh' }}>
    { pageNav && <PageNav items={pageNav} /> }
    { size === "small" && <Aside image={image} /> }
    <Box flex="grow" justify="center" pad="large">
      {children}
    </Box>
  </Box>
)

const Aside = ({ image }) => (
  <Box>
    {
      image && (
        <Image 
          style={{
            height: '100%',
            minHeight: '375px',
            maxHeight: '100vh'
          }}
          {...image}
        />
      )
    }
  </Box>
)

GalleryContent.defaultProps = {
  image: false,
  pageNav: false
}

export default GalleryContent