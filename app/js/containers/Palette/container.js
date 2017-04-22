import { connect } from 'react-redux';

import { selPalette } from 'js/business/keyboard/selectors';
import { editKeyColor, restoreDefaultPalette } from 'js/business/keyboard/actions';
import Component from './component';


const mapStateToProps = state => ({
  palette: selPalette(state),
});

const mapDispatchToProps = {
  editKeyColor,
  restoreDefaultPalette,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
