import React, { useState } from 'react'
import { Box, Button, Text, ThemeContext } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import queryString from 'query-string'
import { useOptions } from '../../../state/hooks'
import { translator } from '../../../utils'
import { PageContent, PageHeader, LanguageBar, AccessGiveActions } from '../../../components'
import { LoginForm, CodeRequestForm } from '../index'

const Login = ({ location }) => {
  const params = queryString.parse(location.search ? location.search : {})
  const inviteCode = params.invitecode
  const { locale } = useOptions()
  const [active, setActive] = useState(inviteCode)
  const [codeRequest, setCodeRequest] = useState()

  const onCodeRequest = () => {
    setActive(undefined)
    setCodeRequest(true)
  }

  const data = useStaticQuery(graphql`
    query {
      page: pagesJson(templateKey: {eq: "index"}) {
        translations {
          languageTitle
          title
        }
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      allPagesJson(
        sort: {fields: order, order: ASC}
      ) {
        edges {
          node {
            templateKey
            translations {
              languageTitle
              title
              menuTitle
            }
            featuredimage {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
                  src
                }
              }
            }
          }
        }
      }
      translationsJson(
        title: {
          eq: "Login"
        }
      ) {
        translations {
          locale
          translation
        }
      }
    }
  `)

  return (
    <PageContent
      image={{
        fluid: data.page.featuredimage.childImageSharp.fluid,
        imgStyle: { objectFit: 'cover', objectPosition: '40% 30%' }
      }}
    >
      <PageHeader />
      <LanguageBar />
      <Box margin={{ vertical: "xlarge" }} align="center">
        <AccessGiveActions
          setActive={setActive}
          data={data}
          locale={locale}
        />
      </Box>
      {
        active && !codeRequest && (
          <LoginForm
            onClose={() => setActive(undefined)}
            onCodeRequest={onCodeRequest}
            inviteCode={inviteCode}
            location={location}
          />
        )
      }
      {
        codeRequest && (
          <CodeRequestForm
            onClose={() => setCodeRequest(undefined)}
          />
        )
      }
    </PageContent>
  )
}

export default Login
