import React, { PropTypes } from 'react';
import { shuffle } from 'lodash';

import styles from './style.scss';
import { getColorFromPalette } from '../Display/services';

class Keyboard extends React.Component {
  constructor() {
    super();
    this.state = {
      initialKeys: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ],
    };

    this.state.keys = this.state.initialKeys.slice();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.randomize && !this.props.randomize) {
      this.setState(state => ({
        ...state,
        keys: shuffle(this.state.keys),
      }));
    } else if (!newProps.randomize && this.props.randomize) {
      this.setState(state => ({
        ...state,
        keys: this.state.initialKeys.slice(),
      }));
    }
  }

  getStyleFromKey(key) {
    return {
      backgroundColor: getColorFromPalette(this.props.palette, key),
    };
  }

  onKeyClick(key) {
    this.props.addChar(key);
  }

  render() {
    const {
      showValues,
    } = this.props;

    return (
      <div className={styles.container}>
        {
          this.state.keys.map(k =>
            <div
              className={styles.keyTouch}
              style={this.getStyleFromKey(k)}
              onClick={() => this.onKeyClick(k)}
              key={k}
            >
              {showValues && k}
            </div>
          )
        }
      </div>
    );
  }
}

Keyboard.propTypes = {
  addChar: PropTypes.func.isRequired,
  palette: PropTypes.object.isRequired,
  showValues: PropTypes.bool,
  randomize: PropTypes.bool,
};

export default Keyboard;
