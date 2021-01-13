import React, { useState } from 'react'
import { Box, Button, ResponsiveContext, Text } from 'grommet'
import { Menu, Close, Previous } from 'grommet-icons'
import { Anchor, LanguageBar } from '../..'

const PageNav = ({ items }) => {
  return (
    <ResponsiveContext.Consumer>
      {
        responsive => {
          return (
            <>
            {
              responsive === "small" || responsive === "medium" ? (
                <MenuButton data={items} />
              ) : (
                <MenuBar data={items} />
              )
            }
            </>
          )
        }
      }
    </ResponsiveContext.Consumer>
  )
}

const MenuButton = ({ data }) => {
  const [active, setActive] = useState(false)

  return (
    <Box align="start" margin={{ horizontal: "large", vertical: "medium" }}>
      <Button
        label="Menu"
        focusIndicator={false}
        plain
        icon={<Menu />}
        onClick={() => setActive(!active)}
      />
      {
        active && <DropContent data={data} close={() => setActive(false)} />
      }
    </Box>
  )
}

const MenuBar = ({ data }) => (
  <Box 
    direction="row" 
    margin={{ horizontal: "large", vertical: "medium" }} 
    gap="medium" 
    border={{ side: "between", color: "light-5" }}
  >
    {
      data.map(item => (
        <Anchor 
          color="dark-8" 
          label={<Text weight={600}>{item.label}</Text>} 
          path={item.path} 
        />
      ))
    }
  </Box>
)

const DropContent = ({ data, close }) => {
  return (
    <Box
      pad="large"
      width="100vw"
      height="100vh"
      background="white"
      style={{ position: 'absolute', top: '0', left: '0', zIndex: '1000' }}
    > 
      <Button
        plain
        icon={<Close />}
        alignSelf="end"
        onClick={close}
      />
      {
        data.map(item => (
          <Box border={{ side: "bottom" }}>
            <Anchor 
              color="dark-8" 
              label={<Box pad={{ vertical: "large" }}>{item.label}</Box>} 
              path={item.path} 
            />
          </Box>
        ))
      }
      <Box margin={{ top: "medium" }} align="start">
        <LanguageBar size="small" />
        <Button
          plain
          label="Back to site"
          onClick={close}
          margin={{ top: "medium" }} 
          icon={<Previous size="16px" />}
        />
      </Box>
    </Box>
  )
}
 
export default PageNav