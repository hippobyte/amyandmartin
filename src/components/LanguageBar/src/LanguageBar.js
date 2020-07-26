import React from 'react'
import { Box, Text } from 'grommet'
import { Anchor } from '../../'

const LanguageBar = (props) => {

  const Option = ({ label, path }) => {
    return (
      <Anchor path={path}>
        <Box 
          round="small"
          background="light-1"
          border={{ size: "xsmall", color: "brand" }}
          pad={{ horizontal: "large", vertical: "medium" }}
        >
          <Text
            weight={500}
            size="xlarge"
            color="brand"
          >
            {label}
          </Text>
        </Box>
      </Anchor>
    )
  }

  return (
    <Box direction="row" justify="center" gap="medium" {...props}>
      <Option label="EN" path="/en" />
      <Option label="CN" path="/cn" />
      <Option label="PL" path="/pl" />
    </Box>
  )
}

export default LanguageBar