import React from 'react'
import { Button, Text, ThemeContext } from 'grommet'
import { intent as themeIntent } from '../../../style'

const Submit = ({ label, color, disabled, loading, intent, methods }) => {
  const formState = methods ? methods.formState : {}
  const errors = methods ? methods.errors : {}
  const { isSubmitting, isDirty } = formState
  const isUntouched = isDirty === false
  const isInvalid = Object.keys(errors).length > 0
  const isDisabled = isSubmitting || isInvalid || isUntouched || disabled || loading

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
        primary
        disabled={isDisabled}
        color={color ? color : intent ? themeIntent[intent].background : "primary"}
      />
    </ThemeContext.Extend>
  )
}

export default Submit