import React, { useEffect } from 'react'
import { Anchor, Box, Stack, Text } from 'grommet'
import { gql, useQuery } from '@apollo/client'
import { useAuth } from '../../../hooks'
import { Spinner } from '../..'

const CodeRequestResult = ({ searchTerm, onReset, language }) => {
  const { loading, data, error } = useQuery(gql`
    query($email: String!) {
      resetByEmail(email: $email) {
        email
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
    if (data.resetByEmail) {
      return <OnResults data={data.resetByEmail} language={language} />
    } else {
      return <NoResults onReset={onReset} language={language} />
    }
  }
}

const NoResults = ({ onReset, language }) => {
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
          Make sure you entered your email address correctly, and <Anchor onClick={onReset}>try again</Anchor>.
        </NumberedList>
        <NumberedList number={2}>
          If you're getting frustrated and can't get <strong>this thing</strong> to work, 
          drop us a line and <Anchor label="Amy" href="mailto:amyche@gmail.com" /> or 
          <Anchor label="Martin" href="mailto:martinmarzejon@gmail.com" /> will help you out.
        </NumberedList>
      </Box>
    </Box>
  )
}

const OnResults = ({ data, language }) => {
  return (
    <Box>
      <Box 
        pad={{ horizontal: "medium", vertical: "small" }} 
        margin={{ bottom: "small" }}
        background="success-10"
      >
        <Text weight={500}>Success, your invitation code is on its way.</Text>
      </Box>
      <Box margin={{ top: "small", bottom: "medium" }} pad={{ horizontal: "medium" }}>
        <Text weight={600} margin={{ bottom: "medium" }}>Now what!?</Text>
        <NumberedList number={1}>
          We've sent an invitation code to <strong>{data.email}</strong>, check your inbox for our reminder email.
        </NumberedList>
        <NumberedList number={2}>
          Follow instructions found within the email.
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

export default CodeRequestResult