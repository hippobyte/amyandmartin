import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Button, ResponsiveContext, Text, ThemeContext } from "grommet"
import moment from 'moment-with-locales-es6'
import { useOptions } from '../../../state/hooks'
import { translator } from '../../../utils'
import { Anchor } from '../../../components'
import { RsvpForm } from '../index'

const Rsvp = () => {
  const { locale } = useOptions()
  const [active, setActive] = useState()
  const data = useStaticQuery(graphql`
    query {
      translationsJson(
        templateKey: {
          eq: "translations"
        }, 
        title: {
          eq: "Manage RSVP"
        }
      ) {
        translations {
          locale
          translation
        }
      }
      rsvpTranslation: translationsJson(
        templateKey: {
          eq: "translations"
        }, 
        title: {
          eq: "Please RSVP by"
        }
      ) {
        translations {
          locale
          translation
        }
      }
      settingsJson(templateKey: {eq: "wedding-settings"}) {
        rsvpDate
      }
    }
  `)

  const onClose = () => {
    setActive(undefined)
  }

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
          <Box width="large" margin={{ vertical: "xlarge" }} align="center">
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
                <Anchor to={`/${locale}/rsvp`}>
                  <Button
                    label={<Text weight={500} size="large">{translator(data, locale)}</Text>}
                    color="primary-12"
                    size="large"
                    primary
                  />
                </Anchor>
                <Button
                  label={<Text weight={500} size="large">{translator(honeyFundData, locale)}</Text>}
                  color="secondary-12"
                  size="large"
                  primary
                  target="_blank"
                  href="https://www.honeyfund.com/wedding/che-marzejon-04-23-2022"
                />
              </Box>
            </ThemeContext.Extend>
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )

  return (
    <>
      <Box margin={{ vertical: "xlarge" }} align="center">
        <Box width="medium" align="center">
          <ThemeContext.Extend value={{
            button: {
              extend: {
                borderRadius: '8px'
              }
            }
          }}>
            <Anchor to={`/${locale}/rsvp`}>
              <Button
                label={<Text weight={600}>{translator(data, locale)}</Text>}
                color="primary-12"
                size="large"
                primary
              />
            </Anchor>
            <Text
                color="dark-6"
                weight={500}
                size="small"
                margin={{ top: "medium" }}
            >
              {translator({ translationsJson: data.rsvpTranslation }, locale)} {moment(data.settingsJson.rsvpDate).locale(locale).format('LL')}
            </Text>
          </ThemeContext.Extend>
        </Box>
      </Box>
      {
        active && <RsvpForm onClose={onClose} />
      }
    </>
  )
}

export default Rsvp
