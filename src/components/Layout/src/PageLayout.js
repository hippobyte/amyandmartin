import React from 'react'
import { Box, Grommet } from 'grommet'
import { PageHeader } from '../index'
import { theme } from '../../../style'

const PageLayout = ({ children }) => {
  return (
    <Grommet theme={theme} full>
      <Box 
        border={{ size: "xsmall", color: "brand" }}
        round="small"
        margin={{ horizontal: "xlarge", vertical: "large" }}
        pad={{ horizontal: "large", vertical: "medium" }}
      >
        <PageHeader />
        {children}
      </Box>
    </Grommet>
  )
}

export default PageLayout