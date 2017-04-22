import React, { PropTypes } from 'react';

import styles from './style.scss';
import { getColorFromPalette } from '../Display/services';
import Input from 'js/components/ui/Input';
import Button from 'js/components/ui/Button';

class Palette extends React.Component {
  getStyleFromKey(key) {
    return {
      backgroundColor: getColorFromPalette(this.props.palette, key),
    };
  }

  onPaletteChange(key) {
    return e => this.props.editKeyColor(key, e.target.value);
  }

  render() {
    const {
      palette,
      restoreDefaultPalette,
    } = this.props;

    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div className={styles.container}>
        {
          keys.map(k =>
            <div className={styles.line} key={k}>
              {k} :
              <div
                className={styles.keyTouch}
                style={this.getStyleFromKey(k)}
                onClick={() => this.onKeyClick(k)}
              />
              <Input
                type="text"
                input={{
                  value: palette[k],
                  onChange: ::this.onPaletteChange(k),
                }}
                meta={{}}
              />
            </div>
          )
        }
        <Button onClick={restoreDefaultPalette} label="Restore default palette" />
      </div>
    );
  }
}

Palette.propTypes = {
  palette: PropTypes.object.isRequired,
  editKeyColor: PropTypes.func.isRequired,
  restoreDefaultPalette: PropTypes.func.isRequired,
};

export default Palette;
