import React from 'react'
import fetch from 'cross-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { StateProvider } from './src/state'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL,
    fetch,
  }),
  cache: new InMemoryCache()
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <StateProvider 
      initialState={initialState} 
      reducer={reducers}
    >
      {element}
    </StateProvider>
  </ApolloProvider>
)