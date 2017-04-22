import { connect } from 'react-redux';

import { selShowValues, selRandomize } from 'js/business/keyboard/selectors';
import { reset, switchShowValues, switchRandomize } from 'js/business/keyboard/actions';
import Component from './component';


const mapStateToProps = state => ({
  showValues: selShowValues(state),
  randomize: selRandomize(state),
});

const mapDispatchToProps = dispatch => ({
  reset() {
    dispatch(reset());
  },
  switchShowValues() {
    dispatch(switchShowValues());
  },
  switchRandomize() {
    dispatch(switchRandomize());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
