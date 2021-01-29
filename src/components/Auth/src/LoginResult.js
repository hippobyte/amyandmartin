import React, { useEffect } from 'react'
import { Anchor, Box, Stack, Text } from 'grommet'
import { navigate } from 'gatsby'
import { gql, useQuery } from '@apollo/client'
import { useAuth } from '../../../hooks'
import { Spinner } from '../..'

const LoginResult = ({ searchTerm, onReset, onCodeRequest, language }) => {
  const { loading, data, error } = useQuery(gql`
    query($inviteCode: String!) {
      rsvp(inviteCode: $inviteCode) {
        id
        status
        partnerStatus
        childStatus
        dietaryRestrictions
        guestCount
        childrenCount
        options
        guest {
          firstName
          lastName
          guestName
          guestCount
          childrenCount
          contact {
            email
            phone
            address
          }
        }
      }
    }`, {
      variables: {
        ...searchTerm
      }
    }
  )

  if (loading) {
    return (
      <Box pad="medium">
        <Spinner />
      </Box>
    )
  }

  if (error) {
    return (
      <Box pad="medium">
        Oops, an unexpected error occurred...
      </Box>
    )
  }

  if (data) {
    if (data.rsvp) {
      return <OnResults data={data.rsvp} language={language} />
    } else {
      return <NoResults onReset={onReset} onCodeRequest={onCodeRequest} language={language} />
    }
  }
}

const NoResults = ({ onReset, onCodeRequest, language }) => {
  const auth = useAuth()

  useEffect(() => {
    auth.setUser(false)
  }, [])

  return (
    <Box>
      <Box 
        pad={{ horizontal: "medium", vertical: "small" }} 
        margin={{ bottom: "small" }}
        background="warning"
      >
        <Text weight={500}>Sorry, we couldn't find your invitation with the provided information.</Text>
      </Box>
      <Box margin={{ top: "small", bottom: "medium" }} pad={{ horizontal: "medium" }}>
        <Text weight={600} margin={{ bottom: "medium" }}>Now what!?</Text>
        <NumberedList number={1}>
          Make sure you entered your invitation code correctly, and <Anchor onClick={onReset}>try again</Anchor>.
        </NumberedList>
        <NumberedList number={2}>
          If you don't have an activation code, we can email it to you. <Anchor onClick={onCodeRequest}>Recover</Anchor> your invitation code.
        </NumberedList>
        <NumberedList number={3}>
          If you're getting frustrated and can't get <strong>this thing</strong> to work, 
          drop us a line and <Anchor label="Amy" href="mailto:amyche@gmail.com" /> or 
          <Anchor label="Martin" href="mailto:martinmarzejon@gmail.com" /> will help you out.
        </NumberedList>
      </Box>
    </Box>
  )
}

const OnResults = ({ data, language }) => {
  const auth = useAuth()

  useEffect(() => {
    auth.setUser(data)
    navigate('/')
  }, [])

  return (
    null
  )
}

const NumberedList = ({ number, label, children }) => {
  return (
    <Box direction="row" align="center" margin={{ bottom: "medium" }}>
      <Stack anchor="center">
        <Box round="50%" width="36px" height="36px" background="dark-6" align="center" justify="center">
          <Text color="white" size="large" weight={700}>{number}</Text>
        </Box>
      </Stack>
      <Text margin={{ left: "small" }} weight={500}>{label || children}</Text>
    </Box>
  )
}

export default LoginResult