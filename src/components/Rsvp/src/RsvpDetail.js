import React, { useState } from 'react'
import { Box, Text } from 'grommet'
import { useFormValidations, useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../..'

const RsvpDetail = ({ language, page, viewportSize }) => {
  const { user } = useOptions()
  const { createValidations } = useFormValidations()
  const options = pageOptions(page, language)

  console.log(user)

  const setFormItems = () => {
    const formItems = [
      {
        inputType: "Header",
        label: `${user.guest.firstName},`
      }
    ]

    const submitAction = {
      inputType: "Submit",
      name: "submit",
      color: "brand-12",
      label: {
        English: "Update Response",
        Chinese: '更新回應',
        Polish: "Zaktualizuj odpowiedź"
      }
    }

    const attendance = {
      inputType: "ButtonGroup",
      compact: true,
      name: "status",
      label: "Will you attend our wedding celebration?",
      size: "large",
      buttons: []
    }

    const attendanceButtonConfirmed = {
      key: "confirmed",
      inputType: "TextInput",
      label: <Text size="small" weight={900}>YES</Text>,
      description: <Text size="small" weight={500}>I will attend the celebration</Text>,
      formItems: []
    }

    const attendanceButtonConfirmedPartner = {
      inputType: "ButtonGroup",
      compact: true,
      name: "partner",
      label: "Will your partner attend?",
      buttons: [
        {
          key: "confirmed",
          inputType: "TextInput",
          name: "guestPartner",
          label: <Text size="small" weight={900}>YES</Text>,
          description: <Text size="small" weight={500}>I party best with my partner</Text>,
          formItems: [
            {
              inputType: "TextInput",
              size: "small",
              name: "guestName",
              label: "Your partner's name",
              placeholder: "Enter your partner's name..."
            }
          ]
        },
        {
          key: "declined",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>NO</Text>,
          description: <Text size="small" weight={500}>My partner is unable to attend</Text>
        }
      ]
    }

    const attendanceButtonConfirmedChildren = {
      inputType: "ButtonGroup",
      compact: true,
      name: "status",
      label: "Will your children attend?",
      buttons: [
        {
          key: "confirmed",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>YES</Text>,
          description: <Text size="small" weight={500}>My children also love a good party</Text>,
          formItems: [
            {
              inputType: "MultiInput",
              size: "small",
              name: "options",
              label: "Child Guests",
              maxItems: user.guest.childrenCount,
              helpText: "under 21 years of age",
              empty: {
                title: "Add guests under 21-years of age",
                height: "fit-content"
              },
              moreButton: {
                label: "Add child",
                intent: "dark",
                size: "xsmall"
              },
              formItems: [
                {
                  inputType: "TextInput",
                  name: "childName",
                  placeholder: "Enter child name...",
                }
              ]
            }
          ]
        },
        {
          key: "declined",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>NO</Text>,
          description: <Text size="small" weight={500}>My children have other plans</Text>
        }
      ]
    }

    const attendanceButtonDeclined = {
      key: "declined",
      inputType: "TextInput",
      label: <Text size="small" weight={900}>NO</Text>,
      description: <Text size="small" weight={500}>I am unable to attend the celebration</Text>
    }

    user.guest.guestCount > 0 && attendanceButtonConfirmed.formItems.push(attendanceButtonConfirmedPartner)
    user.guest.childrenCount > 0 && attendanceButtonConfirmed.formItems.push(attendanceButtonConfirmedChildren)
    
    attendance.buttons.push(attendanceButtonConfirmed)
    attendance.buttons.push(attendanceButtonDeclined)
    formItems.push(attendance)
    formItems.push(submitAction)

    return formItems
  }

  const formItems = setFormItems()
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
        defaultValues={{
          guestName: user.guest.guestName
        }}
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