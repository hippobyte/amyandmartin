import React, { useEffect } from 'react'
import { Grommet } from 'grommet'
import { Helmet } from 'react-helmet'
import { useOptions } from '../../../state/hooks'
import { theme } from '../../../style'

const PageLayout = ({ auth, title, description, location, children }) => {
  const { setLocation } = useOptions()

  useEffect(() => {
    setLocation(location)
  }, [location])

  console.log(auth)

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