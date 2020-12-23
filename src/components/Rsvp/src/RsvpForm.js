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
    if (formData.lookupType === "findByLastName") {
      setSearchTerm({ lastName: formData.lastName })
    }

    if (formData.lookupType === "findByEmail") {
      setSearchTerm({ email: formData.email })
    }
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
              pad={{ top: "small", horizontal: "medium" }}
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
    inputType: "ButtonGroup",
    name: "lookupType",
    buttons: [
      {
        key: "findByLastName",
        inputType: "TextInput",
        label: "Search by name",
        formItem: {
          inputType: "TextInput",
          name: 'lastName',
          maxLength: 30,
          label: {
            English: "Enter your last name",
            Chinese: "Enter your last name",
            Polish: "Podaj nazwisko",
          },
          helpText: {
            English: "Your family name"
          },
          placeholder: {
            English: "your name...",
            Chinese: "your name...",
            Polish: "your name...",
          },
          "validations": [
            {
              "type": "required",
              "params": [
                "name is required"
              ]
            },
            {
              "type": "max",
              "params": [
                30,
                "name cannot be more than 30 characters"
              ]
            }
          ],
          "validationType": "string"
        }
      },
      {
        key: "findByEmail",
        inputType: "TextInput",
        label: "Search by email",
        formItem: {
          inputType: "TextInput",
          name: 'email',
          label: {
            English: "Enter your email address",
            Chinese: "Enter your email address",
            Polish: "Enter your email address"
          },
          helpText: {
            English: "We likely sent the 'Save-the-date' this email address"
          },
          placeholder: {
            English: "your email address...",
            Chinese: "your email address...",
            Polish: "your email address..."
          },
          "validations": [
            {
              "type": "required",
              "params": [
                "email is required"
              ]
            },
            {
              "type": "email",
              "params": [
                "not a valid email address"
              ]
            }
          ],
          "validationType": "string"
        }
      }
    ]
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