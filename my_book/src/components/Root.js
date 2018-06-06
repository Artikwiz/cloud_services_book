import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from '../config/configureStore';
import App from '../containers/App'

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/:filter?" component={App} />
    </ConnectedRouter>
  </Provider>
)

export default Root;