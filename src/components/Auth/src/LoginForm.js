import React, { useState, useEffect } from 'react'
import { Anchor, Box, Layer, Text } from 'grommet'
import { Previous } from 'grommet-icons'
import { useFormValidations, useOptions } from '../../../state/hooks'
import { Form, FormItem } from '../../../components'
import { LoginResult } from '../index'

const LoginForm = ({ inviteCode, onClose, onCodeRequest }) => {
  const [searchTerm, setSearchTerm] = useState()
  const { options } = useOptions()
  const { createValidations } = useFormValidations()

  useEffect(() => {
    inviteCode && setSearchTerm({
      inviteCode: inviteCode
    })
  })

  const formItems = [
    {
      inputType: "InviteCode",
      name: 'inviteCode',
      size: "large",
      maxLength: 8,
      label: {
        English: "Enter your invitation code",
        Chinese: "輸入邀請碼",
        Polish: "Podaj kod zaproszenia",
      },
      helpText: {
        English: "You can find the invitation code at bottom of your invitation card",
        Chinese: "您可以在邀請卡底部找到邀請代碼",
        Polish: "Kod zaproszenia można znaleźć na dole karty zaproszenia"
      },
      description: {
        English: <Anchor weight={600} size="medium" label="Are you missing an invitation code?" onClick={() => onCodeRequest(true)} />,
        Chinese: <Anchor weight={600} size="medium" label="您是否缺少邀請碼？" onClick={() => onCodeRequest(true)} />,
        Polish: <Anchor weight={600} size="medium" label="Brakuje Ci kodu zaproszenia?" onClick={() => onCodeRequest(true)} />
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
      color: "brand-12",
      label: {
        English: "Next",
        Chinese: '繼續',
        Polish: "Dalej"
      }
    }
  ]
  
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
          background="brand-12"
          direction="row"
          pad="medium"
          align="center"
          border={{ size: "hairline", color: "dark-2", side: "bottom" }}
        >
          <Text size="xlarge" weight={400}>
            Let's verify your identity... 
          </Text>
        </Box>
        {
          searchTerm ? (
            <LoginResult 
              searchTerm={searchTerm}
              onReset={onReset}
              onCodeRequest={onCodeRequest}
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

export default LoginForm