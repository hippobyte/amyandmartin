import React, { useState } from 'react'
import { Anchor, Box, Button, Text, ThemeContext } from 'grommet'
import { RsvpForm } from '../index'

const Rsvp = () => {
  const [active, setActive] = useState()

  const onClose = () => {
    setActive(undefined)
  }

  return (
    <>
      <Box margin={{ vertical: "xlarge" }} align="center">
        <Box width="small">
          <ThemeContext.Extend value={{
            button: {
              extend: {
                borderRadius: '8px'
              }
            }
          }}>
            <Button 
              label="Manage RSVP"
              color="brand-12"
              size="large"
              primary
              onClick={() => setActive(true)}
            />
          </ThemeContext.Extend>
        </Box>
        <Anchor
          margin={{ top: "small" }}
          label={<Text size="small" weight={600}>Update RSVP</Text>}
        />
      </Box>
      {
        active && <RsvpForm onClose={onClose} />
      }
    </>
  )
}

export default Rsvp