 import React from 'react'
import { Box } from 'grommet'
import { Image, PageNav, ResponsiveGrid } from '../..'

const PageContent = ({ pageNav, image, reverse, children }) => {
  return (
    <ResponsiveGrid
      columns={{
        small: ['2/2', '2/2'],
        medium: ['1/2', '1/2'],
        large: ['1/2', '1/2'],
        xlarge: ['1/2', '1/2'],
      }}
      rows={{
        small: ['auto'],
        medium: ['100vh'],
        large: ['100vh'],
        xlarge: ['100vh'],
      }}
    >
      {
        reverse ? (
          <>
            { image && <Aside image={image} /> }
            <Main pageNav={pageNav} children={children} />
          </>
        ) : (
          <>
            <Main pageNav={pageNav} children={children} />
            { image && <Aside image={image} /> }
          </>
        )
      }
    </ResponsiveGrid>
  )
}

const Main = ({ pageNav, children }) => (
  <Box>
    { pageNav && <PageNav items={pageNav} /> }
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
            minHeight: '375px'
          }}
          {...image}
        />
      )
    }
  </Box>
)

PageContent.defaultProps = {
  image: false,
  pageNav: false
}

export default PageContent