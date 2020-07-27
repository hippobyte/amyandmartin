import { SET_ACTIVE_PANELS, TOGGLE_EXPANDED_PANELS, UPDATE_LOCATION, SET_LANGUAGE } from './actions'

export const INITIAL_STATE = { 
  isExpanded: false, 
  activePanels: [],
  location: {},
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
    default:
      return state
  }
}