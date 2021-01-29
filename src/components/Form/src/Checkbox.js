import React from 'react'
import { Controller } from 'react-hook-form'
import { CheckBox, ThemeContext } from 'grommet'

const Checkbox = ({ name, label, methods }) => {
  const { control } = methods

  return (
    <ThemeContext.Extend value={{}}>
      <Controller
        as={CheckBox}
        name={name}
        id={name}
        key={name}
        label={label}
        control={control}
      />
    </ThemeContext.Extend>
  )
}

export default Checkbox