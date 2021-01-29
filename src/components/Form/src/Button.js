import React from 'react'
import { Button as GrommetButton, Text, ThemeContext } from 'grommet'
import { theme } from '../../../style'

const Button = ({ label, intent, size, ...buttonProps }) => {
  return (
    <ThemeContext.Extend value={{
      button: {
        extend: {
          borderRadius: '8px',
          borderColor: theme.button.intent[intent].borderColor,
          background: theme.button.intent[intent].background,
          color: theme.button.intent[intent].color
        }
      },
      global: {
        focus: {
          shadow: {
            color: theme.button.intent[intent].background
          }
        }
      }
    }}>
      <GrommetButton
        margin={{ top: "xsmall" }}
        label={<Text size={size} weight={600}>{label}</Text>}
        size={size}
        {...buttonProps}
      />
    </ThemeContext.Extend>
  )
}

export default Button