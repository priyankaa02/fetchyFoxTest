import React from 'react'
import ReactDOM from 'react-dom'
import  { Provider }  from 'react-redux'
import { Router } from 'react-router'
import store, { history } from './store'
import AppContainer from './containers/AppContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById('root')
)
