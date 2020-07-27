import React from 'react'
import { Box, Heading, ThemeContext } from 'grommet'
import { LanguageBar } from '../..'

const PageHeader = ({ languageBar, ...rest }) => {
  return (
    <Box
      {...rest}
    >
      <Heading level={1} alignSelf="center" margin={{ top: "none", bottom: "medium" }}>Amy & Martin</Heading>
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
          <Box pad={{ horizontal: "xsmall" }}>
            <Heading level={2} margin="none" color="dark-2">SEPTEMBER 5, 2020</Heading>
          </Box>
          <Box pad={{ horizontal: "xsmall" }}>
            <Heading level={2} margin="none" color="dark-2">SQUAW VALLEY, CA</Heading>
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