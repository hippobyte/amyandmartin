import React from 'react'
import { Box } from 'grommet'
import { Anchor } from '../..'

const PageNav = ({ children }) => {
  return (
    <Box direction="row" justify="center" gap="small" margin={{ top: "medium" }}>
      <Anchor label="Home" path="/" />
      <Anchor label="Our Story" path="/" />
      <Anchor label="Travel" path="/" />
      <Anchor label="Things to Do" path="/" />
      <Anchor label="Photos" path="/" />
    </Box>
  )
}

export default PageNav