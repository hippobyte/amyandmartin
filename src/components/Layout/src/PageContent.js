import React from 'react'
import { Box } from 'grommet'
import { Image, PageNav, ResponsiveGrid } from '../..'

const PageContent = ({ pageNav, image, children }) => {
  return (
    <ResponsiveGrid
      columns={{
        small: ['2/2', '1/4'],
        medium: ['1/2', '1/2'],
        large: ['1/2', '1/2'],
        xlarge: ['1/2', '1/2'],
      }}
      rows={{
        small: ['50vh'],
        large: ['100vh'],
        xlarge: ['100vh'],
      }}
    >
      <Box>
        { pageNav && <PageNav /> }
        <Box flex="grow" align="center" justify="center">
          {children}
        </Box>
      </Box>
      <Box>
        {
          image && (
            <PrimaryImage {...image} />
          )
        }
      </Box>
    </ResponsiveGrid>
  )
}

const PrimaryImage = ({ data, path, ...rest }) => {
  return (
    <Image 
      data={data} 
      path={path}
      style={{
        height: '100%',
        minHeight: '375px'
      }}
      {...rest}
    />
  )
}

PageContent.defaultProps = {
  image: false,
  pageNav: false
}

export default PageContent