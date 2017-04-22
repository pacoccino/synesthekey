import React, { PropTypes } from 'react';
import { Field, propTypes } from 'redux-form';
import Input from 'js/components/ui/Input';

import styles from './style.scss';

class ExampleContainer extends React.Component {
  render() {
    const {
      d,
      goHome,
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <div className={styles.container}>
        {d}
        <button onClick={goHome}>Go Home</button>
        <form onSubmit={handleSubmit}>
          <Field
            name="v"
            component={Input}
            type="text"
            label="Input"
          />
          <button type="submit" disabled={pristine || submitting}>
            Set
          </button>
        </form>
      </div>
    );
  }
}

ExampleContainer.propTypes = {
  d: PropTypes.object,
  goHome: PropTypes.bool,
  ...propTypes,
};

export default ExampleContainer;
