import optionsReducer from './options/reducers'

export default ({ options }, action) => ({
  options: optionsReducer(options, action)
})