import React from 'react'
import * as yup from 'yup'
import { navigate } from 'gatsby'
import { gql, useMutation } from '@apollo/client'
import { Box, Text } from 'grommet'
import { useAuth } from '../../../hooks'
import { useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../..'

const RsvpDetail = ({ language, viewportSize }) => {
  const [ mutation, { loading, data, error } ] = useMutation(updateRsvp)
  const { user, translations } = useOptions()
  const auth = useAuth()
  const rsvpData = data ? data.updateRsvp.rsvp : user

  const translate = (term) => {
    const value = term.toLowerCase()
    return translations[value] ? translations[value][language.locale] : term
  }

  if (error) {
    console.log(error)
  }

  if (data) {
    auth.setUser(rsvpData)
    rsvpData.status == "confirmed" && navigate(`/${language.locale}/confirm`)
    rsvpData.status == "declined"  && navigate(`/${language.locale}/decline`)
  }

  const setFormItems = () => {
    const formItems = []

    const submitAction = {
      inputType: "Submit",
      name: "submit",
      color: "brand-12",
      size: "large",
      label: translate('Update Response')
    }

    const attendance = {
      inputType: "ButtonGroup",
      compact: true,
      name: "status",
      label: translate("Will you attend our wedding celebration"),
      size: "large",
      buttons: []
    }

    const attendanceButtonConfirmed = {
      key: "confirmed",
      inputType: "TextInput",
      label: <Text size="small" weight={900}>{translate("YES")}</Text>,
      description: <Text size="small" weight={500}>{translate("I will attend the celebration")}</Text>,
      formItems: []
    }

    const attendanceButtonConfirmedPartner = {
      inputType: "ButtonGroup",
      compact: true,
      name: "partnerStatus",
      label: translate("Will your companion attend"),
      buttons: [
        {
          key: "confirmed",
          inputType: "TextInput",
          name: "guestPartner",
          label: <Text size="small" weight={900}>{translate("YES")}</Text>,
          description: <Text size="small" weight={500}>{translate("I party best with my partner")}</Text>,
          formItems: [
            {
              inputType: "TextInput",
              size: "small",
              name: "partnerName",
              label: translate("Your companion's name"),
              placeholder: "Enter full name..."
            }
          ]
        },
        {
          key: "declined",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>{translate("NO")}</Text>,
          description: <Text size="small" weight={500}>{translate("My partner is unable to attend")}</Text>
        }
      ]
    }

    const attendanceButtonConfirmedChildren = {
      inputType: "ButtonGroup",
      compact: true,
      name: "childStatus",
      label: translate("Will your children attend?"),
      buttons: [
        {
          key: "confirmed",
          inputType: "TextInput",
          label: <Text size="small" weight={900}>{translate("YES")}</Text>,
          description: <Text size="small" weight={500}>{translate("My children also love a good party")}</Text>,
          formItems: [
            {
              inputType: "MultiInput",
              size: "small",
              name: "children",
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
          label: <Text size="small" weight={900}>{translate("NO")}</Text>,
          description: <Text size="small" weight={500}>{translate("My children have other plans")}</Text>
        }
      ]
    }

    const attendanceButtonDeclined = {
      key: "declined",
      inputType: "TextInput",
      label: <Text size="small" weight={900}>{translate("NO")}</Text>,
      description: <Text size="small" weight={500}>{translate("I am unable to attend the celebration")}</Text>
    }

    const dietaryRestrictions = {
      inputType: "TextArea",
      name: "dietaryRestrictions",
      maxLength: 140,
      label: translate("Please let us know of any dietary restrictions in your party."),
      defaultValue: user.guest.dietaryRestrictions,
    }

    user.guest.guestCount > 0 && attendanceButtonConfirmed.formItems.push(attendanceButtonConfirmedPartner)
    user.guest.childrenCount > 0 && attendanceButtonConfirmed.formItems.push(attendanceButtonConfirmedChildren)

    attendanceButtonConfirmed.formItems.push(dietaryRestrictions)
    
    attendance.buttons.push(attendanceButtonConfirmed)
    attendance.buttons.push(attendanceButtonDeclined)
    formItems.push(attendance)
    formItems.push(submitAction)

    return formItems
  }

  const formItems = setFormItems()

  console.log(formItems)

  const validations = yup.object().shape({
    status: yup
      .string()
      .required('response is required'),
    partnerStatus: yup
      .string()
      .when('status', {
        is: (value) => value === "confirmed" && user.guest.guestCount > 0,
        then: yup.string().required('response is required')
      }),
    childStatus: yup
      .string()
      .when('status', {
        is: (value) => value === "confirmed" && user.guest.childrenCount > 0,
        then: yup.string().required('response is required')
      })
  })

  const onSubmit = (formData) => {
    mutation({
      variables: {
        input: {
          id: user.id,
          ...formData
        }
      }
    })
  }

  return (
    <Box margin={{ horizontal: "large", vertical: "small" }}>
      <Text size="small" weight={600}>RSVP</Text>
      <Text size="xxlarge" margin={{ bottom: "medium" }} weight={500}>{user.guest.firstName} {user.guest.lastName},</Text>
      <Form 
        onSubmit={onSubmit}
        validationSchema={validations}
        width={viewportSize === "small" ? "100%" : "75%"}
        defaultValues={{
          status: rsvpData.status,
          partnerStatus: rsvpData.partnerStatus,
          partnerName: rsvpData.guest.guestName,
          childStatus: rsvpData.childStatus,
          children: rsvpData.options.children && rsvpData.options.children.map(item => ({ childName: item })),
          dietaryRestrictions: rsvpData.dietaryRestrictions
        }}
      >
        {
          formItems.map(item => {
            const { label, placeholder, helpText, ...formItem } = item
            return (
              <FormItem
                disabled={loading}
                loading={loading}
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

export const updateRsvp = gql`
  mutation updateRsvp($input: UpdateRsvpInput!) {
    updateRsvp(input: $input) {
      rsvp {
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
    }
  }
`

export default RsvpDetail