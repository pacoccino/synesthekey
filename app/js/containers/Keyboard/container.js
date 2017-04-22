import { connect } from 'react-redux';

import { selRandomize, selShowValues, selPalette} from 'js/business/keyboard/selectors';
import { addChar } from 'js/business/keyboard/actions';
import Component from './component';


const mapStateToProps = state => ({
  palette: selPalette(state),
  showValues: selShowValues(state),
  randomize: selRandomize(state),
});

const mapDispatchToProps = {
  addChar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
