import React, { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { Anchor } from '../../../components'
import { slugger } from '../../../utils'

const LanguageBar = ({ ...rest }) => {
  const { options, setLanguage } = useOptions()
  const [value, setValue] = useLocalStorage('language')

  const request = useStaticQuery(graphql`
    query LanguageOptions {
      allSettingsJson(
        filter: {templateKey: {eq: "language-settings"}}, 
        sort: {fields: order, order: ASC}) {
        edges {
          node {
            title
            description
            locale
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
      const defaultItem = request.allSettingsJson.edges.map(item => item.node).find(item => item.title === value)
      setLanguage(defaultItem)
    } else {
      const defaultItem = request.allSettingsJson.edges.map(item => item.node).find(item => item.default)
      if (defaultItem) {
        setLanguage(defaultItem)
        setValue(defaultItem.title)
      }
    }
  }, [])

  const setLanguageOption = (value) => {
    const defaultItem = request.allSettingsJson.edges.map(item => item.node).find(item => item.title === value)
    setLanguage(defaultItem)
    setValue(value)
  }

  const translate = () => {
    const languages = request.allSettingsJson.edges.map(item => item.node)
    const current = languages.find(item => item.title === options.language.title)
    return current && current.translations.map(item => ({ title: item.languageTitle, description: item.translation, locale: languages.find(lang => lang.title === item.languageTitle).locale }))
  }

  const data = options.language.title ? translate() : request.allSettingsJson.edges.map(item => item.node)

  const Option = ({ title, description, locale }) => {
    return (
      <Anchor
        color="dark-1"
        path={`${slugger(['/', locale])}`}
      >
        <Box 
          onClick={() => setLanguageOption(title)}
          border={{ size: "xsmall", color: "light-3" }}
          margin={{ top: "medium" }}
          pad={{ vertical: "xsmall", horizontal: "small" }}
        >
          <Text
            weight={500}
          >
            {options.language.title ? description : title}
          </Text>
        </Box>
      </Anchor>
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
          margin={{ vertical: "medium" }}
          {...rest}
        >
          {
            data.map(item => <Option {...item} />)
          }
        </Box>
      )
    }
    </>
  )
}

export default LanguageBar