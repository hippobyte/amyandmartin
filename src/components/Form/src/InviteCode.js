import React from 'react'
import { Controller } from 'react-hook-form'
import ReactCodeInput from 'react-verification-code-input'
import { Box, ThemeContext, Button } from 'grommet'
import { colors } from '../../../style/colors'

const InviteCode = ({ loading, intent, name, maxLength, theme, methods }) => {
  const { control, setValue, watch } = methods
  const styles = inputTheme(colors, intent, theme)

  const onChange = (value) => {
    setValue(name, value)
  }

  return (
    <ThemeContext.Extend value={styles}>
      <Box className="code-wrapper" direction="row" gap="medium" justify="between">
        <Controller
          key={name}
          name={name}
          control={control}
          render={() =>
            <ReactCodeInput
              loading={loading}
              fields={maxLength}
              type="text"
              onChange={onChange}
            />
          }
        />
      </Box>
    </ThemeContext.Extend>
  )
}

export const inputTheme = (colors, intent, theme = {}) => ({
  box: {
    extend: {
      '& > div': {
        width: '100%'
      }
    }
  },
  button: {
    extend: {
      position: 'absolute',
      right: '40px',
      height: '20px',
      lineHeight: '14px',
      fontSize: '14px',
      fontWeight: '700',
      padding: '2px 6px',
      border: `1px solid ${colors["light-7"]}`,
      borderRadius: '4px',
      color: `${colors["light-10"]}`
    }
  }
})

export default InviteCode
