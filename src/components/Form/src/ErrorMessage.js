import React from 'react'
import { Box, Text } from 'grommet'

const ErrorMessage = ({ message, inputType }) => {
  if (message && inputType !== 'Hidden') {
    return (
      <Box margin={{ top: "xsmall" }}>
        <Text size="small" weight={600} color='danger-13'>
          {message}
        </Text>
      </Box>
    )
  }

  return null
}

export default ErrorMessage