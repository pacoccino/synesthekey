import React, { Component } from 'react';

import styles from './style.scss';
import Keyboard from '../../../containers/Keyboard';
import Options from '../../../containers/Options';
import Display from '../../../containers/Display';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Keyboard />
        <Options />
        <Display />
      </div>
    );
  }
}

export default WelcomeScreen;
