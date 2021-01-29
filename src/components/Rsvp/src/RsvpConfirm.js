import React, { useState }  from 'react'
import * as yup from 'yup'
import { gql, useMutation } from '@apollo/client'
import { Box, Text } from 'grommet'
import { useAuth } from '../../../hooks'
import { useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../..'

const RsvpConfirm = ({ language, page, viewportSize }) => {
  return (
    <Box>
      Hello WOrld
    </Box>
  )
}

export default RsvpConfirm