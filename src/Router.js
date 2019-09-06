import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => (
  <BrowserRouter>
    <div>header</div>

    <Switch>
      <Route exact path="/login" component={() => (<div>Login Content</div>)} />
    </Switch>
  </BrowserRouter>
)

export default Router
