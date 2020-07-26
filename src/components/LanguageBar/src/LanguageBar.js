import React from 'react'
import { Box, Text } from 'grommet'

const LanguageBar = (props) => {

  const Option = ({ label, path }) => {
    return (
      <Box 
        round="xsmall"
        background="light-1"
        border={{ size: "xsmall", color: "light-4" }}
        pad="large"
      >
        <Text
          weight={400}
          size="xlarge"
        >
          {label}
        </Text>
      </Box>
    )
  }

  return (
    <Box direction="row" justify="center" gap="medium" {...props}>
      <Option label="EN" />
      <Option label="CN" />
      <Option label="PL" />
    </Box>
  )
}

export default LanguageBar