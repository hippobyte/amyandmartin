import React from 'react'
import { Anchor, Box, Layer, Paragraph, Text } from 'grommet'
import { Previous } from 'grommet-icons'
import { useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../../../components'

const RsvpForm = ({ onClose }) => {
  const { options } = useOptions()
  const language = options.language.title

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <Layer
      modal
      position="center"
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Box margin="medium" pad={{ horizontal: "medium", top: "small", bottom: "large" }} border={{ size: "xsmall", color: "light-6" }} round="xsmall">
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
                    label={label ? label[language] : undefined}
                    placeholder={placeholder ? placeholder[language] : undefined}
                    helpText={helpText ? helpText[language] : undefined}
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
    inputType: "ButtonGroup",
    name: "lookupType",
    buttons: [
      {
        key: "findByLastName",
        inputType: "TextInput",
        label: "Last Name",
        description: "Search by your family name.",
        formItem: {
          inputType: "TextInput",
          name: 'lastName',
          label: {
            English: "Enter your family (last) name",
            Chinese: "Enter your family name",
            Polish: "Enter your family name"
          },
          placeholder: {
            English: "your name...",
            Chinese: "your name...",
            Polish: "your name...",
          }
        }
      },
      {
        key: "findByEmail",
        inputType: "TextInput",
        label: "Email",
        description: "Search by your email address.",
        formItem: {
          inputType: "TextInput",
          name: 'email',
          label: {
            English: "Enter your email address",
            Chinese: "Enter your email address",
            Polish: "Enter your email address"
          },
          placeholder: {
            English: "your email address...",
            Chinese: "your email address...",
            Polish: "your email address..."
          }
        }
      }
    ]
  },
  {
    inputType: "Submit",
    label: {
      English: "Find your invite",
      Chinese: '繼續',
      Polish: "Dalej"
    }
  }
]

export default RsvpForm