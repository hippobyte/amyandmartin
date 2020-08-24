import React from 'react'
import Img from 'gatsby-image'

const Image = ({ fluid, fixed, alt, style, ...rest }) => {

  if (fluid) {
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

  return (
    <Img 
      key={fixed.src}
      alt={alt}
      fixed={fixed}
      style={style}
      {...rest}
    />
  )
}

export default Image