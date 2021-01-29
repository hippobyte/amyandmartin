import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from 'grommet' 

const Form = ({ defaultValues, validationSchema, onSubmit, margin, width, loading, disabled, match, formDefaults, mode, reValidateMode, children }) => {
  const methods = useForm({ 
    defaultValues: defaultValues, 
    resolver: yupResolver(validationSchema),
    mode: mode,
    reValidateMode: reValidateMode
  })
  const { handleSubmit, trigger } = methods

  const handleFormSubmit = (data) => {
    trigger()
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
    <Box width={width} margin={margin}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
      </form>
    </Box>
  )
}

Form.defaultProps = {
  width: undefined,
  margin: { bottom: "large" },
  visibility: true,
  formDefaults: {},
  mode: 'all',
  reValidateMode: 'onChange'
}

export default Form