export const ADD_CHAR = 'keyboard:add-char';
export const SWITCH_SHOW_VALUES = 'keyboard:switch-show-values';
export const SWITCH_RANDOMIZE = 'keyboard:switch-randomize';
export const RESET = 'keyboard:reset';
export const EDIT_KEY_COLOR = 'keyboard:edit-key-color';
export const RESTORE_DEFAULT_PALETTE = 'keyboard:restore-default-palette';

export function addChar(char) {
  return {
    type: ADD_CHAR,
    char,
  };
}
export function switchShowValues(b) {
  return {
    type: SWITCH_SHOW_VALUES,
    b,
  };
}
export function switchRandomize(b) {
  return {
    type: SWITCH_RANDOMIZE,
    b,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}

export function editKeyColor(key, color) {
  return {
    type: EDIT_KEY_COLOR,
    key,
    color,
  };
}

export function restoreDefaultPalette() {
  return {
    type: RESTORE_DEFAULT_PALETTE,
  };
}
