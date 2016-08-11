import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import store from './store/'
import inventory from './containers/inventory';
import App from './containers/App'
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import './index.css';

const AppStore = store();
/*
	Decouple the request to fetch inventory from the component
	The component can therefore be as stateless and unknowing as possible
 */

import {enterInventory} from './routeActions';

render(
  <Provider store={AppStore}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={inventory} />
        <Route path="/inventory" component={inventory} onEnter={enterInventory(AppStore)} />
        <Route path="/add" component={ProductForm} />
        <Route path="/cart" component={Cart} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
