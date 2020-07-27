import React from 'react'
import Img from 'gatsby-image'

const Image = ({ data, path, alt, style, ...rest }) => {
  const fluidImage = () => {
    const images = data.allFile.images
    const imageNode = images.find(item => item.node.relativePath === path)
    return imageNode && imageNode.node.childImageSharp.fluid
  }

  return (
    <Img 
      key={path}
      alt={alt}
      fluid={fluidImage()} 
      style={style}
      {...rest}
    />
  )
}

export default Image