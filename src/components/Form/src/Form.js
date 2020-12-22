import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from 'grommet' 

const Form = ({ defaultValues, validationSchema, onSubmit, error, width, loading, disabled, style, match, children, formDefaults }) => {
  const methods = useForm({ 
    defaultValues: defaultValues, 
    resolver: yupResolver(validationSchema),
    mode: 'all',
    reValidateMode: 'onChange'
  })
  const { handleSubmit } = methods

  const handleFormSubmit = (data) => {
    onSubmit(data)
  }

  const highlightOnError = (props) => { 
    if (props.name !== "submit") { // skip submit input/button
      return methods.errors[props.name] ? "danger" : null
    }
    return props.intent || "primary"
  }

  const showErrorMessage = (props) => {
    if (props.name !== "submit") { // skip submit input/button
      return methods.errors[props.name] ? methods.errors[props.name].message : null
    }
  }

  const isInputDisabled = (props) => {
    const isDisabled = loading || disabled || props.disabled
    return props.name !== "submit" ? isDisabled : false
  }

  return (
    <Box width={width}>
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)} style={style}>
        <Box direction="row" justify="between" wrap>
          {
            Array.isArray(children)
            ? children.map(child => {
              return child.props.name
                ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    methods: methods,
                    formDefaults: formDefaults,
                    loading: loading,
                    intent: highlightOnError(child.props),
                    helperText: showErrorMessage(child.props),
                    disabled: isInputDisabled(child.props),
                    inputRef: methods.register,
                    key: child.props.name,
                    match: match
                  }
                })
                : child
            })
            : children
          }
        </Box>
      </FormContainer>
    </Box>
  )
}

Form.defaultProps = {
  width: undefined,
  visibility: true,
  formDefaults: {}
}

const FormContainer = styled.form`
  margin-bottom: 1em
`

export default Form