export const translator = (data, locale) => {
  const obj = data.translationsJson && data.translationsJson.translations.find(
    item => item.locale === locale
  )

  if (obj) {
    return obj.translation
  } else {
    return null
  }
}