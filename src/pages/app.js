import React from "react"
import { Router } from "@reach/router"
import { Login } from '../components'
import { PrivateRoute } from '../routes'

const App = () => {
  return (
    <Router>
      <PrivateRoute path="/app/details" component={<div>Hello World</div>} />
      <Login path="/app/login" />
    </Router>
    )
}

export default App