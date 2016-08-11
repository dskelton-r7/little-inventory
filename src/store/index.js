import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

/*
** configureStore
** Factory used to create the redux store with preloadedState
** State could be hydrated in various ways, stored on global window or localStorage possibly
*/
export default function configureStore(state) {
  const store = createStore(
    rootReducer,
    state,

    /*
    ** redux think middleware
    ** Ensure action creators in actions.js return functions instead of actions
    ** The thunks can be used to delay the dispatch of a given action
    */
   
    applyMiddleware(thunkMiddleware, createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}