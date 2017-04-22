import { createReducer } from 'js/helpers/redux';
import * as types from './actions';
import { getPalette } from './services';
import { DEFAULT_PALETTE } from './constants';

const storedPalette = getPalette();

const initialState = {
  showValues: false,
  randomize: false,
  data: [],
  palette: storedPalette || DEFAULT_PALETTE,
};

function addChar(state, { char }) {
  return {
    ...state,
    data: state.data.concat(char),
  };
}
function reset(state) {
  return {
    ...state,
    data: [],
  };
}

function switchShowValues(state, { b }) {
  return {
    ...state,
    showValues: (b === undefined) ? !state.showValues : !!b,
  };
}
function switchRandomize(state, { b }) {
  return {
    ...state,
    randomize: (b === undefined) ? !state.randomize : !!b,
  };
}

function editKeyColor(state, { key, color }) {
  return {
    ...state,
    palette: {
      ...state.palette,
      [key]: color,
    },
  };
}

function restoreDefaultPalette(state) {
  return {
    ...state,
    palette: DEFAULT_PALETTE,
  };
}

export default createReducer(initialState, {
  [types.ADD_CHAR]: addChar,
  [types.RESET]: reset,
  [types.SWITCH_SHOW_VALUES]: switchShowValues,
  [types.EDIT_KEY_COLOR]: editKeyColor,
  [types.SWITCH_RANDOMIZE]: switchRandomize,
  [types.RESTORE_DEFAULT_PALETTE]: restoreDefaultPalette,
});
