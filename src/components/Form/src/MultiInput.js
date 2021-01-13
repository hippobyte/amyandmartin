import React, { useState } from 'react'
import { Box, Grid } from 'grommet'
import { FormTrash } from 'grommet-icons'
import { useFieldArray } from 'react-hook-form'
import { isArray } from '../../../utils'
import { Button, Empty, FormItem } from '../index'

const MultiInput = ({ name, disabled, loading, methods, formItems, moreButton, empty, maxItems }) => {
  const { control, errors } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: name
  })

  return (
    <>
      {
        fields && fields.map((item, index) => (
          <FormItems
            key={item.id}
            formItemIndex={index}
            formItemName={name}
            formItems={formItems}
            disabled={disabled}
            loading={loading}
            methods={methods}
            remove={remove}
            errors={errors}
          />
        ))
      }
      {
        fields && fields.length === 0 ? (
          <Empty
            {...MultiInput.defaultValue.emptyProps}
            {...empty}
            action={{
              ...MultiInput.defaultValue.moreButton,
              ...moreButton,
              onClick: () => append({})
            }}
          />
        ) : (
          <Box justify="start" align="start" fill="horizontal" margin={{ bottom: "small" }}>
            {
              fields && fields.length <= maxItems && (
                <Button 
                  {...moreButton}
                  onClick={() => append({})}
                />
              )
            }
          </Box>
        )
      }
    </>
  )
}

const FormItems = ({ formItemIndex, formItemName, formItems, columns, disabled, loading, methods, remove, errors }) => {  
  const setGridColumns = () => {
    let gridColumns = []

    if (columns && isArray(columns)) {
      gridColumns = [...gridColumns, ...columns]
    } else {
      for(var i = 0; i < formItems.length; i++) {
        gridColumns.push('flex')
      }
    }

    return [...gridColumns, '44px']
  }

  const gridColumns = setGridColumns()
  const formItemErrors = errors && errors[formItemName] && errors[formItemName] && errors[formItemName][formItemIndex]

  return (
    <Grid columns={gridColumns} gap="small">
    {
      formItems.map((item, index) => {
        const { inputType, name, placeholder, label, helpText } = item
        const errorMessage = formItemErrors && formItemErrors[name] && formItemErrors[name].message
        return (
          <Box flex>
            <FormItem
              key={`${formItemIndex}-${index}`}
              inputType={inputType}
              name={`${formItemName}[${formItemIndex}].${name}`}
              placeholder={placeholder}
              label={formItemIndex === 0 && label}
              helpText={formItemIndex === 0 && helpText}
              methods={methods}
              loading={loading}
              disabled={disabled}
              intent={errorMessage ? "danger" : undefined}
              errorMessage={errorMessage}
            />
          </Box>
        )
      })
    }
      <Box justify="center" align="end">
        <DeleteButton index={formItemIndex} formItemErrors={formItemErrors} onClick={remove} />
      </Box>
    </Grid>
  )
}

const DeleteButton = ({ index, formItemErrors, onClick }) => {
  const [hover, setHover] = useState(false)

  const marginTop = () => {
    if (formItemErrors) {
      return index > 0 ? "-38px" : "-15px"
    }

    return index > 0 ? "0px" : "1px"
  }

  return (
    <Box 
      round="xsmall" 
      flex={false}
      border={{ size: "xsmall", color: hover ? "danger" : "light-6" }}
      align="center"
      justify="center"
      pad="xsmall"
      width="47px"
      height="47px"
      margin={{ top: marginTop }}
      onClick={() => onClick(index)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onMouseLeave={() => setHover(false)}
    >
      <FormTrash size="24px" color={hover ? "danger" : "dark-1"} />
    </Box>
  )
}

MultiInput.defaultProps = {
  maxItems: 2
}

MultiInput.defaultValue = {
  emptyProps: {
    imageSize: 120,
    height: 'medium',
    border: { size: "xsmall", color: "light-6" },
    round: 'xsmall',
    pad: 'medium'
  },
  moreButton: {
    fill: false,
    intent: "primary",
    label: "Add More",
    size: "xsmall"
  }
}

export default MultiInput