import React from 'react'
import { Route } from 'react-router-dom'
import { useRequireAuth } from '../../hooks'
import { PageLayout } from '../../components'

const PrivateRoute = ({component: Component, ...rest}) => {
  const auth = useRequireAuth()
  
  return (
    <PageLayout {...rest}>
      <Route 
        {...rest}
        render={props => <Component auth={auth} {...props} />}
      />
    </PageLayout>
  )
}

export default PrivateRoute