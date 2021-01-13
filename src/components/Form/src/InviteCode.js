import React from 'react'
import { Controller } from 'react-hook-form'
import ReactCodeInput from 'react-verification-code-input'
import { Box, ThemeContext, Button } from 'grommet'
import { colors } from '../../../style/colors'

const InviteCode = ({ loading, intent, name, maxLength, theme, methods }) => {
  const { control, setValue, watch } = methods

  const onChange = (value) => {
    setValue(name, value)
  }

  return (
    <ThemeContext.Extend value={{
      box: {
        extend: {
          '& > div': {
            width: '100% !important'
          },
          '& input': {
            color: 'black',
            fontWeight: 900,
            width: 'calc(100%/8) !important'
          }
        }
      }
    }}>
      <Box>
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

export default InviteCode
