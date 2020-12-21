import React from 'react'
import { Box, Text, ThemeContext } from 'grommet'
import { Anchor } from '../../../components'

const FormLabelAction = ({ name, actions }) => {
  if (actions) {
    return (
      <Box direction="row" gap="medium" border="between">
      {
        actions.map(action => (
          <Action key={action.actionKey} name={name} {...action} />
        ))
      }
      </Box>
    )
  }

  return null
}

const Action = ({ name, disabled, size, label, color, hover, onClick, to, href }) => {
  const handleClick = () => {
    !disabled && onClick && onClick(name)
  }

  return (
    <ThemeContext.Extend value={{
      anchor: {
        color: color,
        fontWeight: 700,
        extend: {
          display: 'block',
          fontSize: '14px',
          lineHeight: '20px',
          margin: 0,
          padding: 0,
          borderRadius: '4px',
          transition: 'all 0.3s',
          marginBottom: "4px",
        },
        hover: {
          extend: {
            color: hover.color
          }
        }
      }
    }}>
      <Anchor 
        to={to}
        href={href}
        disabled={disabled}
        onClick={handleClick}
        label={<Text size={size} weight={700}>{label}</Text>}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
      />
    </ThemeContext.Extend>
  )
}

Action.defaultProps = {
  disabled: false,
  size: "small",
  color: 'dark-2',
  hover: {
    color: 'dark-10'
  }
}

export default FormLabelAction