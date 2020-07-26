import React from 'react'
import { Box } from 'grommet'
import { Anchor } from '../..'

const PageNav = (props) => {
  return (
    <Box 
      direction="row" 
      gap="large" 
      border={{ side: "between", size: "xsmall", color: "brand" }} 
      {...props}
    >
      <Anchor color="dark-2" label="Home" path="/" />
      <Anchor color="dark-2" label="Our Story" path="/our-story" />
      <Anchor color="dark-2" label="Travel" path="/" />
      <Anchor color="dark-2" label="Things to Do" path="/" />
      <Anchor color="dark-2" label="Photos" path="/" />
    </Box>
  )
}

export default PageNav