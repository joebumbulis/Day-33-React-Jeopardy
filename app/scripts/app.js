import store from './store.js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import AppReducer from './reducers/app_reducer.js'

export default function app() {
  render(
    <Provider store={store}>
      <AppRoot />
    </Provider>,
    document.getElementById('app')
  )
}


    store.dispatch({
        type: "TESTING",
    });
