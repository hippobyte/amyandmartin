import React, { useState, useEffect } from 'react'
import { Box, Text, ThemeContext } from 'grommet'
import { useOptions } from '../../../state/hooks'
import { colors } from '../../../style'
import { FormItem } from '../index'

const ButtonGroup = ({ compact, name, viewportSize, defaultValue, buttons, methods, onChange, loading, disabled }) => {
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
      // unregisterKeys(value)
    }
  }

  const unregisterKeys = (value) => {
    const unregistrable = buttons.map(item => item.key).filter(item => item !== value)
    unregistrable.forEach(item => {
      unregister(item)
    })
  }

  return (
    <ThemeContext.Extend value={{
      box: {
        extend: {
          '& span': {
            userSelect: 'none',
            fontFamily: "'Montserrat', sans-serif",
            transition: 'color .250s ease-in-out',
          },
          '&.button-wrapper': {
            transition: 'background .250s ease-in-out, border-color .250s ease-in-out',
            cursor: disabled ? 'not-allowed' : 'pointer',
            '&:hover': {
              backgroundColor: colors["light-0"],
              '& span': {
                color: colors["dark-6"]
              }
            },
            '&.active': {
              backgroundColor: colors["light-1"],
              border: !compact && `1px solid ${colors.brand}`
            }
          }
        }
      }
    }}>
      <Box 
        className="container"
        justify={!compact && "between"}
        border={compact && { size: "xsmall", color: "light-7" }}
        round={compact && "xsmall"}
      >
        <Box 
          direction="row"
          wrap
          flex
          gap={compact ? "xxsmall" : ["small", "medium"].includes(viewportSize) ? undefined : "medium"}
        >
        {
          buttons && buttons.map((button, index) => {
            const { key, title, description, label } = button
            const isActive = selectedValue === key
            return (
              <Box 
                className={isActive ? "button-wrapper active" : "button-wrapper"}
                key={index}
                flex="grow"
                round={!compact && "xsmall"}
                border={!compact && { size: "xsmall", color: "light-7" }}
                pad={{ vertical: "medium", horizontal: ["small", "medium"].includes(viewportSize) ? "medium" : "small" }}
                height={{ min: "44px" }}
                align="center"
                direction="row"
                basis="1/2"
                wrap
                onClick={() => !disabled && toggleComponentType(key)}
                disabled={disabled}
              >
                <Box basis="44px" align="center">
                  <Indicator viewportSize={viewportSize} active={isActive} />
                </Box>
                <Box flex="grow">
                  <Box>
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
              </Box>
            )
          })
        }
        </Box>
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

const Indicator = ({ viewportSize, active }) => {
  return (
    <Box 
      width="22px" 
      height="22px" 
      round="50%"
      border={{ size: "1px", color: active ? "primary-12" : "light-8" }}
      margin={{ right: ["small", "medium"].includes(viewportSize) ? "medium" : "small" }}
      pad="2px"
      align="center"
      justify="center"
    >
      <Box fill round="50%" background={active ? "primary-12" : undefined} />
    </Box>
  )
}

export default ButtonGroup