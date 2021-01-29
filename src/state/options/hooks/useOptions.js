import { useStateValue } from '../../index'
import { set, toggle, updateLocation, setLanguageOption, setTranslationsOptions, setUserOption } from '../actions'

const useOptions = () => {
  const [{ options }, dispatch] = useStateValue()

  const setLocation = (payload) => {
    dispatch(updateLocation(payload))
  }

  const setActivePanels = (payload) => {
    dispatch(set(payload))
  }

  const setUser = (payload) => {
    dispatch(setUserOption(payload))
  }

  const toggleAllPanels = (payload) => {
    if (!options.isExpanded) {
      const active = []
      for (var i = 0; i <= payload.length; i++) {
        active.push(i)
      }
      dispatch(set(active))
    } else {
      dispatch(set([]))
    }
    dispatch(toggle())
  }

  const setLanguage = (payload) => {
    dispatch(setLanguageOption(payload))
  }

  const setTranslations = (payload) => {
    dispatch(setTranslationsOptions(payload))
  }

  const translations = options.translations
  const language = options.language
  const locale = options.language ? options.language.locale : 'en'
  const user = options.user

  return { options, locale, language, setActivePanels, toggleAllPanels, setTranslations, setLocation, setLanguage, user, setUser, translations }
}

export default useOptions