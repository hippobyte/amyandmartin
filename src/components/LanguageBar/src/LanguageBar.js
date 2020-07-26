import React, { useState } from 'react'
import { Box, Text } from 'grommet'

const LanguageBar = (props) => {
  const [active, setActive] = useState()

  const Option = ({ label, LanguageCode }) => {
    return (
      <Box 
        round="xsmall"
        background={LanguageCode === active ? "brand" : undefined}
        border={{ size: "xsmall", color: "brand" }}
        pad={{ horizontal: "large", vertical: "xsmall" }}
        onClick={() => console.log(LanguageCode)}
        onMouseEnter={() => setActive(LanguageCode)}
        onMouseLeave={() => setActive()}
      >
        <Text
          weight={500}
          color={LanguageCode === active ? "white" : "brand"}
        >
          {label}
        </Text>
      </Box>
    )
  }

  return (
    <Box 
      direction="row" 
      justify="center" 
      gap="medium" 
      {...props}
    >
      <Option label="English" LanguageCode="en" />
      <Option label="Mandarin" LanguageCode="cn" />
      <Option label="Polish" LanguageCode="pl" />
    </Box>
  )
}

export default LanguageBar