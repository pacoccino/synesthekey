/* eslint global-require: 0 */

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';

import keyboardMiddleware from '../business/keyboard/middleware';
import asyncActionsMiddleware from '../helpers/asyncActions/middleware';

export const history = createHistory();
const enhancer = compose(
  applyMiddleware(
    thunk,
    keyboardMiddleware,
    asyncActionsMiddleware,
    routerMiddleware(history),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(
  reducers,
  enhancer,
);

export default store;
