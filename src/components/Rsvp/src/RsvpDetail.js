import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { PageContent } from '../..'

const RsvpDetail = () => {
  const [active, setActive] = useState()

  const onClose = () => {
    setActive(undefined)
  }

  return (
    <PageContent>
      <Box margin={{ vertical: "xlarge" }} align="center">
        Hello World
       </Box>
    </PageContent>
  )
}

export default RsvpDetail