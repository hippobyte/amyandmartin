import React from 'react'
import moment from 'moment'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Heading, ThemeContext } from 'grommet'
import { LanguageBar } from '../..'

const PageHeader = ({ languageBar, ...rest }) => {
  const request = useStaticQuery(graphql`
    query WeddingSettings {
      settingsJson(templateKey: {eq: "wedding-settings"}) {
        title
        ceremonyDate
        location
      }
    }
  `)

  const { title, ceremonyDate, location } = request.settingsJson

  return (
    <Box
      {...rest}
    >
      <Heading level={1} alignSelf="center" margin={{ top: "none", bottom: "medium" }}>{title}</Heading>
      <ThemeContext.Extend value={{
          heading: {
            extend: {
              letterSpacing: '4px'
            },
            level: {
              '2': {
                font: {
                  family: 'Poiret One',
                  weight: 700
                },
                small: {
                  size: '324px',
                  height: '24px'
                },
                medium: {
                  size: '24px',
                  height: '24px'
                }
              }
            }
          }
        }}>
        <Box direction="row" justify="center" wrap>
          <Box pad={{ horizontal: "xsmall" }} margin={{ vertical: "xsmall" }}>
            <Heading level={2} margin="none" color="dark-2">{moment(ceremonyDate).format('LL')}</Heading>
          </Box>
          <Box pad={{ horizontal: "xsmall" }} margin={{ vertical: "xsmall" }}>
            <Heading level={2} margin="none" color="dark-2">{location}</Heading>
          </Box>
        </Box>
        {
          languageBar && (
            <LanguageBar 
              margin={{ top: "large" }}
            />
          )
        }
      </ThemeContext.Extend>
    </Box>
  )
}

PageHeader.defaultProps = {
  languageBar: false
}

export default PageHeader