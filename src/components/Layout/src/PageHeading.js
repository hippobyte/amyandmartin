import React from 'react'
import { Heading } from 'grommet'

const PageHeading = ({ title, ...rest }) => {
  return (
    <Heading 
      level={1} 
      alignSelf="center" 
      margin={{ top: "none", bottom: "medium" }}
      {...rest}
    >
      {title}
    </Heading>
  )
}

export default PageHeading