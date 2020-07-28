import React from 'react'
import Img from 'gatsby-image'

const Image = ({ fluid, alt, style, ...rest }) => {
  return (
    <Img 
      key={fluid.src}
      alt={alt}
      fluid={fluid}
      style={style}
      {...rest}
    />
  )
}

export default Image