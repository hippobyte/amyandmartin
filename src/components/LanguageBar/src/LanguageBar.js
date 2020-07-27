import React, { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'grommet'
import { useOptions } from '../../../state/hooks'

const LanguageBar = (props) => {
  const { options, setLanguage } = useOptions()
  const [value, setValue] = useLocalStorage('language')

  const request = useStaticQuery(graphql`
    query LanguageOptions {
      allOptionsJson(filter: {templateKey: {eq: "site-settings"}}, sort: {fields: order, order: ASC}) {
        edges {
          node {
            title
            description
            default
            translations {
              languageTitle
              translation
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (value) {
      setLanguage(value)
    } else {
      const defaultItem = request.allOptionsJson.edges.map(item => item.node).find(item => item.default)
      if (defaultItem) {
        setLanguage(defaultItem.title)
        setValue(defaultItem.title)
      }
    }
  }, [])

  const setLanguageOption = (title) => {
    setLanguage(title)
    setValue(title)
  }

  const translate = () => {
    const item = request.allOptionsJson.edges.map(item => item.node).find(item => item.title === options.language)
    return item && item.translations.map(item => ({ title: item.languageTitle, description: item.translation }))
  }

  const data = options.language ? translate() : request.allOptionsJson.edges.map(item => item.node)

  const Option = ({ title, description }) => {
    return (
      <Box 
        onClick={() => setLanguageOption(title)}
        border={{ size: "xsmall", color: "light-3" }}
        margin={{ top: "medium" }}
        pad={{ vertical: "xsmall", horizontal: "small" }}
      >
        <Text
          weight={500}
        >
          {options.language ? description : title}
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