import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Grid, Grommet } from 'grommet'
import { PageHeader, PageNav } from '../index'
import { Image } from '../../index'
import { theme } from '../../../style'

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {in: [
        "martinamyhome.jpeg"
      ]}}) {
        images: edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grommet theme={theme} full>
      <Grid 
        columns={{ count: 2, size: "50%" }} 
        row={{ count: 1, size: "full" }} 
        fill
      >
        <Box
          pad="medium"
        >
          <PageNav 
            justify="start"
            alignSelf="center"
          />
          <PageHeader 
            flex="grow"
            justify="center"
            margin={{ top: "xlarge" }}
            languageBar={true}
          />
          <Box
            flex="grow"
          >
            {children}
          </Box>
        </Box>
        <Box background="light-1">
          <Image 
            data={data} 
            path="martinamyhome.jpeg" 
            style={{ 
              height: "100%"
            }} 
          />
        </Box>
      </Grid>
    </Grommet>
  )
}

export default PageLayout