export const translator = (data, locale) => {
  const obj = data.options && data.options.translations.find(item => item.locale === locale)

  if (obj) {
    return obj.translation
  } else {
    return null
  }
}