import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header'

const Router = () => (
  <BrowserRouter>
    <Header />
    <section class="main-content">

      <Switch>
        <Route exact path="/login" component={() => (<div>Login Content</div>)} />
      </Switch>
    </section>
  </BrowserRouter>
)

export default Router
