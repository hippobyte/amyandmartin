import React, { useState } from 'react'
import { Box, Button, ResponsiveContext, Text, ThemeContext } from 'grommet'
import { Menu, Close } from 'grommet-icons'
import { Anchor } from '../..'

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
        <Anchor color="dark-2" label={<Text weight={600}>{item.label}</Text>} path={item.path} />
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
              color="dark-2" 
              label={<Box pad={{ vertical: "large" }}>{item.label}</Box>} 
              path={item.path} 
            />
          </Box>
        ))
      }
      <ThemeContext.Extend value={{
        button: {
          extend: {
            borderColor: '#15212f',
            borderWidth: '1px'
          }
        }
      }}>
        <Button
          label="Close Menu"
          margin={{ top: "large" }}
          onClick={close}
        />
      </ThemeContext.Extend>
    </Box>
  )
}

const LanguageBar = () => {
  return (
    <Box>
      EN
    </Box>
  )
}
 
export default PageNav