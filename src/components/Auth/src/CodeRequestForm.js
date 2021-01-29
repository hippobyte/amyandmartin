import React, { useState } from 'react'
import { Anchor, Box, Layer, Paragraph, Text } from 'grommet'
import { Previous } from 'grommet-icons'
import { useFormValidations, useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../..'
import { CodeRequestResult } from '../index'

const CodeRequestForm = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState()
  const { options } = useOptions()
  const { createValidations } = useFormValidations()

  const formItems = [
    {
      inputType: "TextInput",
      name: 'email',
      size: "large",
      maxLength: 255,
      label: {
        English: "Enter your email address",
        Chinese: "Enter your email address",
        Polish: "Podaj email",
      },
      helpText: {
        English: "We'll attempt to find your invitation by your email address"
      },
      placeholder: {
        English: "enter email address...",
        Chinese: "enter email address...",
        Polish: "podaj email...",
      },
      "validations": [
        {
          "type": "required",
          "params": [
            "email address is required"
          ]
        },
        {
          "type": "email",
          "params": [
            "provide a valid email address"
          ]
        }
      ],
      "validationType": "string"
    },
    {
      inputType: "Submit",
      color: "compliment-12",
      label: {
        English: "Recover Invitation Code",
        Chinese: '繼續',
        Polish: "Wyślij Kod"
      }
    }
  ]
  
  const validations = createValidations(formItems)
  const language = options.language.title

  const onSubmit = (formData) => {
    formData 
      && formData.email 
      && setSearchTerm({
        email: formData.email
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
          background="brand-12"
          direction="row"
          pad="medium"
          align="center"
          border={{ size: "hairline", color: "dark-2", side: "bottom" }}
        >
          <Text size="xlarge" weight={400}>
          Recover Invitation Code
          </Text>
        </Box>
        {
          searchTerm ? (
            <CodeRequestResult 
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
                mode='onSubmit'
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

export default CodeRequestForm