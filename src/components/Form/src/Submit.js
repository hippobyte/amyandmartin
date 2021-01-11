import React from 'react'
import { Button, Text, ThemeContext } from 'grommet'
import { intent as themeIntent } from '../../../style'

const Submit = ({ label, color, intent }) => {
  return (
    <ThemeContext.Extend value={{
      button: {
        extend: {
          borderRadius: '8px'
        }
      }
    }}>
      <Button
        margin={{ top: "xsmall" }}
        type="submit"
        label={<Text weight={600}>{label}</Text>}
        size="large"
        primary
        color={color ? color : intent ? themeIntent[intent].background : "primary"}
      />
    </ThemeContext.Extend>
  )
}

export default Submit