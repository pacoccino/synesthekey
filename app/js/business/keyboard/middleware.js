import { EDIT_KEY_COLOR, RESTORE_DEFAULT_PALETTE } from './actions';
import { selPalette } from './selectors';
import { storePalette } from './services';

const middleware = store => next => action => {
  next(action);
  if (action.type === EDIT_KEY_COLOR || action.type === RESTORE_DEFAULT_PALETTE) {
    const palette = selPalette(store.getState());
    storePalette(palette);
  }
};

export default middleware;