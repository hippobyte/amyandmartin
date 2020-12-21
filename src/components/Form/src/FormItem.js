import React from 'react'
import { TextInput } from 'grommet'
import { withFormGroup, Submit } from '../index'

const FormItem = ({ inputType, ...formInputProps }) => {
  return inputType && componentRegistry(inputType, formInputProps)
}

FormItem.defaultProps = {
  inputType: "Input"
}

const WithFormItem = withFormGroup(FormItem)

const componentRegistry = (inputType, formInputProps) => {
  switch(inputType) {
    case "TextInput":
      return <TextInput {...formInputProps} />
    case "Submit":
      return <Submit {...formInputProps} />
    default:
      return null
  }
}

export default WithFormItem