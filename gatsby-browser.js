import React from 'react'
import fetch from 'cross-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { StateProvider } from './src/state'
import { ProvideAuth } from './src/hooks'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

const graphURI = process.env.NODE_ENV === 'production' ? 'https://amyandmartin-api.herokuapp.com/graphql' : 'http://127.0.0.1:3000/graphql'

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: graphURI,
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