import React, { useState } from 'react'
import { Box, Button, Text, ThemeContext } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import { useOptions } from '../../../state/hooks'
import { PageContent, PageHeader, LanguageBar } from '../../../components'
import { LoginForm, CodeRequestForm } from '../index'

const Login = ({ rest }) => {
  const { options } = useOptions()
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
    }
  `)

  const buttonText = () => {
    switch(options && options.language && options.language.locale) {
      case "pl":
        return <Text weight={600}>Zapraszamy na naszą stronę</Text>
      case "zh-cn":
        return <Text weight={600}>Access Our Wedding Site"</Text>
      default:
        return <Text weight={600}>Access Our Wedding Site</Text>
    }
  }

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
              label={buttonText()}
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