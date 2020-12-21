import React from 'react'
import { Button, Text, ThemeContext } from 'grommet'

const Submit = ({ label }) => {
  return (
    <ThemeContext.Extend value={{
      button: {
        extend: {
          borderRadius: '8px'
        }
      }
    }}>
      <Button
        margin={{ top: "medium" }}
        type="submit"
        label={<Text weight={600}>{label}</Text>}
        size="large"
        primary
      />
    </ThemeContext.Extend>
  )
}

export default Submit