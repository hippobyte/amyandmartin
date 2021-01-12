import React from 'react'
import { Box, Grommet, Heading, Text } from 'grommet'
import { theme } from '../style'

const NotFoundPage = () => (
  <Grommet theme={theme} full>
    <Box 
      background="primary" 
      pad="large" 
      fill
    >
      <Heading level={1}>
        Not Found
      </Heading>
      <Text weight={500} size="large">
        Sorry, the page you are looking for cannot be found.
      </Text>
    </Box>
  </Grommet>
)

export default NotFoundPage