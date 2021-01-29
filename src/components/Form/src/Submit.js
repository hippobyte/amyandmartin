import React from 'react'
import { Text, ThemeContext } from 'grommet'
import { Button } from '../index'

const Submit = ({ label, disabled, loading, intent, size, methods }) => {
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
        disabled={isDisabled}
        intent={intent}
        size={size}
      />
    </ThemeContext.Extend>
  )
}

Submit.defaultProps = {
  intent: "primary"
}

export default Submit