import React from 'react'
import Img from 'gatsby-image'

const Image = ({ data, path, alt, style }) => {
  const fluidImage = () => {
    const images = data.allFile.images
    const imageNode = images.find(item => item.node.relativePath === path)
    return imageNode && imageNode.node.childImageSharp.fluid
  }

  return (
    <Img 
      key={path}
      className={fluidImage().aspectRatio}
      alt={alt}
      fluid={fluidImage()} 
      style={style}
    />
  )
}

export default Image