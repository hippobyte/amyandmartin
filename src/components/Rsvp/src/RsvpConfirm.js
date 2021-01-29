import React from 'react'
import { Box, Paragraph, Text } from 'grommet'
import { useOptions } from '../../../state/hooks'

const RsvpConfirm = ({ page }) => {
  const { user } = useOptions()

  console.log(page)

  const Confirmed = () => {
    return (
      <Text weight={500}>Glad you're going.</Text>
    )
  } 

  const Declined = () => {
    return (
      <>
       <Paragraph>
         We are saddenned that you are unable to attend.
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
        Thank you for your response, <Text size="large" weight={600}>{user.guest.firstName} {user.guest.lastName}</Text>.
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