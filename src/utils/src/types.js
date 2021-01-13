export const isString = (obj) => (
  Object.prototype.toString.call(obj) === '[object String]'
)

export const isNumber = (obj) => (
  Object.prototype.toString.call(obj) === '[object Number]'
)

export const isArray = (obj) => (
  Object.prototype.toString.call(obj) === '[object Array]'
)

export const isObject = (obj) => (
  Object.prototype.toString.call(obj) === '[object Object]'
)

export const isNull = (obj) => (
  Object.prototype.toString.call(obj) === '[object Null]'
)

export const isUndefined = (obj) => (
  Object.prototype.toString.call(obj) === '[object Undefined]'
)

export const isBlank = (obj) => {
  const typeOf = Object.prototype.toString.call(obj)
  return (
    ['[object Null]', '[object Undefined]'].includes(typeOf) || (typeOf === '[object String]' && obj === '')
  )
}