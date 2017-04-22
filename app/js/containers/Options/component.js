import React, { PropTypes } from 'react';

import styles from './style.scss';
import Button from 'js/components/ui/Button';

class Options extends React.Component {
  render() {
    const {
      switchShowValues,
      switchRandomize,
      reset,
      showValues,
      randomize,
    } = this.props;

    return (
      <div className={styles.container}>
        <Button onClick={switchShowValues} label="Show/hide values" active={showValues} />
        <Button onClick={switchRandomize} label="Randomize keyboard" active={randomize} />
        <Button onClick={reset} label="Reset" />
      </div>
    );
  }
}

Options.propTypes = {
  reset: PropTypes.func.isRequired,
  switchShowValues: PropTypes.func.isRequired,
  switchRandomize: PropTypes.func.isRequired,
  showValues: PropTypes.bool,
  randomize: PropTypes.bool,
};

export default Options;
