import React, { useState, useRef } from 'react'
import { Box, Button, Drop, Heading, Text, ThemeContext } from 'grommet'
import { HelpOption } from 'grommet-icons'
import { colors } from '../../../style'

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

  if (inputType === "Checkbox") {
    return (
      <Box margin={{ top: "xsmall" }}>
        {children}
      </Box>
    )
  }

  if (inputType == "Header") {
    return (
      <Box margin={{ bottom: "medium", top: "small" }} >
        <Box direction="row" align="center">
          <ThemeContext.Extend value={{
            heading: {
              extend: {
                '& span': {
                  display: 'block',
                  backgroundImage: `linear-gradient(120deg, ${colors["primary-1"]} 0%, ${colors["primary-0"]} 100%)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 0.45em',
                  backgroundPosition: '0 102%'
                }
              }
            }
          }}>
            <Heading level={2}>
              <Text size="xlarge" weight={500}>{label}</Text>
            </Heading>
          </ThemeContext.Extend>
          { helpText && <TooltipButton helpText={helpText} /> }
        </Box>
        {
          description && (
            <Text margin={{ top: "xsmall" }} weight={400} size="small" color="dark-10">
              {description}
            </Text> 
          )
        }
      </Box>
    )
  }

  const helpTextSize = () => {
    switch(size) {
      case "xsmall":
        return "xsmall"
      case "small":
        return "xsmall"
      case "medium":
        return "small"
      case "large":
        return "medium"
      case "xlarge":
        return "large"
    }
  }

  return (
    <Box margin={{ bottom: "medium" }}>
      <Box margin={{ bottom: "medium" }} as="label" for={name}>
        <Box direction="row" justify="between">
          <Box flex>
            <Text weight={500} size={size} color="dark-8">
              {label} { required && <Text color="danger-13">&#42;</Text> }
            </Text>
          </Box>
        </Box>
        {
          helpText && (
            <Text
              weight={500}
              size={helpTextSize()}
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
  size: 'medium'
}

export default FormLabel