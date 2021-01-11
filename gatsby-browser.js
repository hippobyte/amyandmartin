import React from 'react'
import fetch from 'cross-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { StateProvider } from './src/state'
import { ProvideAuth } from './src/hooks'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://amyandmartin-api.herokuapp.com/graphql',
    fetch,
  }),
  cache: new InMemoryCache()
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ProvideAuth>
        <StateProvider 
          initialState={initialState} 
          reducer={reducers}
        >
          {element}
        </StateProvider>
      </ProvideAuth>
    </ApolloProvider>
  )
}