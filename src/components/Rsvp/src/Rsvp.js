import React, { useState } from 'react'
import { Link } from 'grommet'
import { Box, Button, Text, ThemeContext } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { Anchor } from '../../../components'
import { RsvpForm } from '../index'

const Rsvp = () => {
  const { options } = useOptions()
  const [active, setActive] = useState()

  const onClose = () => {
    setActive(undefined)
  }

  const buttonText = () => {
    switch(options && options.language && options.language.locale) {
      case "pl":
        return <Text weight={600}>Manage RSVP</Text>
      case "zh-cn":
        return <Text weight={600}>Manage RSVP</Text>
      default:
        return <Text weight={600}>Manage RSVP</Text>
    }
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
            <Anchor to="/app/rsvp">
              <Button 
                label={buttonText()}
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