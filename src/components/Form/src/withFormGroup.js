import React from 'react'
import { FormGroup } from '../index'

const withFormGroup = (Wrapped) => {
  return ({ inputType, formState, ...rest}) => {
    return (
      <FormGroup 
        inputType={inputType}
        {...rest}
      >
        <Wrapped inputType={inputType} {...rest} />
      </FormGroup>
    )

  }
}

export default withFormGroup