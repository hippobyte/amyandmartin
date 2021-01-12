import React from "react"
import { Router } from "@reach/router"
import { Login, RsvpDetail } from '../components'
import { PrivateRoute } from '../routes'

const App = (props) => {
  console.log(props)
  return (
    <Router>
      <PrivateRoute path="/app/details" component={<div>Hello World</div>} />
      <PrivateRoute path="/app/rsvp" component={<div>Hello World</div>} />
      <Login path="/app/login" />
    </Router>
    )
}

export default App