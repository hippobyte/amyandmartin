import React, { useState, useContext, createContext } from 'react'
import Cookies from 'js-cookie'
import { string } from 'yup/lib/locale'

const authContext = createContext()

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ domain, children }) {
  const auth = useProvideAuth(domain)
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext)
}

// Provider hook that creates auth object and handles state
function useProvideAuth(domain) {
  const [user, setUser] = useState(null)

  const setAuth = (data) => {
    console.log(data)
    Cookies.set('userAuth', data)
  }

  const getAuth = () => {
    Cookies.get('userAuth')
  }
  
  return { user, setUser, setAuth, getAuth }
}