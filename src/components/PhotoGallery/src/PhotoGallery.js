import React, { useState } from 'react'
import { Box, Layer } from 'grommet'
import { Image, ResponsiveGrid } from '../../'

const PhotoGallery = ({ photos, thumbs, size }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ResponsiveGrid
        columns={{
          small: ["2/2"],
          medium: ["1/2", "1/2"],
          large: ["1/3", "1/3", "1/3"],
          xlarge: ["1/4", "1/4", "1/4", "1/4"]
        }}
        rows={{
          small: ['auto'],
          medium: ['auto'],
          large: ["auto"],
          xlarge: ['auto'],
        }}
      >
      {
        thumbs && thumbs.map(thumb => {
          const photo = photos.find(item => item.id === thumb.id)
          return (
            <Thumb thumb={thumb} photo={photo} size={size} />
          )
        })
      }
      </ResponsiveGrid>
    </Box>
  )
}

const Thumb = ({ thumb, photo, size }) => {
  const [show, setShow] = useState(false)
  const options = size !== "small" ? { onClick: () => setShow(true) } : {}
  
  return (
    <Box 
      overflow="hidden" 
      round="xsmall" 
      border={{ color: "light-5", size: "xsmall" }} 
      margin="xsmall" 
      justify="center"
      align="center"
      height="400px"
      height="400px"
      {...options}
    >
      <Image 
        objectFit="cover"
        style={{ width: "100%", minWidth: "400px", minHeight: "400px" }}
        {...thumb} 
      />
      {
        show && (
          <FullSizePhoto 
            photo={photo}
            setShow={setShow}
          />
        )
      }
    </Box>
  )
}

const FullSizePhoto = ({ photo, setShow }) => {
  const { presentationWidth, presentationHeight } = photo.fluid
  const orientation = presentationWidth > presentationHeight ? "horizontal" : "vertical"

  return (
    <Layer
      onEsc={() => setShow(false)}
      onClickOutside={() => setShow(false)}
      full={false}
      margin="medium"
    >
      <Box 
        pad="small" 
        height="100vh" 
        width={orientation === "vertical" ? "50vw" : { min: "75vw" }}
      >
        <Image 
          {...photo} 
          objectFit="cover"
          objectPosition={orientation === "horizontal" ? "50% 50%" : "50% 50%"}
        />
      </Box>
    </Layer>
  )
}

export default PhotoGallery