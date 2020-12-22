import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextInput, ThemeContext, Button } from 'grommet'
import { colors } from '../../../style/colors'

const Input = ({ inputRef, disabled, placeholder, type, min, max, intent, name, maxLength, theme, methods, defaultValue, extraButton }) => {
  const { control, setValue } = methods
  const styles = inputTheme(colors, intent, theme)

  useEffect(() => {
    defaultValue && setValue(name, defaultValue)
  }, [defaultValue])

  return (
    <ThemeContext.Extend value={styles}>
      <Box justify="center">
        <Controller
          as={TextInput}
          name={name}
          id={name}
          key={name}
          ref={inputRef}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          type={type}
          min={min}
          max={max}
          control={control}
        />
        {
          extraButton && <ExtraButton {...extraButton} />
        }
      </Box>
    </ThemeContext.Extend>
  )
}

const ExtraButton = ({ label, onClick }) => {
  const onExtraButtonClick = () => {
    onClick && onClick(true)
  }

  return (
    <Button
      fill={false}
      plain
      label={label}
      onClick={onExtraButtonClick}
    />
  )
}

export const inputTheme = (colors, intent, theme = {}) => ({
  box: {
    extend: {
      position: 'relative'
    }
  },
  button: {
    extend: {
      position: 'absolute',
      right: '40px',
      height: '20px',
      lineHeight: '14px',
      fontSize: '14px',
      fontWeight: '700',
      padding: '2px 6px',
      border: `1px solid ${colors["light-7"]}`,
      borderRadius: '4px',
      color: `${colors["light-10"]}`
    }
  },
  textInput: {
    extend: {
      border: `1px solid ${intent ? colors[intent] : colors["light-7"]}`,
      '&:focus': {
        border: `1px solid ${intent ? colors[intent] : colors.brand}`,
      },
      '&:disabled': {
        fontWeight: 700,
        border: `1px solid ${intent ? colors[intent] : colors["light-7"]}`,
        opacity: 0.4,
        backgroundColor: colors["light-1"]
      },
      ...theme
    }
  }
})

export default Input
