import React from 'react'
import { ProvideAuth } from '../../../hooks'

const AppLayout = ({ children }) => {
  return (
    <ProvideAuth>
      {children}
    </ProvideAuth>
  )
}

export default AppLayout