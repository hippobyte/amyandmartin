import * as yup from 'yup'

const useFormValidations = () => {
  const createSchema = (schema, config) => {
    const { name, validationType, validations = [] } = config
    if (!yup[validationType]) {
      return schema
    }
    let validator = yup[validationType]()
    validations.forEach(validation => {
      const { params, type } = validation
      if (!validator[type]) {
        return
      }
      const regExp = type === "matches" && new RegExp(params[0])
      const validatorParams = type === "matches"  ? [regExp, ...params.slice(1)] : params
      validator = validator[type](...validatorParams)
    })
    schema[name] = validator
  
    return schema
  }

  const createValidations = (formItems) => {
    const formSchema = formItems.reduce(createSchema, {})
    return yup.object().shape(formSchema)
  }

  return { createValidations }
}

export default useFormValidations