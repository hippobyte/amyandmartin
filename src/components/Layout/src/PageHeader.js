import React from 'react'
import moment from 'moment-with-locales-es6'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Heading } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { LanguageBar } from '../..'

const PageHeader = ({ languageBar, ...rest }) => {
  const { options } = useOptions()

  const request = useStaticQuery(graphql`
    query WeddingSettings {
      settings: settingsJson(templateKey: {eq: "wedding-settings"}) {
        title
        ceremonyDate
        location
        directions  
      }
    }
  `)

  const { title, ceremonyDate, location } = request.settings

  return (
    <Box
      {...rest}
    >
      <Heading level={1} alignSelf="center" margin={{ top: "none", bottom: "medium" }}>{title}</Heading>
      <Box direction="row" justify="center" wrap>
        <Box pad={{ horizontal: "xsmall" }} margin={{ vertical: "xsmall" }}>
          <Heading level={2} margin="none" color="dark-7">
            {moment(ceremonyDate).locale(options.language.locale).format('LL')}
          </Heading>
        </Box>
        <Box pad={{ horizontal: "xsmall" }} margin={{ vertical: "xsmall" }}>
          <Heading level={2} margin="none" color="dark-7">{location}</Heading>
        </Box>
      </Box>
      {
        languageBar && (
          <LanguageBar
            margin={{ top: "large" }}
          />
        )
      }
    </Box>
  )
}

PageHeader.defaultProps = {
  languageBar: false
}

export default PageHeader
