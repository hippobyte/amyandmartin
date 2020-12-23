import React from 'react'
import { Box } from 'grommet'
import { colors} from '../../../style'

const spinnerSize = (size) => {
  switch(size) {
    case "xsmall":
      return "24px"
    case "small":
      return "30px"
    case "large":
      return "44px"
    case "xlarge":
      return "48px"
    default:
      return "38px"
  }
}

const spinning = (size) => (
  <svg
    version="1.1"
    viewBox="0 0 32 32"
    width={spinnerSize(size)}
    height={spinnerSize(size)}
    fill={colors.brand}
  >
    <path
      opacity=".25"
      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
    />
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 16 16"
        to="360 16 16"
        dur="0.750s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

export const Spinner = ({ size }) => (
  <Box align="center" justify="center">
    {spinning(size)}
  </Box>
)

export default Spinner
