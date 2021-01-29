import { SET_ACTIVE_PANELS, SET_TRANSLATIONS_OPTIONS, TOGGLE_EXPANDED_PANELS, UPDATE_LOCATION, SET_LANGUAGE, SET_USER } from './actions'

export const INITIAL_STATE = { 
  isExpanded: false, 
  activePanels: [],
  location: {},
  translations: {},
  user: {},
  language: {
    title: 'English',
    description: 'English',
    locale: 'en',
    default: true,
    order: 0
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_PANELS:
      return {
        ...state,
        activePanels: action.payload
      }
    case TOGGLE_EXPANDED_PANELS:
      return {
        ...state,
        isExpanded: !state.isExpanded
      }
    case SET_TRANSLATIONS_OPTIONS:
      return {
        ...state,
        translations: action.payload
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}