import React, { useState, useRef } from 'react'
import { Box, Button, Drop, Heading, Text } from 'grommet'
import { HelpOption } from 'grommet-icons'

const FormLabel = ({ name, inputType, label, helpText, description, required, size, children }) => {
  if (inputType === "Error") {
    return (
      <Box margin={{ top: "medium" }}>
        {children}
      </Box>
    )
  }

  if (inputType === "Submit") {
    return (
      <Box margin={{ top: "medium" }}>
        {children}
      </Box>
    )
  }

  if (inputType == "Header") {
    return (
      <Box margin={{ bottom: "medium", top: "small" }} >
        <Box direction="row" align="center">
          <Heading level="large">{label}</Heading>
          { helpText && <TooltipButton helpText={helpText} /> }
        </Box>
        {
          description && (
            <Text margin={{ top: "xsmall" }} weight="500" size="large" color="dark-10">
              {description}
            </Text> 
          )
        }
      </Box>
    )
  }

  return (
    <Box margin={{ bottom: "medium" }}>
      <Box margin={{ bottom: "small" }} as="label" for={name}>
        <Box direction="row" justify="between">
          <Box flex>
            <Text weight="600" size={size} color="dark-10">
              {label} { required && <Text color="danger-13">&#42;</Text> }
            </Text>
          </Box>
        </Box>
        {
          helpText && (
            <Text
              margin={{ top: "xsmall" }}
              size="small"
              color="dark-6"
            >
              {helpText}
            </Text>
          )
        }
      </Box>
      {children}
    </Box>
  )
}

const TooltipButton = ({ helpText }) => {
  const [over, setOver] = useState(false)
  const ref = useRef()

  return (
    <Box margin={{ left: "small" }}>
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(true)}
        onBlur={() => setOver(false)}
        plain
      >
        <Box align="center">
          <HelpOption />
        </Box>
      </Button>
      {ref.current && over && (
        <Drop
          align={{ left: 'right' }}
          target={ref.current}
          plain
          trapFocus={false}
          restrictFocus={true}
        >
          <Box pad="small" background="dark-4" margin={{ left: "small" }} round="xsmall" width={{ max: "small" }}>
            <Text color="white" size="small">{helpText}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  )
}

FormLabel.defaultProps = {
  required: false,
  size: '18px'
}

export default FormLabel