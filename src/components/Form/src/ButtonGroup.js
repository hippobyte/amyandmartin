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
    <ThemeContext.Extend value={{
      box: {
        extend: {
          '& span': {
            userSelect: 'none',
            fontFamily: "'Montserrat', sans-serif"
          },
          '&.button-wrapper': {
            transition: 'background .250s ease-in-out, border-color .250s ease-in-out',
            cursor: disabled ? 'not-allowed' : 'pointer',
            '&:hover': {
              backgroundColor: colors["light-0"]
            },
            '&.active': {
              backgroundColor: colors["light-3"],
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
          border={compact && { size: "xsmall", color: "light-7", side: "between" }}
        >
        {
          buttons && buttons.map((button, index) => {
            const { key, title, description, label } = button 
            const isActive = selectedValue === key
            return (
              <Box 
                className={isActive ? "button-wrapper active" : "button-wrapper"}
                key={key}
                flex="grow"
                round={!compact && "xsmall"}
                border={!compact && { size: "xsmall", color: "light-7" }}
                pad={{ vertical: "xsmall", horizontal: viewportSize === "small" ? "medium" : "small" }}
                height={{ min: "44px" }}
                align="center"
                direction="row"
                wrap
                onClick={() => !disabled && toggleComponentType(key)}
                disabled={disabled}
              >
                <Indicator viewportSize={viewportSize} active={isActive} />
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
            )
          })
        }
        </Box>
      </Box>
      <Box margin={{ top: "medium" }} direction="row">
        {
          buttons && buttons.map(button => {
            if (button.key === selectedValue && button.formItems) {
              return (
                <ChildFormItems 
                  formItems={button.formItems}
                  loading={loading}
                  disabled={disabled}
                  language={language}
                  methods={methods}
                />
              )
            }
          })
        }
      </Box>
    </ThemeContext.Extend>
  )
}

ButtonGroup.defaultProps = {
  compact: false
}

const ChildFormItems = ({ formItems, loading, disabled, language, methods }) => {
  return (
    <Box margin={{ top: "medium" }}>
    {
      formItems.map((formItem, index) => {
        const { inputType, name, label, placeholder, helpText, ...rest } = formItem
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
      border={{ size: "1px", color: active ? "dark-10" : "light-8" }}
      margin={{ right: viewportSize === "small" ? "medium" : "small" }}
      pad="2px"
      align="center"
      justify="center"
    >
      <Box fill round="50%" background={active ? "dark-10" : undefined} />
    </Box>
  )
}

export default ButtonGroup