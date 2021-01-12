import React, { useEffect } from 'react'
import { Grommet } from 'grommet'
import { Helmet } from 'react-helmet'
import { Login } from '../../../components'
import { useOptions } from '../../../state/hooks'
import { useAuth } from '../../../hooks'
import { theme } from '../../../style'

const PageLayout = ({ title, description, location, children }) => {
  const auth = useAuth()
  const { setLocation, options } = useOptions()
  const locale = options.language && options.language.locale
  const authorizedPaths = [
    `/${locale}/travel`,
    `/${locale}/activities`
  ]

  const isAuthorized = auth.user || authorizedPaths.includes(location.pathname)

  useEffect(() => {
    location && setLocation(location)
  }, [location])

  if (isAuthorized) {
    return (
      <Wrapper title={title} description={description}>
        {children}
      </Wrapper>
    )
  }

  return (
    <Wrapper title={title} description={description}>
      <Login />
    </Wrapper>
  )
}

const Wrapper = ({ title, description, children }) => {
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