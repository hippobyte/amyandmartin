import React, { useState, useEffect } from 'react'
import { Box, Text, ThemeContext } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { colors } from '../../../style'
import { FormItem } from '../index'

const ButtonGroup = ({ name, defaultValue, buttons, methods, onChange, loading, disabled }) => {
  const { options } = useOptions()
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const { setValue, register, unregister } = methods
  const language = options.language.title

  useEffect(() => {
    register(name)
    defaultValue && setValue(name, defaultValue)
  }, [])

  const toggleComponentType = (value) => {
    if (value) {
      setSelectedValue(value)
      setValue(name, value, {
        shouldValidate: true,
        shouldDirty: true
      })
      onChange(value)
      unregisterKeys(value)
    }
  }

  const unregisterKeys = (value) => {
    const unregistrable = buttons.map(item => item.key).filter(item => item !== value)
    unregistrable.forEach(item => {
      unregister(item)
    })
  }

  return (
    <>
      <Box direction="row" justify="between" gap="medium">
        {
          buttons && buttons.map(button => {
            const { key, title, description, label } = button 
            return (
              <ThemeContext.Extend value={{
                box: {
                  extend: {
                    transition: 'background .250s ease-in-out, border-color .250s ease-in-out',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    '&:hover': {
                      backgroundColor: colors["light-0"]
                    },
                    '&.active': {
                      backgroundColor: colors["light-1"],
                      border: `1px solid ${colors.brand}`,
                    }
                  }
                }
              }}>
              <Box 
                key={key}
                flex
                round="xsmall"
                border={{ size: "xsmall", color: "light-7" }}
                pad={{ vertical: "xsmall", left: "small", right: "small" }}
                height={{ min: "44px" }}
                justify="center"
                className={selectedValue === key && "active"}
                onClick={() => !disabled && toggleComponentType(key)}
                disabled={disabled}
              >
                <Text weight={600}>{title || label}</Text>
                {
                  description && (
                    <Text size="small">
                      {description}
                    </Text>
                  )
                }
              </Box>
              </ThemeContext.Extend>
            )
          })
        }
      </Box>
      <Box margin={{ top: "medium" }} direction="row">
        {
          buttons && buttons.map(button => {
            const { formItem, key } = button
            const { inputType, label, placeholder, helpText, ...rest } = formItem ? formItem : {}
            
            if (inputType && key === selectedValue) {
              return (
                <FormItem 
                  inputType={inputType}
                  methods={methods}
                  onChange={onChange}
                  loading={loading}
                  label={label ? label[language] : undefined}
                  placeholder={placeholder ? placeholder[language] : undefined}
                  helpText={helpText ? helpText[language] : undefined}
                  {...rest}
                  fkex="0 0 100%"
                  margin={0}
                />
              )
            }

            return null
          })
        }
      </Box>
    </>
  )
}

export default ButtonGroup