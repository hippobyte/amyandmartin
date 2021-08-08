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
  const directions = request.settings.directions

  const WeddingDayHeader = () => {
    const start = data[0].startTime
    const end = data[data.length-1].endTime

    return (
      <>
        <Heading level={1} textAlign={"center"} size="medium">
          {translator(request, pageContext.language.locale)}
          <Box direction="row" gap="small" margin={{ top: "medium", bottom: "small" }} justify="center">
            <Text size="small">{start}</Text>
            <Text size="small">to</Text>
            <Text size="small">{end}</Text>
          </Box>
          <a
            href={directions}
            style={{
              textDecoration: "none"
            }}
          >
            <Heading level={5} margin="none" color="primary">
              DRIVING DIRECTIONS
            </Heading>
          </a>
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
                margin={{ bottom: "small" }}
                pad={{ vertical: "xsmall" }}
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
