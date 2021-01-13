import React from 'react'
import { Box, Text } from 'grommet'
import { useFormValidations, useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../..'

const RsvpDetail = ({ language, page, viewportSize }) => {
  const { user } = useOptions()
  const { createValidations } = useFormValidations()
  const options = pageOptions(page, language)

  const formItems = [
    {
      inputType: "Header",
      label: {
        English: options.title,
        Chinese: options.title,
        Polish: options.title,
      }
    },
    {
      inputType: "ButtonGroup",
      compact: true,
      name: "status",
      label: {
        English: "Will you attend our wedding celebration?",
        Chinese: "Will you attend our wedding celebration?",
        Polish: "Will you attend our wedding celebration?",
      },
      buttons: [
        {
          key: "confirmed",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>YES</Text>,
          description: <Text size="small" weight={500}>I will attend the celebration</Text>,
          formItems: [
            {
              inputType: "TextInput",
              name: "test"
            }
          ]
        },
        {
          key: "declined",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>NO</Text>,
          description: <Text size="small" weight={500}>I am unable to attend the celebration</Text>
        }
      ]
    },
    {
      inputType: "Submit",
      name: "submit",
      color: "brand-12",
      label: {
        English: "Update Response",
        Chinese: '更新回應',
        Polish: "Zaktualizuj odpowiedź"
      }
    }
  ]
  
  const validations = createValidations(formItems)

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <Box
      margin={{ horizontal: "large", vertical: "small" }}
    >
      <Form 
        onSubmit={onSubmit}
        validationSchema={validations}
        width={viewportSize === "small" ? "100%" : "75%"}
      >
        {
          formItems.map(item => {
            const { label, placeholder, helpText, ...formItem } = item
            return (
              <FormItem
                viewportSize={viewportSize}
                label={label && label[language.title] ? label[language.title] : label}
                placeholder={placeholder && placeholder[language.title] ? placeholder[language.title] : placeholder}
                helpText={helpText && helpText[language.title] ? helpText[language.title] : helpText}
                {...formItem}
              />
            )
          })
        }
      </Form>
    </Box>
  )
}

function pageOptions(page, language) {
  const titleObject = page.translations && page.translations.find(item => item.languageTitle === language.title)

  return ({
    title: titleObject && titleObject.title
  })
}

export default RsvpDetail