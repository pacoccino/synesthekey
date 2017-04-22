import React, { PropTypes } from 'react';

import styles from './style.scss';
import { getColorFromPalette } from './services';

class Display extends React.Component {

  getStyleFromKey(key) {
    return {
      backgroundColor: getColorFromPalette(this.props.palette, key),
    };
  }

  render() {
    const {
      keyboardData,
      showValues,
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.colorsContainer}>
          {
            keyboardData.map((k, i) =>
              <div
                className={styles.displayChar}
                style={this.getStyleFromKey(k)}
                key={i}
              >
                {showValues && k}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

Display.propTypes = {
  keyboardData: PropTypes.array.isRequired,
  palette: PropTypes.object.isRequired,
  showValues: PropTypes.bool,
};

export default Display;
