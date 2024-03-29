import React, { useEffect, useState } from "react"
import {Box, Heading, Text} from 'grommet'
import { graphql, useStaticQuery } from "gatsby"
import moment from 'moment-with-locales-es6'
import {Anchor, LanguageBar, Rsvp} from "../components"

export const WeddingDay = ({ margin, pageContext }) => {
  const request = useStaticQuery(graphql`
      query WeddingDay {
          data: allSettingsJson(
              filter: {
                  templateKey: {
                      eq: "wedding-day"
                  }
              },
              sort: {
                  fields: order,
                  order: ASC
              }) {
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
              ceremonyDate
              directions
              locationDetail
              address
          }
      }
  `)

  const data = request.data.edges.map(item => item.node)
  const settings = request.settings

  const WeddingDayHeader = () => {
    const start = data[0].startTime
    const end = data[data.length-1].endTime

    return (
      <>
        <Heading level={1} textAlign={"center"} size="medium" margin="none">
          {settings.locationDetail}
          <Box margin={{top: "small"}}>
            <Text size="small">
              <Anchor
                href={settings.directions}
                color="black"
                weight={900}
              >
                {settings.address}
              </Anchor>
            </Text>
          </Box>
          <Box
            margin={{ top: "medium" }}
          >
            <Text>
              {moment(settings.ceremonyDate).locale(pageContext.language.locale).format('LL')}
            </Text>
            <Box
              direction="row"
              gap="xsmall"
              justify="center"
            >
              <Text>{start}</Text>
              <Text>to</Text>
              <Text>{end}</Text>
            </Box>
            <Text margin={{top: "xsmall"}} size="small">
              <Anchor
                color="primary"
                weight={600}
                href="https://hippo-public-assets.s3-us-west-2.amazonaws.com/assets/che-marzejon-wedding.ics">
                Add to Calendar
              </Anchor>
            </Text>
          </Box>
        </Heading>
        <LanguageBar
          size="small"
          helpText={false}
          margin={{ top: "none", bottom: "medium"}}
        />
        <Anchor href="https://hippo-public-assets.s3.us-west-2.amazonaws.com/assets/2018-Map-Village-Directory-page-001-1.jpeg">
          Don't get lost, get the Village Map.
        </Anchor>
      </>
    )
  }

  const Timestamp = (props) => {
    return (
      <Box pad={{ horizontal: "small" }} round="small" direction="row">
        <Text weight={600}>{props.start}</Text>
        <Text weight={600} margin={{ horizontal: "xsmall" }}>-</Text>
        <Text weight={600}>{props.end}</Text>
      </Box>
    )
  }

  const Description = (props) => {
    return (
      <Box pad={{ horizontal: "small" }} round="small" align="center">
        <Text textAlign="center" weightgit ={500}>
          {props.title}
          {
            props.location && (
              <Text margin={{left: "xsmall"}} size="small" textAlign="center" weight={500}>
                ({props.location})
              </Text>
            )
          }
        </Text>
        {
          props.directions && (
            <Box align="center" margin={{ top: "xsmall" }}>
              <Text size="small" textAlign="center" weight={400}>{props.directions}</Text>
            </Box>
          )
        }
      </Box>
    )
  }

  return (
    <Box align="center">
      <Box
        margin={margin}
        width="80%"
        pad={{bottom: "medium"}}
        round="small"
        align="center"
      >
        <WeddingDayHeader />
        <Rsvp />
        <Box
          width="100%"
          margin={{
            top: "large"
          }}
        >
        {
          data && data.map(item => {
            return (
              <Box
                key={item.id}
                pad="small"
                align="center"
                margin={{bottom: "large"}}
                round={"small"}
                border={{
                  size: "small",
                  color: "light-4"
                }}
              >
                <Timestamp start={item.startTime} end={item.endTime} />
                <Description title={item.title} location={item.location} directions={item.directions} />
              </Box>
            )
          })
        }
        </Box>
      </Box>
    </Box>
  )
}

WeddingDay.defaultProps = {
  margin: { top: "large" }
}
