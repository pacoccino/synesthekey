import { selectProperty } from 'js/helpers/redux';
import { KEYBOARD_STATE_KEY } from 'js/constants/reducerKeys';

export const selKeyboardData = selectProperty([KEYBOARD_STATE_KEY, 'data'], []);
export const selPalette = selectProperty([KEYBOARD_STATE_KEY, 'palette'], {});
export const selShowValues = selectProperty([KEYBOARD_STATE_KEY, 'showValues'], false);
export const selRandomize = selectProperty([KEYBOARD_STATE_KEY, 'randomize'], false);
