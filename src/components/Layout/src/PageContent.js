import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'
import { Image, PageNav, ResponsiveGrid } from '../..'

const PageContent = ({ pageNav, image, reverse, children }) => {
  const size = useContext(ResponsiveContext)

  console.log(size)
  return (
    <ResponsiveGrid
      columns={{
        small: ['2/2', '2/2'],
        medium: ['1/2', '1/2'],
        large: ['1/2', '1/2'],
        xlarge: ['1/2', '1/2'],
      }}
      rows={{
        small: ['50vh'],
        medium: ['100vh'],
        large: ['100vh'],
        xlarge: ['100vh'],
      }}
    >
      <Main pageNav={pageNav} children={children} />
      <Aside image={image} />
    </ResponsiveGrid>
  )
}

const Main = ({ pageNav, children }) => (
  <Box>
    { pageNav && <PageNav /> }
    <Box flex="grow" align="center" justify="center" pad="medium">
      {children}
    </Box>
  </Box>
)

const Aside = ({ image }) => (
  <Box>
    {
      image && (
        <PrimaryImage {...image} />
      )
    }
  </Box>
)

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