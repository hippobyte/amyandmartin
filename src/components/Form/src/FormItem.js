import React from 'react'
import { withFormGroup, ButtonGroup, Checkbox, InviteCode, MultiInput, Submit, TextArea, TextInput } from '../index'

const FormItem = ({ inputType, ...formInputProps }) => {
  return inputType && componentRegistry(inputType, formInputProps)
}

FormItem.defaultProps = {
  inputType: "Input"
}

const WithFormItem = withFormGroup(FormItem)

const componentRegistry = (inputType, formInputProps) => {
  switch(inputType) {
    case "Checkbox":
      return <Checkbox {...formInputProps} />
    case "ButtonGroup":
      return <ButtonGroup {...formInputProps} />
    case "InviteCode":
      return <InviteCode {...formInputProps} />
    case "MultiInput":
      return <MultiInput {...formInputProps} />
    case "TextInput":
      return <TextInput {...formInputProps} />
    case "TextArea":
      return <TextArea {...formInputProps} />
    case "Submit":
      return <Submit {...formInputProps} />
    default:
      return null
  }
}

export default WithFormItem