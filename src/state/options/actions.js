export const SET_ACTIVE_PANELS = 'options/SET_ACTIVE_PANELS'
export const TOGGLE_EXPANDED_PANELS = 'options/TOGGLE_EXPANDED_PANELS'
export const UPDATE_LOCATION = 'options/UPDATE_LOCATION'
export const SET_LANGUAGE = 'options/SET_LANGUAGE'

export const set = (payload) => ({
  type: SET_ACTIVE_PANELS,
  payload: payload
})

export const toggle = () => ({
  type: TOGGLE_EXPANDED_PANELS
})

export const updateLocation = (payload) => ({
  type: UPDATE_LOCATION,
  payload: payload
})

export const setLanguageOption = (payload) => ({
  type: SET_LANGUAGE,
  payload: payload
})