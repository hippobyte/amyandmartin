import React from 'react'
import { withFormGroup, ButtonGroup, Submit, TextInput } from '../index'

const FormItem = ({ inputType, ...formInputProps }) => {
  return inputType && componentRegistry(inputType, formInputProps)
}

FormItem.defaultProps = {
  inputType: "Input"
}

const WithFormItem = withFormGroup(FormItem)

const componentRegistry = (inputType, formInputProps) => {
  switch(inputType) {
    case "ButtonGroup":
      return <ButtonGroup {...formInputProps} />
    case "TextInput":
      return <TextInput {...formInputProps} />
    case "Submit":
      return <Submit {...formInputProps} />
    default:
      return null
  }
}

export default WithFormItem