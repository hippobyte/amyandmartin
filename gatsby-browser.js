import React from 'react'
import fetch from 'cross-fetch'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { StateProvider } from './src/state'
import { ProvideAuth } from './src/hooks'
import initialState from './src/state/initial_state'
import reducers from './src/state/reducers'

const domain  = process.env.NODE_ENV === 'production' ? 'amyandmartin-api.herokuapp.com' : '.localhost'
const baseURL = domain === '.localhost' ? 'http://127.0.0.1:3000' : 'https://amyandmartin-api.herokuapp.com'
const graphURI = `${baseURL}/graphql`

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
      <ProvideAuth domain={domain}>
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