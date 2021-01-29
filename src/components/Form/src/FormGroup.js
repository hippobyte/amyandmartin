import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import { ErrorMessage, FormLabel, FormLabelAction } from '../index'

const FormGroup = ({ preview, loading, actions, name, inputType, required, disabled, helpText, label, description, size, options, flex, margin, methods, children, type, ...rest}) => {
  const [hovering, setHovering] = useState(false)

  const handleChange = (event) => {
    methods && methods.errors && methods.clearErrors(name)
    rest.onChange && rest.onChange(event)
  }

  const previewContainerProps = (preview) => preview && ({
    pad: 'small'
  })

  const previewContentProps = (preview, loading) => preview && ({
    round: { size: 'xsmall' },
    border: { size: 'xsmall', color: hovering ? 'brand' : 'light-4', style: 'dotted' },
    style: { opacity: loading && 0.4 }
  })

  const containerProps = previewContainerProps(preview)
  const contentProps = previewContentProps(preview, loading)

  const errorMessage = () => {
    return methods && methods.errors && name && methods.errors[name] && methods.errors[name].message
  }

  const error = errorMessage()

  return (
    <Box fill="horizontal" {...containerProps}>
      <Box 
        {...contentProps}
        onMouseEnter={() => preview && setHovering(true)}
        onMouseLeave={() => preview && setHovering(false)}
      >
        { 
          preview && (
            <PreviewHeader 
              type={type} 
              name={name} 
              hovering={hovering} 
              inputType={inputType} 
              actions={actions} 
            />
          )
        }
        <Box {...containerProps}>
          <FormLabel 
            name={name}
            inputType={inputType}
            label={label} 
            helpText={helpText}
            description={description}
            required={required} 
            size={size}
          >
            {
              React.cloneElement(children, { 
                intent: methods && methods.errors && methods.errors[name] ? "danger" : rest.intent,
                onChange: handleChange,
                disabled: disabled
              })
            }
            {
              !error && description && (
                <Box direction="row" align="baseline" margin={{ top: "medium" }}>
                  {description}
                </Box>
              )
            }
            <ErrorMessage message={error} inputType={inputType} />
          </FormLabel>
        </Box>
      </Box>
    </Box>
  )
}

FormGroup.defaultProps = {
  disabled: false,
  flex: "1 0 98%",
  margin: "0 1%"
}

const PreviewHeader = ({ actions, name, hovering, inputType, type }) => {
  return (
    <Box 
      pad={{ vertical: "xsmall", horizontal: "small" }} 
      background={hovering ? "light-2" : "light-0"}
      border={{ side: 'bottom', size: 'xsmall', color: hovering ? 'brand' : 'light-4', style: 'dotted' }}
      round={{ size: "xsmall", corner: "top" }}
      direction="row"
      justify="between"
    >
      <Box>
        <Text weight={700} size="small">
          {inputType}
          {
            inputType !== "Header" && type === "hidden" && <Text size="xsmall" margin={{ left: "xsmall" }}>Hidden</Text>
          }
        </Text>
      </Box>
      <Box justify="center">
        {
          actions && <FormLabelAction name={name} actions={actions} />
        }
      </Box>
    </Box>
  )
}

PreviewHeader.defaultProps = {
  inputType: 'Input'
}

export default FormGroup