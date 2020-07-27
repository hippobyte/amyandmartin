import React from 'react'
import { Box, DropButton, ResponsiveContext, Text } from 'grommet'
import { Menu } from 'grommet-icons'
import { Anchor } from '../..'

const data = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/our-story" },
  { label: "Travel", path: "/travel" },
  { label: "Things to Do", path: "/things-to-do" },
  { label: "Photos", path: "/photos" }
]

const PageNav = () => {
  return (
    <ResponsiveContext.Consumer>
      {
        responsive => {
          console.log(responsive)
          return (
            <>
            {
              responsive === "small" || responsive === "medium" ? (
                <MenuButton data={data} />
              ) : (
                <MenuBar data={data} />
              )
            }
            </>
          )
        }
      }
    </ResponsiveContext.Consumer>
  )
}

const MenuButton = ({ data }) => (
  <Box align="start" margin="medium">
    <DropButton
      label="Menu"
      focusIndicator={false}
      plain
      icon={<Menu />}
      dropAlign={{ top: 'bottom', left: 'left' }}
      dropContent={
        <Box
          pad="medium"
          gap="xsmall"
        >
          {
            data.map(item => (
              <Anchor 
                color="dark-2" 
                label={item.label} 
                path={item.path} 
              />
            ))
          }
        </Box>
      }
    />
  </Box>
)

const MenuBar = ({ data }) => (
  <Box direction="row" margin="medium" gap="medium" border={{ side: "between", color: "light-5" }}>
    {
      data.map(item => (
        <Anchor color="dark-2" label={item.label} path={item.path} />
      ))
    }
  </Box>
)
 
export default PageNav