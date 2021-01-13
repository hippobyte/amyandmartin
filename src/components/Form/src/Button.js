import React from 'react'
import { Button as GrommetButton, Text, ThemeContext } from 'grommet'
import { intent as themeIntent } from '../../../style'

const Button = ({ label, color, intent, size, ...buttonProps }) => {
  return (
    <ThemeContext.Extend value={{
      button: {
        extend: {
          borderRadius: '8px',
          borderColor: themeIntent[intent].borderColor,
          background: themeIntent[intent].background,
          color: themeIntent[intent].color
        }
      },
      global: {
        focus: {
          shadow: {
            color: themeIntent[intent].background
          }
        }
      }
    }}>
      <GrommetButton
        margin={{ top: "xsmall" }}
        type="submit"
        label={<Text size={size} weight={600}>{label}</Text>}
        color={color ? color : intent ? themeIntent[intent].background : "primary"}
        size={size}
        {...buttonProps}
      />
    </ThemeContext.Extend>
  )
}

export default Button