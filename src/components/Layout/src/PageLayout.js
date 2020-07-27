import React from 'react'
import { Box, Grommet } from 'grommet'
import { Helmet } from 'react-helmet'
import { theme } from '../../../style'

const PageLayout = ({ title, description, children }) => {
  return (
    <Grommet theme={theme} full>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <description>{description}</description>
      </Helmet>
      {children}
    </Grommet>
  )
}

export default PageLayout