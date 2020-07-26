import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'grommet'

const LanguageBar = (props) => {
  const [active, setActive] = useState()
  const request = useStaticQuery(graphql`
    query LanguageOptions {
      allOptionsJson(filter: {templateKey: {eq: "site-settings"}}) {
        edges {
          node {
            code
            title
            description
          }
        }
      }
    }
  `)

  const data = request.allOptionsJson.edges.map(item => item.node)  

  const Option = ({ title, description, code }) => {
    return (
      <Box 
        onClick={() => console.log(code)}
        onMouseEnter={() => setActive(code)}
        onMouseLeave={() => setActive()}
      >
        <Text
          weight={500}
        >
          {code === active  ? description : title}
        </Text>
      </Box>
    )
  }

  return (
    <>
    {
      data.length > 0 && (
        <Box 
          direction="row" 
          justify="center" 
          gap="medium" 
          {...props}
        >
          {
            data.map(item => (
              <Option {...item} />
            ))
          }
        </Box>
      )
    }
    </>
  )
}

export default LanguageBar