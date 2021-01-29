import React, { useState, useEffect } from 'react'
import { Box, Text, ThemeContext } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { colors } from '../../../style'
import { FormItem } from '../index'

const ButtonGroup = ({ compact, name, viewportSize, defaultValue, buttons, methods, onChange, loading, disabled }) => {
  const { options } = useOptions()
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const { setValue, getValues, register } = methods
  const language = options.language.title

  useEffect(() => {
    const value = getValues(name)
    value && setSelectedValue(value)
  }, [])

  const toggleComponentType = (value) => {
    if (value) {
      setSelectedValue(value)
      setValue(name, value, {
        shouldValidate: true,
        shouldDirty: true
      })
      onChange(value)
    }
  }

  return (
    <ThemeContext.Extend value={{
      box: {
        extend: {
          '& span': {
            userSelect: 'none',
            fontFamily: "'Montserrat', sans-serif"
          },
          '&.button-wrapper': {
            transition: 'background .150s ease-in-out, border-color .150s ease-in-out',
            cursor: disabled ? 'not-allowed' : 'pointer',
            '&:hover': {
              backgroundColor: colors["light-0"],
              '& span': {
                color: colors["dark-6"]
              }
            },
            '&.active': {
              '& span': {
                color: colors["black"]
              },
              backgroundColor: "#e8edf2",
              border: !compact && `1px solid ${colors.brand}`,
              '&:hover': {
                '& span': {
                  color: colors["black"]
                }
              }
            }
          }
        }
      }
    }}>
      <Box 
        className="container"
        border={compact && { size: "xsmall", color: "light-7" }}
        round={compact && "xsmall"}
      >
        <input name={name} ref={register} type="hidden" />
        {
          buttons && buttons.map((button, index) => {
            const { key, title, description, label } = button
            const isActive = selectedValue === key
            return (
              <Box 
                key={index}
                direction="row"
                className={isActive ? "button-wrapper active" : "button-wrapper"}
                pad={{ vertical: "medium" }}
                align="center"
                height={{ min: "44px" }}
                onClick={() => !disabled && toggleComponentType(key)}
                disabled={disabled}
              >
                <Box width="16%" align="center">
                  <Indicator viewportSize={viewportSize} active={isActive} />
                </Box>
                <Box basis="84%" pad={{ right: "medium" }}>
                  <Text weight={500} color={isActive ? "dark-10" : "dark-4"}>{title || label}</Text>
                  {
                    description && (
                      <Text size="small" color={isActive ? "dark-10" : "dark-4"}>
                        {description}
                      </Text>
                    )
                  }
                </Box>
              </Box>
            )
          })
        }
      </Box>
      <>
        {
          buttons && buttons.map(button => {
            if (button.key === selectedValue && button.formItems) {
              return (
                <Box 
                  direction="row"
                  margin={{ top: "medium" }}
                >
                  <ChildFormItems 
                    formItems={button.formItems}
                    loading={loading}
                    disabled={disabled}
                    language={language}
                    methods={methods}
                  />
                </Box>
              )
            }
          })
        }
      </>
    </ThemeContext.Extend>
  )
}

ButtonGroup.defaultProps = {
  compact: false
}

const ChildFormItems = ({ formItems, loading, disabled, language, methods }) => {
  return (
    <Box margin={{ top: "medium" }} fill="horizontal">
    {
      formItems.map((formItem, index) => {
        const { inputType, name, label, placeholder, helpText, size, ...rest } = formItem
        return (
          <FormItem 
            key={index}
            name={name}
            inputType={inputType}
            methods={methods}
            loading={loading}
            disabled={disabled}
            label={label && label[language.title] ? label[language.title] : label}
            placeholder={placeholder && placeholder[language.title] ? placeholder[language.title] : placeholder}
            helpText={helpText && helpText[language.title] ? helpText[language.title] : helpText}
            {...rest}
          />
        )
      })
    }
    </Box>
  )
}

const Indicator = ({ active }) => {
  return (
    <Box 
      width="22px" 
      height="22px" 
      round="50%"
      border={{ size: "1px", color: active ? "primary-12" : "light-8" }}
      pad="2px"
      align="center"
      justify="center"
    >
      <Box fill round="50%" background={active ? "primary-12" : undefined} />
    </Box>
  )
}

export default ButtonGroup