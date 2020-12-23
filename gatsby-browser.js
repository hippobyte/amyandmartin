import React from 'react'
import fetch from 'cross-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { StateProvider } from './src/state'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

const apolloCliebnt = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch,
  }),
  cache: new InMemoryCache()
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloCliebnt}>
    <StateProvider 
      initialState={initialState} 
      reducer={reducers}
    >
      {element}
    </StateProvider>
  </ApolloProvider>
)