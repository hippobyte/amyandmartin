import React, { useState } from 'react'
import { Box, Button, Text, ThemeContext } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import { useOptions } from '../../../state/hooks'
import { translator } from '../../../utils'
import { PageContent, PageHeader, LanguageBar } from '../../../components'
import { LoginForm, CodeRequestForm } from '../index'

const Login = ({ rest }) => {
  const { locale } = useOptions()
  const [active, setActive] = useState()
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

  console.log(translator(data, locale))

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
        <Box width="medium">
          <ThemeContext.Extend value={{
            button: {
              extend: {
                borderRadius: '8px'
              }
            }
          }}>
            <Button 
              label={<Text weight={600}>{translator(data, locale)}</Text>}
              color="brand-12"
              size="large"
              primary
              onClick={() => setActive(true)}
            />
          </ThemeContext.Extend>
        </Box>
      </Box>
      {
        active && !codeRequest && (
          <LoginForm 
            onClose={() => setActive(undefined)} 
            onCodeRequest={onCodeRequest}
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