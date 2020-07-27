import React from "react"
import { StateProvider } from './src/state'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

export const wrapRootElement = ({ element }) => (
  <StateProvider initialState={initialState} reducer={reducers}>
    {element}
  </StateProvider>
)
