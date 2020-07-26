import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'grommet'

const LanguageBar = (props) => {
  const [active, setActive] = useState()

  const request = useStaticQuery(graphql`
    query LanguageOptions {
      allOptionsJson(filter: {templateKey: {eq: "site-settings"}}, sort: {fields: order, order: ASC}) {
        edges {
          node {
            title
            description
            translations {
              languageTitle
              translation
            }
          }
        }
      }
    }
  `)

  const translate = () => {
    const item = request.allOptionsJson.edges.map(item => item.node).find(item => item.title === active)  
    return item && item.translations.map(item => ({ title: item.languageTitle, description: item.translation }))
  }

  const data = active ? translate() : request.allOptionsJson.edges.map(item => item.node)

  const Option = ({ title, description }) => {
    return (
      <Box 
        onClick={() => setActive(title)}
      >
        <Text
          weight={500}
        >
          {active ? description : title}
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