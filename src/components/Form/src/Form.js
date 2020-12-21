import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from 'grommet'

const Form = ({ onSubmit, children, validationSchema }) => {
  const methods = useForm({ 
    // resolver: yupResolver(validationSchema),
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const handleSubmit = methods.handleSubmit

  const onFormSubmit = (formData) => {
    onSubmit && onSubmit(formData)
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Box direction="row" justify="between" wrap>
          {children}
        </Box>
      </form>
    </Box>
  )
}

export default Form