import React from 'react'
import { Box, Heading, ThemeContext } from 'grommet'
import { PageNav } from '../'

const Layout = () => {
  return (
    <Box justify="center">
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
                medium: {
                  size: '24px',
                  height: '24px'
                }
              }
            }
          }
        }}>
        <Box direction="row" justify="center" border="between" gap="medium">
          <Heading level={2} margin="none" color="dark-2">SEPTEMBER 18, 2020</Heading>
          <Heading level={2} margin="none" color="dark-2">SQUAW VALLEY, CA</Heading>
        </Box>
      </ThemeContext.Extend>
      <PageNav />
    </Box>
  )
}

export default Layout