import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import Home from "./home"

import personas from "../reducers/personas"

const rootReducer = combineReducers({
  personas
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default () => (
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </Router>
  </Provider>
)