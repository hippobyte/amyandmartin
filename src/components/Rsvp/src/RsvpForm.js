import React, { useState } from 'react'
import { Anchor, Box, Layer, Paragraph, Text } from 'grommet'
import { Previous } from 'grommet-icons'
import { useFormValidations, useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../../../components'
import { RsvpResult } from '../index'

const RsvpForm = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState()
  const { options } = useOptions()
  const { createValidations } = useFormValidations()
  const validations = createValidations(formItems)
  const language = options.language.title

  const onSubmit = (formData) => {
    formData 
      && formData.inviteCode 
      && setSearchTerm({
        inviteCode: formData.inviteCode
      })
  }

  const onReset = () => {
    setSearchTerm(undefined)
  }

  return (
    <Layer
      modal
      position="center"
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Box width="large">
        <Box 
          background="light-0"
          pad={{ horizontal: "medium" }}
          border={{ size: "hairline", color: "dark-2", side: "bottom" }}
        >
          <Paragraph size="large" margin={{ bottom: "small" }}>
            <Text weight={600}>
              Thank you for taking the time to RSVP.
            </Text>
            <br />
            <Text weight={400}>
              Let's start by finding your invite...
            </Text>
          </Paragraph>
        </Box>
        {
          searchTerm ? (
            <RsvpResult 
              searchTerm={searchTerm}
              onReset={onReset}
              language={language}
            />
          ) : (
            <Box 
              border={{ size: "xsmall", side: "top", color: "light-5" }} 
              pad={{ top: "large", horizontal: "medium" }}
            >
              <Form 
                onSubmit={onSubmit}
                validationSchema={validations}
              >
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
            </Box>
          )
        }
        <Box margin={{ top: "small", bottom: "medium", horizontal: "medium" }}>
          <Anchor 
            size="small" 
            onClick={onClose} 
            label="Go back" 
            icon={<Previous size="small" />} 
          />
        </Box>
      </Box>
    </Layer>
  )
}

const formItems = [
  {
    inputType: "TextInput",
    name: 'inviteCode',
    maxLength: 8,
    label: {
      English: "Enter your invitation code",
      Chinese: "Enter your invitation code",
      Polish: "Podaj kod",
    },
    helpText: {
      English: "You can find the invitation code at bottom of your invitation card"
    },
    placeholder: {
      English: "enter invitation code...",
      Chinese: "enter invitation code...",
      Polish: "enter invitation code...",
    },
    "validations": [
      {
        "type": "required",
        "params": [
          "invitation code is required"
        ]
      },
      {
        "type": "max",
        "params": [
          8,
          "invitation code cannot be more than 8 characters"
        ]
      }
    ],
    "validationType": "string"
  },
  {
    inputType: "Submit",
    intent: "dark",
    label: {
      English: "Find your invite",
      Chinese: '繼續',
      Polish: "Dalej"
    }
  }
]

export default RsvpForm