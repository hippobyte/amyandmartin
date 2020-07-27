import React from 'react'
import { Box, DropButton, ResponsiveContext } from 'grommet'
import { useStaticQuery, graphql } from 'gatsby'
import { Menu } from 'grommet-icons'
import { Anchor } from '../..'
import { useOptions } from '../../../state/hooks'

const data = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/story" },
  { label: "Travel", path: "/travel" },
  { label: "Things to Do", path: "/activities" },
  { label: "Photos", path: "/photos" }
]

const PageNav = () => {
  const { options } = useOptions()

  const request = useStaticQuery(graphql`
    query PageTitles {
      data: allPagesJson(sort: {fields: order, order: ASC}) {
        pages: edges {
          page: node {
            templateKey
            translations {
              languageTitle
              title
            }
          }
        }
      }
    }
  `)

  const menuItems = request.data.pages
                      .map(item => ({ path: item.page.templateKey, translations: item.page.translations }) )
                      .map(item => ({ path: `/${item.path}`, translation: item.translations.find(item => item.languageTitle === options.language.title) }) )
                      .map(item => ({ path: item.path, label: item.translation.title }) )

  return (
    <ResponsiveContext.Consumer>
      {
        responsive => {
          return (
            <>
            {
              responsive === "small" || responsive === "medium" ? (
                <MenuButton data={menuItems} />
              ) : (
                <MenuBar data={menuItems} />
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