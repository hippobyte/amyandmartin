 import React from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { Image, PageNav, ResponsiveGrid } from '../..'

const PageContent = ({ pageNav, image, justify, reverse, children }) => {
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
        medium: ['auto'],
        large: ['auto'],
        xlarge: ['auto'],
      }}
    >
      <ResponsiveContext.Consumer>
      {
        size => {
          return (
            <>
            {
              reverse ? (
                <>
                  { image && <Aside image={image} /> }
                  <Main justify={justify} pageNav={pageNav} children={children} size={size} image={image} />
                </>
              ) : (
                <>
                  <Main justify={justify} pageNav={pageNav} children={children} size={size} image={image} />
                  { image && size !== "small" && <Aside image={image} /> }
                </>
              )
            }
            </>
          )
        }
      }
      </ResponsiveContext.Consumer>
    </ResponsiveGrid>
  )
}

const Main = ({ pageNav, size, image, justify, children }) => {
  return (
    <Box height={{ min: '100vh' }}>
      { pageNav && <PageNav items={pageNav} /> }
      { size === "small" && image && <Aside image={image} /> }
      <Box flex="grow" justify={justify} pad="large">
        {children}
      </Box>
    </Box>
  )
}

Main.defaultProps = {
  justify: "center"
}

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

PageContent.defaultProps = {
  image: false,
  pageNav: false
}

export default PageContent