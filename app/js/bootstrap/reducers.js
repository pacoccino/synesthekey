import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { ASYNC_STATE_KEY, asyncReducer } from '../helpers/asyncActions';
import { UI_STATE_KEY, KEYBOARD_STATE_KEY } from '../constants/reducerKeys';
import keyboard from '../business/keyboard/reducers';

const reducers = combineReducers({
  [ASYNC_STATE_KEY]: asyncReducer,
  [KEYBOARD_STATE_KEY]: keyboard,
  routing: routerReducer,
  form: formReducer,
});

export default reducers;
