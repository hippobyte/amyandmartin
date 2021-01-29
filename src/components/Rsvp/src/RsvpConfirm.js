import React from 'react'
import { Box, Paragraph, Text } from 'grommet'
import { useOptions } from '../../../state/hooks'

const RsvpConfirm = ({ page, language }) => {
  const { user } = useOptions()
  const greeting = page.translations.find(item => item.languageTitle === language.title)
  const content = page.descriptions.find(item => item.languageTitle === language.title)

  const Confirmed = () => {
    return (
      <>
       <Paragraph>
        {content.description}
       </Paragraph>
       <Signature />
      </>
    )
  } 

  const Declined = () => {
    return (
      <>
       <Paragraph>
        {content.description}
       </Paragraph>
       <Signature />
      </>
    )
  } 

  const Signature = () => {
    return (
      <Paragraph>
        Regards,<br />
        Amy and Martin
      </Paragraph>
    )
  }

  return (
    <Box margin={{ horizontal: "large" }} pad={{ top: "large", bottom: "6em" }}>
      <Text weight={500} size="large" margin={{ bottom: "small" }}>
        {greeting.title}, <Text size="large" weight={600}>{user.guest.firstName} {user.guest.lastName}</Text>.
      </Text>
      {
        user.status === "confirmed" && <Confirmed />
      }
      {
        user.status === "declined" && <Declined />
      }
    </Box>
  )
}

export default RsvpConfirm