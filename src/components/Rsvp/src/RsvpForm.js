import React from 'react'
import { Anchor, Box, Layer, Paragraph, Text } from 'grommet'
import { DataStore } from '@aws-amplify/datastore'
import { Previous } from 'grommet-icons'
import { useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../../../components'
import { Guests } from '../../../models'

const RsvpForm = ({ onClose }) => {
  const { options } = useOptions()
  const language = options.language.title

  const query = async () => {
    try {
      const guests = await DataStore.query(Guests)
      console.log("Guests retrieved successfully!", JSON.stringify(guests))
    } catch (error) {
      console.log("Guests retrieving posts", error)
    }
  }

  const onSubmit = (formData) => {
    console.log(query())
  }  

  return (
    <Layer
      modal
      position="center"
      onEsc={onClose}
      onClickOutside={onClose}
      margin="large"
      full
    >
      <Box pad="large">
        <Paragraph>
          <Text weight={600} size="medium" margin={{ bottom: "medium" }}>
            Thank you for taking the time to RSVP. Let's start by finding your invite...
          </Text>
        </Paragraph>
        <Box border={{ size: "xsmall", side: "top", color: "light-5" }} pad={{ top: "large" }}>
          <Form onSubmit={onSubmit}>
            {
              formItems.map(item => {
                const { label, placeholder, helpText, ...formItem } = item
                return (
                  <FormItem
                    label={label[language]}
                    placeholder={label[language]}
                    helpText={label[language]}
                    {...formItem}
                  />
                )
              })
            }
          </Form>
          <Anchor onClick={onClose} margin={{ top: "large" }} label="Go back" icon={<Previous size="small" />} />
        </Box>
      </Box>
    </Layer>
  )
}

const validations = ({
  
})

const formItems = [
  {
    inputType: "TextInput",
    name: "LastName",
    placeholder: "Enter last name...",
    label: {
      English: "Last Name",
      Chinese: "Last Name",
      Polish: "Nazwisko"
    },
    placeholder: {
      English: "Last Name",
      Chinese: "Last Name",
      Polish: "Nazwisko"
    },
    helpText: {
      English: "Enter your family/last name",
      Chinese: "Enter your family/last name",
      Polish: "Enter your family/last name"
    }
  },
  {
    inputType: "Submit",
    label: {
      English: "Continue",
      Chinese: '繼續',
      Polish: "Dalej"
    }
  }
]

export default RsvpForm