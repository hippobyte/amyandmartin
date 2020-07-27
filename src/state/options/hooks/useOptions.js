import { useStateValue } from '../../index'
import { set, toggle, updateLocation, setLanguageOption } from '../actions'

const useOptions = () => {
  const [{ options }, dispatch] = useStateValue()

  const setLocation = (payload) => {
    dispatch(updateLocation(payload))
  }

  const setActivePanels = (payload) => {
    dispatch(set(payload))
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

  return { options, setActivePanels, toggleAllPanels, setLocation, setLanguage }
}

export default useOptions