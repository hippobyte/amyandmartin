import React from 'react';
import { Box, Button, Text, ThemeContext, ResponsiveContext } from "grommet"
import { translator } from "../../../utils"

const AccessGiveActions = ({ data, locale, setActive }) => {
  const honeyFundData = {
    translationsJson: {
      translations: [
        { locale: "en", translation: "Honey Fund" },
        { locale: "pl", translation: "Fundusz miodowy" },
        { locale: "zh-cn", translation: "蜂蜜基金" }
      ]
    }
  }

  return (
    <ResponsiveContext.Consumer>
      {
        size => (
          <Box width="large" align="center">
            <ThemeContext.Extend
              value={{
                button: {
                  extend: {
                    borderRadius: '8px'
                  }
                },
                text: {
                  extend: {
                    display: "inline-block",
                    textAlign: "center"
                  }
                }
              }}
            >
            <Box
              justify="center"
              align="center"
              direction={size === "small" || size === "medium" ? "column" : "row"}
              gap={size === "small" || size === "medium" ? "medium" : "small"}
            >
              <Button
                label={<Text weight={500} size="large">{translator(data, locale)}</Text>}
                color="brand-12"
                size="large"
                primary
                onClick={() => setActive(true)}
              />
              <Button
                label={<Text weight={500} size="large">{translator(honeyFundData, locale)}</Text>}
                color="secondary-12"
                size="large"
                primary
                target="_blank"
                href="http://www.honeyfund.com/wedding/che-marzejon-09-05-2021"
              />
            </Box>
            </ThemeContext.Extend>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}

export default AccessGiveActions
