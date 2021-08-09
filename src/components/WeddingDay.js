import React from 'react'
import {Box, Heading, Text} from 'grommet'
import { graphql, useStaticQuery } from "gatsby"
import {translator} from "../utils/index"

export const WeddingDay = ({ margin, pageContext }) => {
  const request = useStaticQuery(graphql`
      query WeddingDay {
          data: allSettingsJson(filter: {templateKey: {eq: "wedding-day"}}) {
              edges {
                  node {
                      id
                      title
                      startTime
                      endTime
                      location
                      directions
                  }
              }
          }
          settings: settingsJson(templateKey: {eq: "wedding-settings"}) {
              directions
              locationDetail
              address
          }
          translationsJson(title: {eq: "Day of Wedding"}) {
              translations {
                  translation
                  locale
              }
          }
      }
  `)

  const data = request.data.edges.map(item => item.node).sort((a, b) => {
    let fa = a.startTime.toLowerCase(),
        fb = b.startTime.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  const settings = request.settings

  const WeddingDayHeader = () => {
    const start = data[0].startTime
    const end = data[data.length-1].endTime

    return (
      <>
        <Heading level={1} textAlign={"center"} size="medium">
          {translator(request, pageContext.language.locale)}
          <Box margin={{top: "small"}}>
            <Text>
              {settings.locationDetail}
            </Text>
            <Text size="xsmall">
              <a
                href={settings.directions}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {settings.address}
              </a>
            </Text>
          </Box>
          <Box
            direction="row" gap="small"
            margin={{ top: "medium" }}
            justify="center"
          >
            <Text>{start}</Text>
            <Text>to</Text>
            <Text>{end}</Text>
          </Box>
        </Heading>
      </>
    )
  }

  const Timestamp = (props) => {
    return (
      <Box pad={{ horizontal: "small" }} round="small" direction="row">
        <Text weight={500}>{props.start}</Text>
        <Text weight={500} margin={{ horizontal: "xsmall" }}>-</Text>
        <Text weight={500}>{props.end}</Text>
      </Box>
    )
  }

  const Description = (props) => {
    return (
      <Box pad={{ horizontal: "small" }} round="small" direction="row">
        <Text weight={500}>{props.title}</Text>
      </Box>
    )
  }

  return (
    <Box align="center">
      <Box
        margin={margin}
        width="80%"
        border={{ color: "light-5" }}
        pad={{bottom: "medium"}}
        round="small"
        align="center"
      >
        <WeddingDayHeader />
        {
          data && data.map(item => {
            return (
              <Box
                key={item.id}
                direction="row"
                pad={{ bottom: "xsmall" }}
              >
                <Timestamp start={item.startTime} end={item.endTime} />
                <Description title={item.title} location={item.location} directions={item.directions} />
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

WeddingDay.defaultProps = {
  margin: { top: "large" }
}
