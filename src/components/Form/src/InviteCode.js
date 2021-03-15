import React, { useEffect } from "react"
import { Controller } from 'react-hook-form'
import ReactCodeInput from 'react-verification-code-input'
import { Box, ThemeContext } from 'grommet'
import { colors } from '../../../style/colors'

const InviteCode = ({ loading, name, maxLength, methods, defaultValue }) => {
  const { control, setValue } = methods

  useEffect(() => {
    defaultValue && console.log(defaultValue)
    defaultValue && setValue(name, defaultValue)
  }, [])

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
          },
          '& input:focus': {
            borderColor: colors["primary-8"],
            caretColor: colors["primary-8"]
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
              type="number"
              onChange={onChange}
            />
          }
        />
      </Box>
    </ThemeContext.Extend>
  )
}

export default InviteCode
