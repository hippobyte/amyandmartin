import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, Text, ThemeContext } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { translator } from '../../../utils'
import { Anchor } from '../../../components'
import { RsvpForm } from '../index'

const Rsvp = () => {
  const { locale } = useOptions()
  const [active, setActive] = useState()
  const data = useStaticQuery(graphql`
    query {
      options: settingsJson(
        templateKey: {
          eq: "translations"
        }, 
        title: {
          eq: "Manage RSVP"
        }
      ) {
        translations: options {
          locale
          translation
        }
      }
    }
  `)

  const onClose = () => {
    setActive(undefined)
  }

  return (
    <>
      <Box margin={{ vertical: "xlarge" }} align="center">
        <Box width="medium" align="center">
          <ThemeContext.Extend value={{
            button: {
              extend: {
                borderRadius: '8px'
              }
            }
          }}>
            <Anchor to={`/${locale}/rsvp`}>
              <Button 
                label={<Text weight={600}>{translator(data, locale)}</Text>}
                color="brand-12"
                size="large"
                primary
              />
            </Anchor>
          </ThemeContext.Extend>
        </Box>
      </Box>
      {
        active && <RsvpForm onClose={onClose} />
      }
    </>
  )
}

export default Rsvp