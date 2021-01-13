import React from 'react'
import PropTypes from 'prop-types'
import { Backpack } from 'react-kawaii'
import { Box, Text } from 'grommet'
import { Button } from '../index'

const Empty = ({ title, action, mood, color, border, pad, height, margin, round, imageSize }) => {
  return (
    <Box
      height={height}
      align="center"
      justify="center"
      border={border}
      pad={pad}
      round={round}
      margin={margin}
    >
      <Box margin={{ bottom: "small" }}>
        <Backpack size={imageSize} mood={mood} color={color} />
      </Box>
      {
        title && <Text textAlign="center" size="small" weight={600} color="dark-10">{title}</Text>
      }
      {
        action && <ActionButton {...action} />
      }
    </Box>
  )
}

const ActionButton = ({ label, onClick, intent, size, disabled }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <Button
        label={label}
        disabled={disabled}
        intent={intent}
        size={size}
        onClick={onClick}
      />
    </Box>
  )
}

ActionButton.defaultProps = {
  label: "Add",
  intent: "dark",
  size: "xsmall"
}

Empty.propTypes = {
  title: PropTypes.string,
  imageSize:  PropTypes.number
}

Empty.defaultProps = {
  mood: 'excited',
  color: '#d1dce2',
  height: '70vh',
  imageSize: 160,
  pad: {
    horizontal: "large"
  }
}

export default Empty