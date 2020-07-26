import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Grid, Grommet } from 'grommet'
import { PageHeader } from '../index'
import { Image } from '../../index'
import { theme } from '../../../style'

const PageLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {in: [
        "amymartin.jpeg"
      ]}}) {
        images: edges {
          node {
            relativePath
            childImageSharp {
              fluid(grayscale: true, cropFocus: CENTER){
                aspectRatio
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grommet theme={theme} full>
      <Grid columns={{ count: 2, size: "50%" }} row={{ count: 1, size: "full" }} fill>
        <Box justify="center" align="center">
          <PageHeader />
          {children}
        </Box>
        <Box background="light-1">
          <Image 
            data={data} 
            path="amymartin.jpeg" 
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