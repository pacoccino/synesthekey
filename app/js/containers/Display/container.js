import { connect } from 'react-redux';

import { selShowValues, selKeyboardData, selPalette } from 'js/business/keyboard/selectors';
import Component from './component';


const mapStateToProps = state => ({
  keyboardData: selKeyboardData(state),
  palette: selPalette(state),
  showValues: selShowValues(state),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
