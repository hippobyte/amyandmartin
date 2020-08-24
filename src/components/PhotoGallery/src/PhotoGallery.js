import React, { useState } from 'react'
import { Box, Layer } from 'grommet'
import { Image, ResponsiveGrid } from '../../'

const PhotoGallery = ({ photos, thumbs, size }) => {
  return (
    <Box margin={{ top: "medium" }}>
      <ResponsiveGrid
        columns={{
          small: ["2/2"],
          medium: ["1/3", "1/3", "1/3"],
          large: ["1/4", "1/4", "1/4", "1/4"],
          xlarge: ["1/4"],
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
  const { aspectRatio } = thumb.fluid
  const orientation = aspectRatio ? aspectRatio > 1 ? "horizontal" : "vertical" : undefined

  return (
    <Box overflow="hidden" margin="xsmall" {...options}>
      <Image 
        {...thumb} 
        imgStyle={{ objectFit: 'cover', objectPosition: orientation === "horizontal" ? '40% 30%' : '0% 70%' }}
      />
      {
        show && (
          <FullSizePhoto 
            photo={photo}
            setShow={setShow}
            orientation={orientation}
          />
        )
      }
    </Box>
  )
}

const FullSizePhoto = ({ photo, setShow, orientation }) => (
  <Layer
    onEsc={() => setShow(false)}
    onClickOutside={() => setShow(false)}
    full={orientation === "horizontal"}
    margin="medium"
  >
    <Box pad="small" width={orientation === "vertical" && "50vw"}>
      <Image 
        {...photo} 
        imgStyle={{ 
          objectFit: 'cover', 
          objectPosition: orientation === "horizontal" ? '40% 30%' : '0% 70%'
        }}
      />
    </Box>
  </Layer>
)

export default PhotoGallery