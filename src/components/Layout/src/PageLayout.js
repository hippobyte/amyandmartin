import React, { useEffect } from 'react'
import { Grommet } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Login } from '../../../components'
import { useOptions } from '../../../state/hooks'
import { useAuth } from '../../../hooks'
import { theme } from '../../../style'

const PageLayout = ({ title, description, location, children }) => {
  const auth = useAuth()
  const { setLocation, setUser, setTranslations, options } = useOptions()
  const locale = options.language && options.language.locale
  const authorizedPaths = []

  const translations = useStaticQuery(graphql`
    query Translations {
      data: allTranslationsJson {
        edges {
          node {
            title
            translations {
              locale
              translation
            }
          }
        }
      }
    }  
  `)

  const translationData = () => {
    const data = {}

    translations.data.edges.map(item => item.node).forEach(item => {
      const title = item.title.toLowerCase()
      data[title] = {}

      item.translations.map(item => item.locale).forEach(key => {
        data[title][key] = item.translations.find(item => item.locale === key).translation
      })
    })

    return data
  }

  useEffect(() => {
    setTranslations(translationData())
  }, [])

  const isAuthorized = auth.user || authorizedPaths.includes(location.pathname)

  useEffect(() => {
    location && setLocation(location)
    auth.user && setUser(auth.user)
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
      <Login location={location} />
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