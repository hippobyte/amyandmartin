import React from 'react'
import { Box, Grommet, Heading } from 'grommet'
import { theme } from '../../../style'

const Layout = ({ children }) => {
  return (
    <Grommet theme={theme} full>
      <Box 
        border={{ size: "xsmall", color: "light-5" }}
        round="small"
        margin={{ horizontal: "xlarge", vertical: "large" }}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <Heading level={1}>Martin & Amy</Heading>
        {children}
      </Box>
    </Grommet>
  )
}

export default Layout